import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { topicMetas, getTopicBySlug, getArticlesByTopic } from '@/lib/topics';

/**
 * 预生成所有 topic 路由 (SSG)
 */
export function generateStaticParams() {
  return topicMetas.map((t) => ({ topic: t.slug }));
}

/**
 * 动态 metadata
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) {
    return { title: 'Topic Not Found | ExamCoach.ai' };
  }

  const url = `https://examcoach.ca/topics/${topic.slug}`;
  return {
    title: `${topic.title} | ExamCoach.ai`,
    description: topic.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${topic.title} | ExamCoach.ai`,
      description: topic.description,
      url,
      siteName: 'ExamCoach.ai',
      type: 'website',
      locale: 'en_US',
    },
  };
}

interface TopicPageProps {
  params: Promise<{ topic: string }>;
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { topic: slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  const articles = getArticlesByTopic(topic.topic);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ExamCoach.ai', item: 'https://examcoach.ca' },
      { '@type': 'ListItem', position: 2, name: 'Topics', item: 'https://examcoach.ca/topics' },
      { '@type': 'ListItem', position: 3, name: topic.title, item: `https://examcoach.ca/topics/${topic.slug}` },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: topic.title,
    itemListElement: articles.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://examcoach.ca${a.url}`,
      name: a.title,
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
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
            <li><Link href="/topics" className="hover:text-blue-600">Topics</Link></li>
            <li className="text-gray-400 mx-1">›</li>
            <li className="font-medium text-gray-900">{topic.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-4">
            {topic.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">{topic.description}</p>
        </header>

        {/* Topic Intro */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            About This Topic
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {topic.intro}
          </p>
        </section>

        {/* Core Articles */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Core Articles
          </h2>
          {articles.length === 0 ? (
            <p className="text-base text-gray-600">
              Articles in this topic will be published soon.
            </p>
          ) : (
            <ul className="space-y-4">
              {articles.map((article) => (
                <li key={article.url}>
                  <Link
                    href={article.url}
                    className="block bg-gray-50 rounded-xl p-5 hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 capitalize">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      {article.title}
                    </h3>
                    <p className="text-sm text-blue-600">Read article →</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Learning Path */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Learning Path
          </h2>
          <ol className="space-y-5">
            {topic.learningPath.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{step.step}</h3>
                  <p className="text-sm text-gray-700 mt-1">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center shadow-sm">
          <p className="text-lg sm:text-xl font-semibold text-white">
            Ready to test your YKI writing?
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm sm:text-base font-semibold text-blue-700 shadow-sm transition-colors hover:bg-gray-100 min-h-[48px]"
          >
            Try AI Writing Checker
          </Link>
        </section>
      </main>
    </div>
  );
}
