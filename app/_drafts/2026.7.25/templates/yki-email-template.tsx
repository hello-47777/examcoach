import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YKI Email Template for Writing Test: Ready-to-Use Structures',
  description: 'Master the YKI writing test with our proven YKI email template. Memorize these ready-to-use formal and informal Finnish email formats for B1-B2 exam success.',
};

export default function YkiEmailTemplatePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I memorize a template for the YKI writing test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, memorizing standard greetings, openings, polite requests, and closings is highly recommended. However, you must adapt the middle section (the 'body') to directly answer the specific prompt given in the exam."
        }
      },
      {
        "@type": "Question",
        "name": "What is the correct Finnish email format for a formal complaint?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard formal complaint starts with 'Hyvä [Recipient]', states the reason for writing ('Kirjoitan teille, koska...'), explains the issue clearly, asks for a resolution ('Voisitteko ystävällisesti...'), and ends with 'Ystävällisin terveisin'."
        }
      },
      {
        "@type": "Question",
        "name": "How important is paragraph structure in YKI emails?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Very important. Breaking your email into clear, logical paragraphs (Greeting, Context/Issue, Request/Action, Closing) improves readability and coherence, which are key grading criteria for B1 and B2 levels."
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            YKI Email Template for Writing Test: Ready-to-Use Structures
          </h1>
        </header>

        <section className="prose prose-lg max-w-none text-gray-700">
          <p>
            Time management and stress can be your biggest enemies during the Finnish proficiency test. The most effective way to guarantee a passing grade is to memorize a reliable <strong>YKI email template</strong> before you even sit down for the exam. By using pre-planned frameworks, you can save valuable minutes and ensure your grammar is flawless where it matters most.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Why You Need a YKI Email Template
          </h2>
          <p>
            In the intermediate YKI test (keskitaso), you are guaranteed to write at least two messages: one formal and one informal. Using a structured <strong>YKI writing template</strong> acts as one of the best <strong>exam writing shortcuts</strong> available. It provides a &quot;fill-in-the-blanks&quot; system so you can focus purely on addressing the specific prompt rather than struggling with basic <strong>YKI writing structure</strong>.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            1. The Formal YKI Email Template (Complaints & Inquiries)
          </h2>
          <p>
            Formal tasks usually involve writing to customer service, a landlord, or an office. You must use polite language (the conditional mood) and professional formatting. This <strong>Finnish email format</strong> is universally applicable for B1-B2 responses.
          </p>

          <div className="bg-gray-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-blue-900">Formal Template Structure</h3>
            <div className="font-medium text-gray-800">
              <p className="mb-2"><strong>[Greeting]</strong></p>
              <p className="mb-4">Hyvä asiakaspalvelu / Hyvä [Vastaanottajan nimi],</p>
              
              <p className="mb-2"><strong>[Opening / The Reason for Writing]</strong></p>
              <p className="mb-4">Otan teihin yhteyttä koskien <em>[varaukseni / ostamani tuotetta / asiaa]</em>. Kirjoitan, koska <em>[selitä lyhyesti, mikä on tilanne]</em>.</p>
              
              <p className="mb-2"><strong>[The Issue / The Details]</strong></p>
              <p className="mb-4">Valitettavasti huomasin, että <em>[selitä ongelma tai tilanteen muutos]</em>. Lisäksi <em>[kerro toinen tärkeä yksityiskohta tehtävänannosta]</em>.</p>
              
              <p className="mb-2"><strong>[Polite Request / Call to Action]</strong></p>
              <p className="mb-4">Haluaisin tiedustella, olisiko mahdollista <em>[mitä haluat heidän tekevän: esim. palauttaa rahat / siirtää aikaa]</em>? Voisitteko ystävällisesti kertoa, miten minun pitää toimia?</p>
              
              <p className="mb-2"><strong>[Sign-off]</strong></p>
              <p>Odotan pikaista vastaustanne.<br />Ystävällisin terveisin,<br />[Oma Nimesi]</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            2. The Informal YKI Email Template (Messages to Friends)
          </h2>
          <p>
            The informal task is typically an invitation, an apology, or a suggestion to a friend. The tone should be warm, conversational, and direct. Keep your sentences relatively short but use appropriate spoken-language-style written greetings.
          </p>

          <div className="bg-gray-50 border-l-4 border-green-500 p-6 my-6 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-green-900">Informal Template Structure</h3>
            <div className="font-medium text-gray-800">
              <p className="mb-2"><strong>[Greeting]</strong></p>
              <p className="mb-4">Moi [Ystävän Nimi]! / Hei [Ystävän Nimi],</p>
              
              <p className="mb-2"><strong>[Friendly Opening]</strong></p>
              <p className="mb-4">Mitä kuuluu? Kiitos viestistäsi / kutsustasi. Oli kiva kuulla sinusta.</p>
              
              <p className="mb-2"><strong>[The Core Message]</strong></p>
              <p className="mb-4">Tarkoitukseni oli tulla <em>[tapahtumaan/juhliin]</em>, mutta valitettavasti minulle tuli este. En pääse tulemaan, koska <em>[syy: esim. olen sairaana / minulla on työvuoro]</em>. Olen todella pahoillani!</p>
              
              <p className="mb-2"><strong>[Alternative Suggestion]</strong></p>
              <p className="mb-4">Sopiiko sinulle, jos näkisimme <em>[uusi aika: esim. ensi viikonloppuna]</em>? Voisimme mennä esimerkiksi <em>[paikka: esim. kahvilaan / elokuviin]</em>.</p>
              
              <p className="mb-2"><strong>[Sign-off]</strong></p>
              <p>Ilmoita, sopiiko tämä sinulle!<br />Nähdään pian,<br />Terveisin,<br />[Oma Nimesi]</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            How to Use These Templates Effectively in the Exam
          </h2>
          <p>
            Having a framework is only half the battle. To score a B1 or B2, you must adapt these templates correctly:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Check off every prompt requirement:</strong> The examiner will deduct points if you miss a bullet point from the prompt, even if your grammar is perfect. Use the template&apos;s &quot;body&quot; section to answer every specific question asked.</li>
            <li><strong>Do not mix registers:</strong> If you start with <em>&quot;Hyvä asiakaspalvelu&quot;</em>, do not end with <em>&quot;Nähdään!&quot;</em>. Stick strictly to the formal or informal words provided in the templates.</li>
            <li><strong>Memorize the spelling of key phrases:</strong> Words like <em>&quot;Ystävällisin terveisin&quot;</em> and <em>&quot;Valitettavasti&quot;</em> are easy to misspell. Practice writing them by hand multiple times before the test.</li>
          </ul>
        </section>

        <section className="bg-blue-600 text-white p-8 rounded-xl mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Test Your Template Skills</h2>
          <p className="text-lg mb-6">
            Want to see if you are applying these templates correctly? Practice with our realistic YKI writing simulator and get instant AI feedback on your structure, grammar, and vocabulary.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            Start Your Writing Practice
          </Link>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Can I memorize a template for the YKI writing test?</h3>
              <p className="text-gray-600 mt-2">
                Yes, memorizing standard greetings, openings, polite requests, and closings is highly recommended. However, you must adapt the middle section (the &quot;body&quot;) to directly answer the specific prompt given in the exam.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">What is the correct Finnish email format for a formal complaint?</h3>
              <p className="text-gray-600 mt-2">
                A standard formal complaint starts with <em>&quot;Hyvä [Recipient]&quot;</em>, states the reason for writing (<em>&quot;Kirjoitan teille, koska...&quot;</em>), explains the issue clearly, asks for a resolution (<em>&quot;Voisitteko ystävällisesti...&quot;</em>), and ends with <em>&quot;Ystävällisin terveisin&quot;</em>.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">How important is paragraph structure in YKI emails?</h3>
              <p className="text-gray-600 mt-2">
                Very important. Breaking your email into clear, logical paragraphs (Greeting, Context/Issue, Request/Action, Closing) improves readability and coherence, which are key grading criteria for achieving B1 and B2 levels.
              </p>
            </div>
          </div>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}