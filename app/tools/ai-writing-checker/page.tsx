import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI YKI Writing Checker - Check Your Finnish Writing Level',
  description:
    'Check your Finnish writing with AI. Instant grammar analysis, vocabulary feedback, and CEFR level estimation for YKI writing test preparation.',
  alternates: {
    canonical: 'https://examcoach.ca/tools/ai-writing-checker',
  },
  openGraph: {
    title: 'AI YKI Writing Checker - Check Your Finnish Writing Level',
    description:
      'Check your Finnish writing with AI. Instant grammar analysis, vocabulary feedback, and CEFR level estimation.',
    url: 'https://examcoach.ca/tools/ai-writing-checker',
    siteName: 'ExamCoach.ai',
    type: 'website',
    locale: 'en_US',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ExamCoach.ai', item: 'https://examcoach.ca' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://examcoach.ca/tools' },
    { '@type': 'ListItem', position: 3, name: 'AI Writing Checker', item: 'https://examcoach.ca/tools/ai-writing-checker' },
  ],
};

const features = [
  {
    title: 'Grammar Analysis',
    description:
      'Get instant feedback on grammar errors, kirjakieli usage, sentence structure, and register appropriateness for YKI writing tasks.',
    icon: '✓',
  },
  {
    title: 'Vocabulary Feedback',
    description:
      'See which words push your writing toward B1 or B2 level, and get suggestions to replace basic vocabulary with stronger alternatives.',
    icon: '✎',
  },
  {
    title: 'CEFR Level Estimation',
    description:
      'Receive an estimated CEFR level (A2, B1, or B2) for each submission, mapped to the official YKI grading criteria.',
    icon: '★',
  },
];

export default function AIWritingCheckerPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-blue-100">
              <li><Link href="/" className="hover:text-white">ExamCoach.ai</Link></li>
              <li className="text-blue-300 mx-1">›</li>
              <li><Link href="/tools" className="hover:text-white">Tools</Link></li>
              <li className="text-blue-300 mx-1">›</li>
              <li className="font-medium text-white">AI Writing Checker</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Check your Finnish writing with AI
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl">
            Get instant grammar analysis, vocabulary feedback, and CEFR level
            estimation for your YKI writing tasks — powered by ExamCoach.ai.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base sm:text-lg font-semibold text-blue-700 shadow-lg hover:bg-blue-50 transition-colors min-h-[48px]"
          >
            Try AI Writing Checker
          </Link>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            What the AI Checker Analyzes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <ol className="space-y-5">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                1
              </span>
              <div>
                <h3 className="text-base font-semibold text-gray-900">Write your response</h3>
                <p className="text-sm text-gray-700 mt-1">
                  Pick a YKI writing prompt and write your Finnish response — message, email, or opinion text.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                2
              </span>
              <div>
                <h3 className="text-base font-semibold text-gray-900">Submit for AI analysis</h3>
                <p className="text-sm text-gray-700 mt-1">
                  The AI examiner evaluates grammar, vocabulary, structure, and task completion in seconds.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                3
              </span>
              <div>
                <h3 className="text-base font-semibold text-gray-900">Get your CEFR level</h3>
                <p className="text-sm text-gray-700 mt-1">
                  Receive an estimated CEFR level with actionable feedback aligned to the YKI scoring rubric.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center shadow-sm">
          <p className="text-lg sm:text-xl font-semibold text-white mb-2">
            Ready to check your Finnish writing level?
          </p>
          <p className="text-sm text-blue-100 mb-6">
            Free to start. No signup required for your first check.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base sm:text-lg font-semibold text-blue-700 shadow-lg hover:bg-blue-50 transition-colors min-h-[48px]"
          >
            Try AI Writing Checker
          </Link>
        </section>

        {/* Related resources */}
        <section className="mt-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Related Learning Resources
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li>
              <Link
                href="/topics/yki-ai-writing"
                className="block bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:border-blue-200 transition-all"
              >
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  AI-Assisted YKI Writing Preparation
                </h3>
                <p className="text-sm text-gray-600">
                  Learn how to use AI feedback effectively for YKI writing.
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/wiki/guides/yki-writing-feedback-guide"
                className="block bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:border-blue-200 transition-all"
              >
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  YKI Writing Feedback Guide
                </h3>
                <p className="text-sm text-gray-600">
                  Understand your AI examiner report in detail.
                </p>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
