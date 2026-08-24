import type { Metadata } from 'next';
import Link from 'next/link';
import { faqItems, getFAQsByCategory } from '@/lib/faq-data';

export const metadata: Metadata = {
  title: 'YKI Writing Test Frequently Asked Questions | ExamCoach.ai',
  description:
    'Answers to the most common questions about the YKI writing test: tasks, scoring, email writing, opinion writing, and AI evaluation.',
  alternates: {
    canonical: 'https://examcoach.ca/faq',
  },
  openGraph: {
    title: 'YKI Writing Test Frequently Asked Questions | ExamCoach.ai',
    description:
      'Answers to the most common questions about the YKI writing test.',
    url: 'https://examcoach.ca/faq',
    siteName: 'ExamCoach.ai',
    type: 'website',
    locale: 'en_US',
  },
};

export default function FAQPage() {
  const groups = getFAQsByCategory();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ExamCoach.ai', item: 'https://examcoach.ca' },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://examcoach.ca/faq' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            <li className="font-medium text-gray-900">FAQ</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-4">
            YKI Writing Test Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Answers to the most common questions about the YKI writing test, covering tasks, scoring, email writing, opinion writing, and AI evaluation.
          </p>
        </header>

        {/* FAQ groups */}
        {groups.map((group) => (
          <section key={group.category} className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 pb-2 border-b border-gray-200">
              {group.category}
            </h2>
            <ul className="space-y-6">
              {group.items.map((item) => (
                <li key={item.question} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    {item.question}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Glossary cross-link (TASK 18: FAQ → Glossary → Wiki → Topic → AI Writing Checker) */}
        <section className="rounded-2xl bg-white border border-gray-100 shadow-sm p-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
            Need a term explained?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Our YKI Writing Glossary defines {''}
            <Link href="/glossary" className="text-blue-600 hover:text-blue-700 font-medium">
              30 key terms
            </Link>
            {' '}like kirjakieli, mielipidekirjoitus, task fulfillment, and CEFR levels.
          </p>
          <Link
            href="/glossary"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Browse the Glossary →
          </Link>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center shadow-sm mt-8">
          <p className="text-lg sm:text-xl font-semibold text-white mb-2">
            Ready to test your YKI writing?
          </p>
          <p className="text-sm text-blue-100 mb-6">
            Get instant AI feedback on your Finnish writing.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-blue-700 shadow-lg hover:bg-blue-50 transition-colors min-h-[48px]"
          >
            Try AI Writing Checker
          </Link>
        </section>
      </main>
    </div>
  );
}
