'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { scheduledArticles } from '@/lib/wiki-data';

/**
 * 文章元信息组件 (Breadcrumb + 发布/更新时间 + BreadcrumbList JSON-LD)
 *
 * 通过 wiki layout 自动注入到所有 /wiki/* 页面:
 * - /wiki: 仅显示 Home > Wiki 面包屑
 * - /wiki/[category]/[slug]: 显示完整面包屑 + Published/Last Updated
 *
 * 日期数据来源: lib/wiki-data.ts 的 scheduledArticles
 * updatedAt 缺省时回退到 date
 */

const SITE_HOST = 'https://examcoach.ca';

const categoryNames: Record<string, string> = {
  guides: 'Guides',
  templates: 'Templates',
  essays: 'Essays',
  emails: 'Emails',
  scoring: 'Scoring',
  examples: 'Examples',
};

/** 小词集合 (title case 时不大写) */
const MINOR_WORDS = new Set([
  'a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by', 'of', 'in',
]);

/** 将 slug 格式化为标题 (how-to-write -> How to Write) */
function formatSlugAsTitle(slug: string): string {
  const words = slug.split('-');
  return words
    .map((word, i) => {
      if (i > 0 && i < words.length - 1 && MINOR_WORDS.has(word)) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

/** YYYY-MM-DD -> July 20, 2026 */
function formatDate(dateStr: string): string {
  const [yyyy, mm, dd] = dateStr.split('-').map(Number);
  if (!yyyy || !mm || !dd) return dateStr;
  const date = new Date(Date.UTC(yyyy, mm - 1, dd));
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

interface BreadcrumbItem {
  name: string;
  path: string;
  url: string;
}

export default function ArticleMeta() {
  const pathname = usePathname() || '';
  const segments = pathname.split('/').filter(Boolean);

  // 只处理 /wiki/* 路径
  const isWiki = segments[0] === 'wiki';
  if (!isWiki) return null;

  const isWikiIndex = segments.length === 1;
  const isArticlePage = segments.length === 3;
  const category = segments[1] || '';
  const slug = segments[2] || '';

  // 查找文章数据
  const article = isArticlePage
    ? scheduledArticles.find((a) => a.url === pathname)
    : null;

  const categoryName = category
    ? categoryNames[category] || category.charAt(0).toUpperCase() + category.slice(1)
    : '';
  const articleTitle = slug ? formatSlugAsTitle(slug) : '';

  // 构建 Breadcrumb 项
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: 'ExamCoach.ai', path: '/', url: SITE_HOST },
    { name: 'Wiki', path: '/wiki', url: `${SITE_HOST}/wiki` },
  ];

  if (!isWikiIndex && category) {
    // Category 无独立列表页,指向 /wiki 作为最接近的页面
    breadcrumbItems.push({
      name: categoryName,
      path: '/wiki',
      url: `${SITE_HOST}/wiki`,
    });
  }

  if (isArticlePage) {
    breadcrumbItems.push({
      name: articleTitle,
      path: pathname,
      url: `${SITE_HOST}${pathname}`,
    });
  }

  // BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  // 发布/更新日期 (仅文章页且找到文章数据时显示)
  const publishedDate = article?.date;
  const lastUpdatedDate = article?.updatedAt || article?.date;

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
            {breadcrumbItems.map((item, i) => {
              const isLast = i === breadcrumbItems.length - 1;
              return (
                <li key={`${item.url}-${i}`} className="flex items-center gap-1">
                  {i > 0 && <span className="text-gray-400 mx-1" aria-hidden="true">›</span>}
                  {isLast ? (
                    <span className="font-medium text-gray-900" aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.path}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Published / Last Updated (仅文章页) */}
        {isArticlePage && publishedDate && (
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600">
            <span>
              <span className="font-medium text-gray-500">Published:</span>{' '}
              <time dateTime={publishedDate}>{formatDate(publishedDate)}</time>
            </span>
            <span>
              <span className="font-medium text-gray-500">Last Updated:</span>{' '}
              <time dateTime={lastUpdatedDate}>
                {formatDate(lastUpdatedDate!)}
              </time>
            </span>
          </div>
        )}

        {/* BreadcrumbList JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </div>
    </div>
  );
}
