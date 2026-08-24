import { headers } from 'next/headers';
import { scheduledArticles } from '@/lib/wiki-data';

/**
 * Article JSON-LD Schema (Server Component)
 *
 * 基于现有 scheduledArticles 数据生成 Article schema,
 * 由 app/wiki/layout.tsx 统一注入,无需修改各文章 page.tsx。
 *
 * 路由获取: 通过 middleware.ts 设置的 x-pathname 请求头
 * (因 Server Component layout 无法直接访问 pathname)。
 *
 * 仅 /wiki/<category>/<slug> 文章页生成 schema;
 * /wiki 首页或非文章页返回 null。
 *
 * 初始 HTML 即包含 JSON-LD (Server Component SSR 输出)。
 */
const SITE_HOST = 'https://examcoach.ca';

export default async function ArticleSchema() {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';

  // 仅处理 /wiki/<category>/<slug> 三段路径
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length !== 3 || segments[0] !== 'wiki') {
    return null;
  }

  // 查找文章元数据
  const article = scheduledArticles.find((a) => a.url === pathname);
  if (!article) {
    // 未在 scheduledArticles 登记的文章 (历史文章) 不生成 Article schema
    return null;
  }

  // description: scheduledArticles 无 description 字段,基于 title + keywords 构造
  const keywordPhrase = article.keywords && article.keywords.length > 0
    ? article.keywords.slice(0, 3).join(', ')
    : '';
  const description = [
    article.title || 'YKI writing guide',
    keywordPhrase,
    'YKI writing guide for B1-B2 Finnish exam preparation.',
  ].filter(Boolean).join('. ');

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title || article.slug,
    description,
    author: {
      '@type': 'Organization',
      name: 'ExamCoach AI Team',
      url: 'https://examcoach.ca/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ExamCoach AI Team',
      url: 'https://examcoach.ca',
    },
    datePublished: article.date,
    dateModified: article.updatedAt || article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_HOST}${article.url}`,
    },
    url: `${SITE_HOST}${article.url}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c'),
      }}
    />
  );
}
