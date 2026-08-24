import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('guides', 'yki-message-writing-mistakes', {
  title: 'Common YKI Writing Message Mistakes Students Make',
  description: 'Identify and fix the most common YKI message writing mistakes. Learn how to avoid typical Finnish writing errors and secure a passing grade in your exam.',
});

export default function YkiMessageWritingMistakesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Will small spelling mistakes cause me to fail the YKI message task?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. In the intermediate (keskitaso) YKI exam, examiners expect minor spelling and grammar errors. As long as your Finnish writing errors do not change the meaning of the word or make the sentence impossible to understand, you can still pass."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I forget to answer one of the bullet points in the prompt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ignoring prompt instructions is a critical mistake. If the task asks you to apologize, explain why, and suggest a new time, and you forget to suggest a new time, your score will drop significantly for failing to complete the task."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use spoken language in the YKI writing test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but only if the context allows it. If you are writing an informal message to a friend, spoken language (puhekieli) is acceptable. If you are writing to a company or a teacher, you must use formal written language (kirjakieli)."
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
              Common YKI Message Writing Mistakes Students Make
            </h1>
            <p className="text-xl text-blue-100">
              Stop losing points on your Finnish test. Learn the most frequent errors test-takers make in the short message task and how to fix them instantly.
            </p>
          </div>
        </header>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-sm mt-8 rounded-lg">
          
          <section className="mb-10">
            <p className="text-lg leading-relaxed mb-6">
              Passing the intermediate Finnish language test requires more than just memorizing vocabulary. In fact, many students fail the written section not because their Finnish is poor, but because they fall into the trap of common <strong>YKI message writing mistakes</strong>. 
            </p>
            <p className="text-lg leading-relaxed">
              The short message task (viesti) is designed to test your ability to communicate efficiently in everyday situations. Whether you are texting a friend or emailing a landlord, examiners are looking for clarity, appropriate tone, and task completion. In this guide, we will break down the most frequent YKI exam mistakes and provide exact corrections so you can walk into your test with confidence.
            </p>
          </section>

          <hr className="border-gray-200 mb-10" />

          {/* H2 featuring primary keyword */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-blue-800">
              The Top YKI Message Writing Mistakes (And How to Fix Them)
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              Review these common pitfalls. Recognizing these problems during your practice sessions is the fastest way to improve your score.
            </p>

            {/* Mistake 1 */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-red-100 pb-2 flex items-center">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                Ignoring the Prompt Instructions
              </h3>
              <div className="bg-red-50 p-6 rounded-t-md border-l-4 border-red-500">
                <h4 className="font-bold text-red-800 mb-2">The Problem:</h4>
                <p className="text-gray-800">
                  The exam prompt always gives you specific bullet points to address. For example: <em>"Apologize, explain why you can't come, and suggest a new time."</em> A major mistake is writing a beautiful, grammatically perfect message but forgetting to suggest a new time. Examiners grade heavily on <strong>task fulfillment</strong>.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-b-md border-l-4 border-green-500">
                <h4 className="font-bold text-green-800 mb-2">The Correction:</h4>
                <p className="text-gray-800">
                  Use the prompt as your checklist. Write one clear sentence for every single bullet point requested. Before you finish, re-read the prompt and physically check off each requirement in your mind.
                </p>
                <div className="mt-3 bg-white p-4 rounded border border-green-200 text-sm">
                  <strong>Example Fix:</strong> "Anteeksi, mutta en pääse tänään. Olen sairas. <em>Sopiiko, että näemme ensi viikolla?</em>" (Fulfills all three parts).
                </div>
              </div>
            </div>

            {/* Mistake 2 */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-red-100 pb-2 flex items-center">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                Mixing Formal and Informal Registers
              </h3>
              <div className="bg-red-50 p-6 rounded-t-md border-l-4 border-red-500">
                <h4 className="font-bold text-red-800 mb-2">The Problem:</h4>
                <p className="text-gray-800">
                  Using "sinä" (informal you) when writing an official complaint to a company, or starting an email to your best friend with "Hyvä Herra" (Dear Sir). Mixing registers shows the examiner that you do not understand the social context of the language.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-b-md border-l-4 border-green-500">
                <h4 className="font-bold text-green-800 mb-2">The Correction:</h4>
                <p className="text-gray-800">
                  Decide immediately who the recipient is. If it is a business, teacher, or landlord, use <strong>Te</strong> (formal you) and standard written Finnish (kirjakieli). If it is a friend, use <strong>sinä</strong> and casual greetings.
                </p>
                <div className="mt-3 bg-white p-4 rounded border border-green-200 text-sm">
                  <strong>Formal:</strong> "Hei, haluaisin kysyä <em>teidän</em> aukioloajoista. Ystävällisin terveisin, Anna."<br/>
                  <strong>Informal:</strong> "Moi, mennäänkö kahville? Nähdään! Terveisin, Anna."
                </div>
              </div>
            </div>

            {/* Mistake 3 */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-red-100 pb-2 flex items-center">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                Overcomplicating Sentences
              </h3>
              <div className="bg-red-50 p-6 rounded-t-md border-l-4 border-red-500">
                <h4 className="font-bold text-red-800 mb-2">The Problem:</h4>
                <p className="text-gray-800">
                  When analyzing typical <em>Finnish writing errors</em>, evaluators constantly see students trying to write long, complex sentences with multiple clauses to "sound smart." This almost always leads to incorrect word order, wrong noun cases (partitive/genitive errors), and confusion.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-b-md border-l-4 border-green-500">
                <h4 className="font-bold text-green-800 mb-2">The Correction:</h4>
                <p className="text-gray-800">
                  Keep it simple. Use standard <strong>Subject + Verb + Object</strong> structure. Two short, grammatically correct sentences will score much higher than one long, broken sentence.
                </p>
                <div className="mt-3 bg-white p-4 rounded border border-green-200 text-sm">
                  <strong>Instead of:</strong> "Koska eilen satoi paljon vettä ja minun pyöräni on rikki, niin minä en voi tulla sinne tänään kokoukseen."<br/>
                  <strong>Write:</strong> "En pääse tänään kokoukseen. Minun pyöräni on rikki."
                </div>
              </div>
            </div>

            {/* Mistake 4 */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-red-100 pb-2 flex items-center">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                Directly Translating from Native Languages
              </h3>
              <div className="bg-red-50 p-6 rounded-t-md border-l-4 border-red-500">
                <h4 className="font-bold text-red-800 mb-2">The Problem:</h4>
                <p className="text-gray-800">
                  One of the most frequent <em>YKI exam mistakes</em> is translating idioms or sentence structures word-for-word from English or another language. For example, writing "Minä odotan näkemään sinut" (I am looking forward to seeing you) sounds highly unnatural in Finnish.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-b-md border-l-4 border-green-500">
                <h4 className="font-bold text-green-800 mb-2">The Correction:</h4>
                <p className="text-gray-800">
                  Memorize functional Finnish phrases rather than translating. Learn how Finns actually express certain ideas. 
                </p>
                <div className="mt-3 bg-white p-4 rounded border border-green-200 text-sm">
                  <strong>Instead of direct translation:</strong> Learn standard phrases like <em>"Nähdään pian!"</em> (See you soon) or <em>"Odotan innolla!"</em> (I'm looking forward to it).
                </div>
              </div>
            </div>

            {/* Mistake 5 */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-red-100 pb-2 flex items-center">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">5</span>
                Forgetting Greetings and Sign-offs
              </h3>
              <div className="bg-red-50 p-6 rounded-t-md border-l-4 border-red-500">
                <h4 className="font-bold text-red-800 mb-2">The Problem:</h4>
                <p className="text-gray-800">
                  Writing the core message perfectly but forgetting to say "Hello" at the start or sign your name at the end. A message is a specific text format, and omitting these makes it look like an incomplete task.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-b-md border-l-4 border-green-500">
                <h4 className="font-bold text-green-800 mb-2">The Correction:</h4>
                <p className="text-gray-800">
                  Always use the "sandwich approach." Top bun: Greeting. Meat: The answer to the prompt. Bottom bun: Sign-off. 
                </p>
                <div className="mt-3 bg-white p-4 rounded border border-green-200 text-sm">
                  <strong>Always include:</strong><br/>
                  Hei [Nimi],<br/>
                  ...<br/>
                  Terveisin,<br/>
                  [Oma Nimesi]
                </div>
              </div>
            </div>

          </section>
        </article>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-6 py-12 mt-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Will small spelling mistakes cause me to fail the YKI message task?</h3>
              <p className="text-gray-700">Not necessarily. In the intermediate (keskitaso) YKI exam, examiners expect minor spelling and grammar errors. As long as your Finnish writing errors do not change the meaning of the word or make the sentence impossible to understand, you can still pass.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">What happens if I forget to answer one of the bullet points in the prompt?</h3>
              <p className="text-gray-700">Ignoring prompt instructions is a critical mistake. If the task asks you to apologize, explain why, and suggest a new time, and you forget to suggest a new time, your score will drop significantly for failing to complete the task.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Can I use spoken language in the YKI writing test?</h3>
              <p className="text-gray-700">Yes, but only if the context allows it. If you are writing an informal message to a friend, spoken language (puhekieli) is acceptable. If you are writing to a company or a teacher, you must use formal written language (kirjakieli).</p>
            </div>
          </div>
        </section>

        {/* Internal Links - Related Articles */}
        <nav className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
          <ul className="space-y-2">
            <li><Link href="/wiki/guides/yki-message-writing-guide" className="text-blue-700 hover:underline">YKI Message Writing Guide: How to Write Short Messages in Finnish</Link></li>
            <li><Link href="/wiki/scoring/yki-message-writing-scoring" className="text-blue-700 hover:underline">YKI Message Writing Scoring: How Examiners Evaluate Messages</Link></li>
            <li><Link href="/wiki/essays/yki-message-writing-examples" className="text-blue-700 hover:underline">YKI Message Writing Examples: Finnish Sample Answers Explained</Link></li>
          </ul>
        </nav>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16 mt-8">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stop Making Preventable Exam Mistakes</h2>
            <p className="text-xl mb-8 text-blue-100">
              The best way to fix errors is to get immediate feedback. Practice YKI message writing on ExamCoach.ai and let our AI highlight your mistakes before test day.
            </p>
            <Link 
              href="/signup" 
              className="inline-block bg-white text-blue-700 font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              Start Practicing Free
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}