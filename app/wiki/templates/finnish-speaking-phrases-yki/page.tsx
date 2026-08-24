import Link from 'next/link';
import { Metadata } from 'next';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('templates', 'finnish-speaking-phrases-yki', {
  title: 'YKI Writing: Finnish Speaking Phrases for YKI Test | ExamCoach.ai',
  description: 'Master essential Finnish speaking phrases YKI to boost your oral exam score. Discover categorized YKI vocabulary and conversational phrases.',
});

export default function FinnishSpeakingPhrasesYkiPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many Finnish speaking phrases YKI should I memorize?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You do not need to memorize hundreds of phrases. Focus on mastering 20 to 30 versatile phrases that cover expressing opinions, agreeing, disagreeing, and handling customer service situations. Fluency and appropriate usage are more important than sheer volume."
        }
      },
      {
        "@type": "Question",
        "name": "Are these Finnish conversation phrases formal or informal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The YKI test requires a mix of both depending on the scenario. Speaking to a friend requires spoken language (puhekieli), while making an official complaint or speaking to a doctor requires a more standard, polite register (yleiskieli)."
        }
      },
      {
        "@type": "Question",
        "name": "How is YKI vocabulary evaluated in the speaking test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Examiners assess whether your YKI vocabulary is broad enough to handle everyday situations without excessive pausing. They look for your ability to use conversational fillers and structurally appropriate phrases to convey your message clearly."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="bg-white rounded-xl shadow-sm p-8 md:p-12">
          
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Finnish Speaking Phrases for YKI Test: Your Ultimate Guide
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              To succeed in the YKI test, memorizing grammar isn't enough; you need the right <strong>Finnish speaking phrases YKI</strong> to navigate real-world scenarios confidently. The speaking subtest (Puhuminen) evaluates your ability to handle everyday situations, express opinions, and participate in discussions smoothly. In this guide, we provide you with the most effective, categorized phrases to boost your fluency and help you achieve that essential intermediate Level 3 or 4.
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
              Why Finnish Speaking Phrases YKI Matter
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The YKI speaking test moves quickly. You will wear a headset and have limited time to record your answers to various prompts, ranging from casual conversations to formal complaints. By memorizing flexible <strong>Finnish conversation phrases</strong>, you reduce the cognitive load of formulating sentences from scratch under time pressure. This allows you to focus on pronunciation, intonation, and directly addressing the prompt.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
              Categorized YKI Vocabulary for the Speaking Test
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Below, we have categorized the most useful phrases based on common YKI speaking tasks. Practice these aloud to build muscle memory.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Expressing Opinions (Mielipiteen ilmaiseminen)</h3>
              <p className="text-gray-700 mb-4">
                In almost every YKI exam, you will be asked to share your thoughts on a topic (e.g., recycling, remote work, or health). 
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-blue-50 text-blue-900">
                      <th className="p-3 border border-blue-200">Finnish Phrase</th>
                      <th className="p-3 border border-blue-200">English Meaning</th>
                      <th className="p-3 border border-blue-200">YKI Context Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium">Minun mielestäni...</td>
                      <td className="p-3 border border-gray-200">In my opinion...</td>
                      <td className="p-3 border border-gray-200">Minun mielestäni etätyö on tehokasta.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 border border-gray-200 font-medium">Olen sitä mieltä, että...</td>
                      <td className="p-3 border border-gray-200">I am of the opinion that...</td>
                      <td className="p-3 border border-gray-200">Olen sitä mieltä, että julkinen liikenne on liian kallista.</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium">Uskon, että...</td>
                      <td className="p-3 border border-gray-200">I believe that...</td>
                      <td className="p-3 border border-gray-200">Uskon, että tilanne paranee pian.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Agreeing and Disagreeing (Samaa ja eri mieltä oleminen)</h3>
              <p className="text-gray-700 mb-4">
                During the simulated conversation tasks, you must react naturally to statements made by the recording.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-blue-50 text-blue-900">
                      <th className="p-3 border border-blue-200">Finnish Phrase</th>
                      <th className="p-3 border border-blue-200">English Meaning</th>
                      <th className="p-3 border border-blue-200">YKI Context Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium text-green-700">Olen täysin samaa mieltä.</td>
                      <td className="p-3 border border-gray-200">I completely agree.</td>
                      <td className="p-3 border border-gray-200">Olen täysin samaa mieltä kanssasi tästä asiasta.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 border border-gray-200 font-medium text-green-700">Pitää paikkansa.</td>
                      <td className="p-3 border border-gray-200">That is true / That holds true.</td>
                      <td className="p-3 border border-gray-200">Tuo pitää paikkansa, mutta...</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 font-medium text-red-700">Olen eri mieltä.</td>
                      <td className="p-3 border border-gray-200">I disagree.</td>
                      <td className="p-3 border border-gray-200">Olen eri mieltä, koska se on liian kallista.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Solving Problems & Making Complaints (Ongelmanratkaisu ja reklamaatio)</h3>
              <p className="text-gray-700 mb-4">
                A classic YKI speaking task involves a problem: calling a landlord about a broken appliance, or returning a faulty item to a store. Your <strong>YKI vocabulary</strong> must reflect polite but firm communication.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li><strong>Haluaisin reklamoida... (I would like to complain about...)</strong> - Use this when returning items or dealing with bad service. <em>Example: Haluaisin reklamoida tästä takista, koska siinä on reikä.</em></li>
                <li><strong>Valitettavasti minulla on ongelma. (Unfortunately, I have a problem.)</strong> - A perfect polite opener for any issue.</li>
                <li><strong>Voisitko auttaa minua? (Could you help me?)</strong> - Crucial for requesting assistance from customer service.</li>
                <li><strong>Miten voimme ratkaista tämän? (How can we solve this?)</strong> - Shows the examiner you can actively participate in resolving an issue.</li>
              </ul>
            </div>
          </section>

          <section className="mb-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Common Speaking Mistakes to Avoid</h2>
            <p className="text-gray-700 mb-4">
              When applying these phrases, YKI candidates often make a few predictable errors. Here is how to correct them to secure your score:
            </p>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="font-semibold text-gray-800">Mistake: Long pauses and silence.</span>
                <span className="text-gray-600">Correction: If you forget a word, use filler phrases like <em>"Tuota noin..."</em> (Well...) or <em>"Miten sen sanoisi..."</em> (How should I say it...) to keep the audio recording active.</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-gray-800">Mistake: Using overly complicated grammar.</span>
                <span className="text-gray-600">Correction: Stick to standard conversational structures. The examiner is testing communication, not your ability to use rare participle forms. Keep your sentences short and clear.</span>
              </li>
            </ul>
          </section>

        </article>

        {/* CTA Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-10 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Ace the YKI Speaking Test?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Don't let the speaking test hold you back. Practice these phrases and more with our specialized YKI training materials. 
          </p>
          <Link 
            href="#faq"
            className="inline-block bg-white text-blue-700 font-semibold text-lg px-8 py-4 rounded-full shadow hover:bg-gray-100 transition duration-300"
          >
            Review FAQ Below
          </Link>
        </section>

        {/* Related Articles */}
        <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
          <ul className="space-y-2">
            <li><Link href="/wiki/essays/yki-speaking-examples" className="text-blue-700 hover:underline">YKI Speaking Examples: Finnish Speaking Answers for B1-B2</Link></li>
            <li><Link href="/wiki/templates/yki-speaking-templates" className="text-blue-700 hover:underline">YKI Speaking Templates: Useful Finnish Speaking Structures</Link></li>
          </ul>
        </nav>

        {/* FAQ Section */}
        <section id="faq" className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How many Finnish speaking phrases YKI should I memorize?</h3>
              <p className="text-gray-600 leading-relaxed">
                You do not need to memorize hundreds of phrases. Focus on mastering 20 to 30 versatile phrases that cover expressing opinions, agreeing, disagreeing, and handling customer service situations. Fluency and appropriate usage are more important than sheer volume.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Are these Finnish conversation phrases formal or informal?</h3>
              <p className="text-gray-600 leading-relaxed">
                The YKI test requires a mix of both depending on the scenario. Speaking to a friend requires spoken language (puhekieli), while making an official complaint or speaking to a doctor requires a more standard, polite register (yleiskieli).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How is YKI vocabulary evaluated in the speaking test?</h3>
              <p className="text-gray-600 leading-relaxed">
                Examiners assess whether your YKI vocabulary is broad enough to handle everyday situations without excessive pausing. They look for your ability to use conversational fillers and structurally appropriate phrases to convey your message clearly.
              </p>
            </div>

          </div>
        </section>

      </main>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
