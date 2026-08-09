import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Speaking Templates: Useful Finnish Speaking Structures',
  description: 'Master the YKI Finnish exam with these practical YKI speaking templates. Learn useful Finnish speaking phrases to structure your YKI speaking answers effectively.',
  alternates: {
    canonical: '/yki-speaking-templates',
  },
};

export default function YkiSpeakingTemplates() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I memorize YKI speaking templates for the test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While you should avoid memorizing full scripted answers, learning structural frameworks and transition phrases is highly recommended. Using templates helps you organize your thoughts quickly under time pressure and demonstrate fluency."
        }
      },
      {
        "@type": "Question",
        "name": "How much time do I have to prepare my YKI speaking answers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depending on the specific task in the YKI speaking subtest, you generally have only a few seconds to prepare before the beep sounds. This is why having ready-made structures in your mind is essential."
        }
      },
      {
        "@type": "Question",
        "name": "Are basic Finnish speaking phrases enough to pass the intermediate YKI test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basic phrases are a good start, but to pass the intermediate level (B1-B2), you need to demonstrate the ability to justify opinions, describe situations in detail, and use appropriate social register (formal vs. informal)."
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="prose prose-lg prose-blue max-w-none">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            YKI Speaking Templates: Useful Finnish Speaking Structures
          </h1>
          <p className="text-xl text-gray-600">
            Boost your fluency and confidence in the YKI Finnish test with reusable frameworks.
          </p>
        </header>

        <section className="mb-10">
          <p>
            When preparing for the YKI Finnish test (Yleinen kielitutkinto), the speaking section is often the most intimidating. The language lab environment, strict time limits, and sudden audio prompts can cause even well-prepared candidates to freeze. That is exactly why mastering <strong>YKI speaking templates</strong> is one of the most effective strategies for passing the exam.
          </p>
          <p>
            By relying on pre-memorized structures, you reduce cognitive load and buy yourself precious seconds to think about your actual vocabulary. In this guide, we will provide you with reusable templates and categorized <strong>Finnish speaking phrases</strong> to ensure your <strong>YKI speaking answers</strong> are coherent, grammatically accurate, and precisely what the examiners are looking for.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Use YKI Speaking Templates?
          </h2>
          <p>
            Examiners in the YKI test evaluate your ability to communicate effectively in various everyday situations. They look for your ability to express opinions, react to unexpected situations, and give advice. Templates give your responses a clear beginning, middle, and end. They ensure that you don't abruptly stop speaking before the time is up, and they prevent you from rambling off-topic.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Template 1: Expressing and Justifying an Opinion
          </h2>
          <p>
            In almost every YKI test, you will be asked to share your opinion on a general topic (e.g., remote work, public transportation, or environmental issues). A strong B1/B2 response requires you to state your view clearly and back it up with reasons.
          </p>
          
          <div className="bg-gray-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-semibold mb-2">The Framework</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>State your opinion directly:</strong> "In my opinion..."</li>
              <li><strong>Provide the first reason:</strong> "Firstly..."</li>
              <li><strong>Provide a second reason or elaborate:</strong> "Secondly,..." or "In addition..."</li>
              <li><strong>Conclude briefly:</strong> "Therefore..."</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Useful Finnish Speaking Phrases</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li><em>Minun mielestäni...</em> (In my opinion...)</li>
            <li><em>Olen sitä mieltä, että...</em> (I am of the opinion that...)</li>
            <li><em>Ensinnäkin...</em> (Firstly...)</li>
            <li><em>Toiseksi...</em> (Secondly...)</li>
            <li><em>Lisäksi...</em> (In addition...)</li>
            <li><em>Tästä syystä...</em> (For this reason...)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Example Application</h3>
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
            <p className="font-semibold mb-2">Prompt: What do you think about remote work?</p>
            <p className="italic text-gray-700">
              "Minun mielestäni etätyö on erittäin hyvä asia. Ensinnäkin se säästää paljon aikaa, koska minun ei tarvitse matkustaa työpaikalle. Toiseksi, pystyn keskittymään paremmin kotona, kun on hiljaista. Lisäksi se auttaa vähentämään stressiä. Tästä syystä toivon, että voin tehdä etätyötä myös tulevaisuudessa."
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Template 2: Reacting to a Problem or Complaining
          </h2>
          <p>
            Situational tasks often require you to complain about a faulty product, a billing error, or poor service. The tone here should be polite but firm.
          </p>

          <div className="bg-gray-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-semibold mb-2">The Framework</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Greeting and context:</strong> "Hello, I am calling about..."</li>
              <li><strong>State the problem clearly:</strong> "Unfortunately, there is a problem with..."</li>
              <li><strong>Demand a solution:</strong> "Could you please fix this / give a refund?"</li>
              <li><strong>Polite closing:</strong> "Thank you for your help."</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Useful Finnish Speaking Phrases</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li><em>Hei, soitan koskien...</em> (Hi, I am calling regarding...)</li>
            <li><em>Valitettavasti tässä on ongelma.</em> (Unfortunately, there is a problem here.)</li>
            <li><em>Haluaisin reklamoida tästä.</em> (I would like to complain about this.)</li>
            <li><em>Miten voisimme ratkaista tämän?</em> (How could we solve this?)</li>
            <li><em>Voisinko saada rahani takaisin?</em> (Could I get my money back?)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Template 3: Giving Advice and Recommendations
          </h2>
          <p>
            Another common scenario is a friend asking for advice (e.g., how to learn Finnish, where to travel, or what to do when sick). Crafting strong YKI speaking answers here requires conditional forms (isi).
          </p>

          <div className="bg-gray-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-semibold mb-2">The Framework</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Empathize or acknowledge:</strong> "That sounds tough / exciting!"</li>
              <li><strong>Give primary advice:</strong> "If I were you, I would..."</li>
              <li><strong>Give an alternative or addition:</strong> "You should also try to..."</li>
              <li><strong>Encouraging closing:</strong> "Good luck!"</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Useful Finnish Speaking Phrases</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li><em>Jos olisin sinä, minä... (+ isi)</em> (If I were you, I would...)</li>
            <li><em>Sinun kannattaa...</em> (You should/It is worth it for you to...)</li>
            <li><em>Suosittelen, että...</em> (I recommend that...)</li>
            <li><em>Mitä jos...?</em> (What if...?)</li>
            <li><em>Tsemppiä!</em> (Good luck/Cheer up!)</li>
          </ul>
        </section>
      </article>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white rounded-xl p-8 my-12 text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Perfect Your Speaking Skills?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Don't let the language lab environment intimidate you. Practice these templates with simulated tests and get instant feedback on your performance.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200"
        >
          Start Practicing with ExamCoach.ai
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="my-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I memorize YKI speaking templates for the test?</h3>
            <p className="text-gray-700">While you should avoid memorizing full scripted answers, learning structural frameworks and transition phrases is highly recommended. Using templates helps you organize your thoughts quickly under time pressure and demonstrate fluency.</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">How much time do I have to prepare my YKI speaking answers?</h3>
            <p className="text-gray-700">Depending on the specific task in the YKI speaking subtest, you generally have only a few seconds to prepare before the beep sounds. This is why having ready-made structures in your mind is essential.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Are basic Finnish speaking phrases enough to pass the intermediate YKI test?</h3>
            <p className="text-gray-700">Basic phrases are a good start, but to pass the intermediate level (B1-B2), you need to demonstrate the ability to justify opinions, describe situations in detail, and use appropriate social register (formal vs. informal).</p>
          </div>
        </div>
      </section>
    </main>
  );
}