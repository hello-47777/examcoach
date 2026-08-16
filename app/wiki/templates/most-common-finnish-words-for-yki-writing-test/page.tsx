import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Most Common Finnish Words for YKI Writing Test | ExamCoach.ai',
  description: 'Boost your exam score with the most essential Finnish words for YKI writing. Learn categorized vocabulary, connectors, and phrases for every YKI test task.',
  keywords: ['Finnish words for YKI writing', 'YKI vocabulary list', 'Finnish writing vocabulary', 'YKI connectors', 'essential Finnish words'],
  alternates: {
    canonical: '/wiki/templates/most-common-finnish-words-for-yki-writing-test',
  },
};

export default function MostCommonFinnishWordsYkiWriting() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How large should my YKI vocabulary list be to pass?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You do not need a massive dictionary to pass the YKI intermediate (Keskitaso) test. Focus on mastering around 100-200 high-frequency structural words, connectors, and task-specific phrases rather than thousands of random nouns."
        }
      },
      {
        "@type": "Question",
        "name": "Will using advanced Finnish writing vocabulary guarantee a better score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Using advanced Finnish writing vocabulary helps, but only if used correctly and in the right context. Examiners prefer clear, accurate, and logically connected sentences using intermediate vocabulary over complex words that are used incorrectly or sound unnatural."
        }
      },
      {
        "@type": "Question",
        "name": "Do I lose points for spelling mistakes on these common words?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minor spelling errors are tolerated if the message remains understandable. However, consistently misspelling common connectors or basic structural words can lower your score, as it affects the overall readability of your text."
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
      <main className="min-h-screen bg-white pb-16">
        {/* Hero Section */}
        <header className="bg-blue-50 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">
              Most Common Finnish Words for YKI Writing Test
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Stop translating blindly. Learn the exact categorized phrases, connectors, and essential vocabulary needed to pass the YKI intermediate writing section.
            </p>
          </div>
        </header>

        {/* Article Content */}
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg max-w-none">
          <p>
            Passing the YKI intermediate level (Keskitaso) requires more than just basic conversational language. To impress the evaluators, you must actively use the right <strong>Finnish words for YKI writing</strong>. This demonstrates your ability to structure texts logically, connect ideas, and adapt your tone to different scenarios—from casual messages to formal complaints.
          </p>
          <p>
            Building a targeted YKI vocabulary list is much more efficient than trying to memorize a dictionary. Below, we have categorized the most essential Finnish writing vocabulary you need to memorize and use in your upcoming exam.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            Essential Connectors: The Core Finnish Words for YKI Writing
          </h2>
          <p>
            Examiners specifically look for connectors (<em>sidossanat</em>). Using them proves you can write cohesive paragraphs instead of just short, disconnected sentences.
          </p>

          <div className="bg-slate-50 rounded-lg p-6 my-8 border border-slate-200">
            <ul className="list-none pl-0 space-y-6 m-0">
              <li className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                <strong className="text-blue-700 text-xl block mb-1">Siksi (Therefore / For that reason)</strong>
                <span className="text-slate-600 block mb-2">Used to show cause and effect. Extremely useful in formal messages and opinion pieces.</span>
                <em className="text-slate-800 bg-white px-3 py-2 rounded shadow-sm block">"Olin eilen sairaana. <strong>Siksi</strong> en voinut tulla töihin." (I was sick yesterday. Therefore, I could not come to work.)</em>
              </li>
              <li className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                <strong className="text-blue-700 text-xl block mb-1">Kuitenkin (However)</strong>
                <span className="text-slate-600 block mb-2">Perfect for showing contrast, especially in complaints or when presenting counter-arguments.</span>
                <em className="text-slate-800 bg-white px-3 py-2 rounded shadow-sm block">"Tuote oli kallis. Se meni <strong>kuitenkin</strong> rikki heti." (The product was expensive. However, it broke immediately.)</em>
              </li>
              <li className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                <strong className="text-blue-700 text-xl block mb-1">Lisäksi (Furthermore / In addition)</strong>
                <span className="text-slate-600 block mb-2">Use this when listing multiple reasons in your opinion piece or adding points to a complaint.</span>
                <em className="text-slate-800 bg-white px-3 py-2 rounded shadow-sm block">"Asunto on liian pieni. <strong>Lisäksi</strong> vuokra on hyvin korkea." (The apartment is too small. Furthermore, the rent is very high.)</em>
              </li>
              <li className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                <strong className="text-blue-700 text-xl block mb-1">Vaikka (Although / Even though)</strong>
                <span className="text-slate-600 block mb-2">A great subordinating conjunction to show complex sentence structure.</span>
                <em className="text-slate-800 bg-white px-3 py-2 rounded shadow-sm block">"<strong>Vaikka</strong> satoi vettä, menimme kävelylle." (Even though it rained, we went for a walk.)</em>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            Phrases for the Opinion Piece (Mielipidekirjoitus)
          </h2>
          <p>
            The final task in the YKI writing section is usually an opinion piece. You must clearly state your stance and defend it. Add these phrases to your YKI vocabulary list to structure your arguments professionally.
          </p>

          <div className="bg-slate-50 rounded-lg p-6 my-8 border border-slate-200">
            <ul className="list-none pl-0 space-y-6 m-0">
              <li className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                <strong className="text-emerald-700 text-xl block mb-1">Olen sitä mieltä, että... (I am of the opinion that...)</strong>
                <span className="text-slate-600 block mb-2">The standard, polite way to introduce your main thesis.</span>
                <em className="text-slate-800 bg-white px-3 py-2 rounded shadow-sm block">"<strong>Olen sitä mieltä, että</strong> kaupunkiin tarvitaan enemmän pyöräteitä." (I am of the opinion that the city needs more bike lanes.)</em>
              </li>
              <li className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                <strong className="text-emerald-700 text-xl block mb-1">Toisaalta... toisaalta... (On the one hand... on the other hand...)</strong>
                <span className="text-slate-600 block mb-2">Shows the examiner you can weigh different sides of an argument.</span>
                <em className="text-slate-800 bg-white px-3 py-2 rounded shadow-sm block">"<strong>Toisaalta</strong> autoilu on kätevää, mutta <strong>toisaalta</strong> se saastuttaa luontoa." (On the one hand driving is convenient, but on the other hand it pollutes nature.)</em>
              </li>
              <li className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                <strong className="text-emerald-700 text-xl block mb-1">Yhteenvetona voidaan todeta, että... (In conclusion, it can be stated that...)</strong>
                <span className="text-slate-600 block mb-2">A strong, formal way to wrap up your opinion piece.</span>
                <em className="text-slate-800 bg-white px-3 py-2 rounded shadow-sm block">"<strong>Yhteenvetona voidaan todeta, että</strong> kierrätys on kaikkien vastuulla." (In conclusion, it can be stated that recycling is everyone's responsibility.)</em>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            Vocabulary for Formal Complaints and Messages
          </h2>
          <p>
            When writing a formal message (valitus), your Finnish writing vocabulary needs to be polite but firm. Never use slang or overly aggressive words.
          </p>

          <div className="bg-slate-50 rounded-lg p-6 my-8 border border-slate-200">
            <ul className="list-none pl-0 space-y-6 m-0">
              <li className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                <strong className="text-purple-700 text-xl block mb-1">Haluan antaa palautetta... (I want to give feedback...)</strong>
                <span className="text-slate-600 block mb-2">The best opening line for any complaint or review task.</span>
                <em className="text-slate-800 bg-white px-3 py-2 rounded shadow-sm block">"<strong>Haluan antaa palautetta</strong> eilisestä asiakaspalvelusta." (I want to give feedback about yesterday's customer service.)</em>
              </li>
              <li className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                <strong className="text-purple-700 text-xl block mb-1">Olen pettynyt... (I am disappointed...)</strong>
                <span className="text-slate-600 block mb-2">Expresses dissatisfaction politely. Note: Requires the illative case (mihin) or elative case (mistä) depending on context.</span>
                <em className="text-slate-800 bg-white px-3 py-2 rounded shadow-sm block">"<strong>Olen erittäin pettynyt</strong> saamaani palveluun." (I am very disappointed in the service I received.)</em>
              </li>
              <li className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                <strong className="text-purple-700 text-xl block mb-1">Toivon, että korjaatte asian... (I hope that you fix the matter...)</strong>
                <span className="text-slate-600 block mb-2">The standard call to action at the end of a formal complaint.</span>
                <em className="text-slate-800 bg-white px-3 py-2 rounded shadow-sm block">"<strong>Toivon, että korjaatte asian</strong> mahdollisimman pian." (I hope that you fix the matter as soon as possible.)</em>
              </li>
            </ul>
          </div>

          <p>
            Mastering these categorized phrases ensures you never stare at a blank page during the exam. By actively practicing this specific vocabulary, you will easily fulfill the evaluation criteria for structure, tone, and register.
          </p>

        </article>

        {/* FAQ Section */}
        <section className="bg-slate-50 py-16 mt-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {faq.name}
                  </h3>
                  <p className="text-slate-600">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8 mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
          <ul className="space-y-2">
            <li><Link href="/wiki/templates/yki-b1-vocabulary-list-writing-test" className="text-blue-700 hover:underline">YKI B1 Vocabulary List: Essential Finnish Words for Writing Test</Link></li>
            <li><Link href="/wiki/templates/finnish-connectors-for-writing" className="text-blue-700 hover:underline">Finnish Connectors for Writing: Improve Your YKI Essay Flow</Link></li>
          </ul>
        </nav>

        {/* CTA Section */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="bg-blue-600 rounded-2xl p-8 sm:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Master Your YKI Vocabulary in Practice
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Ready to test these words in action? Try our realistic YKI writing simulator and get instant, AI-driven feedback on your vocabulary and grammar.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-slate-50 transition-colors duration-200"
            >
              Start Practicing Free
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
