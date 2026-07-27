import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finnish Writing Transition Words for YKI Exam',
  description: 'Boost your YKI exam score by mastering Finnish writing transition words. Learn essential Finnish linking phrases and YKI essay vocabulary to improve your text cohesion.',
  alternates: {
    canonical: '/wiki/templates/finnish-writing-transition-words-yki-exam',
  },
};

export default function FinnishWritingTransitionWords() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the best Finnish writing transition words for the YKI test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best transition words depend on your task. For adding information, use 'lisäksi' (in addition). For contrasting, 'kuitenkin' (however) and 'toisaalta' (on the other hand) are excellent. For conclusions in an opinion piece, 'lopuksi' (finally) is a strong choice."
        }
      },
      {
        "@type": "Question",
        "name": "Do Finnish linking phrases affect my YKI writing score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. YKI examiners specifically grade 'text cohesion.' If you write short, isolated sentences without Finnish linking phrases, you will struggle to score above a 2. Connecting your thoughts logically is required for a B1 (level 3) or B2 (level 4) score."
        }
      },
      {
        "@type": "Question",
        "name": "How can I quickly improve my Finnish writing skills before the exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The fastest way to improve your Finnish writing skills is to memorize a set of 5 to 10 versatile transition words and practice applying them in timed YKI essay prompts. Focus on using them to bridge contrasting ideas and to justify your opinions."
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
        <article className="prose prose-lg prose-emerald mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4">
              Finnish Writing Transition Words for YKI Exam Success
            </h1>
            <p className="text-xl text-gray-500">
              Master the exact phrases you need to connect your ideas, structure your essays, and impress the YKI examiners.
            </p>
          </header>

          <section className="mb-12">
            <p>
              Welcome to Article 5 in our comprehensive YKI preparation series. If you want to elevate your test score from a beginner level to a solid intermediate (B1) or advanced (B2) level, you must master <strong>Finnish writing transition words</strong>. In the YKI language test, it is not enough to simply write grammatically correct, short sentences. You must demonstrate that you can connect your thoughts into a cohesive, flowing text.
            </p>
            <p>
              Examiners use a specific rubric to evaluate your Finnish writing skills, and &quot;text cohesion&quot; (tekstin sidosteisuus) is a major grading pillar. By strategically injecting the right transitions into your emails and opinion pieces, you immediately signal to the evaluator that you have strong command over the language.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How Finnish Writing Transition Words Impact Your Score
            </h2>
            <p>
              In tasks like the formal complaint (reklamaatio) or the opinion essay (mielipidekirjoitus), examiners look for logical progression. If your text reads like a grocery list of unrelated facts, your score will reflect that. 
            </p>
            <p>
              Consider this lower-level example:
              <br/>
              <em>&quot;Kierrätys on tärkeää. Se säästää luontoa. Se on joskus vaikeaa. Ihmisillä ei ole aikaa.&quot;</em>
            </p>
            <p>
              Now, look at how targeted <strong>YKI essay vocabulary</strong> transforms the exact same ideas into a passing-level text:
              <br/>
              <em>&quot;Kierrätys on tärkeää, <strong>koska</strong> se säästää luontoa. Se on <strong>kuitenkin</strong> joskus vaikeaa, <strong>sillä</strong> ihmisillä ei ole aikaa.&quot;</em>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Essential YKI Essay Vocabulary: Categorized Transition Words
            </h2>
            <p>
              Do not try to memorize a dictionary. Instead, learn a few high-impact <strong>Finnish linking phrases</strong> for each specific rhetorical situation you will face in the exam.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              1. Adding Information (Lisääminen)
            </h3>
            <p>
              Use these when you want to build on a point you just made without starting a completely new, disconnected thought.
            </p>
            <div className="bg-emerald-50 p-6 rounded-lg shadow-sm border border-emerald-100 mb-6">
              <ul className="space-y-4">
                <li><strong>Lisäksi</strong> (In addition / Furthermore) – <em>Asunto on edullinen. Lisäksi se sijaitsee hyvällä paikalla.</em></li>
                <li><strong>Sen lisäksi, että...</strong> (In addition to the fact that...) – <em>Sen lisäksi, että kurssi on ilmainen, se on erittäin hyödyllinen.</em></li>
                <li><strong>Myös</strong> (Also) – <em>Haluan myös huomauttaa, että palvelu oli hidasta.</em> (Note: <em>Myös</em> usually belongs in the middle of a sentence, not at the very beginning.)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              2. Contrasting Ideas (Vastakohtien esittäminen)
            </h3>
            <p>
              Crucial for Task 3 (Opinion piece) where you need to weigh different sides of a social argument.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100 mb-6">
              <ul className="space-y-4">
                <li><strong>Kuitenkin</strong> (However) – <em>Auto on kätevä. Se on kuitenkin kallis ylläpitää.</em></li>
                <li><strong>Toisaalta – toisaalta</strong> (On the one hand – on the other hand) – <em>Toisaalta etätyö on joustavaa, mutta toisaalta se voi olla yksinäistä.</em></li>
                <li><strong>Vaikka</strong> (Although / Even though) – <em>Menin töihin, vaikka olin hieman sairas.</em></li>
                <li><strong>Siitä huolimatta</strong> (Despite that / Nevertheless) – <em>Hinnat ovat nousseet. Siitä huolimatta ihmiset matkustavat paljon.</em></li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              3. Showing Cause and Effect (Syyn ja seurauksen ilmaiseminen)
            </h3>
            <p>
              These words help you justify your opinions, which is a direct requirement of the YKI intermediate exam prompt instructions.
            </p>
            <div className="bg-amber-50 p-6 rounded-lg shadow-sm border border-amber-100 mb-6">
              <ul className="space-y-4">
                <li><strong>Koska / Sillä</strong> (Because / For) – <em>En voi tulla kokoukseen, koska olen lomalla.</em></li>
                <li><strong>Siksi / Joten</strong> (Therefore / So) – <em>Olen lomalla, joten en voi tulla kokoukseen.</em></li>
                <li><strong>Tästä syystä</strong> (For this reason) – <em>Tästä syystä vaadin hyvitystä rikkoutuneesta tuotteesta.</em> (Excellent for formal complaints).</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Common Mistakes to Avoid
            </h2>
            <p>
              Even the best vocabulary can hurt your score if used incorrectly. Watch out for these common pitfalls when applying your new transition words:
            </p>
            <ol className="list-decimal pl-6 space-y-4">
              <li><strong>Forgetting Comma Rules:</strong> In Finnish, subordinate conjunctions (like <em>että, jotta, koska, kun, jos, vaikka</em>) almost always require a comma before them. Failing to use commas correctly disrupts the flow of your writing.</li>
              <li><strong>Using Spoken Language (Puhekieli):</strong> Never write <em>&quot;sit&quot;</em> or <em>&quot;niiku&quot;</em> in your exam. Always use the standard written forms: <em>sitten</em> (then) and <em>kuten</em> (such as).</li>
              <li><strong>Starting Sentences with &quot;Että&quot;:</strong> The word <em>että</em> (that) connects a main clause to a subordinate clause. Do not start a brand-new sentence with it in a formal YKI text.</li>
            </ol>
          </section>

          {/* Internal Links - Related Articles */}
          <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
            <ul className="space-y-2">
              <li><Link href="/wiki/templates/finnish-connectors-for-writing" className="text-blue-700 hover:underline">Finnish Connectors for Writing: Improve Your YKI Essay Flow</Link></li>
              <li><Link href="/wiki/templates/finnish-opinion-writing-phrases" className="text-blue-700 hover:underline">Finnish Opinion Writing Phrases for YKI Exam Success</Link></li>
            </ul>
          </nav>

          {/* CTA Section */}
          <section className="bg-emerald-700 rounded-2xl p-8 sm:p-10 text-center text-white my-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 text-white">Elevate Your Finnish Writing Skills Today</h2>
            <p className="text-emerald-100 mb-8 text-lg max-w-2xl mx-auto">
              Reading about transition words is a great start, but true mastery comes from practice. Start applying these connectors in realistic YKI prompts and receive instant AI feedback on your grammar, flow, and vocabulary.
            </p>
            <Link 
              href="/" 
              className="inline-block bg-white text-emerald-800 font-bold text-lg py-4 px-10 rounded-full hover:bg-emerald-50 transition duration-300 ease-in-out shadow-lg"
            >
              Start Practicing Now
            </Link>
          </section>

          {/* FAQ Section */}
          <section className="mt-16 border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What are the best Finnish writing transition words for the YKI test?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The best transition words depend on your task. For adding information, use &quot;lisäksi&quot; (in addition). For contrasting, &quot;kuitenkin&quot; (however) and &quot;toisaalta&quot; (on the other hand) are excellent. For conclusions in an opinion piece, &quot;lopuksi&quot; (finally) is a strong choice.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do Finnish linking phrases affect my YKI writing score?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Absolutely. YKI examiners specifically grade &quot;text cohesion.&quot; If you write short, isolated sentences without Finnish linking phrases, you will struggle to score above a 2. Connecting your thoughts logically is required for a B1 (level 3) or B2 (level 4) score.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How can I quickly improve my Finnish writing skills before the exam?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The fastest way to improve your Finnish writing skills is to memorize a set of 5 to 10 versatile transition words and practice applying them in timed YKI essay prompts. Focus on using them to bridge contrasting ideas and to justify your opinions.
                </p>
              </div>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}