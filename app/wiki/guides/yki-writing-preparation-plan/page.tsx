import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YKI Writing Preparation Plan: 30-Day Study Schedule for B1-B2',
  description: 'Master the Finnish language exam with our structured YKI writing preparation plan. Follow this 30-day YKI study schedule to achieve your B1-B2 certificate.',
  keywords: ['YKI writing preparation plan', 'YKI study schedule', 'YKI B1 writing preparation', 'Finnish exam preparation', 'YKI writing practice plan'],
  alternates: {
    canonical: '/wiki/guides/yki-writing-preparation-plan',
  },
};

export default function YkiWritingPreparationPlan() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much time per day does this YKI writing preparation plan require?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should dedicate 45 to 60 minutes per day to follow this schedule. This allows enough time to write a practice text and review your mistakes against the B1-B2 grading criteria."
        }
      },
      {
        "@type": "Question",
        "name": "What topics should I include in my YKI writing practice plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Focus on the three standard YKI writing tasks: informal messages (emails/invitations), formal messages (complaints/job applications), and opinion pieces (mielipidekirjoitus). Generic Finnish exercises won't prepare you for these specific formats."
        }
      },
      {
        "@type": "Question",
        "name": "How is the YKI writing test graded at the intermediate (keskitaso) level?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Examiners evaluate your text based on task completion, comprehensibility, vocabulary range, and grammatical accuracy. At B1-B2, perfect grammar is not required, but your core message must be clear and appropriately formatted for the intended audience."
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-6">
          YKI Writing Preparation Plan: 30-Day Study Schedule for B1-B2
        </h1>

        <p className="lead text-xl text-gray-700 mb-8">
          Passing the intermediate Finnish exam (keskitaso) requires more than just knowing vocabulary; it requires strategy. Implementing a structured <strong>YKI writing preparation plan</strong> is the most reliable way to upgrade your skills from A2 to a solid B1-B2. In this guide, we break down exactly what you need to study, day by day, to confidently pass the writing section.
        </p>

        <h2 className="text-2xl font-bold text-blue-800 mt-10 mb-4">
          Why You Need a Dedicated YKI Writing Preparation Plan
        </h2>
        <p className="mb-6">
          The YKI writing subtest gives you 55 minutes to complete three distinct tasks. Without a targeted <strong>YKI study schedule</strong>, test-takers often panic, run out of time, or use the wrong tone for formal tasks. A systematic approach ensures you build muscle memory for the specific text types you will face: informal messages, formal letters, and opinion pieces. Effective <strong>Finnish exam preparation</strong> is about mastering these templates, not just translating thoughts from English to Finnish.
        </p>

        <h2 className="text-2xl font-bold text-blue-800 mt-10 mb-4">
          Phase 1: Informal & Semi-Formal Messages (Days 1-7)
        </h2>
        <p className="mb-4">
          The first task in the exam is usually an informal message to a friend or colleague. It evaluates your ability to handle everyday situations.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Days 1-2:</strong> Practice writing invitations and acceptances/declinations (e.g., inviting a friend to a cabin, declining a birthday party due to illness).</li>
          <li><strong>Days 3-4:</strong> Focus on asking for help or offering apologies (e.g., asking a neighbor to water your plants).</li>
          <li><strong>Days 5-7:</strong> Write short emails to colleagues regarding workplace scheduling or sick leave.</li>
        </ul>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="font-semibold mb-2">Examiner Tip: Keep it Natural</p>
          <p className="text-sm">For informal tasks, use spoken language features cautiously. Standard language (kirjakieli) is always safe, but appropriate colloquial greetings (<em>Moi! Mitä kuuluu?</em>) set the right tone.</p>
        </div>

        <h2 className="text-2xl font-bold text-blue-800 mt-10 mb-4">
          Phase 2: Formal Messages & Complaints (Days 8-14)
        </h2>
        <p className="mb-4">
          Task two often requires formal communication. The tone must be polite, objective, and clear.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Days 8-10:</strong> Write complaints (<em>valitus</em>) about defective products or poor service. Clearly state the problem and what compensation you expect.</li>
          <li><strong>Days 11-12:</strong> Practice writing feedback to the city council (e.g., requesting better street lighting or a new dog park).</li>
          <li><strong>Days 13-14:</strong> Draft short cover letters responding to simple job advertisements.</li>
        </ul>
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-3">Essential Formal Vocabulary (B1 Level)</h3>
          <ul className="list-none space-y-2">
            <li>✅ <strong>To whom it may concern:</strong> <em>Vastaanottajalle</em> or <em>Hyvä asiakaspalvelu</em></li>
            <li>✅ <strong>I am writing because:</strong> <em>Kirjoitan teille, koska...</em></li>
            <li>✅ <strong>I demand compensation:</strong> <em>Vaadin korvausta...</em></li>
            <li>✅ <strong>Sincerely:</strong> <em>Ystävällisin terveisin</em></li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-blue-800 mt-10 mb-4">
          Phase 3: The Opinion Piece / Mielipidekirjoitus (Days 15-21)
        </h2>
        <p className="mb-4">
          The final task is an opinion piece. This is where examiners look for B2 level structures and complex sentences. Your <strong>YKI writing practice plan</strong> must dedicate significant time to argument structure.
        </p>
        <ol className="list-decimal pl-6 mb-6 space-y-2">
          <li><strong>Days 15-16 (Structure):</strong> Learn the framework: Introduction of topic, your stance, two supporting arguments, and a concluding thought.</li>
          <li><strong>Days 17-18 (Connectors):</strong> Practice using conjunctions to build flow. Use words like <em>toisaalta</em> (on the other hand), <em>kuitenkin</em> (however), and <em>lisäksi</em> (furthermore).</li>
          <li><strong>Days 19-21 (Full Drafts):</strong> Write complete 150-word opinion pieces on common YKI topics: remote work, recycling, public transport, and health.</li>
        </ol>

        <h2 className="text-2xl font-bold text-blue-800 mt-10 mb-4">
          Phase 4: Timed Simulation & Review (Days 22-30)
        </h2>
        <p className="mb-4">
          Knowing how to write is different from knowing how to write under pressure. The final week of your schedule is dedicated to exam conditions.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Days 22-25:</strong> Do complete writing exams (all 3 tasks) in exactly 55 minutes. Do not use a dictionary.</li>
          <li><strong>Days 26-28:</strong> Analyze your mistakes. Are you failing on partitive/genitive cases? Are your sentences too simple? Rewrite your weak texts.</li>
          <li><strong>Days 29-30:</strong> Rest, review your vocabulary lists, and memorize your favorite sentence starters.</li>
        </ul>

      </article>

      {/* Related Articles */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
        <ul className="space-y-2">
          <li><Link href="/wiki/guides/how-to-improve-finnish-writing-skills-yki-test" className="text-blue-700 hover:underline">How to Improve Finnish Writing Skills for YKI Test</Link></li>
          <li><Link href="/wiki/guides/how-long-to-prepare-for-yki-writing-test" className="text-blue-700 hover:underline">How Long Does It Take to Prepare for YKI Writing Test?</Link></li>
        </ul>
      </nav>

      <section className="mt-16 bg-blue-900 text-white rounded-2xl p-10 text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to test your YKI writing skills?</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Don't guess what your level is. Put your 30-day study schedule into practice, simulate real exam conditions, and get immediate feedback on your writing from AI trained on YKI grading criteria.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-white text-blue-900 font-bold text-lg px-8 py-4 rounded-full shadow hover:bg-gray-100 transition duration-300"
        >
          Start Your Practice Test Now
        </Link>
      </section>

      <section className="mt-16 border-t border-gray-200 pt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">How much time per day does this YKI writing preparation plan require?</h3>
            <p className="text-gray-600">You should dedicate 45 to 60 minutes per day to follow this schedule. This allows enough time to write a practice text and review your mistakes against the B1-B2 grading criteria.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">What topics should I include in my YKI writing practice plan?</h3>
            <p className="text-gray-600">Focus on the three standard YKI writing tasks: informal messages (emails/invitations), formal messages (complaints/job applications), and opinion pieces (mielipidekirjoitus). Generic Finnish exercises won't prepare you for these specific formats.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">How is the YKI writing test graded at the intermediate (keskitaso) level?</h3>
            <p className="text-gray-600">Examiners evaluate your text based on task completion, comprehensibility, vocabulary range, and grammatical accuracy. At B1-B2, perfect grammar is not required, but your core message must be clear and appropriately formatted for the intended audience.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
