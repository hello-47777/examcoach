import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Message Writing Examples With Finnish Answers',
  description: 'Master the YKI test with our realistic YKI message writing examples. Explore informal and formal Finnish message samples to boost your B1 Finnish writing skills.',
  openGraph: {
    title: 'YKI Message Writing Examples With Finnish Answers',
    description: 'Master the YKI test with our realistic YKI message writing examples. Explore informal and formal Finnish message samples to boost your B1 Finnish writing skills.',
    type: 'article',
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do these YKI message writing examples help me pass the test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reviewing realistic examples helps you understand the required B1 Finnish writing level, proper formatting, and how to effectively answer all prompt points without overcomplicating your sentences. They serve as reliable templates for your own exam answers."
      }
    },
    {
      "@type": "Question",
      "name": "Are these Finnish message samples exactly what I will see on the exam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "These examples are highly realistic practice prompts modeled closely after actual YKI writing task structures. While the exact topics will vary, the required tone, length, and format will be identical."
      }
    },
    {
      "@type": "Question",
      "name": "How many words should my YKI short message be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For the short message task (usually Task 1), your text should typically be around 30 to 50 words. The most important factor is clearly addressing every bullet point provided in the instructions."
      }
    }
  ]
};

export default function YkiMessageWritingExamplesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="space-y-12">
        {/* Header Section */}
        <header className="space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            YKI Message Writing Examples With Finnish Answers
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            If you are preparing for the YKI language test, studying realistic <strong>YKI message writing examples</strong> is one of the most effective ways to ensure you pass. This short task tests your ability to handle everyday situations efficiently in written Finnish.
          </p>
        </header>

        {/* Introduction Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            How to Use These YKI Message Writing Examples
          </h2>
          <p className="text-lg leading-relaxed">
            In the YKI test (Keskitaso), Task 1 is usually a short message (viesti). You might be asked to write an email to a store, a text message to a friend, or a note to a colleague. Achieving a solid level of <em>B1 Finnish writing</em> requires you to answer all bullet points clearly, use correct greetings, and match the tone of the situation. 
          </p>
          <p className="text-lg leading-relaxed">
            Below, we have curated three distinct <strong>YKI writing examples</strong> that cover different scenarios. We have included the exam prompt, a sample answer, and an examiner-style breakdown of why the answer works.
          </p>
        </section>

        {/* Example 1: Informal Message */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">
            Example 1: Informal Message to a Friend (Finnish Message Sample)
          </h2>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-blue-800 mb-2">Tehtävä (The Prompt)</h3>
            <p className="text-gray-700 mb-4">
              Kutsut ystävän mökille ensi viikonloppuna. Kirjoita hänelle sähköposti. Kerro:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
              <li>Milloin lähdette mökille?</li>
              <li>Mitä aiotte tehdä siellä?</li>
              <li>Mitä ystävän pitää ottaa mukaan?</li>
            </ul>

            <h3 className="text-lg font-bold text-green-800 mb-2">Vastaus (The Answer)</h3>
            <div className="bg-white p-5 rounded border border-gray-300 font-mono text-sm mb-6 text-gray-800 shadow-inner">
              <p>Hei Anna!</p>
              <br />
              <p>Mitä kuuluu? Miltä kuulostaisi mökkiviikonloppu ensi viikonloppuna?</p>
              <p>Me lähdemme mökille perjantaina kello 16.00. Me voimme saunoa, uida järvessä ja laittaa hyvää ruokaa yhdessä.</p>
              <p>Ota mukaan omat pyyhkeet ja lämpimät vaatteet, koska illalla on vähän kylmä.</p>
              <br />
              <p>Nähdään perjantaina!</p>
              <p>Terveisin,</p>
              <p>Matti</p>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2">Miksi tämä on hyvä? (Why is this good?)</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Tone:</strong> The greeting (<em>Hei Anna!</em>) and closing (<em>Terveisin,</em>) perfectly match an informal message to a friend.</li>
              <li><strong>Task Achievement:</strong> All three bullet points are answered directly. The time of departure is stated (16.00), the activities are listed (saunoa, uida, laittaa ruokaa), and the packed items are mentioned (pyyhkeet, lämpimät vaatteet).</li>
              <li><strong>Grammar:</strong> Uses basic, accurate sentence structures typical of solid B1 Finnish writing.</li>
            </ul>
          </div>
        </section>

        {/* Example 2: Formal Message */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">
            Example 2: Formal Message – Complaining to a Store
          </h2>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-blue-800 mb-2">Tehtävä (The Prompt)</h3>
            <p className="text-gray-700 mb-4">
              Ostit uuden tietokoneen, mutta se on rikki. Kirjoita sähköposti kauppaan. Kerro:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
              <li>Milloin ostit tietokoneen?</li>
              <li>Mikä on ongelma?</li>
              <li>Mitä haluat, että kauppa tekee?</li>
            </ul>

            <h3 className="text-lg font-bold text-green-800 mb-2">Vastaus (The Answer)</h3>
            <div className="bg-white p-5 rounded border border-gray-300 font-mono text-sm mb-6 text-gray-800 shadow-inner">
              <p>Hei,</p>
              <br />
              <p>Ostin teiltä uuden tietokoneen viime viikon tiistaina, mutta se ei valitettavasti toimi.</p>
              <p>Ongelma on se, että kone ei käynnisty ollenkaan, vaikka akku on ladattu täyteen. Yritin ladata sitä monta tuntia.</p>
              <p>Haluaisin palauttaa tämän tietokoneen ja saada uuden tilalle tai rahani takaisin. Minulla on kuitti tallella.</p>
              <br />
              <p>Ystävällisin terveisin,</p>
              <p>Matti Meikäläinen</p>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2">Miksi tämä on hyvä? (Why is this good?)</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Tone:</strong> Uses proper formal greetings and closings (<em>Hei, / Ystävällisin terveisin,</em>) suitable for customer service.</li>
              <li><strong>Clarity:</strong> The issue is explained simply and effectively without overcomplicating vocabulary.</li>
              <li><strong>Resolution:</strong> The test-taker explicitly states what they want the store to do (<em>saada uuden tilalle tai rahani takaisin</em>), perfectly satisfying the third bullet point.</li>
            </ul>
          </div>
        </section>

        {/* Example 3: Semi-formal / Official Message */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">
            Example 3: Semi-Formal Message – Canceling an Appointment
          </h2>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-blue-800 mb-2">Tehtävä (The Prompt)</h3>
            <p className="text-gray-700 mb-4">
              Olet sairas etkä voi mennä varatulle lääkäriajalle. Kirjoita viesti terveysasemalle. Kerro:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
              <li>Kuka olet ja milloin sinulla on aika?</li>
              <li>Miksi et voi tulla?</li>
              <li>Haluatko varata uuden ajan?</li>
            </ul>

            <h3 className="text-lg font-bold text-green-800 mb-2">Vastaus (The Answer)</h3>
            <div className="bg-white p-5 rounded border border-gray-300 font-mono text-sm mb-6 text-gray-800 shadow-inner">
              <p>Hei,</p>
              <br />
              <p>Minun nimeni on Maija Meikäläinen. Minulla on lääkäriaika huomenna klo 10.00 tohtori Virtaselle.</p>
              <p>Valitettavasti en voi tulla, koska minulla on kova kuume ja flunssa. En pääse sängystä ylös.</p>
              <p>Haluaisin perua tämän ajan. Voisinko varata uuden ajan ensi viikolle?</p>
              <br />
              <p>Ystävällisin terveisin,</p>
              <p>Maija Meikäläinen</p>
              <p>Syntymäaika: 01.01.1985</p>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2">Miksi tämä on hyvä? (Why is this good?)</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Practical Information:</strong> By adding the birthdate (<em>syntymäaika</em>) at the end, it shows an excellent understanding of how the Finnish healthcare system works in writing contexts.</li>
              <li><strong>Vocabulary:</strong> Excellent use of common health vocabulary (<em>kova kuume ja flunssa</em>).</li>
              <li><strong>Politeness:</strong> The conditional phrase (<em>Voisinko varata...</em>) makes the text sound natural and polite.</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 bg-blue-600 rounded-2xl p-8 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-white">Practice More YKI Tasks</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Reading examples is great, but writing your own is how you truly improve. Use our platform to practice actual YKI writing prompts and get instant, AI-driven examiner feedback to fix your mistakes before test day.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-200 shadow-md"
          >
            Start Your YKI Practice Now
          </Link>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 border-t border-gray-200 pt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">How do these YKI message writing examples help me pass the test?</h3>
              <p className="text-gray-600">
                Reviewing realistic examples helps you understand the required B1 Finnish writing level, proper formatting, and how to effectively answer all prompt points without overcomplicating your sentences. They serve as reliable templates for your own exam answers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Are these Finnish message samples exactly what I will see on the exam?</h3>
              <p className="text-gray-600">
                These examples are highly realistic practice prompts modeled closely after actual YKI writing task structures. While the exact topics will vary (e.g., you might invite a friend to a movie instead of a cottage), the required tone, length, and format will be identical.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">How many words should my YKI short message be?</h3>
              <p className="text-gray-600">
                For the short message task (usually Task 1), your text should typically be around 30 to 50 words. The most important factor is clearly addressing every bullet point provided in the instructions, rather than hitting an exact word count.
              </p>
            </div>
          </div>
        </section>

      </article>
    </main>
  );
}