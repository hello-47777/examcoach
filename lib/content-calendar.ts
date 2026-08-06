import fs from 'fs';
import path from 'path';

/**
 * Content Calendar 数据层
 *
 * 扫描 _drafts/ 下的日期文件夹 (YYYY.M.D 格式),
 * 识别文章状态: FUTURE / READY / PUBLISHED
 *
 * 规则:
 * - 日期 > 当前北京时间: FUTURE
 * - 日期 = 当前北京时间: READY
 * - 已进入 app/wiki/ (已发布): PUBLISHED
 */

export type ArticleStatus = 'FUTURE' | 'READY' | 'PUBLISHED';

export interface CalendarEntry {
  /** 日期字符串 YYYY.M.D (来自文件夹名) */
  dateFolder: string;
  /** 标准化日期 YYYY-MM-DD */
  dateISO: string;
  /** 文章文件名 (不含扩展名) */
  articleName: string;
  /** 推断的分类 */
  category: string;
  /** 状态 */
  status: ArticleStatus;
}

/** 获取当前北京时间日期 (YYYY-MM-DD) */
function getBeijingToday(): string {
  const now = new Date();
  const beijing = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
  const yyyy = beijing.getFullYear();
  const mm = String(beijing.getMonth() + 1).padStart(2, '0');
  const dd = String(beijing.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

/** 将 YYYY.M.D 转为 YYYY-MM-DD */
function normalizeDate(folderName: string): string {
  const parts = folderName.split('.');
  if (parts.length !== 3) return '1970-01-01';
  const [yyyy, m, d] = parts.map(Number);
  return `${yyyy}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

/** 从文章 slug 推断分类 (基于 wiki 目录结构) */
function inferCategory(slug: string): string {
  const publishedMap = getPublishedSlugsMap();
  return publishedMap.get(slug) || 'unknown';
}

/** 扫描 app/wiki/ 已发布文章 slug → category 映射 */
function getPublishedSlugsMap(): Map<string, string> {
  const map = new Map<string, string>();
  const wikiDir = path.join(process.cwd(), 'app', 'wiki');
  if (!fs.existsSync(wikiDir)) return map;

  try {
    const categories = fs.readdirSync(wikiDir);
    for (const category of categories) {
      const categoryPath = path.join(wikiDir, category);
      if (!fs.statSync(categoryPath).isDirectory()) continue;
      const slugs = fs.readdirSync(categoryPath);
      for (const slug of slugs) {
        const slugDir = path.join(categoryPath, slug);
        if (fs.statSync(slugDir).isDirectory()) {
          map.set(slug, category);
        }
      }
    }
  } catch {
    // ignore
  }
  return map;
}

/** 扫描 _drafts/ 下所有日期文件夹 */
function scanDraftsFolders(): { folder: string; files: string[] }[] {
  const draftsDir = path.join(process.cwd(), '_drafts');
  if (!fs.existsSync(draftsDir)) return [];

  const result: { folder: string; files: string[] }[] = [];
  const entries = fs.readdirSync(draftsDir);

  for (const entry of entries) {
    const entryPath = path.join(draftsDir, entry);
    if (!fs.statSync(entryPath).isDirectory()) continue;
    // 必须是 YYYY.M.D 格式 (3 段数字)
    const parts = entry.split('.');
    if (parts.length !== 3 || !parts.every((p) => /^\d+$/.test(p))) continue;

    const files = fs
      .readdirSync(entryPath)
      .filter((f) => f.endsWith('.tsx') || f.endsWith('.ts'))
      .map((f) => f.replace(/\.tsx?$/, ''));

    if (files.length > 0) {
      result.push({ folder: entry, files });
    }
  }

  // 按日期升序
  result.sort((a, b) => normalizeDate(a.folder).localeCompare(normalizeDate(b.folder)));
  return result;
}

/**
 * 获取 Content Calendar 全部条目
 */
export function getCalendarEntries(): CalendarEntry[] {
  const today = getBeijingToday();
  const folders = scanDraftsFolders();
  const entries: CalendarEntry[] = [];

  for (const { folder, files } of folders) {
    const dateISO = normalizeDate(folder);
    for (const file of files) {
      const category = inferCategory(file);
      let status: ArticleStatus;

      if (category !== 'unknown') {
        status = 'PUBLISHED';
      } else if (dateISO === today) {
        status = 'READY';
      } else if (dateISO > today) {
        status = 'FUTURE';
      } else {
        // 日期已过但未在 app/wiki/ 中找到,视为 READY (待发布)
        status = 'READY';
      }

      entries.push({
        dateFolder: folder,
        dateISO,
        articleName: file,
        category,
        status,
      });
    }
  }

  return entries;
}
