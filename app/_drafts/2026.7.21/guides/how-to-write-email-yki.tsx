import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Write an Email for YKI Writing Test: Complete Guide',
  description: 'Learn how to write email YKI tasks perfectly with our step-by-step guide. Get YKI email formats, templates, vocabulary, and examiner scoring tips.',
  openGraph: {
    title: 'How to Write an Email for YKI Writing Test: Complete Guide',
    description: 'Learn how to write email YKI tasks perfectly with our step-by-step guide. Get YKI email formats, templates, vocabulary, and examiner scoring tips.',
    type: 'article',
  },
};

export default function HowToWriteEmailYki() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How formal should a YKI email be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The formality depends on the prompt. If you are writing to a company, housing manager, or authority, you must use a formal tone (kirjakieli). If the prompt asks you to email a friend or colleague, an informal or semi-formal tone is appropriate."
        }
      },
      {
        "@type": "Question",
        "name": "What is the correct YKI email format for the exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard YKI email format includes a proper greeting (e.g., Hyvä asiakaspalvelu,), a clear opening stating the reason for writing, body paragraphs addressing every bullet point in the prompt, and a formal sign-off (e.g., Ystävällisin terveisin, [Your Name])."
        }
      },
      {
        "@type": "Question",
        "name": "How much time should I spend on the YKI email writing task?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Since you have 55 minutes for the entire writing section (which includes three tasks), you should aim to spend about 15-20 minutes on the email writing task."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Header Section */}
        <header className="px-8 pt-12 pb-8 border-b border-gray-100">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            How to Write an Email for YKI Writing Test: Complete Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Master the formal message task with reusable templates, essential vocabulary, and expert exam strategies.
          </p>
        </header>

        {/* Content Section */}
        <div className="px-8 py-10 prose prose-lg prose-blue max-w-none text-gray-700">
          <p>
            Learning <strong>how to write email YKI</strong> responses can feel daunting, but it is one of the most predictable parts of the intermediate Finnish exam (keskitaso). The <strong>YKI email writing task</strong> typically evaluates your ability to handle formal or semi-formal situations, such as making a complaint, asking for information, or communicating with a landlord. This guide will provide you with the exact steps, templates, and vocabulary needed to pass this section with confidence.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Understanding the YKI Email Writing Task
          </h2>
          <p>
            The second task in the YKI writing test is almost always a formal or semi-formal message. You are given a scenario and 3-4 specific bullet points that you must address. Your goal isn't to write the most beautiful Finnish literature, but to demonstrate that you can communicate your needs clearly and politely to a business or official entity. Proper <strong>YKI writing preparation</strong> means knowing exactly how to structure this text before you even sit down in the exam room.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Step-by-Step: How to Write Email YKI Prompts Effectively
          </h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 1: Analyze the Prompt and Bullet Points</h3>
              <p className="text-blue-800 m-0">
                Read the instructions carefully. Identify who you are writing to (this determines your greeting) and check the bullet points. You <em>must</em> answer every single bullet point to get a passing grade.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 2: Open with a Formal Greeting</h3>
              <p className="text-blue-800 m-0">
                Never start a formal email to customer service with "Moi" or "Hei ystävä". Use a recognized formal greeting (see templates below).
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 3: State the Purpose Immediately</h3>
              <p className="text-blue-800 m-0">
                Finns appreciate directness. In your first sentence, explain exactly why you are writing (e.g., "I am writing to complain about...").
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 4: Address the Details and Close</h3>
              <p className="text-blue-800 m-0">
                Answer the remaining bullet points clearly. Then, use a polite, formal sign-off and write your full name. 
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Standard YKI Email Format and Templates
          </h2>
          <p>
            Memorizing a standard <strong>YKI email format</strong> is the easiest way to save time during the exam. Below is a reusable framework for a formal complaint or request.
          </p>
          
          <div className="bg-gray-100 p-6 rounded-lg my-6 border-l-4 border-gray-400">
            <h4 className="font-bold text-gray-900 mb-4">Example Template: The Formal Complaint</h4>
            <p className="font-mono text-sm mb-2"><strong>[Greeting]</strong></p>
            <p className="mb-4"><em>Hyvä asiakaspalvelu,</em> (Dear customer service,) <br/>OR <em>Hyvä isännöitsijä,</em> (Dear housing manager,)</p>
            
            <p className="font-mono text-sm mb-2"><strong>[The Reason for Writing]</strong></p>
            <p className="mb-4"><em>Otan teihin yhteyttä, koska...</em> (I am contacting you because...)</p>
            
            <p className="font-mono text-sm mb-2"><strong>[Addressing the details - e.g., the problem]</strong></p>
            <p className="mb-4"><em>Ostin teiltä [item], mutta se on rikki.</em> (I bought a [item] from you, but it is broken.)</p>
            
            <p className="font-mono text-sm mb-2"><strong>[The Request / Solution]</strong></p>
            <p className="mb-4"><em>Haluaisin palauttaa tuotteen ja saada rahani takaisin. Olisiko tämä mahdollista?</em> (I would like to return the product and get my money back. Would this be possible?)</p>
            
            <p className="font-mono text-sm mb-2"><strong>[Sign-off]</strong></p>
            <p><em>Ystävällisin terveisin,</em><br/><em>[Etunimi Sukunimi]</em></p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Essential Vocabulary for Finnish Email Writing
          </h2>
          <p>
            Elevate your <strong>Finnish email writing</strong> by using appropriate verbs and polite structures. Here is a categorized vocabulary list to study:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Polite Requests (Conditional):</strong> <em>Haluaisin kysyä...</em> (I would like to ask...), <em>Voisitteko auttaa minua?</em> (Could you help me?)</li>
            <li><strong>Explaining a problem:</strong> <em>Valitettavasti...</em> (Unfortunately...), <em>Huomasin, että...</em> (I noticed that...)</li>
            <li><strong>Attaching files (often needed in tasks):</strong> <em>Liitteenä on...</em> (Attached is...), <em>Lähetän kuitin liitteenä.</em> (I am sending the receipt as an attachment.)</li>
            <li><strong>Awaiting reply:</strong> <em>Odotan vastaustanne.</em> (I look forward to your reply.)</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Examiner Scoring: What Evaluators Look For
          </h2>
          <p>
            To achieve a Skill Level 3 or 4 in this task, examiners focus heavily on <strong>register</strong> (formality) and <strong>task fulfillment</strong>. 
          </p>
          <ol className="list-decimal pl-6 mb-8 space-y-2">
            <li><strong>Register Awareness:</strong> If you write a complaint to an electronics store using slang or overly casual language, your score will drop. You must demonstrate that you know how to be polite in Finnish.</li>
            <li><strong>Comprehensibility over Perfection:</strong> You do not need perfect grammar. If you use the wrong case (e.g., writing <em>auto</em> instead of <em>autoa</em>), but the examiner clearly understands you are complaining about a car, you can still pass.</li>
            <li><strong>Bullet Point Checklist:</strong> Examiners literally check if you answered every part of the prompt. Missing a requirement is the fastest way to fail.</li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Common Mistakes and How to Avoid Them
          </h2>
          <div className="space-y-6">
            <div className="border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-red-700 mb-2">Mistake: Over-complicating Your Sentences</h4>
              <p className="mb-2"><strong>Problem:</strong> Students try to translate complex corporate jargon from their native language into Finnish, resulting in a confusing mess of broken grammar.</p>
              <p className="text-green-700 font-medium"><strong>Correction:</strong> Keep sentences short and factual. "The washing machine is broken. I need a repairman." is much better than a grammatically incorrect, convoluted sentence.</p>
            </div>
            
            <div className="border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-red-700 mb-2">Mistake: Forgetting the Greeting and Sign-off</h4>
              <p className="mb-2"><strong>Problem:</strong> Jumping straight into the text without saying hello or goodbye.</p>
              <p className="text-green-700 font-medium"><strong>Correction:</strong> Always frame your email properly. Examiners look at the structure to determine if you understand standard Finnish communication conventions.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 px-8 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Practice Your YKI Email Writing Now
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Ready to test your email writing skills? Use our AI-powered exam simulator to practice formal and informal messages, and get instant feedback on your grammar, tone, and task fulfillment.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            Start a Practice Exam
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="px-8 py-12 bg-white">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How formal should a YKI email be?</h3>
              <p className="text-gray-700">
                The formality depends on the prompt. If you are writing to a company, housing manager, or authority, you must use a formal tone (kirjakieli). If the prompt asks you to email a friend or colleague, an informal or semi-formal tone is appropriate.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What is the correct YKI email format for the exam?</h3>
              <p className="text-gray-700">
                A standard YKI email format includes a proper greeting (e.g., Hyvä asiakaspalvelu,), a clear opening stating the reason for writing, body paragraphs addressing every bullet point in the prompt, and a formal sign-off (e.g., Ystävällisin terveisin, [Your Name]).
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How much time should I spend on the YKI email writing task?</h3>
              <p className="text-gray-700">
                Since you have 55 minutes for the entire writing section (which includes three tasks), you should aim to spend about 15-20 minutes on the email writing task.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}