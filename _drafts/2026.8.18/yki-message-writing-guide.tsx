import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Message Writing Guide: How to Write Short Messages Correctly',
  description: 'Master YKI message writing with this comprehensive guide. Learn step-by-step strategies, reusable templates, essential vocabulary, and scoring criteria for YKI task 1.',
  openGraph: {
    title: 'YKI Message Writing Guide: How to Write Short Messages Correctly',
    description: 'Master YKI message writing with this comprehensive guide. Learn step-by-step strategies, reusable templates, essential vocabulary, and scoring criteria for YKI task 1.',
    type: 'article',
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long should a YKI writing task message be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard YKI task 1 message should generally be concise, around 30 to 50 words. Focus on addressing all the bullet points provided in the prompt rather than counting words. Quality and task completion matter more than length."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I miss one of the bullet points in the prompt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Missing a bullet point directly impacts your task achievement score. The examiners check if you have fulfilled the communicative purpose of the message. Always double-check that every required point is answered."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use spoken language (puhekieli) in the YKI message writing task?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the recipient. If the prompt asks you to write an informal message to a friend, moderate spoken language is acceptable. However, if you are writing to a business, teacher, or official, you must use standard written Finnish (kirjakieli)."
      }
    }
  ]
};

export default function YkiMessageWritingGuidePage() {
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
            YKI Message Writing Guide: How to Write Short Messages Correctly
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Welcome to the ultimate guide on <strong>YKI message writing</strong>. If you are aiming to pass the Finnish language proficiency test, mastering the short message is an absolute necessity. This section of the exam tests your ability to communicate efficiently in everyday situations.
          </p>
        </header>

        {/* Understanding the Task */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Understanding YKI Task 1: The Finnish Short Message
          </h2>
          <p className="text-lg leading-relaxed">
            The YKI test (Yleinen kielitutkinto) evaluates practical language skills. Usually appearing as <strong>YKI task 1</strong>, the short message requires you to write a brief note, email, or text message. You will be given a specific scenario and 2-4 bullet points that you must address. This could range from inviting a friend to a party, to canceling a doctor's appointment. Understanding the goal of the <em>YKI writing task message</em> is your first step to success.
          </p>
        </section>

        {/* Step-by-Step Guide */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Step-by-Step Guide to YKI Message Writing
          </h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Step 1: Analyze the Prompt and Tone</h3>
              <p className="text-blue-800">
                Identify who you are writing to. Is it a friend (informal) or a business/stranger (formal)? This dictates your greeting, sign-off, and choice of words.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Step 2: Check the Bullet Points</h3>
              <p className="text-blue-800">
                Read the prompt carefully and count the required actions. If the prompt asks <em>"What is broken, when did you buy it, and what do you want?"</em>, you must answer all three.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Step 3: Draft Your Response</h3>
              <p className="text-blue-800">
                Start with a greeting, dedicate one clear sentence to each bullet point, and close with an appropriate sign-off. Keep sentences simple and grammatically safe.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Step 4: Review and Correct</h3>
              <p className="text-blue-800">
                Read your message twice. Check for verb conjugations, partitive/genitive cases, and ensure you did not miss any bullet points.
              </p>
            </div>
          </div>
        </section>

        {/* Templates */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Reusable Templates for Your Finnish Short Message
          </h2>
          <p className="text-lg leading-relaxed">
            Memorizing standard frameworks can save you valuable time during the exam. Below are two reliable templates depending on the formality of the task.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-green-700">Informal Template (To a Friend)</h3>
              <ul className="list-none space-y-2 font-mono text-sm bg-gray-50 p-4 rounded-md">
                <li>Hei [Name],</li>
                <br/>
                <li>Mitä kuuluu?</li>
                <li>[Point 1: State why you are writing]</li>
                <li>[Point 2: Add details/time/place]</li>
                <li>[Point 3: Ask a question or make a suggestion]</li>
                <br/>
                <li>Nähdään pian!</li>
                <li>Terveisin,</li>
                <li>[Your Name]</li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-purple-700">Formal Template (To a Business/Official)</h3>
              <ul className="list-none space-y-2 font-mono text-sm bg-gray-50 p-4 rounded-md">
                <li>Hei,</li>
                <br/>
                <li>Kirjoitan teille, koska [Point 1: Reason for message].</li>
                <li>[Point 2: Provide specific context/details].</li>
                <li>[Point 3: State clearly what you expect/want to happen].</li>
                <br/>
                <li>Kiitos paljon avusta.</li>
                <li>Ystävällisin terveisin,</li>
                <li>[Your Name]</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Realistic Example */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Realistic YKI Message Writing Example
          </h2>
          <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg font-bold mb-2">The Prompt (Tehtävä):</h3>
            <p className="mb-4">Ostit uuden puhelimen, mutta se on rikki. Kirjoita sähköposti kauppaan. Kerro:</p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Mitä ostit ja milloin? (What did you buy and when?)</li>
              <li>Mikä on ongelma? (What is the problem?)</li>
              <li>Mitä haluat, että kauppa tekee? (What do you want the store to do?)</li>
            </ul>
            
            <h3 className="text-lg font-bold mb-2">Example Answer (Esimerkkivastaus):</h3>
            <div className="bg-white p-4 rounded font-mono text-sm border border-gray-300">
              <p>Hei,</p>
              <br/>
              <p>Ostin teiltä uuden matkapuhelimen viime viikon torstaina. Valitettavasti puhelin on rikki. Sen akku ei lataudu, vaikka pidän sitä laturissa koko yön.</p>
              <br/>
              <p>Haluaisin palauttaa tämän puhelimen ja saada uuden tilalle. Minulla on kuitti tallella.</p>
              <br/>
              <p>Ystävällisin terveisin,</p>
              <p>Matti Meikäläinen</p>
            </div>
            
            <div className="mt-4 text-sm text-gray-600">
              <strong>Why this works:</strong> It uses the correct formal tone, directly addresses all three bullet points in separate sentences, and employs clear, correct Finnish grammar.
            </div>
          </div>
        </section>

        {/* Scoring Criteria */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            YKI Examiner Scoring Criteria
          </h2>
          <p className="text-lg leading-relaxed">
            Understanding how you are graded helps you prioritize your effort. Examiners score your Finnish short message based on three main pillars:
          </p>
          <ul className="space-y-3 list-disc pl-6 text-lg text-gray-700">
            <li><strong>Task Achievement (Viestinnällisyys):</strong> Did you answer all parts of the prompt? If a bullet point is ignored, you cannot achieve a top score, regardless of flawless grammar.</li>
            <li><strong>Vocabulary and Structures (Sanasto ja rakenteet):</strong> Do you use varied and context-appropriate vocabulary? Are your sentence structures coherent? Simple is better than complicated and wrong.</li>
            <li><strong>Intelligibility (Ymmärrettävyys):</strong> Can a native speaker understand your message without straining? Spelling errors are tolerated if they do not change the meaning of the word.</li>
          </ul>
        </section>

        {/* Vocabulary */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Essential Vocabulary for Short Messages
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Stock up on these categorized phrases to enhance your writing speed and accuracy during the exam.
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
              <thead className="bg-gray-50 border-b border-gray-300">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Finnish Phrase</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">English Translation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Openings (Informal)</td>
                  <td className="px-6 py-4">Moi! / Hei, mitä kuuluu?</td>
                  <td className="px-6 py-4">Hi! / Hey, how are you?</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Openings (Formal)</td>
                  <td className="px-6 py-4">Hei, / Hyvä vastaanottaja,</td>
                  <td className="px-6 py-4">Hello, / Dear recipient,</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Apologizing</td>
                  <td className="px-6 py-4">Olen pahoillani, mutta... / Anteeksi, että...</td>
                  <td className="px-6 py-4">I am sorry, but... / Sorry that...</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Requesting</td>
                  <td className="px-6 py-4">Haluaisin kysyä... / Voisitko auttaa minua?</td>
                  <td className="px-6 py-4">I would like to ask... / Could you help me?</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Closings (Informal)</td>
                  <td className="px-6 py-4">Nähdään! / Terveisin,</td>
                  <td className="px-6 py-4">See you! / Regards,</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Closings (Formal)</td>
                  <td className="px-6 py-4">Ystävällisin terveisin,</td>
                  <td className="px-6 py-4">Best regards,</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Common Mistakes and How to Fix Them
          </h2>
          <ul className="space-y-6">
            <li className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <strong className="text-red-800 text-lg block mb-1">Mistake: Overcomplicating Sentences</strong>
              <span className="text-gray-700 block mb-2">Trying to write long, complex sentences often leads to critical grammatical errors involving case endings (sijamuodot).</span>
              <span className="text-green-800 font-medium">Correction:</span> Use simple, direct phrasing (Subject + Verb + Object).
            </li>
            <li className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <strong className="text-red-800 text-lg block mb-1">Mistake: Missing Bullet Points</strong>
              <span className="text-gray-700 block mb-2">Getting caught up in the story and forgetting to answer one of the specific questions asked in the prompt.</span>
              <span className="text-green-800 font-medium">Correction:</span> Physically count the bullet points. Write one dedicated sentence for each point before adding any fluff.
            </li>
            <li className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <strong className="text-red-800 text-lg block mb-1">Mistake: Direct Translation from Native Language</strong>
              <span className="text-gray-700 block mb-2">Translating English idioms or prepositions directly into Finnish, which rarely works (e.g., using "varten" incorrectly).</span>
              <span className="text-green-800 font-medium">Correction:</span> Rely on memorized, natural Finnish chunks and phrases rather than word-for-word translation.
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="mt-12 bg-blue-600 rounded-2xl p-8 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Master the YKI Exam?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Stop guessing your score. Practice your YKI message writing skills with our advanced platform and get instant feedback on your Finnish grammar, vocabulary, and task achievement.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-200 shadow-md"
          >
            Start Practicing Now
          </Link>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 border-t border-gray-200 pt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">How long should a YKI writing task message be?</h3>
              <p className="text-gray-600">
                A standard YKI task 1 message should generally be concise, around 30 to 50 words. Focus on addressing all the bullet points provided in the prompt rather than counting words. Quality and task completion matter more than length.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">What happens if I miss one of the bullet points in the prompt?</h3>
              <p className="text-gray-600">
                Missing a bullet point directly impacts your task achievement score. The examiners check if you have fulfilled the communicative purpose of the message. Always double-check that every required point is answered.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Can I use spoken language (puhekieli) in the YKI message writing task?</h3>
              <p className="text-gray-600">
                It depends on the recipient. If the prompt asks you to write an informal message to a friend, moderate spoken language is acceptable. However, if you are writing to a business, teacher, or official, you must use standard written Finnish (kirjakieli).
              </p>
            </div>
          </div>
        </section>

      </article>
    </main>
  );
}