import type { Metadata } from 'next';
import { scheduledArticles } from './wiki-data';

/**
 * Wiki 文章 metadata 辅助函数
 *
 * 统一处理:
 * - keywords: 自动从 scheduledArticles 读取 (TASK 5, 避免手动维护)
 * - canonical: 绝对 URL (TASK 6, 禁止相对路径)
 * - openGraph: 由 app/wiki/layout.tsx 统一注入 (TASK 7, 不在 page.tsx 单独写)
 *
 * 用法 (在每个 page.tsx 中):
 *   export const metadata = generateWikiMetadata('guides', 'slug', {
 *     title: 'YKI Writing: ...',
 *     description: '...',
 *   });
 *
 * 若文章不在 scheduledArticles 中, 可传入 keywords 作为 fallback (TASK 5: 保持原 metadata)。
 */
const SITE_HOST = 'https://examcoach.ca';

export function generateWikiMetadata(
  category: string,
  slug: string,
  overrides: {
    title: string;
    description: string;
    keywords?: string[];
  }
): Metadata {
  const url = `/wiki/${category}/${slug}`;
  const article = scheduledArticles.find((a) => a.url === url);

  return {
    title: overrides.title,
    description: overrides.description,
    // 优先从 scheduledArticles 读取; 不存在时用 overrides.keywords (保持原 metadata)
    keywords: article?.keywords || overrides.keywords,
    alternates: {
      canonical: `${SITE_HOST}${url}`,
    },
    // openGraph 不在此设置, 由 app/wiki/layout.tsx 统一注入 type:'article'
  };
}
