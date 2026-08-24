import Link from 'next/link';
import { Metadata } from 'next';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('guides', 'ai-yki-writing-preparation', {
  title: 'How AI Can Help You Prepare for the YKI Writing Test | AI YKI Writing Preparation',
  description: 'Master the Finnish YKI exam with targeted AI YKI writing preparation. Learn how to use an AI Finnish tutor for instant Finnish writing feedback and effective YKI writing practice.',
});

export default function AIYKIWritingPreparationPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How effective is AI YKI writing preparation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI YKI writing preparation is highly effective because it provides immediate, personalized feedback on your grammar, vocabulary, and adherence to YKI scoring criteria, allowing for rapid iteration and improvement."
        }
      },
      {
        "@type": "Question",
        "name": "Can an AI Finnish tutor catch complex grammar mistakes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, an advanced AI Finnish tutor can easily identify common YKI mistakes such as incorrect object cases (partitive vs. accusative/genitive), verb rections, and unnatural sentence structures."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best way to do YKI writing practice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most effective YKI writing practice involves writing responses to realistic exam prompts under timed conditions, submitting them for detailed Finnish writing feedback, and rewriting the text based on the corrections."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-white shadow-sm rounded-lg mt-8">
        
        <article className="prose prose-lg prose-slate max-w-none">
          <header className="mb-10 border-b pb-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              How AI Can Help You Prepare for the YKI Writing Test: A Guide to AI YKI Writing Preparation
            </h1>
            <p className="text-xl text-slate-600">
              Welcome to <strong>Article 3</strong> of our comprehensive exam mastery series. If you are aiming for the Keskitaso (intermediate) B1 certificate, implementing <strong>AI YKI writing preparation</strong> into your study routine is the fastest way to achieve a passing grade.
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              The Power of AI YKI Writing Preparation
            </h2>
            <p className="mb-4">
              Historically, the hardest part of studying for the Finnish proficiency exam was finding someone to correct your texts. Today, utilizing an <strong>AI Finnish tutor</strong> solves this bottleneck. By providing instant <strong>Finnish writing feedback</strong>, AI allows you to engage in high-volume, highly accurate <strong>YKI writing practice</strong> without waiting days for a human teacher to grade your work.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Step-by-Step Guide: Your YKI Writing Practice Routine
            </h2>
            <p className="mb-4">Follow this daily framework to maximize your results:</p>
            <ol className="list-decimal pl-6 space-y-4">
              <li><strong>Select a Realistic Prompt:</strong> Choose standard YKI tasks, such as writing an informal email to a friend or a formal opinion piece (mielipidekirjoitus).</li>
              <li><strong>Write Under Exam Conditions:</strong> Give yourself exactly 20-25 minutes per text. Do not use a dictionary.</li>
              <li><strong>Submit for AI Feedback:</strong> Paste your text into your AI tool, specifically asking it to grade based on Finnish B1 YKI criteria.</li>
              <li><strong>Analyze and Rewrite:</strong> Review the corrections, write down new vocabulary, and re-type the essay perfectly.</li>
            </ol>
          </section>

          <section className="mb-12 bg-slate-100 p-6 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Understanding YKI Scoring Criteria
            </h2>
            <p className="mb-4">When using AI for feedback, prompt it to evaluate you on the three official YKI writing metrics:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Viestin välittyminen (Message Transmission):</strong> Did you answer all parts of the prompt? Is the tone appropriate (formal vs. informal)?</li>
              <li><strong>Tekstin rakentuminen (Text Structure):</strong> Are you using paragraphs? Do you use cohesive devices and conjunctions (mutta, koska, siksi)?</li>
              <li><strong>Kielellinen laajuus ja tarkkuus (Linguistic Range and Accuracy):</strong> Are you demonstrating varied vocabulary? Are your verb conjugations and noun cases (partitive vs. genitive) mostly correct?</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Common Mistakes and AI Corrections
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-200">
                    <th className="p-3 border-b-2 border-slate-300 font-semibold text-sm">Mistake Type</th>
                    <th className="p-3 border-b-2 border-slate-300 font-semibold text-sm">Incorrect (Student)</th>
                    <th className="p-3 border-b-2 border-slate-300 font-semibold text-sm">Correct (AI Feedback)</th>
                    <th className="p-3 border-b-2 border-slate-300 font-semibold text-sm">Explanation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3">Object Case</td>
                    <td className="p-3">Minä ostan uusi auto.</td>
                    <td className="p-3">Minä ostan uuden auton.</td>
                    <td className="p-3">Total object must be in genitive/accusative when the action is complete.</td>
                  </tr>
                  <tr>
                    <td className="p-3">Verb Rection</td>
                    <td className="p-3">Minä tykkään sinä.</td>
                    <td className="p-3">Minä tykkään sinusta.</td>
                    <td className="p-3">The verb &apos;tykätä&apos; always requires the elative case (-sta/-stä).</td>
                  </tr>
                  <tr>
                    <td className="p-3">Missing Partitive</td>
                    <td className="p-3">Minulla on koira. (When describing plural or mass nouns falsely)</td>
                    <td className="p-3">Minulla on kaksi koiraa.</td>
                    <td className="p-3">Numbers (other than yksi) require the partitive singular case.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Essential Vocabulary for YKI Writing
            </h2>
            <p className="mb-4">Using transition words improves your &apos;Text Structure&apos; score. Memorize these categorized phrases:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 border rounded-md shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-indigo-700">Giving an Opinion</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Mielestäni...</strong> (In my opinion...)</li>
                  <li><strong>Olen sitä mieltä, että...</strong> (I am of the opinion that...)</li>
                  <li><strong>Uskon, että...</strong> (I believe that...)</li>
                </ul>
              </div>
              <div className="bg-white p-4 border rounded-md shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-indigo-700">Structuring the Text</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Ensinnäkin...</strong> (Firstly...)</li>
                  <li><strong>Toisaalta...</strong> (On the other hand...)</li>
                  <li><strong>Lopuksi...</strong> (In conclusion...)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Template: The Formal Opinion Piece
            </h2>
            <p className="mb-4">Use this reusable framework for your formal task (mielipidekirjoitus):</p>
            <blockquote className="border-l-4 border-indigo-500 pl-4 italic bg-slate-50 p-4 rounded-r-md">
              <p><strong>Title:</strong> [Topic] on tärkeä asia (e.g., Kierrätys on tärkeä asia)</p>
              <p><strong>Introduction:</strong> Kirjoitan, koska haluan kertoa mielipiteeni tästä asiasta. Olen lukenut paljon tästä aiheesta viime aikoina.</p>
              <p><strong>Body Paragraph 1 (Pro/Con):</strong> Ensinnäkin on tärkeää huomata, että... (Firstly, it is important to note that...)</p>
              <p><strong>Body Paragraph 2 (Personal View):</strong> Mielestäni meidän pitäisi... (In my opinion, we should...)</p>
              <p><strong>Conclusion:</strong> Lopuksi haluan sanoa, että toivon tilanteen paranevan pian. Ystävällisin terveisin, [Your Name]</p>
            </blockquote>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Realistic Example: AI Finnish Writing Feedback in Action
            </h2>
            <p className="mb-4">Here is what a prompt and response look like when using an AI Finnish tutor:</p>
            <div className="bg-slate-800 text-slate-100 p-6 rounded-lg font-mono text-sm space-y-4">
              <div>
                <span className="text-emerald-400 font-bold">User Prompt:</span>
                <p className="mt-1 text-slate-300">Evaluate this YKI B1 informal email: &quot;Hei Anna! Kiitos viesti. Minä haluan mennä elokuviin huomenna. Nähdään kello kuusi?&quot;</p>
              </div>
              <div>
                <span className="text-blue-400 font-bold">AI Tutor Feedback:</span>
                <p className="mt-1 text-slate-300">Grade: A2 approaching B1. The message is clear, but lacks linguistic accuracy.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-300">
                  <li><strong>&apos;Kiitos viesti&apos;</strong> - Incorrect. Use the elative case with kiitos: <em>Kiitos viestistä!</em></li>
                  <li><strong>Vocabulary:</strong> The sentences are very short. Try combining them with conjunctions: <em>Kiitos viestistäsi! Haluan mennä elokuviin huomenna, joten nähdäänkö kello kuusi?</em></li>
                </ul>
              </div>
            </div>
          </section>
        </article>

        <section className="mt-16 bg-indigo-50 border border-indigo-100 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Master the YKI Writing Test?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Stop guessing your proficiency level. Get instant, accurate Finnish writing feedback tailored to the official YKI grading criteria today.
          </p>
          {/* Internal Links - Related Articles */}
          <nav className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8 not-prose">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Related Articles</h2>
            <ul className="space-y-2">
              <li><Link href="/wiki/guides/ai-yki-writing-checker" className="text-blue-700 hover:underline">AI YKI Writing Checker: Check Your Finnish Writing Level Instantly</Link></li>
            </ul>
          </nav>

          {/* CTA Section */}
          <Link 
            href="/" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Start Your YKI Writing Practice Now
          </Link>
        </section>

        <section className="mt-16 pt-10 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-slate-800">How effective is AI YKI writing preparation?</h3>
              <p className="text-slate-600 mt-2">AI YKI writing preparation is highly effective because it provides immediate, personalized feedback on your grammar, vocabulary, and adherence to YKI scoring criteria, allowing for rapid iteration and improvement.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-800">Can an AI Finnish tutor catch complex grammar mistakes?</h3>
              <p className="text-slate-600 mt-2">Yes, an advanced AI Finnish tutor can easily identify common YKI mistakes such as incorrect object cases (partitive vs. accusative/genitive), verb rections, and unnatural sentence structures.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-800">What is the best way to do YKI writing practice?</h3>
              <p className="text-slate-600 mt-2">The most effective YKI writing practice involves writing responses to realistic exam prompts under timed conditions, submitting them for detailed Finnish writing feedback, and rewriting the text based on the corrections.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}