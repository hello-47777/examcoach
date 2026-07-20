import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Writing Test Guide: Complete Preparation Guide for B1-B2',
  description: 'Master the YKI writing test with our complete preparation guide for the B1-B2 Finnish exam. Get practical tips, vocabulary, templates, and examiner insights.',
  openGraph: {
    title: 'YKI Writing Test Guide: Complete Preparation Guide for B1-B2',
    description: 'Master the YKI writing test with our complete preparation guide for the B1-B2 Finnish exam. Get practical tips, vocabulary, templates, and examiner insights.',
    type: 'article',
  },
};

export default function YkiWritingTestGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long is the YKI writing test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The YKI keskitaso (intermediate) writing test lasts for 55 minutes. You must manage your time carefully to complete all three tasks within this period."
        }
      },
      {
        "@type": "Question",
        "name": "What are the common topics in the YKI writing test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common topics include everyday situations like writing a message to a friend, sending an official email to a service provider (like a landlord or customer service), and expressing your opinion on a general societal topic."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use a dictionary during the YKI Finnish exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, dictionaries and other reference materials are strictly prohibited during all parts of the YKI Finnish exam, including the writing section."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Header Section */}
        <header className="px-8 pt-12 pb-8 border-b border-gray-100">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            YKI Writing Test Guide: Complete Preparation Guide for B1-B2
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to confidently pass the intermediate Finnish writing exam.
          </p>
        </header>

        {/* Content Section */}
        <div className="px-8 py-10 prose prose-lg prose-blue max-w-none text-gray-700">
          <p>
            Welcome to the ultimate guide for the <strong>YKI writing test</strong>. If you are aiming for Finnish citizenship or professional qualification, passing the intermediate level (keskitaso) is a critical milestone. This guide is designed to focus your <strong>YKI exam preparation</strong> exclusively on the writing component, giving you the practical tools, templates, and examiner insights needed to achieve a solid B1-B2 score.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Understanding the YKI Writing Test (Keskitaso)
          </h2>
          <p>
            The <strong>Finnish writing test</strong> at the intermediate level evaluates your ability to handle everyday written communication. It typically consists of three tasks that must be completed within 55 minutes. You will need to write:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li><strong>An informal message:</strong> E.g., a short text to a friend about a change of plans or an invitation.</li>
            <li><strong>A formal message or email:</strong> E.g., a complaint, a request for information, or a message to housing maintenance.</li>
            <li><strong>An opinion piece:</strong> E.g., responding to a short article or statement on a societal topic (health, environment, work).</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Scoring: What Examiners Look For
          </h2>
          <p>
            To succeed in your <strong>YKI writing preparation</strong>, you must understand the examiner criteria. The test is graded on a scale from below 3 up to 4 (for keskitaso). To pass (receive a 3 or 4), examiners evaluate:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li><strong>Task Fulfillment:</strong> Did you answer the prompt? If the prompt asks for three specific details, you must include all three.</li>
            <li><strong>Register and Tone:</strong> Did you use formal language for the official email and informal language for the friend?</li>
            <li><strong>Vocabulary and Structures:</strong> Using varied vocabulary rather than repeating basic words. Accurate use of common cases (partitive, illative).</li>
            <li><strong>Comprehensibility:</strong> Minor grammar mistakes are entirely acceptable as long as they do not prevent the reader from understanding your message.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Step-by-Step YKI Writing Preparation
          </h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 1: Master the Layouts</h3>
              <p className="text-blue-800 m-0">
                Memorize how to open and close emails. A formal letter to an authority should never start with &quot;Moi&quot;. Knowing your greetings saves precious minutes during the exam.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 2: Practice Time Management</h3>
              <p className="text-blue-800 m-0">
                You only have 55 minutes. Allocate 10 minutes for Task 1 (informal), 20 minutes for Task 2 (formal), and 25 minutes for Task 3 (opinion). Practice with a timer at home.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 3: Build a Core Phrase Bank</h3>
              <p className="text-blue-800 m-0">
                Do not try to translate complex English thoughts into Finnish. Build a mental library of 10-15 versatile Finnish sentences you can adapt to various scenarios.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Templates and Vocabulary for YKI Keskitaso Writing
          </h2>
          <p>
            Having a reusable framework is the secret to strong <strong>YKI keskitaso writing</strong>. Here are essential structures to memorize:
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">1. Formal Emails (Virallinen viesti)</h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Greeting:</strong> <em>Hyvä vastaanottaja,</em> (Dear recipient) or <em>Hei,</em> (Hello - safe for semi-formal).</li>
            <li><strong>Opening:</strong> <em>Kirjoitan teille, koska...</em> (I am writing to you because...)</li>
            <li><strong>Closing:</strong> <em>Ystävällisin terveisin,</em> (Kind regards,) followed by your full name.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">2. Expressing Opinions (Mielipidekirjoitus)</h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Starting an opinion:</strong> <em>Olen sitä mieltä, että...</em> (I am of the opinion that...)</li>
            <li><strong>Agreeing:</strong> <em>Olen samaa mieltä.</em> (I agree.)</li>
            <li><strong>Disagreeing:</strong> <em>Olen eri mieltä, koska...</em> (I disagree, because...)</li>
            <li><strong>Adding a point:</strong> <em>Lisäksi ajattelen, että...</em> (Furthermore, I think that...)</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Common Mistakes and How to Fix Them
          </h2>
          <div className="space-y-6">
            <div className="border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-red-700 mb-2">Mistake: Translating Directly from Mother Tongue</h4>
              <p className="mb-2"><strong>Problem:</strong> Students often try to write long, complicated sentences that result in severe grammatical errors and broken flow.</p>
              <p className="text-green-700 font-medium"><strong>Correction:</strong> Write short, clear sentences. It is better to write two flawless simple sentences than one broken complex sentence. Use conjunctions like <em>mutta</em> (but), <em>koska</em> (because), and <em>joten</em> (so) to connect them safely.</p>
            </div>
            
            <div className="border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-red-700 mb-2">Mistake: Ignoring the Prompt Details</h4>
              <p className="mb-2"><strong>Problem:</strong> A prompt asks you to invite a friend, suggest a time, and mention what to bring. The student invites the friend but forgets to mention what to bring.</p>
              <p className="text-green-700 font-medium"><strong>Correction:</strong> As soon as the test starts, tick off every bullet point in the prompt as you write. Task fulfillment is non-negotiable for a passing grade.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 px-8 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Ace Your YKI Exam?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Stop guessing and start practicing. Get instant feedback on your writing, track your progress, and master the intermediate Finnish exam with ExamCoach.ai.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            Start Practicing Now
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="px-8 py-12 bg-white">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long is the YKI writing test?</h3>
              <p className="text-gray-700">
                The YKI keskitaso (intermediate) writing test lasts for 55 minutes. You must manage your time carefully to complete all three tasks within this period.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What are the common topics in the YKI writing test?</h3>
              <p className="text-gray-700">
                Common topics include everyday situations like writing a message to a friend, sending an official email to a service provider (like a landlord or customer service), and expressing your opinion on a general societal topic.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I use a dictionary during the YKI Finnish exam?</h3>
              <p className="text-gray-700">
                No, dictionaries and other reference materials are strictly prohibited during all parts of the YKI Finnish exam, including the writing section.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}