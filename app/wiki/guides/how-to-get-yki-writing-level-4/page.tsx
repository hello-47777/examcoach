import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('guides', 'how-to-get-yki-writing-level-4', {
  title: 'How to Get YKI Writing Level 4: Move From B1 to B2',
  description: 'Discover a step-by-step guide on how to achieve a YKI writing level 4. Learn how to elevate your Finnish from B1 to B2 with advanced grammar and vocabulary.',
});

export default function YkiWritingLevel4Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the main difference between YKI level 3 and level 4 in writing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Level 3 (B1) focuses on basic comprehensibility and simple structures; passing means you can handle everyday situations, even with grammatical errors. Level 4 (B2) requires more advanced vocabulary, excellent text cohesion using connectors, appropriate register, and a higher degree of grammatical accuracy.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to use lauseenvastikkeet to get a YKI writing level 4?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While not strictly mandatory, correctly using advanced structures like participial phrases (lauseenvastikkeet) strongly signals to the examiner that you have a firm grasp of B2-level Finnish grammar.",
        },
      },
      {
        "@type": "Question",
        name: "Can I make grammar mistakes and still get a B2 rating?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. YKI Level 4 does not expect native-level perfection. Minor errors are acceptable as long as they do not disrupt the flow of the text or obscure your meaning when discussing complex topics.",
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
          How to Get YKI Writing Level 4: Move From B1 to B2
        </h1>

        <p className="lead text-xl text-gray-600 mb-8">
          Securing a passing grade (Level 3) is a major milestone for citizenship, but many ambitious learners want to push their skills further. If you want to know how to achieve a <strong>YKI writing level 4</strong>, you must understand the jump from intermediate (B1) to advanced (B2) text production. 
        </p>

        <p className="mb-8">
          Moving from a B1 to a B2 rating is not just about writing longer texts. It requires grammatical precision, a wider range of vocabulary, and flawless text cohesion. Follow this step-by-step guide to elevate your writing from functional to fluent.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6 border-b pb-2">
          Step 1: Understand the Examiner&apos;s Criteria for YKI Writing Level 4
        </h2>
        <p className="mb-4">
          At Level 3, the examiner simply wants to know: <em>Can I understand what this person is trying to say?</em> At Level 4, the criteria become much stricter. To reach a B2 level, examiners evaluate:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li><strong>Register Consistency:</strong> Can you maintain a strictly formal tone in official messages, without accidentally slipping into spoken language (puhekieli)?</li>
          <li><strong>Grammatical Control:</strong> Errors in basic cases (partitive vs. genitive) and verb conjugations must be minimal.</li>
          <li><strong>Argumentation:</strong> Can you express complex opinions clearly and justify them logically?</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6 border-b pb-2">
          Step 2: Master Sentence Variety for YKI B2 Writing
        </h2>
        <p className="mb-4">
          A common B1 habit is starting every sentence with the subject (e.g., <em>Minä menin kauppaan. Minä ostin maitoa.</em>). In <strong>YKI B2 writing</strong>, sentence variety is crucial. You must demonstrate that you can manipulate sentence structures.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Techniques for Sentence Variety:</h3>
          <ul className="space-y-4 list-none pl-0">
            <li>
              <strong>Use the Passive Voice:</strong>
              <br />
              <em className="text-gray-500 line-through">Meidän täytyy korjata ongelma.</em> (B1)<br />
              <em className="text-green-700 font-medium">Ongelma täytyy korjata.</em> (B2)
            </li>
            <li>
              <strong>Use the Conditional Mood for Politeness:</strong>
              <br />
              <em className="text-gray-500 line-through">Haluan rahani takaisin.</em> (B1)<br />
              <em className="text-green-700 font-medium">Haluaisin pyytää rahojen palautusta.</em> (B2)
            </li>
            <li>
              <strong>Incorporate Lauseenvastikkeet (Participial Phrases):</strong>
              <br />
              <em className="text-gray-500 line-through">Kun olin tehnyt työt, lähdin kotiin.</em> (B1)<br />
              <em className="text-green-700 font-medium">Tehtyäni työt lähdin kotiin.</em> (B2 - Advanced)
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6 border-b pb-2">
          Step 3: Elevate Your Vocabulary for Finnish Advanced Writing
        </h2>
        <p className="mb-4">
          To impress the evaluators assessing your <strong>Finnish advanced writing</strong>, you need to abandon basic adjectives and verbs. Broaden your vocabulary to include nuanced expressions.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="font-semibold text-blue-900 mb-2">Vocabulary Upgrades:</p>
          <ul className="list-disc pl-5 text-blue-800 space-y-1">
            <li>Instead of <em>hyvä</em>, use <strong>erinomainen</strong> (excellent), <strong>hyödyllinen</strong> (useful), or <strong>laadukas</strong> (high-quality).</li>
            <li>Instead of <em>huono</em>, use <strong>puutteellinen</strong> (defective/lacking), <strong>heikkolaatuinen</strong> (poor quality), or <strong>valitettava</strong> (regrettable).</li>
            <li>Instead of <em>Minä ajattelen, että...</em>, use <strong>Olen sitä mieltä, että...</strong> or <strong>Mielestäni on ensisijaisen tärkeää...</strong></li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6 border-b pb-2">
          Step 4: Improve Text Cohesion with Advanced Connectors
        </h2>
        <p className="mb-4">
          A Level 4 text flows seamlessly from one idea to the next. Relying solely on basic conjunctions like <em>ja</em> (and), <em>mutta</em> (but), or <em>koska</em> (because) keeps your score at a B1. Start linking your paragraphs with advanced cohesive devices.
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li><strong>Adding Information:</strong> <em>Lisäksi</em> (Additionally), <em>Sen lisäksi</em> (Besides that), <em>Myös</em> (Also).</li>
          <li><strong>Showing Contrast:</strong> <em>Kuitenkin</em> (However), <em>Siitä huolimatta</em> (Nevertheless), <em>Toisaalta... toisaalta</em> (On the one hand... on the other hand).</li>
          <li><strong>Showing Cause/Effect:</strong> <em>Tämän seurauksena</em> (As a result), <em>Tästä johtuen</em> (Due to this), <em>Siksi</em> (Therefore).</li>
        </ul>
        
        <p className="mb-6 text-gray-700 italic">
          Example B2 Flow: &quot;Olen asunut tässä asunnossa kaksi vuotta. <strong>Tästä huolimatta</strong>, en ole koskaan kokenut vastaavaa ongelmaa. <strong>Lisäksi</strong> haluaisin huomauttaa, että...&quot;
        </p>

      </article>

      {/* Related Articles */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
        <ul className="space-y-2">
          <li><Link href="/wiki/essays/yki-writing-level-4-examples" className="text-blue-700 hover:underline">YKI Writing Level 4 Examples: High Score Finnish Answers</Link></li>
          <li><Link href="/wiki/scoring/yki-level-3-vs-level-4" className="text-blue-700 hover:underline">YKI Level 3 vs Level 4: What Score Do You Need?</Link></li>
        </ul>
      </nav>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white rounded-xl p-8 mt-12 text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Aiming for a Level 4?</h2>
        <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
          Writing at a B2 level requires practice and detailed corrections. Use our AI-powered platform to practice advanced YKI exam tasks and receive instant, in-depth feedback on your grammar, vocabulary, and cohesion.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors duration-200"
        >
          Start Advanced YKI Writing Practice
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What is the main difference between YKI level 3 and level 4 in writing?
            </h3>
            <p className="text-gray-600">
              Level 3 (B1) focuses on basic comprehensibility and simple structures; passing means you can handle everyday situations, even with grammatical errors. Level 4 (B2) requires more advanced vocabulary, excellent text cohesion using connectors, appropriate register, and a higher degree of grammatical accuracy.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Do I need to use lauseenvastikkeet to get a YKI writing level 4?
            </h3>
            <p className="text-gray-600">
              While not strictly mandatory, correctly using advanced structures like participial phrases (lauseenvastikkeet) strongly signals to the examiner that you have a firm grasp of B2-level Finnish grammar.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Can I make grammar mistakes and still get a B2 rating?
            </h3>
            <p className="text-gray-600">
              Yes. YKI Level 4 does not expect native-level perfection. Minor errors are acceptable as long as they do not disrupt the flow of the text or obscure your meaning when discussing complex topics.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
