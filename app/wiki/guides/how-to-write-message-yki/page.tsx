import { Metadata } from 'next';
import Link from 'next/link';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('guides', 'how-to-write-message-yki', {
  title: 'How to Write a Message for YKI Writing Test: Step-by-Step Guide',
  description: 'Master the YKI message task with our comprehensive guide. Learn exactly how to write message YKI assignments, avoid common mistakes, and get templates.',
});

export default function HowToWriteMessageYKI() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long should a YKI message task be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the YKI intermediate writing test, message tasks are typically short. You should aim for about 30 to 50 words, focusing on clearly addressing all bullet points in the prompt rather than writing a long essay."
        }
      },
      {
        "@type": "Question",
        "name": "Does spelling matter in the YKI message task?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but examiners are looking for comprehensibility. Minor spelling mistakes that do not change the meaning of the word will not automatically fail you. However, repeated errors that make the message hard to understand will lower your score."
        }
      },
      {
        "@type": "Question",
        "name": "Should I use puhekieli (spoken Finnish) in my written message?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on the recipient. If you are writing an informal message to a friend, standard puhekieli is acceptable. If you are writing to a company, housing manager, or official, you must use standard written Finnish (kirjakieli)."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="max-w-4xl mx-auto px-4 py-12 md:px-8">
        <article className="bg-white rounded-2xl shadow-sm p-6 md:p-12 mb-12">
          
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
              How to Write Message YKI Tasks: Step-by-Step Guide
            </h1>
            <p className="text-lg text-gray-700">
              If you are preparing for the Finnish language proficiency test, knowing exactly <strong>how to write message YKI</strong> responses is crucial for passing. The message task is a foundational part of the YKI intermediate writing section, testing your ability to communicate everyday matters clearly and effectively. In this guide, we will break down the exact steps, templates, and vocabulary you need to succeed.
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 border-b-2 border-blue-100 pb-2">
              Understanding the YKI Message Task
            </h2>
            <p className="mb-4 text-gray-700">
              The <strong>YKI message task</strong> usually asks you to write a short text to a specific person or organization. This could be an email to a teacher, a note to a neighbor, or a text message to a friend. 
            </p>
            <p className="mb-4 text-gray-700">
              You are typically given a scenario and 2-3 specific points you must cover. The key to mastering <strong>Finnish message writing</strong> in the exam is directly addressing these points while maintaining the correct tone.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 border-b-2 border-blue-100 pb-2">
              Step-by-Step Guide: How to Write Message YKI Responses Perfectly
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Step 1: Read the Prompt and Identify the Audience</h3>
              <p className="text-gray-700 mb-3">
                Before writing, ask yourself: <em>Who am I writing to?</em> 
                If you are writing to a friend, the tone is informal (Sinä). If you are writing to a housing manager (isännöitsijä) or a company, the tone must be formal and polite (Te).
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Step 2: Check the Required Bullet Points</h3>
              <p className="text-gray-700 mb-3">
                The prompt will explicitly tell you what to include (e.g., apologize, explain why you are late, suggest a new time). You must address <strong>every single point</strong>. Missing a point will heavily penalize your score.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Step 3: Open with the Correct Greeting</h3>
              <p className="text-gray-700 mb-3">
                Start strong. Choose an appropriate greeting based on your audience analysis from Step 1.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Step 4: Draft the Body (Keep it Simple)</h3>
              <p className="text-gray-700 mb-3">
                Do not try to use overly complex grammar if you are unsure about it. Short, clear sentences are better than long, confusing ones. Ensure your message flows logically from one point to the next.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Step 5: Sign Off Professionally or Warmly</h3>
              <p className="text-gray-700 mb-3">
                Close the message properly. Always include your name at the end.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Essential Templates for YKI Intermediate Writing
            </h2>
            <p className="mb-4 text-gray-700">Memorize these reusable frameworks to save time during the exam.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2 border-b pb-1">Template 1: Formal Request (e.g., to a landlord)</h4>
                <p className="text-gray-600 font-mono text-sm mb-2">
                  Hei,<br/><br/>
                  Kirjoitan, koska [reason for writing].<br/>
                  [Details about the problem/situation].<br/>
                  Voisitteko [your request]?<br/><br/>
                  Ystävällisin terveisin,<br/>
                  [Your Name]
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2 border-b pb-1">Template 2: Informal Apology (e.g., to a friend)</h4>
                <p className="text-gray-600 font-mono text-sm mb-2">
                  Moi [Name]!<br/><br/>
                  Anteeksi, mutta en voi tulla [place/event], koska [reason].<br/>
                  [Offer alternative]. Sopiiko se sinulle?<br/><br/>
                  Nähdään pian!<br/>
                  Terveisin,<br/>
                  [Your Name]
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 border-b-2 border-blue-100 pb-2">
              Key Vocabulary and Phrases
            </h2>
            <p className="mb-4 text-gray-700">Having a categorized bank of phrases will make your Finnish message writing much faster.</p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-800">
                    <th className="p-3 border">Category</th>
                    <th className="p-3 border">Formal (Kirjakieli)</th>
                    <th className="p-3 border">Informal (Puhekieli/Casual)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border font-semibold">Greetings</td>
                    <td className="p-3 border text-gray-700">Hei, Hyvä asiakaspalvelu</td>
                    <td className="p-3 border text-gray-700">Moi, Terve, Moikka</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border font-semibold">Apologizing</td>
                    <td className="p-3 border text-gray-700">Pahoittelen tilannetta.</td>
                    <td className="p-3 border text-gray-700">Anteeksi, että...</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-semibold">Making a Request</td>
                    <td className="p-3 border text-gray-700">Voisitteko auttaa minua?</td>
                    <td className="p-3 border text-gray-700">Voitko auttaa mua?</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border font-semibold">Sign-offs</td>
                    <td className="p-3 border text-gray-700">Ystävällisin terveisin</td>
                    <td className="p-3 border text-gray-700">Terveisin, Nähdään</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 border-b-2 border-blue-100 pb-2">
              Common Mistakes to Avoid
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <strong>Ignoring the bullet points:</strong> As mentioned, the examiner explicitly checks if you answered all parts of the prompt. If asked to suggest a time, you must write a specific time.
              </li>
              <li>
                <strong>Mixing registers:</strong> Do not start with &quot;Hyvä herra&quot; and end with &quot;Moikka!&quot;. Consistency in tone is heavily graded in the YKI intermediate writing test.
              </li>
              <li>
                <strong>Over-complicating sentences:</strong> Translating directly from English to Finnish often results in unnatural sentence structures. Use standard Finnish sentence patterns (Subject - Verb - Object).
              </li>
              <li>
                <strong>Forgetting paragraph breaks:</strong> Even in a short message, separating your greeting, body, and sign-off makes the text much easier to read.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 border-b-2 border-blue-100 pb-2">
              Examiner Scoring Criteria
            </h2>
            <p className="mb-4 text-gray-700">
              When YKI assessors grade your message, they are looking at the <strong>CEFR level B1</strong> criteria. To pass, you need to demonstrate:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Task Achievement:</strong> Did you write a message that fulfills the exact purpose requested?</li>
              <li><strong>Comprehensibility:</strong> Can a native speaker understand your message without excessive effort?</li>
              <li><strong>Vocabulary:</strong> Do you have enough vocabulary to handle everyday situations? (Perussanasto).</li>
              <li><strong>Grammar:</strong> Do you have basic control of verb conjugations, tense, and essential cases (like Partitive and Genitive)? Minor errors are fine, as long as meaning isn&apos;t lost.</li>
            </ul>
          </section>

        </article>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">How long should a YKI message task be?</h3>
              <p className="text-gray-700">
                In the YKI intermediate writing test, message tasks are typically short. You should aim for about 30 to 50 words, focusing on clearly addressing all bullet points in the prompt rather than writing a long essay.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Does spelling matter in the YKI message task?</h3>
              <p className="text-gray-700">
                Yes, but examiners are looking for comprehensibility. Minor spelling mistakes that do not change the meaning of the word will not automatically fail you. However, repeated errors that make the message hard to understand will lower your score.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Should I use puhekieli (spoken Finnish) in my written message?</h3>
              <p className="text-gray-700">
                It depends on the recipient. If you are writing an informal message to a friend, standard puhekieli is acceptable. If you are writing to a company, housing manager, or official, you must use standard written Finnish (kirjakieli).
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-900 text-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Ace Your YKI Exam?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Practice makes perfect. Get personalized feedback on your Finnish message writing, vocabulary lists, and realistic mock exams with ExamCoach.ai.
          </p>
          {/* Internal Links - Related Articles */}
          <nav className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
            <ul className="space-y-2">
              <li><Link href="/wiki/guides/yki-message-writing-guide" className="text-blue-700 hover:underline">YKI Message Writing Guide: How to Write Short Messages in Finnish</Link></li>
              <li><Link href="/wiki/templates/yki-message-template" className="text-blue-700 hover:underline">YKI Message Template: Finnish Short Message Structures for Exam</Link></li>
            </ul>
          </nav>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/"
              className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-200"
            >
              Start Practicing Free
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}