import type { Metadata } from 'next';
import ArticleMeta from '@/components/ArticleMeta';
import ArticleSchema from '@/components/ArticleSchema';
import RelatedArticles from '@/components/RelatedArticles';
import AuthorBox from '@/components/AuthorBox';
import GlossaryLink from '@/components/GlossaryLink';

/**
 * Wiki 布局
 *
 * 在所有 /wiki/* 路由自动注入:
 * - 顶部: Breadcrumb + 发布/更新时间 + BreadcrumbList JSON-LD (ArticleMeta)
 * - Article JSON-LD schema (ArticleSchema, Server Component, 仅文章页)
 * - 文章后: 相关文章推荐 (RelatedArticles, 仅文章页显示)
 * - 底部: 作者信息 (AuthorBox)
 *
 * metadata: openGraph.type='article' 由 layout 统一注入,
 * 各 page.tsx 的 title/description 自动填充 openGraph 字段。
 * 无需修改各文章 page.tsx,通过 layout 约定自动生效。
 */
export const metadata: Metadata = {
  openGraph: {
    type: 'article',
    siteName: 'ExamCoach.ai',
    locale: 'en_US',
  },
};

export default function WikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ArticleMeta />
      <ArticleSchema />
      {children}
      <RelatedArticles />
      <GlossaryLink />
      <AuthorBox />
    </>
  );
}
