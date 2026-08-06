import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '@/lib/glossary-data';

export const metadata: Metadata = {
  title: 'YKI Writing Glossary | ExamCoach.ai',
  description:
    'A glossary of essential YKI writing terms: YKI keskitaso, B1/B2 Finnish levels, kirjakieli, puhekieli, task fulfillment, comprehensibility, and more.',
  alternates: {
    canonical: 'https://examcoach.ca/glossary',
  },
  openGraph: {
    title: 'YKI Writing Glossary | ExamCoach.ai',
    description:
      'A glossary of essential YKI writing terms and concepts.',
    url: 'https://examcoach.ca/glossary',
    siteName: 'ExamCoach.ai',
    type: 'website',
    locale: 'en_US',
  },
};

const categoryOrder = ['Exam', 'Language Level', 'Linguistics', 'Scoring', 'Writing Task'];

export default function GlossaryPage() {
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    terms: glossaryTerms.filter((t) => t.category === cat),
  })).filter((g) => g.terms.length > 0);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ExamCoach.ai', item: 'https://examcoach.ca' },
      { '@type': 'ListItem', position: 2, name: 'Glossary', item: 'https://examcoach.ca/glossary' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
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
            <li className="font-medium text-gray-900">Glossary</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-4">
            YKI Writing Glossary
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Essential YKI writing terms and concepts explained. From YKI keskitaso to kirjakieli, this glossary covers the terminology you need to understand the Finnish YKI writing test.
          </p>
        </header>

        {/* Terms by category */}
        {grouped.map((group) => (
          <section key={group.category} className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 pb-2 border-b border-gray-200">
              {group.category}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {group.terms.map((term) => (
                <li key={term.slug}>
                  <Link
                    href={`/glossary/${term.slug}`}
                    className="block h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:border-blue-200 hover:shadow transition-all"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      {term.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {term.definition}
                    </p>
                    <p className="mt-3 text-sm font-medium text-blue-600">
                      View definition →
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
}
