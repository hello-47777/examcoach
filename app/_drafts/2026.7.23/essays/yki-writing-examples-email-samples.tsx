import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YKI Writing Examples: Email Sample Answers Explained',
  description: 'Analyze high-scoring YKI writing examples and email sample answers for B1-B2 Finnish exam preparation. Learn key examiner criteria, vocabulary, and structure.',
};

export default function YkiWritingExamplesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What level of Finnish writing is required for intermediate YKI (keskitaso)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The intermediate YKI test assesses levels B1 and B2. To pass (B1), you must produce understandable text on everyday topics, address all parts of the prompt, and demonstrate basic mastery of Finnish sentence structure and word forms."
        }
      },
      {
        "@type": "Question",
        "name": "How many writing tasks are in the YKI intermediate test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The YKI writing section typically includes 3 separate tasks: an informal message (e.g., email to a friend), a formal message (e.g., complaint or inquiry to customer service), and an opinion essay or longer response."
        }
      },
      {
        "@type": "Question",
        "name": "Will small grammatical mistakes fail my YKI writing exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Minor errors in case endings or word order will not fail you as long as the message remains clear and readable. Examiners prioritize task completion, clarity, and overall comprehensibility over absolute grammatical perfection."
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            YKI Writing Examples: Email Sample Answers Explained
          </h1>
        </header>

        <section className="prose prose-lg max-w-none text-gray-700">
          <p>
            When preparing for the intermediate Finnish language test (keskitaso), reviewing concrete <strong>YKI writing examples</strong> is essential for understanding how examiners evaluate your performance. Studying realistic <strong>YKI sample answers</strong> helps you bridge the gap between general language practice and the specific <strong>B1-B2 Finnish writing</strong> standards required on exam day.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Understanding YKI Writing Assessment Criteria
          </h2>
          <p>
            In the YKI intermediate writing section, examiners evaluate your responses based on four main criteria:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Task Completion (Tehtävänanto):</strong> Did you answer every question or bullet point in the prompt? Missing even one instruction directly lowers your grade.</li>
            <li><strong>Register and Tone (Sävy ja tyyli):</strong> Is your language appropriately formal or informal depending on the recipient?</li>
            <li><strong>Coherence and Clarity (Sujuvuus ja selkeys):</strong> Does your text flow logically using suitable connectors (e.g., <em>siksi</em>, <em>vaikka</em>, <em>kuitenkin</em>)?</li>
            <li><strong>Accuracy and Range (Kieli ja sanasto):</strong> Do you use varied vocabulary and acceptable grammar suitable for B1-B2 levels?</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Sample 1: Informal Email to a Friend
          </h2>
          <p>
            Informal tasks require a relaxed tone, common conversational openings, and personal details. Here is an informal candidate response evaluated with scoring breakdowns.
          </p>

          <div className="bg-gray-50 border-l-4 border-indigo-500 p-6 my-6 rounded-r-lg">
            <h3 className="font-bold text-lg mb-2">Prompt:</h3>
            <p className="text-gray-600 mb-4 italic">
              Kirjoita sähköposti ystävällesi. Kerro, että et pääse hänen syntymäpäiväjuhliinsa. Selitä miksi et pääse ja ehdota toista ajankohtaa tapaamiselle.
            </p>
            
            <h3 className="font-bold text-lg mb-2">Sample Answer (B1 Grade):</h3>
            <p className="whitespace-pre-line font-medium text-gray-800">
              Moi Laura!
              <br /><br />
              Kiitos paljon kutsusta sinun syntymäpäiväjuhliin! Valitettavasti en pääse tulemaan lauantaina, koska minulla on tärkeä työvuoro illalla. Olen pahoillani.
              <br /><br />
              Voisimmeko tavata ensi viikolla? Kävisikö sinulle kahvila keskustassa esimerkiksi tiistaina töiden jälkeen? Haluaisin antaa sinulle syntymäpäivälahjan.
              <br /><br />
              Nähdään pian ja hyvää syntymäpäivää!
              <br /><br />
              Terveisin,
              <br />
              Alex
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Examiner Scoring Strengths
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Complete Task Fulfilment:</strong> Answers all 3 key requirements: declines politely, explains the reason (work shift), and suggests a specific alternative time and location.</li>
            <li><strong>Natural Tone:</strong> Uses appropriate informal greetings (<em>Moi Laura!</em>) and friendly sign-offs (<em>Nähdään pian!</em>).</li>
            <li><strong>Solid B1 Grammar:</strong> Correctly uses polite suggestion structures (<em>Voisimmeko tavata... Kävisikö sinulle...</em>).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Sample 2: Formal Email to a Service Provider
          </h2>
          <p>
            Formal tasks test your ability to use polite register, standard business greetings, and precise complaints or inquiries.
          </p>

          <div className="bg-gray-50 border-l-4 border-emerald-500 p-6 my-6 rounded-r-lg">
            <h3 className="font-bold text-lg mb-2">Prompt:</h3>
            <p className="text-gray-600 mb-4 italic">
              Olet varannut hotellihuoneen, mutta haluat muuttaa varaustasi. Kirjoita sähköposti hotellin asiakaspalveluun. Kerro varauksestasi, selitä muutoksen syy ja pyydä vahvistusta.
            </p>

            <h3 className="font-bold text-lg mb-2">Sample Answer (B2 Grade):</h3>
            <p className="whitespace-pre-line font-medium text-gray-800">
              Hyvä asiakaspalvelu,
              <br /><br />
              Kirjoitan teille koskien varaustani (varausnumero #45892) ajalle 12.–14. elokuuta.
              <br /><br />
              Haluaisin siirtää varaustani kahdella päivällä eteenpäin perhesyiden vuoksi. Uusi toivottu ajankohta olisi 14.–16. elokuuta. Mikäli tämä ajankohta sopii teille, voisitteko myös vahvistaa, pysyykö huoneen hinta samana?
              <br /><br />
              Pyydän teitä lähettämään vahvistuksen sähköpostitse mahdollisimman pian.
              <br /><br />
              Ystävällisin terveisin,
              <br />
              Marta Nowak
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Examiner Scoring Strengths
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Professional Register:</strong> Excellent formal address (<em>Hyvä asiakaspalvelu</em>) and closing (<em>Ystävällisin terveisin</em>).</li>
            <li><strong>Advanced Structure:</strong> Uses B2-level phrases such as <em>&quot;koskien varaustani&quot;</em> and conditional polite forms like <em>&quot;voisitteko myös vahvistaa&quot;</em>.</li>
            <li><strong>Clear & Actionable:</strong> Provides crucial specifics (reservation number, exact updated dates) that make the message realistic and precise.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Key Breakdown of High-Scoring YKI Writing Examples
          </h2>
          <p>
            To consistently produce high-scoring <strong>YKI email examples</strong>, observe how successful candidate answers structure their responses step-by-step:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200 text-left text-sm">
              <thead className="bg-gray-100 font-semibold text-gray-800">
                <tr>
                  <th className="py-3 px-4 border-b">Section</th>
                  <th className="py-3 px-4 border-b">Informal Style</th>
                  <th className="py-3 px-4 border-b">Formal Style</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr>
                  <td className="py-3 px-4 font-bold">Greeting</td>
                  <td className="py-3 px-4">Moi / Hei [Nimi]</td>
                  <td className="py-3 px-4">Hyvä [Nimi / Asiakaspalvelu]</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Opening</td>
                  <td className="py-3 px-4">Mitä kuuluu? / Kiitos viestistä!</td>
                  <td className="py-3 px-4">Kirjoitan teille koskien...</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Polite Requests</td>
                  <td className="py-3 px-4">Voitko... / Sopiiko sinulle...</td>
                  <td className="py-3 px-4">Voisitteko ystävällisesti...</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Closing</td>
                  <td className="py-3 px-4">Terveisin / Nähdään!</td>
                  <td className="py-3 px-4">Ystävällisin terveisin</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Common Mistakes in Finnish Writing Examples and How to Fix Them
          </h2>
          <p>
            Studying bad habits is as important as reviewing good <strong>Finnish writing examples</strong>. Avoid these frequent pitfalls:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Mixing Tones:</strong> Avoid starting a formal email with <em>&quot;Moi&quot;</em> or closing an informal note to a close friend with <em>&quot;Ystävällisin terveisin&quot;</em>.</li>
            <li><strong>Forgetting Bullet Points:</strong> YKI prompts often list 2 or 3 distinct requirements. Make a mental checklist during the exam to ensure every single prompt instruction is addressed.</li>
            <li><strong>Overly Complex Sentences:</strong> Trying to write extremely long compound sentences often results in broken word order (SANO). Keep your sentences clear, controlled, and connected with simple conjunctions.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Essential Vocabulary & Phrases for B1-B2 Finnish Writing
          </h2>
          <p>
            Build your response framework using these reliable phrases:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Giving Reasons:</strong> <em>siksi että...</em> (because), <em>...vuoksi</em> (due to)</li>
            <li><strong>Expressing Opinions:</strong> <em>Mielestäni...</em> (In my opinion), <em>Olen sitä mieltä, että...</em> (I am of the opinion that)</li>
            <li><strong>Making Suggestions:</strong> <em>Ehdotan, että...</em> (I suggest that), <em>Mitä mieltä olet, jos...</em> (What do you think if...)</li>
            <li><strong>Apologizing:</strong> <em>Olen pahoillani siitä, että...</em> (I am sorry that...)</li>
          </ul>
        </section>

        <section className="bg-indigo-700 text-white p-8 rounded-xl mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Master Your YKI Writing Preparation</h2>
          <p className="text-lg mb-6">
            Get personalized corrections on your practice essays and emails. ExamCoach.ai analyzes your Finnish text against real YKI scoring standards so you can pass with confidence.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-white text-indigo-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            Practice YKI Writing Now
          </Link>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">What level of Finnish writing is required for intermediate YKI (keskitaso)?</h3>
              <p className="text-gray-600 mt-2">
                The intermediate YKI test assesses levels B1 and B2. To pass (B1), you must produce understandable text on everyday topics, address all parts of the prompt, and demonstrate basic mastery of Finnish sentence structure and word forms.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">How many writing tasks are in the YKI intermediate test?</h3>
              <p className="text-gray-600 mt-2">
                The YKI writing section typically includes 3 separate tasks: an informal message (e.g., email to a friend), a formal message (e.g., complaint or inquiry to customer service), and an opinion essay or longer response.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Will small grammatical mistakes fail my YKI writing exam?</h3>
              <p className="text-gray-600 mt-2">
                No. Minor errors in case endings or word order will not fail you as long as the message remains clear and readable. Examiners prioritize task completion, clarity, and overall comprehensibility over absolute grammatical perfection.
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