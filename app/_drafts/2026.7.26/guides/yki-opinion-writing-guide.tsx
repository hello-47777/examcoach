import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Opinion Writing Guide: How to Write a Strong Finnish Opinion Text',
  description: 'Master YKI writing task 2 with our comprehensive YKI opinion writing guide. Learn the best structures, vocabulary, and examiner criteria for Finnish opinion writing.',
};

export default function YkiOpinionWritingGuidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long should the YKI opinion text be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the YKI keskitaso writing exam, aim for a clear, concise text of about 100 to 150 words. Focus on quality, clear structure, and directly answering the prompt rather than excessive length."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use informal language in the YKI opinion writing task?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is best to use standard written Finnish (kirjakieli) or semi-formal language for an opinion text. Avoid spoken language abbreviations (like 'mä', 'sä', 'mut') to show the examiners you can control the formal register."
        }
      },
      {
        "@type": "Question",
        "name": "What if I don't have a strong opinion on the exam topic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You do not need a genuine personal opinion to pass. The examiners only care about your Finnish skills. Pick the side that is easiest for you to argue and for which you know the most vocabulary."
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
      
      <main className="min-h-screen bg-gray-50 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          
          {/* Header Section */}
          <header className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              YKI Opinion Writing Guide: How to Write a Strong Finnish Opinion Text
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to master YKI writing task 2. Learn the structure, vocabulary, and exam criteria to write a high-scoring opinion piece.
            </p>
          </header>

          {/* Main Content */}
          <div className="prose prose-lg prose-blue mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm">
            
            <p className="lead">
              Welcome to the ultimate <strong>YKI opinion writing guide</strong>. If you are preparing for the intermediate Finnish exam, you already know that expressing your thoughts clearly is crucial. The opinion piece is a standard requirement, and mastering it can drastically improve your overall score. In this article, we will walk you through the complete process of creating a compelling opinion text.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Understanding YKI Writing Task 2
            </h2>
            <p>
              In the <strong>YKI writing task 2</strong>, you are typically presented with a statement or a short text and asked to express your opinion on the topic. The topics usually revolve around everyday societal issues, such as public transportation, remote work, healthy living, or environmental concerns. The goal is to see if you can construct a logical argument in Finnish, support it with reasons, and use appropriate vocabulary.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Step-by-Step YKI Opinion Writing Guide
            </h2>
            <p>
              A successful <strong>Finnish opinion writing</strong> response follows a predictable, easy-to-read structure. Examiners love texts that are organized logically. Follow these steps to build your response:
            </p>
            <ol className="list-decimal pl-6 mb-8 text-gray-700 space-y-2">
              <li><strong>Introduction:</strong> State the topic and clearly express your main opinion right away.</li>
              <li><strong>Argument 1:</strong> Provide your first supporting reason or personal example.</li>
              <li><strong>Argument 2 (Counter-argument or addition):</strong> Provide a second reason, or acknowledge the other side before defending your view.</li>
              <li><strong>Conclusion:</strong> Briefly summarize your stance.</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Finnish Opinion Writing Template
            </h2>
            <p>
              Having a reusable framework reduces exam anxiety. Here is a reliable template you can memorize for any <strong>opinion text Finnish</strong> task:
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <p className="font-bold text-blue-900 mb-2">Paragraph 1: Introduction</p>
              <p className="text-blue-800 mb-4"><em>Kirjoituksessa käsitellään... (The text discusses...). Olen täysin samaa mieltä siitä, että... (I completely agree that...).</em></p>
              
              <p className="font-bold text-blue-900 mb-2">Paragraph 2: Main Arguments</p>
              <p className="text-blue-800 mb-4"><em>Ensinnäkin... (Firstly...). Lisäksi on tärkeää muistaa, että... (Furthermore, it is important to remember that...). Esimerkiksi... (For example...).</em></p>
              
              <p className="font-bold text-blue-900 mb-2">Paragraph 3: Conclusion</p>
              <p className="text-blue-800"><em>Yhteenvetona voin sanoa, että... (In conclusion, I can say that...). Siksi toivon, että... (Therefore I hope that...).</em></p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Essential Vocabulary for Your Opinion Text
            </h2>
            <p>
              To score well in <strong>YKI keskitaso writing</strong>, you need to use transition words and opinion markers. Memorize these categorized phrases:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li><strong>Expressing opinion:</strong> Minun mielestäni (In my opinion), Uskon, että... (I believe that...), Olen sitä mieltä, että... (I am of the opinion that...).</li>
              <li><strong>Agreeing/Disagreeing:</strong> Olen samaa mieltä (I agree), Olen eri mieltä (I disagree).</li>
              <li><strong>Adding points:</strong> Myös (Also), Sen lisäksi (In addition to that), Toisaalta (On the other hand).</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Scoring Criteria and Common Mistakes
            </h2>
            <p>
              Examiners grade your writing based on message delivery, vocabulary, grammatical accuracy, and coherence.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded-r-lg">
              <p className="font-semibold text-red-800 m-0">Mistake 1: Not answering the prompt</p>
              <p className="text-red-700 mt-1 mb-0">Writing a beautiful essay about a slightly different topic will result in a low score. Always refer back to the exact question asked.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded-r-lg">
              <p className="font-semibold text-red-800 m-0">Mistake 2: Spoken language (Puhekieli)</p>
              <p className="text-red-700 mt-1 mb-0">Using informal words like <em>"mä"</em> instead of <em>"minä"</em>. <strong>Correction:</strong> Always use standard written Finnish (kirjakieli) for opinion texts.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-r-lg">
              <p className="font-semibold text-red-800 m-0">Mistake 3: Overcomplicating sentences</p>
              <p className="text-red-700 mt-1 mb-0">Trying to write long, English-style sentences that break Finnish grammar rules. <strong>Correction:</strong> Keep sentences short, clear, and grammatically accurate.</p>
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-blue-600 text-white rounded-xl p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Put Your Skills to the Test</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Ready to practice your opinion writing? Get instant AI feedback tailored to YKI criteria with ExamCoach.ai.
              </p>
              <Link 
                href="/register" 
                className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
              >
                Start Practicing for Free
              </Link>
            </div>

          </div>
        </article>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How long should the YKI opinion text be?
                </h3>
                <p className="text-gray-700">
                  For the YKI keskitaso writing exam, aim for a clear, concise text of about 100 to 150 words. Focus on quality, clear structure, and directly answering the prompt rather than excessive length.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Can I use informal language in the YKI opinion writing task?
                </h3>
                <p className="text-gray-700">
                  It is best to use standard written Finnish (kirjakieli) or semi-formal language for an opinion text. Avoid spoken language abbreviations (like &apos;mä&apos;, &apos;sä&apos;, &apos;mut&apos;) to show the examiners you can control the formal register.
                </p>
              </div>

              <div className="pt-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  What if I don&apos;t have a strong opinion on the exam topic?
                </h3>
                <p className="text-gray-700">
                  You do not need a genuine personal opinion to pass. The examiners only care about your Finnish skills. Pick the side that is easiest for you to argue and for which you know the most vocabulary.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}