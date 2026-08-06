import type { Metadata } from 'next';
import Link from 'next/link';
import { searchArticles } from '@/lib/search-articles';

export const metadata: Metadata = {
  title: 'Search YKI Writing Articles | ExamCoach.ai',
  description:
    'Search the ExamCoach.ai Wiki for YKI writing guides, templates, examples, and scoring rubrics.',
  alternates: {
    canonical: 'https://examcoach.ca/search',
  },
  openGraph: {
    title: 'Search YKI Writing Articles | ExamCoach.ai',
    description:
      'Search the ExamCoach.ai Wiki for YKI writing guides, templates, examples, and scoring rubrics.',
    url: 'https://examcoach.ca/search',
    siteName: 'ExamCoach.ai',
    type: 'website',
    locale: 'en_US',
  },
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = '' } = await searchParams;
  const query = q.trim();
  const results = query ? searchArticles(query) : [];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <Link
          href="/wiki"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mb-8"
        >
          ← Back to Wiki
        </Link>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 tracking-tight mb-3">
            Search YKI Writing Articles
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Find guides, templates, examples, and scoring rubrics for the YKI writing test.
          </p>
        </header>

        {/* Search form */}
        <form
          role="search"
          method="get"
          action="/search"
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <label htmlFor="wiki-search" className="sr-only">
              Search articles
            </label>
            <input
              id="wiki-search"
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search e.g. YKI email, opinion writing, vocabulary..."
              className="flex-1 w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[48px]"
              autoComplete="off"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-xl shadow-sm hover:bg-blue-700 transition-colors min-h-[48px]"
            >
              Search
            </button>
          </div>
        </form>

        {/* Results */}
        {query && (
          <section aria-label="Search results">
            <p className="text-sm text-gray-600 mb-4">
              {results.length === 0
                ? `No articles found for "${query}".`
                : `${results.length} article${results.length === 1 ? '' : 's'} found for "${query}":`}
            </p>

            {results.length > 0 && (
              <ul className="space-y-4">
                {results.map((r) => (
                  <li key={r.url}>
                    <Link
                      href={r.url}
                      className="block bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 hover:border-blue-200 hover:shadow transition-all"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 capitalize">
                          {r.category}
                        </span>
                        {r.topic && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                            {r.topic.replace(/-/g, ' ')}
                          </span>
                        )}
                      </div>
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                        {r.title}
                      </h2>
                      <p className="text-sm text-gray-600">{r.snippet}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {results.length === 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
                <p className="text-base text-gray-600 mb-4">
                  Try searching for:
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    'YKI email',
                    'opinion writing',
                    'vocabulary',
                    'message',
                    'scoring',
                    'AI checker',
                  ].map((suggestion) => (
                    <Link
                      key={suggestion}
                      href={`/search?q=${encodeURIComponent(suggestion)}`}
                      className="inline-flex items-center px-3 py-1.5 text-sm text-blue-700 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                    >
                      {suggestion}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {!query && (
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
            <p className="text-base text-gray-600 mb-4">
              Popular topics:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'YKI email',
                'opinion writing',
                'vocabulary',
                'message template',
                'writing mistakes',
                'AI checker',
              ].map((suggestion) => (
                <Link
                  key={suggestion}
                  href={`/search?q=${encodeURIComponent(suggestion)}`}
                  className="inline-flex items-center px-3 py-1.5 text-sm text-blue-700 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                >
                  {suggestion}
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
