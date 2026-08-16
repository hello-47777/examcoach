import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Common YKI Message Writing Mistakes Students Make",
  description:
    "Discover the most common YKI message writing mistakes candidates make on the Finnish proficiency exam. Learn practical corrections to pass the writing section.",
};

export default function YkiWritingMistakesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Will I fail the YKI writing test if I make grammar mistakes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily. Examiners expect some grammar mistakes at the intermediate level (Keskitaso). However, if your mistakes make the message impossible to understand, or if you fail to answer the prompt's bullet points, your score will drop significantly.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use spoken Finnish (puhekieli) in the YKI message writing tasks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the task. If you are writing an informal message to a friend, some everyday puhekieli is acceptable. If you are writing a formal message, like a complaint to a company or a message to an authority, you must use standard written Finnish (kirjakieli).",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I miss one of the bullet points in the prompt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Missing a bullet point is a major task fulfillment error. Even if your Finnish is perfect, failing to address all the required points will prevent you from getting full marks for that specific writing task.",
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
          Common YKI Message Writing Mistakes Students Make
        </h1>

        <p className="lead text-xl text-gray-600 mb-8">
          The writing section of the Yleiset kielitutkinnot (YKI) test is notoriously stressful. Many candidates focus heavily on grammar but end up failing because of critical <strong>YKI message writing mistakes</strong>. 
        </p>

        <p className="mb-8">
          To pass the intermediate (Keskitaso) level, examiners care more about clear communication and task fulfillment than flawless grammar. By identifying common pitfalls, you can optimize your preparation and maximize your score. Let's break down the most frequent problems and how to correct them.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6 border-b pb-2">
          Top YKI Message Writing Mistakes and How to Fix Them
        </h2>

        {/* Mistake 1 */}
        <div className="mb-10 bg-white border border-red-100 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center">
            <span className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-sm">1</span>
            Ignoring the Prompt's Bullet Points
          </h3>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900">The Problem:</h4>
            <p className="text-gray-700 mt-1">
              Every YKI writing task provides a scenario and 3-4 specific bullet points you must address. One of the most severe YKI exam mistakes is writing a beautiful, grammatically perfect message that forgets to answer one or more of these points. Examiners penalize this heavily because it shows a lack of "task fulfillment."
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded border border-green-200">
            <h4 className="font-semibold text-green-800">The Correction:</h4>
            <p className="text-green-900 mt-1">
              Treat the bullet points as your mandatory outline. Before writing, mentally assign one sentence or short paragraph to each bullet point. When you finish writing, read the prompt again and physically check off each point to ensure it is clearly answered in your text.
            </p>
          </div>
        </div>

        {/* Mistake 2 */}
        <div className="mb-10 bg-white border border-red-100 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center">
            <span className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-sm">2</span>
            Mixing Formal and Informal Registers
          </h3>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900">The Problem:</h4>
            <p className="text-gray-700 mt-1">
              Candidates often write formal complaints to a property manager using slang, or send emails to a close friend using rigid, overly polite vocabulary. Mixing these registers—such as starting a formal email with "Moi" or using spoken language (<em>mä meen</em> instead of <em>minä menen</em>) in an official context—results in major Finnish writing errors regarding tone.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded border border-green-200">
            <h4 className="font-semibold text-green-800">The Correction:</h4>
            <p className="text-green-900 mt-1">
              Always identify your recipient before writing your first word. 
              <br/><br/>
              <strong>Formal (Authorities, Companies):</strong> Use standard written Finnish (kirjakieli). Start with <em>"Hei,"</em> and end with <em>"Ystävällisin terveisin."</em><br/>
              <strong>Informal (Friends, Family):</strong> Spoken Finnish features are acceptable. Start with <em>"Moi!"</em> and end with <em>"Terveisin"</em> or <em>"Nähdään!"</em>
            </p>
          </div>
        </div>

        {/* Mistake 3 */}
        <div className="mb-10 bg-white border border-red-100 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center">
            <span className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-sm">3</span>
            Overcomplicating Sentences
          </h3>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900">The Problem:</h4>
            <p className="text-gray-700 mt-1">
              Many students try to show off by using complex grammar structures (like the conditional perfect or complicated participles) that they haven't fully mastered. This usually backfires, creating sentences that are so tangled the examiner cannot understand the original meaning.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded border border-green-200">
            <h4 className="font-semibold text-green-800">The Correction:</h4>
            <p className="text-green-900 mt-1">
              Keep it simple and clear. At the B1 level, examiners value intelligibility over complexity. Use simple sentences connected by basic conjunctions (<em>mutta, koska, että, siksi</em>). Only use complex grammar if you are 100% confident it is correct. Clear, simple Finnish will easily secure a passing grade.
            </p>
          </div>
        </div>

        {/* Mistake 4 */}
        <div className="mb-10 bg-white border border-red-100 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center">
            <span className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-sm">4</span>
            Forgetting Basic Message Formatting
          </h3>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900">The Problem:</h4>
            <p className="text-gray-700 mt-1">
              In a rush, candidates dive straight into answering the prompt without treating the text like a real message. They forget greetings, context, or sign-offs. If the prompt says "Write an email," it must look like an email.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded border border-green-200">
            <h4 className="font-semibold text-green-800">The Correction:</h4>
            <p className="text-green-900 mt-1">
              Always use a structural framework. Every message needs three parts:
              <br/>1. A greeting (<em>Hei Matti,</em>).
              <br/>2. A brief opening explaining why you are writing (<em>Kirjoitan sinulle, koska...</em>).
              <br/>3. A proper closing and your name (<em>Ystävällisin terveisin, Anna</em>).
            </p>
          </div>
        </div>

      </article>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white rounded-xl p-8 mt-12 text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Want to stop making these mistakes?</h2>
        <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
          Practice your message writing with ExamCoach.ai. Get instant, personalized feedback on your Finnish writing errors and learn exactly how to improve before exam day.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors duration-200"
        >
          Start Practicing for the YKI Test
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Will I fail the YKI writing test if I make grammar mistakes?
            </h3>
            <p className="text-gray-600">
              Not necessarily. Examiners expect some grammar mistakes at the intermediate level (Keskitaso). However, if your mistakes make the message impossible to understand, or if you fail to answer the prompt&apos;s bullet points, your score will drop significantly.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Can I use spoken Finnish (puhekieli) in the YKI message writing tasks?
            </h3>
            <p className="text-gray-600">
              It depends on the task. If you are writing an informal message to a friend, some everyday puhekieli is acceptable. If you are writing a formal message, like a complaint to a company or a message to an authority, you must use standard written Finnish (kirjakieli).
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What happens if I miss one of the bullet points in the prompt?
            </h3>
            <p className="text-gray-600">
              Missing a bullet point is a major task fulfillment error. Even if your Finnish is perfect, failing to address all the required points will prevent you from getting full marks for that specific writing task.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}