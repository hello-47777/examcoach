import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '@/lib/glossary-data';

export const metadata: Metadata = {
  title: 'YKI Writing Glossary | ExamCoach.ai',
  description:
    'A glossary of 30 essential YKI writing terms: YKI, keskitaso, B1/B2 levels, kirjakieli, puhekieli, task fulfillment, comprehensibility, vocabulary range, and more.',
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

/** 友好的分类显示名 (TASK 17: YKI Core / Writing / Finnish Language / CEFR / Levels) */
const categoryLabels: Record<string, string> = {
  Exam: 'YKI Core',
  'Writing Task': 'Writing',
  Linguistics: 'Finnish Language',
  'Language Level': 'CEFR / Levels',
  Scoring: 'Scoring',
};

const categoryOrder = ['Exam', 'Language Level', 'Linguistics', 'Scoring', 'Writing Task'];

/** 取首字母用于 A-Z 索引 */
function firstLetter(title: string): string {
  const letter = title.replace(/[^A-Za-z\u00C0-\u017F]/, '').charAt(0).toUpperCase();
  return letter || '#';
}

export default function GlossaryPage() {
  // 按分类分组
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    label: categoryLabels[cat] || cat,
    terms: glossaryTerms
      .filter((t) => t.category === cat)
      .sort((a, b) => a.title.localeCompare(b.title)),
  })).filter((g) => g.terms.length > 0);

  // 按字母分组 (A-Z)
  const alphaGroups = (() => {
    const sorted = [...glossaryTerms].sort((a, b) =>
      a.title.localeCompare(b.title, 'en', { sensitivity: 'base' })
    );
    const map = new Map<string, typeof glossaryTerms>();
    for (const term of sorted) {
      const letter = firstLetter(term.title);
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter)!.push(term);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  })();

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

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            {glossaryTerms.length} essential YKI writing terms and concepts
            explained. From YKI keskitaso to kirjakieli, this glossary covers the
            terminology you need to understand the Finnish YKI writing test.
          </p>
        </header>

        {/* A-Z index navigation */}
        <nav
          aria-label="Glossary A-Z index"
          className="mb-10 bg-white rounded-2xl shadow-sm border border-gray-100 p-4"
        >
          <p className="text-sm font-medium text-gray-500 mb-3">Browse alphabetically:</p>
          <div className="flex flex-wrap gap-2">
            {alphaGroups.map(([letter]) => (
              <a
                key={letter}
                href={`#section-${letter}`}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 text-blue-700 font-semibold text-sm hover:bg-blue-100 transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
        </nav>

        {/* Category jump links */}
        <nav
          aria-label="Glossary categories"
          className="mb-10 flex flex-wrap gap-2"
        >
          {grouped.map((g) => (
            <a
              key={g.category}
              href={`#cat-${g.category}`}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-700 hover:border-blue-200 hover:text-blue-700 transition-colors"
            >
              {g.label}
            </a>
          ))}
        </nav>

        {/* Terms by category */}
        {grouped.map((group) => (
          <section
            key={group.category}
            id={`cat-${group.category}`}
            className="mb-12 scroll-mt-4"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 pb-2 border-b border-gray-200">
              {group.label}
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

        {/* A-Z grouped list (full alphabetical index) */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 pb-2 border-b border-gray-200">
            All Terms (A-Z)
          </h2>
          {alphaGroups.map(([letter, terms]) => (
            <div key={letter} id={`section-${letter}`} className="mb-8 scroll-mt-4">
              <h3 className="text-lg font-bold text-blue-900 mb-3">{letter}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {terms.map((term) => (
                  <li key={term.slug}>
                    <Link
                      href={`/glossary/${term.slug}`}
                      className="block bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:border-blue-200 transition-all"
                    >
                      <h4 className="text-sm font-semibold text-gray-900">{term.title}</h4>
                      <p className="mt-1 text-xs text-gray-500">{term.category}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Related hubs */}
        <section className="mt-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">
            Explore More
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Link
              href="/wiki"
              className="block bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:border-blue-200 transition-all"
            >
              <h3 className="text-sm font-semibold text-gray-900">Wiki Knowledge Base</h3>
              <p className="mt-1 text-xs text-gray-500">Guides, templates, and scoring rubrics</p>
            </Link>
            <Link
              href="/resources"
              className="block bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:border-blue-200 transition-all"
            >
              <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
              <p className="mt-1 text-xs text-gray-500">Free checklists, templates, and vocabulary</p>
            </Link>
            <Link
              href="/faq"
              className="block bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:border-blue-200 transition-all"
            >
              <h3 className="text-sm font-semibold text-gray-900">FAQ</h3>
              <p className="mt-1 text-xs text-gray-500">Common YKI writing questions answered</p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
