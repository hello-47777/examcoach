import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Common YKI Opinion Writing Mistakes and How to Avoid Them',
  description: 'Identify and fix the most common YKI opinion writing mistakes. Learn how to correct frequent Finnish writing errors to secure a passing score on test day.',
  alternates: {
    canonical: '/wiki/guides/common-yki-opinion-writing-mistakes',
  },
  openGraph: {
    title: 'Common YKI Opinion Writing Mistakes and How to Avoid Them',
    description: 'Identify and fix the most common YKI opinion writing mistakes. Learn how to correct frequent Finnish writing errors to secure a passing score on test day.',
    type: 'article',
  }
};

export default function CommonYkiOpinionWritingMistakes() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Will a few spelling mistakes cause me to fail the YKI writing test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Minor spelling mistakes are expected at the B1 level. However, if the spelling errors change the meaning of the word or make the text incomprehensible, it will negatively impact your score."
        }
      },
      {
        "@type": "Question",
        "name": "Is it a mistake to use spoken Finnish (puhekieli) in an opinion essay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Using puhekieli (like writing 'mä meen' instead of 'minä menen') is one of the most common Finnish essay mistakes. You must always use standard written Finnish (kirjakieli) for task 2."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I write a great essay but forget to answer part of the prompt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Failing to address the entire prompt results in a lower task achievement score. Even if your grammar is flawless, not answering the full question is a major error that can cost you a passing grade."
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
            Common YKI Opinion Writing Mistakes and How to Avoid Them
          </h1>
          <p className="text-xl text-gray-600">
            Stop losing points on easily fixable errors. Learn exactly what examiners penalize.
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg prose-blue mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm">
          
          <p className="lead font-medium text-gray-700">
            Preparing for the intermediate language exam can be stressful, and falling victim to common <strong>YKI opinion writing mistakes</strong> is a surefire way to miss out on your B1 certificate. Many test-takers possess adequate vocabulary but fail because they misunderstand the format or make structural errors.
          </p>

          <p>
            In this guide, we break down the most frequent <em>Finnish writing errors</em> candidates make in Task 2 (mielipidekirjoitus) and provide direct solutions to ensure you maximize your score.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
            Top YKI Opinion Writing Mistakes
          </h2>
          
          <div className="space-y-8 mt-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">Mistake 1: Ignoring Parts of the Prompt</h3>
              <p><strong>The Problem:</strong> The biggest of all <em>YKI writing problems</em> is poor task achievement. Often, the prompt has two parts (e.g., "Share your opinion on recycling AND suggest how the city can improve it"). Students get carried away arguing their opinion and completely forget the suggestion part.</p>
              <p><strong>The Correction:</strong> Read the prompt three times. Outline your paragraphs based on every single question asked. If the prompt asks for a solution, dedicate an entire paragraph to it. <strong>Your text will be penalized heavily if it does not fully answer the prompt, regardless of perfect grammar.</strong></p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-orange-900 mb-2">Mistake 2: Slipping into Spoken Language (Puhekieli)</h3>
              <p><strong>The Problem:</strong> Because students hear <em>puhekieli</em> every day, it naturally slips into their writing. Writing "Mä tykkään" or "Se on tosi kiva" in a formal opinion essay is inappropriate and lowers your vocabulary score.</p>
              <p><strong>The Correction:</strong> Treat the opinion text as a formal or semi-formal document. Always use standard written Finnish (<em>kirjakieli</em>).<br/>
              <em>Instead of:</em> "Mä oon sitä mieltä et..."<br/>
              <em>Write:</em> "Minä olen sitä mieltä, että..."</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Mistake 3: The "Wall of Text"</h3>
              <p><strong>The Problem:</strong> Submitting a single, massive block of text with no paragraphs. This is one of the most easily avoidable <em>Finnish essay mistakes</em>, yet it happens constantly. It makes it incredibly difficult for the examiner to follow your logic.</p>
              <p><strong>The Correction:</strong> Use a strict 4-paragraph structure (Introduction, Argument 1, Argument 2, Conclusion). Hit the "Enter" key twice between every paragraph to leave a clear empty line. Visually clear structures earn higher marks in organization.</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-900 mb-2">Mistake 4: Missing Transition Words</h3>
              <p><strong>The Problem:</strong> Writing choppy, disconnected sentences. "I like remote work. It is cheap. I stay home." This reads like A2 level writing, not B1.</p>
              <p><strong>The Correction:</strong> You must use connectors (sidossanat) to link your ideas logically.<br/>
              <em>Add words like:</em> Ensinnäkin (firstly), Toiseksi (secondly), Sen lisäksi (in addition), Kuitenkin (however), and Siksi (therefore).</p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-orange-900 mb-2">Mistake 5: Repeating the Prompt Exactly</h3>
              <p><strong>The Problem:</strong> Opening your essay by copying the prompt word-for-word. Examiners give zero points for copied text, and it wastes your limited word count.</p>
              <p><strong>The Correction:</strong> Paraphrase. If the prompt says, <em>"Pitäisikö koulupäivien olla lyhyempiä?"</em> (Should school days be shorter?), do not write exactly that. Instead, write: <em>"Nykyään puhutaan paljon oppilaiden jaksamisesta ja koulupäivien pituudesta."</em> (Nowadays there is a lot of talk about student endurance and the length of school days).</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
            How to Self-Correct During Practice
          </h2>
          <p>
            The best way to avoid these pitfalls on test day is to build a revision habit now. Every time you write a practice essay, spend the last 3 minutes running through this mental checklist:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Did I answer every part of the question?</li>
            <li>Are there clear spaces between my paragraphs?</li>
            <li>Did I accidentally use any spoken language (mä, sä, oot)?</li>
            <li>Did I start my arguments with clear transition words?</li>
          </ul>

        </article>

        {/* Internal Links - Related Articles */}
        <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
          <ul className="space-y-2">
            <li><Link href="/wiki/guides/yki-opinion-essay-structure" className="text-blue-700 hover:underline">YKI Opinion Essay Structure: B1-B2 Writing Framework Explained</Link></li>
            <li><Link href="/wiki/scoring/yki-opinion-writing-scoring" className="text-blue-700 hover:underline">YKI Opinion Writing Scoring: How Examiners Grade Your Essay</Link></li>
          </ul>
        </nav>

        {/* CTA Section */}
        <section className="mt-16 bg-blue-900 rounded-2xl p-10 text-center shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop Guessing. Start Improving.
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Are you making these mistakes without realizing it? Write your practice essays on ExamCoach.ai and get instant, AI-powered corrections highlighting your errors based on official YKI grading criteria.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-md"
          >
            Check Your Writing Now
          </Link>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Will a few spelling mistakes cause me to fail the YKI writing test?</h3>
              <p className="text-gray-600">No. Minor spelling mistakes are expected at the B1 level. However, if the spelling errors change the meaning of the word or make the text incomprehensible, it will negatively impact your score.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Is it a mistake to use spoken Finnish (puhekieli) in an opinion essay?</h3>
              <p className="text-gray-600">Yes. Using puhekieli (like writing &quot;mä meen&quot; instead of &quot;minä menen&quot;) is one of the most common Finnish essay mistakes. You must always use standard written Finnish (kirjakieli) for task 2.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What happens if I write a great essay but forget to answer part of the prompt?</h3>
              <p className="text-gray-600">Failing to address the entire prompt results in a lower task achievement score. Even if your grammar is flawless, not answering the full question is a major error that can cost you a passing grade.</p>
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