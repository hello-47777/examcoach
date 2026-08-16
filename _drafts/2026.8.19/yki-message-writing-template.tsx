import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YKI Message Writing Template: Easy Structure for Exam Tasks",
  description:
    "Master the written Finnish exam with our reusable YKI message template. Learn the correct Finnish message format for both formal and informal exam tasks.",
};

export default function YkiMessageTemplatePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I use the exact YKI message template in my exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can use the structural framework of a YKI message template during the exam. However, you must always adapt the body content to directly address the specific bullet points provided in the exam prompt.",
        },
      },
      {
        "@type": "Question",
        name: "What is the standard Finnish message format for formal emails?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The standard formal Finnish message format begins with a polite greeting (e.g., 'Hei,'), followed by a clear statement of purpose ('Kirjoitan koskien...'). The body should be direct and polite, concluding with a formal sign-off ('Ystävällisin terveisin, [Your Name]').",
        },
      },
      {
        "@type": "Question",
        name: "How many messages do I have to write in the YKI test?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In the intermediate YKI test (Keskitaso), you typically have to write two or three texts. At least one is usually an informal message (like an email to a friend) and one is a formal message (like feedback or a complaint).",
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
          YKI Message Writing Template: Easy Structure for Exam Tasks
        </h1>

        <p className="lead text-xl text-gray-600 mb-8">
          Are you worried about organizing your thoughts during the writing section of the Finnish proficiency test? Memorizing a reliable <strong>YKI message template</strong> is one of the most effective strategies to save time and ensure you meet the examiner's grading criteria. 
        </p>

        <p className="mb-6">
          In the YKI (Yleiset kielitutkinnot) test, the writing tasks always require you to address specific bullet points. If your text is unorganized, you risk losing points on structure and clarity. By utilizing a proven <strong>YKI writing template</strong>, you can quickly frame your answers and focus your mental energy on grammar and vocabulary.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Understanding the Finnish Message Format
        </h2>
        <p className="mb-6">
          The exam generally tests two variations of the <strong>Finnish message format</strong>: informal messages (epävirallinen viesti) and formal messages (virallinen viesti). The structure for both is fundamentally the same, but the vocabulary, greetings, and sign-offs change drastically depending on the recipient.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          1. The Informal YKI Message Template (To a Friend or Colleague)
        </h2>
        <p className="mb-4">
          Informal tasks usually ask you to invite a friend to an event, apologize for missing a meeting, or share news. Keep the tone friendly and conversational.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b pb-2">Informal Template Structure</h3>
          <ul className="space-y-4 list-none pl-0">
            <li>
              <strong>Greeting:</strong>
              <br />
              <em className="text-gray-700">Hei [Name]! / Moi! / Terve!</em>
            </li>
            <li>
              <strong>Opening (Optional but polite):</strong>
              <br />
              <em className="text-gray-700">Mitä kuuluu? Kiitos viestistäsi.</em> (How are you? Thanks for your message.)
            </li>
            <li>
              <strong>Body Paragraph(s) - Answer Exam Bullets:</strong>
              <br />
              Address point 1: <em className="text-gray-700">Kirjoitan, koska...</em> (I am writing because...)<br />
              Address point 2: <em className="text-gray-700">Lisäksi...</em> (Additionally...)<br />
              Address point 3: <em className="text-gray-700">Mitä mieltä olet?</em> (What do you think?)
            </li>
            <li>
              <strong>Closing:</strong>
              <br />
              <em className="text-gray-700">Nähdään pian! / Soitellaan!</em> (See you soon! / Let's talk!)
            </li>
            <li>
              <strong>Sign-off:</strong>
              <br />
              <em className="text-gray-700">Terveisin, [Your First Name]</em>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          2. The Formal YKI Message Template (To a Company or Authority)
        </h2>
        <p className="mb-4">
          Formal tasks typically involve writing a complaint, requesting information, or applying for something. The tone must be polite, direct, and respectful. Use standard written Finnish (kirjakieli) rather than spoken language (puhekieli).
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-blue-200 pb-2">Formal Template Structure</h3>
          <ul className="space-y-4 list-none pl-0">
            <li>
              <strong>Greeting:</strong>
              <br />
              <em className="text-gray-700">Hei, / Arvoisa [Title/Name],</em>
            </li>
            <li>
              <strong>State the Purpose Immediately:</strong>
              <br />
              <em className="text-gray-700">Kirjoitan teille koskien...</em> (I am writing to you regarding...)<br />
              <em className="text-gray-700">Haluaisin antaa palautetta...</em> (I would like to give feedback on...)
            </li>
            <li>
              <strong>Body Paragraph(s) - The Details:</strong>
              <br />
              Explain the situation clearly. Address every single bullet point in the prompt.<br />
              <em className="text-gray-700">Ongelma on se, että...</em> (The problem is that...)
            </li>
            <li>
              <strong>Call to Action / Resolution:</strong>
              <br />
              <em className="text-gray-700">Toivon, että voitte...</em> (I hope that you can...)<br />
              <em className="text-gray-700">Odotan vastaustanne.</em> (I look forward to your reply.)
            </li>
            <li>
              <strong>Sign-off:</strong>
              <br />
              <em className="text-gray-700">Ystävällisin terveisin,</em><br />
              <em className="text-gray-700">[Your Full Name]</em>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          How to Apply This YKI Message Template in the Exam
        </h2>
        <p className="mb-4">
          Memorizing the framework is only the first step. To score well in the writing test, examiners look at how seamlessly you blend the required prompt answers into the structure. Here are a few examiner criteria to keep in mind:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li><strong>Task Fulfillment:</strong> Did you answer every single question asked in the prompt? Missing a bullet point will lower your score, no matter how perfect your grammar is.</li>
          <li><strong>Cohesion:</strong> Use linking words (<em>mutta, koska, sen vuoksi, lisäksi</em>) to connect your sentences within the template.</li>
          <li><strong>Register:</strong> Ensure you don't accidentally mix informal greetings with formal sign-offs. Match the register to the task.</li>
        </ul>

      </article>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white rounded-xl p-8 mt-12 text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to test your writing skills?</h2>
        <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
          Take your preparation to the next level. Use these templates in our simulated YKI writing environment and receive instant, AI-driven feedback on your Finnish grammar and task fulfillment.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors duration-200"
        >
          Start Practicing Now
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Can I use the exact YKI message template in my exam?
            </h3>
            <p className="text-gray-600">
              Yes, you can use the structural framework of a YKI message template during the exam. However, you must always adapt the body content to directly address the specific bullet points provided in the exam prompt.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What is the standard Finnish message format for formal emails?
            </h3>
            <p className="text-gray-600">
              The standard formal Finnish message format begins with a polite greeting (e.g., "Hei,"), followed by a clear statement of purpose ("Kirjoitan koskien..."). The body should be direct and polite, concluding with a formal sign-off ("Ystävällisin terveisin, [Your Name]").
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              How many messages do I have to write in the YKI test?
            </h3>
            <p className="text-gray-600">
              In the intermediate YKI test (Keskitaso), you typically have to write two or three texts. At least one is usually an informal message (like an email to a friend) and one is a formal message (like feedback or a complaint).
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}