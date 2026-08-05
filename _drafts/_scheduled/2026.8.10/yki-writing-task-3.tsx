import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Writing Task 3 Explained: Complete Message Preparation Guide',
  description: 'Master YKI writing task 3 with our step-by-step guide. Learn reusable templates, essential vocabulary, examiner scoring criteria, and common mistakes to avoid.',
  alternates: {
    canonical: '/wiki/guides/yki-writing-task-3',
  },
};

export default function YkiWritingTask3Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many words should I write for YKI writing task 3?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no strict word limit in the intermediate YKI exam, but aiming for 100 to 150 words is usually sufficient to fully answer the prompt and demonstrate your language skills without risking too many grammatical errors."
        }
      },
      {
        "@type": "Question",
        "name": "What is the most common topic for YKI writing task 3?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Task 3 frequently requires you to write an official message or an opinion piece. Common scenarios include writing a complaint to a housing manager, sending feedback to a company, or expressing an opinion on a societal issue in a local forum."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use informal language in this task?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on the specific prompt, but usually, Task 3 requires a formal or semi-formal tone (asiatyyli). Always read the instructions carefully to determine who the recipient of your message is."
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
      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">
            YKI Writing Task 3 Explained: Complete Message Preparation Guide
          </h1>
          <p className="text-xl text-gray-600">
            A comprehensive, step-by-step guide to mastering the final writing assignment in your Finnish intermediate exam.
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg prose-blue max-w-none text-gray-700">
          
          <p>
            If you are aiming for the intermediate level (keskitaso) in the Finnish language, passing the writing section is a significant milestone. Mastering <strong>YKI writing task 3</strong> is crucial, as this final assignment often carries the most weight and demands the highest level of structural organization and vocabulary.
          </p>

          <p>
            This guide is designed for serious Finnish writing preparation. We will break down exactly how to structure your response, provide reusable templates, and explore the criteria examiners use to score your text.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
            Understanding YKI Writing Task 3 Within the YKI Exam Tasks
          </h2>
          <p>
            Among all the YKI exam tasks, the writing subtest usually progresses in difficulty. While Task 1 is typically a short, informal message to a friend, and Task 2 might be an email reply, <strong>YKI writing task 3</strong> often requires you to write a longer, formal, or semi-formal text. This is most commonly an opinion piece (<em>mielipidekirjoitus</em>) or an official complaint/feedback message (<em>palaute tai valitus</em>).
          </p>

          <hr className="my-8 border-gray-200" />

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
            Step-by-Step Guide: How to Tackle the Prompt
          </h2>
          <p>
            Use this step-by-step approach to ensure you completely answer the prompt under time pressure.
          </p>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Analyze the Situation and Recipient:</strong> Who are you writing to? (e.g., a housing manager, a newspaper editor, a store manager). This dictates whether you use standard language (<em>yleiskieli</em>) rather than spoken language (<em>puhekieli</em>).
            </li>
            <li>
              <strong>Identify the Core Requirements:</strong> The prompt will list 3 to 4 specific bullet points you must cover (e.g., why you are writing, what happened, and what you want them to do). Missing a bullet point will heavily penalize your score.
            </li>
            <li>
              <strong>Outline the Structure:</strong> Dedicate one short paragraph to each bullet point. This makes your message logical and easy for the examiner to read.
            </li>
            <li>
              <strong>Review and Correct:</strong> Spend your final 3-5 minutes checking verb conjugations, object cases (partitive vs. accusative/genitive), and spelling.
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
            Reusable Frameworks and Templates
          </h2>
          <p>
            Having a reliable template reduces cognitive load during the exam. Below is a standard template for an official complaint or feedback message.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Formal Message Template</h3>
            <ul className="list-none space-y-2 p-0 m-0">
              <li><strong>Greeting:</strong> <em>Hyvä [Recipient Role/Name],</em> (e.g., Hyvä isännöitsijä,)</li>
              <li><strong>Opening (Why are you writing?):</strong> <em>Kirjoitan teille, koska haluan antaa palautetta / tehdä valituksen...</em> (I am writing to you because I want to give feedback / make a complaint...)</li>
              <li><strong>Body Paragraph 1 (The context):</strong> State the facts clearly based on prompt bullet 1.</li>
              <li><strong>Body Paragraph 2 (The problem/opinion):</strong> Elaborate based on prompt bullet 2.</li>
              <li><strong>Call to Action (What should happen next?):</strong> <em>Toivon, että asia korjataan pian. / Voisitteko ottaa minuun yhteyttä?</em> (I hope the matter is fixed soon. / Could you contact me?)</li>
              <li><strong>Sign-off:</strong> <em>Ystävällisin terveisin, [Your Name]</em></li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
            Realistic Example: The Housing Company Complaint
          </h2>
          <p>
            Let&apos;s look at a practical example. Imagine the prompt asks you to write to your housing manager because the heating in your apartment is broken.
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-6">
            <strong>Prompt:</strong> Kirjoita isännöitsijälle. Kerro: kuka olet, mikä on ongelma, miten se vaikuttaa sinuun, ja mitä haluat isännöitsijän tekevän.
          </blockquote>
          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <p className="font-mono text-sm whitespace-pre-wrap">
              Hyvä isännöitsijä,<br /><br />
              Olen Matti Meikäläinen ja asun asunnossa B 12. Kirjoitan teille, koska asuntoni on ollut erittäin kylmä viimeiset kolme päivää. Makuuhuoneen patteri ei toimi ollenkaan.<br /><br />
              Tämä on iso ongelma, koska minulla on pieni lapsi, ja hän palelee yöllä. Olemme yrittäneet ilmata patterin, mutta se ei auttanut.<br /><br />
              Toivon, että voitte lähettää huoltomiehen korjaamaan patterin mahdollisimman pian. Voisitteko soittaa minulle numeroon 040 123 4567, jotta voimme sopia ajan?<br /><br />
              Ystävällisin terveisin,<br />
              Matti Meikäläinen
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
            Examiner Scoring Criteria
          </h2>
          <p>
            To achieve level 3 or 4 (passing grades for intermediate), examiners look at four main categories:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Task Fulfillment:</strong> Did you answer all parts of the prompt? Is the tone appropriate?</li>
            <li><strong>Intelligibility:</strong> Is the text easy to understand despite minor errors?</li>
            <li><strong>Vocabulary (Sanasto):</strong> Do you use varied words relevant to the topic, rather than repeating basic words?</li>
            <li><strong>Grammar (Kielioppi):</strong> Are the basic structures (verb types, standard cases, word order) mostly correct? Errors are allowed, but they must not hinder comprehension.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
            Categorized Vocabulary for Task 3
          </h2>
          <p>
            Enhance your text with these reliable phrases, suitable for formal and semi-formal contexts.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Expressing an Opinion</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><em>Olen sitä mieltä, että...</em> (I am of the opinion that...)</li>
            <li><em>Mielestäni...</em> (In my opinion...)</li>
            <li><em>On tärkeää huomata, että...</em> (It is important to note that...)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Making a Request or Suggestion</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><em>Ehdotan, että...</em> (I suggest that...)</li>
            <li><em>Olisi hienoa, jos...</em> (It would be great if... + conditional)</li>
            <li><em>Toivon todella, että...</em> (I really hope that...)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Structuring Words (Conjunctions)</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><em>Lisäksi</em> (Additionally / Furthermore)</li>
            <li><em>Kuitenkin</em> (However)</li>
            <li><em>Siksi</em> (Therefore / Because of that)</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
            Common Mistakes and How to Correct Them
          </h2>
          <p>
            Avoid these frequent pitfalls that can lower your score:
          </p>
          <div className="space-y-4">
            <div>
              <strong>Mistake: Missing bullet points from the prompt.</strong><br />
              <em>Correction:</em> Always re-read the prompt after writing. Check off each requirement mentally. If the prompt asks &quot;how it made you feel,&quot; include a sentence like <em>&quot;Tämä tilanne harmittaa minua paljon.&quot;</em>
            </div>
            <div>
              <strong>Mistake: Using spoken language (puhekieli) in a formal message.</strong><br />
              <em>Correction:</em> Do not write <em>&quot;mä meen&quot;</em> or <em>&quot;tää on huono juttu.&quot;</em> Use standard written Finnish (yleiskieli): <em>&quot;minä menen&quot;</em> and <em>&quot;tämä on huono asia.&quot;</em>
            </div>
            <div>
              <strong>Mistake: Overcomplicating grammar.</strong><br />
              <em>Correction:</em> You do not need to use complex participles or rare passive forms if you aren&apos;t confident. Clear, correct, and simple sentences score higher than complex, broken ones.
            </div>
          </div>
        </article>

        {/* FAQ Section */}
        <section className="mt-16 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">How many words should I write for YKI writing task 3?</h3>
              <p className="text-gray-700 mt-2">
                There is no strict word limit in the intermediate YKI exam, but aiming for 100 to 150 words is usually sufficient to fully answer the prompt and demonstrate your language skills without risking too many grammatical errors.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">What is the most common topic for YKI writing task 3?</h3>
              <p className="text-gray-700 mt-2">
                Task 3 frequently requires you to write an official message or an opinion piece. Common scenarios include writing a complaint to a housing manager, sending feedback to a company, or expressing an opinion on a societal issue in a local forum.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Can I use informal language in this task?</h3>
              <p className="text-gray-700 mt-2">
                It depends on the specific prompt, but usually, Task 3 requires a formal or semi-formal tone (asiatyyli). Always read the instructions carefully to determine who the recipient of your message is.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Links - Related Articles */}
        <nav className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 not-prose">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
          <ul className="space-y-2">
            <li><Link href="/wiki/guides/yki-message-writing-guide" className="text-blue-700 hover:underline">YKI Message Writing Guide: How to Write Short Messages in Finnish</Link></li>
            <li><Link href="/wiki/scoring/yki-message-writing-scoring" className="text-blue-700 hover:underline">YKI Message Writing Scoring: How Examiners Evaluate Messages</Link></li>
          </ul>
        </nav>

        {/* CTA Section */}
        <section className="mt-16 bg-blue-600 text-white rounded-xl p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Pass the YKI Exam?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            Stop guessing your writing score. Practice YKI writing tasks with immediate, AI-driven feedback that grades you just like a real examiner.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow hover:bg-gray-100 transition-colors duration-200"
          >
            Start Practicing Now
          </Link>
        </section>

      </main>
    </>
  );
}