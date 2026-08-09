import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Writing Test Checklist: Everything You Need Before Exam Day',
  description: 'Master your YKI test preparation with our definitive YKI writing test checklist. Learn essential exam tips, examiner criteria, and reusable templates before the Finnish exam day.',
  alternates: {
    canonical: 'https://examcoach.ai/yki-writing-test-checklist',
  },
};

export default function YkiWritingTestChecklistPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What should I bring on the Finnish exam day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the YKI Finnish exam day, you must bring a valid official ID (passport or Finnish identity card). You should also bring standard lead pencils (HB or 2B) and an eraser, as all writing must be done in pencil. Water in a clear bottle without a label is usually permitted."
        }
      },
      {
        "@type": "Question",
        "name": "How many tasks are in the YKI writing test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The YKI writing test includes exactly three tasks: an informal message, a formal message, and an opinion piece. You have a total of 55 minutes to complete all three tasks."
        }
      },
      {
        "@type": "Question",
        "name": "Does spelling matter in the YKI B1 writing test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At the B1 intermediate level, perfect spelling is not strictly required as long as the message is fully intelligible. However, severe spelling mistakes that change the meaning of a word or make sentences impossible to understand will lower your score."
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
          <div className="p-8 sm:p-12">
            <header className="mb-10">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                YKI Writing Test Checklist: Everything You Need Before Exam Day
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Approaching the intermediate Finnish exam can be daunting, but arriving prepared eliminates the stress. Having a comprehensive <strong>YKI writing test checklist</strong> ensures your YKI test preparation is complete, so you can walk in on the Finnish exam day knowing exactly how to tackle every prompt. 
              </p>
            </header>

            <div className="prose prose-lg max-w-none text-gray-700">
              
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Essential YKI Writing Test Checklist
                </h2>
                <p>
                  Before you take the exam, go through this step-by-step checklist to verify you are ready. Mastering these three components is the cornerstone of effective YKI test preparation.
                </p>
                <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-100">
                  <ul className="space-y-4 m-0 list-none pl-0">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">Step 1:</span>
                      <div>
                        <strong className="text-gray-900">Master the 55-Minute Time Limit</strong> 
                        <p className="m-0 mt-1">You must complete three texts in 55 minutes. Check off that you can write an informal message (10 mins), a formal message (15 mins), and an opinion piece (25 mins), leaving 5 minutes for proofreading.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">Step 2:</span>
                      <div>
                        <strong className="text-gray-900">Understand the 3 Task Types</strong> 
                        <p className="m-0 mt-1">Verify that you know the difference in tone between a casual email to a friend (<em>Hei Pekka!</em>) and a formal complaint to a company (<em>Hyvä vastaanottaja</em>).</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">Step 3:</span>
                      <div>
                        <strong className="text-gray-900">Prepare for Logistics</strong> 
                        <p className="m-0 mt-1">Ensure you have an official ID, HB pencils, and an eraser ready for the Finnish exam day. You cannot use pens in the YKI writing test.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Reusable Frameworks and Templates
                </h2>
                <p>
                  One of the best YKI exam tips is to avoid inventing text structures from scratch. Memorize these reusable templates to save time during the test.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-4 mt-0">Formal Message (Complaint/Request)</h3>
                    <ul className="space-y-2 mb-0 list-disc pl-5">
                      <li><strong>Greeting:</strong> <em>Hyvä vastaanottaja,</em> (Dear recipient)</li>
                      <li><strong>Opening:</strong> <em>Kirjoitan teille, koska...</em> (I am writing to you because...)</li>
                      <li><strong>Polite Request:</strong> <em>Haluaisin pyytää...</em> (I would like to ask...)</li>
                      <li><strong>Closing:</strong> <em>Ystävällisin terveisin, [Nimi]</em> (Best regards, [Name])</li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-4 mt-0">Opinion Piece (Mielipide)</h3>
                    <ul className="space-y-2 mb-0 list-disc pl-5">
                      <li><strong>Opening:</strong> <em>Luin artikkelin tästä aiheesta ja...</em> (I read an article about this topic and...)</li>
                      <li><strong>State Opinion:</strong> <em>Olen sitä mieltä, että...</em> (I am of the opinion that...)</li>
                      <li><strong>Reasoning:</strong> <em>Tämä johtuu siitä, että...</em> (This is because...)</li>
                      <li><strong>Conclusion:</strong> <em>Lopuksi haluan sanoa, että...</em> (Finally, I want to say that...)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Categorized Vocabulary to Memorize
                </h2>
                <p>
                  To secure a Level 3 (B1), examiners expect you to connect sentences smoothly. Include these categorized phrases in your vocabulary checklist:
                </p>
                <div className="overflow-x-auto mt-6">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Finnish Phrase</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-bold text-gray-700 uppercase tracking-wider">English Translation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Conjunctions</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"><em>koska, vaikka, jotta, sen sijaan</em></td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">because, although, so that, instead</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Adding Information</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"><em>lisäksi, myös, toisaalta</em></td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">additionally, also, on the other hand</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">Expressing Regret</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"><em>Olen todella pahoillani, että...</em></td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">I am really sorry that...</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Understanding Examiner Criteria & Avoiding Common Mistakes
                </h2>
                <p>
                  Knowing how the YKI writing test is scored is vital. Examiners grade based on <strong>Task Completion</strong>, <strong>Intelligibility</strong>, <strong>Vocabulary</strong>, and <strong>Structures</strong>. The easiest way to fail is to ignore the prompt.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Common Mistakes and How to Correct Them</h3>
                
                <div className="space-y-6 mt-4">
                  <div className="border-l-4 border-red-500 pl-4 bg-red-50 py-3 pr-4">
                    <h4 className="font-bold text-red-800 mt-0">Mistake: Missing Bullet Points</h4>
                    <p className="text-red-900 mb-0">The prompt asks you to describe a broken product, explain when you bought it, and demand a refund. You forget to mention when you bought it.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4 bg-green-50 py-3 pr-4">
                    <h4 className="font-bold text-green-800 mt-0">Correction: The Check-off Method</h4>
                    <p className="text-green-900 mb-0">Treat the prompt like a checklist. As soon as you write a sentence covering one of the bullet points (e.g., <em>Ostin tämän puhelimen viime viikolla.</em>), draw a physical line through that bullet point on your exam paper.</p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4 bg-red-50 py-3 pr-4">
                    <h4 className="font-bold text-red-800 mt-0">Mistake: Overcomplicating Grammar</h4>
                    <p className="text-red-900 mb-0">Attempting to use complex participle constructions (e.g., <em>tehdessäni</em>) but executing them poorly, confusing the examiner.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4 bg-green-50 py-3 pr-4">
                    <h4 className="font-bold text-green-800 mt-0">Correction: Clear, Connected Sentences</h4>
                    <p className="text-green-900 mb-0">Stick to structures you are 100% confident in. Use reliable conjunctions. Instead of participles, write: <em>Kun minä tein työtä...</em> (When I was working...). Clarity always wins over complicated errors.</p>
                  </div>
                </div>
              </section>

            </div>

            <hr className="my-12 border-gray-200" />

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What should I bring on the Finnish exam day?</h3>
                  <p className="text-gray-700">
                    For the YKI Finnish exam day, you must bring a valid official ID (passport or Finnish identity card). You should also bring standard lead pencils (HB or 2B) and an eraser, as all writing must be done in pencil. Water in a clear bottle without a label is usually permitted.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How many tasks are in the YKI writing test?</h3>
                  <p className="text-gray-700">
                    The YKI writing test includes exactly three tasks: an informal message, a formal message, and an opinion piece. You have a total of 55 minutes to complete all three tasks.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Does spelling matter in the YKI B1 writing test?</h3>
                  <p className="text-gray-700">
                    At the B1 intermediate level, perfect spelling is not strictly required as long as the message is fully intelligible. However, severe spelling mistakes that change the meaning of a word or make sentences impossible to understand will lower your score.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 rounded-2xl p-8 sm:p-10 text-center shadow-lg mt-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Check Off Your Exam Preparation?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Practice writing under real exam conditions. Get AI-driven feedback based strictly on the YKI examiner criteria, learn from your mistakes, and pass with confidence.
              </p>
              <Link 
                href="/"
                className="inline-block bg-white text-blue-700 font-bold text-lg px-8 py-4 rounded-full shadow-md hover:bg-gray-50 hover:shadow-lg transition-all duration-200"
              >
                Start Your YKI Practice Now
              </Link>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}