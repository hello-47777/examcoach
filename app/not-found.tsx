import Link from 'next/link';

/**
 * 自定义 404 页面
 *
 * 不显示空 404,提供三条转化路径:
 * - Search Wiki
 * - Popular Articles
 * - AI Writing Checker
 */
export default function NotFound() {
  const popularArticles = [
    {
      href: '/wiki/guides/how-to-write-an-opinion-text-in-finnish',
      title: 'How to Write an Opinion Text in Finnish',
      category: 'Guides',
    },
    {
      href: '/wiki/guides/how-to-write-message-yki',
      title: 'How to Write a Message for YKI Writing Test',
      category: 'Guides',
    },
    {
      href: '/wiki/templates/yki-message-template',
      title: 'YKI Message Template: Finnish Short Message Structures',
      category: 'Templates',
    },
    {
      href: '/wiki/scoring/yki-b1-guide',
      title: 'YKI B1 Guide: Writing Scoring Criteria',
      category: 'Scoring',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex items-center justify-center">
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
        {/* 404 标识 */}
        <p className="text-7xl sm:text-9xl font-extrabold text-blue-900 tracking-tight">
          404
        </p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
          Page Not Found
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Search Wiki */}
        <section className="mt-10">
          <Link
            href="/search"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors min-h-[48px]"
          >
            Search Wiki
          </Link>
        </section>

        {/* Popular Articles */}
        <section className="mt-12 text-left">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Popular Articles
          </h2>
          <ul className="space-y-3">
            {popularArticles.map((article) => (
              <li key={article.href}>
                <Link
                  href={article.href}
                  className="flex items-center gap-3 bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:border-blue-200 hover:shadow transition-all"
                >
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 flex-shrink-0">
                    {article.category}
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    {article.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* AI Writing Checker */}
        <section className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-white border-2 border-blue-600 px-8 py-4 text-base font-semibold text-blue-700 shadow-sm hover:bg-blue-50 transition-colors min-h-[48px]"
          >
            Try AI Writing Checker
          </Link>
        </section>

        {/* Back home */}
        <section className="mt-8">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-blue-600"
          >
            ← Back to ExamCoach.ai
          </Link>
        </section>
      </main>
    </div>
  );
}
