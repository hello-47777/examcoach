import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Finnish Email Greetings and Closings for YKI Exam',
  description: 'Master the correct Finnish email greetings and closings for the YKI writing test. Learn essential formal and informal YKI email vocabulary to secure a B1-B2 grade.',
};

export default function FinnishEmailGreetingsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I use 'Hei' as a formal Finnish email greeting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. While 'Hyvä [Name]' is the most traditional formal greeting, a simple 'Hei' is widely accepted in modern Finnish business communication and is perfectly safe for formal YKI tasks."
        }
      },
      {
        "@type": "Question",
        "name": "Is mixing formal greetings with informal closings a major mistake?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, mixing registers is a significant error in the YKI exam. If you start with a formal greeting, you must use a formal closing. Examiners specifically test your ability to maintain a consistent tone."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a comma after Finnish email greetings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Finnish, it is common to use a comma after the greeting (e.g., 'Hei,' or 'Moi Anna,'), but you can also leave it out or use an exclamation mark in informal emails ('Moi!'). If you use a comma, the next line should start with a capital letter."
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Finnish Email Greetings and Closings for YKI Exam
          </h1>
        </header>

        <section className="prose prose-lg max-w-none text-gray-700">
          <p>
            When taking the intermediate Finnish language test (keskitaso), your choice of <strong>Finnish email greetings</strong> and closings immediately signals your language proficiency to the examiner. The writing subtest requires you to draft both formal and informal messages. Using the correct opening and closing for the situation is one of the easiest ways to demonstrate that you understand Finnish register and tone, which is critical for securing a B1 or B2 grade.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Why Finnish Email Greetings Matter for YKI Grading
          </h2>
          <p>
            In the YKI exam, you are assessed on your ability to adapt your language to the recipient. A message to a close friend requires a completely different set of <strong>Finnish greetings phrases</strong> than an official complaint sent to a property manager. If you start a formal complaint with <em>&quot;Moi&quot;</em>, you will immediately lose points for tone, regardless of how perfect your grammar is in the rest of the text.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Formal Finnish Email Greetings (Viralliset Tervehdykset)
          </h2>
          <p>
            Use these greetings when writing to customer service, government offices, businesses, or people you do not know personally. This is essential <strong>YKI email vocabulary</strong> for the formal writing task.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200 text-left text-sm">
              <thead className="bg-gray-100 font-semibold text-gray-800">
                <tr>
                  <th className="py-3 px-4 border-b">Finnish Phrase</th>
                  <th className="py-3 px-4 border-b">English Meaning</th>
                  <th className="py-3 px-4 border-b">When to Use in YKI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr>
                  <td className="py-3 px-4 font-bold text-blue-700">Hyvä asiakaspalvelu,</td>
                  <td className="py-3 px-4">Dear customer service,</td>
                  <td className="py-3 px-4">When the prompt asks you to write to a company or store.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-blue-700">Hyvä [Etunimi Sukunimi],</td>
                  <td className="py-3 px-4">Dear [First Name Last Name],</td>
                  <td className="py-3 px-4">When you know the full name of the official recipient.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-blue-700">Hyvä isännöitsijä,</td>
                  <td className="py-3 px-4">Dear property manager,</td>
                  <td className="py-3 px-4">For housing complaints or apartment inquiries.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-blue-700">Hei,</td>
                  <td className="py-3 px-4">Hello,</td>
                  <td className="py-3 px-4">A safe, modern alternative for formal emails if you do not know the title.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Informal Finnish Email Greetings (Epäviralliset Tervehdykset)
          </h2>
          <p>
            The informal writing task usually asks you to write to a friend or a close colleague to invite them somewhere or cancel plans. Keep the tone warm and casual.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200 text-left text-sm">
              <thead className="bg-gray-100 font-semibold text-gray-800">
                <tr>
                  <th className="py-3 px-4 border-b">Finnish Phrase</th>
                  <th className="py-3 px-4 border-b">English Meaning</th>
                  <th className="py-3 px-4 border-b">When to Use in YKI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr>
                  <td className="py-3 px-4 font-bold text-green-700">Moi [Nimi]!</td>
                  <td className="py-3 px-4">Hi [Name]!</td>
                  <td className="py-3 px-4">The most standard and natural opening for a friend.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-green-700">Hei [Nimi],</td>
                  <td className="py-3 px-4">Hello [Name],</td>
                  <td className="py-3 px-4">Friendly but slightly calmer; good for colleagues.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-green-700">Terve!</td>
                  <td className="py-3 px-4">Hello! / Greetings!</td>
                  <td className="py-3 px-4">Casual and common, especially among male friends.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Formal Finnish Email Endings (Viralliset Lopetukset)
          </h2>
          <p>
            Just as important as the greeting are the <strong>Finnish email endings</strong>. A formal message must conclude with a polite and respectful sign-off. Memorize the spelling of these carefully, as typos here are very noticeable.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200 text-left text-sm">
              <thead className="bg-gray-100 font-semibold text-gray-800">
                <tr>
                  <th className="py-3 px-4 border-b">Finnish Phrase</th>
                  <th className="py-3 px-4 border-b">English Meaning</th>
                  <th className="py-3 px-4 border-b">Usage Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr>
                  <td className="py-3 px-4 font-bold text-blue-700">Ystävällisin terveisin,</td>
                  <td className="py-3 px-4">Kind regards, / Sincerely,</td>
                  <td className="py-3 px-4">The gold standard for all formal YKI emails. Always safe.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-blue-700">Odotan pikaista vastaustanne.</td>
                  <td className="py-3 px-4">I await your quick reply.</td>
                  <td className="py-3 px-4">Use this sentence *before* &quot;Ystävällisin terveisin&quot; in complaints.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-blue-700">Kunnioittaen,</td>
                  <td className="py-3 px-4">Yours respectfully,</td>
                  <td className="py-3 px-4">Very formal. Rarely needed in YKI, but good to recognize.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Informal Finnish Email Endings (Epäviralliset Lopetukset)
          </h2>
          <p>
            When wrapping up an email to a friend, you want to sound approachable and eager to connect.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200 text-left text-sm">
              <thead className="bg-gray-100 font-semibold text-gray-800">
                <tr>
                  <th className="py-3 px-4 border-b">Finnish Phrase</th>
                  <th className="py-3 px-4 border-b">English Meaning</th>
                  <th className="py-3 px-4 border-b">Usage Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr>
                  <td className="py-3 px-4 font-bold text-green-700">Terveisin,</td>
                  <td className="py-3 px-4">Regards,</td>
                  <td className="py-3 px-4">A standard, friendly sign-off. Follow with your first name.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-green-700">Nähdään!</td>
                  <td className="py-3 px-4">See you!</td>
                  <td className="py-3 px-4">Perfect if your email is about setting up a meeting or a party.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-green-700">Ilmoita, sopiiko tämä sinulle!</td>
                  <td className="py-3 px-4">Let me know if this suits you!</td>
                  <td className="py-3 px-4">Excellent sentence to use right before the sign-off when making plans.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Common Mistakes with YKI Email Vocabulary
          </h2>
          <p>
            To ensure you don&apos;t accidentally lower your score, avoid these common traps when applying <strong>YKI email vocabulary</strong>:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Mixing Registers:</strong> Never start with <em>&quot;Hyvä asiakaspalvelu&quot;</em> and end with <em>&quot;Nähdään!&quot;</em>. Consistency is key for a B-level grade.</li>
            <li><strong>Forgetting Your Name:</strong> Always sign off with a name (your own or a made-up one) at the very bottom. An email without a sender looks incomplete and may lose points for task completion.</li>
            <li><strong>Capitalization After Commas:</strong> If you write <em>&quot;Hei,&quot;</em> on the first line, the next line should start with a capital letter in Finnish (unlike in English, where it often starts with a lowercase letter). Example: <em>&quot;Hei, / Kirjoitan teille...&quot;</em></li>
          </ul>
        </section>

        <section className="bg-indigo-600 text-white p-8 rounded-xl mt-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Master Your YKI Writing Vocabulary</h2>
          <p className="text-lg mb-6">
            Stop guessing if your tone is correct. Practice writing full formal and informal emails with ExamCoach.ai and get instant AI feedback on your greetings, closings, and overall register.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-white text-indigo-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
          >
            Start Practicing Now
          </Link>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Can I use &apos;Hei&apos; as a formal Finnish email greeting?</h3>
              <p className="text-gray-600 mt-2">
                Yes. While <em>&quot;Hyvä [Name]&quot;</em> is the most traditional formal greeting, a simple <em>&quot;Hei&quot;</em> is widely accepted in modern Finnish business communication and is perfectly safe for formal YKI tasks.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Is mixing formal greetings with informal closings a major mistake?</h3>
              <p className="text-gray-600 mt-2">
                Yes, mixing registers is a significant error in the YKI exam. If you start with a formal greeting, you must use a formal closing. Examiners specifically test your ability to maintain a consistent tone throughout the message.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Do I need a comma after Finnish email greetings?</h3>
              <p className="text-gray-600 mt-2">
                In Finnish, it is common to use a comma after the greeting (e.g., <em>&quot;Hei,&quot;</em> or <em>&quot;Moi Anna,&quot;</em>), but you can also leave it out or use an exclamation mark in informal emails (<em>&quot;Moi!&quot;</em>). If you use a comma, remember that the next line should start with a capital letter.
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