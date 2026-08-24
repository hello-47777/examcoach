import Link from 'next/link';
import { Metadata } from 'next';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('guides', 'yki-writing-feedback-guide', {
  title: 'YKI Writing Feedback Guide: Understand Your AI Examiner Report',
  description: 'Master the YKI Finnish exam with our definitive YKI writing feedback guide. Learn how to decode your YKI writing score report and build a targeted YKI improvement plan.',
});

export default function YKIWritingFeedbackGuidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I use a YKI writing feedback guide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A YKI writing feedback guide helps you systematically review your AI examiner report, identify recurring grammar or structural mistakes, and rewrite your Finnish texts to meet the official YKI B1 grading criteria."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in a YKI writing score report?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard YKI writing score report evaluates your text based on three official criteria: message transmission (viestin välittyminen), text structure (tekstin rakentuminen), and linguistic accuracy (kielellinen laajuus ja tarkkuus)."
        }
      },
      {
        "@type": "Question",
        "name": "How do I create a YKI improvement plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To create a YKI improvement plan, collect your Finnish writing corrections, categorize your most common mistakes (e.g., object cases, verb rections), study those specific rules, and practice writing new texts targeting those weaknesses."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-white shadow-sm rounded-lg mt-8">
        
        <article className="prose prose-lg prose-slate max-w-none">
          <header className="mb-10 border-b pb-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              YKI Writing Feedback Guide: Understand Your AI Examiner Report
            </h1>
            <p className="text-xl text-slate-600">
              Welcome to our definitive <strong>YKI writing feedback guide</strong>. Practicing for the YKI Finnish test is only half the battle; the real progress happens when you know exactly how to interpret your evaluations and apply them to your next essay.
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Why You Need a YKI Writing Feedback Guide
            </h2>
            <p className="mb-4">
              Many test-takers practice blindly, making the same grammatical mistakes over and over. By learning to properly read your <strong>YKI writing score report</strong>, you transition from passive studying to active mastery. This guide will walk you through a step-by-step process to decode your AI examiner feedback, execute the perfect <strong>Finnish writing correction</strong>, and construct a personalized <strong>YKI improvement plan</strong> to guarantee your B1 certificate.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Step 1: Analyzing Your YKI Writing Score Report
            </h2>
            <p className="mb-4">
              When you receive an AI-generated examiner report, it won&apos;t just say &quot;Good job.&quot; It will break your performance down into the three official YKI evaluation categories. Here is how to read them:
            </p>
            <div className="bg-slate-100 p-6 rounded-lg border border-slate-200 mb-6">
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Viestin välittyminen (Message Transmission):</strong> Did you answer all the bullet points in the prompt? If your score here is low, you are likely misunderstanding the prompt or writing off-topic.
                </li>
                <li>
                  <strong>Tekstin rakentuminen (Text Organization):</strong> Are your paragraphs logical? Do you use connectors (koska, siksi, sen sijaan)? A low score here means your sentences are too disjointed.
                </li>
                <li>
                  <strong>Kielellinen laajuus ja tarkkuus (Linguistic Accuracy):</strong> This evaluates your vocabulary, spelling, and grammar (especially noun cases and verb rections). 
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Step 2: Processing the Finnish Writing Correction
            </h2>
            <p className="mb-4">
              Your AI examiner will provide specific line-by-line corrections. To benefit from a <strong>Finnish writing correction</strong>, you must understand the <em>why</em> behind the mistake, not just the <em>what</em>.
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-200">
                    <th className="p-3 border-b-2 border-slate-300 font-semibold text-sm">Your Original Sentence</th>
                    <th className="p-3 border-b-2 border-slate-300 font-semibold text-sm">AI Examiner Correction</th>
                    <th className="p-3 border-b-2 border-slate-300 font-semibold text-sm">The &quot;Why&quot; (Rule)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3">Minä osallistun kokous.</td>
                    <td className="p-3">Minä osallistun <strong>kokoukseen</strong>.</td>
                    <td className="p-3">The verb <em>osallistua</em> requires the illative case (mihin).</td>
                  </tr>
                  <tr>
                    <td className="p-3">Minulla on uusi auto. Se on kaunis auto.</td>
                    <td className="p-3">Minulla on uusi auto, <strong>joka</strong> on kaunis.</td>
                    <td className="p-3">Using relative pronouns (joka/mikä) improves text flow and scores higher on Text Organization.</td>
                  </tr>
                  <tr>
                    <td className="p-3">Kiitos varten apu!</td>
                    <td className="p-3">Kiitos <strong>avusta</strong>!</td>
                    <td className="p-3">Direct translation from English &quot;for help.&quot; Finnish uses the elative case with <em>kiitos</em>.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Step 3: Executing Your YKI Improvement Plan
            </h2>
            <p className="mb-4">
              Reading the feedback is not enough. You must integrate it into a structured <strong>YKI improvement plan</strong>. Follow this exact workflow after receiving every report:
            </p>
            <ol className="list-decimal pl-6 space-y-4">
              <li><strong>The Manual Rewrite:</strong> Re-type your entire text from scratch, integrating every single correction. Do not copy-paste. The physical act of typing builds muscle memory for correct grammar.</li>
              <li><strong>The Mistake Journal:</strong> Create a digital spreadsheet. Every time you make a case error (e.g., using partitive instead of genitive), log it. Review this journal before your next practice session.</li>
              <li><strong>Targeted Drilling:</strong> If your AI examiner flags &quot;verb rections&quot; as your weakest point three times in a row, pause writing essays. Spend two days solely practicing verb rections.</li>
              <li><strong>The Feedback Loop:</strong> Once you have studied your weak points, attempt a new prompt of the same text type (e.g., formal complaint) and submit it to see if your score improves.</li>
            </ol>
          </section>

          <section className="mb-12 bg-slate-800 text-slate-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">
              Realistic Example: Decoding Examiner Feedback
            </h2>
            <p className="mb-4 text-slate-300">
              Here is an example of what an AI-generated YKI report looks like and how to extract actionable steps from it:
            </p>
            <div className="font-mono text-sm space-y-4">
              <div className="border-l-4 border-emerald-500 pl-4">
                <span className="text-emerald-400 font-bold block mb-1">AI Report Snippet:</span>
                <p>&quot;Grade: <span className="text-white font-bold">Below B1</span>. Your message was understandable, fulfilling the Viestin välittyminen criteria. However, you repeatedly failed to use the partitive case with negative verbs. Example: &apos;Minä en osta auto&apos; should be &apos;Minä en osta autoa&apos;.&quot;</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <span className="text-blue-400 font-bold block mb-1">Your Action Step:</span>
                <p>Log &quot;Negative Object = Partitive&quot; into your mistake journal. Rewrite the essay. Spend 20 minutes reviewing the object rule for negative sentences before the next practice test.</p>
              </div>
            </div>
          </section>

        </article>

        <section className="mt-16 bg-indigo-50 border border-indigo-100 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Get Your Own Score Report?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Stop guessing what the examiner wants. Write a practice text, get a detailed AI examiner report, and start following your personalized YKI improvement plan today.
          </p>
          {/* Internal Links - Related Articles */}
          <nav className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8 not-prose">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Related Articles</h2>
            <ul className="space-y-2">
              <li><Link href="/wiki/guides/check-finnish-writing-level-online" className="text-blue-700 hover:underline">Check Finnish Writing Level Online With AI Evaluation</Link></li>
              <li><Link href="/wiki/scoring/yki-opinion-writing-scoring" className="text-blue-700 hover:underline">YKI Opinion Writing Scoring: How Examiners Grade Your Essay</Link></li>
              <li><Link href="/wiki/guides/ai-yki-writing-checker" className="text-blue-700 hover:underline">AI YKI Writing Checker: Check Your Finnish Writing Level Instantly</Link></li>
            </ul>
          </nav>

          {/* CTA Section */}
          <a
            href="/"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Get Your YKI Writing Feedback Now
          </a>
        </section>

        <section className="mt-16 pt-10 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-slate-800">How do I use a YKI writing feedback guide?</h3>
              <p className="text-slate-600 mt-2">A YKI writing feedback guide helps you systematically review your AI examiner report, identify recurring grammar or structural mistakes, and rewrite your Finnish texts to meet the official YKI B1 grading criteria.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-800">What is included in a YKI writing score report?</h3>
              <p className="text-slate-600 mt-2">A standard YKI writing score report evaluates your text based on three official criteria: message transmission (viestin välittyminen), text structure (tekstin rakentuminen), and linguistic accuracy (kielellinen laajuus ja tarkkuus).</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-800">How do I create a YKI improvement plan?</h3>
              <p className="text-slate-600 mt-2">To create a YKI improvement plan, collect your Finnish writing corrections, categorize your most common mistakes (e.g., object cases, verb rections), study those specific rules, and practice writing new texts targeting those weaknesses.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}