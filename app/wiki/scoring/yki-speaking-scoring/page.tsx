import Link from 'next/link';
import { Metadata } from 'next';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('scoring', 'yki-speaking-scoring', {
  title: 'YKI Writing: How YKI Speaking is Scored: Examiner Criteria Explained | ExamCoach.ai',
  description: 'Understand the YKI speaking scoring system, learn what examiners look for during the YKI oral assessment, and improve your Finnish speaking evaluation.',
});

export default function YKISpeakingScoringPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the most important factor in YKI speaking scoring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most crucial factor in YKI speaking scoring is communicative competence. Examiners evaluate whether you can successfully convey your message and handle the given situation, even if you make grammatical mistakes."
        }
      },
      {
        "@type": "Question",
        "name": "Will poor pronunciation ruin my Finnish speaking evaluation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. In a Finnish speaking evaluation for the intermediate level (Level 3 or 4), your pronunciation does not need to be native-like. It only needs to be clear enough that the examiner can understand your message without significant effort."
        }
      },
      {
        "@type": "Question",
        "name": "How is the YKI oral assessment structured for scoring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The YKI oral assessment is scored based on different types of speaking tasks, including reacting to situations, participating in conversations, and delivering a sustained monologue. Examiners grade your overall performance across all these tasks combined."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-gray-900 font-sans">
      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Header Section */}
        <header className="px-8 py-10 border-b border-gray-100 bg-blue-50/30">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            How YKI Speaking is Scored: Examiner Criteria Explained
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Understanding exactly how <strong>YKI speaking scoring</strong> works is the secret to passing the intermediate Finnish test. Many candidates fail not because their Finnish is poor, but because they do not understand what the examiners are actually grading.
          </p>
        </header>

        {/* Content Section */}
        <div className="px-8 py-10 space-y-12">
          
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              The Foundation of YKI Speaking Scoring
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The YKI speaking scoring system is built on a specific set of criteria established by the Finnish National Agency for Education. Unlike traditional classroom tests where every grammar mistake deducts a point, the YKI test utilizes a holistic approach. 
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              To achieve a passing grade (Level 3) in the intermediate test, you do not need perfect Finnish. You need functional Finnish. The examiners break their evaluation down into four core categories.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">The 4 Official Grading Criteria</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900 block">1. Task Completion (Viestinnällinen onnistuminen)</strong>
                    <span className="text-gray-700">Did you answer the prompt? If the prompt asks you to complain about a broken heater, you must make a clear complaint. If you just describe the heater without complaining, you lose points here.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900 block">2. Fluency (Sujuvuus)</strong>
                    <span className="text-gray-700">Can you speak without painfully long pauses? Examiners expect some hesitation at Level 3, but the conversation flow should not completely break down.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900 block">3. Pronunciation (Ääntäminen)</strong>
                    <span className="text-gray-700">Is your speech intelligible? You are allowed to have a heavy foreign accent, provided the examiner does not have to guess what Finnish words you are trying to say.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900 block">4. Vocabulary and Structures (Sanasto ja rakenteet)</strong>
                    <span className="text-gray-700">Do you use enough words to express yourself? Are you attempting basic sentences? Examiners look for a functional range of vocabulary rather than complex, flawless grammar.</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What Examiners Look For in the YKI Oral Assessment
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              During the <strong>YKI oral assessment</strong>, you speak into a headset in a language lab. Since the examiner is not in the room with you, your voice recording must stand alone. This environment influences how examiners grade your performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="font-bold text-gray-900 text-lg mb-2">Level 3 (Passing)</h4>
                <p className="text-gray-600">You can handle everyday situations independently. You might make frequent grammar errors (like mixing up partitive and genitive), but your core message is always clear to a native speaker used to talking with foreigners.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="font-bold text-gray-900 text-lg mb-2">Level 4 (Strong Pass)</h4>
                <p className="text-gray-600">You can express opinions and handle unexpected complications smoothly. Your vocabulary is more varied, and while you still make mistakes, they do not disrupt the flow of communication.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Common Mistakes That Ruin Your Finnish Speaking Evaluation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To maximize your score in the <strong>Finnish speaking evaluation</strong>, you must avoid the classic traps that lower candidate scores. Examiners frequently cite these three issues as reasons for failing grades:
            </p>
            
            <table className="w-full text-left border-collapse mt-6">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="py-3 px-4 font-semibold text-gray-900">Fatal Mistake</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Examiner&apos;s Perspective</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">How to Fix It</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-800 font-medium">Staying Silent</td>
                  <td className="py-4 px-4 text-gray-600">Silence cannot be graded. A blank recording gets zero points for that section.</td>
                  <td className="py-4 px-4 text-gray-600">Always say something. Use filler words (e.g., &quot;Tuota...&quot;, &quot;Hetkinen...&quot;) to buy time.</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-800 font-medium">Ignoring the Prompt</td>
                  <td className="py-4 px-4 text-gray-600">Fails the &quot;Task Completion&quot; criteria. Memorized monologues stand out negatively.</td>
                  <td className="py-4 px-4 text-gray-600">Listen carefully to the instructions. Address the specific problem presented.</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-800 font-medium">Over-correcting</td>
                  <td className="py-4 px-4 text-gray-600">Constantly stopping to fix grammar ruins the &quot;Fluency&quot; score.</td>
                  <td className="py-4 px-4 text-gray-600">Accept the mistake and keep talking. Confidence matters more than perfection.</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        {/* Related Articles */}
        <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
          <ul className="space-y-2">
            <li><Link href="/wiki/essays/yki-speaking-examples" className="text-blue-700 hover:underline">YKI Speaking Examples: Finnish Speaking Answers for B1-B2</Link></li>
            <li><Link href="/wiki/scoring/yki-opinion-writing-scoring" className="text-blue-700 hover:underline">YKI Opinion Writing Scoring: How Examiners Grade Your Essay</Link></li>
          </ul>
        </nav>

        {/* CTA Section */}
        <div className="bg-blue-600 px-8 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Master the YKI Speaking Criteria
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Stop guessing what the examiners want. Practice with our AI-driven speaking simulator that grades you based on the official YKI criteria.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-blue-600 font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:bg-gray-50 transition duration-200"
          >
            Start Practicing Today
          </Link>
        </div>

        {/* FAQ Section */}
        <section className="px-8 py-12 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.name}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

      </article>

      {/* JSON-LD Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
