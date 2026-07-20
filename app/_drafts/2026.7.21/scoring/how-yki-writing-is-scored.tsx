import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How YKI Writing is Scored: Complete Examiner Guide',
  description: 'Understand exactly how YKI writing scoring works. Learn the YKI writing assessment criteria, and discover what separates YKI level 3 writing from level 4.',
  openGraph: {
    title: 'How YKI Writing is Scored: Complete Examiner Guide',
    description: 'Understand exactly how YKI writing scoring works. Learn the YKI writing assessment criteria, and discover what separates YKI level 3 writing from level 4.',
    type: 'article',
  },
};

export default function YkiWritingScoring() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does YKI writing scoring work for task fulfillment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Task fulfillment is paramount in YKI writing scoring. If a prompt has three bullet points, you must answer all three. Missing even one point can prevent you from achieving a passing grade, regardless of your grammar."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a level 3 with grammar mistakes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, YKI level 3 writing allows for grammar mistakes, provided they do not hinder the reader's understanding. The main goal at this level is successful, understandable communication in everyday situations."
        }
      },
      {
        "@type": "Question",
        "name": "What is the main difference between YKI level 3 and level 4?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The transition from level 3 to level 4 depends on vocabulary range, grammatical control, and sentence complexity. A level 4 writer uses varied vocabulary and connects sentences smoothly, whereas a level 3 writer relies on basic, repetitive structures."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Header Section */}
        <header className="px-8 pt-12 pb-8 border-b border-gray-100">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            How YKI Writing is Scored: Complete Examiner Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Take the guesswork out of your exam preparation by understanding exactly how evaluators grade your Finnish writing.
          </p>
        </header>

        {/* Content Section */}
        <div className="px-8 py-10 prose prose-lg prose-blue max-w-none text-gray-700">
          <p>
            One of the biggest anxieties for test-takers is not knowing how their answers will be evaluated. Mastering the mechanics of <strong>YKI writing scoring</strong> is crucial for passing the intermediate Finnish exam (keskitaso). Unlike school tests that deduct points for every minor spelling error, the YKI exam evaluates your overall ability to communicate effectively in real-world scenarios.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            The Foundation of YKI Writing Scoring
          </h2>
          <p>
            The YKI exam is a proficiency test, meaning it looks at what you <em>can</em> do rather than penalizing you for what you cannot. Examiners review your text holistically. To pass the intermediate level, you need to achieve an overall score of 3 (or 4 for a stronger pass). Let&apos;s break down the precise <strong>YKI writing assessment criteria</strong> used by evaluators.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">The 4 Pillars of Evaluation</h3>
            <ol className="list-decimal pl-6 text-blue-800 space-y-3 m-0">
              <li><strong>Task Fulfillment:</strong> Did you do what the prompt asked? If you were asked to invite a friend, suggest a time, and mention food, did you include all three elements?</li>
              <li><strong>Comprehensibility:</strong> Can a native Finnish speaker understand your message without having to guess your meaning?</li>
              <li><strong>Register and Tone:</strong> Did you use formal language (kirjakieli) for official emails and a more relaxed tone for messages to friends?</li>
              <li><strong>Grammar and Vocabulary:</strong> Do you have enough vocabulary to express your thoughts, and is your sentence structure generally accurate?</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            What Defines YKI Level 3 Writing?
          </h2>
          <p>
            Skill Level 3 is the minimum passing grade required for Finnish citizenship. <strong>YKI level 3 writing</strong> means you can handle common, everyday writing tasks independently.
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Vocabulary:</strong> You use basic, everyday vocabulary effectively. You might repeat words (e.g., using <em>&quot;hyvä&quot;</em> multiple times) but you get the point across.</li>
            <li><strong>Grammar:</strong> You make mistakes. For example, you might confuse partitive and genitive cases, or struggle with complex verb conjugations (like the conditional). <em>This is perfectly acceptable at Level 3.</em></li>
            <li><strong>Flow:</strong> Sentences are often short and simple. You might connect them with basic conjunctions like <em>ja</em> (and), <em>mutta</em> (but), or <em>koska</em> (because).</li>
            <li><strong>Examiner&apos;s Verdict:</strong> &quot;The text has clear grammatical flaws, but the message is completely understandable and fulfills the prompt&apos;s requirements.&quot;</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Achieving YKI Level 4 Writing: The Differences
          </h2>
          <p>
            If you want a stronger certificate, you must aim higher. <strong>YKI level 4 writing</strong> demonstrates a solid command of the language, pushing beyond basic survival Finnish into comfortable, natural communication.
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Vocabulary:</strong> You use varied and precise vocabulary. Instead of just saying a hotel was <em>&quot;huono&quot;</em> (bad), you might say it was <em>&quot;likainen ja meluisa&quot;</em> (dirty and noisy).</li>
            <li><strong>Grammar:</strong> You show control over intermediate structures. You successfully use the conditional (<em>haluaisin</em>), past tenses (imperfect and perfect), and generally get your cases right.</li>
            <li><strong>Flow:</strong> You write cohesive paragraphs. You use connecting words like <em>kuitenkin</em> (however), <em>lisäksi</em> (additionally), and <em>toisaalta</em> (on the other hand).</li>
            <li><strong>Examiner&apos;s Verdict:</strong> &quot;The candidate communicates clearly and fluently, handles routine and non-routine situations well, and shows good control of grammar despite occasional minor errors.&quot;</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Finnish Writing Evaluation: Common Traps That Lower Your Score
          </h2>
          <p>
            Understanding the <strong>Finnish writing evaluation</strong> process also means knowing what automatically drops your score below a 3 (resulting in a fail).
          </p>
          <div className="space-y-6">
            <div className="border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-red-700 mb-2">Trap 1: Ignoring the Bullet Points</h4>
              <p className="mb-2"><strong>The Mistake:</strong> Writing a flawless text about your weekend, but failing to address the specific problem mentioned in the prompt (e.g., asking for a refund).</p>
              <p className="text-gray-700"><strong>The Score Impact:</strong> Even with perfect grammar, failing to complete the task can drop you to a Level 2. Task fulfillment is non-negotiable.</p>
            </div>
            
            <div className="border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-red-700 mb-2">Trap 2: Direct Translation Disasters</h4>
              <p className="mb-2"><strong>The Mistake:</strong> Trying to write complicated, highly nuanced sentences by directly translating idioms from English or your native language into Finnish.</p>
              <p className="text-gray-700"><strong>The Score Impact:</strong> This usually destroys comprehensibility. If an examiner cannot decipher what your sentence means, you lose points. Keep it simple and Finnish.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 px-8 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Your Writing Scored Before the Real Exam
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t wait until test day to find out what level your writing is at. Use our AI-powered simulator to write practice texts and receive instant feedback based on official examiner criteria.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            Check Your Writing Score
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="px-8 py-12 bg-white">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How does YKI writing scoring work for task fulfillment?</h3>
              <p className="text-gray-700">
                Task fulfillment is paramount in YKI writing scoring. If a prompt has three bullet points, you must answer all three. Missing even one point can prevent you from achieving a passing grade, regardless of your grammar.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I get a level 3 with grammar mistakes?</h3>
              <p className="text-gray-700">
                Yes, YKI level 3 writing allows for grammar mistakes, provided they do not hinder the reader&apos;s understanding. The main goal at this level is successful, understandable communication in everyday situations.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What is the main difference between YKI level 3 and level 4?</h3>
              <p className="text-gray-700">
                The transition from level 3 to level 4 depends on vocabulary range, grammatical control, and sentence complexity. A level 4 writer uses varied vocabulary and connects sentences smoothly, whereas a level 3 writer relies on basic, repetitive structures.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}