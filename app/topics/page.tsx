import type { Metadata } from 'next';
import Link from 'next/link';
import { topicMetas, getArticlesByTopic } from '@/lib/topics';

export const metadata: Metadata = {
  title: 'YKI Writing Topics Hub | ExamCoach.ai',
  description:
    'Explore YKI writing topic clusters: email writing, opinion writing, vocabulary, AI preparation, and more. Structured learning paths for each topic.',
  alternates: {
    canonical: 'https://examcoach.ca/topics',
  },
  openGraph: {
    title: 'YKI Writing Topics Hub | ExamCoach.ai',
    description:
      'Explore YKI writing topic clusters with structured learning paths.',
    url: 'https://examcoach.ca/topics',
    siteName: 'ExamCoach.ai',
    type: 'website',
    locale: 'en_US',
  },
};

export default function TopicsIndexPage() {
  const topicsWithCount = topicMetas.map((t) => ({
    ...t,
    articleCount: getArticlesByTopic(t.topic).length,
  }));

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ExamCoach.ai', item: 'https://examcoach.ca' },
      { '@type': 'ListItem', position: 2, name: 'Topics', item: 'https://examcoach.ca/topics' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <Link
          href="/wiki"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mb-8"
        >
          ← Back to Wiki
        </Link>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-blue-600">ExamCoach.ai</Link></li>
            <li className="text-gray-400 mx-1">›</li>
            <li><Link href="/wiki" className="hover:text-blue-600">Wiki</Link></li>
            <li className="text-gray-400 mx-1">›</li>
            <li className="font-medium text-gray-900">Topics</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-4">
            YKI Writing Topics
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Structured learning paths for every YKI writing topic. Each cluster
            groups guides, templates, examples, and scoring rubrics.
          </p>
        </header>

        {/* Topics grid */}
        <section>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topicsWithCount.map((topic) => (
              <li key={topic.slug}>
                <Link
                  href={`/topics/${topic.slug}`}
                  className="block h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:border-blue-200 hover:shadow transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                      {topic.title}
                    </h2>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                      {topic.articleCount} article{topic.articleCount === 1 ? '' : 's'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{topic.description}</p>
                  <p className="mt-3 text-sm font-medium text-blue-600">
                    View learning path →
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
