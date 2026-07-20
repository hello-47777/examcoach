import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Common YKI Email Writing Mistakes and How to Avoid Them',
  description: 'Learn how to avoid the most common YKI writing mistakes in your Finnish email tasks. Discover practical corrections and exam criteria to pass the YKI test.',
};

export default function YkiEmailMistakesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What happens if I miss a bullet point in the YKI email task?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you miss a bullet point provided in the prompt, you will lose points on message delivery. The examiners specifically check if you have addressed all parts of the assignment, regardless of how good your grammar is."
        }
      },
      {
        "@type": "Question",
        "name": "Do spelling errors automatically mean failing YKI writing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, minor spelling errors will not automatically cause you to fail the YKI writing test. The most important factor is comprehensibility. If a Finnish writing error changes the meaning of the word or makes the sentence impossible to understand, it will significantly lower your score."
        }
      },
      {
        "@type": "Question",
        "name": "Should I write long sentences to show my Finnish skills?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, attempting overly complex sentence structures often leads to severe YKI writing mistakes. It is much better to write clear, accurate, and moderately complex sentences than long, confusing ones."
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
              Common YKI Writing Mistakes: Email Tasks and How to Avoid Them
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master the Finnish YKI test by learning exactly what the examiners are looking for—and what errors to avoid.
            </p>
          </header>

          {/* Main Content */}
          <div className="prose prose-lg prose-blue mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm">
            
            <p className="lead">
              The written section of the Finnish National Certificate of Language Proficiency (YKI) is notoriously challenging. Many candidates score well in reading and listening, only to be held back by the writing tasks. Understanding the most common <strong>YKI writing mistakes</strong> is the single most effective way to improve your score. In this guide, we will break down the frequent errors test-takers make in email tasks, explain the examiner criteria, and provide practical corrections.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              1. The Most Frequent YKI Writing Mistakes: Ignoring the Register
            </h2>
            <p>
              One of the most critical <strong>YKI email mistakes</strong> is failing to match your tone (register) to the recipient. The YKI exam typically asks you to write two types of emails: an informal message (to a friend or colleague) and a formal message (to a housing manager, teacher, or customer service). 
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded-r-lg">
              <p className="font-semibold text-red-800 m-0">The Problem:</p>
              <p className="text-red-700 mt-1 mb-0">Starting a formal complaint to a landlord with <em>"Moi!"</em> and ending with <em>"Terveisin, [First Name]"</em>.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8 rounded-r-lg">
              <p className="font-semibold text-green-800 m-0">The Correction:</p>
              <p className="text-green-700 mt-1 mb-0">Use formal greetings like <em>"Hyvä [Name/Title],"</em> and closings like <em>"Ystävällisin terveisin, [Full Name]"</em>. Always use the formal "Te" (you) if you are addressing a company or an official.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              2. Missing the Prompt's Bullet Points
            </h2>
            <p>
              A guaranteed path to <strong>failing YKI writing</strong> is ignoring the specific instructions given in the prompt. Every YKI writing task includes 2-4 bullet points detailing what your message must contain. 
            </p>
            <p>
              Examiners grade your work heavily on <em>task achievement</em>. Even if your grammar is flawless, leaving out a bullet point means your text does not fulfill its communicative purpose.
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li><strong>Checklist strategy:</strong> Before you finish your exam, physically check off each bullet point in your mind.</li>
              <li><strong>Structuring:</strong> Dedicate at least one clear sentence or short paragraph to answering each bullet point.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              3. "Finglish" and Direct Translation Errors
            </h2>
            <p>
              Many <strong>Finnish writing errors</strong> happen when test-takers try to directly translate English idioms or sentence structures into Finnish. Finnish syntax and verb rections (which case a verb requires) are entirely different from English.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded-r-lg">
              <p className="font-semibold text-red-800 m-0">The Problem:</p>
              <p className="text-red-700 mt-1 mb-0">Writing <em>"Minä odotan sinua varten"</em> (I am waiting for you) – an English grammatical structure forced into Finnish.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8 rounded-r-lg">
              <p className="font-semibold text-green-800 m-0">The Correction:</p>
              <p className="text-green-700 mt-1 mb-0">Learn common verb rections. The correct phrase is <em>"Minä odotan sinua."</em> Keep your sentences simple and use structures you are 100% confident in.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              4. Time Management and Incomplete Emails
            </h2>
            <p>
              Running out of time is one of the most stressful <strong>YKI exam mistakes</strong>. The writing section is strictly timed, and leaving an email without an ending is penalized. If you realize you only have two minutes left, stop trying to formulate a complex middle paragraph. Skip directly to writing a standard closing sentence (e.g., <em>"Toivottavasti kuulen teistä pian."</em>) and signing your name. A completed short email is scored much higher than a long, abruptly cut-off one.
            </p>

            {/* CTA Section */}
            <div className="mt-12 bg-blue-600 text-white rounded-xl p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to perfect your YKI writing skills?</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Stop guessing what the examiners want. Practice with ExamCoach.ai, get instant AI feedback on your writing tasks, and go into your YKI test with confidence.
              </p>
              <Link 
                href="/register" 
                className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
              >
                Start Practicing Free Today
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
                  What happens if I miss a bullet point in the YKI email task?
                </h3>
                <p className="text-gray-700">
                  If you miss a bullet point provided in the prompt, you will lose points on message delivery. The examiners specifically check if you have addressed all parts of the assignment, regardless of how good your grammar is.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Do spelling errors automatically mean failing YKI writing?
                </h3>
                <p className="text-gray-700">
                  No, minor spelling errors will not automatically cause you to fail the YKI writing test. The most important factor is comprehensibility. If a Finnish writing error changes the meaning of the word or makes the sentence impossible to understand, it will significantly lower your score.
                </p>
              </div>

              <div className="pt-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Should I write long sentences to show my Finnish skills?
                </h3>
                <p className="text-gray-700">
                  No, attempting overly complex sentence structures often leads to severe mistakes. It is much better to write clear, accurate, and moderately complex sentences than long, confusing ones. Clear communication is the ultimate goal in the intermediate (keskitaso) exam.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}