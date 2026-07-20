import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YKI Formal Email Template: Professional Finnish Writing Framework',
  description: 'Prepare for the YKI test with our reliable YKI formal email template. Master the formal Finnish email structure to easily pass B1-B2 writing tasks.',
};

export default function YkiFormalEmailTemplatePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you start a formal email in Finnish?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most standard opening for a formal Finnish email is 'Hyvä [Recipient's Name or Title]'. If you are writing to a general company inbox, 'Hyvä asiakaspalvelu' (Dear customer service) or a simple, professional 'Hei' is perfectly acceptable."
        }
      },
      {
        "@type": "Question",
        "name": "What makes a Finnish email official or formal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Finnish official email relies on the conditional mood (voisitteko, haluaisin) for politeness, avoids spoken language (puhekieli), and uses standard professional sign-offs like 'Ystävällisin terveisin'."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to write a long email for the YKI formal writing task?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Examiners value clarity and task completion over length. A concise message of 50-80 words that directly addresses all prompt bullet points using the correct register will score well."
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            YKI Formal Email Template: Professional Finnish Writing Framework
          </h1>
        </header>

        <section className="prose prose-lg max-w-none text-gray-700">
          <p>
            Tackling the writing section of the Finnish proficiency exam can be intimidating, but memorizing a reliable <strong>YKI formal email template</strong> is your best strategy for success. The intermediate exam (keskitaso) almost always requires you to write a polite, professional message—such as a complaint or an inquiry. Having a pre-planned structure ensures you do not waste time figuring out how to start or end your text.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Understanding the Formal Finnish Email Structure
          </h2>
          <p>
            To achieve a B1 or B2 grade, your response must demonstrate that you understand how to adjust your register for a professional context. A standard <strong>formal Finnish email structure</strong> is built on four distinct parts. Breaking your text into these logical paragraphs makes it easier for the examiner to read and grade.
          </p>
          
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Greeting (Tervehdys):</strong> Polite and respectful address to the recipient.</li>
            <li><strong>Context (Asian esittely):</strong> Why are you writing? State this immediately.</li>
            <li><strong>Details & Request (Yksityiskohdat ja pyyntö):</strong> Address the specific bullet points from the exam prompt using the conditional mood (<em>konditionaali</em>).</li>
            <li><strong>Sign-off (Lopetus):</strong> A professional closing and your name.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Template 1: The Complaint (Reklamaatio)
          </h2>
          <p>
            Complaints are heavily featured in the YKI test. You might need to write to a store about a broken product, or to a landlord about a noisy neighbor. Use this <strong>YKI formal email template</strong> to quickly outline your response:
          </p>

          <div className="bg-gray-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-blue-900">Framework: Submitting a Complaint</h3>
            <div className="font-medium text-gray-800">
              <p className="mb-2"><strong>[Greeting]</strong></p>
              <p className="mb-4 text-indigo-800">Hyvä asiakaspalvelu / isännöitsijä,</p>
              
              <p className="mb-2"><strong>[The Context]</strong></p>
              <p className="mb-4 text-indigo-800">Otan teihin yhteyttä, koska <em>[syy: esim. ostamani puhelin meni rikki / naapurissa on liikaa meteliä]</em>.</p>
              
              <p className="mb-2"><strong>[The Details & Problem]</strong></p>
              <p className="mb-4 text-indigo-800">Valitettavasti huomasin, että <em>[selitä ongelma tarkemmin tehtävänannon mukaan]</em>. Olen hyvin pettynyt tilanteeseen.</p>
              
              <p className="mb-2"><strong>[The Polite Request]</strong></p>
              <p className="mb-4 text-indigo-800">Haluaisin tiedustella, miten voimme ratkaista tämän asian? Voisitteko ystävällisesti <em>[pyyntö: esim. palauttaa rahani / korjata asian]</em>?</p>
              
              <p className="mb-2"><strong>[Sign-off]</strong></p>
              <p className="text-indigo-800">Odotan pikaista vastaustanne.<br />Ystävällisin terveisin,<br /><em>[Oma Nimesi]</em></p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Template 2: Requesting Information (Tiedustelu)
          </h2>
          <p>
            If the prompt asks you to inquire about an apartment, a job opening, or a service, you need a slightly different <strong>YKI writing format</strong>. This template focuses on expressing interest and politely asking questions.
          </p>

          <div className="bg-gray-50 border-l-4 border-emerald-600 p-6 my-6 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-emerald-900">Framework: Asking for Information</h3>
            <div className="font-medium text-gray-800">
              <p className="mb-2"><strong>[Greeting]</strong></p>
              <p className="mb-4 text-emerald-800">Hyvä <em>[Vastaanottajan titteli tai nimi, esim. asunnonvälittäjä]</em>,</p>
              
              <p className="mb-2"><strong>[The Context]</strong></p>
              <p className="mb-4 text-emerald-800">Huomasin ilmoituksenne <em>[aihe: esim. vapaasta asunnosta / työpaikasta]</em> ja olen siitä erittäin kiinnostunut.</p>
              
              <p className="mb-2"><strong>[The Questions]</strong></p>
              <p className="mb-4 text-emerald-800">Minulla olisi muutama kysymys aiheeseen liittyen. Voisitteko kertoa, <em>[kysymys 1: esim. kuuluuko vesi vuokraan]</em>? Lisäksi haluaisin tietää, <em>[kysymys 2: esim. milloin asunto on vapaa]</em>.</p>
              
              <p className="mb-2"><strong>[Sign-off]</strong></p>
              <p className="text-emerald-800">Kiitos jo etukäteen tiedoista!<br />Ystävällisin terveisin,<br /><em>[Oma Nimesi]</em></p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Mastering the Finnish Official Email Vocabulary
          </h2>
          <p>
            Writing a <strong>Finnish official email</strong> is all about vocabulary selection. When you sit down for the exam, swap out basic words for their professional counterparts. Study this quick-reference table to upgrade your text from A2 to B1/B2:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200 text-left text-sm">
              <thead className="bg-gray-100 font-semibold text-gray-800">
                <tr>
                  <th className="py-3 px-4 border-b">Function</th>
                  <th className="py-3 px-4 border-b">Basic (Avoid in Formal Tasks)</th>
                  <th className="py-3 px-4 border-b">Professional (Use These)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr>
                  <td className="py-3 px-4 font-bold">Asking a question</td>
                  <td className="py-3 px-4">Haluan kysyä...</td>
                  <td className="py-3 px-4">Haluaisin tiedustella...</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Contacting someone</td>
                  <td className="py-3 px-4">Laitan viestiä...</td>
                  <td className="py-3 px-4">Otan teihin yhteyttä koskien...</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Making a request</td>
                  <td className="py-3 px-4">Voitko antaa...</td>
                  <td className="py-3 px-4">Voisitteko ystävällisesti...</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Expressing regret</td>
                  <td className="py-3 px-4">Harmi että...</td>
                  <td className="py-3 px-4">Valitettavasti...</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Ending the email</td>
                  <td className="py-3 px-4">Terveisin,</td>
                  <td className="py-3 px-4">Ystävällisin terveisin,</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Common Mistakes When Applying Templates
          </h2>
          <p>
            Even with a perfect template, candidates can lose points if they are not careful. Avoid these common traps:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Ignoring Prompt Instructions:</strong> A template is a skeleton. If the prompt asks you to &quot;Suggest a time for a phone call&quot;, you <em>must</em> insert that specific suggestion into the details section of the template. Missing a bullet point guarantees a lower score.</li>
            <li><strong>Mixing Formal and Informal:</strong> Never start an email with <em>&quot;Hyvä asiakaspalvelu&quot;</em> and end it with <em>&quot;Nähdään!&quot;</em>. Maintain consistency from top to bottom.</li>
            <li><strong>Forgetting Pronoun Capitalization:</strong> While not strictly required in modern emails, capitalizing formal pronouns like <em>Te</em> and <em>Teidän</em> (e.g., <em>Kirjoitan Teille...</em>) is a great way to show the examiner you have mastered traditional formal writing rules.</li>
          </ul>
        </section>

        <section className="bg-blue-700 text-white p-8 rounded-xl mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Put These Templates to the Test?</h2>
          <p className="text-lg mb-6">
            Stop worrying about whether your grammar is correct. Practice writing formal emails with ExamCoach.ai and receive instant, personalized examiner feedback to guarantee you hit your B1 or B2 target.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-md"
          >
            Start Your Writing Practice
          </Link>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">How do you start a formal email in Finnish?</h3>
              <p className="text-gray-600 mt-2">
                The most standard opening for a formal Finnish email is <em>&quot;Hyvä [Recipient&apos;s Name or Title]&quot;</em>. If you are writing to a general company inbox, <em>&quot;Hyvä asiakaspalvelu&quot;</em> (Dear customer service) or a simple, professional <em>&quot;Hei&quot;</em> is perfectly acceptable.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">What makes a Finnish email official or formal?</h3>
              <p className="text-gray-600 mt-2">
                A Finnish official email relies heavily on the conditional mood (<em>voisitteko</em>, <em>haluaisin</em>) to soften requests and demonstrate politeness. It avoids spoken language (puhekieli) entirely and utilizes standard professional sign-offs like <em>&quot;Ystävällisin terveisin&quot;</em>.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Do I need to write a long email for the YKI formal writing task?</h3>
              <p className="text-gray-600 mt-2">
                No. Examiners value clarity and task completion over length. A concise, logically structured message of 50-80 words that directly addresses all prompt bullet points using the correct register will score extremely well.
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