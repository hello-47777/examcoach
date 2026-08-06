import ArticleMeta from '@/components/ArticleMeta';
import RelatedArticles from '@/components/RelatedArticles';
import AuthorBox from '@/components/AuthorBox';

/**
 * Wiki 布局
 *
 * 在所有 /wiki/* 路由自动注入:
 * - 顶部: Breadcrumb + 发布/更新时间 + BreadcrumbList JSON-LD (ArticleMeta)
 * - 文章后: 相关文章推荐 (RelatedArticles, 仅文章页显示)
 * - 底部: 作者信息 (AuthorBox)
 *
 * 无需修改各文章 page.tsx,通过 layout 约定自动生效。
 */
export default function WikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ArticleMeta />
      {children}
      <RelatedArticles />
      <AuthorBox />
    </>
  );
}
