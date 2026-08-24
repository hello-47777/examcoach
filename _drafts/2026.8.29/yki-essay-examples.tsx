import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Essay Examples: Structuring Your Opinion in Finnish',
  description: 'Explore realistic YKI essay examples to understand how to structure your mielipidekirjoitus. Perfect for B1 and B2 Finnish exam preparation.',
  alternates: {
    canonical: '/yki-essay-examples',
  },
};

export default function YkiEssayExamplesPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long should a YKI mielipidekirjoitus be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the intermediate (keskitaso) YKI test, your opinion piece should generally be around 100 to 150 words. The focus should be on clear structure and demonstrating your ability to express and justify an opinion, rather than writing a lengthy essay."
        }
      },
      {
        "@type": "Question",
        "name": "What is the most important part of an opinion piece in the YKI test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most important part is clearly stating your opinion and supporting it with at least two solid arguments. Using correct conjunctions (koska, siksi, että) to connect your thoughts is crucial for achieving a B1 or B2 level score."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use spoken language (puhekieli) in a YKI essay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, you should use standard written Finnish (kirjakieli) for essays and opinion pieces, unless the specific prompt asks you to write an informal message to a friend. For a public opinion piece (mielipidekirjoitus), always use kirjakieli."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <main className="max-w-4xl mx-auto px-4 py-12 md:px-8">
        
        {/* Article Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-900 mb-4">
            YKI Essay Examples: Structuring Your Opinion in Finnish
          </h1>
          <p className="text-lg text-gray-600">
            Master the writing subtest with realistic examples, structural templates, and examiner insights for intermediate learners.
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none text-gray-800 space-y-8">
          <section>
            <p className="text-lg leading-relaxed">
              Preparing for the writing component of the Finnish language proficiency test can feel overwhelming, but reviewing high-quality <strong>YKI essay examples</strong> is one of the fastest ways to improve. The opinion piece, or <em>mielipidekirjoitus</em>, is a staple of the intermediate (keskitaso) exam. By understanding how to properly format your thoughts, use the right transition words, and fulfill the examiner's criteria, you can secure a strong passing grade.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-blue-800 mt-10 mb-4">
              Why You Need Good YKI Essay Examples
            </h2>
            <p className="leading-relaxed">
              When studying for the test, simply memorizing vocabulary is not enough. You must understand how to deploy that vocabulary in a cohesive format. Good <strong>B1 B2 Finnish essays</strong> share a common DNA: a clear introduction, structured body paragraphs with justifications, and a logical conclusion. Reviewing these structures helps you build a mental template, saving you valuable time on exam day.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-blue-800 mt-10 mb-4">
              The Mielipidekirjoitus Structure
            </h2>
            <p className="leading-relaxed mb-4">
              A standard opinion piece in the YKI test should follow a simple four-part framework. Sticking to this template ensures you answer the prompt fully while demonstrating your language skills.
            </p>
            <ol className="list-decimal pl-6 space-y-3 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <li><strong>Title:</strong> Always include a title that summarizes your stance or the topic.</li>
              <li><strong>Introduction:</strong> State what you are writing about and clearly express your opinion (e.g., <em>Olen sitä mieltä, että...</em>).</li>
              <li><strong>Arguments (The Core):</strong> Provide 2-3 reasons supporting your opinion. Use conjunctions like <em>koska</em> (because), <em>lisäksi</em> (furthermore), and <em>toisaalta</em> (on the other hand).</li>
              <li><strong>Conclusion:</strong> Summarize your main point briefly and provide a closing thought or suggestion.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-blue-800 mt-10 mb-4">
              Realistic Mielipidekirjoitus Examples
            </h2>
            <p className="leading-relaxed mb-6">
              Below, we provide practical <strong>mielipidekirjoitus examples</strong>. These represent excellent <strong>YKI writing model answers</strong> because they directly address the prompt, use appropriate vocabulary, and maintain excellent structural flow.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Example 1: Public Transportation (Julkinen liikenne)</h3>
              <p className="text-sm text-gray-500 mb-4">Prompt: Write an opinion piece to a local newspaper about whether public transport should be free.</p>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm mb-4">
                <p className="font-bold mb-3 text-gray-900">Ilmainen julkinen liikenne on hyvä idea</p>
                <p className="mb-2 italic text-gray-800">
                  Kirjoitan tästä tärkeästä aiheesta, koska julkinen liikenne on kallis monille ihmisille. Olen ehdottomasti sitä mieltä, että julkisen liikenteen pitäisi olla ilmaista kaikille kaupungin asukkaille.
                </p>
                <p className="mb-2 italic text-gray-800">
                  Ensinnäkin, ilmainen bussilippu auttaisi pienituloisia perheitä ja opiskelijoita. Eläminen on nykyään kallista, ja tämä olisi suuri apu arkeen. Toiseksi, jos julkinen liikenne olisi ilmaista, useammat ihmiset jättäisivät autonsa kotiin. Tämä on erittäin tärkeää ympäristön kannalta, koska se vähentää ilmansaasteita ja ruuhkia keskustassa.
                </p>
                <p className="italic text-gray-800">
                  Lopuksi toivon, että kaupungin päättäjät miettivät tätä asiaa vakavasti. Puhdas ja tasa-arvoinen kaupunki on kaikkien etu.
                </p>
              </div>

              <div className="mt-4">
                <h4 className="font-bold text-gray-900">Why this is a strong B1/B2 answer:</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li><strong>Clear Opinion:</strong> Uses <em>"Olen ehdottomasti sitä mieltä, että..."</em> (I am absolutely of the opinion that...).</li>
                  <li><strong>Structuring Words:</strong> Employs <em>Ensinnäkin</em> (Firstly), <em>Toiseksi</em> (Secondly), and <em>Lopuksi</em> (Finally) to organize thoughts.</li>
                  <li><strong>Justification:</strong> Provides concrete reasons (helping low-income families, environmental benefits).</li>
                  <li><strong>Grammar:</strong> Uses conditional mood correctly (<em>pitäisi olla</em>, <em>auttaisi</em>, <em>jättäisivät</em>).</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-100 mb-8">
              <h3 className="text-xl font-bold text-green-900 mb-2">Example 2: Remote Work (Etätyö)</h3>
              <p className="text-sm text-gray-500 mb-4">Prompt: Write an opinion piece on the benefits of remote work.</p>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm mb-4">
                <p className="font-bold mb-3 text-gray-900">Etätyö parantaa elämänlaatua</p>
                <p className="mb-2 italic text-gray-800">
                  Viime vuosina etätyö on yleistynyt huomattavasti. Minun mielestäni etätyö on erinomainen asia, ja työpaikkojen tulisi tarjota sitä jatkossakin.
                </p>
                <p className="mb-2 italic text-gray-800">
                  Tärkein syy on se, että etätyö säästää paljon aikaa. Kun työntekijöiden ei tarvitse matkustaa työpaikalle joka päivä, heillä on enemmän aikaa perheelle ja harrastuksille. Lisäksi moni kokee, että kotona on helpompi keskittyä vaativiin tehtäviin, koska siellä on vähemmän keskeytyksiä kuin avokonttorissa.
                </p>
                <p className="italic text-gray-800">
                  Tietenkin on päiviä, jolloin on tärkeää tavata kollegoita kasvotusten. Mielestäni paras ratkaisu on hybridimalli, jossa yhdistyvät etätyö ja lähityö.
                </p>
              </div>

              <div className="mt-4">
                <h4 className="font-bold text-gray-900">Examiner criteria met:</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li><strong>Vocabulary:</strong> Uses excellent topic-specific vocabulary like <em>avokonttori</em> (open-plan office), <em>hybridimalli</em> (hybrid model), and <em>elämänlaatu</em> (quality of life).</li>
                  <li><strong>Nuance:</strong> Acknowledges the other side (<em>Tietenkin on päiviä...</em>) which is a strong B2 skill.</li>
                  <li><strong>Flow:</strong> Sentences connect smoothly with words like <em>Lisäksi</em> (In addition) and <em>Kun...</em> (When...).</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-blue-800 mt-10 mb-4">
              Common Mistakes to Avoid
            </h2>
            <p className="leading-relaxed mb-4">
              When trying to replicate <strong>YKI writing model answers</strong>, students often fall into a few predictable traps. To ensure your essay hits the mark, avoid these common errors:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Forgetting the formatting:</strong> Do not just write one massive paragraph. Break your text into an introduction, body, and conclusion.</li>
              <li><strong>Translating directly from English:</strong> English idioms often don't work in Finnish. Instead of trying to translate complex thoughts, express yourself clearly with the Finnish grammar structures you confidently know.</li>
              <li><strong>Lack of justification:</strong> Saying "I like this" is not enough. You must always answer <em>why</em>. Use <em>koska</em> (because) frequently.</li>
            </ul>
          </section>
        </article>

        {/* CTA Section */}
        <section className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to perfect your YKI essays?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            Practice makes perfect. Put these structures to the test, receive instant feedback on your grammar, and master your mielipidekirjoitus today.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-blue-700 font-bold text-lg py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            Start Practicing Now
          </Link>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 pt-10 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {faqData.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-blue-900 mb-2">{faq.name}</h3>
                <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />

      </main>
    </div>
  );
}