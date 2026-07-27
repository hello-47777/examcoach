import fs from 'fs';
import path from 'path';

export interface WikiArticle {
  slug: string;
  category: string;
  url: string;
  date: string; // YYYY-MM-DD
}

/**
 * 排期文章列表 (手动维护)
 * 新文章在此登记,配合时间锁实现按日期自动发布
 * date 字段为发布日期 (北京时间)
 */
export const scheduledArticles: WikiArticle[] = [
  { slug: 'how-to-write-an-opinion-text-in-finnish', category: 'guides', url: '/wiki/guides/how-to-write-an-opinion-text-in-finnish', date: '2026-07-28' },
  { slug: 'yki-opinion-essay-structure', category: 'guides', url: '/wiki/guides/yki-opinion-essay-structure', date: '2026-07-28' },
  { slug: 'yki-opinion-essay-templates', category: 'templates', url: '/wiki/templates/yki-opinion-essay-templates', date: '2026-07-29' },
  { slug: 'yki-opinion-writing-examples', category: 'essays', url: '/wiki/essays/yki-opinion-writing-examples', date: '2026-07-29' },
  { slug: 'finnish-opinion-writing-phrases', category: 'templates', url: '/wiki/templates/finnish-opinion-writing-phrases', date: '2026-07-30' },
  { slug: 'yki-opinion-writing-scoring', category: 'scoring', url: '/wiki/scoring/yki-opinion-writing-scoring', date: '2026-07-30' },
  { slug: 'common-yki-opinion-writing-mistakes', category: 'guides', url: '/wiki/guides/common-yki-opinion-writing-mistakes', date: '2026-07-31' },
  { slug: 'yki-b1-vocabulary-list-writing-test', category: 'templates', url: '/wiki/templates/yki-b1-vocabulary-list-writing-test', date: '2026-07-31' },
  { slug: 'finnish-connectors-for-writing', category: 'templates', url: '/wiki/templates/finnish-connectors-for-writing', date: '2026-08-01' },
  { slug: 'yki-b2-vocabulary-list-advanced-finnish-words', category: 'templates', url: '/wiki/templates/yki-b2-vocabulary-list-advanced-finnish-words', date: '2026-08-01' },
  { slug: 'common-finnish-writing-errors-yki-students', category: 'guides', url: '/wiki/guides/common-finnish-writing-errors-yki-students', date: '2026-08-02' },
  { slug: 'finnish-writing-transition-words-yki-exam', category: 'templates', url: '/wiki/templates/finnish-writing-transition-words-yki-exam', date: '2026-08-02' },
  { slug: 'ai-yki-writing-checker', category: 'guides', url: '/wiki/guides/ai-yki-writing-checker', date: '2026-08-03' },
  { slug: 'how-to-improve-finnish-writing-skills-yki-test', category: 'guides', url: '/wiki/guides/how-to-improve-finnish-writing-skills-yki-test', date: '2026-08-03' },
];

/**
 * 获取当前北京时间 (Asia/Shanghai, UTC+8)
 */
function getBeijingNow(): Date {
  const now = new Date();
  return new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
}

/**
 * 扫描 app/wiki/ 目录下所有 page.tsx 文章
 */
function scanWikiArticles(): WikiArticle[] {
  const WIKI_DIR = path.join(process.cwd(), 'app', 'wiki');
  if (!fs.existsSync(WIKI_DIR)) return [];
  const articles: WikiArticle[] = [];
  const categories = fs.readdirSync(WIKI_DIR);

  for (const category of categories) {
    const categoryPath = path.join(WIKI_DIR, category);
    if (!fs.statSync(categoryPath).isDirectory()) continue;

    const slugs = fs.readdirSync(categoryPath);
    for (const slug of slugs) {
      const slugDir = path.join(categoryPath, slug);
      if (!fs.statSync(slugDir).isDirectory()) continue;
      const pageFile = path.join(slugDir, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        articles.push({
          category,
          slug,
          url: `/wiki/${category}/${slug}`,
          date: '2000-01-01', // 默认过去日期 (已发布)
        });
      }
    }
  }
  return articles;
}

/**
 * 获取所有已发布文章 (现有文章 + 已到日期的排期文章)
 * 时间锁:排期文章未到日期的不返回 (用于 sitemap 和列表)
 */
export function getWikiArticles(): WikiArticle[] {
  const now = getBeijingNow();
  const allArticles = scanWikiArticles();

  // 构建 URL → 排期日期 映射
  const scheduledMap = new Map(scheduledArticles.map((a) => [a.url, a.date]));

  // 过滤:排期文章未到日期的排除
  const published = allArticles.filter((article) => {
    const scheduledDate = scheduledMap.get(article.url);
    if (scheduledDate) {
      // 排期文章 - 检查日期
      const publishDate = new Date(scheduledDate + 'T00:00:00+08:00');
      return publishDate <= now;
    }
    // 非排期文章 (现有文章) - 始终发布
    return true;
  });

  return published;
}
