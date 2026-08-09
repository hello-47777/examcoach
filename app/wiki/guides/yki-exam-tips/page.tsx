import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Exam Tips: How to Prepare Efficiently | ExamCoach.ai',
  description: 'Master the Finnish intermediate language test with these proven YKI exam tips. Learn efficient YKI preparation techniques and a winning Finnish test strategy.',
  keywords: ['YKI exam tips', 'YKI preparation', 'Finnish test strategy', 'YKI test', 'Finnish exam preparation'],
  alternates: {
    canonical: '/wiki/guides/yki-exam-tips',
  },
};

export default function YkiExamTipsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much time do I need for YKI preparation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The ideal YKI preparation time depends on your current level. If you are at A2, plan for 3 to 6 months of focused daily practice to reach the required B1 level for the intermediate YKI exam."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best Finnish test strategy for the speaking section?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best strategy is to keep talking even if you make grammatical mistakes. Evaluators are looking for communicative competence. Use filler words, keep sentences relatively short, and respond directly to the prompt without overcomplicating your vocabulary."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need perfect grammar to pass the YKI exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The intermediate YKI exam (levels 3-4) focuses on your ability to handle everyday situations. While basic grammar should be solid, minor errors in cases or verb conjugations will not fail you if your overall message is clear and understandable."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      {/* JSON-LD Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
      />

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            YKI Exam Tips: How to Prepare Efficiently
          </h1>
          <p className="text-xl leading-relaxed">
            If you are aiming to achieve Finnish citizenship or prove your language skills for employment, mastering the right <strong>YKI exam tips</strong> is crucial. The Yleinen kielitutkinto (YKI) can feel overwhelming, but with the right approach, you can pass the intermediate test (keskitaso) on your first try.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-sm mt-8 rounded-lg">
        
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-2">
          Step-by-Step YKI Preparation Guide
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Effective <strong>YKI preparation</strong> is about studying smart, not just hard. The exam tests your ability to communicate in real-life scenarios, not your ability to memorize complex grammar rules. Follow these steps to optimize your study routine.
        </p>

        <div className="space-y-6 mb-10">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Step 1: Understand the Test Format</h3>
            <p className="text-gray-700">
              Familiarize yourself with the four subtests: Reading Comprehension, Writing, Listening Comprehension, and Speaking. Knowing the strict time limits for each section prevents panic on test day.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Step 2: Simulate Exam Conditions</h3>
            <p className="text-gray-700">
              Practice using a timer. During the actual speaking test in the language lab, you will only have 1-2 minutes to record your answers. Practice speaking into a microphone with background noise.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Step 3: Build a Topic-Based Vocabulary</h3>
            <p className="text-gray-700">
              The YKI exam heavily features specific themes: free time, work, environment, health, and services. Group your vocabulary practice around these distinct themes.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-2">
          Top YKI Exam Tips for Speaking and Writing
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          The productive sections (Speaking and Writing) are where most candidates struggle. Applying a solid <strong>Finnish test strategy</strong> here will drastically improve your scores.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Understanding the Examiner Scoring Criteria</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          At level 3 (B1), evaluators do not expect native-like fluency. They evaluate based on <strong>communicative success</strong>. 
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
          <li><strong>Task Fulfillment:</strong> Did you answer the specific prompt? (e.g., If asked to complain and suggest a solution, did you do both?)</li>
          <li><strong>Intelligibility:</strong> Is your message clear, despite grammatical errors?</li>
          <li><strong>Vocabulary Appropriateness:</strong> Are you using words suitable for the situation (formal vs. informal)?</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Common Mistakes and Corrections</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 border border-gray-200 font-semibold">Common Mistake</th>
                <th className="p-4 border border-gray-200 font-semibold">The Problem</th>
                <th className="p-4 border border-gray-200 font-semibold">The Correction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border border-gray-200 text-red-600 font-medium">Freezing to find the perfect case</td>
                <td className="p-4 border border-gray-200 text-gray-700">Silence eats up your limited recording time. You lose points for incomplete answers.</td>
                <td className="p-4 border border-gray-200 text-green-700 font-medium">Keep speaking. Use the nominative or a simpler phrasing if you forget the partitive/illative forms.</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-200 text-red-600 font-medium">Translating English idioms</td>
                <td className="p-4 border border-gray-200 text-gray-700">Literal translations often make no sense in Finnish, confusing the evaluator.</td>
                <td className="p-4 border border-gray-200 text-green-700 font-medium">Learn natural Finnish chunks. Say <em>&quot;Olen pahoillani&quot;</em> instead of trying to translate <em>&quot;My apologies for the inconvenience.&quot;</em></td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-200 text-red-600 font-medium">Ignoring the required tone</td>
                <td className="p-4 border border-gray-200 text-gray-700">Writing a complaint to a company using informal slang (<em>Moi, tää on surkee...</em>).</td>
                <td className="p-4 border border-gray-200 text-green-700 font-medium">Always identify if the prompt requires a formal (<em>Hei, Haluaisin antaa palautetta...</em>) or informal tone.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-2">
          Essential Vocabulary Frameworks (Templates)
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Memorize these categorized phrases. Having reusable templates prevents you from getting stuck and gives your answers natural structure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 border-l-4 border-blue-500 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-3 text-lg">Expressing Opinions</h4>
            <ul className="text-gray-700 space-y-2">
              <li><em>Minun mielestäni...</em> (In my opinion...)</li>
              <li><em>Olen sitä mieltä, että...</em> (I am of the opinion that...)</li>
              <li><em>Uskon, että...</em> (I believe that...)</li>
              <li><em>Toisaalta...</em> (On the other hand...)</li>
            </ul>
          </div>
          <div className="bg-white p-6 border-l-4 border-green-500 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-3 text-lg">Making Suggestions</h4>
            <ul className="text-gray-700 space-y-2">
              <li><em>Ehdotan, että...</em> (I suggest that...)</li>
              <li><em>Mitä jos me...</em> (What if we...)</li>
              <li><em>Voisimmeko...</em> (Could we...)</li>
              <li><em>Olisi hienoa, jos...</em> (It would be great if...)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-2">
          Developing a Winning Finnish Test Strategy
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          A successful Finnish test strategy goes beyond language skills; it involves test-taking tactics.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          <strong>For Reading and Listening:</strong> Never leave a multiple-choice question blank. There is no negative marking in the YKI exam. Skim the questions before reading the text or listening to the audio. This primes your brain to look for specific keywords rather than trying to understand every single word.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          <strong>Realistic Example:</strong> If the audio is a weather report, you don&apos;t need to understand the meteorological terms. Listen for the core elements you studied: days of the week, temperatures (plus/miinus), and basic conditions (sataa, paistaa aurinko).
        </p>

      </article>

      {/* Related Articles */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8 max-w-4xl mx-auto mt-12">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
        <ul className="space-y-2">
          <li><Link href="/wiki/guides/how-to-improve-finnish-writing-skills-yki-test" className="text-blue-700 hover:underline">How to Improve Finnish Writing Skills for YKI Test</Link></li>
          <li><Link href="/wiki/guides/yki-writing-feedback-guide" className="text-blue-700 hover:underline">YKI Writing Feedback Guide: Understand Your AI Examiner Report</Link></li>
        </ul>
      </nav>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto mt-12 bg-blue-900 text-white rounded-lg p-10 text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Conquer the YKI Exam?</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Stop guessing and start practicing efficiently. Get access to realistic exam simulations, expert feedback, and tailored exercises designed specifically for the intermediate YKI test.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-md"
        >
          Start Practicing Today
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mt-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-3">How much time do I need for YKI preparation?</h3>
            <p className="text-gray-600">
              The ideal YKI preparation time depends on your current level. If you are at A2, plan for 3 to 6 months of focused daily practice to reach the required B1 level for the intermediate YKI exam.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-3">What is the best Finnish test strategy for the speaking section?</h3>
            <p className="text-gray-600">
              The best strategy is to keep talking even if you make grammatical mistakes. Evaluators are looking for communicative competence. Use filler words, keep sentences relatively short, and respond directly to the prompt without overcomplicating your vocabulary.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Do I need perfect grammar to pass the YKI exam?</h3>
            <p className="text-gray-600">
              No. The intermediate YKI exam (levels 3-4) focuses on your ability to handle everyday situations. While basic grammar should be solid, minor errors in cases or verb conjugations will not fail you if your overall message is clear and understandable.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
