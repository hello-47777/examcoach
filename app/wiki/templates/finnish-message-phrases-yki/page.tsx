import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('templates', 'finnish-message-phrases-yki', {
  title: 'Finnish Message Phrases for YKI Writing Test',
  description: 'Master essential Finnish message phrases for the YKI writing test. Boost your YKI vocabulary with categorized daily expressions and effective writing frameworks.',
});

export default function FinnishMessagePhrasesYkiPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many phrases do I need to memorize for the YKI short message task?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You do not need to memorize hundreds of phrases. Focusing on 15–20 versatile Finnish writing phrases covering greetings, apologies, requests, and closings is enough to handle almost any short message prompt in the intermediate YKI test."
        }
      },
      {
        "@type": "Question",
        "name": "Should I use formal or informal Finnish message phrases?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You must use both, depending on the task. The exam usually includes one informal task (e.g., writing to a friend) and one formal task (e.g., writing to a business or official). Always adjust your vocabulary to the recipient."
        }
      },
      {
        "@type": "Question",
        "name": "Can these Finnish daily expressions be used in the YKI speaking test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Many of the informal message phrases and daily expressions translate perfectly to the conversational scenarios in the YKI speaking test, especially when reacting to situations or apologizing."
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
              Finnish Message Phrases for YKI Writing Test
            </h1>
            <p className="text-xl text-blue-100">
              Stop translating word-for-word. Learn the categorized phrases and vocabulary you need to write clear, accurate, and high-scoring messages in the YKI Finnish exam.
            </p>
          </div>
        </header>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-sm mt-8 rounded-lg">
          
          <section className="mb-10">
            <p className="text-lg leading-relaxed mb-6">
              When taking the intermediate level Finnish language proficiency exam, time management is critical. Knowing exactly which <strong>Finnish message phrases YKI</strong> test-takers need to use will save you time and prevent unnecessary grammar mistakes. The short message task tests your ability to handle everyday communication quickly, meaning you must be ready to apologize, request information, or invite someone out without hesitation.
            </p>
            <p className="text-lg leading-relaxed">
              In this guide, we have compiled the most useful <span className="font-semibold">YKI vocabulary</span> and sentence structures. We will break down these expressions into functional categories, providing both formal and informal examples so you are prepared for any exam prompt.
            </p>
          </section>

          <hr className="border-gray-200 mb-10" />

          {/* H2 Featuring Primary Keyword */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-blue-800">
              Essential Finnish Message Phrases YKI Examiners Look For
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Examiners evaluate your ability to choose the correct register (formal vs. informal). Using standard <em>Finnish daily expressions</em> appropriately shows that you understand real-world communication. Below are categorized lists to help you construct your messages step-by-step.
            </p>

            {/* Category 1: Greetings */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-blue-100 pb-2">1. Greetings (Tervehdykset)</h3>
              <p className="mb-4 text-gray-700">Always start your message correctly based on who you are writing to.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-blue-50 border-b border-blue-200">
                      <th className="p-4 font-semibold w-1/3">Phrase</th>
                      <th className="p-4 font-semibold w-1/3">English Meaning</th>
                      <th className="p-4 font-semibold w-1/3">Context / Register</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">Moi [Nimi], / Hei [Nimi],</td>
                      <td className="p-4">Hi [Name],</td>
                      <td className="p-4 text-gray-600">Informal (Friends, family, close colleagues)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4">Hei,</td>
                      <td className="p-4">Hello,</td>
                      <td className="p-4 text-gray-600">Neutral/Formal (Customer service, generic)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Hyvä asiakaspalvelu,</td>
                      <td className="p-4">Dear customer service,</td>
                      <td className="p-4 text-gray-600">Formal (Writing to a company)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Category 2: Apologizing & Canceling */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-blue-100 pb-2">2. Apologizing & Canceling (Anteeksipyytäminen ja peruminen)</h3>
              <p className="mb-4 text-gray-700">A very common YKI task is canceling a meeting or apologizing for a mistake.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-blue-50 border-b border-blue-200">
                      <th className="p-4 font-semibold w-1/3">Phrase</th>
                      <th className="p-4 font-semibold w-1/3">English Meaning</th>
                      <th className="p-4 font-semibold w-1/3">Example Usage in YKI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">Anteeksi, mutta en pääse...</td>
                      <td className="p-4">Sorry, but I cannot make it to...</td>
                      <td className="p-4 text-gray-600"><em>Anteeksi, mutta en pääse tänään kurssille.</em></td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4">Olen pahoillani, mutta...</td>
                      <td className="p-4">I am sorry, but...</td>
                      <td className="p-4 text-gray-600"><em>Olen pahoillani, mutta minun täytyy perua aikani.</em></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Olen sairas / Minulla on kuumetta.</td>
                      <td className="p-4">I am sick / I have a fever.</td>
                      <td className="p-4 text-gray-600">Standard explanation for canceling plans.</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4">Olen myöhässä, koska...</td>
                      <td className="p-4">I am late because...</td>
                      <td className="p-4 text-gray-600"><em>Olen myöhässä, koska juna on myöhässä.</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Category 3: Requesting Information */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-blue-100 pb-2">3. Requesting Information (Tiedusteleminen)</h3>
              <p className="mb-4 text-gray-700">These standard <em>Finnish writing phrases</em> are essential when contacting a business, landlord, or school.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-blue-50 border-b border-blue-200">
                      <th className="p-4 font-semibold w-1/3">Phrase</th>
                      <th className="p-4 font-semibold w-1/3">English Meaning</th>
                      <th className="p-4 font-semibold w-1/3">Example Usage in YKI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">Haluaisin kysyä...</td>
                      <td className="p-4">I would like to ask...</td>
                      <td className="p-4 text-gray-600"><em>Haluaisin kysyä teidän aukioloajoistanne.</em></td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4">Voisitko kertoa minulle...</td>
                      <td className="p-4">Could you tell me...</td>
                      <td className="p-4 text-gray-600"><em>Voisitko kertoa minulle, kuinka paljon se maksaa?</em></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Olen kiinnostunut...</td>
                      <td className="p-4">I am interested in...</td>
                      <td className="p-4 text-gray-600"><em>Olen kiinnostunut teidän suomen kielen kurssista.</em></td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4">Onko mahdollista saada...</td>
                      <td className="p-4">Is it possible to get...</td>
                      <td className="p-4 text-gray-600"><em>Onko mahdollista saada rahat takaisin?</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Category 4: Suggesting & Inviting */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-blue-100 pb-2">4. Suggesting & Inviting (Ehdottaminen ja kutsuminen)</h3>
              <p className="mb-4 text-gray-700">If the prompt asks you to set a new time for a meeting or invite a friend to an event, use these expressions.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-blue-50 border-b border-blue-200">
                      <th className="p-4 font-semibold w-1/3">Phrase</th>
                      <th className="p-4 font-semibold w-1/3">English Meaning</th>
                      <th className="p-4 font-semibold w-1/3">Example Usage in YKI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">Sopiiko sinulle, jos...</td>
                      <td className="p-4">Does it suit you if...</td>
                      <td className="p-4 text-gray-600"><em>Sopiiko sinulle, jos näemme huomenna?</em></td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4">Miten olisi...</td>
                      <td className="p-4">How about...</td>
                      <td className="p-4 text-gray-600"><em>Miten olisi tiistaina klo 17:00?</em></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Haluaisitko lähteä...</td>
                      <td className="p-4">Would you like to go...</td>
                      <td className="p-4 text-gray-600"><em>Haluaisitko lähteä kanssani elokuviin perjantaina?</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Category 5: Thanking & Closing */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-blue-100 pb-2">5. Thanking & Closing (Kiittäminen ja lopettaminen)</h3>
              <p className="mb-4 text-gray-700">End your message on a strong, polite note.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-blue-50 border-b border-blue-200">
                      <th className="p-4 font-semibold w-1/3">Phrase</th>
                      <th className="p-4 font-semibold w-1/3">English Meaning</th>
                      <th className="p-4 font-semibold w-1/3">Context / Register</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">Kiitos paljon!</td>
                      <td className="p-4">Thank you very much!</td>
                      <td className="p-4 text-gray-600">Universal/Informal</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4">Kiitos avusta jo etukäteen.</td>
                      <td className="p-4">Thank you for the help in advance.</td>
                      <td className="p-4 text-gray-600">Formal (Used when making a request)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Odotan vastaustanne.</td>
                      <td className="p-4">I look forward to your reply.</td>
                      <td className="p-4 text-gray-600">Formal (Customer service complaints/queries)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4">Nähdään! / Kuullaan!</td>
                      <td className="p-4">See you! / Talk later!</td>
                      <td className="p-4 text-gray-600">Informal (Friends)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Terveisin, [Nimesi]</td>
                      <td className="p-4">Regards, [Your name]</td>
                      <td className="p-4 text-gray-600">Neutral/Informal</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4">Ystävällisin terveisin, [Nimesi]</td>
                      <td className="p-4">Best regards, [Your name]</td>
                      <td className="p-4 text-gray-600">Formal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section: Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-blue-800">
              How to Use These Phrases Effectively (and Avoid Mistakes)
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Simply memorizing vocabulary is not enough; you must use these phrases in the correct context. Here are two common mistakes candidates make with YKI vocabulary and how to fix them:
            </p>
            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-md border-l-4 border-red-500">
                <h4 className="font-bold text-lg text-red-800 mb-2">Mistake 1: Mixing Formal and Informal Language</h4>
                <p className="text-gray-700"><strong>Problem:</strong> Writing <em>"Moi asiakaspalvelu, haluaisin kysyä..."</em> or signing off a message to a friend with <em>"Ystävällisin terveisin."</em></p>
                <p className="text-gray-700 mt-2"><strong>Correction:</strong> Keep the register consistent. If you start with a formal greeting (<em>Hei</em>), use formal structures (<em>Te, Teidän</em>) and a formal sign-off.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-md border-l-4 border-red-500">
                <h4 className="font-bold text-lg text-red-800 mb-2">Mistake 2: Translating Directly from English</h4>
                <p className="text-gray-700"><strong>Problem:</strong> Trying to write "I am looking forward to seeing you" literally into Finnish.</p>
                <p className="text-gray-700 mt-2"><strong>Correction:</strong> Stick to the established <em>Finnish writing phrases</em> provided above. For example, simply saying <em>"Odotan innolla näkemistä"</em> or just <em>"Nähdään pian!"</em> is much more natural.</p>
              </div>
            </div>
          </section>

        </article>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-6 py-12 mt-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How many phrases do I need to memorize for the YKI short message task?</h3>
              <p className="text-gray-700">You do not need to memorize hundreds of phrases. Focusing on 15–20 versatile Finnish writing phrases covering greetings, apologies, requests, and closings is enough to handle almost any short message prompt in the intermediate YKI test.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Should I use formal or informal Finnish message phrases?</h3>
              <p className="text-gray-700">You must use both, depending on the task. The exam usually includes one informal task (e.g., writing to a friend) and one formal task (e.g., writing to a business or official). Always adjust your vocabulary to the recipient.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Can these Finnish daily expressions be used in the YKI speaking test?</h3>
              <p className="text-gray-700">Yes! Many of the informal message phrases and daily expressions translate perfectly to the conversational scenarios in the YKI speaking test, especially when reacting to situations or apologizing.</p>
            </div>
          </div>
        </section>

        {/* Internal Links - Related Articles */}
        <nav className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
          <ul className="space-y-2">
            <li><Link href="/wiki/templates/yki-message-template" className="text-blue-700 hover:underline">YKI Message Template: Finnish Short Message Structures for Exam</Link></li>
            <li><Link href="/wiki/guides/how-to-write-message-yki" className="text-blue-700 hover:underline">How to Write a Message for YKI Writing Test: Step-by-Step Guide</Link></li>
          </ul>
        </nav>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16 mt-8">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Put These Phrases into Practice</h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't just read vocabulary lists—test yourself! Try our YKI exam simulator and get instant AI feedback on how accurately you use these Finnish message phrases.
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