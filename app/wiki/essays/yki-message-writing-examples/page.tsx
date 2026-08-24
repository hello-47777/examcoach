import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('essays', 'yki-message-writing-examples', {
  title: 'YKI Writing Message Examples: Finnish Sample Answers Explained',
  description: 'Review realistic YKI message writing examples to prepare for your Finnish test. Learn why these sample answers score high and how to apply them to your exam.',
});

export default function YkiMessageWritingExamplesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need to write long sentences in the YKI short message task?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The most important thing is to answer the prompt clearly. Short, grammatically correct sentences are much better than long, complex sentences with mistakes."
        }
      },
      {
        "@type": "Question",
        "name": "Will I lose points for small grammar mistakes in my message?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the intermediate level (keskitaso), minor mistakes are acceptable as long as the message is fully understandable. However, if a mistake changes the meaning of your text, it will lower your score."
        }
      },
      {
        "@type": "Question",
        "name": "Should I use spoken language (puhekieli) or written language (kirjakieli)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on the recipient. Use informal language and appropriate spoken language elements when writing to a friend. Use formal written language (kirjakieli) when contacting businesses, landlords, or teachers."
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
              YKI Message Writing Examples: Finnish Sample Answers Explained
            </h1>
            <p className="text-xl text-blue-100">
              Study realistic sample answers for the YKI short message task. Understand what examiners look for, avoid common mistakes, and learn how to secure a passing grade.
            </p>
          </div>
        </header>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-sm mt-8 rounded-lg">
          
          <section className="mb-10">
            <p className="text-lg leading-relaxed mb-6">
              If you are preparing for the intermediate Finnish language test, studying real <strong>YKI message writing examples</strong> is one of the most effective ways to study. The short message writing task requires you to respond quickly and accurately to everyday situations, such as apologizing, asking for information, or giving feedback.
            </p>
            <p className="text-lg leading-relaxed">
              In this guide, we will look at three realistic scenarios. We will provide a complete Finnish message sample for each, an English translation, and a detailed breakdown of exactly why these YKI practice answers would earn a passing grade from an examiner.
            </p>
          </section>

          <hr className="border-gray-200 mb-10" />

          {/* H2 featuring primary keyword */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-blue-800">
              Analyzing YKI Message Writing Examples for Success
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Before we look at the specific <em>YKI writing examples</em>, remember that examiners evaluate your text based on three main factors: <strong>task completion</strong> (did you answer all the bullet points?), <strong>understandability</strong> (is the message clear?), and <strong>register</strong> (is the tone appropriate for the recipient?).
            </p>
          </section>

          {/* Example 1: Informal */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Scenario 1: Canceling Plans with a Friend (Informal)
            </h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-md mb-6">
              <h4 className="font-semibold text-lg mb-2">The Exam Prompt:</h4>
              <p className="mb-2">You had plans to go to the movies with your friend, Mikko. Write a message to him where you:</p>
              <ul className="list-disc pl-6">
                <li>Apologize for canceling.</li>
                <li>Explain why you cannot come.</li>
                <li>Suggest a new time to meet.</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-100 p-6 rounded-md shadow-inner">
                <h4 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-3">Finnish Answer</h4>
                <p className="font-mono text-base whitespace-pre-wrap">
                  Moi Mikko,
                  <br /><br />
                  Anteeksi, mutta en pääse tänään elokuviin. Olen vähän sairas ja minulla on kuumetta, joten minun täytyy levätä kotona.
                  <br /><br />
                  Sopiiko sinulle, jos menemme ensi viikonloppuna? Esimerkiksi lauantaina klo 18?
                  <br /><br />
                  Terveisin,
                  <br />
                  Alex
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-md shadow-inner">
                <h4 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-3">English Translation</h4>
                <p className="font-mono text-base whitespace-pre-wrap text-gray-600">
                  Hi Mikko,
                  <br /><br />
                  Sorry, but I cannot make it to the movies today. I am a little sick and have a fever, so I have to rest at home.
                  <br /><br />
                  Does it suit you if we go next weekend? For example, on Saturday at 18:00?
                  <br /><br />
                  Regards,
                  <br />
                  Alex
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-md">
              <h4 className="font-bold text-lg mb-3">Why this passes:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Task Completion:</strong> All three prompt requirements (apologize, explain, suggest new time) are explicitly addressed.</li>
                <li><strong>Appropriate Tone:</strong> Uses a casual, friendly greeting (<em>Moi</em>) and a standard sign-off (<em>Terveisin</em>) perfect for a friend.</li>
                <li><strong>Clarity:</strong> The reason for canceling (<em>olen vähän sairas</em>) is simple and grammatically correct.</li>
              </ul>
            </div>
          </section>

          {/* Example 2: Formal */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Scenario 2: Requesting Information (Formal)
            </h3>
            <p className="text-lg mb-6">
              When communicating with a business or an official, you need a formal <em>Finnish message sample</em>. You must use the correct pronouns and polite phrasing.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-md mb-6">
              <h4 className="font-semibold text-lg mb-2">The Exam Prompt:</h4>
              <p className="mb-2">You want to start taking swimming lessons. Write an email to the local swimming hall where you:</p>
              <ul className="list-disc pl-6">
                <li>Say which course you are interested in.</li>
                <li>Ask about the price of the course.</li>
                <li>Ask what equipment you need to bring.</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-100 p-6 rounded-md shadow-inner">
                <h4 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-3">Finnish Answer</h4>
                <p className="font-mono text-base whitespace-pre-wrap">
                  Hei,
                  <br /><br />
                  Olen kiinnostunut aikuisten uimakoulusta, joka alkaa lokakuussa. Onko kurssilla vielä tilaa?
                  <br /><br />
                  Haluaisin myös kysyä, kuinka paljon kurssi maksaa. Lisäksi haluaisin tietää, mitä varusteita minun pitää ottaa mukaan. Riittääkö uimapuku ja pyyhe?
                  <br /><br />
                  Kiitos tiedoista etukäteen!
                  <br /><br />
                  Ystävällisin terveisin,
                  <br />
                  Maria Virtanen
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-md shadow-inner">
                <h4 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-3">English Translation</h4>
                <p className="font-mono text-base whitespace-pre-wrap text-gray-600">
                  Hello,
                  <br /><br />
                  I am interested in the adult swimming school that starts in October. Is there still space on the course?
                  <br /><br />
                  I would also like to ask how much the course costs. Furthermore, I would like to know what equipment I need to bring. Is a swimsuit and towel enough?
                  <br /><br />
                  Thank you for the information in advance!
                  <br /><br />
                  Best regards,
                  <br />
                  Maria Virtanen
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-md">
              <h4 className="font-bold text-lg mb-3">Why this passes:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Polite Structure:</strong> Uses polite conditional forms (<em>Haluaisin kysyä, haluaisin tietää</em>) which demonstrates a good grasp of formal register.</li>
                <li><strong>Formatting:</strong> The use of <em>"Hei,"</em> and <em>"Ystävällisin terveisin,"</em> is perfectly suited for customer service emails.</li>
                <li><strong>Vocabulary:</strong> Relevant vocabulary like <em>varusteet</em> (equipment) and <em>uimakoulu</em> (swimming school) are used accurately.</li>
              </ul>
            </div>
          </section>

          {/* Example 3: Feedback */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Scenario 3: Giving Constructive Feedback
            </h3>
            <p className="text-lg mb-6">
              Writing feedback or a complaint is a very common task. Reviewing these <em>YKI practice answers</em> will help you learn how to complain politely without sounding overly aggressive.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-md mb-6">
              <h4 className="font-semibold text-lg mb-2">The Exam Prompt:</h4>
              <p className="mb-2">You bought a coffee machine from a store yesterday, but it is broken. Write a message to the store where you:</p>
              <ul className="list-disc pl-6">
                <li>Explain when you bought the machine.</li>
                <li>Describe what the problem is.</li>
                <li>State what you want the store to do about it.</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-100 p-6 rounded-md shadow-inner">
                <h4 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-3">Finnish Answer</h4>
                <p className="font-mono text-base whitespace-pre-wrap">
                  Hei asiakaspalvelu,
                  <br /><br />
                  Ostin teiltä eilen kahvinkeittimen, mutta huomasin kotona, että se on rikki. Kone ei mene päälle ollenkaan, kun laitan töpselin seinään.
                  <br /><br />
                  Olen hyvin pettynyt. Haluaisin palauttaa tuotteen ja saada rahani takaisin, tai vaihtaa sen uuteen toimivaan keittimeen. Minulla on kuitti tallessa.
                  <br /><br />
                  Odotan vastaustanne.
                  <br /><br />
                  Terveisin,
                  <br />
                  Ahmed
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-md shadow-inner">
                <h4 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-3">English Translation</h4>
                <p className="font-mono text-base whitespace-pre-wrap text-gray-600">
                  Hello customer service,
                  <br /><br />
                  I bought a coffee maker from you yesterday, but I noticed at home that it is broken. The machine doesn't turn on at all when I plug it into the wall.
                  <br /><br />
                  I am very disappointed. I would like to return the product and get my money back, or exchange it for a new working maker. I have saved the receipt.
                  <br /><br />
                  I look forward to your reply.
                  <br /><br />
                  Regards,
                  <br />
                  Ahmed
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-md">
              <h4 className="font-bold text-lg mb-3">Why this passes:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Clear Timeline:</strong> Accurately uses past tense to explain the purchase (<em>Ostin teiltä eilen...</em>).</li>
                <li><strong>Problem Description:</strong> Clearly describes the issue using practical vocabulary (<em>Kone ei mene päälle...</em>).</li>
                <li><strong>Direct Demand:</strong> Stating the desired resolution (<em>saada rahani takaisin tai vaihtaa sen...</em>) explicitly satisfies the final prompt requirement.</li>
              </ul>
            </div>
          </section>

        </article>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-6 py-12 mt-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Do I need to write long sentences in the YKI short message task?</h3>
              <p className="text-gray-700">No. The most important thing is to answer the prompt clearly. Short, grammatically correct sentences are much better than long, complex sentences with mistakes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Will I lose points for small grammar mistakes in my message?</h3>
              <p className="text-gray-700">For the intermediate level (keskitaso), minor mistakes are acceptable as long as the message is fully understandable. However, if a mistake changes the meaning of your text, it will lower your score.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Should I use spoken language (puhekieli) or written language (kirjakieli)?</h3>
              <p className="text-gray-700">It depends on the recipient. Use informal language and appropriate spoken language elements when writing to a friend. Use formal written language (kirjakieli) when contacting businesses, landlords, or teachers.</p>
            </div>
          </div>
        </section>

        {/* Internal Links - Related Articles */}
        <nav className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
          <ul className="space-y-2">
            <li><Link href="/wiki/templates/yki-message-template" className="text-blue-700 hover:underline">YKI Message Template: Finnish Short Message Structures for Exam</Link></li>
            <li><Link href="/wiki/guides/yki-message-writing-guide" className="text-blue-700 hover:underline">YKI Message Writing Guide: How to Write Short Messages in Finnish</Link></li>
            <li><Link href="/wiki/scoring/yki-message-writing-scoring" className="text-blue-700 hover:underline">YKI Message Writing Scoring: How Examiners Evaluate Messages</Link></li>
          </ul>
        </nav>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16 mt-8">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Master the YKI Writing Task Today</h2>
            <p className="text-xl mb-8 text-blue-100">
              Stop wondering if your Finnish messages are correct. Get instant, AI-driven feedback on your grammar, vocabulary, and exam readiness.
            </p>
            <Link 
              href="/signup" 
              className="inline-block bg-white text-blue-700 font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              Start Practicing with ExamCoach
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}