import Link from 'next/link';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('guides', 'yki-complaint-letter-finnish', {
  title: 'How to Write a Complaint Letter in Finnish for YKI Exam',
  description: 'Master the YKI complaint letter Finnish exam task with reusable templates, essential Reklamaatio suomeksi vocabulary, and professional phrasing tips.',
});

export default function YkiComplaintLetterFinnish() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What register should I use for a YKI complaint letter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You must use formal written Finnish (kirjakieli). Avoid colloquialisms, slang, or spoken language abbreviations, as complaint letters are directed at companies or official entities."
        }
      },
      {
        "@type": "Question",
        "name": "How many parts should a YKI feedback email have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A structured complaint letter needs a formal greeting, a clear statement of the issue, details about why it is unacceptable, your specific demand or expectation for a solution, and a formal closing."
        }
      },
      {
        "@type": "Question",
        "name": "What are common mistakes in a Reklamaatio suomeksi task?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common mistakes include writing in an overly aggressive or emotional tone, mixing formal and informal pronouns, and failing to state a clear demand or solution at the end."
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="prose prose-lg prose-blue mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
          How to Write a Complaint Letter in Finnish for YKI Exam
        </h1>

        <p className="lead text-xl text-gray-600 mb-8">
          Mastering a <strong>YKI complaint letter Finnish</strong> task is essential for achieving a passing grade at intermediate or higher levels. Whether you face a <em>reklamaatio suomeksi</em> scenario or a formal customer service issue, using a solid structural template ensures you hit every examiner requirement.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
          Reusable Template for a YKI Complaint Letter
        </h2>
        <p>
          Examiners look for clear structure, formal register, and polite yet firm phrasing. You can adapt the following framework for any product or service complaint prompt in the test:
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 font-mono text-sm leading-relaxed">
          <p className="text-gray-500 mb-2">[Otsikko / Subject line]</p>
          <p className="font-bold text-gray-900 mb-4">Asia: Reklamaatio [tuotteesta / palvelusta]</p>
          
          <p className="text-gray-500 mb-2">[Formal Greeting]</p>
          <p className="font-bold text-gray-900 mb-4">Hyvä vastaanottaja / Arvoisa [Yrityksen nimi] asiakaspalvelu,</p>
          
          <p className="text-gray-500 mb-2">[State the issue clearly]</p>
          <p className="text-gray-800 mb-4">Ostin [päivämäärä] teiltä [tuotteen nimi]. Valitettavasti tuotteessa on virhe: [kuvaile ongelma lyhyesti].</p>
          
          <p className="text-gray-500 mb-2">[Explain the impact or details]</p>
          <p className="text-gray-800 mb-4">Tämä aiheuttaa minulle harmia, koska [selitä syy]. Tuote ei toimi niin kuin luvattiin.</p>
          
          <p className="text-gray-500 mb-2">[State your demand / YKI feedback email expectation]</p>
          <p className="text-gray-800 mb-4">Vaadin, että [rahat palautetaan / tuote vaihdetaan uuteen / saan alennusta].</p>
          
          <p className="text-gray-500 mb-2">[Formal Sign-off]</p>
          <p className="text-gray-800">Ystävällisin terveisin,<br />[Nimesi]<br />[Puhelinnumero / Sähköposti]</p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
          Essential Finnish Writing Phrases for Complaints
        </h2>
        <p>
          To elevate your score, integrate precise <strong>Finnish writing phrases</strong> that signal high-level grammatical competence and appropriate tone.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Olen tyytymätön tuotteeseen/palveluun:</strong> I am dissatisfied with the product/service.</li>
          <li><strong>Laitteessa on seuraava vika:</strong> The device has the following defect.</li>
          <li><strong>Edellytän asian pikaista selvittämistä:</strong> I expect this matter to be resolved promptly.</li>
          <li><strong>Odotan vastaustanne viikon kuluessa:</strong> I await your reply within a week.</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
          Examiner Criteria & Common Mistakes
        </h2>
        <p>
          When evaluating a complaint or a formal <strong>YKI feedback email</strong>, examiners grade you on task completion, vocabulary range, and grammar accuracy. Avoid these frequent pitfalls:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Overly emotional tone:</strong> Keep your language professional and objective rather than angry or insulting.</li>
          <li><strong>Missing a concrete demand:</strong> A valid complaint must always specify what action you expect the company to take.</li>
          <li><strong>Register slipping:</strong> Do not mix formal phrasing with spoken language slang words.</li>
        </ul>

      </article>

      <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Master your YKI writing tasks today</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Practice official-style complaint letters and receive instant evaluation on your vocabulary, register, and grammar structure.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Start Practicing Now
        </Link>
      </div>

      <section className="mt-16 border-t pt-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">What register should I use for a YKI complaint letter?</h3>
            <p className="mt-2 text-gray-600">You must use formal written Finnish (kirjakieli). Avoid colloquialisms, slang, or spoken language abbreviations, as complaint letters are directed at companies or official entities.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">How many parts should a YKI feedback email have?</h3>
            <p className="mt-2 text-gray-600">A structured complaint letter needs a formal greeting, a clear statement of the issue, details about why it is unacceptable, your specific demand or expectation for a solution, and a formal closing.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">What are common mistakes in a Reklamaatio suomeksi task?</h3>
            <p className="mt-2 text-gray-600">Common mistakes include writing in an overly aggressive or emotional tone, mixing formal and informal pronouns, and failing to state a clear demand or solution at the end.</p>
          </div>
        </div>
      </section>
    </main>
  );
}