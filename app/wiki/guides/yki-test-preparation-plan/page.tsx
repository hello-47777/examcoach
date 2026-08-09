import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YKI Test Preparation Plan: 30 Day Study Schedule',
  description:
    'Master the YKI exam with our comprehensive 30-day YKI test preparation plan. Includes a structured study schedule, templates, and essential Finnish exam tips.',
  keywords: [
    'YKI test preparation plan',
    'YKI study schedule',
    'Finnish exam preparation',
    'YKI keskitaso plan',
    'how to study for YKI',
  ],
  alternates: {
    canonical: '/wiki/guides/yki-test-preparation-plan',
  },
  openGraph: {
    title: 'YKI Test Preparation Plan: 30 Day Study Schedule',
    description:
      'A complete 30-day strategy and study schedule to pass the intermediate YKI Finnish exam. Includes daily routines, templates, and examiner criteria.',
    type: 'article',
  },
};

export default function YkiPreparationPlanPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much time do I need for my YKI test preparation plan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you already have a foundational A2.2 level of Finnish, a concentrated 30-day YKI test preparation plan requiring 1-2 hours of daily study is sufficient to build exam-specific skills for the B1 level.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should be the main focus of a YKI study schedule?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your YKI study schedule should prioritize active output: timed writing and speaking practice under exam constraints. Passive reading and listening should be secondary to mastering exam templates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I pass the YKI exam without a specific plan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While general fluency helps, the YKI exam tests specific administrative and academic tasks. Failing to understand the test format and strict time limits often causes even fluent speakers to fail, making a structured preparation plan critical.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Header Banner */}
        <header className="bg-slate-900 text-white p-8 sm:p-12">
          <div className="inline-block px-3 py-1 bg-teal-500 text-slate-950 font-semibold text-xs tracking-wider uppercase rounded-full mb-4">
            Study Strategy
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            YKI Test Preparation Plan: 30 Day Study Schedule
          </h1>
          <p className="mt-4 text-slate-300 text-lg sm:text-xl">
            A step-by-step, actionable 30-day blueprint to focus your Finnish studies, master the exam formats, and secure your passing B1 grade.
          </p>
        </header>

        {/* Content Body */}
        <div className="p-6 sm:p-12 space-y-10 text-slate-800 leading-relaxed">
          {/* Introduction */}
          <section className="text-lg">
            <p>
              If you are aiming to pass the intermediate YKI exam (<em>keskitaso</em>) for Finnish citizenship, having a structured <strong>YKI test preparation plan</strong> is your strongest asset. Many candidates fail not because they lack general language skills, but because they are unprepared for the grueling pace, specific task formats, and strict examiner criteria of the actual test day. This guide breaks down exactly what to study, when to study it, and how to execute a targeted 30-day exam bootcamp.
            </p>
          </section>

          <hr className="border-slate-200" />

          {/* Section 1: H2 Primary Keyword */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Why You Need a Dedicated YKI Test Preparation Plan
            </h2>
            <p>
              General Finnish exam preparation is vastly different from casual language learning. In a typical language class, you might spend weeks on the nuances of the partitive plural. In a targeted <strong>YKI study schedule</strong>, you spend your time memorizing highly versatile opinion frameworks and practicing 30-second speaking drills.
            </p>
            
            {/* Scoring Box */}
            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg mt-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Understanding Examiner Scoring</h3>
              <p className="text-teal-800 mb-2">To pass Level 3 (B1), YKI examiners look for three main things over grammatical perfection:</p>
              <ul className="list-disc list-inside space-y-1 text-teal-900 font-medium">
                <li><strong>Task Completion:</strong> Did you address every bullet point in the prompt?</li>
                <li><strong>Comprehensibility:</strong> Can a native speaker understand your message without straining?</li>
                <li><strong>Fluency:</strong> Did you speak immediately during the audio test, or did you leave 15 seconds of dead air?</li>
              </ul>
            </div>
          </section>

          {/* Section 2: 30-Day Schedule */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Your 30-Day YKI Study Schedule
            </h2>
            <p>
              Commit to 1–2 hours per day. Break your month into four distinct phases, focusing heavily on output (speaking and writing).
            </p>

            <div className="space-y-6">
              {/* Phase 1 */}
              <div className="p-6 border border-slate-200 rounded-xl bg-slate-50">
                <h3 className="font-bold text-slate-900 text-xl border-b border-slate-200 pb-2 mb-3">
                  Week 1: Exam Format & Template Mastery
                </h3>
                <p className="text-slate-700 mb-3">
                  Stop studying new grammar. This week is entirely about learning the test structure and memorizing reusable templates.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                  <li><strong>Day 1-2:</strong> Analyze the 4 sub-tests (Reading, Listening, Writing, Speaking). Read official YKI guidelines.</li>
                  <li><strong>Day 3-4:</strong> Memorize opening and closing phrases for formal and informal emails.</li>
                  <li><strong>Day 5-7:</strong> Memorize the 4-step opinion framework (state opinion, reason 1, counter-argument, conclusion).</li>
                </ul>
              </div>

              {/* Phase 2 */}
              <div className="p-6 border border-slate-200 rounded-xl bg-slate-50">
                <h3 className="font-bold text-slate-900 text-xl border-b border-slate-200 pb-2 mb-3">
                  Week 2: Intensive Writing Practice
                </h3>
                <p className="text-slate-700 mb-3">
                  Transition your Finnish exam preparation toward high-speed writing. The YKI writing test gives you roughly 55 minutes for 3 tasks.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                  <li><strong>Day 8-10:</strong> Write 3 informal messages (invitations, apologies to friends) in under 10 minutes each.</li>
                  <li><strong>Day 11-12:</strong> Write 3 formal complaints (faulty product, wrong bill) in under 15 minutes each.</li>
                  <li><strong>Day 13-14:</strong> Draft 2 full opinion essays (<em>mielipidekirjoitus</em>) using your templates from Week 1.</li>
                </ul>
              </div>

              {/* Phase 3 */}
              <div className="p-6 border border-slate-200 rounded-xl bg-slate-50">
                <h3 className="font-bold text-slate-900 text-xl border-b border-slate-200 pb-2 mb-3">
                  Week 3: Reaction Time Speaking Drill
                </h3>
                <p className="text-slate-700 mb-3">
                  The speaking test in the language lab is chaotic. You must speak into a microphone with a countdown timer.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                  <li><strong>Day 15-17:</strong> Practice &quot;Reaction&quot; tasks. Use a random prompt generator. Give yourself 10 seconds to read, then speak for 20 seconds. Record yourself.</li>
                  <li><strong>Day 18-19:</strong> Practice &quot;Opinion&quot; speaking. Talk continuously for 1.5 minutes about common topics (remote work, public transport, recycling).</li>
                  <li><strong>Day 20-21:</strong> Review your recordings. Identify long pauses and replace them with Finnish filler words (<em>niinku, tota, tuota noin</em>).</li>
                </ul>
              </div>

              {/* Phase 4 */}
              <div className="p-6 border border-slate-200 rounded-xl bg-slate-50">
                <h3 className="font-bold text-slate-900 text-xl border-b border-slate-200 pb-2 mb-3">
                  Week 4: Mock Tests & Simulation
                </h3>
                <p className="text-slate-700 mb-3">
                  Build your exam stamina. The YKI test takes nearly 4 hours total.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                  <li><strong>Day 22-25:</strong> Take full, timed Reading and Listening practice tests from the official YKItreenit website.</li>
                  <li><strong>Day 26-28:</strong> Do a full, un-interrupted Writing and Speaking mock test. Do not use dictionaries.</li>
                  <li><strong>Day 29-30:</strong> Rest, review your templates, and focus on stress management.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Templates */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Reusable Frameworks & Templates
            </h2>
            <p>
              Do not reinvent the wheel on exam day. Use these templates to jumpstart your writing tasks immediately.
            </p>

            <div className="bg-slate-900 text-slate-100 p-6 rounded-xl space-y-4 mt-4">
              <h3 className="text-xl font-semibold text-teal-400">Formal Email Framework (Valitus / Complaint)</h3>
              <p className="text-sm text-slate-300">Copy this exact structure for any task asking you to complain to a business or authority:</p>
              <pre className="whitespace-pre-wrap font-mono text-sm bg-slate-800 p-4 rounded-lg border border-slate-700 text-slate-200">
{`Hyvä vastaanottaja, (Dear Recipient,)

Kirjoitan teille, koska haluan antaa palautetta / valittaa... (I am writing to you because I want to give feedback / complain about...)

Ongelma on se, että... (The problem is that...)
Lisäksi... (Furthermore...)

Toivon, että voitte korjata asian mahdollisimman pian. (I hope you can fix the matter as soon as possible.)
Odotan vastaustanne. (I look forward to your reply.)

Ystävällisin terveisin, (Kind regards,)
[Nimi]`}
              </pre>
            </div>
          </section>

          {/* Section 4: Categorized Vocabulary */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              High-Value YKI Vocabulary
            </h2>
            <p>
              To push your grade from A2 to B1, replace basic beginner words with these categorized, advanced transitions.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse mt-4">
                <thead>
                  <tr className="border-b border-slate-300 bg-slate-100">
                    <th className="p-3 font-semibold text-slate-900">Category</th>
                    <th className="p-3 font-semibold text-slate-900">Beginner (Avoid)</th>
                    <th className="p-3 font-semibold text-slate-900">YKI Level 3 (Use These)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm">
                  <tr>
                    <td className="p-3 font-medium">Adding Info</td>
                    <td className="p-3 text-slate-600">Ja (And)</td>
                    <td className="p-3 font-medium text-teal-700">Lisäksi (Additionally) / Sen lisäksi (Besides that)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Contrasting</td>
                    <td className="p-3 text-slate-600">Mutta (But)</td>
                    <td className="p-3 font-medium text-teal-700">Kuitenkin (However) / Toisaalta (On the other hand)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Reasons</td>
                    <td className="p-3 text-slate-600">Koska (Because)</td>
                    <td className="p-3 font-medium text-teal-700">Siksi, että (For the reason that) / Tästä syystä (For this reason)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Summarizing</td>
                    <td className="p-3 text-slate-600">Lopuksi (Finally)</td>
                    <td className="p-3 font-medium text-teal-700">Yhteenvetona voisin sanoa... (In summary I could say...)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Mistakes & Corrections */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Fatal Study Mistakes and Corrections
            </h2>

            <div className="space-y-4 mt-4">
              <div className="p-4 border border-orange-200 bg-orange-50 rounded-xl">
                <h3 className="font-bold text-orange-900">Mistake 1: Only Studying Grammar Books</h3>
                <p className="text-sm text-slate-700 mt-1">
                  <strong>Problem:</strong> Spending 90% of your time filling in grammar workbook blanks. Passive recognition does not translate to producing speech under a 20-second timer.
                </p>
                <p className="text-sm text-slate-800 font-semibold mt-1">
                  <strong>Correction:</strong> Shift your ratio to 80% active output. Write complete essays and record your voice daily.
                </p>
              </div>

              <div className="p-4 border border-orange-200 bg-orange-50 rounded-xl">
                <h3 className="font-bold text-orange-900">Mistake 2: Ignoring Puhekieli (Spoken Language)</h3>
                <p className="text-sm text-slate-700 mt-1">
                  <strong>Problem:</strong> Only training your ear for standard, formal Finnish (<em>kirjakieli</em>). The Listening sub-test heavily features fast-paced, regional spoken dialects.
                </p>
                <p className="text-sm text-slate-800 font-semibold mt-1">
                  <strong>Correction:</strong> Listen to Finnish radio (Yle Puhe) or podcasts to get used to how words merge and drop letters in reality (e.g., <em>minä olen</em> becomes <em>mä oon</em>).
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">
                  How much time do I need for my YKI test preparation plan?
                </h3>
                <p className="text-slate-600 mt-2">
                  Assuming you possess a foundational A2.2 level, a highly concentrated 30-day study plan taking 1-2 hours daily is sufficient to hone exam strategies and push you solidly into the B1 passing bracket.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 text-lg">
                  What should be the main focus of a YKI study schedule?
                </h3>
                <p className="text-slate-600 mt-2">
                  Active output. Your YKI study schedule must prioritize strict timed writing drills and reaction-based speaking practices. Examiner criteria heavily punish candidates who leave blanks or remain silent.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 text-lg">
                  Can I pass the YKI exam without a specific plan?
                </h3>
                <p className="text-slate-600 mt-2">
                  It is highly risky. The YKI test places extreme time pressure on test-takers and requires specific stylistic registers (formal vs informal). Even native-like speakers can fail if they ignore the prompt&apos;s specific task requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
            <ul className="space-y-2">
              <li><Link href="/wiki/guides/how-to-improve-finnish-writing-skills-yki-test" className="text-blue-700 hover:underline">How to Improve Finnish Writing Skills for YKI Test</Link></li>
              <li><Link href="/wiki/guides/how-to-pass-yki-test" className="text-blue-700 hover:underline">How to Pass YKI Test: Complete Strategy Guide</Link></li>
            </ul>
          </nav>

          {/* CTA Box */}
          <section className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 text-center space-y-6 mt-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Execute Your YKI Study Plan with AI Feedback
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
              Don&apos;t practice in the dark. Put your 30-day plan into action by writing essays and recording speaking tasks directly into ExamCoach. Get instant scoring and corrections based on official YKI B1 standards.
            </p>
            <div>
              <Link
                href="/register"
                className="inline-block bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-lg transition duration-200 shadow-lg hover:shadow-teal-500/20"
              >
                Start Your 30-Day YKI Prep Now
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
