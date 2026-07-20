import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Informal Email Writing Guide: Structure, Tone and Tips',
  description: 'Master the YKI informal email task. Learn the structure, casual Finnish vocabulary, templates, and examiner scoring criteria to ace YKI writing task 1.',
  openGraph: {
    title: 'YKI Informal Email Writing Guide: Structure, Tone and Tips',
    description: 'Master the YKI informal email task. Learn the structure, casual Finnish vocabulary, templates, and examiner scoring criteria to ace YKI writing task 1.',
    type: 'article',
  },
};

export default function YkiInformalEmailGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I use spoken language (puhekieli) in the YKI informal email?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, using spoken language (puhekieli) like 'mä', 'sä', or 'mitä kuuluu?' is perfectly acceptable and often encouraged for the informal email task to show register awareness. However, standard written Finnish (kirjakieli) is also accepted as long as the tone remains friendly and casual."
        }
      },
      {
        "@type": "Question",
        "name": "How long should YKI writing task 1 be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no strict word count for YKI writing task 1, but it is typically the shortest of the three writing tasks. A greeting, 3-5 sentences covering all the prompt's bullet points, and a closing are usually sufficient."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I miss a bullet point in the prompt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Missing a bullet point significantly lowers your task fulfillment score. Examiners check to ensure every requirement is met. Even if your grammar is flawless, ignoring a prompt instruction can result in a failing grade for that task."
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
            YKI Informal Email Writing Guide: Structure, Tone and Tips
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ace the first task of the intermediate Finnish writing exam by mastering casual tone, clear structures, and prompt fulfillment.
          </p>
        </header>

        {/* Content Section */}
        <div className="px-8 py-10 prose prose-lg prose-blue max-w-none text-gray-700">
          <p>
            When tackling the intermediate Finnish exam (keskitaso), mastering the <strong>YKI informal email</strong> is an easy way to build momentum and secure early points. Usually appearing as the very first prompt in the writing section, this task requires you to communicate casually with a friend, family member, or familiar colleague. Proper <strong>YKI email preparation</strong> involves understanding how to sound natural without overcomplicating your grammar.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Understanding YKI Writing Task 1
          </h2>
          <p>
            <strong>YKI writing task 1</strong> is designed to test your ability to handle everyday, personal situations. The prompt will usually give you a brief scenario—such as organizing a meetup, apologizing for being late, or thanking someone for a gift—and a list of 2 to 4 bullet points that you must address in your text. 
          </p>
          <p>
            Because it is an <strong>informal Finnish email</strong> (or text message format), the examiners want to see that you can adapt your "register." Speaking to a friend requires a different tone than complaining to a landlord.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Step-by-Step Guide: How to Write a YKI Informal Email
          </h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 1: Open with a Casual Greeting</h3>
              <p className="text-blue-800 m-0">
                Never use formal greetings like <em>Hyvä vastaanottaja</em>. Keep it simple with <em>Moi [Name]!</em>, <em>Hei!</em>, or <em>Terve!</em>.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 2: Acknowledge the Situation</h3>
              <p className="text-blue-800 m-0">
                Start with a friendly opening line relating to the prompt. For example, if it is an invitation, say <em>Kiitos kutsusta!</em> (Thanks for the invite!).
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 3: Check Off the Bullet Points</h3>
              <p className="text-blue-800 m-0">
                Write 1-2 short sentences for every bullet point in the prompt. Use simple conjunctions like <em>mutta</em> (but) and <em>koska</em> (because) to link your ideas logically.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 4: Close Warmly</h3>
              <p className="text-blue-800 m-0">
                Sign off with a casual ending like <em>Nähdään!</em> (See you!), <em>Terveisin, [Your Name]</em>, or <em>Mukavaa viikonloppua!</em> (Have a nice weekend!).
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Template & Example: A Finnish Casual Email
          </h2>
          <p>
            To speed up your test-taking, memorize a standard framework. Here is a reusable template based on a typical <strong>Finnish casual email</strong> scenario.
          </p>
          
          <div className="bg-gray-100 p-6 rounded-lg my-6 border-l-4 border-gray-400">
            <h4 className="font-bold text-gray-900 mb-4">Scenario: Apologizing to a friend for missing a movie.</h4>
            <p className="font-mono text-sm mb-2"><strong>[Greeting]</strong></p>
            <p className="mb-4"><em>Moi Anna!</em></p>
            
            <p className="font-mono text-sm mb-2"><strong>[The Apology & Reason]</strong></p>
            <p className="mb-4"><em>Anteeksi, mutta en pääse tänään elokuviin. Olen todella sairas ja minulla on kuumetta.</em> (Sorry, but I can&apos;t make it to the movies today. I am really sick and have a fever.)</p>
            
            <p className="font-mono text-sm mb-2"><strong>[Suggesting an Alternative]</strong></p>
            <p className="mb-4"><em>Voidaanko mennä ensi viikonloppuna? Sunnuntai sopii minulle hyvin.</em> (Can we go next weekend? Sunday suits me well.)</p>
            
            <p className="font-mono text-sm mb-2"><strong>[Sign-off]</strong></p>
            <p><em>Parane pian minulle! Nähdään pian,</em><br/><em>[Your Name]</em></p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Essential Vocabulary for Informal Tasks
          </h2>
          <p>
            Build a vocabulary bank specifically for casual interactions. Incorporating a few spoken language (puhekieli) words can show examiners you have a strong grasp of the language&apos;s natural flow.
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Greetings & Openings:</strong> <em>Mitä kuuluu?</em> (How are you?), <em>Pitkästä aikaa!</em> (Long time no see!)</li>
            <li><strong>Apologizing:</strong> <em>Olen pahoillani, mutta...</em> (I am sorry, but...), <em>Anteeksi, unohdin täysin...</em> (Sorry, I completely forgot...)</li>
            <li><strong>Making Plans:</strong> <em>Mennäänkö kahville?</em> (Shall we go for a coffee?), <em>Sopiiko sinulle tiistaina?</em> (Does Tuesday suit you?)</li>
            <li><strong>Spoken Language (Optional but good):</strong> <em>Mä/Sä</em> (I/You), <em>Tosi kiva</em> (Really nice instead of <em>todella kiva</em>).</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Examiner Scoring and Common Mistakes
          </h2>
          <p>
            To score a Level 3 or 4 in this specific task, evaluators are looking for <strong>task fulfillment</strong> and <strong>appropriate tone</strong>. 
          </p>
          <div className="space-y-6 mt-6">
            <div className="border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-red-700 mb-2">Mistake: Being Too Formal</h4>
              <p className="mb-2"><strong>Problem:</strong> Addressing your friend with <em>&quot;Hyvä Matti, kirjoitan sinulle koska...&quot;</em> (Dear Matti, I am writing to you because...).</p>
              <p className="text-green-700 font-medium"><strong>Correction:</strong> The examiner will deduct points for poor register awareness. Treat the task exactly as if you were texting a close friend in real life.</p>
            </div>
            
            <div className="border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-red-700 mb-2">Mistake: Writing Too Much</h4>
              <p className="mb-2"><strong>Problem:</strong> Spending 25 minutes writing a long, complicated backstory about why you are late.</p>
              <p className="text-green-700 font-medium"><strong>Correction:</strong> This is a massive time-management error. Answer the bullet points clearly in 10-15 minutes, then move on to the heavily weighted formal email and opinion tasks.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 px-8 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Practice Your Informal Email Writing
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Ready to perfect your casual tone? Try our YKI writing simulator to practice informal messages and receive instant AI feedback on your vocabulary and task fulfillment.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            Start a Practice Test
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="px-8 py-12 bg-white">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I use spoken language (puhekieli) in the YKI informal email?</h3>
              <p className="text-gray-700">
                Yes, using spoken language (puhekieli) like &apos;mä&apos;, &apos;sä&apos;, or &apos;mitä kuuluu?&apos; is perfectly acceptable and often encouraged for the informal email task to show register awareness. However, standard written Finnish (kirjakieli) is also accepted as long as the tone remains friendly and casual.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long should YKI writing task 1 be?</h3>
              <p className="text-gray-700">
                There is no strict word count for YKI writing task 1, but it is typically the shortest of the three writing tasks. A greeting, 3-5 sentences covering all the prompt&apos;s bullet points, and a closing are usually sufficient.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What happens if I miss a bullet point in the prompt?</h3>
              <p className="text-gray-700">
                Missing a bullet point significantly lowers your task fulfillment score. Examiners check to ensure every requirement is met. Even if your grammar is flawless, ignoring a prompt instruction can result in a failing grade for that task.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}