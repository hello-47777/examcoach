import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YKI Opinion Writing Scoring: How Examiners Grade Your Essay',
  description: 'Understand the exact YKI opinion writing scoring system. Learn the YKI writing assessment criteria and what separates YKI level 3 writing from level 4.',
  alternates: {
    canonical: '/wiki/scoring/yki-opinion-writing-scoring',
  },
  openGraph: {
    title: 'YKI Opinion Writing Scoring: How Examiners Grade Your Essay',
    description: 'Understand the exact YKI opinion writing scoring system. Learn the YKI writing assessment criteria and what separates YKI level 3 writing from level 4.',
    type: 'article',
  }
};

export default function YkiOpinionWritingScoring() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I pass the YKI writing test with grammar mistakes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. For YKI level 3 writing, examiners expect some grammatical errors. As long as the mistakes do not prevent the reader from understanding your main points, you can still pass."
        }
      },
      {
        "@type": "Question",
        "name": "What is the most important part of the YKI writing assessment criteria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Task achievement is the most critical factor. If the prompt asks you to share your opinion and suggest a solution, you must do both. Missing parts of the prompt will severely lower your score, regardless of your grammar."
        }
      },
      {
        "@type": "Question",
        "name": "How is YKI level 4 writing different from level 3?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "YKI level 4 writing demonstrates a wider vocabulary, complex sentence structures (like conditional forms), and seamless paragraph transitions. The tone is perfectly matched to the audience, and there are very few grammatical errors."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Article Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-4">
            YKI Opinion Writing Scoring: How Examiners Grade Your Essay
          </h1>
          <p className="text-xl text-gray-600">
            Demystifying the examiner criteria to help you achieve a guaranteed pass.
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg prose-blue mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm">
          
          <p className="lead font-medium text-gray-700">
            To succeed in the intermediate Finnish test, you must understand exactly how the <strong>YKI opinion writing scoring</strong> works. Knowing the grammar is only part of the battle; you also need to know what the examiners at the Finnish National Agency for Education are actively looking for when they read your text.
          </p>

          <p>
            In this guide, we will break down the official <em>YKI writing assessment criteria</em>, explain the three main grading pillars, and show you exactly what separates a passing B1 text from an advanced B2 text.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
            The Core Pillars of YKI Opinion Writing Scoring
          </h2>
          <p>
            When an examiner grades your opinion text (mielipidekirjoitus), they do not just count your spelling mistakes. They evaluate your text holistically based on three primary criteria.
          </p>

          <div className="space-y-6 mt-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-900 mb-2">1. Task Achievement (Viestin välittyminen)</h3>
              <p>This is the most critical scoring component. The examiner asks: <em>Did the candidate do what was asked?</em></p>
              <ul className="list-disc pl-5 mt-2">
                <li>You must clearly state your opinion on the provided topic.</li>
                <li>You must address <strong>all</strong> parts of the prompt (e.g., if it asks for an opinion and an example, you must provide both).</li>
                <li>The text must be understandable. If the message is unclear due to severe language issues, the text fails this pillar.</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
              <h3 className="text-xl font-bold text-indigo-900 mb-2">2. Text Organization (Tekstin rakentuminen)</h3>
              <p>This evaluates how well your essay flows. The examiner asks: <em>Is the text logical and easy to follow?</em></p>
              <ul className="list-disc pl-5 mt-2">
                <li>Your essay must be divided into clear paragraphs (Introduction, Body, Conclusion).</li>
                <li>You must use transition words (sidossanat) like <em>ensinnäkin</em>, <em>kuitenkin</em>, and <em>yhteenvetona</em> to connect your ideas.</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-green-900 mb-2">3. Vocabulary and Grammar (Sanasto ja rakenteet)</h3>
              <p>This assesses your technical command of standard Finnish (kirjakieli). The examiner asks: <em>Is the language versatile and mostly accurate?</em></p>
              <ul className="list-disc pl-5 mt-2">
                <li>You must use a variety of verbs and adjectives, not just basic words like <em>hyvä</em> or <em>huono</em>.</li>
                <li>Sentences should vary in length (using subordinate clauses with <em>että</em>, <em>koska</em>, <em>jotta</em>).</li>
                <li>Minor grammatical errors are allowed, provided they do not obscure the meaning.</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
            YKI Level 3 Writing: The Passing Standard
          </h2>
          <p>
            To pass the intermediate YKI exam, you need to achieve a level 3 (B1 in the CEFR framework). Here is exactly what <em>YKI level 3 writing</em> looks like to an examiner:
          </p>
          <table className="min-w-full text-left border-collapse my-6">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="py-3 px-4 font-bold text-gray-700">Criteria</th>
                <th className="py-3 px-4 font-bold text-gray-700">Level 3 (B1) Expectations</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">Message</td>
                <td className="py-3 px-4">The main opinion is clear. All parts of the prompt are addressed.</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="py-3 px-4 font-semibold">Structure</td>
                <td className="py-3 px-4">Basic paragraph structure is present. Simple connectors (ja, mutta, koska) are used effectively.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">Vocabulary</td>
                <td className="py-3 px-4">Vocabulary is sufficient for everyday topics. Some repetition is accepted.</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="py-3 px-4 font-semibold">Grammar</td>
                <td className="py-3 px-4">Basic grammar is mostly correct. Errors exist (e.g., wrong cases, partitive mistakes), but the text remains readable.</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
            YKI Level 4 Writing: Achieving Advanced Proficiency
          </h2>
          <p>
            Scoring a level 4 (B2) means you have demonstrated a strong, independent command of Finnish. <em>YKI level 4 writing</em> goes beyond basic communication and adds nuance, complexity, and precision.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Nuanced Argumentation:</strong> A level 4 essay doesn&apos;t just list reasons; it explores counter-arguments and provides deeper justifications.</li>
            <li><strong>Complex Structures:</strong> The writer seamlessly uses advanced grammar, such as the conditional mood (isi-muoto), participles, and passive voice.</li>
            <li><strong>Broad Vocabulary:</strong> The text features precise word choices, idioms, and formal phrasing rather than relying on common, everyday vocabulary.</li>
            <li><strong>High Accuracy:</strong> Grammatical errors are rare and usually only occur in complex sentence constructions.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
            How to Improve Your Score Immediately
          </h2>
          <p>
            If you want to maximize your YKI writing score, follow these examiner-approved rules:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Never use spoken language (puhekieli).</strong> Always write <em>minä olen</em> instead of <em>mä oon</em>. Using puhekieli in an opinion essay will instantly lower your vocabulary and style score.</li>
            <li><strong>Read the prompt twice.</strong> Many candidates fail simply because they forgot to answer the second half of the essay question.</li>
            <li><strong>Leave empty lines between paragraphs.</strong> Make it visually easy for the examiner to see your structure. A single block of text is very difficult to grade favorably.</li>
          </ol>

        </article>

        {/* Internal Links - Related Articles */}
        <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
          <ul className="space-y-2">
            <li><Link href="/wiki/guides/yki-opinion-essay-structure" className="text-blue-700 hover:underline">YKI Opinion Essay Structure: B1-B2 Writing Framework Explained</Link></li>
            <li><Link href="/wiki/scoring/yki-b1-guide" className="text-blue-700 hover:underline">YKI B1 Guide</Link></li>
          </ul>
        </nav>

        {/* CTA Section */}
        <section className="mt-16 bg-blue-900 rounded-2xl p-10 text-center shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Your Practice Essays Graded
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Stop guessing your score. Submit your practice texts to ExamCoach.ai and our AI will grade your writing using the exact YKI writing assessment criteria, giving you a detailed breakdown of how to improve.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-md"
          >
            Start Your Graded Practice
          </Link>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I pass the YKI writing test with grammar mistakes?</h3>
              <p className="text-gray-600">Yes. For YKI level 3 writing, examiners expect some grammatical errors. As long as the mistakes do not prevent the reader from understanding your main points, you can still pass.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What is the most important part of the YKI writing assessment criteria?</h3>
              <p className="text-gray-600">Task achievement is the most critical factor. If the prompt asks you to share your opinion and suggest a solution, you must do both. Missing parts of the prompt will severely lower your score, regardless of your grammar.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How is YKI level 4 writing different from level 3?</h3>
              <p className="text-gray-600">YKI level 4 writing demonstrates a wider vocabulary, complex sentence structures (like conditional forms), and seamless paragraph transitions. The tone is perfectly matched to the audience, and there are very few grammatical errors.</p>
            </div>

          </div>
        </section>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>
    </div>
  );
}