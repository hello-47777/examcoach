import Link from 'next/link';
import { Metadata } from 'next';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('guides', 'free-yki-writing-checker', {
  title: 'Free YKI Writing Checker Online With AI Feedback',
  description: 'Improve your Finnish with our free YKI writing checker. Get instant AI feedback and accurate Finnish writing correction tailored to YKI exam criteria.',
});

export default function FreeYKIWritingCheckerPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the free YKI writing checker work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply paste your Finnish exam practice text into our tool, specify the prompt you are answering, and the system will analyze your response. It provides instant feedback on grammar, vocabulary, and exam-specific criteria."
        }
      },
      {
        "@type": "Question",
        "name": "Is the YKI AI checker accurate for official grading?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The YKI AI checker is trained on official YKI assessment guidelines. While it cannot replace a human examiner, it accurately identifies common mistakes and evaluates your text structure, vocabulary range, and message delivery to help you reach a level 3 or 4."
        }
      },
      {
        "@type": "Question",
        "name": "Does this tool provide general Finnish writing correction or YKI-specific feedback?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike generic language tools, this provides YKI-specific Finnish writing correction. It evaluates whether your tone is appropriate for the task (formal vs. informal) and if you have answered all parts of the exam prompt."
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
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
          
          {/* Header Section */}
          <header className="px-8 py-10 border-b border-gray-100 bg-blue-50/50">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
              Free YKI Writing Checker Online With AI Feedback
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mastering the written portion of the Finnish language proficiency test requires consistent practice and accurate evaluation. Using a <strong>free YKI writing checker</strong> allows you to instantly grade your practice essays, emails, and opinion pieces against official exam criteria, helping you identify mistakes before test day.
            </p>
          </header>

          {/* Interactive Tool Mockup / Access Section */}
          <section className="px-8 py-10 bg-white">
            <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl border border-gray-200 p-6 shadow-inner">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Try the YKI AI Checker</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Paste your Finnish text below. For the most accurate Finnish writing correction, aim for 100-150 words typical of a YKI intermediate (keskitaso) task.
              </p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="yki-prompt" className="block text-sm font-medium text-gray-700 mb-1">Exam Prompt (Optional)</label>
                  <input 
                    type="text" 
                    id="yki-prompt" 
                    placeholder="e.g., Kirjoita sähköposti isännöitsijälle..." 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="yki-text" className="block text-sm font-medium text-gray-700 mb-1">Your Finnish Text</label>
                  <textarea 
                    id="yki-text" 
                    rows={6} 
                    placeholder="Kirjoita tekstisi tähän..." 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y"
                    disabled
                  ></textarea>
                </div>
                <button 
                  disabled
                  className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Analyze Text (Demo)
                </button>
                <p className="text-xs text-gray-500 mt-2 text-center sm:text-left">
                  Sign up for ExamCoach.ai to unlock full access to the live writing checker.
                </p>
              </div>
            </div>
          </section>

          {/* Content Body */}
          <div className="px-8 py-10 space-y-10 text-gray-700">
            
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How the Free YKI Writing Checker Improves Your Score
              </h2>
              <p className="leading-relaxed mb-4">
                When studying for the YKI test, writing practice alone is not enough; you need targeted feedback. A specialized <strong>free YKI writing checker</strong> evaluates your text similarly to human examiners, focusing on the specific parameters required to pass at level 3 or level 4.
              </p>
              <p className="leading-relaxed">
                Generic translation tools or grammar apps often accept phrasing that is technically correct but inappropriate for a specific YKI task. Our system provides exam-focused Finnish writing correction that guides you toward natural, native-like phrasing while ensuring your response meets the prompt's requirements.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                What the YKI AI Checker Evaluates
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">1. Task Fulfillment</h4>
                  <p className="text-sm">Did you answer all the questions in the prompt? The AI checks if the message is fully delivered, which is the most critical grading criteria in the YKI exam.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">2. Register and Tone</h4>
                  <p className="text-sm">Checks whether you are correctly using formal language (sinuttelu vs. teitittely) for official emails, or casual language for messages to friends.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">3. Grammatical Accuracy</h4>
                  <p className="text-sm">Highlights errors in partitive, illative, verb conjugations, and word order, explaining the correction rules in plain language.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">4. Vocabulary Range</h4>
                  <p className="text-sm">Suggests better, more varied adjectives and verbs to elevate your text from a basic level (A2) to an intermediate level (B1/B2).</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Common Mistakes Caught by Finnish Writing Correction
              </h2>
              <p className="leading-relaxed mb-6">
                Self-study candidates frequently make structural and grammatical errors that are easily fixable once identified. The AI scanner targets these classic pitfalls:
              </p>
              <ul className="space-y-4 list-disc pl-6">
                <li>
                  <strong>Object Cases:</strong> Using the nominative instead of the partitive or genitive object. (e.g., writing <em>&quot;Ostan auto&quot;</em> instead of <em>&quot;Ostan auton&quot;</em>).
                </li>
                <li>
                  <strong>Spoken vs. Written Language:</strong> Using <em>puhekieli</em> (spoken language like &quot;mä meen&quot;) in a formal writing task where <em>kirjakieli</em> (standard written language like &quot;minä menen&quot;) is mandatory.
                </li>
                <li>
                  <strong>Missing Greetings and Closings:</strong> Forgetting to open an email with <em>&quot;Hei,&quot;</em> or close it with <em>&quot;Ystävällisin terveisin,&quot;</em> which examiners deduct points for.
                </li>
                <li>
                  <strong>Poor Paragraph Structure:</strong> Submitting one giant block of text instead of structuring arguments into clear, distinct paragraphs.
                </li>
              </ul>
            </section>
          </div>

          {/* Related Articles */}
          <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8 mx-auto" style={{maxWidth: '64rem'}}>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
            <ul className="space-y-2">
              <li><Link href="/wiki/guides/ai-yki-writing-checker" className="text-blue-700 hover:underline">AI YKI Writing Checker: Check Your Finnish Writing Level Instantly</Link></li>
              <li><Link href="/wiki/guides/ai-finnish-writing-tutor" className="text-blue-700 hover:underline">How to Use AI to Improve Finnish Writing Before YKI Exam</Link></li>
            </ul>
          </nav>

          {/* CTA Section */}
          <section className="bg-blue-600 text-white px-8 py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Perfect Your Finnish Writing?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Stop guessing your skill level. Start using the YKI AI checker today to get instant feedback, score estimates, and detailed corrections.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/register" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition duration-300 shadow-md"
              >
                Start Practicing for Free
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="px-8 py-12 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How does the free YKI writing checker work?</h3>
                <p className="text-gray-700">
                  Simply paste your Finnish exam practice text into our tool, specify the prompt you are answering, and the system will analyze your response. It provides instant feedback on grammar, vocabulary, and exam-specific criteria.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Is the YKI AI checker accurate for official grading?</h3>
                <p className="text-gray-700">
                  The YKI AI checker is trained on official YKI assessment guidelines. While it cannot replace a human examiner, it accurately identifies common mistakes and evaluates your text structure, vocabulary range, and message delivery to help you reach a level 3 or 4.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Does this tool provide general Finnish writing correction or YKI-specific feedback?</h3>
                <p className="text-gray-700">
                  Unlike generic language tools, this provides YKI-specific Finnish writing correction. It evaluates whether your tone is appropriate for the task (formal vs. informal) and if you have answered all parts of the exam prompt.
                </p>
              </div>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}
