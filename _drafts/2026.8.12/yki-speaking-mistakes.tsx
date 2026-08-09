import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Common YKI Speaking Mistakes and How to Improve | ExamCoach.ai',
  description: 'Avoid the most common YKI speaking mistakes during your Finnish exam. Learn practical tips, fixes for Finnish speaking errors, and boost your YKI preparation.',
};

export default function YkiSpeakingMistakesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the biggest mistake in the YKI speaking test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most significant mistake is silence. Because the exam is recorded in a language lab, examiners cannot grade silence. It is always better to speak with mistakes than to say nothing at all."
        }
      },
      {
        "@type": "Question",
        "name": "Are grammar mistakes heavily penalized in the YKI speaking section?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minor Finnish speaking errors are expected and tolerated, especially at the intermediate (keskitaso) level. Fluency and successfully communicating your message matter more than perfect grammar."
        }
      },
      {
        "@type": "Question",
        "name": "How should I structure my YKI preparation for the speaking test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your YKI preparation should include simulated speaking environments. Practice recording yourself speaking for 1 to 2 minutes on various topics to get used to the strict time limits of the exam."
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="prose prose-lg prose-blue max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Common YKI Speaking Mistakes and How to Improve
        </h1>

        <p className="lead text-xl text-gray-700 mb-8">
          The speaking section (Puhuminen) of the Finnish National Certificate of Language Proficiency (YKI) test often causes the most anxiety for test-takers. Under strict time limits and in a noisy language lab, it is easy to stumble. By understanding the most common <strong>YKI speaking mistakes</strong>, you can adjust your strategy, minimize panic, and maximize your score on test day.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mt-10 mb-4">
          The 4 Biggest YKI Speaking Mistakes
        </h2>
        
        <p className="mb-6 text-gray-700">
          Effective <em>YKI preparation</em> requires knowing what the examiners are looking for—and what red flags lower your score. Below are the most frequent pitfalls and how to correct them.
        </p>

        <div className="space-y-12">
          {/* Mistake 1 */}
          <section className="bg-red-50 rounded-lg p-8 border border-red-100">
            <h3 className="text-2xl font-bold text-red-800 mb-2">
              Mistake 1: The "Dead Air" Silence
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>The Problem:</strong> When faced with a difficult prompt, many candidates freeze. They spend 30 seconds of their 1-minute speaking slot trying to formulate the perfect Finnish sentence in their head. The examiners hear only silence, which means they have zero language production to evaluate.
            </p>
            <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
              <h4 className="font-bold text-green-700 mb-2">The Correction: Use Filler Words</h4>
              <p className="text-gray-700">
                Never stay completely silent. Buy yourself time using natural Finnish filler phrases while you gather your thoughts. If you don&apos;t know a word, explain around it (circumlocution).
              </p>
              <ul className="list-disc pl-5 mt-3 text-gray-700">
                <li><em>&quot;Tuota noin, antaa minun miettiä...&quot;</em> (Well, let me think...)</li>
                <li><em>&quot;Tämä on vaikea kysymys, mutta mielestäni...&quot;</em> (This is a difficult question, but I think...)</li>
                <li><em>&quot;Siis, tarkoitan että...&quot;</em> (So, I mean that...)</li>
              </ul>
            </div>
          </section>

          {/* Mistake 2 */}
          <section className="bg-red-50 rounded-lg p-8 border border-red-100">
            <h3 className="text-2xl font-bold text-red-800 mb-2">
              Mistake 2: Over-Correcting Finnish Speaking Errors
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>The Problem:</strong> You say <em>&quot;Menin talolla&quot;</em> instead of <em>&quot;Menin taloon&quot;</em>. You realize your mistake, stop your story, and spend the next 10 seconds stuttering to fix the case ending. Constant self-correction ruins your fluency and makes you sound less confident.
            </p>
            <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
              <h4 className="font-bold text-green-700 mb-2">The Correction: Prioritize Flow Over Perfection</h4>
              <p className="text-gray-700">
                At the intermediate level (B1/B2), examiners expect to hear <strong>Finnish speaking errors</strong>. They evaluate your overall ability to convey a message, not absolute grammatical perfection. If you make a mistake but the meaning is clear, ignore it and keep talking. Only self-correct if the error completely changes the meaning of your sentence.
              </p>
            </div>
          </section>

          {/* Mistake 3 */}
          <section className="bg-red-50 rounded-lg p-8 border border-red-100">
            <h3 className="text-2xl font-bold text-red-800 mb-2">
              Mistake 3: Ignoring Parts of the Prompt
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>The Problem:</strong> The prompt asks you to 1) Complain about a broken product, 2) Explain how it broke, and 3) Ask for a refund. Candidates often focus entirely on complaining and run out of time before asking for the refund. Failing to address the whole prompt prevents you from demonstrating different language functions.
            </p>
            <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
              <h4 className="font-bold text-green-700 mb-2">The Correction: The Pacing Strategy</h4>
              <p className="text-gray-700">
                Mentally divide your time. If you have 60 seconds and 3 tasks, aim for 1-2 sentences per task. Move forward aggressively. It is better to give a simple answer to all three bullet points than a highly complex answer to just one.
              </p>
            </div>
          </section>

          {/* Mistake 4 */}
          <section className="bg-red-50 rounded-lg p-8 border border-red-100">
            <h3 className="text-2xl font-bold text-red-800 mb-2">
              Mistake 4: Trying to Sound Like a Dictionary (Kirjakieli Trap)
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>The Problem:</strong> Test-takers often try to use overly complicated standard Finnish (kirjakieli) vocabulary that they aren&apos;t comfortable pronouncing. This leads to slow, robotic speech that lacks natural intonation.
            </p>
            <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
              <h4 className="font-bold text-green-700 mb-2">The Correction: Speak in Your Comfort Zone</h4>
              <p className="text-gray-700">
                Spoken Finnish (puhekieli) is 100% acceptable and often preferred in the speaking section, especially in simulated dialogue tasks. Use the vocabulary you know best. Simple, flowing language always outscores complex, stumbling language.
              </p>
            </div>
          </section>
        </div>
      </article>

      <div className="my-16 border-t border-gray-200"></div>

      {/* CTA Section */}
      <section className="bg-blue-600 rounded-2xl p-10 text-center text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Master the YKI Speaking Test?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
          Stop worrying about common mistakes and start speaking with confidence. Practice with our AI-driven simulated speaking tests and get instant feedback on your performance.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-white text-blue-700 font-bold text-lg py-4 px-10 rounded-full hover:bg-gray-50 transition-colors shadow-md"
        >
          Start Practicing Today
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">What is the biggest mistake in the YKI speaking test?</h3>
            <p className="text-gray-600">
              The most significant mistake is silence. Because the exam is recorded in a language lab, examiners cannot grade silence. It is always better to speak with mistakes than to say nothing at all.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Are grammar mistakes heavily penalized in the YKI speaking section?</h3>
            <p className="text-gray-600">
              Minor Finnish speaking errors are expected and tolerated, especially at the intermediate (keskitaso) level. Fluency and successfully communicating your message matter more than perfect grammar.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">How should I structure my YKI preparation for the speaking test?</h3>
            <p className="text-gray-600">
              Your YKI preparation should include simulated speaking environments. Practice recording yourself speaking for 1 to 2 minutes on various topics to get used to the strict time limits of the exam.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}