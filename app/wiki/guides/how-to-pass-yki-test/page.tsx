import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Pass YKI Intermediate Test: Complete Strategy Guide',
  description:
    'Master the Finnish YKI keskitaso exam with our comprehensive guide. Learn examiner criteria, sub-test strategies, reusable writing frameworks, and essential Finnish exam tips.',
  keywords: [
    'how to pass YKI test',
    'YKI keskitaso preparation',
    'Finnish exam tips',
    'YKI test Finnish citizenship',
    'YKI speaking templates',
  ],
  alternates: {
    canonical: '/wiki/guides/how-to-pass-yki-test',
  },
  openGraph: {
    title: 'How to Pass YKI Intermediate Test: Complete Strategy Guide',
    description:
      'Step-by-step strategy to pass the intermediate YKI Finnish exam (keskitaso). Includes templates, vocabulary, examiner criteria, and mistake corrections.',
    type: 'article',
  },
};

export default function YkiGuidePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What level is required to pass YKI test for Finnish citizenship?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To apply for Finnish citizenship, you need at least level 3 (B1 in CEFR) in either Speaking + Writing, Reading + Speaking, or Listening + Writing. Most candidates aim for passing the Intermediate (Keskitaso) test with level 3 or 4.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if I fail one sub-test in YKI Keskitaso?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The YKI test consists of four sub-tests: Reading, Listening, Writing, and Speaking. You receive an official certificate showing your score for each section. Citizenship requirements usually demand a passing pair (e.g., Speaking B1 and Writing B1) from a single test sitting, so failing a key section means you will likely need to retake the full exam.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long should I prepare for YKI keskitaso preparation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dedicated YKI keskitaso preparation typically takes 3 to 6 months of targeted practice if you already hold an A2.2 base level. Focus specifically on timed writing prompts, reaction-time speaking exercises, and news-level reading comprehension.',
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
            YKI Exam Guide
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            How to Pass YKI Test: Complete Intermediate Strategy Guide
          </h1>
          <p className="mt-4 text-slate-300 text-lg sm:text-xl">
            A proven, step-by-step roadmap to master the YKI keskitaso exam, satisfy Finnish citizenship requirements, and maximize your score across all 4 sub-tests.
          </p>
        </header>

        {/* Content Body */}
        <div className="p-6 sm:p-12 space-y-10 text-slate-800 leading-relaxed">
          {/* Introduction */}
          <section className="text-lg">
            <p>
              Discovering <strong>how to pass YKI test</strong> (<em>Yleiset kielitutkinnot</em>) at the intermediate level (<em>keskitaso</em>, target levels 3–4) requires far more than generic vocabulary practice. Successful candidates succeed because they understand examiner expectations, build predictable writing frameworks, and train specifically for time-pressured speaking prompts. This guide breaks down actionable <strong>YKI keskitaso preparation</strong> strategies and offers practical <strong>Finnish exam tips</strong> you can implement immediately.
            </p>
          </section>

          <hr className="border-slate-200" />

          {/* Section 1: Scoring and Examiner Criteria */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Understanding Examiner Criteria for YKI Level 3 (B1)
            </h2>
            <p>
              Examiners evaluate your performance using four core pillars. You do not need perfect grammar to pass Level 3; you need functional clarity and task fulfillment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-5 border border-slate-200 rounded-xl bg-slate-50">
                <h3 className="font-bold text-slate-900 text-lg mb-2">1. Task Completion (Tehtävänanto)</h3>
                <p className="text-sm text-slate-600">
                  Did you answer every prompt element? Omitting even one sub-question in writing or speaking will drop your score below Level 3.
                </p>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl bg-slate-50">
                <h3 className="font-bold text-slate-900 text-lg mb-2">2. Fluency & Coherence (Sujuvuus)</h3>
                <p className="text-sm text-slate-600">
                  Can you maintain communication without excessive long pauses? Use connectors (<em>siksi, kuitenkin, mielestäni</em>) to create natural flow.
                </p>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl bg-slate-50">
                <h3 className="font-bold text-slate-900 text-lg mb-2">3. Vocabulary Breadth (Sanasto)</h3>
                <p className="text-sm text-slate-600">
                  Avoid repeating basic words like <em>hyvä</em> or <em>kiva</em>. Express opinions using varied phrasing like <em>vaikuttaa siltä</em> or <em>olemme yhtä mieltä</em>.
                </p>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl bg-slate-50">
                <h3 className="font-bold text-slate-900 text-lg mb-2">4. Grammatical Control (Kielioppi)</h3>
                <p className="text-sm text-slate-600">
                  Minor case-ending errors won&apos;t fail you. Focus on correct word order (V2 rule, object forms) and essential tenses (present, imperfect, perfect).
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Step-by-Step Strategy */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Step-by-Step Sub-Test Strategy: How to Pass YKI Test
            </h2>

            <p>
              The YKI Keskitaso test consists of four distinct components. Tailor your prep strategy to each sub-test&apos;s specific constraints.
            </p>

            {/* Sub-test 1 */}
            <div className="border-l-4 border-teal-500 pl-4 py-2 my-4">
              <h3 className="text-xl font-bold text-slate-900">1. Reading Comprehension (Tekstin ymmärtäminen)</h3>
              <p className="mt-2 text-slate-700">
                You will read news items, opinion pieces, official notices, and messages. Time management is crucial.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
                <li>Read the questions <strong>before</strong> reading the text to identify keywords.</li>
                <li>Watch out for distractor words like <em>ei koskaan</em> (never) or <em>vain</em> (only).</li>
                <li>Do not get stuck on unfamiliar words; deduce context from surrounding verbs.</li>
              </ul>
            </div>

            {/* Sub-test 2 */}
            <div className="border-l-4 border-teal-500 pl-4 py-2 my-4">
              <h3 className="text-xl font-bold text-slate-900">2. Listening Comprehension (Puheen ymmärtäminen)</h3>
              <p className="mt-2 text-slate-700">
                Audio recordings feature fast spoken Finnish (<em>puhekieli</em>) alongside standard Finnish (<em>yleiskieli</em>).
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
                <li>Focus on spoken numbers, dates, and common spoken reductions (e.g., <em>mä olin</em>, <em>se sano</em>).</li>
                <li>Use the pause time before audio tracks to predict context and question options.</li>
              </ul>
            </div>

            {/* Sub-test 3 */}
            <div className="border-l-4 border-teal-500 pl-4 py-2 my-4">
              <h3 className="text-xl font-bold text-slate-900">3. Writing (Kirjoittaminen)</h3>
              <p className="mt-2 text-slate-700">
                You will write 3 tasks: an informal message, a formal email/complaint, and an opinion piece (<em>mielipidekirjoitus</em>).
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
                <li>Always use appropriate register (informal vs. formal tone).</li>
                <li>Follow predictable structure templates to save execution time.</li>
              </ul>
            </div>

            {/* Sub-test 4 */}
            <div className="border-l-4 border-teal-500 pl-4 py-2 my-4">
              <h3 className="text-xl font-bold text-slate-900">4. Speaking (Puhuminen)</h3>
              <p className="mt-2 text-slate-700">
                Recorded in a language lab under strict countdown timers. Hesitation is your biggest obstacle.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
                <li>Start speaking immediately when the beep sounds; filler phrases keep your turn active.</li>
                <li>Even if you make a mistake, keep going—self-correct quickly without stopping.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Reusable Frameworks & Templates */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Reusable Templates for YKI Writing and Speaking
            </h2>
            <p>
              Memorizing structured sentence frames guarantees that you won&apos;t freeze during the exam.
            </p>

            <div className="bg-slate-900 text-slate-100 p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold text-teal-400">Formal Complaint / Feedback Email Template</h3>
              <p className="text-sm text-slate-300">Use this template structure for formal writing tasks (e.g., complaining about a service or requesting a refund):</p>
              <pre className="whitespace-pre-wrap font-mono text-sm bg-slate-800 p-4 rounded-lg border border-slate-700 text-slate-200">
{`Hyvä vastaanottaja,

Kirjoitan teille ilmoittaakseni ongelmasta, joka liittyy [aihe/palvelu].
Ostin / varasin [asia] [päivämäärä], mutta [selitä ongelma tiivistetysti].

Olin erittäin pettynyt, koska [syy]. Tämä aiheutti minulle vaivaa, sillä [lisäperustelu].

Toivoisin, että voisitte [toimenpide: esim. palauttaa rahat / korjata asian] mahdollisimman pian.

Ystävällisin terveisin,
[Sinun Nimesi]`}
              </pre>
            </div>

            <div className="bg-slate-900 text-slate-100 p-6 rounded-xl space-y-4 mt-6">
              <h3 className="text-xl font-semibold text-teal-400">Opinion Writing / Speaking Framework</h3>
              <p className="text-sm text-slate-300">Use this 4-step frame to build coherent argument responses quickly:</p>
              <div className="space-y-2 text-sm">
                <p><strong className="text-teal-300">1. Stating Position:</strong> Olen sitä mieltä, että... (I am of the opinion that...)</p>
                <p><strong className="text-teal-300">2. Primary Reason:</strong> Ensinnäkin, mielestäni on tärkeää huomata, että... (First of all, I think it is important to note that...)</p>
                <p><strong className="text-teal-300">3. Counter-point / Example:</strong> Toisaalta jotkut ajattelevat, että... Mutta minun mielestäni... (On the other hand some think that... But in my opinion...)</p>
                <p><strong className="text-teal-300">4. Conclusion:</strong> Yhteenvetona voidaan todeta, että... (In summary, it can be stated that...)</p>
              </div>
            </div>
          </section>

          {/* Section 4: Categorized Phrase Book */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Categorized Phrases for Essential Finnish Exam Tips
            </h2>
            <p>
              Upgrade your vocabulary by substituting simple phrases with standard YKI-level transitions:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse my-4">
                <thead>
                  <tr className="border-b border-slate-300 bg-slate-100">
                    <th className="p-3 font-semibold text-slate-900">Function</th>
                    <th className="p-3 font-semibold text-slate-900">Basic Phrase</th>
                    <th className="p-3 font-semibold text-slate-900">YKI Level 3+ Alternative</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm">
                  <tr>
                    <td className="p-3 font-medium">Expressing Opinion</td>
                    <td className="p-3 text-slate-600">Minusta tämä on hyvä.</td>
                    <td className="p-3 font-medium text-teal-700">Mielestäni tämä on erittäin toimiva ratkaisu.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Adding Points</td>
                    <td className="p-3 text-slate-600">Ja myös...</td>
                    <td className="p-3 font-medium text-teal-700">Sen lisäksi on syytä mainita, että...</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Showing Contrast</td>
                    <td className="p-3 text-slate-600">Mutta...</td>
                    <td className="p-3 font-medium text-teal-700">Siitä huolimatta / Toisaalta...</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Buying Time (Speaking)</td>
                    <td className="p-3 text-slate-600">Ööö... (silence)</td>
                    <td className="p-3 font-medium text-teal-700">Tämä onkin mielenkiintoinen kysymys... Let&apos;s see: Hetkinen...</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Mistakes & Corrections */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Common YKI Mistakes and How to Fix Them
            </h2>

            <div className="space-y-4">
              <div className="p-4 border border-red-200 bg-red-50/50 rounded-xl">
                <h3 className="font-bold text-red-900">Mistake 1: Mixing Spoken Finnish in Formal Writing</h3>
                <p className="text-sm text-slate-700 mt-1">
                  <strong>Problem:</strong> Writing <em>&quot;Mä haluan valittaa tästä tuotteesta&quot;</em> in an official letter.
                </p>
                <p className="text-sm text-slate-800 font-semibold mt-1">
                  <strong>Correction:</strong> Reserve spoken pronouns (<em>mä, sä, se</em>) for informal messages only. Use formal standard Finnish: <em>&quot;Haluan valittaa tästä tuotteesta.&quot;</em>
                </p>
              </div>

              <div className="p-4 border border-red-200 bg-red-50/50 rounded-xl">
                <h3 className="font-bold text-red-900">Mistake 2: Missing Prompts in Writing/Speaking Tasks</h3>
                <p className="text-sm text-slate-700 mt-1">
                  <strong>Problem:</strong> Answering only 2 out of 3 sub-questions given in the essay prompt.
                </p>
                <p className="text-sm text-slate-800 font-semibold mt-1">
                  <strong>Correction:</strong> Underline every question bullet point before drafting. Cross them off one by one as you complete them.
                </p>
              </div>

              <div className="p-4 border border-red-200 bg-red-50/50 rounded-xl">
                <h3 className="font-bold text-red-900">Mistake 3: Silence During Speaking Audio Record</h3>
                <p className="text-sm text-slate-700 mt-1">
                  <strong>Problem:</strong> Remaining silent while thinking of the perfect grammatical phrase.
                </p>
                <p className="text-sm text-slate-800 font-semibold mt-1">
                  <strong>Correction:</strong> Continuous imperfect speech scores higher than dead silence. Use stall phrases like <em>&quot;Aivan aluksi voisin sanoa...&quot;</em> while formulating your thought.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Actionable Preparation Roadmap */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Actionable 4-Week YKI Keskitaso Preparation Roadmap
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-slate-700">
              <li>
                <strong>Week 1: Foundations & Structure:</strong> Memorize 10 core connectors and standard email openers. Practice identifying standard text types (news articles vs. opinion pieces).
              </li>
              <li>
                <strong>Week 2: Reaction Time & Speaking Audio:</strong> Set a 30-second timer and practice answering random reaction scenarios aloud (e.g., returning an item at a supermarket, making a doctor appointment).
              </li>
              <li>
                <strong>Week 3: Timed Writing Mock Practice:</strong> Write 3 full tasks (informal, formal, opinion) strictly within the time limits. Use AI feedback to spot recurring grammatical errors.
              </li>
              <li>
                <strong>Week 4: Full Simulation & Review:</strong> Complete full listening and reading past-paper simulations under test conditions. Review high-frequency thematic vocabulary (healthcare, environment, working life, education).
              </li>
            </ol>
          </section>

          {/* FAQ Section */}
          <section className="border-t border-slate-200 pt-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">
                  What score is required to pass YKI test for Finnish citizenship?
                </h3>
                <p className="text-slate-600 mt-1">
                  You need at least Level 3 (B1) in two specific combinations from a single test session: either Speaking + Writing, Reading + Speaking, or Listening + Writing.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 text-lg">
                  What happens if I fail one sub-test in YKI Keskitaso?
                </h3>
                <p className="text-slate-600 mt-1">
                  Your official YKI certificate lists results for all four sub-tests individually. However, for citizenship purposes, your passing combination must fulfill MIGRI requirements. Failing a vital sub-test usually requires re-registering for the exam.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 text-lg">
                  How long should I dedicate to YKI keskitaso preparation?
                </h3>
                <p className="text-slate-600 mt-1">
                  Most candidates prepare for 3 to 6 months. Consistent daily 30-minute practice sessions targeting active production (speaking aloud and writing templates) yield much faster progress than passive reading.
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
            <ul className="space-y-2">
              <li><Link href="/wiki/guides/how-to-improve-finnish-writing-skills-yki-test" className="text-blue-700 hover:underline">How to Improve Finnish Writing Skills for YKI Test</Link></li>
              <li><Link href="/wiki/guides/yki-test-preparation-plan" className="text-blue-700 hover:underline">YKI Test Preparation Plan: 30 Day Study Schedule</Link></li>
            </ul>
          </nav>

          {/* CTA Box */}
          <section className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 text-center space-y-6 mt-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Pass Your YKI Test on the First Try?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
              Get instant, AI-powered feedback on your YKI writing and speaking tasks. Practice real exam prompts and track your performance against official B1 examiner criteria.
            </p>
            <div>
              <Link
                href="/register"
                className="inline-block bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-lg transition duration-200 shadow-lg hover:shadow-teal-500/20"
              >
                Start Free YKI Practice Now
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
