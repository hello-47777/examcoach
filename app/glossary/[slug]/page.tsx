import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { glossaryTerms, getTermBySlug } from '@/lib/glossary-data';
import { getWikiArticles } from '@/lib/wiki-server';
import { topicMetas } from '@/lib/topics';

/** 预生成所有 term 路由 (SSG) */
export function generateStaticParams() {
  return glossaryTerms.map((term) => ({ slug: term.slug }));
}

/** 动态 metadata */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) {
    return { title: 'Term Not Found | ExamCoach.ai' };
  }

  const url = `https://examcoach.ca/glossary/${term.slug}`;
  const title = `What Is ${term.title}? YKI Writing Glossary | ExamCoach.ai`;
  return {
    title,
    description: term.definition.slice(0, 160),
    alternates: { canonical: url },
    openGraph: {
      title,
      description: term.definition.slice(0, 160),
      url,
      siteName: 'ExamCoach.ai',
      type: 'article',
      locale: 'en_US',
    },
  };
}

interface GlossaryTermPageProps {
  params: Promise<{ slug: string }>;
}

export default async function GlossaryTermPage({ params }: GlossaryTermPageProps) {
  const { slug } = await params;
  const term = getTermBySlug(slug);

  if (!term) {
    notFound();
  }

  // 过滤出已发布的相关文章 (避免 404)
  const publishedUrls = new Set(getWikiArticles().map((a) => a.url));
  const validRelatedArticles = term.relatedArticles.filter((url) =>
    publishedUrls.has(url)
  );

  // 解析 relatedTopics 为真实 Topic Hub 链接
  const validRelatedTopics = (term.relatedTopics || [])
    .map((topicSlug) => {
      const topic = topicMetas.find((t) => t.slug === topicSlug);
      return topic
        ? { slug: topic.slug, title: topic.title, href: `/topics/${topic.slug}` }
        : null;
    })
    .filter((t): t is { slug: string; title: string; href: string } => t !== null);

  // Term Schema (schema.org/DefinedTerm)
  const termSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term.title,
    description: term.definition,
    termCode: term.slug,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'YKI Writing Glossary',
      url: 'https://examcoach.ca/glossary',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ExamCoach.ai', item: 'https://examcoach.ca' },
      { '@type': 'ListItem', position: 2, name: 'Glossary', item: 'https://examcoach.ca/glossary' },
      { '@type': 'ListItem', position: 3, name: term.title, item: `https://examcoach.ca/glossary/${term.slug}` },
    ],
  };

  // FAQPage Schema (仅当存在真实 FAQ, TASK 15: 禁止虚构)
  const faqSchema =
    term.faq && term.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: term.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-blue-600">ExamCoach.ai</Link></li>
            <li className="text-gray-400 mx-1">›</li>
            <li><Link href="/glossary" className="hover:text-blue-600">Glossary</Link></li>
            <li className="text-gray-400 mx-1">›</li>
            <li className="font-medium text-gray-900">{term.title}</li>
          </ol>
        </nav>

        {/* Back link */}
        <Link
          href="/glossary"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mb-8"
        >
          ← Back to Glossary
        </Link>

        {/* H1: What Is {Term}? */}
        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
              {term.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 tracking-tight mb-6">
            What Is {term.title}?
          </h1>

          {/* Definition */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Definition</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {term.definition}
            </p>
          </section>

          {/* Meaning in English */}
          {term.meaningInEnglish && (
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Meaning in English</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                {term.meaningInEnglish}
              </p>
            </section>
          )}

          {/* Meaning in Finnish */}
          {term.meaningInFinnish && (
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Meaning in Finnish</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                {term.meaningInFinnish}
              </p>
            </section>
          )}

          {/* Why It Matters for YKI */}
          {term.whyItMatters && (
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Why It Matters for YKI</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                {term.whyItMatters}
              </p>
            </section>
          )}

          {/* Example */}
          {term.example && (
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Example</h2>
              <p className="text-base text-gray-700 leading-relaxed italic border-l-4 border-blue-200 pl-4">
                {term.example}
              </p>
            </section>
          )}

          {/* Keywords */}
          {term.keywords.length > 0 && (
            <div className="pt-6 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-500 mb-2">Related keywords:</p>
              <ul className="flex flex-wrap gap-2">
                {term.keywords.map((kw) => (
                  <li
                    key={kw}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
                  >
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>

        {/* Related YKI Topics (双向链接 TASK 16) */}
        {validRelatedTopics.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">
              Related YKI Topics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {validRelatedTopics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={topic.href}
                  className="block bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:border-blue-200 transition-all"
                >
                  <h3 className="text-sm font-semibold text-gray-900">{topic.title}</h3>
                  <p className="mt-1 text-xs text-blue-600">Explore topic →</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Articles (双向链接 TASK 16: Glossary → Wiki) */}
        {validRelatedArticles.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">
              Related Articles
            </h2>
            <ul className="space-y-3">
              {validRelatedArticles.map((url) => (
                <li key={url}>
                  <Link
                    href={url}
                    className="block bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:border-blue-200 hover:shadow transition-all"
                  >
                    <p className="text-sm font-medium text-blue-600">
                      Read article →
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{url}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* FAQ (TASK 14-15: 仅当存在真实 FAQ) */}
        {term.faq && term.faq.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">
              Frequently Asked Questions
            </h2>
            <ul className="space-y-4">
              {term.faq.map((item) => (
                <li
                  key={item.question}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-5"
                >
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {item.question}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Other terms */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">
            Other Glossary Terms
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {glossaryTerms
              .filter((t) => t.slug !== term.slug)
              .slice(0, 8)
              .map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/glossary/${other.slug}`}
                    className="block bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:border-blue-200 transition-all"
                  >
                    <h3 className="text-sm font-semibold text-gray-900">{other.title}</h3>
                    <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                      {other.definition}
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
