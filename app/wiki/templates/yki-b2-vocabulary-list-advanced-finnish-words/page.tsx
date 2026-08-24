import Link from 'next/link';
import { Metadata } from 'next';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('templates', 'yki-b2-vocabulary-list-advanced-finnish-words', {
  title: 'YKI Writing B2 Vocabulary List: Advanced Finnish Words for Writing',
  description: 'Elevate your Finnish exam score with our YKI B2 vocabulary list. Master advanced Finnish words to showcase fluency and achieve true YKI writing improvement.',
});

export default function YkiB2VocabularyListWritingTest() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does B2 vocabulary differ from B1 in the YKI test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "B2 vocabulary requires nuance and flexibility. While B1 focuses on basic communication and clear opinions, the YKI B2 vocabulary list includes advanced transitions, idiomatic expressions, and structures like lauseenvastike (participle clauses) to create sophisticated arguments."
        }
      },
      {
        "@type": "Question",
        "name": "Can I just memorize advanced Finnish words to pass?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Examiners are looking for natural application. Memorizing advanced Finnish words is only step one; you must understand their specific context, grammatical requirements (like government/rektio), and tone to achieve actual YKI writing improvement."
        }
      },
      {
        "@type": "Question",
        "name": "What topics should I prepare for in the B2 writing test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "B2 level (levels 4-5) prompts often deal with societal issues, technology, environment, and complex workplace scenarios. You should be prepared to argue a position, evaluate consequences, and propose solutions using formal language."
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
        <article className="prose prose-lg prose-indigo mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4">
              YKI B2 Vocabulary List: Advanced Finnish Words for Writing
            </h1>
            <p className="text-xl text-gray-500">
              Push past the intermediate plateau and master the complex structures required to score a 4 or 5 on your YKI Finnish writing exam.
            </p>
          </header>

          <section className="mb-12">
            <p>
              Are you aiming for fluency and a top score in the intermediate or advanced Finnish language test? Mastering a dedicated <strong>YKI B2 vocabulary list</strong> is the most critical step you can take. Welcome to Article 3 of our YKI exam preparation series, where we transition from basic functionality to true linguistic flexibility.
            </p>
            <p>
              At the B2 level, examiners expect more than just the ability to survive everyday situations. They want to see that you can express nuanced thoughts, handle abstract concepts, and structure your texts with a high degree of cohesion. This requires integrating <strong>advanced Finnish words</strong> and sophisticated grammatical structures into your essays and formal messages.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Examiner Scoring Criteria: Why You Need a YKI B2 Vocabulary List
            </h2>
            <p>
              To achieve genuine <strong>YKI writing improvement</strong>, you must understand how a B2 response is graded differently than a B1 response:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Register and Tone:</strong> B2 writers flawlessly adapt their tone. A complaint to a municipality reads differently than an email to a friend.</li>
              <li><strong>Structural Variety:</strong> B2 texts avoid repetitive "minä teen, sitten minä menen" patterns. They utilize passive voice, conditionals, and participles.</li>
              <li><strong>Nuance (Vivahteet):</strong> B2 writers do not just "agree" or "disagree"; they concede points, weigh alternatives, and predict outcomes.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Categorized YKI B2 Vocabulary List for Writing
            </h2>
            <p>
              Below is a carefully curated selection of <strong>Finnish B2 vocabulary</strong> frameworks categorized by their function in the writing test. 
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              1. Advanced Concessions & Contrasts (Myönnytykset ja vastakohdat)
            </h3>
            <p>
              Instead of relying entirely on <em>mutta</em> (but) and <em>vaikka</em> (although), elevate your text with these complex transitions.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6 border border-gray-200">
              <ul className="space-y-4">
                <li><strong>Siitä huolimatta, että...</strong> (Despite the fact that...) – <em>Siitä huolimatta, että talouskasvu on hidastunut, työllisyysaste on pysynyt korkeana.</em></li>
                <li><strong>Päinvastoin kuin...</strong> (Contrary to...) – <em>Päinvastoin kuin usein väitetään, etätyö lisää tuottavuutta.</em></li>
                <li><strong>Toisaalta... toisaalta...</strong> (On the one hand... on the other hand...) – Used to present balanced, objective arguments.</li>
                <li><strong>Kääntäen</strong> (Conversely) – <em>Nuoret lukevat vähemmän kirjoja; kääntäen he kuluttavat enemmän digitaalista mediaa.</em></li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              2. Cause, Effect, and Consequences (Syy ja seuraus)
            </h3>
            <p>
              B2 opinion pieces (Mielipidekirjoitus) require you to analyze the consequences of societal issues. 
            </p>
            <div className="bg-indigo-50 p-6 rounded-lg shadow-sm mb-6 border border-indigo-100">
              <ul className="space-y-4">
                <li><strong>Tämä johtaa siihen, että...</strong> (This leads to...) – <em>Ilmastonmuutos johtaa siihen, että sään ääri-ilmiöt yleistyvät.</em></li>
                <li><strong>Minkä seurauksena...</strong> (As a consequence of which...) – <em>Leikkasimme budjettia, minkä seurauksena palveluiden laatu heikkeni.</em></li>
                <li><strong>Tästä syystä</strong> (For this reason) – A more formal alternative to <em>siksi</em>.</li>
                <li><strong>Olla riippuvainen jostakin</strong> (To be dependent on something) – <em>Menestyksemme on riippuvainen tiimityöstä.</em></li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              3. Nuanced Opinions & Recommendations (Mielipiteet ja suositukset)
            </h3>
            <p>
              Move beyond <em>minun mielestäni</em> (in my opinion) to show authoritative command of the language.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm mb-6 border border-blue-100">
              <ul className="space-y-4">
                <li><strong>Esitän väitteen, että...</strong> (I posit/argue that...) – <em>Esitän väitteen, että nykyinen koulutusjärjestelmä vaatii uudistamista.</em></li>
                <li><strong>On ensiarvoisen tärkeää...</strong> (It is of paramount importance...) – <em>On ensiarvoisen tärkeää, että aloitamme toimenpiteet heti.</em></li>
                <li><strong>Voidaan perustellusti kysyä...</strong> (One can justifiably ask...) – Great for rhetorical questions in opinion essays.</li>
                <li><strong>Ehdottaisin harkittavaksi...</strong> (I would suggest considering...) – Highly polite and formal for official communications.</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Common B2 Writing Mistakes to Avoid
            </h2>
            <p>
              To guarantee <strong>YKI writing improvement</strong>, you must also eliminate habits leftover from the B1 level.
            </p>
            <ol className="list-decimal pl-6 space-y-4">
              <li><strong>Ignoring "Rektio" (Government):</strong> Advanced words often require specific cases. If you use <em>vaikuttaa</em> (to affect/influence), you must remember it takes the illative case (mihin). E.g., <em>Tämä vaikuttaa päätökseen</em>, not <em>päätöstä</em>.</li>
              <li><strong>Overcomplicating Sentences:</strong> Trying to write a 4-line sentence usually results in grammar chaos. It is better to use strong, precise <strong>advanced Finnish words</strong> in medium-length sentences connected by high-level transition words.</li>
              <li><strong>Colloquialisms in Formal Text:</strong> At B2, mixing spoken language (puhekieli) into a formal complaint or opinion essay will severely damage your score. Stick strictly to kirjakieli (standard written language).</li>
            </ol>
          </section>

          {/* Internal Links - Related Articles */}
          <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
            <ul className="space-y-2">
              <li><Link href="/wiki/templates/yki-b1-vocabulary-list-writing-test" className="text-blue-700 hover:underline">YKI B1 Vocabulary List: Essential Finnish Words for Writing Test</Link></li>
              <li><Link href="/wiki/templates/finnish-connectors-for-writing" className="text-blue-700 hover:underline">Finnish Connectors for Writing: Improve Your YKI Essay Flow</Link></li>
              <li><Link href="/wiki/templates/finnish-writing-transition-words-yki-exam" className="text-blue-700 hover:underline">Finnish Writing Transition Words for YKI Exam Success</Link></li>
            </ul>
          </nav>

          {/* CTA Section */}
          <section className="bg-indigo-900 rounded-2xl p-8 sm:p-10 text-center text-white my-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 text-white">Put Your B2 Vocabulary to the Test</h2>
            <p className="text-indigo-200 mb-8 text-lg max-w-2xl mx-auto">
              Reading about advanced vocabulary isn&apos;t enough. You need to write, make mistakes, and correct them. Practice YKI B2 writing scenarios with our AI tutor and get instant, examiner-style feedback.
            </p>
            <Link 
              href="/" 
              className="inline-block bg-white text-indigo-900 font-bold text-lg py-4 px-10 rounded-full hover:bg-indigo-50 transition duration-300 ease-in-out shadow-lg"
            >
              Start Your B2 Practice Now
            </Link>
          </section>

          {/* FAQ Section */}
          <section className="mt-16 border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How does B2 vocabulary differ from B1 in the YKI test?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  B2 vocabulary requires nuance and flexibility. While B1 focuses on basic communication and clear opinions, the YKI B2 vocabulary list includes advanced transitions, idiomatic expressions, and structures like lauseenvastike (participle clauses) to create sophisticated arguments.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Can I just memorize advanced Finnish words to pass?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  No. Examiners are looking for natural application. Memorizing advanced Finnish words is only step one; you must understand their specific context, grammatical requirements (like government/rektio), and tone to achieve actual YKI writing improvement.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What topics should I prepare for in the B2 writing test?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  B2 level (levels 4-5) prompts often deal with societal issues, technology, environment, and complex workplace scenarios. You should be prepared to argue a position, evaluate consequences, and propose solutions using formal language.
                </p>
              </div>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}