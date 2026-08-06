import { scheduledArticles, WikiArticle } from './wiki-data';
import { getWikiArticles } from './wiki-server';

/**
 * Wiki 搜索与相关文章推荐
 *
 * 数据来源: lib/wiki-data.ts
 * 遵循时间锁: 排期未到的文章不返回,避免 404 链接
 */

/**
 * 获取所有已发布文章 (合并 scheduledArticles 元数据 + 文件系统扫描的已发布文章)
 * 用于搜索和推荐,确保只返回已发布且真实存在的文章
 */
function getPublishedArticlesWithMeta(): WikiArticle[] {
  // 从文件系统获取已发布文章 (已过时间锁)
  const published = getWikiArticles();

  // 构建 URL → scheduledArticle 元数据映射
  const metaMap = new Map(scheduledArticles.map((a) => [a.url, a]));

  // 合并: 文件系统存在的文章 + scheduledArticles 中的 title/keywords/topic
  return published.map((article) => {
    const meta = metaMap.get(article.url);
    return {
      ...article,
      title: meta?.title || formatSlugAsTitle(article.slug),
      keywords: meta?.keywords || [],
      topic: meta?.topic || article.category,
      date: meta?.date || article.date,
      updatedAt: meta?.updatedAt,
    };
  });
}

/** 将 slug 格式化为可读标题 (how-to-write -> How to Write) */
function formatSlugAsTitle(slug: string): string {
  const minorWords = new Set(['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by', 'of', 'in']);
  const words = slug.split('-');
  return words
    .map((word, i) => {
      if (i > 0 && i < words.length - 1 && minorWords.has(word)) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

export interface SearchResult {
  title: string;
  url: string;
  category: string;
  topic?: string;
  snippet: string;
  score: number;
}

/**
 * 全站 Wiki 搜索
 *
 * 搜索字段: title / keywords / category / topic
 * 排序: 按相关度 score 降序
 *
 * @param query 用户输入 (如 "YKI email")
 * @returns 匹配的已发布文章列表
 */
export function searchArticles(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const articles = getPublishedArticlesWithMeta();
  const queryTokens = q.split(/\s+/).filter(Boolean);

  const results: SearchResult[] = [];

  for (const article of articles) {
    const title = (article.title || '').toLowerCase();
    const keywords = (article.keywords || []).join(' ').toLowerCase();
    const category = article.category.toLowerCase();
    const topic = (article.topic || '').toLowerCase();
    const slug = article.slug.toLowerCase();

    let score = 0;
    let matched = false;

    for (const token of queryTokens) {
      // title 权重最高
      if (title.includes(token)) {
        score += 10;
        // 标题以 token 开头额外加分
        if (title.startsWith(token)) score += 5;
        matched = true;
      }
      // keywords 权重次之
      if (keywords.includes(token)) {
        score += 6;
        matched = true;
      }
      // topic 精确匹配
      if (topic === token || topic.includes(token)) {
        score += 4;
        matched = true;
      }
      // category 匹配
      if (category.includes(token)) {
        score += 3;
        matched = true;
      }
      // slug 兜底匹配
      if (slug.includes(token)) {
        score += 2;
        matched = true;
      }
    }

    if (matched) {
      results.push({
        title: article.title || formatSlugAsTitle(article.slug),
        url: article.url,
        category: article.category,
        topic: article.topic,
        snippet: buildSnippet(article, queryTokens),
        score,
      });
    }
  }

  // 按分数降序
  results.sort((a, b) => b.score - a.score);
  return results;
}

/** 构建搜索结果摘要 */
function buildSnippet(article: WikiArticle, queryTokens: string[]): string {
  const parts: string[] = [];
  if (article.keywords && article.keywords.length > 0) {
    parts.push(`Keywords: ${article.keywords.slice(0, 5).join(', ')}`);
  }
  if (article.topic) {
    parts.push(`Topic: ${article.topic.replace(/-/g, ' ')}`);
  }
  parts.push(`Category: ${article.category}`);
  return parts.join(' · ');
}

export interface RelatedArticle {
  title: string;
  url: string;
  category: string;
  reason: string;
}

/**
 * 获取相关文章推荐
 *
 * 规则:
 *   1. 优先: 相同 topic (排除自身)
 *   2. 次选: 相同 category (排除自身和已选的相同 topic 文章)
 *   3. 显示: 最多 3 篇
 *
 * @param currentUrl 当前文章 URL (如 /wiki/guides/how-to-write-message-yki)
 * @returns 相关文章列表 (最多 3 篇,所有 URL 都来自已发布文章,避免 404)
 */
export function getRelatedArticles(currentUrl: string): RelatedArticle[] {
  const articles = getPublishedArticlesWithMeta();
  const current = articles.find((a) => a.url === currentUrl);

  if (!current) return [];

  const related: RelatedArticle[] = [];
  const selectedUrls = new Set<string>([currentUrl]);

  // 1. 优先: 相同 topic
  if (current.topic) {
    const sameTopic = articles.filter(
      (a) => a.topic === current.topic && !selectedUrls.has(a.url)
    );
    for (const a of sameTopic) {
      if (related.length >= 3) break;
      related.push({
        title: a.title || formatSlugAsTitle(a.slug),
        url: a.url,
        category: a.category,
        reason: 'Same topic',
      });
      selectedUrls.add(a.url);
    }
  }

  // 2. 次选: 相同 category
  if (related.length < 3) {
    const sameCategory = articles.filter(
      (a) => a.category === current.category && !selectedUrls.has(a.url)
    );
    for (const a of sameCategory) {
      if (related.length >= 3) break;
      related.push({
        title: a.title || formatSlugAsTitle(a.slug),
        url: a.url,
        category: a.category,
        reason: 'Same category',
      });
      selectedUrls.add(a.url);
    }
  }

  return related;
}
