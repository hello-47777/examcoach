import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('guides', 'pass-yki-writing-level-3', {
  title: 'How to Pass YKI Writing Level 3: Complete B1 Strategy',
  description: 'Discover a step-by-step guide on how to pass YKI writing level 3. Master the Finnish B1 exam format, understand the grading criteria, and secure your passing score.',
});

export default function PassYkiWritingLevel3Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the YKI passing score for writing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To pass the writing subtest for Finnish citizenship purposes, you need to achieve at least Level 3, which corresponds to B1 on the CEFR scale. The YKI test is graded from 1 to 6.",
        },
      },
      {
        "@type": "Question",
        name: "Can I make grammar mistakes and still pass YKI writing level 3?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. At the B1 level, examiners expect grammatical errors. As long as your mistakes do not hinder the overall comprehensibility of your text and you answer the prompt fully, you can still pass.",
        },
      },
      {
        "@type": "Question",
        name: "How much time do I have for the writing section of the Finnish B1 exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You have exactly 55 minutes to complete the entire writing section in the intermediate YKI test. This typically involves writing two to three separate texts.",
        },
      },
    ],
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* JSON-LD Schema for FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="prose prose-lg prose-blue max-w-none">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-6">
          How to Pass YKI Writing Level 3: Complete B1 Strategy
        </h1>

        <p className="lead text-xl text-gray-600 mb-8">
          If your goal is to achieve Finnish citizenship, knowing how to <strong>pass YKI writing level 3</strong> is absolutely essential. For many test-takers, the writing section is the most intimidating part of the intermediate test (Keskitaso). 
        </p>

        <p className="mb-8">
          Achieving a Level 3 means demonstrating independent language proficiency. You do not need to write perfect, native-level Finnish. Instead, you need to prove that you can communicate effectively in everyday situations. This guide provides a complete, step-by-step strategy to help you master the YKI B1 writing section and secure your passing grade.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6 border-b pb-2">
          Step 1: Understand What It Takes to Pass YKI Writing Level 3
        </h2>
        <p className="mb-4">
          To build a winning strategy, you must first understand the examiner's mindset. Level 3 evaluates your ability to handle common, everyday writing tasks. The most important rule to remember is that <strong>comprehensibility beats perfection</strong>.
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li><strong>Clarity:</strong> The evaluator must be able to understand your main point easily without guessing.</li>
          <li><strong>Vocabulary:</strong> You should use basic, everyday vocabulary effectively. Complex terminology is not required.</li>
          <li><strong>Grammar:</strong> Mistakes in conjugation or partitive cases are allowed, provided they don't change the meaning of your sentences entirely.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6 border-b pb-2">
          Step 2: Master the Format of YKI B1 Writing Tasks
        </h2>
        <p className="mb-4">
          The Finnish B1 exam generally requires you to produce three distinct types of texts within a 55-minute window. Knowing the format in advance allows you to mentally prepare templates for each.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">The 3 Common Task Types</h3>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>The Informal Message:</strong> Usually an email or message to a friend (e.g., inviting them to a party or apologizing for missing a meeting). 
              <em>Strategy:</em> Use a friendly tone, basic spoken language (puhekieli) if comfortable, and a casual sign-off (e.g., "Terveisin").
            </li>
            <li>
              <strong>The Formal Message:</strong> Often a complaint, feedback, or a request for information sent to a company or housing manager.
              <em>Strategy:</em> Use standard written Finnish (kirjakieli), polite requests (conditional mood), and a formal sign-off (e.g., "Ystävällisin terveisin").
            </li>
            <li>
              <strong>The Opinion Piece:</strong> A short text expressing your viewpoint on a general topic (e.g., public transport, remote work, or recycling).
              <em>Strategy:</em> Use opinion-based structures like "Minun mielestäni..." (In my opinion...) and provide one or two simple reasons to back up your claim.
            </li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6 border-b pb-2">
          Step 3: Secure Your YKI Passing Score with Task Fulfillment
        </h2>
        <p className="mb-4">
          The most tragic mistake you can make is writing grammatically flawless Finnish that ignores the prompt. To guarantee a YKI passing score, you must achieve 100% task fulfillment. 
        </p>
        <p className="mb-6">
          Every task comes with a short prompt and a set of bullet points (usually 3 or 4). <strong>You must address every single bullet point clearly.</strong>
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="font-semibold text-blue-900 mb-2">Pro-Tip for Task Fulfillment:</p>
          <p className="text-blue-800">
            Before you start writing, read the bullet points. Write one sentence directly answering the first bullet point, then move to the next. Use transitional words (<em>kuitenkin, siksi, lisäksi, koska</em>) to connect these sentences. Check off the bullet points on your exam paper as you answer them.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6 border-b pb-2">
          Step 4: Execute a Strict Time Management Plan
        </h2>
        <p className="mb-4">
          Time moves fast during the Finnish B1 exam. You have 55 minutes to read the prompts, plan your texts, write them, and review them. 
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li><strong>0-5 Minutes:</strong> Read all the tasks. Decide which task is easiest for you and which will take the most effort.</li>
          <li><strong>Task 1 (Informal):</strong> Allocate roughly 10-12 minutes. This should be the fastest.</li>
          <li><strong>Task 2 (Formal):</strong> Allocate 15-18 minutes. Pay extra attention to your formal register.</li>
          <li><strong>Task 3 (Opinion):</strong> Allocate 15-18 minutes. Structure your arguments clearly.</li>
          <li><strong>Final 5 Minutes:</strong> Review your work. Do not try to rewrite whole paragraphs; instead, check for missing dots (ä, ö) and ensure basic subject-verb agreement.</li>
        </ul>

      </article>

      {/* Related Articles */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
        <ul className="space-y-2">
          <li><Link href="/wiki/guides/how-to-pass-yki-test" className="text-blue-700 hover:underline">How to Pass YKI Test: Complete Strategy Guide</Link></li>
          <li><Link href="/wiki/scoring/yki-level-3-vs-level-4" className="text-blue-700 hover:underline">YKI Level 3 vs Level 4: What Score Do You Need?</Link></li>
        </ul>
      </nav>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white rounded-xl p-8 mt-12 text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to test your B1 writing skills?</h2>
        <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
          Stop guessing if your texts are good enough for a Level 3. Use ExamCoach.ai to practice real YKI writing prompts and receive instant AI feedback on your task fulfillment, grammar, and overall score.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors duration-200"
        >
          Start Your Free YKI Writing Practice
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What is the YKI passing score for writing?
            </h3>
            <p className="text-gray-600">
              To pass the writing subtest for Finnish citizenship purposes, you need to achieve at least Level 3, which corresponds to B1 on the CEFR scale. The YKI test is graded from 1 to 6.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Can I make grammar mistakes and still pass YKI writing level 3?
            </h3>
            <p className="text-gray-600">
              Yes. At the B1 level, examiners expect grammatical errors. As long as your mistakes do not hinder the overall comprehensibility of your text and you answer the prompt fully, you can still pass.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              How much time do I have for the writing section of the Finnish B1 exam?
            </h3>
            <p className="text-gray-600">
              You have exactly 55 minutes to complete the entire writing section in the intermediate YKI test. This typically involves writing two to three separate texts.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
