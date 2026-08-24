import Link from 'next/link';

/**
 * Glossary 入口组件 (Server Component)
 *
 * 注入到 wiki layout 底部, 形成 Wiki → Glossary 反向链接 (TASK 16)。
 * 实现双向语义网络: Glossary 词条链接到 Wiki, Wiki 页面也引导回 Glossary。
 *
 * 不修改现有 AuthorBox / RelatedArticles, 作为独立区块注入。
 */
export default function GlossaryLink() {
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-2">YKI Writing Glossary</h2>
        <p className="text-sm text-gray-600 mb-3">
          Not sure what a term means? Explore our glossary of 30 essential YKI
          writing terms like kirjakieli, mielipidekirjoitus, and task
          fulfillment.
        </p>
        <Link
          href="/glossary"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Browse the Glossary →
        </Link>
      </div>
    </section>
  );
}
