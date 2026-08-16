import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Level 3 vs Level 4 Writing: What Is The Difference?',
  description: 'Understand the core differences between YKI level 3 vs level 4 writing. Learn the YKI scoring criteria to improve your score in the Finnish writing assessment.',
  openGraph: {
    title: 'YKI Level 3 vs Level 4 Writing: What Is The Difference?',
    description: 'Understand the core differences between YKI level 3 vs level 4 writing. Learn the YKI scoring criteria to improve your score in the Finnish writing assessment.',
    type: 'article',
  },
};

export default function YkiLevel3VsLevel4Writing() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is YKI Level 3 enough for Finnish citizenship?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, achieving Level 3 in the writing subtest (along with passing the required combination of other subtests) satisfies the language requirement for Finnish citizenship. However, aiming for Level 4 ensures a comfortable safety margin."
        }
      },
      {
        "@type": "Question",
        "name": "Does poor spelling prevent me from getting a Level 4 in writing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. According to the YKI scoring criteria, Level 4 writers can still make minor spelling or grammatical errors, as long as they do not hinder the reader's understanding or distract significantly from the text."
        }
      },
      {
        "@type": "Question",
        "name": "What is the fastest way to jump from Level 3 to Level 4?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The fastest way to improve is by mastering subordinate clauses (sivulauseet) using words like koska, vaikka, and että, and upgrading your basic vocabulary to more descriptive, formal alternatives depending on the task."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Article Header */}
        <header className="bg-blue-900 text-white py-12 px-8 sm:px-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            YKI Level 3 vs Level 4 Writing: What Is The Difference?
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Master the official evaluation standards and learn exactly what examiners look for when grading your Finnish writing assessment.
          </p>
        </header>

        {/* Article Content */}
        <article className="py-12 px-8 sm:px-12 prose prose-lg prose-blue max-w-none text-gray-700">
          <p>
            For most test-takers, passing the intermediate (Keskitaso) exam is the ultimate goal. But when you receive your results, there is a massive distinction in the feedback between a 3 and a 4. Understanding the exact difference in <strong>YKI level 3 vs level 4 writing</strong> is crucial, not just for passing, but for confidently knowing you have secured the language certificate needed for Finnish citizenship or professional employment.
          </p>
          <p>
            The Finnish writing assessment is designed to test how well you handle everyday and semi-formal written communication. While a Level 3 proves you can survive in Finnish, a Level 4 proves you can actually express yourself with clarity and nuance. Let's break down the official <strong>YKI scoring criteria</strong> to see exactly what separates these two levels.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Core Differences in YKI Level 3 vs Level 4 Writing
          </h2>

          <p>
            Examiners evaluate your text based on message clarity, vocabulary, grammar, and structural complexity. Here is how Level 3 and Level 4 differ across these essential categories:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">1. Vocabulary Range and Precision</h3>
          <ul className="space-y-2 mb-6">
            <li>
              <strong>Level 3 (Basic & Repetitive):</strong> You use common, everyday words (e.g., <em>hyvä, huono, iso, haluan</em>). If you don't know a word, you might struggle to explain your point, or you rely heavily on loan words.
            </li>
            <li>
              <strong>Level 4 (Varied & Precise):</strong> You utilize a broader vocabulary and appropriate adjectives (e.g., <em>mielenkiintoinen, hyödyllinen, vaativa</em>). You can successfully use synonyms to avoid repetition and apply the correct tone depending on whether you are writing an email to a friend or a formal complaint to a company.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">2. Sentence Structure</h3>
          <ul className="space-y-2 mb-6">
            <li>
              <strong>Level 3 (Simple & Disconnected):</strong> Your text consists mostly of short main clauses (Päälauseet). Sentences are strung together with basic conjunctions like <em>ja</em> (and) or <em>mutta</em> (but). 
            </li>
            <li>
              <strong>Level 4 (Complex & Flowing):</strong> You comfortably use subordinate clauses (Sivulauseet). You connect ideas smoothly using conjunctions like <em>koska</em> (because), <em>vaikka</em> (although), <em>että</em> (that), and relative pronouns like <em>joka/mikä</em>.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">3. Grammar and Accuracy</h3>
          <ul className="space-y-2 mb-6">
            <li>
              <strong>Level 3 (Frequent Errors):</strong> Mistakes in cases (Partitive vs. Genitive/Accusative), verb conjugations, and consonant gradation (KPT) are common. However, the <em>core message</em> is still understandable to a sympathetic reader.
            </li>
            <li>
              <strong>Level 4 (Good Control):</strong> You still make mistakes—Level 4 is not perfect! However, errors are occasional and do not interfere with understanding. You demonstrate a solid grasp of basic rections (verbien rektiot) and object rules.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Real Examples: Level 3 vs Level 4 Texts
          </h2>
          <p>
            To illustrate the <strong>YKI scoring criteria</strong> in action, let's look at a typical exam task: <em>Writing an email to a manager to ask for time off due to an important personal matter.</em>
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
            <h4 className="font-bold text-red-900 mt-0 mb-2">Level 3 Example:</h4>
            <p className="italic text-gray-800 mb-2">
              "Hei Matti. Minä tarvitsen vapaapäivä ensi viikolla tiistaina. Minun täytyy mennä lääkäri. Se on tärkeä. Sopiiko tämä? Terveisin, Alex."
            </p>
            <p className="text-sm text-red-800 m-0">
              <strong>Examiner's view:</strong> The message is clear and accomplishes the task. However, it relies on short, choppy sentences. There are minor grammatical issues (e.g., "vapaapäivä" instead of "vapaapäivän", "lääkäri" instead of "lääkäriin"). The tone is a bit too direct for a workplace request.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
            <h4 className="font-bold text-green-900 mt-0 mb-2">Level 4 Example:</h4>
            <p className="italic text-gray-800 mb-2">
              "Hei Matti, Haluaisin pyytää vapaapäivää ensi viikon tiistaille, koska minun täytyy käydä lääkärissä. Toivottavasti tämä sopii, sillä asia on melko tärkeä. Voin tehdä rästityöt keskiviikkona. Ystävällisin terveisin, Alex."
            </p>
            <p className="text-sm text-green-800 m-0">
              <strong>Examiner's view:</strong> Excellent flow. The writer uses the conditional (haluaisin) for politeness, appropriate cases (vapaapäivää, lääkärissä), and connects sentences logically with "koska" and "sillä". The vocabulary is natural and context-appropriate.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How to Upgrade Your Text to Level 4
          </h2>
          <p>
            If you are stuck at Level 3 and want to secure a strong pass in the <strong>Finnish writing assessment</strong>, focus on these three actionable steps during your exam preparation:
          </p>
          <ol className="list-decimal pl-6 space-y-4 mb-8">
            <li>
              <strong>Memorize high-value conjunctions:</strong> Stop starting every sentence with "Minä". Use words like <em>siksi</em> (therefore), <em>kuitenkin</em> (however), and <em>lisäksi</em> (additionally) to link your ideas.
            </li>
            <li>
              <strong>Master basic verb rections:</strong> Knowing which case a verb demands instantly elevates your text. For example, knowing that <em>tykätä</em> takes the <em>-sta/-stä</em> ending (e.g., <em>Tykkään tästä työstä</em>) shows grammatical maturity.
            </li>
            <li>
              <strong>Adapt your tone:</strong> Before you write, ask yourself: "Am I writing to a friend or a company?" Use <em>Sinä</em> and informal greetings for friends, but switch to polite conditionals (<em>Voisitko...</em>) and formal greetings for officials.
            </li>
          </ol>
        </article>

        {/* CTA Section */}
        <section className="bg-blue-50 border-t border-b border-blue-100 py-12 px-8 sm:px-12 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Ready to Write at a Level 4 Standard?</h2>
          <p className="text-blue-800 mb-8 max-w-2xl mx-auto">
            Stop guessing your level. Practice with ExamCoach.ai to get instant, AI-powered feedback on your Finnish writing. Learn your exact mistakes and upgrade your sentence structures before the real YKI exam.
          </p>
          <Link 
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Start Practicing Writing Today
          </Link>
        </section>

        {/* FAQ Section */}
        <section className="py-12 px-8 sm:px-12 bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Is YKI Level 3 enough for Finnish citizenship?</h3>
              <p className="text-gray-700">
                Yes, achieving Level 3 in the writing subtest (along with passing the required combination of other subtests) satisfies the language requirement for Finnish citizenship. However, aiming for Level 4 ensures a comfortable safety margin.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Does poor spelling prevent me from getting a Level 4 in writing?</h3>
              <p className="text-gray-700">
                Not necessarily. According to the YKI scoring criteria, Level 4 writers can still make minor spelling or grammatical errors, as long as they do not hinder the reader's understanding or distract significantly from the text.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">What is the fastest way to jump from Level 3 to Level 4?</h3>
              <p className="text-gray-700">
                The fastest way to improve is by mastering subordinate clauses (sivulauseet) using words like koska, vaikka, and että, and upgrading your basic vocabulary to more descriptive, formal alternatives depending on the task.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </div>
  );
}