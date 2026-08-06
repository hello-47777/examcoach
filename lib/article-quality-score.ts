import fs from 'fs';
import path from 'path';
import { scheduledArticles, WikiArticle } from './wiki-data';
import { getWikiArticles } from './wiki-server';

/**
 * Article SEO Quality Checker
 *
 * 自动检查文章 SEO 质量,生成评分和检查报告。
 * 只读取文件内容,不修改文章。
 */

export type CheckStatus = 'pass' | 'warn' | 'fail';

export interface CheckResult {
  label: string;
  status: CheckStatus;
  detail?: string;
}

export interface ArticleScore {
  /** 文章 URL */
  url: string;
  /** 文章 slug */
  slug: string;
  /** 文章标题 (来自 scheduledArticles 或推断) */
  title: string;
  /** SEO 总分 (0-100) */
  score: number;
  /** 各项检查结果 */
  checks: CheckResult[];
}

/** 读取文章 page.tsx 源码 */
function readArticleSource(url: string): string | null {
  // url: /wiki/guides/how-to-write-message-yki
  const relativePath = url.replace(/^\/wiki\//, '');
  const filePath = path.join(process.cwd(), 'app', 'wiki', relativePath, 'page.tsx');
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return null;
  }
}

/** 提取 metadata 中的 title / description / keywords */
function extractMetadata(source: string): {
  title?: string;
  description?: string;
  keywords?: string;
} {
  const result: { title?: string; description?: string; keywords?: string } = {};

  // title: '...' 或 title: "..."
  const titleMatch = source.match(/title:\s*['"`]([^'"`]+)['"`]/);
  if (titleMatch) result.title = titleMatch[1];

  const descMatch = source.match(/description:\s*['"`]([^'"`]+)['"`]/);
  if (descMatch) result.description = descMatch[1];

  const keywordsMatch = source.match(/keywords:\s*\[([^\]]+)\]/);
  if (keywordsMatch) result.keywords = keywordsMatch[1];

  return result;
}

/** 提取文章正文中的标题结构 */
function extractHeadings(source: string): { h1: string[]; h2: string[] } {
  const h1: string[] = [];
  const h2: string[] = [];

  // 匹配 <h1>...</h1> 和 <h2>...</h2>
  const h1Matches = source.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g);
  for (const m of h1Matches) {
    h1.push(m[1].replace(/<[^>]+>/g, '').trim());
  }

  const h2Matches = source.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g);
  for (const m of h2Matches) {
    h2.push(m[1].replace(/<[^>]+>/g, '').trim());
  }

  return { h1, h2 };
}

/** 检测 JSON-LD Schema */
function detectSchemas(source: string): { article: boolean; faq: boolean; breadcrumb: boolean } {
  return {
    article: source.includes('"@type": "Article"') || source.includes("@type\": \"Article") || source.includes("'@type': 'Article'"),
    faq: source.includes('"@type": "FAQPage"') || source.includes("@type\": \"FAQPage") || source.includes("'@type': 'FAQPage'"),
    breadcrumb: source.includes('"@type": "BreadcrumbList"') || source.includes('BreadcrumbList'),
  };
}

