import fs from 'fs';
import path from 'path';

const DRAFTS_DIR = path.join(process.cwd(), 'app', '_drafts');
const WIKI_DIR = path.join(process.cwd(), 'app', 'wiki');

export interface Article {
  category: string;
  slug: string;
  url: string;
  source: 'static' | 'draft';
  date?: string;
}

/**
 * 获取当前北京时间 (Asia/Shanghai)
 */
function getBeijingNow(): Date {
  const now = new Date();
  const beijingTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
  return beijingTime;
}

/**
 * 解析文件夹名 "YYYY.M.D" 为 Date 对象 (按北京时间)
 */
function parseFolderDate(folderName: string): Date | null {
  const parts = folderName.split('.');
  if (parts.length !== 3) return null;
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);
  if (!year || !month || !day) return null;
  if (isNaN(year) || isNaN(month) || isNaN(day)) return null;
  // 构造北京时间的 00:00 (UTC+8)
  return new Date(Date.UTC(year, month - 1, day, -8, 0, 0));
}

/**
 * 判断日期文件夹是否已到发布时间
 */
function isPublished(folderName: string, now: Date): boolean {
  const folderDate = parseFolderDate(folderName);
  if (!folderDate) return false;
  return folderDate <= now;
}

/**
 * 扫描 app/wiki/ 目录下所有已存在的静态文章
 */
function readStaticArticles(): Article[] {
  if (!fs.existsSync(WIKI_DIR)) return [];
  const articles: Article[] = [];
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
          source: 'static',
        });
      }
    }
  }
  return articles;
}

/**
 * 读取 _drafts/ 下所有已到发布时间的草稿文章
 */
function readPublishedDrafts(): Article[] {
  if (!fs.existsSync(DRAFTS_DIR)) return [];
  const now = getBeijingNow();
  const articles: Article[] = [];

  const dateFolders = fs.readdirSync(DRAFTS_DIR);
  for (const dateFolder of dateFolders) {
    const folderPath = path.join(DRAFTS_DIR, dateFolder);
    if (!fs.statSync(folderPath).isDirectory()) continue;
    if (!isPublished(dateFolder, now)) continue;

    // 读取 category 子目录
    const categoryFolders = fs.readdirSync(folderPath);
    for (const category of categoryFolders) {
      const categoryPath = path.join(folderPath, category);
      if (!fs.statSync(categoryPath).isDirectory()) continue;

      // 读取 .tsx 文件
      const files = fs.readdirSync(categoryPath);
      for (const file of files) {
        if (!file.endsWith('.tsx')) continue;
        const slug = file.replace(/\.tsx$/, '');
        articles.push({
          category,
          slug,
          url: `/wiki/${category}/${slug}`,
          source: 'draft',
          date: dateFolder,
        });
      }
    }
  }
  return articles;
}

/**
 * 获取所有已发布的文章 (静态 + 已到日期的草稿)
 * 用于 sitemap 生成
 */
export function getPublishedArticles(): Article[] {
  const staticArticles = readStaticArticles();
  const draftArticles = readPublishedDrafts();

  // 合并去重 (draft 覆盖 static,以最新为准)
  const articleMap = new Map<string, Article>();
  for (const a of staticArticles) articleMap.set(a.url, a);
  for (const a of draftArticles) articleMap.set(a.url, a);

  return Array.from(articleMap.values());
}
