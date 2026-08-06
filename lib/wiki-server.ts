import fs from 'fs';
import path from 'path';
import { scheduledArticles, WikiArticle } from './wiki-data';

/**
 * Wiki 服务端函数 - 文件系统操作
 *
 * 此文件使用 Node.js API (fs/path),只能在 Server Component / Route Handler / Server Action 中使用。
 * Client Component 禁止导入此文件。
 */

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
          date: '2000-01-01',
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

  const scheduledMap = new Map(scheduledArticles.map((a) => [a.url, a.date]));

  const published = allArticles.filter((article) => {
    const scheduledDate = scheduledMap.get(article.url);
    if (scheduledDate) {
      const publishDate = new Date(scheduledDate + 'T00:00:00+08:00');
      return publishDate <= now;
    }
    return true;
  });

  return published;
}
