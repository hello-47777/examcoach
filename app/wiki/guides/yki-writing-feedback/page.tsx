import Link from 'next/link';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('guides', 'yki-writing-feedback', {
  title: 'YKI Writing Feedback: How to Fix Your Weaknesses Before Exam',
  description: 'Learn how to use structured YKI writing feedback to fix your weaknesses. Discover common Finnish writing mistakes and accelerate your YKI improvement.',
});

export default function YkiWritingFeedback() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is YKI writing feedback important for the exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "YKI writing feedback is crucial because it pinpoints your specific weaknesses in exam conditions. It helps you understand if you are failing on task completion, tone (formal vs. informal), or grammatical structures, allowing you to fix these issues before test day."
        }
      },
      {
        "@type": "Question",
        "name": "What is the most effective strategy for YKI improvement in writing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The fastest way to achieve YKI improvement is to practice with official prompt types, apply reusable writing frameworks, and consistently review your work against examiner criteria, focusing on vocabulary and coherence rather than just perfect grammar."
        }
      },
      {
        "@type": "Question",
        "name": "What are the most common Finnish writing mistakes in the YKI test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common Finnish writing mistakes include mixing spoken language (puhekieli) into formal writing, ignoring the prompt's required bullet points, and failing to use conjunctions to connect short sentences."
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
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <article className="prose prose-lg prose-blue max-w-none">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
            YKI Writing Feedback: How to Fix Your Weaknesses Before Exam
          </h1>

          <p className="lead text-xl text-gray-600 mb-8">
            Many test-takers get stuck at Level 2 in the Finnish intermediate exam simply because they don’t know what they are doing wrong. To achieve the Level 3 (Keskitaso) required for citizenship, you need highly targeted <strong>YKI writing feedback</strong>. This guide breaks down exactly how to analyze your errors, understand examiner criteria, and systematically improve your writing before test day.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Step-by-Step Guide to YKI Improvement
            </h2>
            <p className="mb-4">
              Passing the YKI writing test is not just about having a massive vocabulary; it is about strategic communication. Follow these steps for reliable <strong>YKI improvement</strong>.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1: Dissect the Prompt</h3>
                <p className="text-gray-700">Before writing a single word, read the prompt and highlight the specific questions or bullet points you MUST answer. If the prompt asks for your opinion on recycling, a proposed solution, and an example, you must include all three to score well on task completion.</p>
              </div>

              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2: Determine the Register</h3>
                <p className="text-gray-700">Identify your audience. Are you writing an informal message (vapaamuotoinen viesti) to a friend, or a formal opinion piece (mielipidekirjoitus)? Your choice of register (tone) dictates your vocabulary and grammar choices.</p>
              </div>

              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3: Draft Using Frameworks</h3>
                <p className="text-gray-700">Never start from a blank slate. Use memorized templates for the introduction, body paragraphs, and conclusions tailored to standard YKI task types (complaint, invitation, opinion).</p>
              </div>

              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4: Get and Apply Feedback</h3>
                <p className="text-gray-700">After drafting, use a feedback tool or a teacher to grade your text against YKI criteria. Don't just look at the final score—analyze which specific category (grammar, vocabulary, flow) pulled you down.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Understanding YKI Examiner Scoring Criteria
            </h2>
            <p className="mb-4">
              Effective YKI writing feedback must evaluate your text exactly how human examiners will. Examiners grade based on four primary pillars:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
              <li><strong>Viestin välittyminen (Message Delivery):</strong> Did you answer every part of the prompt? Is your main point clear? Even with poor grammar, a clear message can secure a Level 3.</li>
              <li><strong>Tekstin organisointi (Organization):</strong> Are your sentences logically connected? Do you use paragraphs and linking words (<em>koska, kuitenkin, siksi</em>)?</li>
              <li><strong>Sanasto (Vocabulary):</strong> Do you use varied, topic-appropriate vocabulary, or do you repeat basic words like <em>&quot;hyvä&quot;</em> and <em>&quot;huono&quot;</em>?</li>
              <li><strong>Rakenteet (Structures/Grammar):</strong> Can you form basic clauses correctly? While perfection isn't required for Level 3, repeated fundamental errors (like incorrect verb conjugation or basic case errors) will lower your score.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Finnish Writing Mistakes (And How to Fix Them)
            </h2>
            <p className="mb-4">
              Identifying <strong>Finnish writing mistakes</strong> is the core of actionable feedback. Here are the most frequent errors that trap candidates at Level 2, complete with corrections.
            </p>

            <div className="grid gap-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
                <h4 className="font-bold text-red-900 mb-1">Mistake 1: Mixing Spoken Language (Puhekieli) in Formal Texts</h4>
                <p className="text-sm text-gray-800 mb-2"><strong>The Problem:</strong> Writing words like <em>mä, sä, haluun</em> or <em>yks</em> in a formal complaint or official letter.</p>
                <div className="bg-white p-3 rounded border border-red-200 mb-2">
                  <span className="text-red-700 line-through mr-2">Mä haluun valittaa tästä ongelmasta.</span>
                </div>
                <p className="text-sm text-gray-800 mb-2"><strong>The Correction:</strong> Use strict standard Finnish (Kirjakieli) and polite conditional forms.</p>
                <div className="bg-white p-3 rounded border border-green-200">
                  <span className="text-green-700 font-medium">Haluaisin tehdä valituksen tästä asiasta.</span>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
                <h4 className="font-bold text-red-900 mb-1">Mistake 2: Poor Cohesion (Choppy Sentences)</h4>
                <p className="text-sm text-gray-800 mb-2"><strong>The Problem:</strong> Writing a series of short, unconnected sentences, which reads like a beginner (Level 1-2).</p>
                <div className="bg-white p-3 rounded border border-red-200 mb-2">
                  <span className="text-red-700 line-through mr-2">Tuote oli rikki. Minä palautan sen. Haluan rahat takaisin.</span>
                </div>
                <p className="text-sm text-gray-800 mb-2"><strong>The Correction:</strong> Use conjunctions (<em>koska, joten, ja</em>) to create complex sentences.</p>
                <div className="bg-white p-3 rounded border border-green-200">
                  <span className="text-green-700 font-medium">Koska tuote oli rikki, palautan sen ja haluan rahani takaisin.</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Reusable Framework: The Formal Complaint (Valitus)
            </h2>
            <p className="mb-4">
              A formal complaint is one of the most common YKI tasks. Memorize this framework to guarantee good organization and appropriate register.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <ul className="space-y-4 text-gray-800">
                <li><strong>1. Greeting:</strong> <br/><em>Hyvä vastaanottaja,</em> (Dear recipient) or <em>Arvoisa taloyhtiön hallitus,</em> (Respected housing board)</li>
                <li><strong>2. State the Reason:</strong> <br/><em>Kirjoitan teille, koska haluan antaa palautetta...</em> (I am writing to you because I want to give feedback on...)</li>
                <li><strong>3. Detail the Issue:</strong> <br/><em>Ongelma on se, että...</em> (The problem is that...)</li>
                <li><strong>4. Suggest Action:</strong> <br/><em>Toivon, että korjaatte asian mahdollisimman pian.</em> (I hope you fix the matter as soon as possible.)</li>
                <li><strong>5. Sign-off:</strong> <br/><em>Ystävällisin terveisin, [Nimi]</em> (Best regards, [Name])</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Categorized YKI Vocabulary for Better Flow
            </h2>
            <p className="mb-4">
              Elevate your vocabulary score by naturally incorporating these linking words and phrases.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b-2 border-gray-300">
                    <th className="p-3 font-semibold text-gray-700">Category</th>
                    <th className="p-3 font-semibold text-gray-700">Finnish Phrases</th>
                    <th className="p-3 font-semibold text-gray-700">English Meaning</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Adding Information</td>
                    <td className="p-3">lisäksi, sen lisäksi</td>
                    <td className="p-3">in addition, furthermore</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Contrasting</td>
                    <td className="p-3">kuitenkin, toisaalta</td>
                    <td className="p-3">however, on the other hand</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Giving Reasons</td>
                    <td className="p-3">koska, sen vuoksi että</td>
                    <td className="p-3">because, due to the fact that</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Expressing Opinion</td>
                    <td className="p-3">minun mielestäni, olen sitä mieltä että</td>
                    <td className="p-3">in my opinion, I am of the opinion that</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </article>

        <section className="bg-blue-600 text-white rounded-xl p-8 my-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Get Instant YKI Writing Feedback</h2>
          <p className="text-xl mb-8 opacity-90">
            Stop making the same mistakes. Practice your YKI essays and receive instant, examiner-style feedback to fix your weaknesses immediately.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-md"
          >
            Grade My Essay Now
          </Link>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Why is YKI writing feedback important for the exam?
              </h3>
              <p className="text-gray-600">
                YKI writing feedback is crucial because it pinpoints your specific weaknesses in exam conditions. It helps you understand if you are failing on task completion, tone (formal vs. informal), or grammatical structures, allowing you to fix these issues before test day.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What is the most effective strategy for YKI improvement in writing?
              </h3>
              <p className="text-gray-600">
                The fastest way to achieve YKI improvement is to practice with official prompt types, apply reusable writing frameworks, and consistently review your work against examiner criteria, focusing on vocabulary and coherence rather than just perfect grammar.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What are the most common Finnish writing mistakes in the YKI test?
              </h3>
              <p className="text-gray-600">
                Common Finnish writing mistakes include mixing spoken language (puhekieli) into formal writing, ignoring the prompt&apos;s required bullet points, and failing to use conjunctions to connect short sentences.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}