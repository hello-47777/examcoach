import { Metadata } from 'next';
import Link from 'next/link';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('guides', 'finnish-language-test-citizenship', {
  title: 'Finnish Language Test for Citizenship: Complete YKI Writing Guide',
  description: 'Master the Finnish language test for citizenship (YKI). Learn examiner criteria, proven writing templates, speaking frameworks, and strategies to pass B1.',
});

export default function FinnishCitizenshipGuidePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which YKI sub-tests are required for Finnish citizenship?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To satisfy the YKI citizenship requirement, you must achieve at least Level 3 (B1) in one of the approved combinations: Speaking (Puhuminen) + Writing (Kirjoittaminen), Listening (Puheen ymmärtäminen) + Writing (Kirjoittaminen), or Reading (Tekstin ymmärtäminen) + Speaking (Puhuminen). Combining sub-tests across different test dates is allowed under Finnish Immigration Service (Migri) rules.',
        },
      },
      {
        '@type': 'Question',
        name: 'What level on the CEFR scale is required for the Finnish citizenship exam?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Finnish citizenship exam requires YKI Level 3, which corresponds to the B1 level on the Common European Framework of Reference for Languages (CEFR). This represents an intermediate skill level where you can handle everyday social and official situations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to prepare for the YKI intermediate test?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For learners starting from A2 level, targeted preparation typically takes 3 to 6 months of consistent daily practice. Starting from scratch (A0) usually requires 1 to 2 years of study to comfortably reach B1 proficiency across all four sub-skills.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if I fail one section of the YKI test?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you fail one section, you do not lose credit for the sections you passed on your certificate. You can retake the entire YKI exam at a later date and combine passing scores from two separate certificates, provided they meet Migri valid combination criteria.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header Banner */}
      <header className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 bg-blue-600 text-blue-100 font-semibold text-xs rounded-full uppercase tracking-wider mb-4">
            YKI Exam Strategy
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Finnish Language Test for Citizenship: Complete YKI Guide
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Everything you need to know about passing the intermediate YKI exam, fulfilling Migri requirements, and securing your Finnish citizenship with confidence.
          </p>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-slate lg:prose-lg max-w-none">
          
          {/* Introduction */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200 mb-10">
            <p className="text-lg leading-relaxed text-slate-700 m-0">
              Passing the official <strong>Finnish language test citizenship</strong> requirement is one of the final and most significant hurdles on your path to becoming a Finnish citizen. Known officially as the YKI test (<em>Yleiset kielitutkinnot</em>), this examination assesses your practical, everyday ability to communicate in Finnish. To fulfill the official <strong>YKI citizenship requirement</strong>, you must demonstrate intermediate language proficiency (Level 3 or B1 on the CEFR scale).
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6">
            Understanding the Finnish Language Test Citizenship Requirements
          </h2>
          <p>
            The Finnish Immigration Service (Migri) mandates language proficiency for naturalization. The standard path is taking the Intermediate Level (<em>Keskitaso</em>) <strong>Finnish citizenship exam</strong>, which evaluates four key sub-skills:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Tekstin ymmärtäminen</strong> (Reading Comprehension)</li>
            <li><strong>Puheen ymmärtäminen</strong> (Listening Comprehension)</li>
            <li><strong>Kirjoittaminen</strong> (Writing)</li>
            <li><strong>Puhuminen</strong> (Speaking)</li>
          </ul>
          <p>
            To fulfill the citizenship condition, you must achieve at least <strong>Level 3</strong> in specific sub-test combinations. Understanding how these combinations work ensures you focus your preparation on the components that matter most.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden border border-slate-200">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="p-4 font-bold text-slate-800">Approved Combination Pair</th>
                  <th className="p-4 font-bold text-slate-800">Minimum Required Scores</th>
                  <th className="p-4 font-bold text-slate-800">Migri Validity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm sm:text-base">
                <tr>
                  <td className="p-4 font-medium text-slate-900">Speaking + Writing</td>
                  <td className="p-4 text-slate-700">Level 3 in both</td>
                  <td className="p-4 text-emerald-700 font-semibold">Valid</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-900">Listening + Speaking</td>
                  <td className="p-4 text-slate-700">Level 3 in both</td>
                  <td className="p-4 text-emerald-700 font-semibold">Valid</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-900">Reading + Writing</td>
                  <td className="p-4 text-slate-700">Level 3 in both</td>
                  <td className="p-4 text-emerald-700 font-semibold">Valid</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 2 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6">
            Mastering the Finnish Language Test for Citizenship: 4-Step Framework
          </h2>
          <p>
            Achieving B1 level does not require flawless grammar or flawless pronunciation. Examiners assess whether you can communicate functionally in real life. Use this 4-step framework to structured your preparation efficiently.
          </p>

          <div className="space-y-8 my-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Step 1: Understand Examiner Criteria</h3>
              <p className="text-slate-700 mb-4">
                YKI assessors grade your work based on functional ability rather than academic perfection. In the writing and speaking sections, they evaluate three core criteria:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                  <span className="font-bold block text-slate-900 mb-1">Task Completion</span>
                  Did you answer all parts of the prompt clearly?
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                  <span className="font-bold block text-slate-900 mb-1">Comprehensibility</span>
                  Can a native speaker understand your message without excessive effort?
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                  <span className="font-bold block text-slate-900 mb-1">Vocabulary & Structure</span>
                  Do you use adequate connectors, appropriate tenses, and relevant vocabulary?
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Step 2: Learn Reusable Writing Frameworks</h3>
              <p className="text-slate-700 mb-4">
                The YKI writing section always contains three tasks: an informal message, a formal request or complaint, and an opinion essay (<em>mielipidekirjoitus</em>). Use structured frameworks to build your responses rapidly under time pressure.
              </p>

              <div className="bg-slate-900 text-slate-100 p-5 rounded-md font-mono text-sm space-y-3">
                <p className="text-blue-400 font-bold">// Formal Complaint / Request Template</p>
                <p><strong>Opening:</strong> Hyvä vastaanottaja / Arvoisa asiakaspalvelu,</p>
                <p><strong>Reason:</strong> Kirjoitan teille, koska haluan antaa palautetta / tilaamani tuote on rikki.</p>
                <p><strong>Details:</strong> Ostin tuotteen viime viikolla, mutta se ei toimi odotetulla tavalla...</p>
                <p><strong>Action Request:</strong> Pyydän teitä korjaamaan asian tai palauttamaan rahani mahdollisimman pian.</p>
                <p><strong>Closing:</strong> Ystävällisin terveisin, [Sinun Nimesi]</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Step 3: Internalize Categorized Phrases</h3>
              <p className="text-slate-700 mb-4">
                Memorizing high-yield phrases allows you to quickly structure opinions and reactions during both the speaking and writing portions of the exam.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">Expressing Opinions (Mielipiteen ilmaiseminen)</h4>
                  <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                    <li><em>Olen sitä mieltä, että...</em> (I am of the opinion that...)</li>
                    <li><em>Minun mielestäni tämä on tärkeää, koska...</em> (In my opinion, this is important because...)</li>
                    <li><em>Uskon, että tulevaisuudessa...</em> (I believe that in the future...)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">Agreeing & Disagreeing (Samaa ja eri mieltä oleminen)</h4>
                  <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                    <li><em>Olen täysin samaa mieltä.</em> (I completely agree.)</li>
                    <li><em>Ymmärrän kantasi, mutta mielestäni...</em> (I understand your point, but in my opinion...)</li>
                    <li><em>Se pitää paikkansa, mutta...</em> (That is true, but...)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Step 4: Avoid Common YKI Exam Mistakes</h3>
              <p className="text-slate-700 mb-4">
                Many candidates fail to reach Level 3 due to preventable tactical errors rather than lack of language knowledge.
              </p>
              
              <div className="space-y-3">
                <div className="p-3 bg-rose-50 border-l-4 border-rose-500 rounded-r">
                  <p className="text-sm font-bold text-rose-900 m-0">Problem: Remaining Silent During the Speaking Test</p>
                  <p className="text-sm text-rose-800 m-0 mt-1">
                    Leaving long silences or giving one-word answers prevents examiners from evaluating your ability. 
                    <br />
                    <strong>Fix:</strong> Use filler phrases like <em>"Hetkinen..."</em> or <em>"Odotas, mietin vähän..."</em> while forming your thoughts.
                  </p>
                </div>

                <div className="p-3 bg-rose-50 border-l-4 border-rose-500 rounded-r">
                  <p className="text-sm font-bold text-rose-900 m-0">Problem: Ignoring Prompt Bullet Points in Writing</p>
                  <p className="text-sm text-rose-800 m-0 mt-1">
                    YKI prompts usually list 3 key points you must include. Leaving one out automatically lowers your task completion score.
                    <br />
                    <strong>Fix:</strong> Check off every bullet point as you complete your draft.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Practical Example Section */}
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6">
            Practical Writing Example: Opinion Essay (Mielipidekirjoitus)
          </h2>
          <p>
            Here is a realistic B1-level example responding to the topic: <em>"Pitäisikö julkisen liikenteen olla ilmaista?"</em> (Should public transport be free?).
          </p>

          <div className="bg-slate-100 p-6 rounded-lg border border-slate-300 my-6">
            <h4 className="font-bold text-slate-900 mb-2">Sample B1 Response:</h4>
            <p className="italic text-slate-800 leading-relaxed">
              "Nykyään monet ihmiset puhuvat siitä, pitäisikö julkisen liikenteen olla ilmaista kaikille. Olen sitä mieltä, että ilmainen bussi- ja junaliikenne olisi erittäin hyvä asia.
              <br /><br />
              Ensinnäkin, se auttaisi ympäristöä. Jos bussit olisivat ilmaisia, useammat ihmiset jättäisivät auton kotiin. Tämä vähentäisi päästöjä ja ruuhkia kaupungeissa. Toiseksi, se säästäisi opiskelijoiden ja perheiden rahaa.
              <br /><br />
              Toisaalta ymmärrän, että kaupunkien täytyy maksaa lippujen hinnat verorahoista. Silti uskon, että edut ovat suurempia kuin haitat. Yhteenvetona toivon, että Suomessa kokeillaan tätä mallia pian."
            </p>
          </div>

          {/* Related Articles */}
          <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
            <ul className="space-y-2">
              <li><Link href="/wiki/guides/how-to-improve-finnish-writing-skills-yki-test" className="text-blue-700 hover:underline">How to Improve Finnish Writing Skills for YKI Test</Link></li>
              <li><Link href="/wiki/scoring/yki-b1-guide" className="text-blue-700 hover:underline">YKI B1 Guide</Link></li>
            </ul>
          </nav>

          {/* Interactive Exam Preparation CTA Section */}
          <section className="bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-8 sm:p-10 my-12 shadow-xl border border-blue-800">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready to Pass Your YKI Finnish Test?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Accelerate your preparation with ExamCoach.ai. Practice with realistic YKI writing prompts, receive instant feedback calibrated to B1 examiner standards, and build fluency fast.
              </p>
              <div className="pt-2">
                <Link
                  href="/signup"
                  className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition duration-200 shadow-lg hover:shadow-blue-500/25"
                >
                  Start YKI Preparation Free
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-12 pt-8 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Which YKI sub-tests are required for Finnish citizenship?
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed m-0">
                  To satisfy the YKI citizenship requirement, you must achieve at least Level 3 (B1) in one of the approved combinations: Speaking + Writing, Listening + Speaking, or Reading + Writing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  What level on the CEFR scale is required for the Finnish citizenship exam?
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed m-0">
                  The Finnish citizenship exam requires YKI Level 3, which corresponds directly to B1 on the CEFR scale.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  How long does it take to prepare for the YKI intermediate test?
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed m-0">
                  From an A2 starting point, 3 to 6 months of targeted daily practice is typically enough. Beginners (A0) usually require 1 to 2 years to reach solid B1 skills.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  What happens if I fail one section of the YKI test?
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed m-0">
                  You retain credit for sections you passed. You can retake the test later and combine scores from two certificates to satisfy Migri requirements.
                </p>
              </div>
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}
