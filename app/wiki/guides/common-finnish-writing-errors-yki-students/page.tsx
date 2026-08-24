import Link from 'next/link';
import { Metadata } from 'next';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('guides', 'common-finnish-writing-errors-yki-students', {
  title: 'Common Finnish Writing Errors YKI Writing Students Should Avoid',
  description: 'Avoid common Finnish writing errors and boost your YKI exam score. Learn to fix Finnish grammar mistakes, structural issues, and frequent YKI writing mistakes.',
});

export default function CommonFinnishWritingErrors() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Will making common Finnish writing errors cause me to fail the YKI test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. At the B1 (intermediate) level, evaluators expect some Finnish language errors. However, if your mistakes prevent the reader from understanding your message, or if you repeatedly mix spoken and written language in formal tasks, your score will drop significantly."
        }
      },
      {
        "@type": "Question",
        "name": "What are the most frequent Finnish grammar mistakes evaluators see?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most frequent Finnish grammar mistakes involve incorrect object cases (partitive vs. genitive/accusative) and verb government (rektio). Using the wrong case can entirely change the meaning of a sentence."
        }
      },
      {
        "@type": "Question",
        "name": "How can I stop making these YKI writing mistakes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best way to eliminate YKI writing mistakes is through targeted practice and immediate feedback. Writing essays and having them reviewed against YKI criteria will help you spot and correct your bad habits before test day."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg prose-red mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4">
              Common Finnish Writing Errors YKI Students Should Avoid
            </h1>
            <p className="text-xl text-gray-500">
              Stop losing points on mistakes you can easily fix. Learn the biggest YKI exam pitfalls and how to correct them.
            </p>
          </header>

          <section className="mb-12">
            <p>
              Welcome to Article 6 of our comprehensive YKI preparation series. Passing the intermediate (B1) or advanced (B2) Finnish test requires more than just memorizing vocabulary; it requires knowing exactly which pitfalls to dodge. By understanding the most <strong>common Finnish writing errors</strong>, you can quickly clean up your texts and secure a passing grade.
            </p>
            <p>
              Evaluators do not expect perfection at the intermediate level. However, they are trained to spot repeated patterns that disrupt text comprehensibility or show a lack of register awareness. Let&apos;s break down the exact problems that cost students points and how you can correct them.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              1. Mixing Spoken and Written Language (Puhekieli vs. Kirjakieli)
            </h2>
            <p>
              One of the most frequent <strong>YKI writing mistakes</strong> is using spoken language in a formal task. Task 2 in the writing exam often requires a formal email, such as a complaint or an application.
            </p>
            <div className="bg-red-50 p-6 rounded-lg shadow-sm border border-red-100 mb-6">
              <h3 className="text-xl font-bold text-red-800 mt-0 mb-3">The Problem:</h3>
              <p className="mt-0">Using colloquialisms or shortened pronouns in formal contexts shows a lack of situational awareness.</p>
              <ul className="text-red-700">
                <li><em>Incorrect:</em> Mä haluun reklamoida tästä puhelimesta, ku se meni rikki.</li>
                <li><em>Incorrect:</em> Ootsä valmis auttamaan mua?</li>
              </ul>
              
              <h3 className="text-xl font-bold text-green-800 mt-6 mb-3">The Correction:</h3>
              <p className="mt-0">Always use standard written language (kirjakieli) for formal tasks.</p>
              <ul className="text-green-700">
                <li><em>Correct:</em> Minä haluan reklamoida tästä puhelimesta, koska se meni rikki.</li>
                <li><em>Correct:</em> Oletteko te valmis auttamaan minua?</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              2. Object Case Confusion: Partitive vs. Genitive/Accusative
            </h2>
            <p>
              <strong>Finnish grammar mistakes</strong> often center around the object of the sentence. Choosing the wrong case can drastically change your meaning or simply mark your text as lower proficiency.
            </p>
            <div className="bg-orange-50 p-6 rounded-lg shadow-sm border border-orange-100 mb-6">
              <h3 className="text-xl font-bold text-orange-800 mt-0 mb-3">The Problem:</h3>
              <p className="mt-0">Failing to distinguish between an ongoing/incomplete action (requiring the partitive) and a completed action (requiring genitive/accusative).</p>
              <ul className="text-orange-700">
                <li><em>Incorrect:</em> Luen kirjan parhaillaan. (Implies you read the whole book right now, which is unnatural).</li>
                <li><em>Incorrect:</em> Syön omena. (Grammatically invalid base form for an object).</li>
              </ul>
              
              <h3 className="text-xl font-bold text-green-800 mt-6 mb-3">The Correction:</h3>
              <p className="mt-0">Use the partitive for ongoing actions or uncountable amounts. Use the genitive (ending in -n) for completed actions.</p>
              <ul className="text-green-700">
                <li><em>Correct (Ongoing):</em> Luen kirjaa parhaillaan. (I am reading a book currently.)</li>
                <li><em>Correct (Completed):</em> Luen kirjan huomenna. (I will read the entire book tomorrow.)</li>
                <li><em>Correct (Completed):</em> Syön omenan. (I will eat the whole apple.)</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              3. Ignoring Verb Government (Rektio)
            </h2>
            <p>
              Certain Finnish verbs demand that the following noun be in a specific case. Forgetting these rules leads to obvious <strong>Finnish language errors</strong> that evaluators instantly notice.
            </p>
            <div className="bg-yellow-50 p-6 rounded-lg shadow-sm border border-yellow-100 mb-6">
              <h3 className="text-xl font-bold text-yellow-800 mt-0 mb-3">The Problem:</h3>
              <p className="mt-0">Applying English logic to Finnish verbs. For example, "to like" in English takes a direct object, but <em>tykätä</em> in Finnish requires the elative case (-sta/-stä).</p>
              <ul className="text-yellow-700">
                <li><em>Incorrect:</em> Minä tykkään sinua.</li>
                <li><em>Incorrect:</em> Tämä vaikuttaa minun päätös.</li>
              </ul>
              
              <h3 className="text-xl font-bold text-green-800 mt-6 mb-3">The Correction:</h3>
              <p className="mt-0">Memorize the most common B1 rektio verbs and their required cases.</p>
              <ul className="text-green-700">
                <li><em>Correct:</em> Minä tykkään sinu<strong>sta</strong>. (Tykätä + mistä)</li>
                <li><em>Correct:</em> Tämä vaikuttaa minun päätöksee<strong>ni</strong>. (Vaikuttaa + mihin)</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              4. "Finglish" Sentence Structures
            </h2>
            <p>
              Translating word-for-word from English into Finnish usually results in awkward syntax. Finnish word order is relatively free but still follows specific emphasis rules.
            </p>
            <div className="bg-purple-50 p-6 rounded-lg shadow-sm border border-purple-100 mb-6">
              <h3 className="text-xl font-bold text-purple-800 mt-0 mb-3">The Problem:</h3>
              <p className="mt-0">Using English idioms or unnatural subordinate clause structures.</p>
              <ul className="text-purple-700">
                <li><em>Incorrect:</em> Minulla on hyvä aika. (Direct translation of "I am having a good time").</li>
                <li><em>Incorrect:</em> Se on tärkeää minulle oppia suomea. ("It is important for me to learn Finnish" logic).</li>
              </ul>
              
              <h3 className="text-xl font-bold text-green-800 mt-6 mb-3">The Correction:</h3>
              <p className="mt-0">Learn standard Finnish phrasing instead of translating directly.</p>
              <ul className="text-green-700">
                <li><em>Correct:</em> Minulla on hauskaa / Viihdyn hyvin. (I am enjoying myself.)</li>
                <li><em>Correct:</em> Minun on tärkeää oppia suomea. (Using the necessity structure: Genitive + on + adjective + infinitive).</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to Fix the Most Common Finnish Writing Errors Before Test Day
            </h2>
            <p>
              Awareness is only the first step. To ensure you do not make these mistakes under the pressure of the timed exam, you must practice writing full texts. When you review your practice essays, use this article as a checklist. Ask yourself: <em>Did I use spoken language? Did I get my object cases right? Did I follow rektio rules?</em>
            </p>
          </section>

          {/* Internal Links - Related Articles */}
          <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
            <ul className="space-y-2">
              <li><Link href="/wiki/guides/common-yki-opinion-writing-mistakes" className="text-blue-700 hover:underline">Common YKI Opinion Writing Mistakes and How to Avoid Them</Link></li>
              <li><Link href="/wiki/templates/finnish-connectors-for-writing" className="text-blue-700 hover:underline">Finnish Connectors for Writing: Improve Your YKI Essay Flow</Link></li>
            </ul>
          </nav>

          {/* CTA Section */}
          <section className="bg-red-700 rounded-2xl p-8 sm:p-10 text-center text-white my-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 text-white">Stop Guessing and Start Improving</h2>
            <p className="text-red-100 mb-8 text-lg max-w-2xl mx-auto">
              Don&apos;t let simple grammar mistakes ruin your YKI score. Practice your writing tasks with ExamCoach.ai today and get immediate feedback on your errors from our AI-powered evaluator.
            </p>
            <Link 
              href="/" 
              className="inline-block bg-white text-red-800 font-bold text-lg py-4 px-10 rounded-full hover:bg-red-50 transition duration-300 ease-in-out shadow-lg"
            >
              Analyze Your Writing Now
            </Link>
          </section>

          {/* FAQ Section */}
          <section className="mt-16 border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Will making common Finnish writing errors cause me to fail the YKI test?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Not necessarily. At the B1 (intermediate) level, evaluators expect some Finnish language errors. However, if your mistakes prevent the reader from understanding your message, or if you repeatedly mix spoken and written language in formal tasks, your score will drop significantly.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What are the most frequent Finnish grammar mistakes evaluators see?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The most frequent Finnish grammar mistakes involve incorrect object cases (partitive vs. genitive/accusative) and verb government (rektio). Using the wrong case can entirely change the meaning of a sentence.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How can I stop making these YKI writing mistakes?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The best way to eliminate YKI writing mistakes is through targeted practice and immediate feedback. Writing essays and having them reviewed against YKI criteria will help you spot and correct your bad habits before test day.
                </p>
              </div>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}