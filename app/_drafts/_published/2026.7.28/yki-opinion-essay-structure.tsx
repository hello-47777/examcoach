import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YKI Opinion Essay Structure: B1-B2 Writing Framework Explained',
  description: 'Master the YKI opinion essay structure with our comprehensive B1-B2 writing framework. Learn the ideal introduction, body, and conclusion format to pass the YKI exam.',
  alternates: {
    canonical: '/wiki/guides/yki-opinion-essay-structure',
  },
  openGraph: {
    title: 'YKI Opinion Essay Structure: B1-B2 Writing Framework Explained',
    description: 'Master the YKI opinion essay structure with our comprehensive B1-B2 writing framework. Learn the ideal introduction, body, and conclusion format to pass the YKI exam.',
    type: 'article',
  }
};

export default function YkiOpinionEssayStructure() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many paragraphs should my YKI opinion essay have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An ideal Finnish essay structure consists of 4 paragraphs: an introduction, two body paragraphs (arguments), and a conclusion."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to include opposing arguments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While not strictly required for a B1 pass, briefly mentioning an opposing view and countering it (e.g., using 'toisaalta') shows a strong B1-B2 writing structure and boosts your score."
        }
      },
      {
        "@type": "Question",
        "name": "How are paragraphs separated in the YKI test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should leave a clear empty line between paragraphs. This makes your YKI writing format easy to read for the examiners."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Article Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-4">
            YKI Opinion Essay Structure: B1-B2 Writing Framework Explained
          </h1>
          <p className="text-xl text-gray-600">
            A step-by-step guide to formatting the perfect Finnish opinion text for the YKI test.
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg prose-blue mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm">
          
          <p className="lead font-medium text-gray-700">
            When tackling your YKI exam preparation, understanding the core <strong>YKI opinion essay structure</strong> is just as important as knowing your grammar. The way you organize your thoughts directly impacts your score. This guide will walk you through the ideal introduction-body-conclusion framework to ensure your writing is clear, logical, and meets examiner expectations.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
            Mastering the YKI Opinion Essay Structure
          </h2>
          <p>
            A strong B1 writing structure relies on predictability. Examiners are looking for a clear progression of ideas. Here is the step-by-step structural guide to writing an effective opinion text:
          </p>
          <ol className="list-decimal pl-6 space-y-4">
            <li><strong>Introduction (Aloitus):</strong> Start by introducing the topic neutrally, then state your personal opinion clearly. Do not start arguing yet.</li>
            <li><strong>Body Paragraph 1 (Ensimmäinen perustelu):</strong> Present your strongest reason. Use an example to support it.</li>
            <li><strong>Body Paragraph 2 (Toinen perustelu):</strong> Present an additional reason or address a counter-argument to show depth of thought.</li>
            <li><strong>Conclusion (Lopetus):</strong> Briefly summarize your main point and end with a future-oriented statement, suggestion, or hope.</li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
            Reusable Template for the Finnish Essay Structure
          </h2>
          <p>
            To memorize the proper YKI writing format, use this plug-and-play framework during your practice sessions:
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-2">The 4-Paragraph Framework</h3>
            <p><strong>[Otsikko / Title]</strong></p>
            <p><strong>[Paragraph 1: Intro]</strong><br/>
            Nykyään keskustellaan paljon siitä, [topic]. Minun mielestäni [your clear stance].</p>
            <p><strong>[Paragraph 2: Argument 1]</strong><br/>
            Ensinnäkin, [argument 1]. Esimerkiksi [relevant example].</p>
            <p><strong>[Paragraph 3: Argument 2]</strong><br/>
            Toisaalta on totta, että [counter argument], mutta silti [argument 2].</p>
            <p><strong>[Paragraph 4: Conclusion]</strong><br/>
            Yhteenvetona voin sanoa, että [summary of stance]. Toivon, että tulevaisuudessa [suggestion/hope].</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
            Example: Applying the Structure
          </h2>
          <p>
            Let's look at a realistic example topic: <em>Etätyö on parempi kuin toimistotyö</em> (Remote work is better than office work).
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 bg-gray-50 p-4 rounded-r">
            <strong>Etätyön edut</strong><br/><br/>
            Viime vuosina etätyö on lisääntynyt huomattavasti. Olen ehdottomasti sitä mieltä, että etätyö on parempi vaihtoehto kuin toimistolla työskentely.<br/><br/>
            Ensinnäkin etätyö säästää paljon aikaa. Kun työntekijän ei tarvitse matkustaa työpaikalle, hänelle jää enemmän vapaa-aikaa. Esimerkiksi minä säästän joka päivä yli tunnin työmatkoissa.<br/><br/>
            Lisäksi kotona on usein helpompi keskittyä. Toimistossa on monesti meluisaa, ja työkaverit saattavat keskeyttää työnteon. Toisaalta on totta, että sosiaaliset kontaktit vähenevät kotona, mutta niitä voi ylläpitää vapaa-ajalla.<br/><br/>
            Yhteenvetona totean, että etätyö parantaa elämänlaatua merkittävästi. Toivon, että työnantajat tarjoavat tätä mahdollisuutta myös tulevaisuudessa.
          </blockquote>

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
            Essential Structural Vocabulary
          </h2>
          <p>
            To connect your paragraphs and create a cohesive flow, you need transition words. Here is categorized vocabulary essential for intermediate writing:
          </p>
          
          <table className="min-w-full text-left border-collapse mt-4 mb-8">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="py-3 px-4 font-bold text-gray-700">Category</th>
                <th className="py-3 px-4 font-bold text-gray-700">Finnish Phrase</th>
                <th className="py-3 px-4 font-bold text-gray-700">Usage Note</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">Sequencing</td>
                <td className="py-3 px-4">Ensinnäkin... Toiseksi...</td>
                <td className="py-3 px-4">Use at the start of your body paragraphs to list arguments.</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="py-3 px-4 font-semibold">Giving Examples</td>
                <td className="py-3 px-4">Esimerkiksi... / Kuten...</td>
                <td className="py-3 px-4">Crucial for expanding on your main arguments.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">Concluding</td>
                <td className="py-3 px-4">Lopuksi... / Yhteenvetona...</td>
                <td className="py-3 px-4">Signals to the examiner that you are wrapping up.</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
            Scoring: Common Mistakes to Avoid
          </h2>
          <p>
            Examiners evaluate your text based on <em>tekstin rakentuminen</em> (text organization). Avoid these common structural mistakes:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Mistake: The "Wall of Text" format.</strong> Writing everything in one giant paragraph makes it hard to read. <br/><em>Correction:</em> Always use empty lines between your introduction, body paragraphs, and conclusion.</li>
            <li><strong>Mistake: Jumping straight to arguments.</strong> <br/><em>Correction:</em> Never start your essay with "Ensinnäkin". Always provide a 1-2 sentence introduction setting up the topic first.</li>
            <li><strong>Mistake: Abrupt endings.</strong> Stopping the essay right after your last argument leaves the text feeling unfinished. <br/><em>Correction:</em> Dedicate the final 1-2 sentences entirely to a summary or a future hope.</li>
          </ul>

        </article>

        {/* Internal Links - Related Articles */}
        <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
          <ul className="space-y-2">
            <li><Link href="/wiki/guides/how-to-write-an-opinion-text-in-finnish" className="text-blue-700 hover:underline">How to Write an Opinion Text in Finnish: YKI Writing Task 2 Strategy</Link></li>
            <li><Link href="/wiki/scoring/yki-opinion-writing-scoring" className="text-blue-700 hover:underline">YKI Opinion Writing Scoring: How Examiners Grade Your Essay</Link></li>
          </ul>
        </nav>

        {/* CTA Section */}
        <section className="mt-16 bg-blue-900 rounded-2xl p-10 text-center shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Practice Your Writing Structure Today
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Put this framework into action. Submit your essays to ExamCoach.ai and receive instant, personalized feedback on your structure, vocabulary, and grammar based on official YKI standards.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-md"
          >
            Start Your Practice Session
          </Link>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How many paragraphs should my YKI opinion essay have?</h3>
              <p className="text-gray-600">An ideal Finnish essay structure consists of 4 paragraphs: an introduction, two body paragraphs (arguments), and a conclusion.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do I need to include opposing arguments?</h3>
              <p className="text-gray-600">While not strictly required for a B1 pass, briefly mentioning an opposing view and countering it (e.g., using &quot;toisaalta&quot;) shows a strong B1-B2 writing structure and boosts your score.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How are paragraphs separated in the YKI test?</h3>
              <p className="text-gray-600">You should leave a clear empty line between paragraphs. This makes your YKI writing format easy to read for the examiners.</p>
            </div>

          </div>
        </section>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>
    </div>
  );
}