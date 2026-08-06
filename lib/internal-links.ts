import { scheduledArticles, WikiArticle } from './wiki-data';
import { getWikiArticles } from './wiki-server';
import { topicMetas } from './topics';

/**
 * 内部链接自动推荐辅助函数
 *
 * 根据 topic / category / keyword 自动返回推荐文章。
 *
 * 安全保证:
 * - 所有返回的 URL 都来自 getWikiArticles() (已过时间锁 + 文件系统扫描)
 * - 绝不返回 scheduledArticles 中未到发布日期的文章
 * - 绝不生成不存在的 URL
 *
 * 用途:
 * - 在文章正文中自动插入内部链接
 * - 在 Topic Hub 页面推荐相关文章
 * - 在 search 结果中展示关联内容
 */

export interface InternalLink {
  title: string;
  url: string;
  category: string;
  topic?: string;
  reason: string;
}

/** 获取已发布文章 + 合并 scheduledArticles 元数据 */
function getPublishedArticlesWithMeta(): WikiArticle[] {
  const published = getWikiArticles();
  const metaMap = new Map(scheduledArticles.map((a) => [a.url, a]));
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

/** slug → Title */
function formatSlugAsTitle(slug: string): string {
  const minorWords = new Set(['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by', 'of', 'in']);
  const words = slug.split('-');
  return words
    .map((word, i) => {
      if (i > 0 && i < words.length - 1 && minorWords.has(word)) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

/**
 * 根据 topic 获取相关文章
 *
 * @param topic 内部 topic 值 (如 'message-writing')
 * @param excludeUrl 排除的 URL (通常是当前文章自身)
 * @param limit 最多返回数量 (默认 5)
 */
export function getLinksByTopic(
  topic: string,
  excludeUrl?: string,
  limit = 5
): InternalLink[] {
  const articles = getPublishedArticlesWithMeta();
  return articles
    .filter((a) => a.topic === topic && a.url !== excludeUrl)
    .slice(0, limit)
    .map((a) => ({
      title: a.title || formatSlugAsTitle(a.slug),
      url: a.url,
      category: a.category,
      topic: a.topic,
      reason: `Same topic: ${topic}`,
    }));
}

/**
 * 根据 category 获取相关文章
 *
 * @param category 分类名 (如 'guides')
 * @param excludeUrl 排除的 URL
 * @param limit 最多返回数量 (默认 5)
 */
export function getLinksByCategory(
  category: string,
  excludeUrl?: string,
  limit = 5
): InternalLink[] {
  const articles = getPublishedArticlesWithMeta();
  return articles
    .filter((a) => a.category === category && a.url !== excludeUrl)
    .slice(0, limit)
    .map((a) => ({
      title: a.title || formatSlugAsTitle(a.slug),
      url: a.url,
      category: a.category,
      topic: a.topic,
      reason: `Same category: ${category}`,
    }));
}

/**
 * 根据 keyword 获取相关文章
 *
 * @param keyword 关键词 (如 'email')
 * @param excludeUrl 排除的 URL
 * @param limit 最多返回数量 (默认 5)
 */
export function getLinksByKeyword(
  keyword: string,
  excludeUrl?: string,
  limit = 5
): InternalLink[] {
  const articles = getPublishedArticlesWithMeta();
  const kw = keyword.toLowerCase().trim();
  if (!kw) return [];

  return articles
    .filter((a) => {
      if (a.url === excludeUrl) return false;
      const keywords = (a.keywords || []).map((k) => k.toLowerCase());
      const title = (a.title || '').toLowerCase();
      const slug = a.slug.toLowerCase();
      return (
        keywords.some((k) => k.includes(kw)) ||
        title.includes(kw) ||
        slug.includes(kw)
      );
    })
    .slice(0, limit)
    .map((a) => ({
      title: a.title || formatSlugAsTitle(a.slug),
      url: a.url,
      category: a.category,
      topic: a.topic,
      reason: `Matches keyword: ${keyword}`,
    }));
}

/**
 * 综合推荐: 根据 topic + category + keywords 自动返回推荐文章
 *
 * 优先级:
 *   1. 相同 topic 的文章
 *   2. 相同 category 的文章
 *   3. keywords 匹配的文章
 *
 * 自动去重,所有 URL 已验证存在 (来自 getWikiArticles)
 *
 * @param currentUrl 当前文章 URL
 * @param limit 最多返回数量 (默认 3)
 */
export function getRecommendedInternalLinks(
  currentUrl: string,
  limit = 3
): InternalLink[] {
  const articles = getPublishedArticlesWithMeta();
  const current = articles.find((a) => a.url === currentUrl);

  if (!current) return [];

  const result: InternalLink[] = [];
  const seenUrls = new Set<string>([currentUrl]);

  // 1. 相同 topic
  if (current.topic) {
    for (const a of articles) {
      if (result.length >= limit) break;
      if (a.topic === current.topic && !seenUrls.has(a.url)) {
        result.push({
          title: a.title || formatSlugAsTitle(a.slug),
          url: a.url,
          category: a.category,
          topic: a.topic,
          reason: 'Same topic',
        });
        seenUrls.add(a.url);
      }
    }
  }

  // 2. 相同 category
  if (result.length < limit) {
    for (const a of articles) {
      if (result.length >= limit) break;
      if (a.category === current.category && !seenUrls.has(a.url)) {
        result.push({
          title: a.title || formatSlugAsTitle(a.slug),
          url: a.url,
          category: a.category,
          topic: a.topic,
          reason: 'Same category',
        });
        seenUrls.add(a.url);
      }
    }
  }

  // 3. keyword 匹配
  if (result.length < limit && current.keywords && current.keywords.length > 0) {
    for (const a of articles) {
      if (result.length >= limit) break;
      if (seenUrls.has(a.url)) continue;
      const aKeywords = (a.keywords || []).map((k) => k.toLowerCase());
      const hasOverlap = current.keywords.some((k) =>
        aKeywords.includes(k.toLowerCase())
      );
      if (hasOverlap) {
        result.push({
          title: a.title || formatSlugAsTitle(a.slug),
          url: a.url,
          category: a.category,
          topic: a.topic,
          reason: 'Shared keywords',
        });
        seenUrls.add(a.url);
      }
    }
  }

  return result;
}

/**
 * 验证 URL 是否为已发布的真实文章
 * 用于在插入内部链接前做安全检查,避免 404
 *
 * @param url 文章 URL (如 '/wiki/guides/how-to-write-message-yki')
 */
export function isValidInternalUrl(url: string): boolean {
  const articles = getPublishedArticlesWithMeta();
  return articles.some((a) => a.url === url);
}

/**
 * 获取 Topic Hub 页面 URL
 * 根据内部 topic 值返回对应的 /topics/[slug] URL
 *
 * @param topic 内部 topic 值 (如 'message-writing')
 * @returns Topic Hub URL (如 '/topics/yki-email-writing'), 未找到返回 null
 */
export function getTopicHubUrl(topic: string): string | null {
  const topicMeta = topicMetas.find((t) => t.topic === topic);
  return topicMeta ? `/topics/${topicMeta.slug}` : null;
}

/**
 * 获取所有 Topic Hub 页面 URL (用于 sitemap 和导航)
 */
export function getAllTopicHubUrls(): string[] {
  return topicMetas.map((t) => `/topics/${t.slug}`);
}
