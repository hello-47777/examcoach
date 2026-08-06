'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { scheduledArticles } from '@/lib/wiki-data';

/**
 * 相关文章推荐组件 (Client Component)
 *
 * 通过 wiki layout 自动注入到所有 /wiki/* 文章页底部。
 * 规则:
 *   1. 优先相同 topic
 *   2. 次选相同 category
 *   3. 最多 3 篇
 *
 * 使用 scheduledArticles 静态数据 + 客户端日期过滤 (不依赖 fs)。
 * /wiki 索引页不显示 (仅在文章页 /wiki/[category]/[slug] 显示)。
 */

interface RelatedArticle {
  title: string;
  url: string;
  category: string;
  reason: string;
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

function getRelatedArticles(currentUrl: string): RelatedArticle[] {
  const today = getBeijingToday();
  const current = scheduledArticles.find((a) => a.url === currentUrl);
  if (!current) return [];

  // 已发布的文章 (客户端日期过滤, 不依赖 fs)
  const published = scheduledArticles.filter((a) => a.date <= today);

  const related: RelatedArticle[] = [];
  const seenUrls = new Set<string>([currentUrl]);

  // 1. 相同 topic
  if (current.topic) {
    for (const a of published) {
      if (related.length >= 3) break;
      if (a.topic === current.topic && !seenUrls.has(a.url)) {
        related.push({
          title: a.title || a.slug,
          url: a.url,
          category: a.category,
          reason: 'Same topic',
        });
        seenUrls.add(a.url);
      }
    }
  }

  // 2. 相同 category
  if (related.length < 3) {
    for (const a of published) {
      if (related.length >= 3) break;
      if (a.category === current.category && !seenUrls.has(a.url)) {
        related.push({
          title: a.title || a.slug,
          url: a.url,
          category: a.category,
          reason: 'Same category',
        });
        seenUrls.add(a.url);
      }
    }
  }

  return related;
}

export default function RelatedArticles() {
  const pathname = usePathname() || '';
  const segments = pathname.split('/').filter(Boolean);

  const isArticlePage = segments.length === 3 && segments[0] === 'wiki';
  if (!isArticlePage) return null;

  const related = getRelatedArticles(pathname);

  if (related.length === 0) return null;

  return (
    <section className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
          Related Articles
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {related.map((article) => (
            <li key={article.url}>
              <Link
                href={article.url}
                className="block h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:border-blue-200 hover:shadow transition-all"
              >
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 capitalize mb-3">
                  {article.category}
                </span>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500">{article.reason}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
