import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Writing Knowledge Base | ExamCoach.ai',
  description:
    'Explore Finnish exam writing strategies, templates, and scoring guides for YKI B1–B2 level.',
  alternates: {
    canonical: 'https://examcoach.ca/wiki',
  },
};

const categories = [
  {
    title: 'Emails',
    description: 'Formal and informal email templates for the YKI writing test.',
    links: [
      { href: '/wiki/emails/job-application', label: 'Job Application Letter' },
      { href: '/wiki/emails/formal-email', label: 'Formal Email' },
      { href: '/wiki/emails/informal-email', label: 'Informal Email' },
    ],
  },
  {
    title: 'Essays',
    description: 'Essay structures and examples for common YKI writing prompts.',
    links: [
      { href: '/wiki/essays/advantages-disadvantages', label: 'Advantages & Disadvantages' },
    ],
  },
  {
    title: 'Guides',
    description: 'Practical strategies, topic lists, and tips to raise your score.',
    links: [
      { href: '/wiki/guides/tips', label: '15 YKI Writing Tips' },
      { href: '/wiki/guides/topics', label: '20 Common YKI Topics' },
    ],
  },
  {
    title: 'Templates',
    description: 'Real sample answers and templates you can study and adapt.',
    links: [
      { href: '/wiki/templates/examples', label: 'YKI Writing Examples' },
    ],
  },
];

export default function WikiIndexPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://examcoach.ca',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Wiki',
        item: 'https://examcoach.ca/wiki',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <header className="border-b border-gray-100 bg-gradient-to-b from-blue-50 to-white">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-gray-500">
                <li>
                  <Link href="/" className="hover:text-blue-600">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-700">Wiki</li>
              </ol>
            </nav>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              YKI Writing Knowledge Base
            </h1>
            <p className="mt-5 max-w-2xl text-base text-gray-600 sm:text-lg">
              Explore Finnish exam writing strategies, templates, and scoring
              guides for YKI B1–B2 level.
            </p>
          </div>
        </header>

        {/* Category Grid */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
              >
                <h2 className="text-lg font-bold text-gray-900">{cat.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{cat.description}</p>
                <ul className="mt-4 space-y-2">
                  {cat.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm font-medium text-blue-600 hover:text-blue-700"
                      >
                        {link.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Browse by Topic */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <h2 className="text-2xl font-bold text-gray-900">Browse by Topic</h2>
          <p className="mt-2 text-sm text-gray-600">
            Structured learning paths for each YKI writing skill area.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: '/topics/yki-email-writing', label: 'Email & Message Writing', desc: 'Task 1: viesti & sähköposti' },
              { href: '/topics/yki-opinion-writing', label: 'Opinion Writing', desc: 'Task 2: mielipidekirjoitus' },
              { href: '/topics/yki-vocabulary', label: 'Writing Vocabulary', desc: 'B1–B2 word lists & connectors' },
              { href: '/topics/yki-ai-writing', label: 'AI Writing Preparation', desc: 'Check your level with AI' },
              { href: '/topics/yki-writing-errors', label: 'Common Writing Errors', desc: 'Fix mistakes that lower scores' },
              { href: '/topics/yki-writing-skills', label: 'Improve Writing Skills', desc: 'Strategies & daily habits' },
            ].map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-gray-900">{topic.label}</h3>
                <p className="mt-1 text-xs text-gray-500">{topic.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 p-8 text-center text-white shadow-xl">
            <h2 className="text-2xl font-bold text-white">Practice makes perfect!</h2>
            <p className="mt-2 text-blue-50">
              Check your YKI writing score instantly with our AI Examiner.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 shadow-sm transition-colors hover:bg-gray-100"
            >
              Start Free Check
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
