import Link from 'next/link';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('guides', 'what-to-do-if-you-dont-understand-yki-writing-prompt', {
  title: 'What to Do If You Don\'t Understand the YKI Writing Prompt',
  description: 'Need YKI writing prompt help? Discover step-by-step strategies to handle a blank mind, guess Finnish meanings, and salvage your score on test day.',
});

export default function YkiWritingPromptHelpPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Will I automatically fail if I write about the wrong topic in the YKI test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. While completely ignoring the prompt will result in a zero for that task, writing a coherent, grammatically sound text on a closely related topic often earns partial credit. Examiners want to evaluate your language skills, so producing Finnish is always better than leaving the page blank."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use English words if I don't know the Finnish equivalent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should avoid using English or other languages. If you don't know a specific noun, try to describe it using other Finnish words (circumlocution), or use a broader, more general term."
        }
      },
      {
        "@type": "Question",
        "name": "How much time should I spend trying to understand a confusing prompt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Spend no more than 2-3 minutes analyzing a difficult prompt. If you still don't fully understand it, formulate a best guess based on the words you do recognize and start writing to ensure you manage your time effectively."
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="prose prose-lg lg:prose-xl mx-auto text-gray-800">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            What to Do If You Don't Understand the YKI Writing Prompt
          </h1>
          <p className="text-xl text-gray-600">
            A practical, step-by-step guide to salvaging your writing task when the vocabulary seems impossible.
          </p>
        </header>

        <section className="mb-12">
          <p>
            Sitting in the examination room, you turn the page to the final writing task, and a sudden wave of panic sets in. The instructions blur together, and you realize you have no idea what the main topic actually is. If you are desperately searching for <strong>YKI writing prompt help</strong> right now or preparing for this exact worst-case scenario, you are not alone. 
          </p>
          <p>
            Misunderstanding a prompt does not have to mean failing the exam. By applying the right tactics, you can demonstrate your Finnish language competence even when the specific vocabulary escapes you. This guide will walk you through exactly how to troubleshoot a confusing prompt and get words on the page.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Immediate YKI Writing Prompt Help: Stopping the Panic
          </h2>
          <p>
            Experiencing a <strong>blank mind in YKI test</strong> conditions is a normal physiological response to stress. When your brain enters "fight or flight" mode, accessing your secondary language vocabulary becomes incredibly difficult.
          </p>
          <p>
            <strong>Step 1: The Reset.</strong> Put your pencil down for 30 seconds. Close your eyes and take three deep breaths. You cannot decode a foreign language while panicking. Remind yourself that the YKI test (Keskitaso) only requires a B1 level—you do not need to write a masterpiece; you just need to communicate a message.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Step-by-Step Problem Solving: Guessing Meaning in Finnish
          </h2>
          <p>
            Finnish is an agglutinative language, which means words are often built by gluing smaller, recognizable parts together. <strong>Guessing meaning in Finnish</strong> relies heavily on breaking down these compounds and identifying root words.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Deconstruct Compound Words</h3>
          <p>
            If you encounter a massive word that blocks your understanding of the prompt, split it mentally.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Example:</strong> You see the word <em>ympäristönsuojelutoimenpide</em>.</li>
            <li><strong>Breakdown:</strong> <em>ympäristö</em> (environment) + <em>suojelu</em> (protection) + <em>toimenpide</em> (measure/action).</li>
            <li><strong>Result:</strong> Even if you only recognize <em>ympäristö</em>, you now know the topic is about the environment. You can immediately start brainstorming your environmental vocabulary.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Identify the Task Type (Register)</h3>
          <p>
            Even if the topic is unclear, you can usually determine the <em>format</em> of what you need to write. Look for structural clues in the prompt:
          </p>
          <div className="overflow-x-auto my-6">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clue Word in Prompt</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">What it Means</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Your Required Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ystävällesi</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">To your friend</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Write an informal message (Moi, Mitä kuuluu?)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Valitus / Reklamaatio</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Complaint</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Write a formal email (Hei, Kirjoitan koska...)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mielipide / Keskustelupalsta</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Opinion / Forum</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Write a structured argument (Minun mielestäni...)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Core YKI Test Strategies: How to Write When Unsure
          </h2>
          <p>
            If you have broken down the words and looked for clues but are still only 50% sure what the prompt is asking, it is time to execute damage control. 
          </p>

          <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700 my-6 bg-red-50 py-3 pr-4 rounded-r-lg">
            <strong>Critical Mistake:</strong> Leaving the page blank because you are afraid of being off-topic. Examiners cannot grade silence. A blank page guarantees a 0 for that task.
            <br /><br />
            <strong>The Correction:</strong> Write what you know. <strong>YKI test strategies</strong> dictate that partial communication is always better than no communication.
          </blockquote>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Strategy 1: Pivot to a Broader Theme</h3>
          <p>
            If the prompt asks about a highly specific topic, pivot to a broader, related theme where your vocabulary is stronger.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><em>Situation:</em> The prompt is about the impact of online streaming services on local cinemas. You do not know the words for "streaming" or "cinema industry."</li>
            <li><em>Pivot:</em> Write about the broader topic of <strong>technology and free time</strong>. Talk about how people spend too much time on computers (<em>tietokone</em>) and watch too much TV (<em>televisio</em>), and how it is better to go outside (<em>ulos</em>) with friends.</li>
            <li><em>Examiner Scoring:</em> While not perfectly answering the prompt, you are demonstrating your ability to express opinions, use transition words, and structure sentences. You will earn partial credit.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Strategy 2: Use Universal "Filler" Frameworks</h3>
          <p>
            Memorize universally applicable sentence structures that allow you to generate word count and showcase grammatical structures, regardless of the topic.
          </p>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <h4 className="font-bold mb-2">Reusable Opinion Framework:</h4>
            <ul className="list-none space-y-2">
              <li><strong>Opening:</strong> <em>Tämä on erittäin tärkeä ja mielenkiintoinen aihe.</em> (This is a very important and interesting topic.)</li>
              <li><strong>Stating an opinion:</strong> <em>Olen sitä mieltä, että...</em> (I am of the opinion that...) + [insert basic sentence].</li>
              <li><strong>Acknowledging the other side:</strong> <em>Toisaalta on totta, että...</em> (On the other hand, it is true that...)</li>
              <li><strong>Concluding:</strong> <em>Lopuksi haluan sanoa, että asia ei ole yksinkertainen.</em> (Finally, I want to say that the matter is not simple.)</li>
            </ul>
          </div>
        </section>

        <hr className="my-12 border-t border-gray-200" />

        <section className="mb-12 bg-blue-50 border border-blue-100 rounded-xl p-8 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Turn Panic into Preparation</h2>
          <p className="text-lg text-gray-700 mb-6">
            The best way to prevent a blank mind on test day is to practice with realistic, challenging prompts beforehand. Learn to pivot, guess meanings, and write confidently even when you do not know every word.
          </p>
          <div className="inline-block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md">
              Start a YKI Writing Practice Session
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            <Link href="#faq" className="underline hover:text-blue-600 transition-colors">
              Have questions? Jump to the FAQs.
            </Link>
          </p>
        </section>

        <section className="mb-12" id="faq">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Will I automatically fail if I write about the wrong topic in the YKI test?</h3>
              <p className="mt-2 text-gray-600">Not necessarily. While completely ignoring the prompt will result in a zero for that task, writing a coherent, grammatically sound text on a closely related topic often earns partial credit. Examiners want to evaluate your language skills, so producing Finnish is always better than leaving the page blank.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Can I use English words if I don't know the Finnish equivalent?</h3>
              <p className="mt-2 text-gray-600">You should avoid using English or other languages. If you don't know a specific noun, try to describe it using other Finnish words (circumlocution), or use a broader, more general term. Using English highlights a gap in your vocabulary.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">How much time should I spend trying to understand a confusing prompt?</h3>
              <p className="mt-2 text-gray-600">Spend no more than 2-3 minutes analyzing a difficult prompt. Time management is crucial. If you still don't fully understand it, formulate a best guess based on the words you do recognize and start writing immediately to ensure you finish the task.</p>
            </div>
          </div>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}