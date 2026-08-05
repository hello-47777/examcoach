import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YKI Message Writing Guide: How to Write Short Messages in Finnish',
  description: 'Master the YKI message writing task. Learn step-by-step frameworks, essential Finnish phrases, and how examiners score your short messages in the YKI test.',
  alternates: {
    canonical: '/wiki/guides/yki-message-writing-guide',
  },
};

export default function YkiMessageWritingGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long should my message be in the YKI short message test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your message should be concise and directly answer the prompt. Typically, 3 to 5 clear sentences (around 30-50 words) are enough to cover the required points without introducing unnecessary mistakes."
        }
      },
      {
        "@type": "Question",
        "name": "Does spelling matter in YKI writing tasks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but perfection is not required for intermediate (keskitaso) levels. The most important factor is comprehensibility. If a spelling mistake changes the meaning of a word, it will lower your score, but minor typos are generally forgiven."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use spoken language (puhekieli) in the writing test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on the context. If the prompt asks you to write an informal message to a friend, standard spoken language features are acceptable. However, for formal messages (e.g., to an employer or a business), you must use written language (kirjakieli)."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-gray-50 text-gray-900 pb-16">
        {/* Hero Section */}
        <header className="bg-blue-900 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              YKI Message Writing Guide: How to Write Short Messages in Finnish
            </h1>
            <p className="text-xl text-blue-100">
              Master the short message task in the YKI writing test with proven templates, essential vocabulary, and examiner scoring secrets.
            </p>
          </div>
        </header>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-sm mt-8 rounded-lg">
          
          <section className="mb-10">
            <p className="text-lg leading-relaxed mb-6">
              When taking the Finnish language proficiency test, mastering <strong>YKI message writing</strong> is crucial for passing the written comprehension and production section. The short message task tests your ability to handle everyday communication quickly and accurately. Whether you are inviting a friend to a party, canceling an appointment, or requesting information from a company, you need to know exactly how to structure your text.
            </p>
            <p className="text-lg leading-relaxed">
              In this guide, we will break down the YKI writing task message, provide actionable templates, and show you exactly what the examiners are looking for to help you secure a passing grade (Level 3 or 4).
            </p>
          </section>

          <hr className="border-gray-200 mb-10" />

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-blue-800">
              Understanding the YKI Writing Task Message
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              The <em>Finnish short message test</em> typically requires you to write a brief response based on a specific scenario. You will usually be asked to write 2–3 short texts. These tasks are designed to evaluate practical, real-world communication skills.
            </p>
            <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
              <li><strong>Informal Messages:</strong> Texting a friend, writing a short email to a classmate, or leaving a note for a family member.</li>
              <li><strong>Formal Messages:</strong> Contacting a landlord, emailing a teacher, or leaving feedback for a business.</li>
            </ul>
            <p className="text-lg leading-relaxed">
              The golden rule for these tasks is <strong>clarity over complexity</strong>. You do not need to write a long essay. You only need to fulfill the prompt's specific requirements.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-blue-800">
              Step-by-Step Framework for YKI Message Writing
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              To ensure you never freeze during the exam, use this simple 4-step framework for every message you write.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-md mb-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-2">Step 1: The Greeting (Tervehdys)</h3>
              <p className="mb-2">Choose your greeting based on the recipient.</p>
              <ul className="list-disc pl-6">
                <li><em>Informal:</em> Moi Mikko, / Hei Anna,</li>
                <li><em>Formal:</em> Hei, / Hyvä asiakaspalvelu,</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-md mb-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-2">Step 2: State the Purpose (Asia)</h3>
              <p className="mb-2">Get straight to the point in your first sentence. Why are you writing?</p>
              <ul className="list-disc pl-6">
                <li><em>Informal:</em> Kirjoitan sinulle, koska en pääse kurssille tänään. (I am writing to you because I cannot make it to the course today.)</li>
                <li><em>Formal:</em> Haluaisin kysyä teidän aukioloajoistanne. (I would like to ask about your opening hours.)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-md mb-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-2">Step 3: Add the Required Details (Lisätiedot)</h3>
              <p className="mb-2">Address every bullet point mentioned in the exam prompt. If they ask <em>why</em> and <em>when</em>, you must answer both.</p>
              <p>Olen sairas. Voimmeko nähdä ensi viikolla tiistaina? (I am sick. Can we meet next week on Tuesday?)</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-md mb-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-2">Step 4: The Closing (Lopetus)</h3>
              <p className="mb-2">Sign off appropriately based on the tone of the message.</p>
              <ul className="list-disc pl-6">
                <li><em>Informal:</em> Nähdään! / Terveisin, [Nimesi]</li>
                <li><em>Formal:</em> Ystävällisin terveisin, [Nimesi]</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-blue-800">
              Finnish Message Examples and Templates
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Reviewing <em>Finnish message examples</em> is one of the best ways to prepare. Here are two common scenarios you might encounter.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Example 1: Canceling a Meeting (Informal)</h3>
            <div className="bg-gray-100 p-6 rounded-md mb-6 font-mono text-sm shadow-inner">
              <p>Moi Tiina,</p>
              <br/>
              <p>Anteeksi, mutta en pääse tänään kahvilaan. Olen vähän sairas ja minulla on kuumetta. Minun täytyy levätä kotona.</p>
              <br/>
              <p>Sopiiko sinulle, jos näemme ensi viikolla? Esimerkiksi keskiviikkona klo 17?</p>
              <br/>
              <p>Parane pian minulle! Nähdään!</p>
              <br/>
              <p>Terveisin,<br/>Alex</p>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Example 2: Asking for Information (Formal)</h3>
            <div className="bg-gray-100 p-6 rounded-md mb-6 font-mono text-sm shadow-inner">
              <p>Hei,</p>
              <br/>
              <p>Olen kiinnostunut teidän suomen kielen kurssista, joka alkaa lokakuussa. Haluaisin tietää, onko kurssilla vielä tilaa?</p>
              <br/>
              <p>Haluaisin myös kysyä, kuinka paljon kurssi maksaa ja voinko maksaa sen erissä.</p>
              <br/>
              <p>Kiitos paljon avusta jo etukäteen.</p>
              <br/>
              <p>Ystävällisin terveisin,<br/>Maria Rossi</p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-blue-800">
              Examiner Scoring Criteria: How to Pass
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              When examiners grade your <em>YKI writing tasks</em>, they do not expect native-level perfection. For intermediate level (keskitaso), they evaluate three main things:
            </p>
            <ol className="list-decimal pl-8 mb-6 space-y-3 text-lg">
              <li><strong>Task Fulfillment:</strong> Did you answer the prompt completely? If the prompt says, "Apologize, explain why you can't come, and suggest a new time," you must include all three points. Missing a point will heavily reduce your score.</li>
              <li><strong>Understandability (Ymmärrettävyys):</strong> Can a native speaker understand your message without guessing? Minor grammar mistakes (like a wrong ending) are fine, as long as the message is clear.</li>
              <li><strong>Appropriate Register:</strong> Did you use formal language for formal situations and informal language for friends? Using "te" (plural/formal you) for a friend or "sinä" (informal you) in a highly formal complaint letter can hurt your score.</li>
            </ol>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-blue-800">
              Essential Vocabulary for the Short Message Task
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse mb-6">
                <thead>
                  <tr className="bg-blue-100 border-b-2 border-blue-200">
                    <th className="p-4 font-semibold">Category</th>
                    <th className="p-4 font-semibold">Finnish Phrase</th>
                    <th className="p-4 font-semibold">English Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Apologizing</td>
                    <td className="p-4">Olen pahoillani, mutta...</td>
                    <td className="p-4">I am sorry, but...</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-medium">Apologizing</td>
                    <td className="p-4">Anteeksi, että en pääse...</td>
                    <td className="p-4">Sorry that I cannot make it to...</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Requesting</td>
                    <td className="p-4">Haluaisin kysyä...</td>
                    <td className="p-4">I would like to ask...</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-medium">Requesting</td>
                    <td className="p-4">Voisitko kertoa minulle...</td>
                    <td className="p-4">Could you tell me...</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Suggesting</td>
                    <td className="p-4">Sopiiko sinulle, jos...</td>
                    <td className="p-4">Does it suit you if...</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Thanking</td>
                    <td className="p-4">Kiitos avusta jo etukäteen.</td>
                    <td className="p-4">Thank you for the help in advance.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-blue-800">
              Common Mistakes in YKI Writing Tasks
            </h2>
            <ul className="space-y-6">
              <li className="bg-red-50 p-6 rounded-md border-l-4 border-red-500">
                <h4 className="font-bold text-lg text-red-800 mb-2">1. Writing Too Much</h4>
                <p className="text-gray-700 mb-2"><strong>The Problem:</strong> Candidates often try to write long, complex sentences to impress the examiner. This leads to grammar mistakes and time management issues.</p>
                <p className="text-gray-700"><strong>The Fix:</strong> Keep it simple. Use subject-verb-object structures. Short, correct sentences score higher than long, incorrect ones.</p>
              </li>
              <li className="bg-red-50 p-6 rounded-md border-l-4 border-red-500">
                <h4 className="font-bold text-lg text-red-800 mb-2">2. Ignoring the Prompt's Instructions</h4>
                <p className="text-gray-700 mb-2"><strong>The Problem:</strong> Writing a beautiful message but forgetting to include one of the specific questions asked in the task.</p>
                <p className="text-gray-700"><strong>The Fix:</strong> Use your pencil to check off each bullet point on the task sheet as you write your response.</p>
              </li>
              <li className="bg-red-50 p-6 rounded-md border-l-4 border-red-500">
                <h4 className="font-bold text-lg text-red-800 mb-2">3. Direct Translation from English</h4>
                <p className="text-gray-700 mb-2"><strong>The Problem:</strong> Translating English idioms or structures directly into Finnish (e.g., trying to say "I am looking forward to..." literally).</p>
                <p className="text-gray-700"><strong>The Fix:</strong> Memorize natural Finnish phrases (e.g., <em>"Odotan innolla..."</em>) rather than translating word-for-word.</p>
              </li>
            </ul>
          </section>
        </article>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-6 py-12 mt-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How long should my message be in the YKI short message test?</h3>
              <p className="text-gray-700">Your message should be concise and directly answer the prompt. Typically, 3 to 5 clear sentences (around 30-50 words) are enough to cover the required points without introducing unnecessary mistakes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Does spelling matter in YKI writing tasks?</h3>
              <p className="text-gray-700">Yes, but perfection is not required for intermediate (keskitaso) levels. The most important factor is comprehensibility. If a spelling mistake changes the meaning of a word, it will lower your score, but minor typos are generally forgiven.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Can I use spoken language (puhekieli) in the writing test?</h3>
              <p className="text-gray-700">It depends on the context. If the prompt asks you to write an informal message to a friend, standard spoken language features are acceptable. However, for formal messages (e.g., to an employer or a business), you must use written language (kirjakieli).</p>
            </div>
          </div>
        </section>

        {/* Internal Links - Related Articles */}
        <nav className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
          <ul className="space-y-2">
            <li><Link href="/wiki/guides/how-to-write-message-yki" className="text-blue-700 hover:underline">How to Write a Message for YKI Writing Test: Step-by-Step Guide</Link></li>
            <li><Link href="/wiki/templates/yki-message-template" className="text-blue-700 hover:underline">YKI Message Template: Finnish Short Message Structures for Exam</Link></li>
          </ul>
        </nav>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16 mt-8">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ace the YKI Writing Test?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Stop guessing if your messages are good enough. Practice with realistic YKI tasks and get instant, AI-driven feedback on your grammar, vocabulary, and tone.
            </p>
            <Link 
              href="/signup" 
              className="inline-block bg-white text-blue-700 font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              Start Practicing Now
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}