import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Formal Email Writing Guide: How to Write Professional Emails',
  description: 'Master the YKI formal email task for the intermediate Finnish exam. Learn the correct Finnish email structure, formal vocabulary, and examiner scoring criteria.',
  openGraph: {
    title: 'YKI Formal Email Writing Guide: How to Write Professional Emails',
    description: 'Master the YKI formal email task for the intermediate Finnish exam. Learn the correct Finnish email structure, formal vocabulary, and examiner scoring criteria.',
    type: 'article',
  },
};

export default function YkiFormalEmailGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is a YKI formal email different from an informal message?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A YKI formal email requires standard written Finnish (kirjakieli), polite conditional structures (like 'haluaisin'), and formal greetings/sign-offs. Informal messages to friends allow for spoken language (puhekieli) and casual greetings."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best greeting to use in a formal Finnish email?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The safest greetings are 'Hyvä vastaanottaja,' (Dear recipient,) or addressing the specific department, such as 'Hyvä asiakaspalvelu,' (Dear customer service,). Never use 'Moi' or 'Hei ystävä' in a formal task."
        }
      },
      {
        "@type": "Question",
        "name": "Can I fail the YKI writing test if I use informal language in a formal task?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, using overly casual language in a formal task demonstrates poor register awareness, which is a key grading criterion. It can significantly lower your score, potentially causing you to drop below a passing grade for that task."
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
            YKI Formal Email Writing Guide: How to Write Professional Emails
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Conquer the most heavily structured task of the intermediate Finnish writing exam with proper register, templates, and vocabulary.
          </p>
        </header>

        {/* Content Section */}
        <div className="px-8 py-10 prose prose-lg prose-blue max-w-none text-gray-700">
          <p>
            Writing a <strong>YKI formal email</strong> is a critical skill for passing the intermediate Finnish language exam (keskitaso). Unlike casual messages to friends, communicating with businesses, authorities, or landlords requires a specific tone and standard written Finnish (<em>kirjakieli</em>). This guide breaks down exactly what examiners expect, providing you with the frameworks to secure a high score in this essential <strong>YKI writing task</strong>.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Understanding the YKI Formal Email Task
          </h2>
          <p>
            Typically appearing as the second task in the writing section, the formal email assesses your ability to handle official real-world scenarios. Common prompts involve making a complaint about a faulty product, contacting a housing manager (<em>isännöitsijä</em>) about a broken pipe, or requesting information from a service provider. 
          </p>
          <p>
            The core challenge here is <em>register</em>. You must sound polite, objective, and clear while ensuring you answer every single bullet point provided in the exam prompt.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Step-by-Step Guide to Finnish Email Structure
          </h2>
          <p>
            A proper <strong>Finnish email structure</strong> is highly predictable. By following these steps, you can save valuable time during the 55-minute exam.
          </p>
          <div className="space-y-6 mt-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 1: The Formal Greeting (Tervehdys)</h3>
              <p className="text-blue-800 m-0">
                Always open with a formal salutation. If you know the recipient&apos;s title, use it (e.g., <em>Hyvä isännöitsijä,</em>). If it is a general company, use <em>Hyvä asiakaspalvelu,</em> (Dear customer service,) or <em>Hyvä vastaanottaja,</em> (Dear recipient,).
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 2: State Your Purpose Immediately (Asia)</h3>
              <p className="text-blue-800 m-0">
                Finns value direct communication. Start your first paragraph by explaining exactly why you are writing. For example: <em>Kirjoitan teille, koska haluan tehdä reklamaation.</em> (I am writing to you because I want to make a complaint.)
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 3: Address the Bullet Points</h3>
              <p className="text-blue-800 m-0">
                Systematically answer the prompt&apos;s requirements. Use clear, concise sentences. If asked to explain a problem and suggest a solution, separate them into logical sentences.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Step 4: The Polite Closing (Lopetus)</h3>
              <p className="text-blue-800 m-0">
                End your email with a standard formal closing: <em>Ystävällisin terveisin,</em> (Kind regards,) followed by your full first and last name on the next line.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Reusable Template for a Formal Finnish Email
          </h2>
          <p>
            Memorize this versatile <strong>formal Finnish email</strong> framework. It can be adapted to almost any complaint or request prompt on the test.
          </p>
          
          <div className="bg-gray-100 p-6 rounded-lg my-6 border-l-4 border-gray-400">
            <h4 className="font-bold text-gray-900 mb-4">Template: The Formal Request / Complaint</h4>
            <p className="font-mono text-sm mb-2"><strong>[Formal Greeting]</strong></p>
            <p className="mb-4"><em>Hyvä asiakaspalvelu,</em></p>
            
            <p className="font-mono text-sm mb-2"><strong>[Reason for Contact]</strong></p>
            <p className="mb-4"><em>Otan teihin yhteyttä, koska [state the issue: e.g., tilasin teiltä puhelimen, mutta se on rikki].</em> (I am contacting you because [I ordered a phone from you, but it is broken].)</p>
            
            <p className="font-mono text-sm mb-2"><strong>[Adding Required Details from Prompt]</strong></p>
            <p className="mb-4"><em>Huomasin ongelman eilen. [Add details here].</em> (I noticed the problem yesterday...)</p>
            
            <p className="font-mono text-sm mb-2"><strong>[The Polite Request / Solution]</strong></p>
            <p className="mb-4"><em>Haluaisin palauttaa tuotteen. Olisiko mahdollista saada rahat takaisin?</em> (I would like to return the product. Would it be possible to get a refund?)</p>
            
            <p className="font-mono text-sm mb-2"><strong>[Closing]</strong></p>
            <p><em>Odotan vastaustanne.</em> (I await your reply.)<br/><em>Ystävällisin terveisin,</em><br/><em>[Etunimi Sukunimi]</em></p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Essential Vocabulary for a Finnish Business Email
          </h2>
          <p>
            To score highly, your <strong>Finnish business email</strong> vocabulary needs to show courtesy and clarity. Use the conditional mood (isi-form) to soften requests.
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Polite Openers:</strong> <em>Kirjoitan teille koskien...</em> (I am writing to you regarding...)</li>
            <li><strong>Polite Requests (Conditional):</strong> <em>Haluaisin pyytää...</em> (I would like to request...), <em>Voisitteko korjata sen?</em> (Could you fix it?)</li>
            <li><strong>Expressing Regret/Issues:</strong> <em>Valitettavasti...</em> (Unfortunately...), <em>Olen pettynyt, koska...</em> (I am disappointed because...)</li>
            <li><strong>Attachments (Crucial for YKI prompts):</strong> <em>Liitteenä on kuitti / valokuva.</em> (Attached is the receipt / a photo.)</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Examiner Scoring: How Your YKI Formal Email is Evaluated
          </h2>
          <p>
            When grading a <strong>YKI formal email</strong>, examiners evaluate you based on a few strict criteria to determine if you meet Level 3 or 4:
          </p>
          <ol className="list-decimal pl-6 mb-8 space-y-2">
            <li><strong>Register (Tyylilaji):</strong> Did you successfully use <em>kirjakieli</em>? Using spoken language words like <em>mä</em> or <em>sä</em> instead of <em>minä</em> and <em>sinä</em> in a formal email will severely hurt your score.</li>
            <li><strong>Task Fulfillment:</strong> Did you answer every bullet point? If the prompt asks you to describe a broken item <em>and</em> ask for a specific refund amount, you must include both.</li>
            <li><strong>Grammar & Comprehensibility:</strong> At B1/B2 level, minor case errors (e.g., using the nominative instead of partitive) are forgiven, as long as the recipient can clearly understand what you want.</li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Common Mistakes and How to Fix Them
          </h2>
          <div className="space-y-6">
            <div className="border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-red-700 mb-2">Mistake: Using "Moi" in a Formal Task</h4>
              <p className="mb-2"><strong>Problem:</strong> Many candidates panic and start their formal complaint with <em>&quot;Moi asiakaspalvelu&quot;</em>.</p>
              <p className="text-green-700 font-medium"><strong>Correction:</strong> Practice the division between formal and informal greetings daily. Always default to <em>&quot;Hyvä [Title/Company],&quot;</em> for Task 2.</p>
            </div>
            
            <div className="border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-red-700 mb-2">Mistake: Overly Aggressive Tone</h4>
              <p className="mb-2"><strong>Problem:</strong> When making a complaint, candidates sometimes use direct imperatives like <em>&quot;Anna minun rahat takaisin!&quot;</em> (Give my money back!).</p>
              <p className="text-green-700 font-medium"><strong>Correction:</strong> Finnish formal culture relies heavily on the conditional for politeness. Always use <em>&quot;Haluaisin...&quot;</em> (I would like...) or <em>&quot;Voisitteko...&quot;</em> (Could you...).</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 px-8 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Test Your Formal Email Writing Skills
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Put this theory into practice. Try our YKI writing simulator to draft formal emails and get instant AI-driven feedback on your register, grammar, and task fulfillment.
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
              <h3 className="text-lg font-bold text-gray-900 mb-2">How is a YKI formal email different from an informal message?</h3>
              <p className="text-gray-700">
                A YKI formal email requires standard written Finnish (kirjakieli), polite conditional structures (like &apos;haluaisin&apos;), and formal greetings/sign-offs. Informal messages to friends allow for spoken language (puhekieli) and casual greetings.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What is the best greeting to use in a formal Finnish email?</h3>
              <p className="text-gray-700">
                The safest greetings are &apos;Hyvä vastaanottaja,&apos; (Dear recipient,) or addressing the specific department, such as &apos;Hyvä asiakaspalvelu,&apos; (Dear customer service,). Never use &apos;Moi&apos; or &apos;Hei ystävä&apos; in a formal task.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I fail the YKI writing test if I use informal language in a formal task?</h3>
              <p className="text-gray-700">
                Yes, using overly casual language in a formal task demonstrates poor register awareness, which is a key grading criterion. It can significantly lower your score, potentially causing you to drop below a passing grade for that task.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}