import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YKI Test for Finnish Citizenship: Requirements and Preparation',
  description: 'Master the YKI citizenship test and fulfill the Finnish citizenship language requirement. Discover scoring criteria, writing templates, and common mistakes.',
  openGraph: {
    title: 'YKI Test for Finnish Citizenship: Requirements and Preparation',
    description: 'Complete guide to passing the YKI exam for Finnish citizenship. Learn examiner criteria, vocabulary, and step-by-step preparation strategies.',
    type: 'article',
  },
};

export default function YkiCitizenshipTestGuide() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the YKI citizenship test?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The YKI citizenship test refers to the National Certificate of Language Proficiency (Yleiset kielitutkinnot) at the intermediate level (Keskitaso). Passing this test at Level 3 (B1) satisfies the Finnish citizenship language requirement.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which parts of the YKI exam do I need to pass for citizenship?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You do not need to pass all four parts. The Finnish Immigration Service (Migri) accepts combinations such as Speaking + Writing, Listening + Writing, or Reading + Speaking, provided you achieve at least Level 3 in those specific pairs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if I make grammar mistakes in the YKI exam?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Examiners expect grammar mistakes at Level 3 (B1). The scoring focuses on comprehensibility and task completion. As long as your message is clear and you address all prompt requirements, minor grammatical errors will not prevent you from passing.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long should I study to pass the YKI exam?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you are starting from an A2 level, 3 to 6 months of targeted practice focusing on YKI-specific tasks (like email writing and opinion speaking) is generally sufficient to reach the required Level 3.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 antialiased font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header Section */}
      <header className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 bg-blue-600 text-blue-100 font-semibold text-xs rounded-full uppercase tracking-wider mb-4">
            Official Guidelines & Preparation
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            YKI Test for Finnish Citizenship: Requirements and Preparation
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Navigate the Finnish citizenship language requirement with our comprehensive step-by-step guide. Learn exactly what examiners look for, utilize reusable templates, and avoid common test-day pitfalls.
          </p>
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-slate lg:prose-lg max-w-none">
          
          {/* Introduction */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200 mb-10">
            <p className="text-lg leading-relaxed text-slate-700 m-0">
              Taking the <strong>YKI citizenship test</strong> is often the final and most intimidating hurdle for foreigners looking to secure a Finnish passport. While learning a new language is a marathon, passing the intermediate YKI exam requires a focused sprint on practical communication skills rather than academic perfection. This guide will break down the exact requirements, scoring criteria, and actionable frameworks you need to succeed.
            </p>
          </div>

          {/* Section 1: Requirements */}
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6">
            Understanding the YKI Citizenship Test Requirements
          </h2>
          <p>
            To fulfill the <strong>Finnish citizenship language requirement</strong>, you must demonstrate a B1 level of proficiency on the Common European Framework of Reference for Languages (CEFR). In the Finnish system, this translates to achieving a <strong>Level 3</strong> on the intermediate YKI exam.
          </p>
          <p>
            The Finnish Immigration Service (Migri) does not require you to pass all four sections of the test. You only need a Level 3 in one of the following approved combinations:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Writing + Speaking</strong> (The most balanced combination)</li>
            <li><strong>Writing + Listening</strong> (Ideal for strong writers who struggle with spontaneous speaking)</li>
            <li><strong>Speaking + Reading</strong> (Ideal for confident speakers who struggle with grammar)</li>
          </ul>

          {/* Section 2: Scoring */}
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6">
            How the YKI Exam is Scored: Examiner Criteria
          </h2>
          <p>
            A major mistake candidates make is striving for flawless Finnish. YKI examiners do not deduct points for every grammatical error. Instead, they score based on <strong>functional communication</strong>. To secure a Level 3, your performance must satisfy three main criteria:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-sm">
            <div className="bg-slate-100 p-5 rounded-lg border border-slate-200">
              <span className="font-bold text-lg text-slate-900 block mb-2">1. Task Completion</span>
              <p className="text-slate-700 m-0">Did you answer the prompt entirely? If a writing task has three bullet points, you must address all three to pass.</p>
            </div>
            <div className="bg-slate-100 p-5 rounded-lg border border-slate-200">
              <span className="font-bold text-lg text-slate-900 block mb-2">2. Comprehensibility</span>
              <p className="text-slate-700 m-0">Can a native speaker understand your message without having to guess your intentions? Clarity beats complex grammar.</p>
            </div>
            <div className="bg-slate-100 p-5 rounded-lg border border-slate-200">
              <span className="font-bold text-lg text-slate-900 block mb-2">3. Vocabulary Usage</span>
              <p className="text-slate-700 m-0">Do you use appropriate words for the context? Using basic vocabulary accurately is better than using advanced vocabulary incorrectly.</p>
            </div>
          </div>

          {/* Section 3: Templates */}
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6">
            Reusable Frameworks: Writing Section Templates
          </h2>
          <p>
            The Writing section always includes a formal message (like a complaint or request) and an informal message (like an email to a friend). Memorizing structural templates saves valuable time during the test.
          </p>

          <div className="bg-slate-900 text-slate-100 p-6 rounded-xl font-mono text-sm space-y-4 shadow-lg my-8">
            <div>
              <p className="text-emerald-400 font-bold mb-2">// FORMAL COMPLAINT TEMPLATE (Virallinen viesti)</p>
              <p><strong>Greeting:</strong> Hyvä asiakaspalvelu, / Arvoisa vastaanottaja,</p>
              <p><strong>Opening:</strong> Kirjoitan teille, koska haluan antaa palautetta / tehdä valituksen.</p>
              <p><strong>The Issue:</strong> Ostin teiltä [tuote] eilen, mutta se on rikki. / Kävin ravintolassanne, ja palvelu oli hidasta.</p>
              <p><strong>The Request:</strong> Haluaisin saada uuden tuotteen tai rahani takaisin. / Toivon, että korjaatte asian nopeasti.</p>
              <p><strong>Closing:</strong> Ystävällisin terveisin,<br />[Etunimi Sukunimi]</p>
            </div>
          </div>

          {/* Section 4: Example */}
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6">
            Realistic Exam Example: Opinion Piece (Mielipidekirjoitus)
          </h2>
          <p>
            The final writing task is usually an opinion piece. You must express your thoughts clearly. Here is a realistic Level 3 (B1) response.
          </p>
          <div className="border-l-4 border-blue-600 pl-6 py-2 my-6 bg-slate-50 p-4 rounded-r-lg">
            <h4 className="font-bold text-slate-900 mb-2">Prompt: Pitäisikö kaikkien työskennellä etänä? (Should everyone work remotely?)</h4>
            <p className="italic text-slate-700 mb-4">
              "Nykyään etätyö on hyvin yleistä. Olen sitä mieltä, että se on hyvä asia, mutta se ei sovi kaikille.
              <br /><br />
              Ensinnäkin, etätyö säästää paljon aikaa ja rahaa, koska ihmisten ei tarvitse matkustaa työpaikalle. Toiseksi, kotona on usein rauhallisempaa tehdä töitä.
              <br /><br />
              Toisaalta kaikki työt eivät onnistu etänä, esimerkiksi lääkärin tai myyjän työ. Lisäksi jotkut ihmiset kaipaavat työkavereita. Yhteenvetona sanoisin, että paras vaihtoehto on hybridimalli."
            </p>
            <p className="text-sm font-semibold text-blue-800 m-0">Why this scores B1 (Level 3): It uses clear connectors (Ensinnäkin, Toisaalta, Yhteenvetona), addresses both sides of the argument, and maintains perfect comprehensibility despite simple grammar.</p>
          </div>

          {/* Section 5: Vocabulary */}
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6">
            Categorized Vocabulary to Boost Your Score
          </h2>
          <p>
            Using transition words (connectors) automatically elevates your language from beginner (A2) to intermediate (B1). Memorize these phrases for both speaking and writing:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="p-4 font-bold text-slate-800">Category</th>
                  <th className="p-4 font-bold text-slate-800">Finnish Phrase</th>
                  <th className="p-4 font-bold text-slate-800">English Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm sm:text-base">
                <tr>
                  <td className="p-4 font-medium text-slate-900" rowSpan={3}>Expressing Opinion</td>
                  <td className="p-4 text-slate-700">Olen sitä mieltä, että...</td>
                  <td className="p-4 text-slate-700">I am of the opinion that...</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700">Minun mielestäni...</td>
                  <td className="p-4 text-slate-700">In my opinion...</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700">Uskon, että...</td>
                  <td className="p-4 text-slate-700">I believe that...</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-900 bg-slate-50" rowSpan={3}>Structuring Ideas</td>
                  <td className="p-4 text-slate-700 bg-slate-50">Ensinnäkin... Toiseksi...</td>
                  <td className="p-4 text-slate-700 bg-slate-50">Firstly... Secondly...</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 bg-slate-50">Toisaalta...</td>
                  <td className="p-4 text-slate-700 bg-slate-50">On the other hand...</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700 bg-slate-50">Yhteenvetona...</td>
                  <td className="p-4 text-slate-700 bg-slate-50">In conclusion...</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 6: Mistakes */}
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6">
            Common Mistakes and How to Correct Them
          </h2>
          
          <div className="space-y-6 my-8">
            <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded-r-lg">
              <h3 className="text-rose-900 font-bold text-lg m-0 mb-2">Mistake 1: Freezing During the Speaking Test</h3>
              <p className="text-rose-800 m-0 mb-3">
                The speaking test happens in a language lab where you speak into a headset. Many candidates freeze and remain silent because they can't think of the perfect word.
              </p>
              <p className="text-slate-900 font-semibold m-0">
                Correction: Always use "filler phrases" to buy time. Say <em>"Hetkinen, minun täytyy miettiä..."</em> (Wait a moment, I need to think...) instead of staying silent.
              </p>
            </div>

            <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded-r-lg">
              <h3 className="text-rose-900 font-bold text-lg m-0 mb-2">Mistake 2: Ignoring the Bullet Points</h3>
              <p className="text-rose-800 m-0 mb-3">
                In the writing section, prompts will give you 3-4 specific things to mention. If you write a beautiful essay but forget one bullet point, your score will drop.
              </p>
              <p className="text-slate-900 font-semibold m-0">
                Correction: Physically tick off the bullet points on your scratch paper as you write your response. Ensure every single requirement is explicitly answered.
              </p>
            </div>
          </div>
        </article>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-800 mt-12 shadow-inner">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Conquer the YKI Citizenship Test?
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stop guessing your level. Practice with realistic YKI exam simulators, get instant AI-driven scoring calibrated to B1 standards, and receive personalized feedback on your mistakes.
          </p>
          <div>
            <Link 
              href="/signup" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-blue-900 bg-white hover:bg-slate-100 transition-colors duration-200 shadow-xl hover:shadow-2xl"
            >
              Start Practicing for Free
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              What is the YKI citizenship test?
            </h3>
            <p className="text-slate-700 leading-relaxed m-0">
              The YKI citizenship test refers to the National Certificate of Language Proficiency (Yleiset kielitutkinnot) at the intermediate level (Keskitaso). Passing this test at Level 3 (B1) satisfies the Finnish citizenship language requirement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Which parts of the YKI exam do I need to pass for citizenship?
            </h3>
            <p className="text-slate-700 leading-relaxed m-0">
              You do not need to pass all four parts. The Finnish Immigration Service (Migri) accepts combinations such as Speaking + Writing, Listening + Writing, or Reading + Speaking, provided you achieve at least Level 3 in those specific pairs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              What happens if I make grammar mistakes in the YKI exam?
            </h3>
            <p className="text-slate-700 leading-relaxed m-0">
              Examiners expect grammar mistakes at Level 3 (B1). The scoring focuses on comprehensibility and task completion. As long as your message is clear and you address all prompt requirements, minor grammatical errors will not prevent you from passing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              How long should I study to pass the YKI exam?
            </h3>
            <p className="text-slate-700 leading-relaxed m-0">
              If you are starting from an A2 level, 3 to 6 months of targeted practice focusing on YKI-specific tasks (like email writing and opinion speaking) is generally sufficient to reach the required Level 3.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}