/** 检测内部链接 */
function countInternalLinks(source: string): number {
  // 匹配 <Link href="/wiki/..."> 或 href="/wiki/..."
  const linkMatches = source.match(/href=["'`{]\/wiki\/[^"'`}]+/g) || [];
  // 去重
  const uniqueLinks = new Set(linkMatches.map((m) => m.replace(/^href=["'`{]/, '')));
  return uniqueLinks.size;
}

/** 检测 FAQ section (heading 包含 FAQ 或 Q&A) */
function hasFAQSection(source: string): boolean {
  return /FAQ|Frequently Asked|Q&A|常见问题/i.test(source);
}

/** 检查主关键词在文章中的出现次数 */
function countKeywordInSource(source: string, keyword: string): number {
  const regex = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  const matches = source.match(regex) || [];
  return matches.length;
}

/**
 * 评估单篇文章的 SEO 质量
 */
export function scoreArticle(url: string): ArticleScore | null {
  const source = readArticleSource(url);
  if (!source) return null;

  // 查找文章元数据
  const metaMap = new Map(scheduledArticles.map((a) => [a.url, a]));
  const article = metaMap.get(url);
  const slug = url.split('/').pop() || '';
  const title = article?.title || slug;

  const checks: CheckResult[] = [];
  const metadata = extractMetadata(source);
  const headings = extractHeadings(source);
  const schemas = detectSchemas(source);
  const internalLinkCount = countInternalLinks(source);
  const hasFAQ = hasFAQSection(source);

  // 主关键词 (取 keywords 第一个, 或 title 中的关键短语)
  const primaryKeyword = article?.keywords?.[0] || '';

  // === 1. Primary Keyword 检查 ===
  if (primaryKeyword) {
    const inTitle = (metadata.title || '').toLowerCase().includes(primaryKeyword.toLowerCase());
    const inH1 = headings.h1.some((h) => h.toLowerCase().includes(primaryKeyword.toLowerCase()));
    const inDesc = (metadata.description || '').toLowerCase().includes(primaryKeyword.toLowerCase());
    const inBody = countKeywordInSource(source, primaryKeyword) > 0;

    if (inTitle && inH1 && inDesc && inBody) {
      checks.push({
        label: 'Keyword',
        status: 'pass',
        detail: `Primary keyword "${primaryKeyword}" found in title, H1, description, and body`,
      });
    } else {
      const missing: string[] = [];
      if (!inTitle) missing.push('title');
      if (!inH1) missing.push('H1');
      if (!inDesc) missing.push('description');
      if (!inBody) missing.push('body');
      checks.push({
        label: 'Keyword',
        status: missing.length >= 3 ? 'fail' : 'warn',
        detail: `Keyword "${primaryKeyword}" missing in: ${missing.join(', ')}`,
      });
    }
  } else {
    checks.push({
      label: 'Keyword',
      status: 'warn',
      detail: 'No primary keyword defined in scheduledArticles',
    });
  }

  // === 2. SEO Metadata 检查 ===
  const metaIssues: string[] = [];
  if (!metadata.title) metaIssues.push('title');
  if (!metadata.description) metaIssues.push('description');
  if (!article?.keywords || article.keywords.length === 0) metaIssues.push('keywords');

  if (metaIssues.length === 0) {
    checks.push({ label: 'Metadata', status: 'pass' });
  } else {
    checks.push({
      label: 'Metadata',
      status: metaIssues.length >= 2 ? 'fail' : 'warn',
      detail: `Missing: ${metaIssues.join(', ')}`,
    });
  }

  // === 3. 结构检查 ===
  const structureIssues: string[] = [];
  if (headings.h1.length === 0) structureIssues.push('H1');
  if (headings.h2.length === 0) structureIssues.push('H2');
  if (!hasFAQ) structureIssues.push('FAQ');

  if (structureIssues.length === 0) {
    checks.push({ label: 'Structure', status: 'pass' });
  } else {
    checks.push({
      label: 'Structure',
      status: structureIssues.length >= 2 ? 'warn' : 'pass',
      detail: `Missing: ${structureIssues.join(', ')}`,
    });
  }

  // === 4. JSON-LD Schema 检查 ===
  const schemaIssues: string[] = [];
  if (!schemas.article) schemaIssues.push('Article');
  if (!schemas.faq) schemaIssues.push('FAQ');

  if (schemaIssues.length === 0) {
    checks.push({ label: 'Schema', status: 'pass' });
  } else {
    checks.push({
      label: 'Schema',
      status: schemaIssues.length >= 2 ? 'warn' : 'pass',
      detail: `Missing: ${schemaIssues.join(', ')}`,
    });
  }

  // === 5. 内部链接检查 ===
  if (internalLinkCount >= 2) {
    checks.push({
      label: 'Internal Links',
      status: 'pass',
      detail: `${internalLinkCount} internal links found`,
    });
  } else if (internalLinkCount === 1) {
    checks.push({
      label: 'Internal Links',
      status: 'warn',
      detail: 'Only 1 internal link (recommend 2+)',
    });
  } else {
    checks.push({
      label: 'Internal Links',
      status: 'fail',
      detail: 'No internal links found',
    });
  }

  // === 6. Topic 绑定检查 ===
  if (article?.topic) {
    checks.push({
      label: 'Topic',
      status: 'pass',
      detail: `Topic: ${article.topic}`,
    });
  } else {
    checks.push({
      label: 'Topic',
      status: 'warn',
      detail: 'No topic assigned',
    });
  }

  // === 计算总分 ===
  const weights: Record<string, number> = {
    Keyword: 20,
    Metadata: 20,
    Structure: 15,
    Schema: 15,
    'Internal Links': 15,
    Topic: 15,
  };

  const statusScores: Record<CheckStatus, number> = {
    pass: 1,
    warn: 0.5,
    fail: 0,
  };

  let totalScore = 0;
  for (const check of checks) {
    const weight = weights[check.label] || 0;
    totalScore += weight * statusScores[check.status];
  }

  return {
    url,
    slug,
    title,
    score: Math.round(totalScore),
    checks,
  };
}

/**
 * 评估所有已发布文章
 */
export function scoreAllArticles(): ArticleScore[] {
  const articles = getWikiArticles();
  const results: ArticleScore[] = [];

  for (const article of articles) {
    const score = scoreArticle(article.url);
    if (score) results.push(score);
  }

  // 按分数升序 (低分在前,便于发现问题)
  results.sort((a, b) => a.score - b.score);
  return results;
}

/** 统计整体质量分布 */
export function getQualitySummary(scores: ArticleScore[]): {
  average: number;
  excellent: number; // >= 90
  good: number; // 70-89
  needsWork: number; // < 70
} {
  if (scores.length === 0) {
    return { average: 0, excellent: 0, good: 0, needsWork: 0 };
  }
  const total = scores.reduce((sum, s) => sum + s.score, 0);
  return {
    average: Math.round(total / scores.length),
    excellent: scores.filter((s) => s.score >= 90).length,
    good: scores.filter((s) => s.score >= 70 && s.score < 90).length,
    needsWork: scores.filter((s) => s.score < 70).length,
  };
}
