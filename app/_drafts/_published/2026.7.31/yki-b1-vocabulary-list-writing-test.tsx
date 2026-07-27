import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI B1 Vocabulary List: Essential Finnish Words for Writing Test',
  description: 'Master the YKI B1 vocabulary list to pass your Finnish writing exam. Learn essential Finnish exam words, YKI writing vocabulary, and B1 phrases with practical examples.',
  alternates: {
    canonical: '/wiki/templates/yki-b1-vocabulary-list-writing-test',
  },
};

export default function YkiB1VocabularyListWritingTest() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best way to study the YKI B1 vocabulary list?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best approach is to practice using these words in context. Instead of memorizing isolated words, write full practice essays or emails using the specific YKI B1 vocabulary list provided for opinions, linking words, and formal requests."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need perfect grammar if I use advanced Finnish exam words?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The YKI intermediate level (B1) evaluates your ability to communicate effectively. While using excellent YKI writing vocabulary boosts your score, minor grammatical mistakes are completely acceptable as long as they do not prevent the evaluator from understanding your message."
        }
      },
      {
        "@type": "Question",
        "name": "How many words do I need to know for the YKI writing test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no strict word count you must know. Success at the B1 level relies more on knowing the right transition words, opinion phrases, and situational vocabulary to structure coherent paragraphs, rather than having an massive overall vocabulary."
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
        <article className="prose prose-lg prose-blue mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4">
              YKI B1 Vocabulary List: Essential Finnish Words for the Writing Test
            </h1>
            <p className="text-xl text-gray-500">
              A complete guide to the phrases and vocabulary you need to score a 3 or 4 in your Finnish YKI writing exam.
            </p>
          </header>

          <section className="mb-12">
            <p>
              Preparing for the Finnish language test? Mastering the right <strong>YKI B1 vocabulary list</strong> is one of the most critical steps to passing the writing section. The YKI (Yleiset kielitutkinnot) intermediate test doesn&apos;t just evaluate if you know basic words; evaluators want to see if you can express opinions, handle everyday situations, and structure your texts logically. 
            </p>
            <p>
              To achieve that B1 level (a score of 3 or 4), you must move beyond simple subject-verb-object sentences. By strategically using appropriate Finnish B1 vocabulary, you can demonstrate to the examiners that you have a strong, functional command of written Finnish.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to Use This YKI B1 Vocabulary List for the Writing Test
            </h2>
            <p>
              Do not simply memorize these words blindly. The writing portion of the YKI test usually consists of three tasks: an informal message, a formal message (like a complaint or application), and an opinion piece. The Finnish exam words provided below are categorized specifically for these tasks so you can plug them directly into your practice routines.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              1. Structuring Your Text: Essential Linking Words (Sidossanat)
            </h2>
            <p>
              A major criterion for B1 writing is text cohesion. You must connect your sentences smoothly. These conjunctions and linking phrases are mandatory YKI writing vocabulary.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6 border border-gray-100">
              <ul className="space-y-4">
                <li><strong>Koska</strong> (Because) – <em>En pääse töihin tänään, koska olen sairaana.</em> (I cannot come to work today because I am sick.)</li>
                <li><strong>Siksi</strong> (Therefore / That&apos;s why) – <em>Olen sairaana, ja siksi en pääse töihin.</em> (I am sick, and that is why I cannot come to work.)</li>
                <li><strong>Kuitenkin</strong> (However) – <em>Haluaisin osallistua kurssille. Kuitenkin minulla on toinen meno.</em> (I would like to attend the course. However, I have another appointment.)</li>
                <li><strong>Vaikka</strong> (Although / Even though) – <em>Menimme ulos, vaikka satoi vettä.</em> (We went outside even though it was raining.)</li>
                <li><strong>Lisäksi</strong> (In addition / Furthermore) – <em>Asunto on valoisa. Lisäksi siinä on sauna.</em> (The apartment is bright. Furthermore, it has a sauna.)</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              2. Expressing Opinions (Mielipiteen ilmaiseminen)
            </h2>
            <p>
              Task 3 in the writing exam is almost always an opinion piece. Using the right phrasing here will immediately signal to the examiner that you possess strong Finnish B1 vocabulary.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm mb-6 border border-blue-100">
              <ul className="space-y-4">
                <li><strong>Minun mielestäni...</strong> (In my opinion...) – <em>Minun mielestäni julkinen liikenne on liian kallista.</em> (In my opinion, public transport is too expensive.)</li>
                <li><strong>Olen sitä mieltä, että...</strong> (I am of the opinion that...) – <em>Olen sitä mieltä, että lasten pitäisi ulkoilla enemmän.</em> (I am of the opinion that children should play outside more.)</li>
                <li><strong>Olen samaa mieltä.</strong> (I agree.) – Used when responding to a prompt or an article.</li>
                <li><strong>Olen eri mieltä.</strong> (I disagree.) – Perfect for establishing a counter-argument.</li>
                <li><strong>Toisaalta... toisaalta...</strong> (On the one hand... on the other hand...) – <em>Toisaalta autoilu on kätevää, mutta toisaalta se saastuttaa luontoa.</em> (On the one hand driving is convenient, but on the other hand it pollutes the environment.)</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              3. Formal Email Vocabulary (Virallinen sähköposti)
            </h2>
            <p>
              When writing a complaint (reklamaatio) or asking for information from an authority or business, your tone must be polite and formal. These Finnish exam words will help you set the right tone.
            </p>
            <div className="bg-green-50 p-6 rounded-lg shadow-sm border border-green-100">
              <ul className="space-y-4">
                <li><strong>Yhteydenotto koskien...</strong> (Contact regarding...) – <em>Otan teihin yhteyttä koskien eilen ostamaani puhelinta.</em> (I am contacting you regarding the phone I bought yesterday.)</li>
                <li><strong>Haluaisin tiedustella...</strong> (I would like to inquire...) – <em>Haluaisin tiedustella, onko teillä vapaita aikoja.</em> (I would like to inquire if you have any available appointments.)</li>
                <li><strong>Valitettavasti...</strong> (Unfortunately...) – <em>Valitettavasti tuote oli rikki, kun avasin paketin.</em> (Unfortunately the product was broken when I opened the package.)</li>
                <li><strong>Voisitteko...</strong> (Could you...) – Always use the conditional form for polite requests! <em>Voisitteko palauttaa rahani?</em> (Could you refund my money?)</li>
                <li><strong>Ystävällisin terveisin,</strong> (Kind regards,) – The standard formal sign-off.</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Common Mistakes to Avoid
            </h2>
            <p>
              Even with a great YKI B1 vocabulary list, candidates often lose points through structural mistakes. Avoid translating English idioms directly into Finnish. Keep your sentences relatively short and clear. If you try to write overly long, complicated sentences without mastering B1-level grammar (like the <em>lauseenvastike</em> structures), you risk losing the examiner. Stick to the reliable vocabulary above to maintain a solid, comprehensible flow.
            </p>
          </section>

          {/* Internal Links - Related Articles */}
          <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
            <ul className="space-y-2">
              <li><Link href="/wiki/templates/finnish-connectors-for-writing" className="text-blue-700 hover:underline">Finnish Connectors for Writing: Improve Your YKI Essay Flow</Link></li>
              <li><Link href="/wiki/scoring/yki-b1-guide" className="text-blue-700 hover:underline">YKI B1 Guide</Link></li>
            </ul>
          </nav>

          {/* CTA Section */}
          <section className="bg-indigo-600 rounded-xl p-8 text-center text-white my-12 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Ace the YKI Writing Test?</h2>
            <p className="text-indigo-100 mb-8 text-lg">
              Don&apos;t just memorize words—practice them in real exam scenarios. Start practicing your writing tasks with ExamCoach.ai today and get instant feedback on your B1 vocabulary usage.
            </p>
            <Link 
              href="/" 
              className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-50 transition duration-300 ease-in-out shadow-md"
            >
              Start Practicing Now
            </Link>
          </section>

          {/* FAQ Section */}
          <section className="mt-16 border-t border-gray-200 pt-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  What is the best way to study the YKI B1 vocabulary list?
                </h3>
                <p className="text-gray-600">
                  The best approach is to practice using these words in context. Instead of memorizing isolated words, write full practice essays or emails using the specific YKI B1 vocabulary list provided for opinions, linking words, and formal requests.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Do I need perfect grammar if I use advanced Finnish exam words?
                </h3>
                <p className="text-gray-600">
                  No. The YKI intermediate level (B1) evaluates your ability to communicate effectively. While using excellent YKI writing vocabulary boosts your score, minor grammatical mistakes are completely acceptable as long as they do not prevent the evaluator from understanding your message.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How many words do I need to know for the YKI writing test?
                </h3>
                <p className="text-gray-600">
                  There is no strict word count you must know. Success at the B1 level relies more on knowing the right transition words, opinion phrases, and situational vocabulary to structure coherent paragraphs, rather than having an massive overall vocabulary.
                </p>
              </div>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}