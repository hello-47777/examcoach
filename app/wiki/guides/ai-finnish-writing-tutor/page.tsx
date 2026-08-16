import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Use AI to Improve Finnish Writing Before YKI Exam',
  description: 'Learn how to use an AI Finnish writing tutor to prepare for the YKI exam. Get step-by-step guidance on Finnish AI correction, scoring, and writing templates.',
  alternates: {
    canonical: '/wiki/guides/ai-finnish-writing-tutor',
  },
  keywords: ['AI Finnish writing tutor', 'Finnish AI correction', 'YKI preparation AI', 'AI writing tutor', 'Finnish writing AI'],
  openGraph: {
    title: 'How to Use AI to Improve Finnish Writing Before YKI Exam',
    description: 'Learn how to use an AI Finnish writing tutor to prepare for the YKI exam. Get step-by-step guidance on Finnish AI correction, scoring, and writing templates.',
    type: 'article',
  }
};

export default function AIFinnishWritingTutorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can an AI Finnish writing tutor help me pass the YKI exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An AI Finnish writing tutor provides instant, personalized feedback on your practice essays. It highlights grammar mistakes, suggests better vocabulary, and checks if your text meets the YKI level 3 assessment criteria."
        }
      },
      {
        "@type": "Question",
        "name": "Is Finnish AI correction accurate for YKI preparation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, specialized Finnish AI correction tools are designed to evaluate the specific parameters of the YKI exam, such as task fulfillment, appropriate register (formal vs. informal), and grammatical accuracy."
        }
      },
      {
        "@type": "Question",
        "name": "Can YKI preparation AI help me with spoken language (puhekieli)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. One of the main benefits of YKI preparation AI is its ability to detect when you accidentally use spoken language in a formal writing task, helping you separate kirjakieli (written) from puhekieli (spoken) Finnish."
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
              How to Use an AI Finnish Writing Tutor Before Your YKI Exam
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Passing the YKI (Yleinen kielitutkinto) exam requires more than just memorizing vocabulary; it demands accurate, context-appropriate writing. An <strong>AI Finnish writing tutor</strong> is the ultimate tool to simulate exam conditions, grade your practice texts, and guide your self-study routine efficiently.
            </p>
          </header>

          {/* Content Body */}
          <div className="px-8 py-10 space-y-10 text-gray-700">
            
            {/* Step-by-Step Guide */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Step-by-Step: Studying with an AI Finnish Writing Tutor
              </h2>
              <p className="mb-6">
                Self-studying for the YKI exam often leaves candidates wondering if their writing is "good enough" for Level 3. Here is how to structure your practice using modern tools.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Simulate Exam Prompts</h3>
                    <p>Start by generating realistic YKI writing tasks. The exam typically includes an informal message (e.g., to a friend), a formal message (e.g., feedback or a complaint), and an opinion piece. Write your response within the typical time limit (45-55 minutes for all three tasks).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Apply Finnish AI Correction</h3>
                    <p>Once you finish, input your text into your chosen tool. <strong>Finnish AI correction</strong> will instantly scan your response for grammar errors, misplaced modifiers, and incorrect case endings (like mixing up partitive and genitive).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Review Examiner Criteria (Scoring)</h3>
                    <p>A good AI doesn't just fix typos; it evaluates based on YKI rubrics. It will check your <em>task fulfillment</em> (did you answer all parts of the prompt?), <em>coherence</em>, and <em>vocabulary range</em>.</p>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Template and Examples */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Reusable Templates for YKI Writing Tasks
              </h2>
              <p className="mb-6">
                Having a structural framework ready saves you valuable time during the test. Here is a reusable template for a formal email or message, frequently tested in the YKI intermediate level.
              </p>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Formal Email Template (Virallinen sähköposti)</h4>
                <ul className="space-y-3 font-mono text-sm text-gray-800">
                  <li><strong>Greeting:</strong> Hei [Name/Title], / Hyvä [Name/Title],</li>
                  <li><strong>Opening:</strong> Kirjoitan sinulle koskien... (I am writing to you regarding...)</li>
                  <li><strong>Body 1 (The Issue):</strong> Haluaisin ilmoittaa, että... (I would like to inform that...)</li>
                  <li><strong>Body 2 (The Request):</strong> Voisitteko ystävällisesti... (Could you kindly...)</li>
                  <li><strong>Closing:</strong> Kiitos etukäteen avustanne. (Thank you in advance for your help.)</li>
                  <li><strong>Sign-off:</strong> Ystävällisin terveisin, [Your Name]</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Essential Vocabulary by Category
              </h2>
              <p className="mb-4">
                A core component of your <strong>YKI preparation AI</strong> strategy should be expanding your vocabulary beyond basic A1/A2 words.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Expressing Opinion (Mielipide)</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li><em>Minun mielestäni...</em> (In my opinion...)</li>
                    <li><em>Olen sitä mieltä, että...</em> (I am of the opinion that...)</li>
                    <li><em>Toisaalta... toisaalta...</em> (On one hand... on the other hand...)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-2">Connecting Words (Sidoskeinot)</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li><em>Kuitenkin</em> (However)</li>
                    <li><em>Sen lisäksi</em> (In addition to that)</li>
                    <li><em>Siksi / Tästä syystä</em> (Therefore / For this reason)</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Common Mistakes */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Common Mistakes to Avoid
              </h2>
              <div className="space-y-4">
                <div className="bg-white border border-red-200 border-l-4 border-l-red-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-gray-900">1. Mixing Puhekieli and Kirjakieli</h4>
                  <p className="text-sm mt-1">
                    <strong>Mistake:</strong> "Mä haluun mennä sinne huomenna." (Spoken)<br />
                    <strong>Correction:</strong> "Minä haluan mennä sinne huomenna." (Written)<br />
                    <strong>Why:</strong> Formal YKI tasks demand standard written Finnish (kirjakieli). Save spoken Finnish (puhekieli) for the speaking test or informal emails to friends.
                  </p>
                </div>

                <div className="bg-white border border-red-200 border-l-4 border-l-red-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-gray-900">2. Partitive Object Errors</h4>
                  <p className="text-sm mt-1">
                    <strong>Mistake:</strong> "Rakastan sinä."<br />
                    <strong>Correction:</strong> "Rakastan sinua."<br />
                    <strong>Why:</strong> Certain verbs (like rakastaa, etsiä, auttaa) strictly require the partitive case. An AI tool will immediately flag these missing endings.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Related Articles */}
          <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8 mx-auto" style={{maxWidth: '64rem'}}>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
            <ul className="space-y-2">
              <li><Link href="/wiki/guides/ai-yki-writing-checker" className="text-blue-700 hover:underline">AI YKI Writing Checker: Check Your Finnish Writing Level Instantly</Link></li>
              <li><Link href="/wiki/guides/how-to-improve-finnish-writing-skills-yki-test" className="text-blue-700 hover:underline">How to Improve Finnish Writing Skills for YKI Test</Link></li>
            </ul>
          </nav>

          {/* CTA Section */}
          <section className="bg-blue-600 text-white px-8 py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your YKI Preparation Today</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Ready to put these strategies into practice? Use our intelligent tools to simulate the exam and get immediate, actionable feedback on your Finnish writing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/register" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition duration-300 shadow-md inline-block"
              >
                Try the AI Writing Tutor Free
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="px-8 py-12 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How can an AI Finnish writing tutor help me pass the YKI exam?</h3>
                <p className="text-gray-700">
                  An AI Finnish writing tutor provides instant, personalized feedback on your practice essays. It highlights grammar mistakes, suggests better vocabulary, and checks if your text meets the YKI level 3 assessment criteria.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Is Finnish AI correction accurate for YKI preparation?</h3>
                <p className="text-gray-700">
                  Yes, specialized Finnish AI correction tools are designed to evaluate the specific parameters of the YKI exam, such as task fulfillment, appropriate register (formal vs. informal), and grammatical accuracy.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can YKI preparation AI help me with spoken language (puhekieli)?</h3>
                <p className="text-gray-700">
                  Absolutely. One of the main benefits of YKI preparation AI is its ability to detect when you accidentally use spoken language in a formal writing task, helping you separate kirjakieli (written) from puhekieli (spoken) Finnish.
                </p>
              </div>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}
