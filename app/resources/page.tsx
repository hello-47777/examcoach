import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YKI Writing Resources | ExamCoach.ai',
  description:
    'Free YKI writing resources: checklists, email and opinion templates, Finnish writing phrases, B1–B2 vocabulary lists, practice guides, and AI writing checker.',
  alternates: {
    canonical: 'https://examcoach.ca/resources',
  },
  openGraph: {
    title: 'YKI Writing Resources | ExamCoach.ai',
    description:
      'Free YKI writing checklists, templates, phrases, vocabulary, and practice guides.',
    url: 'https://examcoach.ca/resources',
    siteName: 'ExamCoach.ai',
    type: 'website',
    locale: 'en_US',
  },
};

interface Resource {
  href: string;
  title: string;
  description: string;
}

interface ResourceGroup {
  category: string;
  items: Resource[];
}

const resourceGroups: ResourceGroup[] = [
  {
    category: 'Templates & Checklists',
    items: [
      {
        href: '/wiki/guides/yki-writing-test-checklist',
        title: 'YKI Writing Checklist',
        description:
          'A complete pre-submission checklist covering task fulfillment, register, structure, and grammar for YKI writing tasks.',
      },
      {
        href: '/wiki/templates/yki-message-template',
        title: 'YKI Email & Message Template',
        description:
          'Reusable message template for YKI Task 1 (viesti & sähköposti) with formal and informal variations.',
      },
      {
        href: '/wiki/templates/yki-opinion-essay-templates',
        title: 'YKI Opinion Writing Template',
        description:
          'Proven essay framework for YKI Task 2 (mielipidekirjoitus) with introduction, body, and conclusion structures.',
      },
      {
        href: '/wiki/templates/yki-writing-answer-template',
        title: 'YKI Writing Answer Template',
        description:
          'A structured answer template you can adapt for both YKI writing tasks to organize your response quickly.',
      },
    ],
  },
  {
    category: 'Vocabulary & Phrases',
    items: [
      {
        href: '/wiki/templates/yki-b1-vocabulary-list-writing-test',
        title: 'YKI B1 Vocabulary List',
        description:
          'Essential B1-level Finnish words for the YKI writing test, organized by topic and usage.',
      },
      {
        href: '/wiki/templates/yki-b2-vocabulary-list-advanced-finnish-words',
        title: 'YKI B2 Vocabulary List',
        description:
          'Advanced Finnish vocabulary that distinguishes B2 writing from B1, with example sentences.',
      },
      {
        href: '/wiki/templates/finnish-message-phrases-yki',
        title: 'Finnish Writing Phrases',
        description:
          'Ready-to-use Finnish phrases for greetings, requests, apologies, and closings in YKI messages.',
      },
      {
        href: '/wiki/templates/finnish-connectors-for-writing',
        title: 'Finnish Connectors',
        description:
          'Connectors and transition words that improve coherence and flow in Finnish essays and messages.',
      },
    ],
  },
  {
    category: 'Practice & Preparation',
    items: [
      {
        href: '/wiki/guides/yki-writing-practice',
        title: 'YKI Writing Practice',
        description:
          'How to practice YKI writing effectively with timed exercises and self-evaluation.',
      },
      {
        href: '/wiki/guides/yki-exam-tips',
        title: 'YKI Exam Tips',
        description:
          'Practical tips for the YKI writing test, from time management to register selection.',
      },
      {
        href: '/wiki/guides/yki-writing-topics',
        title: 'YKI Writing Topics',
        description:
          'Common YKI writing topics and prompts to practice before exam day.',
      },
    ],
  },
  {
    category: 'AI Tools',
    items: [
      {
        href: '/tools/ai-writing-checker',
        title: 'AI Writing Checker',
        description:
          'Get instant AI feedback on your Finnish writing and estimate your CEFR level (A2, B1, B2).',
      },
    ],
  },
];

export default function ResourcesPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ExamCoach.ai', item: 'https://examcoach.ca' },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://examcoach.ca/resources' },
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
            <li className="font-medium text-gray-900">Resources</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-4">
            YKI Writing Resources
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Free checklists, templates, vocabulary, and practice guides for the
            Finnish YKI writing test. Everything you need to prepare for Tasks 1
            and 2 at B1–B2 level.
          </p>
        </header>

        {/* Resource groups */}
        {resourceGroups.map((group) => (
          <section key={group.category} className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 pb-2 border-b border-gray-200">
              {group.category}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:border-blue-200 hover:shadow transition-all"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                  <p className="mt-3 text-sm font-medium text-blue-600">
                    Open resource →
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center shadow-sm">
          <p className="text-lg sm:text-xl font-semibold text-white mb-2">
            Ready to test your YKI writing?
          </p>
          <p className="text-sm text-blue-100 mb-6">
            Get instant AI feedback on your Finnish writing and estimate your
            CEFR level.
          </p>
          <Link
            href="/tools/ai-writing-checker"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-blue-700 shadow-lg hover:bg-blue-50 transition-colors min-h-[48px]"
          >
            Try AI Writing Checker
          </Link>
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
              href="/glossary"
              className="block bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:border-blue-200 transition-all"
            >
              <h3 className="text-sm font-semibold text-gray-900">Glossary</h3>
              <p className="mt-1 text-xs text-gray-500">YKI and Finnish writing terminology</p>
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
