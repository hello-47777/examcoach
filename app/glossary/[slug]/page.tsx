import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { glossaryTerms, getTermBySlug } from '@/lib/glossary-data';
import { getWikiArticles } from '@/lib/wiki-server';

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
  return {
    title: `${term.title} - YKI Writing Glossary | ExamCoach.ai`,
    description: term.definition.slice(0, 160),
    alternates: { canonical: url },
    openGraph: {
      title: `${term.title} - YKI Writing Glossary | ExamCoach.ai`,
      description: term.definition.slice(0, 160),
      url,
      siteName: 'ExamCoach.ai',
      type: 'website',
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

        {/* Term definition */}
        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
              {term.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 tracking-tight mb-4">
            {term.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {term.definition}
          </p>

          {/* Keywords */}
          {term.keywords.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-100">
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

        {/* Related articles */}
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
                    <p className="text-sm text-blue-600">
                      Read article →
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{url}</p>
                  </Link>
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
              .slice(0, 6)
              .map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/glossary/${other.slug}`}
                    className="block bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:border-blue-200 transition-all"
                  >
                    <h3 className="text-sm font-semibold text-gray-900">{other.title}</h3>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
