import Link from 'next/link';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('templates', 'yki-linking-words-finnish', {
  title: '30 Essential YKI Linking Words Finnish for High-Scoring Essays',
  description: 'Master the essential YKI linking words in Finnish. Learn the most important Finnish conjunctions and essay vocabulary to boost your YKI test scores.',
});

export default function YkiLinkingWordsFinnishPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why are linking words important for the YKI Finnish exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Linking words (sidesanat) connect your ideas, making your text logical and cohesive. Examiners specifically look for these to award intermediate (B1/B2) scores, as they show you can move beyond simple, isolated sentences."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between 'mutta' and 'vaan'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both mean 'but', but 'vaan' is used after a negative statement to offer a direct alternative (e.g., 'Ei punainen, vaan sininen' - 'Not red, but blue'). 'Mutta' is a general contrast."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to memorize all of these Finnish conjunctions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. It is better to deeply learn 2-3 reliable linking words for each category (addition, contrast, cause, conclusion) and use them correctly rather than guessing with words you do not fully understand."
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="prose prose-lg prose-blue max-w-none">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            30 Essential YKI Linking Words Finnish for High-Scoring Essays
          </h1>
          <p className="text-xl text-gray-600">
            Elevate your intermediate Finnish writing with the critical vocabulary examiners look for in Task 3.
          </p>
        </header>

        <p>
          If you want to pass the intermediate (Keskitaso) exam, mastering <strong>YKI linking words Finnish</strong> is absolutely essential. Many test-takers get stuck at the A2 level because they write short, disconnected sentences. To reach the B1/B2 threshold, you must demonstrate cohesion—the ability to connect your thoughts logically. 
        </p>

        <p>
          In this guide, we provide the ultimate list of <em>sidesanat YKI</em> (linking words), categorized by their function in an essay. By weaving these into your writing, you will significantly improve your text&apos;s flow and your final score.
        </p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-12 mb-6">How YKI Linking Words Finnish Impact Your Score</h2>
        
        <p>
          Examiners grade your essays based on task completion, vocabulary, grammar, and <strong>cohesion</strong>. Linking words directly impact cohesion. A strong grasp of <strong>Finnish conjunctions</strong> signals to the grader that you can construct complex arguments, provide examples, and draw logical conclusions without relying on basic "ja" (and) and "mutta" (but) repeatedly.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Examiner Insight</h3>
          <p className="text-gray-700 m-0">
            A B1-level writer connects clauses using a variety of conjunctions (e.g., <em>koska, vaikka, jotta</em>) and organizes text clearly. If you only use simple sentences, you risk scoring below the passing threshold, even if your grammar is flawless.
          </p>
        </div>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-12 mb-6">Category 1: Adding Information (Lisäys)</h2>
        <p>
          Use this <strong>Finnish essay vocabulary</strong> when you want to build upon an argument or list multiple points.
        </p>
        
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Ja</strong> – And (Use sparingly, opt for higher-level alternatives below).</li>
          <li><strong>Lisäksi</strong> – Additionally / Furthermore. <br/><span className="text-gray-600 italic">Example: Helsinki on kaunis kaupunki. Lisäksi siellä on paljon tekemistä.</span></li>
          <li><strong>Myös</strong> – Also. (Remember: typically placed after the verb).</li>
          <li><strong>Sekä - että</strong> – Both - and. <br/><span className="text-gray-600 italic">Example: Pidän sekä kahvista että teestä.</span></li>
          <li><strong>Sen lisäksi</strong> – In addition to that.</li>
          <li><strong>Toisaalta... toisaalta</strong> – On the one hand... on the other hand.</li>
          <li><strong>Edelleen</strong> – Furthermore / Still.</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">Category 2: Contrasting Ideas (Vastakohta)</h2>
        <p>
          These words are vital for opinion essays when you need to acknowledge counter-arguments or show opposing viewpoints.
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Mutta</strong> – But.</li>
          <li><strong>Vaan</strong> – But (used strictly after a negative statement). <br/><span className="text-gray-600 italic">Example: Hän ei asu Turussa, vaan Tampereella.</span></li>
          <li><strong>Kuitenkin</strong> – However. <br/><span className="text-gray-600 italic">Example: Sää oli huono. Menimme kuitenkin ulos.</span></li>
          <li><strong>Vaikka</strong> – Although / Even though. <br/><span className="text-gray-600 italic">Example: Menin töihin, vaikka olin vähän sairas.</span></li>
          <li><strong>Huolimatta siitä, että</strong> – Despite the fact that. (Excellent for B1/B2 level).</li>
          <li><strong>Sen sijaan</strong> – Instead.</li>
          <li><strong>Päinvastoin</strong> – On the contrary.</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">Category 3: Expressing Cause and Effect (Syy ja Seuraus)</h2>
        <p>
          Explaining "why" something happens is a core requirement of YKI Task 3. Master these causal links.
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Koska</strong> – Because. <br/><span className="text-gray-600 italic">Example: Jään kotiin, koska sataa vettä.</span></li>
          <li><strong>Sillä</strong> – For / Because. (Slightly more formal than koska).</li>
          <li><strong>Siksi</strong> – Therefore / That is why.</li>
          <li><strong>Joten</strong> – So / Therefore. <br/><span className="text-gray-600 italic">Example: Olin väsynyt, joten menin nukkumaan.</span></li>
          <li><strong>Tästä syystä</strong> – For this reason.</li>
          <li><strong>Sen takia</strong> – Because of that.</li>
          <li><strong>Jotta</strong> – So that / In order to. <br/><span className="text-gray-600 italic">Example: Opiskelen ahkerasti, jotta läpäisisin YKI-testin.</span></li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">Category 4: Giving Examples and Emphasizing (Esimerkki ja Painotus)</h2>
        <p>
          Supporting your main arguments with clear examples makes your writing much more persuasive.
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Esimerkiksi</strong> – For example.</li>
          <li><strong>Muun muassa (mm.)</strong> – Among other things.</li>
          <li><strong>Erityisesti</strong> – Especially / Particularly. <br/><span className="text-gray-600 italic">Example: Tykkään urheilusta, erityisesti jalkapallosta.</span></li>
          <li><strong>Nimittäin</strong> – Namely / You see (used to clarify).</li>
          <li><strong>Todellakin</strong> – Indeed / Really.</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">Category 5: Concluding and Summarizing (Johtopäätös)</h2>
        <p>
          Every strong essay needs a definitive ending. Use these to wrap up your thoughts cleanly.
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Lopuksi</strong> – Finally / In conclusion.</li>
          <li><strong>Yhteenvetona</strong> – In summary. <br/><span className="text-gray-600 italic">Example: Yhteenvetona voidaan sanoa, että... (In summary, it can be said that...)</span></li>
          <li><strong>Niinpä</strong> – Thus / So.</li>
          <li><strong>Lyhyesti sanottuna</strong> – In short / Briefly.</li>
        </ul>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-12 mb-6">Common Mistakes with Sidesanat YKI (And How to Fix Them)</h2>
        
        <p>
          Even when test-takers know the right vocabulary, structural mistakes can hurt their score. Watch out for these common errors:
        </p>

        <ul className="list-none space-y-6">
          <li className="bg-red-50 p-5 border-l-4 border-red-500 rounded-r-md">
            <strong>Mistake: Overusing "Ja" and "Mutta"</strong><br />
            Starting every sentence with these basic words makes your text feel like an A1 level text.<br />
            <span className="text-green-700 font-semibold mt-2 inline-block">Correction:</span> Swap "mutta" for "kuitenkin" (however) or "toisaalta" (on the other hand). Swap "ja" for "lisäksi" (additionally).
          </li>
          <li className="bg-red-50 p-5 border-l-4 border-red-500 rounded-r-md">
            <strong>Mistake: Confusing "Koska" and "Siksi"</strong><br />
            <em>Koska</em> explains the reason (because). <em>Siksi</em> explains the result (therefore).<br />
            <span className="text-green-700 font-semibold mt-2 inline-block">Correction:</span> "Olen väsynyt, <strong>siksi</strong> nukun." (I am tired, therefore I sleep.) vs. "Nukun, <strong>koska</strong> olen väsynyt." (I sleep because I am tired.)
          </li>
          <li className="bg-red-50 p-5 border-l-4 border-red-500 rounded-r-md">
            <strong>Mistake: Incorrect placement of "Kuitenkin" and "Myös"</strong><br />
            Unlike in English, these words rarely start a sentence naturally in written Finnish. They usually come after the verb.<br />
            <span className="text-green-700 font-semibold mt-2 inline-block">Correction:</span> Do not write "Kuitenkin, minä haluan..." Write "Minä haluan <strong>kuitenkin</strong>..."
          </li>
        </ul>

      </article>

      {/* CTA Section */}
      <section className="mt-16 bg-blue-600 text-white rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Test Your Vocabulary?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
          Apply these linking words in our realistic YKI writing simulator. Get immediate feedback on your grammar, cohesion, and overall B1/B2 readiness.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-50 transition duration-300"
        >
          Start Practicing for Free
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Why are linking words important for the YKI Finnish exam?</h3>
            <p className="text-gray-600">
              Linking words (sidesanat) connect your ideas, making your text logical and cohesive. Examiners specifically look for these to award intermediate (B1/B2) scores, as they show you can move beyond simple, isolated sentences.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">What is the difference between &apos;mutta&apos; and &apos;vaan&apos;?</h3>
            <p className="text-gray-600">
              Both mean &apos;but&apos;, but &apos;vaan&apos; is used after a negative statement to offer a direct alternative (e.g., &apos;Ei punainen, vaan sininen&apos; - &apos;Not red, but blue&apos;). &apos;Mutta&apos; is a general contrast.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Do I need to memorize all of these Finnish conjunctions?</h3>
            <p className="text-gray-600">
              No. It is better to deeply learn 2-3 reliable linking words for each category (addition, contrast, cause, conclusion) and use them correctly rather than guessing with words you do not fully understand.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}