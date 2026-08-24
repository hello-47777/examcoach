import Link from 'next/link';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('guides', 'yki-formal-email-writing-task-2', {
  title: 'YKI Formal Email Writing: Complete Guide for Task 2',
  description: 'Master the YKI formal email for Task 2 of the Finnish language test. Get step-by-step guidance, templates, vocabulary, and top YKI Task 2 tips.',
});

export default function YKIFormalEmailGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long should a YKI formal email be in Task 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You do not need to write a long essay. A concise, clear email of about 50 to 80 words is usually perfect. The most important thing is addressing all the bullet points provided in the prompt."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use spoken language (puhekieli) in Task 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Task 2 requires standard written Finnish (kirjakieli). Avoid words like 'mä', 'sä', or 'joo'. Use 'minä', 'sinä', and 'kyllä'."
        }
      },
      {
        "@type": "Question",
        "name": "How do I sign off a formal Finnish email?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common formal sign-offs include 'Ystävällisin terveisin' (Kind regards) or simply 'Terveisin' (Regards), followed by your full name."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Article Content */}
        <article className="bg-white rounded-2xl shadow-sm p-8 sm:p-12">
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            YKI Formal Email Writing: Complete Guide for Task 2
          </h1>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            If you are preparing for the intermediate level of the Finnish language test, mastering the <strong>YKI formal email</strong> is absolutely critical for passing the writing section. Task 2 almost always requires you to navigate a formal situation—such as contacting a housing manager, writing to a company to complain about a faulty product, or asking an official for information. In this guide, we will break down the exact structure, vocabulary, and YKI Task 2 tips you need to achieve a high score.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            Step-by-Step Guide to the YKI Formal Email
          </h2>
          <p className="text-gray-700 mb-4">
            Writing a <em>virallinen sähköposti YKI</em> (YKI formal email) is different from writing to a friend. You must use standard written language (kirjakieli) and follow a clear, logical structure. Follow these four steps:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-4 mb-8">
            <li><strong>The Greeting:</strong> Start with a polite, formal salutation. Do not use "Moi".</li>
            <li><strong>The Purpose:</strong> State exactly why you are writing in the very first sentence.</li>
            <li><strong>The Details (The Prompt's Bullet Points):</strong> The exam prompt will give you 2-3 specific things you must mention. Address every single one clearly.</li>
            <li><strong>The Closing and Sign-off:</strong> End with a polite closing statement and a formal sign-off with your full name.</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            Reusable Template for Task 2
          </h2>
          <p className="text-gray-700 mb-4">
            Memorize this reusable framework to save time and reduce stress during the exam.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg text-gray-800">
            <p className="font-mono mb-2">Hei [Recipient Name / Title],</p>
            <p className="font-mono mb-2">Kirjoitan teille, koska [reason for writing - e.g., haluan tehdä reklamaation / tarvitsen lisätietoja].</p>
            <p className="font-mono mb-2">[Detail 1 from prompt]. [Detail 2 from prompt]. [Detail 3 from prompt].</p>
            <p className="font-mono mb-2">[Action request - e.g., Voisitteko korjata asian pian?]</p>
            <p className="font-mono mb-2">Ystävällisin terveisin,</p>
            <p className="font-mono">[Your Full Name]</p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            Essential Vocabulary: Categorized Phrases
          </h2>
          <p className="text-gray-700 mb-4">
            Using the right vocabulary demonstrates your command of Finnish formal writing. Here are phrases categorized by their function in the email:
          </p>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border-b-2 border-gray-200">Category</th>
                  <th className="p-3 border-b-2 border-gray-200">Finnish Phrase</th>
                  <th className="p-3 border-b-2 border-gray-200">English Meaning</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-3 font-semibold">Greetings</td>
                  <td className="p-3">Hyvä vastaanottaja,<br/>Hei,</td>
                  <td className="p-3">Dear Recipient,<br/>Hello, (Safe formal choice)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Opening</td>
                  <td className="p-3">Kirjoitan teille koskien...<br/>Otan yhteyttä, koska...</td>
                  <td className="p-3">I am writing to you regarding...<br/>I am contacting you because...</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Requests</td>
                  <td className="p-3">Haluaisin kysyä, voisitteko...<br/>Olisiko mahdollista saada...</td>
                  <td className="p-3">I would like to ask if you could...<br/>Would it be possible to get...</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Closing</td>
                  <td className="p-3">Odotan vastaustanne.<br/>Kiitos jo etukäteen.</td>
                  <td className="p-3">I look forward to your reply.<br/>Thank you in advance.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Sign-off</td>
                  <td className="p-3">Ystävällisin terveisin,</td>
                  <td className="p-3">Kind regards,</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            Realistic Example and Explanation
          </h2>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-gray-900 mb-2">Exam Prompt:</h3>
            <p className="text-gray-700 mb-4 italic">
              You rented a cabin for the weekend, but the heating did not work, and the cabin was dirty. Write an email to the rental company. Mention: 1) when you rented it, 2) what the problems were, 3) what you want them to do about it.
            </p>
            <h3 className="font-bold text-gray-900 mb-2">High-Scoring Response:</h3>
            <p className="font-mono text-gray-800 mb-4 bg-white p-4 border rounded">
              Hei,<br/><br/>
              Kirjoitan teille, koska haluan tehdä reklamaation. Vuokrasin teiltä mökin viime viikonloppuna (12.-14. toukokuuta).<br/><br/>
              Valitettavasti mökki oli saapuessani erittäin likainen, ja lisäksi lämmitys ei toiminut ollenkaan. Koko viikonlopun oli todella kylmä.<br/><br/>
              Näiden ongelmien vuoksi vaadin, että palautatte minulle osan vuokrahinnasta.<br/><br/>
              Odotan vastaustanne pian.<br/><br/>
              Ystävällisin terveisin,<br/>
              Matti Meikäläinen
            </p>
            <p className="text-sm text-gray-600">
              <strong>Why this works:</strong> It uses "Hei" appropriately, immediately states the purpose (reklamaatio), cleanly answers all three prompt requirements, uses formal "te" (teille/teiltä), and signs off politely.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            How Examiners Score Your Writing
          </h2>
          <p className="text-gray-700 mb-4">
            To maximize your score, you need to understand the examiner's criteria. Our top YKI Task 2 tips include focusing on these three pillars:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
            <li><strong>Task Achievement:</strong> Did you answer every single bullet point in the prompt? Missing a bullet point will heavily lower your score, even if your grammar is flawless.</li>
            <li><strong>Register and Tone:</strong> Did you maintain a polite, formal tone? The YKI evaluators check if you can adapt your language to official situations.</li>
            <li><strong>Grammar and Vocabulary:</strong> Are you using standard <em>kirjakieli</em>? Are your sentence structures understandable? Small grammatical errors are acceptable at the intermediate level (B1), provided they do not block comprehension.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            Common Mistakes in Finnish Formal Writing
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-red-800">Mistake: Using Spoken Language (Puhekieli)</h3>
              <p className="text-gray-700">Writing <em>"Mä haluun perua mun ajan"</em> instead of <em>"Haluaisin perua aikani"</em>. Always use standard written forms like minä, sinä, and proper verb endings.</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-red-800">Mistake: Over-complicating Grammar</h3>
              <p className="text-gray-700">Trying to use complex participles or conditional forms you are unsure of. It is much better to write short, clear, and correct sentences than long, confusing ones.</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-red-800">Mistake: Being Too Direct</h3>
              <p className="text-gray-700">Finnish is generally direct, but in formal complaints or requests, using the conditional (isi-muoto) adds necessary politeness. Instead of <em>"Anna minulle uusi aika"</em> (Give me a new time), use <em>"Voisinko saada uuden ajan?"</em> (Could I get a new time?).</p>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="mt-12 bg-blue-600 rounded-2xl p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Pass the YKI Test?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Practice writing your YKI formal email with our intelligent exam simulator. Get instant feedback on your grammar, tone, and task completion.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            Start Practicing Now
          </Link>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long should a YKI formal email be in Task 2?</h3>
              <p className="text-gray-700">You do not need to write a long essay. A concise, clear email of about 50 to 80 words is usually perfect. The most important thing is addressing all the bullet points provided in the prompt.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I use spoken language (puhekieli) in Task 2?</h3>
              <p className="text-gray-700">No. Task 2 requires standard written Finnish (kirjakieli). Avoid words like 'mä', 'sä', or 'joo'. Use 'minä', 'sinä', and 'kyllä'.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How do I sign off a formal Finnish email?</h3>
              <p className="text-gray-700">Common formal sign-offs include 'Ystävällisin terveisin' (Kind regards) or simply 'Terveisin' (Regards), followed by your full name.</p>
            </div>
          </div>
        </section>

      </main>

      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}