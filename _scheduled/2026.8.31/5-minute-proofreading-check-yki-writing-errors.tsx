import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '5-Minute Proofreading: How to Check Your YKI Writing for Errors',
  description: 'Learn a step-by-step 5-minute framework to check YKI writing errors before time runs out. Avoid common Finnish spelling mistakes and maximize your exam score.',
  keywords: ['check YKI writing errors', 'Finnish grammar check', 'YKI exam proofreading', 'Common Finnish spelling mistakes'],
  alternates: {
    canonical: '/5-minute-proofreading-check-yki-writing-errors',
  },
};

export default function YkiProofreadingGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much time should I leave for proofreading in the YKI writing test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should reserve at least 5 minutes at the end of the writing test. This gives you enough time to scan for obvious grammatical errors, missing words, and spelling mistakes without panicking."
        }
      },
      {
        "@type": "Question",
        "name": "Will one spelling mistake cause me to fail the YKI test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Examiners at the B1 level expect some mistakes. However, if a spelling mistake changes the meaning of the word (like mixing up single and double consonants) and confuses the reader, it will negatively impact your vocabulary and grammar score."
        }
      },
      {
        "@type": "Question",
        "name": "What is the most common grammar mistake to check for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common mistakes occur with verb rections (verbs that require a specific case, like the partitive or illative) and subject-verb agreement (especially third-person plural 'he')."
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="prose prose-lg prose-blue max-w-none">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            5-Minute Proofreading: How to Check Your YKI Writing for Errors
          </h1>
          <p className="text-xl text-gray-600">
            A step-by-step guide to finding and fixing the most critical mistakes in your Finnish exam before time is up.
          </p>
        </header>

        <section className="mb-12">
          <p>
            When the clock is ticking down in the Finnish language proficiency test, those last few minutes are critical. Knowing how to efficiently <strong>check YKI writing errors</strong> can be the difference between a failing grade (level 2) and a solid passing score (level 3). Under time pressure, even advanced learners make simple slips in verb agreement or word cases.
          </p>
          <p>
            You do not have time to rewrite your entire essay. Instead, you need a systematic approach to <strong>YKI exam proofreading</strong>. This guide will walk you through a targeted 5-minute proofreading framework designed specifically for the grading criteria of the YKI test.
          </p>
        </section>

        <hr className="my-8 border-gray-200" />

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Why You Need to Check YKI Writing Errors
          </h2>
          <p>
            YKI evaluators use a specific rubric to grade your texts. Your final score is not just based on how "advanced" your vocabulary is, but on how effectively you communicate. Leaving basic errors in your text damages two specific grading criteria:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Grammar and Vocabulary:</strong> Repeated basic errors signal that you have not mastered B1-level structures.</li>
            <li><strong>Task Achievement:</strong> If your errors make a sentence incomprehensible, the examiner might conclude you failed to answer the prompt.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            The 5-Minute Framework: How to Check YKI Writing Errors
          </h2>
          <p>
            When you have 5 minutes left, put your pencil down for 10 seconds, take a deep breath, and perform a rapid, targeted read-through. Do not read for "flow"; read for mechanics. Follow these four steps.
          </p>

          <div className="space-y-8 mt-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Minute 1: Check Subject-Verb Agreement</h3>
              <p className="text-gray-700 mb-3">
                Read only the subjects and verbs of your sentences. Ensure the verb ending matches the pronoun perfectly. The most commonly missed agreement in the stress of the exam is the third-person plural (<em>he</em>) and the passive voice.
              </p>
              <div className="bg-red-50 p-3 rounded text-red-900 text-sm mb-2">
                <strong>Mistake:</strong> He menee kouluun. (They goes to school)
              </div>
              <div className="bg-green-50 p-3 rounded text-green-900 text-sm">
                <strong>Correction:</strong> He menevä<strong>t</strong> kouluun.
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Minute 2: Scan for Common Finnish Spelling Mistakes</h3>
              <p className="text-gray-700 mb-3">
                Scan your text exclusively for double letters (consonants and vowels) and umlauts (ä, ö, y). <strong>Common Finnish spelling mistakes</strong> in these areas can drastically change the meaning of your sentence, causing the examiner to deduct points for vocabulary.
              </p>
              <div className="bg-red-50 p-3 rounded text-red-900 text-sm mb-2">
                <strong>Meaning Change Alert:</strong> <em>tapaan</em> (I meet) vs. <em>tapan</em> (I kill). <em>Tuuli</em> (wind) vs. <em>tuli</em> (fire).
              </div>
              <p className="text-sm text-gray-600 italic">
                Tip: Visually check every long word to ensure you haven't dropped a double consonant in the middle (k, p, t gradation).
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Minute 3: The Rapid Finnish Grammar Check (Cases & Rections)</h3>
              <p className="text-gray-700 mb-3">
                Perform a mental <strong>Finnish grammar check</strong> on your objects. If you used verbs like <em>rakastaa</em> (to love), <em>auttaa</em> (to help), or <em>etsiä</em> (to look for), ensure the word following it is in the partitive case. 
              </p>
              <div className="bg-red-50 p-3 rounded text-red-900 text-sm mb-2">
                <strong>Mistake:</strong> Minä autan sinä.
              </div>
              <div className="bg-green-50 p-3 rounded text-green-900 text-sm">
                <strong>Correction:</strong> Minä autan sinu<strong>a</strong>.
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Minutes 4-5: Verify Task Requirements</h3>
              <p className="text-gray-700">
                Finally, look back at the exam prompt. Did it ask you to give an opinion, suggest a solution, and ask a question? Check your text to ensure you have explicitly written a sentence for every single bullet point in the prompt. If you missed one, use this final minute to add a short, simple sentence at the end.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Essential Proofreading Vocabulary
          </h2>
          <p>
            If you need to quickly fix a transition during your proofreading phase to make your text sound more cohesive, insert these simple conjunctions to link your ideas better:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="border border-gray-200 rounded p-4">
              <p className="font-bold">To add information:</p>
              <ul className="list-disc pl-5 mt-2">
                <li><em>Lisäksi</em> (In addition)</li>
                <li><em>Myös</em> (Also)</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <p className="font-bold">To show contrast:</p>
              <ul className="list-disc pl-5 mt-2">
                <li><em>Kuitenkin</em> (However)</li>
                <li><em>Vaikka</em> (Although)</li>
              </ul>
            </div>
          </div>
        </section>
      </article>

      <hr className="my-12 border-gray-200" />

      {/* CTA Section */}
      <section className="bg-blue-600 rounded-2xl p-8 sm:p-10 text-center shadow-lg mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">
          Practice Proofreading with Instant Feedback
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          The best way to catch errors on exam day is to know exactly what mistakes you make most often. Use ExamCoach.ai to practice YKI writing tasks and receive instant, AI-driven corrections and grading based on official YKI criteria.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-white text-blue-700 font-semibold text-lg px-8 py-4 rounded-full shadow hover:bg-gray-50 transition-colors duration-300"
        >
          Start Your Free Writing Practice
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              How much time should I leave for proofreading in the YKI writing test?
            </h3>
            <p className="text-gray-700">
              You should reserve at least 5 minutes at the end of the writing test. This gives you enough time to scan for obvious grammatical errors, missing words, and spelling mistakes without panicking.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Will one spelling mistake cause me to fail the YKI test?
            </h3>
            <p className="text-gray-700">
              No. Examiners at the B1 level expect some mistakes. However, if a spelling mistake changes the meaning of the word (like mixing up single and double consonants) and confuses the reader, it will negatively impact your vocabulary and grammar score.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What is the most common grammar mistake to check for?
            </h3>
            <p className="text-gray-700">
              The most common mistakes occur with verb rections (verbs that require a specific case, like the partitive or illative) and subject-verb agreement (especially third-person plural 'he'). Checking these first offers the biggest boost to your score.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}