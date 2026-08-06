import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About ExamCoach.ai — YKI Writing Authority & AI Learning Platform',
  description:
    'ExamCoach.ai is a specialized YKI Finnish writing platform combining AI feedback with expert-reviewed content. Learn our mission, content standards, and authority approach.',
  alternates: {
    canonical: 'https://examcoach.ca/about',
  },
  openGraph: {
    title: 'About ExamCoach.ai — YKI Writing Authority & AI Learning Platform',
    description:
      'Specialized YKI Finnish writing platform combining AI feedback with expert-reviewed content.',
    url: 'https://examcoach.ca/about',
    siteName: 'ExamCoach.ai',
    type: 'website',
    locale: 'en_US',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About ExamCoach.ai',
  url: 'https://examcoach.ca/about',
  mainEntity: {
    '@type': 'Organization',
    name: 'ExamCoach.ai',
    url: 'https://examcoach.ca',
    description:
      'AI-powered YKI Finnish writing evaluation and learning platform.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mb-8"
        >
          ← Back to ExamCoach.ai
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-4">
            About ExamCoach.ai
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            A specialized YKI Finnish writing platform combining AI feedback
            with expert-reviewed learning content.
          </p>
        </header>

        {/* Mission */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            ExamCoach.ai exists to make high-quality YKI writing preparation
            accessible to every learner of Finnish. We combine instant AI
            feedback with structured, exam-aligned learning materials so that
            candidates can identify weaknesses, practice effectively, and enter
            the YKI writing test with confidence — regardless of their location
            or budget.
          </p>
        </section>

        {/* YKI Writing Focus */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            YKI Writing Specialization
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Unlike general language-learning platforms, ExamCoach.ai focuses
            exclusively on the writing section of the YKI examination
            (National Certificate of Language Proficiency, keskitaso). Our
            coverage spans the full intermediate writing task range:
          </p>
          <ul className="space-y-3 text-base text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold mt-0.5">•</span>
              <span>
                <strong>Task 1 — Message &amp; email writing</strong> (viesti
                ja sähköposti), including formal and informal registers.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold mt-0.5">•</span>
              <span>
                <strong>Task 2 — Opinion text</strong> (mielipidekirjoitus)
                with argumentation structure and kirjakieli conventions.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold mt-0.5">•</span>
              <span>
                <strong>Scoring rubrics</strong> aligned to B1–B2 CEFR levels
                and official YKI grading criteria.
              </span>
            </li>
          </ul>
        </section>

        {/* AI Learning Philosophy */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            AI-Assisted Learning Philosophy
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            We believe AI is most effective when it augments — not replaces —
            language learning. ExamCoach.ai uses AI to deliver:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 rounded-xl p-5">
              <h3 className="text-base font-semibold text-blue-900 mb-2">
                Instant, actionable feedback
              </h3>
              <p className="text-sm text-gray-700">
                Detailed scoring on grammar, vocabulary, structure, and task
                completion — returned in seconds, not days.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-5">
              <h3 className="text-base font-semibold text-blue-900 mb-2">
                Personalized practice paths
              </h3>
              <p className="text-sm text-gray-700">
                Learners focus on their weakest areas instead of repeating
                generic exercises.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-5">
              <h3 className="text-base font-semibold text-blue-900 mb-2">
                Transparent scoring
              </h3>
              <p className="text-sm text-gray-700">
                Every evaluation maps to YKI rubric bands so progress is
                measurable against the real exam standard.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-5">
              <h3 className="text-base font-semibold text-blue-900 mb-2">
                Human-reviewed content
              </h3>
              <p className="text-sm text-gray-700">
                Templates, examples, and guides are authored with AI assistance
                and reviewed by a Finnish language learning specialist.
              </p>
            </div>
          </div>
        </section>

        {/* Content Standards */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Content Production Standards
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            Every article, template, and scoring guide on ExamCoach.ai follows
            a consistent production process to ensure accuracy and
            exam-relevance:
          </p>
          <ol className="space-y-5">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                1
              </span>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Topic selection by exam relevance
                </h3>
                <p className="text-sm text-gray-700 mt-1">
                  Topics are chosen based on frequency in actual YKI writing
                  tasks and common candidate pain points.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                2
              </span>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  AI-assisted drafting
                </h3>
                <p className="text-sm text-gray-700 mt-1">
                  Initial drafts are produced with AI assistance by the
                  ExamCoach AI Team, focused on clarity and B1–B2 level
                  appropriateness.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                3
              </span>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Specialist review
                </h3>
                <p className="text-sm text-gray-700 mt-1">
                  A Finnish Language Learning Specialist reviews each article
                  for kirjakieli correctness, YKI scoring accuracy, and
                  pedagogical soundness.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                4
              </span>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Ongoing updates
                </h3>
                <p className="text-sm text-gray-700 mt-1">
                  Published content is revisited as the YKI exam format and
                  CEFR descriptors evolve, ensuring materials stay current.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center shadow-sm">
          <p className="text-lg sm:text-xl font-semibold text-white">
            Ready to improve your YKI writing?
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm sm:text-base font-semibold text-blue-700 shadow-sm transition-colors hover:bg-gray-100 min-h-[48px]"
          >
            Start Your Free Writing Check
          </Link>
        </section>
      </main>
    </div>
  );
}
