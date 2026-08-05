import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Message Writing Scoring: How Examiners Evaluate Messages',
  description: 'Understand the YKI message writing scoring system. Learn the exact YKI grading criteria examiners use and how to achieve a passing Finnish writing score.',
  alternates: {
    canonical: '/wiki/scoring/yki-message-writing-scoring',
  },
  openGraph: {
    title: 'YKI Message Writing Scoring: How Examiners Evaluate Messages',
    description: 'Understand the YKI message writing scoring system. Learn the exact YKI grading criteria examiners use and how to achieve a passing Finnish writing score.',
    type: 'article',
  }
};

export default function YkiMessageWritingScoringPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the most important factor in YKI message writing scoring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most important factor is communicative success (viestinnällinen onnistuminen). If your message successfully answers all parts of the prompt and can be easily understood by the reader, you are well on your way to a passing Finnish writing score, even if there are minor grammatical errors."
        }
      },
      {
        "@type": "Question",
        "name": "Do grammatical mistakes mean I will fail the YKI writing assessment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. In the intermediate YKI writing assessment, examiners expect some grammatical mistakes. As long as the mistakes do not block the meaning of the message, you can still achieve a passing level (Level 3 or 4)."
        }
      },
      {
        "@type": "Question",
        "name": "How does word choice affect my YKI grading criteria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vocabulary (sanasto) is a key part of the YKI grading criteria. Using a varied and appropriate vocabulary for the specific situation (formal vs. informal) shows the examiner your language range, which is necessary for securing a Level 4 score."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <article className="max-w-3xl mx-auto px-6 pt-12">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            YKI Message Writing Scoring: How Examiners Evaluate Messages
          </h1>
        </header>

        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
          <p className="lead text-xl text-gray-600 mb-8">
            If you are preparing for the Finnish intermediate language test, understanding <strong>YKI message writing scoring</strong> is your biggest advantage. Many test-takers worry excessively about perfect grammar, but examiners evaluate your responses based on a specific set of holistic criteria.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
            The Foundation of YKI Message Writing Scoring
          </h2>
          <p>
            In the <strong>YKI writing assessment</strong>, examiners do not just count your mistakes and subtract points. Instead, they look at your text as a complete piece of communication. The goal of the intermediate test (keskitaso) is to determine whether your language skills meet Level 3 or Level 4 on the European Framework of Reference (CEFR B1-B2).
          </p>
          <p>
            To achieve a passing <strong>Finnish writing score</strong>, your message must demonstrate that you can manage everyday situations in Finnish independently. Let us break down the exact <strong>YKI grading criteria</strong> used by the evaluators.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            1. Communicative Success (Viestinnällinen onnistuminen)
          </h3>
          <p>
            This is the most critical part of the evaluation. The examiner asks one primary question: <em>Did the writer accomplish the task?</em>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Answering the prompt:</strong> If the prompt asks you to apologize, explain why you are absent, and propose a new meeting time, you must include all three points. Missing a point will heavily impact your score.</li>
            <li><strong>Comprehensibility:</strong> The examiner must be able to understand your message without having to guess your meaning.</li>
            <li><strong>Register and Tone:</strong> If you are writing to a friend, the tone should be informal. If you are writing a complaint to a company, it should be polite and formal. Using the wrong register shows a lack of communicative awareness.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            2. Text Organization (Tekstin organisaatio)
          </h3>
          <p>
            A passing text needs a logical flow. Examiners evaluate how well you structure your thoughts and connect your sentences.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Cohesion:</strong> Are you using basic conjunctions properly? Words like <em>koska</em> (because), <em>mutta</em> (but), <em>joten</em> (so), and <em>siksi</em> (therefore) are essential for connecting ideas.</li>
            <li><strong>Structure:</strong> Does the message have a clear greeting (e.g., <em>Hei!</em>), a main body explaining the issue, and an appropriate closing (e.g., <em>Terveisin</em>)?</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            3. Linguistic Range and Accuracy (Kielellinen laajuus ja tarkkuus)
          </h3>
          <p>
            While perfect grammar is not required for a passing score, your vocabulary and sentence structures play a significant role in determining whether you get a Level 3 or a Level 4.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Vocabulary:</strong> Using versatile and situation-appropriate words boosts your score. Repeating the exact same basic verbs lowers it.</li>
            <li><strong>Grammar (Kielioppi):</strong> Examiners look for basic control of cases (partitive, genitive, locative cases) and verb conjugations. Mistakes are fully allowed at Level 3, provided they do not obscure the meaning (e.g., writing <em>Minä menen auto</em> instead of <em>Minä menen autolla</em> is a mistake, but the meaning is still clear).</li>
            <li><strong>Sentence Variety:</strong> A mix of main clauses and subordinate clauses shows a higher level of proficiency than writing only short, simple sentences.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
            Level 3 vs. Level 4: What is the Difference?
          </h2>
          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-4 px-6 text-left font-bold text-gray-700 border-b">Criteria</th>
                  <th className="py-4 px-6 text-left font-bold text-gray-700 border-b">Level 3 (Passing)</th>
                  <th className="py-4 px-6 text-left font-bold text-gray-700 border-b">Level 4 (Strong Pass)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-800 font-medium">Task Completion</td>
                  <td className="py-4 px-6 text-gray-600">Completes the main task, understandable despite errors.</td>
                  <td className="py-4 px-6 text-gray-600">Completes all parts of the task smoothly and naturally.</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-800 font-medium">Vocabulary</td>
                  <td className="py-4 px-6 text-gray-600">Basic everyday vocabulary, some repetition.</td>
                  <td className="py-4 px-6 text-gray-600">Varied vocabulary, idiomatic expressions used correctly.</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-800 font-medium">Grammar</td>
                  <td className="py-4 px-6 text-gray-600">Noticeable errors that do not block communication.</td>
                  <td className="py-4 px-6 text-gray-600">Good control of grammar, occasional minor errors.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
            How to Improve Your YKI Writing Score Today
          </h2>
          <p>
            To maximize your performance on test day, practice writing with the examiner's perspective in mind. Always double-check that you have answered every bullet point in the task prompt. Memorize standard greetings and sign-offs for both formal and informal messages. Finally, focus on clear communication first—worry about perfect grammar second.
          </p>
        </div>

        {/* Internal Links - Related Articles */}
        <nav className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 not-prose">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
          <ul className="space-y-2">
            <li><Link href="/wiki/guides/yki-message-writing-mistakes" className="text-blue-700 hover:underline">Common YKI Message Writing Mistakes Students Make</Link></li>
            <li><Link href="/wiki/scoring/yki-opinion-writing-scoring" className="text-blue-700 hover:underline">YKI Opinion Writing Scoring: How Examiners Grade Your Essay</Link></li>
          </ul>
        </nav>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Master YKI Message Writing?</h3>
          <p className="text-gray-700 mb-6">
            Stop guessing what the examiners want. Practice with AI-powered feedback tailored to the official YKI grading criteria.
          </p>
          <Link 
            href="/"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Start Practicing Now
          </Link>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">What is the most important factor in YKI message writing scoring?</h3>
              <p className="text-gray-700">
                The most important factor is communicative success (viestinnällinen onnistuminen). If your message successfully answers all parts of the prompt and can be easily understood by the reader, you are well on your way to a passing Finnish writing score, even if there are minor grammatical errors.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Do grammatical mistakes mean I will fail the YKI writing assessment?</h3>
              <p className="text-gray-700">
                No. In the intermediate YKI writing assessment, examiners expect some grammatical mistakes. As long as the mistakes do not block the meaning of the message, you can still achieve a passing level (Level 3 or 4).
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">How does word choice affect my YKI grading criteria?</h3>
              <p className="text-gray-700">
                Vocabulary (sanasto) is a key part of the YKI grading criteria. Using a varied and appropriate vocabulary for the specific situation (formal vs. informal) shows the examiner your language range, which is necessary for securing a Level 4 score.
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}