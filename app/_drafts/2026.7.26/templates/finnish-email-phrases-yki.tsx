import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Finnish Email Phrases for YKI Writing: Essential Expressions',
  description: 'Memorize these essential Finnish email phrases for YKI writing tasks. Boost your B1-B2 score with our categorized list of formal and informal Finnish email expressions.',
};

export default function FinnishEmailPhrasesYkiPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need perfect grammar if I use these Finnish email phrases?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While perfect grammar is not required to pass (B1), using correct standard phrases demonstrates language command and often compensates for minor spelling or word order mistakes elsewhere in your text."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use the same phrases for formal and informal YKI tasks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The YKI exam strictly tests your ability to adjust your register. Mixing informal greetings like 'Moi' with formal closings like 'Ystävällisin terveisin' will result in a lower grade."
        }
      },
      {
        "@type": "Question",
        "name": "How many phrases should I memorize for the YKI writing test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You do not need hundreds. Memorizing 2-3 reliable greetings, openings, polite requests, and closings for both formal and informal situations is more than enough to cover any prompt."
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Finnish Email Phrases for YKI Writing: Essential Expressions
          </h1>
        </header>

        <section className="prose prose-lg max-w-none text-gray-700">
          <p>
            When preparing for the intermediate test (keskitaso), mastering the specific <strong>Finnish email phrases YKI</strong> examiners expect to see is one of the fastest ways to improve your score. Building a strong arsenal of <strong>YKI writing vocabulary</strong> not only saves you precious time during the exam but also ensures your grammar is flawless in crucial parts of your message.
          </p>
          <p>
            This guide provides a categorized list of essential <strong>Finnish email expressions</strong> and reliable <strong>Finnish writing phrases</strong>. Memorize a few from each category, and you will be able to construct high-scoring responses regardless of the prompt.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Why Memorize Finnish Email Phrases YKI Style?
          </h2>
          <p>
            The YKI writing subtest heavily evaluates your ability to adapt your text to the recipient. A message to a friend (informal) uses completely different vocabulary than a complaint to a housing manager (formal). By learning these phrases in pairs—knowing the formal and informal version of the same idea—you demonstrate the exact B1/B2 skills examiners look for.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            1. Greetings (Tervehdykset)
          </h2>
          <p>
            The way you open your email immediately sets the tone and shows the examiner you understand who you are writing to.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200 text-left text-sm">
              <thead className="bg-gray-100 font-semibold text-gray-800">
                <tr>
                  <th className="py-3 px-4 border-b">Tone</th>
                  <th className="py-3 px-4 border-b">Finnish Phrase</th>
                  <th className="py-3 px-4 border-b">English Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr>
                  <td className="py-3 px-4 font-bold text-blue-700">Formal</td>
                  <td className="py-3 px-4">Hyvä asiakaspalvelu,</td>
                  <td className="py-3 px-4">Dear customer service,</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-blue-700">Formal</td>
                  <td className="py-3 px-4">Hyvä [Nimi / Titteli],</td>
                  <td className="py-3 px-4">Dear [Name / Title],</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-green-700">Informal</td>
                  <td className="py-3 px-4">Moi [Nimi]! / Hei [Nimi],</td>
                  <td className="py-3 px-4">Hi [Name]! / Hello [Name],</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            2. Openings and Context (Aloitukset)
          </h2>
          <p>
            After greeting the recipient, you must immediately state why you are writing. This directly addresses the &quot;explain the situation&quot; requirement in most YKI prompts.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200 text-left text-sm">
              <thead className="bg-gray-100 font-semibold text-gray-800">
                <tr>
                  <th className="py-3 px-4 border-b">Tone</th>
                  <th className="py-3 px-4 border-b">Finnish Phrase</th>
                  <th className="py-3 px-4 border-b">English Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr>
                  <td className="py-3 px-4 font-bold text-blue-700">Formal</td>
                  <td className="py-3 px-4">Otan teihin yhteyttä koskien...</td>
                  <td className="py-3 px-4">I am contacting you regarding...</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-blue-700">Formal</td>
                  <td className="py-3 px-4">Kirjoitan, koska...</td>
                  <td className="py-3 px-4">I am writing because...</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-blue-700">Formal</td>
                  <td className="py-3 px-4">Huomasin ilmoituksenne ja...</td>
                  <td className="py-3 px-4">I noticed your advertisement and...</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-green-700">Informal</td>
                  <td className="py-3 px-4">Mitä kuuluu? Kiitos viestistä.</td>
                  <td className="py-3 px-4">How are you? Thanks for the message.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-green-700">Informal</td>
                  <td className="py-3 px-4">Oli kiva kuulla sinusta!</td>
                  <td className="py-3 px-4">It was nice to hear from you!</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            3. Polite Requests and Needs (Pyynnöt ja Tarpeet)
          </h2>
          <p>
            To achieve a B1 or B2 level in formal tasks, you must use the conditional mood (<em>konditionaali</em>) to soften your requests. In informal tasks, simple direct questions are appropriate.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200 text-left text-sm">
              <thead className="bg-gray-100 font-semibold text-gray-800">
                <tr>
                  <th className="py-3 px-4 border-b">Tone</th>
                  <th className="py-3 px-4 border-b">Finnish Phrase</th>
                  <th className="py-3 px-4 border-b">English Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr>
                  <td className="py-3 px-4 font-bold text-blue-700">Formal</td>
                  <td className="py-3 px-4">Voisitteko ystävällisesti...</td>
                  <td className="py-3 px-4">Could you kindly...</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-blue-700">Formal</td>
                  <td className="py-3 px-4">Haluaisin tiedustella, onko...</td>
                  <td className="py-3 px-4">I would like to inquire if...</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-blue-700">Formal</td>
                  <td className="py-3 px-4">Olisiko mahdollista...</td>
                  <td className="py-3 px-4">Would it be possible to...</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-green-700">Informal</td>
                  <td className="py-3 px-4">Voitko auttaa minua?</td>
                  <td className="py-3 px-4">Can you help me?</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-green-700">Informal</td>
                  <td className="py-3 px-4">Sopiiko sinulle, jos...</td>
                  <td className="py-3 px-4">Is it okay with you if...</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            4. Apologies and Complaining (Anteeksipyynnöt ja Valitukset)
          </h2>
          <p>
            Whether you are canceling plans with a friend or complaining about a broken product to a store, you need strong vocabulary to express dissatisfaction or regret clearly.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200 text-left text-sm">
              <thead className="bg-gray-100 font-semibold text-gray-800">
                <tr>
                  <th className="py-3 px-4 border-b">Tone</th>
                  <th className="py-3 px-4 border-b">Finnish Phrase</th>
                  <th className="py-3 px-4 border-b">English Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr>
                  <td className="py-3 px-4 font-bold text-blue-700">Formal</td>
                  <td className="py-3 px-4">Olen valitettavasti tyytymätön...</td>
                  <td className="py-3 px-4">I am unfortunately dissatisfied with...</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-blue-700">Formal</td>
                  <td className="py-3 px-4">Tuote ei vastaa odotuksia.</td>
                  <td className="py-3 px-4">The product does not meet expectations.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-green-700">Informal</td>
                  <td className="py-3 px-4">Olen todella pahoillani, mutta...</td>
                  <td className="py-3 px-4">I am really sorry, but...</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-green-700">Informal</td>
                  <td className="py-3 px-4">Valitettavasti minulle tuli este.</td>
                  <td className="py-3 px-4">Unfortunately, something came up.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            5. Sign-offs and Closings (Lopetukset)
          </h2>
          <p>
            Finish strong. The sign-off leaves a lasting impression and finalizes the tone of your text.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200 text-left text-sm">
              <thead className="bg-gray-100 font-semibold text-gray-800">
                <tr>
                  <th className="py-3 px-4 border-b">Tone</th>
                  <th className="py-3 px-4 border-b">Finnish Phrase</th>
                  <th className="py-3 px-4 border-b">English Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr>
                  <td className="py-3 px-4 font-bold text-blue-700">Formal</td>
                  <td className="py-3 px-4">Odotan pikaista vastaustanne.</td>
                  <td className="py-3 px-4">I await your quick reply.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-blue-700">Formal</td>
                  <td className="py-3 px-4">Ystävällisin terveisin,</td>
                  <td className="py-3 px-4">Kind regards / Sincerely,</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-green-700">Informal</td>
                  <td className="py-3 px-4">Ilmoita, sopiiko tämä sinulle!</td>
                  <td className="py-3 px-4">Let me know if this suits you!</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-green-700">Informal</td>
                  <td className="py-3 px-4">Nähdään pian! / Terveisin,</td>
                  <td className="py-3 px-4">See you soon! / Regards,</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-blue-700 text-white p-8 rounded-xl mt-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Memorized the Phrases? Put Them to the Test!</h2>
          <p className="text-lg mb-6">
            Stop worrying about whether your grammar is correct. Practice writing emails with ExamCoach.ai and receive instant, personalized examiner feedback to guarantee you hit your B1 or B2 target.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
          >
            Start Your Writing Practice
          </Link>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Do I need perfect grammar if I use these Finnish email phrases?</h3>
              <p className="text-gray-600 mt-2">
                While perfect grammar is not required to pass (B1), using correct standard phrases demonstrates language command and often compensates for minor spelling or word order mistakes elsewhere in your text. It shows the examiner you understand the structure of communication.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Can I use the same phrases for formal and informal YKI tasks?</h3>
              <p className="text-gray-600 mt-2">
                No. The YKI exam strictly tests your ability to adjust your register. Mixing informal greetings like <em>&quot;Moi&quot;</em> with formal closings like <em>&quot;Ystävällisin terveisin&quot;</em> will result in a lower grade because it shows a lack of situational awareness.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">How many phrases should I memorize for the YKI writing test?</h3>
              <p className="text-gray-600 mt-2">
                You do not need hundreds. Memorizing 2-3 reliable greetings, openings, polite requests, and closings for both formal and informal situations is more than enough to successfully cover almost any prompt you will face on exam day.
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