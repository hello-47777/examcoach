import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YKI Level 3 vs Level 4: What Score Do You Need?',
  description:
    'Compare YKI level 3 vs level 4 for the Finnish Keskitaso exam. Understand YKI scoring, Finnish language levels, citizenship requirements, and step-by-step prep strategies.',
  keywords: ['YKI level 3 vs level 4', 'YKI scoring', 'Finnish language levels', 'YKI keskitaso', 'YKI citizenship requirement'],
  alternates: {
    canonical: '/wiki/scoring/yki-level-3-vs-level-4',
  },
};

export default function YkiLevel3VsLevel4Page() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which level do I need for Finnish citizenship: YKI level 3 or level 4?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You need at least Level 3 (B1 skill level) in two subtests (such as Speaking + Writing or Reading + Writing) to fulfill the Finnish citizenship language requirement. Level 4 is higher than required, but obtaining it fully satisfies the requirement.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the main difference in YKI scoring between Level 3 and Level 4?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Level 3 demonstrates functional everyday communication with minor grammatical errors, whereas Level 4 requires more fluent expression, precise vocabulary, complex sentence structures, and higher accuracy across professional and abstract topics.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get Level 4 on the Keskitaso (Intermediate) test?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The Keskitaso (intermediate) test assesses candidates across levels 3 and 4 of the YKI scale. Depending on your performance, each subtest is awarded below level 3, level 3, or level 4.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-10">
        {/* Header Section */}
        <header className="border-b border-slate-200 pb-8 mb-8">
          <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            YKI Exam Guide
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            YKI Level 3 vs Level 4: What Score Do You Need?
          </h1>
        </header>

        {/* Article Content */}
        <article className="prose prose-slate max-w-none">
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            When preparing for the intermediate Finnish language test (Keskitaso), understanding <strong>YKI level 3 vs level 4</strong> is essential for setting realistic study targets and passing your exam. Both scores are awarded through the exact same intermediate test, but they represent distinct tiers on the official scale for Finnish language levels.
          </p>

          <p className="text-slate-700 leading-relaxed mb-6">
            For most test-takers, securing Level 3 is the primary milestone because it meets the minimum language requirement for Finnish citizenship. However, aiming for or achieving Level 4 demonstrates a broader, more flexible operational command of Finnish that aids professional growth and academic integration.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
            Understanding YKI Level 3 vs Level 4 in the Intermediate Exam
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The national certificate of language proficiency (YKI) intermediate exam assesses skills across four distinct components: Speaking, Listening, Writing, and Reading. Understanding YKI scoring helps clarify what examiners expect for each performance bracket:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
            <li>
              <strong>Level 3 (CEFR B1):</strong> Indicates intermediate functional ability. You can handle routine daily situations, express personal viewpoints, follow standard speech on familiar topics, and compose structured texts despite occasional grammatical inaccuracies.
            </li>
            <li>
              <strong>Level 4 (CEFR B2):</strong> Indicates upper-intermediate operational ability. You can communicate spontaneously, participate effectively in complex or abstract discussions, utilize rich vocabulary, and maintain strong control over Finnish grammar.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
            Examiner Assessment Criteria Breakdown
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            YKI evaluators measure your performance based on clear criteria including vocabulary range, structural correctness, coherence, and task fulfillment.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-800">
                  <th className="p-3 border-r border-slate-200 font-semibold">Criteria</th>
                  <th className="p-3 border-r border-slate-200 font-semibold">Level 3 Standard</th>
                  <th className="p-3 font-semibold">Level 4 Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-3 border-r border-slate-200 font-medium">Vocabulary</td>
                  <td className="p-3 border-r border-slate-200">Everyday, topic-specific vocabulary; reliance on core high-frequency words.</td>
                  <td className="p-3">Varied and precise vocabulary, idiomatic expressions, and nuance.</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-slate-200 font-medium">Grammatical Control</td>
                  <td className="p-3 border-r border-slate-200">Solid grasp of main cases (genetiikki, partitiivi); minor errors in complex forms.</td>
                  <td className="p-3">Consistent accuracy across advanced structures, passive forms, and participles.</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-slate-200 font-medium">Fluency & Coherence</td>
                  <td className="p-3 border-r border-slate-200">Understood easily despite occasional pauses to search for words.</td>
                  <td className="p-3">Natural speech rhythm with effortless transitions and cohesive discourse.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
            Step-by-Step Strategy to Reach Your Target Level
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Follow this step-by-step framework to transition from basic conversational skills to securing Level 3 or pushing toward Level 4:
          </p>

          <ol className="list-decimal pl-6 space-y-4 text-slate-700 mb-8">
            <li>
              <strong>Step 1: Secure Core Argumentation Templates (Target: Level 3)</strong>
              <p className="mt-1">
                Master essential connective phrases to express opinions clearly during speaking and writing. Practice expressions like <em>Olen sitä mieltä, että...</em> (I am of the opinion that...) or <em>Toisaalta... toisaalta...</em> (On one hand... on the other hand...).
              </p>
            </li>
            <li>
              <strong>Step 2: Incorporate Advanced Sentence Structures (Target: Level 4)</strong>
              <p className="mt-1">
                Elevate simple compound sentences by integrating complex connectors such as <em>jonka vuoksi</em> (because of which), <em>siitä huolimatta, että</em> (despite the fact that), or using participle structures (e.g., <em>mukaansa tempaava</em>).
              </p>
            </li>
            <li>
              <strong>Step 3: Conduct Timed Exam Simulations</strong>
              <p className="mt-1">
                Practice answering speaking audio prompts under strict time limits. Focus on immediate response generation to eliminate prolonged hesitations.
              </p>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
            Common Mistakes and Corrections
          </h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
            <h3 className="font-semibold text-amber-900 mb-1">Mistake: Missing prompt requirements in written essays</h3>
            <p className="text-amber-800 text-sm">
              <strong>Correction:</strong> YKI tasks explicitly state 3-4 bullet points that must be addressed. Ensure every point is covered clearly; failing to address a prompt element drops your score regardless of grammar quality.
            </p>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
            <h3 className="font-semibold text-amber-900 mb-1">Mistake: Freezing during the speaking audio prompt</h3>
            <p className="text-amber-800 text-sm">
              <strong>Correction:</strong> If you forget a word, paraphrase (circumlocution). Examiners award higher marks to candidates who keep speaking fluidly rather than stopping completely.
            </p>
          </div>
        </article>

        {/* Related Articles */}
        <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8 mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
          <ul className="space-y-2">
            <li><Link href="/wiki/scoring/yki-b1-guide" className="text-blue-700 hover:underline">YKI B1 Guide</Link></li>
            <li><Link href="/wiki/scoring/yki-opinion-writing-scoring" className="text-blue-700 hover:underline">YKI Opinion Writing Scoring: How Examiners Grade Your Essay</Link></li>
          </ul>
        </nav>

        {/* CTA Section */}
        <section className="mt-12 bg-blue-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Prepare for Your YKI Exam with Precision</h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-6">
            Get instant AI feedback on your Finnish writing and speaking responses designed according to official YKI assessment benchmarks.
          </p>
          <Link
            href="https://examcoach.ai"
            className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-sm"
          >
            Start Practicing Now
          </Link>
        </section>

        {/* FAQ Section */}
        <section className="mt-12 border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-slate-900 mb-1">
                Which level do I need for Finnish citizenship: YKI level 3 or level 4?
              </h3>
              <p className="text-slate-700">
                You need at least Level 3 (B1 skill level) in two subtests (such as Speaking + Writing or Reading + Writing) to fulfill the Finnish citizenship language requirement. Level 4 is higher than required, but obtaining it fully satisfies the requirement.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-900 mb-1">
                What is the main difference in YKI scoring between Level 3 and Level 4?
              </h3>
              <p className="text-slate-700">
                Level 3 demonstrates functional everyday communication with minor grammatical errors, whereas Level 4 requires more fluent expression, precise vocabulary, complex sentence structures, and higher accuracy across professional and abstract topics.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-900 mb-1">
                Can I get Level 4 on the Keskitaso (Intermediate) test?
              </h3>
              <p className="text-slate-700">
                Yes. The Keskitaso (intermediate) test assesses candidates across levels 3 and 4 of the YKI scale. Depending on your performance, each subtest is awarded below level 3, level 3, or level 4.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
