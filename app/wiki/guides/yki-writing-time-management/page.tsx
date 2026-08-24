import Link from 'next/link';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('guides', 'yki-writing-time-management', {
  title: 'YKI Writing Time Management: How to Finish All 3 Tasks',
  description: 'Master YKI writing time management with our step-by-step guide. Learn how to handle Finnish exam time limits, perfect your pacing, and finish all three tasks.',
});

export default function YkiWritingTimeManagementPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the total YKI test duration for the writing section?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The total time limit for the YKI writing subtest is exactly 55 minutes. You must divide this time yourself among the three required writing tasks."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I do not finish all three writing tasks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Failing to complete all three tasks significantly lowers your chance of achieving a passing grade (Level 3). Examiners assess your overall ability across different registers (informal, formal, and opinion), so missing a task leaves a gap in your assessment."
        }
      },
      {
        "@type": "Question",
        "name": "Should I write a rough draft first to improve my pacing in YKI writing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Due to strict Finnish exam time limits, writing a full draft and copying it over will waste too much time. Instead, take 1-2 minutes to outline your main points, then write your final version directly."
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="prose prose-lg lg:prose-xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            YKI Writing Time Management: How to Finish All 3 Tasks
          </h1>
          <p className="text-xl text-gray-600">
            A comprehensive guide to mastering your pace and conquering the writing subtest.
          </p>
        </header>

        <section className="mb-12">
          <p>
            One of the most common reasons test-takers fail the writing subtest isn't a lack of vocabulary or poor grammar—it's running out of time. Effective <strong>YKI writing time management</strong> is the critical bridge between knowing Finnish and officially proving it. When you are staring down three distinct writing prompts, knowing exactly how to allocate your minutes is just as important as knowing your verb conjugations.
          </p>
          <p>
            In this guide, we will solve the problem of the ticking clock by breaking down the exact strategy you need to complete the informal message, the formal email, and the opinion piece before time is called.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Understanding the Finnish Exam Time Limits
          </h2>
          <p>
            To build a winning strategy, you first must understand the battlefield. The total <strong>YKI test duration</strong> for the writing component (<em>Kirjoittaminen</em>) is exactly <strong>55 minutes</strong>. 
          </p>
          <p>
            The invigilator will not tell you when to move from Task 1 to Task 2. You are given a single booklet containing all three prompts, and it is entirely your responsibility to manage the clock. Because the tasks increase in complexity and length, dividing your time equally (about 18 minutes per task) is a major mistake.
          </p>
          
          <div className="overflow-x-auto my-8">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target Time</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Task 1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Informal Message (e.g., to a friend)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">10 Minutes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Task 2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Formal Communication (e.g., complaint/inquiry)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">15 Minutes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Task 3</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Opinion Piece (e.g., forum post)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">25 Minutes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Buffer</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Review and corrections</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">5 Minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Your YKI Writing Time Management Strategy
          </h2>
          <p>
            Let's break down exactly how to approach each task step-by-step so you never freeze during the exam.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Step 1: Dispatch Task 1 Quickly (10 Mins)</h3>
          <p>
            Task 1 is usually a short, everyday message—like texting a friend to cancel a meeting or inviting someone to a party. Do not overthink this. The examiners are looking for basic communicative ability in an informal register.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Strategy:</strong> Read the prompt, identify the 2-3 bullet points you must answer, and write exactly one sentence per point.</li>
            <li><strong>Time-saving phrases:</strong> Memorize standard greetings (<em>Moi! Mitä kuuluu?</em>) and closings (<em>Nähdään pian, Terveisin [Name]</em>) beforehand so you can write them on autopilot.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Step 2: Structure Task 2 Logically (15 Mins)</h3>
          <p>
            Task 2 tests your formal register. You might need to complain about a broken product or apply for a course. The key here is clarity and politeness.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Strategy:</strong> Spend 2 minutes outlining. What is the problem? What is your proposed solution? Use standard formal templates to save mental energy.</li>
            <li><strong>Time-saving phrases:</strong> <em>Hyvä vastaanottaja</em> (Dear recipient), <em>Kirjoitan, koska...</em> (I am writing because...), <em>Ystävällisin terveisin</em> (Best regards).</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Step 3: Conquer Task 3 with a Framework (25 Mins)</h3>
          <p>
            Task 3 is the most demanding. You must defend an opinion on a societal topic (e.g., public transport, remote work). Because this carries heavy weight for your final score, you have saved the bulk of your time for it.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Strategy:</strong> Spend 3-4 minutes brainstorming vocabulary related to the topic. Pick a side immediately—do not waste time deciding what you <em>actually</em> believe; pick the side you have the vocabulary to defend.</li>
            <li><strong>Structure:</strong>
              <br/>1. Introduction (State your opinion clearly).
              <br/>2. Argument 1 (Support with an example).
              <br/>3. Argument 2 (A second supporting point).
              <br/>4. Conclusion (Summarize).
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Perfecting Your Pacing in YKI Writing
          </h2>
          <p>
            Knowing the schedule is different from executing it. Here are the most common pacing mistakes and how to correct them:
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-6 bg-blue-50 py-3 pr-4 rounded-r-lg">
            <strong>Mistake:</strong> Erasing and rewriting entire sentences because the grammar isn't perfect.
            <br />
            <strong>Correction:</strong> Forward momentum is everything. A completed text with a few grammar mistakes will always score higher than a perfectly grammatical text that abruptly ends halfway through. If you get stuck on a complex structure, simplify it. Change <em>"Olisi ollut parempi, jos..."</em> to <em>"Minun mielestäni on parempi..."</em> if it saves you two minutes of frustration.
          </blockquote>
        </section>

        <hr className="my-12 border-t border-gray-200" />

        <section className="mb-12 bg-gray-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Master the YKI Exam?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Stop guessing and start practicing with timed, realistic exam simulations. Apply these time management strategies today and approach test day with confidence.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            Start Your Practice Session
          </button>
        </section>

        <section className="mb-12" id="faq">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">What is the total YKI test duration for the writing section?</h3>
              <p className="mt-2 text-gray-600">The total time limit for the YKI writing subtest is exactly 55 minutes. You must divide this time yourself among the three required writing tasks.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">What happens if I do not finish all three writing tasks?</h3>
              <p className="mt-2 text-gray-600">Failing to complete all three tasks significantly lowers your chance of achieving a passing grade (Level 3). Examiners assess your overall ability across different registers (informal, formal, and opinion), so missing a task leaves a gap in your assessment.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Should I write a rough draft first to improve my pacing in YKI writing?</h3>
              <p className="mt-2 text-gray-600">No. Due to strict Finnish exam time limits, writing a full draft and copying it over will waste too much time. Instead, take 1-2 minutes to outline your main points, then write your final version directly.</p>
            </div>
          </div>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}