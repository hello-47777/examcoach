import Link from 'next/link';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('templates', 'express-opinion-finnish-yki', {
  title: 'How to Express Your Opinion in Finnish: YKI Task 3 Templates',
  description: 'Master YKI Task 3 with these reusable templates. Learn how to express opinion Finnish YKI style, find minun mielestäni alternatives, and structure arguments.',
});

export default function ExpressOpinionYkiPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I have to agree with the prompt in YKI Task 3?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, you do not have to agree with the prompt. The examiners are grading your Finnish language skills, not your personal beliefs. It is often best to choose the side you can argue most easily using the vocabulary you know."
        }
      },
      {
        "@type": "Question",
        "name": "How many arguments do I need for a good score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a strong B1 or B2 level score, you should aim for at least two well-developed arguments. Stating your opinion clearly and backing it up with a primary reason (ensinnäkin) and a secondary reason (toiseksi) shows excellent structural control."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use 'minun mielestäni' in every sentence?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Using 'minun mielestäni' once is perfectly fine, but repeating it constantly will limit your vocabulary score. To demonstrate B-level proficiency, you should use alternatives like 'Olen sitä mieltä, että...' or 'Uskon, että...'."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <main className="max-w-4xl mx-auto px-4 py-12 md:px-8">
        
        {/* Article Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-900 mb-4">
            How to Express Your Opinion in Finnish: YKI Task 3 Templates
          </h1>
          <p className="text-lg text-gray-600">
            Stop struggling to find the right words on exam day. Use these proven structural frameworks to formulate your arguments and ace the writing and speaking tests.
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none text-gray-800 space-y-8">
          <section>
            <p className="text-lg leading-relaxed">
              If you want to achieve a confident B1 or B2 level, knowing how to <strong>express opinion Finnish YKI</strong> style is absolutely critical. Task 3 of the writing test (mielipidekirjoitus) and several speaking prompts require you to take a firm stance on a topic and defend it. Memorizing a few high-level templates in advance will save you time, reduce stress, and ensure your answers meet the examiners&apos; criteria for structure and vocabulary.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-blue-800 mt-10 mb-4">
              Level Up: Minun mielestäni Alternatives
            </h2>
            <p className="leading-relaxed mb-4">
              The most common mistake candidates make is overusing <em>minun mielestäni</em> (in my opinion). While correct, relying on it too heavily signals a limited vocabulary. To impress the examiner, swap it out for these stronger <strong>Minun mielestäni alternatives</strong>:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="p-4 border-b border-blue-100 font-bold text-blue-900">Finnish Phrase</th>
                    <th className="p-4 border-b border-blue-100 font-bold text-blue-900">English Meaning</th>
                    <th className="p-4 border-b border-blue-100 font-bold text-blue-900">Best Used For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b border-gray-100"><em>Olen sitä mieltä, että...</em></td>
                    <td className="p-4 border-b border-gray-100">I am of the opinion that...</td>
                    <td className="p-4 border-b border-gray-100">Strong, formal introductions</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-100"><em>Uskon vahvasti, että...</em></td>
                    <td className="p-4 border-b border-gray-100">I strongly believe that...</td>
                    <td className="p-4 border-b border-gray-100">Emotional or firm stances</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-100"><em>Kokemukseni mukaan...</em></td>
                    <td className="p-4 border-b border-gray-100">In my experience...</td>
                    <td className="p-4 border-b border-gray-100">Providing personal examples</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-100"><em>Mielestäni on tärkeää...</em></td>
                    <td className="p-4 border-b border-gray-100">I think it is important...</td>
                    <td className="p-4 border-b border-gray-100">Highlighting a specific issue</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-blue-800 mt-10 mb-4">
              How to Agree and Disagree in Finnish
            </h2>
            <p className="leading-relaxed mb-4">
              Many YKI prompts ask you to respond to a statement (e.g., "Cars should be banned in the city center"). You must know how to quickly <strong>agree and disagree in Finnish</strong> while maintaining a polite and formal tone.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="text-xl font-bold text-green-900 mb-3">Agreeing (Samaa mieltä)</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-800">
                  <li><strong>Olen täysin samaa mieltä.</strong> (I completely agree.)</li>
                  <li><strong>Olet oikeassa.</strong> (You are right. - <em>Speaking test</em>)</li>
                  <li><strong>Tämä on erittäin hyvä idea, koska...</strong> (This is a very good idea, because...)</li>
                  <li><strong>Kuten tekstissä sanotaan...</strong> (As it says in the text...)</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h3 className="text-xl font-bold text-red-900 mb-3">Disagreeing (Eri mieltä)</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-800">
                  <li><strong>Olen täysin eri mieltä.</strong> (I completely disagree.)</li>
                  <li><strong>En ole samaa mieltä tästä asiasta.</strong> (I do not agree on this matter.)</li>
                  <li><strong>Ymmärrän idean, mutta toisaalta...</strong> (I understand the idea, but on the other hand...)</li>
                  <li><strong>Tämä on huono ratkaisu, sillä...</strong> (This is a bad solution, because...)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-blue-800 mt-10 mb-4">
              Essential YKI Argument Phrases
            </h2>
            <p className="leading-relaxed mb-4">
              Once you state your opinion, you must justify it. The difference between A2 and B1/B2 writing often comes down to transition words. Use these <strong>YKI argument phrases</strong> to connect your sentences logically.
            </p>
            <ul className="list-decimal pl-6 space-y-3 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <li><strong>Structuring points:</strong> <em>Ensinnäkin</em> (Firstly), <em>Toiseksi</em> (Secondly), <em>Lopuksi</em> (Finally).</li>
              <li><strong>Adding information:</strong> <em>Lisäksi</em> (In addition), <em>Myös</em> (Also), <em>Sen lisäksi</em> (Besides that).</li>
              <li><strong>Showing cause:</strong> <em>Koska</em> (Because), <em>Siksi, että</em> (Because of the fact that), <em>Tämän takia</em> (Because of this).</li>
              <li><strong>Showing contrast:</strong> <em>Kuitenkin</em> (However), <em>Toisaalta</em> (On the other hand), <em>Vaikka</em> (Even though).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-blue-800 mt-10 mb-4">
              The Master Template to Express Opinion Finnish YKI Tasks
            </h2>
            <p className="leading-relaxed mb-4">
              Copy this reusable framework. Whenever you practice a YKI writing prompt, try plugging your vocabulary into this exact structure.
            </p>
            
            <div className="bg-blue-900 text-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-100 border-b border-blue-700 pb-2">YKI Opinion Piece Framework</h3>
              
              <div className="space-y-4">
                <div>
                  <strong className="text-blue-300 block mb-1">Paragraph 1: The Introduction</strong>
                  <p className="italic bg-blue-800 p-3 rounded">
                    Kirjoitan tästä aiheesta, koska se on nykyään erittäin tärkeä. Olen sitä mieltä, että [STATE YOUR OPINION CLEARLY].
                  </p>
                </div>
                
                <div>
                  <strong className="text-blue-300 block mb-1">Paragraph 2: First Argument</strong>
                  <p className="italic bg-blue-800 p-3 rounded">
                    Ensinnäkin, [YOUR FIRST REASON]. Tämä tarkoittaa sitä, että [EXPLAIN THE REASON BRIEFLY]. Esimerkiksi [GIVE A QUICK EXAMPLE].
                  </p>
                </div>
                
                <div>
                  <strong className="text-blue-300 block mb-1">Paragraph 3: Second Argument</strong>
                  <p className="italic bg-blue-800 p-3 rounded">
                    Toiseksi, [YOUR SECOND REASON]. Lisäksi on tärkeää muistaa, että [ADDITIONAL DETAIL].
                  </p>
                </div>

                <div>
                  <strong className="text-blue-300 block mb-1">Paragraph 4: The Conclusion</strong>
                  <p className="italic bg-blue-800 p-3 rounded">
                    Lopuksi toivon, että [WHAT YOU HOPE HAPPENS IN THE FUTURE]. Tämä on paras ratkaisu kaikille.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>

        {/* CTA Section */}
        <section className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to test these templates?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            Apply these phrases to real YKI test scenarios. Practice your writing and get instant AI feedback on your grammar, structure, and vocabulary.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-blue-700 font-bold text-lg py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-md"
          >
            Start Practicing Now
          </Link>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 pt-10 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {faqData.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-blue-900 mb-2">{faq.name}</h3>
                <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />

      </main>
    </div>
  );
}