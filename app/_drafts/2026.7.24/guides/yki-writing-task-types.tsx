import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Writing Task Types: Email, Opinion Text and Message Explained',
  description: 'Master the three main YKI writing tasks for the intermediate Finnish exam. Get templates, vocabulary, and examples for YKI email, opinion, and message writing.',
  openGraph: {
    title: 'YKI Writing Task Types: Email, Opinion Text and Message Explained',
    description: 'Master the three main YKI writing tasks for the intermediate Finnish exam. Get templates, vocabulary, and examples for YKI email, opinion, and message writing.',
    type: 'article',
  },
};

export default function YkiWritingTaskTypes() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the mandatory YKI writing tasks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The intermediate YKI test requires you to complete three writing tasks: an informal message to a friend, a formal email to a service or authority, and an opinion text responding to a statement."
        }
      },
      {
        "@type": "Question",
        "name": "Is YKI email writing always formal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the second task is generally a formal or semi-formal email where you must write to a business, housing manager, or customer service representative. You must use appropriate formal greetings and polite requests."
        }
      },
      {
        "@type": "Question",
        "name": "How long should my YKI opinion writing be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no strict word count, but the opinion piece is the longest task. You should write a clear introduction, 2-3 supporting arguments, and a concluding sentence, filling the provided space on the exam paper."
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
            YKI Writing Task Types: Email, Opinion Text and Message Explained
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A complete overview of the three mandatory texts you must write during the intermediate Finnish language exam.
          </p>
        </header>

        {/* Content Section */}
        <div className="px-8 py-10 prose prose-lg prose-blue max-w-none text-gray-700">
          <p>
            Passing the intermediate (keskitaso) Finnish exam requires you to successfully navigate three specific <strong>YKI writing tasks</strong>. The 55-minute writing section tests your ability to adapt your tone, vocabulary, and structure to different real-life situations. Understanding exactly what each task demands is the fastest way to improve your score.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            The Three Main YKI Writing Tasks
          </h2>
          <p>
            The exam always follows the same format. You will progress from informal communication to formal correspondence, ending with a complex argumentative text. Let&apos;s break down each of the YKI writing tasks, including templates and vocabulary you can use on exam day.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Task 1: The YKI Message Task (Informal)</h3>
          <p>
            The <strong>YKI message task</strong> evaluates your ability to handle everyday, casual situations. You will write a short message to a friend, colleague, or family member. Typical topics include apologizing for being late, inviting someone to an event, or suggesting a change of plans.
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Tone:</strong> Casual and friendly. Spoken language (puhekieli) is acceptable but not required.</li>
            <li><strong>Example Prompt:</strong> <em>Your friend invited you to their birthday party. Write a message thanking them, explaining that you will be late because of work, and asking if you can bring anything.</em></li>
          </ul>
          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="font-bold text-blue-900 mb-2">Template & Vocabulary:</h4>
            <p className="text-blue-800 m-0 mb-2"><strong>Greeting:</strong> <em>Moi! / Hei [Name], / Terve!</em></p>
            <p className="text-blue-800 m-0 mb-2"><strong>Core phrases:</strong> <em>Kiitos kutsusta!</em> (Thanks for the invite!), <em>Anteeksi, mutta tulen myöhässä, koska...</em> (Sorry, but I will be late because...)</p>
            <p className="text-blue-800 m-0"><strong>Closing:</strong> <em>Nähdään lauantaina! / Terveisin, [Name]</em></p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Task 2: YKI Email Writing (Formal)</h3>
          <p>
            <strong>YKI email writing</strong> tests your formal communication. You will write to an authority, a company, or a service provider. Typical topics include making a complaint (e.g., broken appliance), asking for information, or contacting housing maintenance (isännöitsijä).
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Tone:</strong> Formal, polite, and direct (kirjakieli).</li>
            <li><strong>Example Prompt:</strong> <em>You rented a cabin, but the heating did not work and the place was dirty. Write an email to the rental company demanding a partial refund.</em></li>
          </ul>
          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="font-bold text-blue-900 mb-2">Template & Vocabulary:</h4>
            <p className="text-blue-800 m-0 mb-2"><strong>Greeting:</strong> <em>Hyvä asiakaspalvelu, / Hyvä vastaanottaja,</em></p>
            <p className="text-blue-800 m-0 mb-2"><strong>Core phrases:</strong> <em>Otan teihin yhteyttä, koska...</em> (I am contacting you because...), <em>Haluaisin pyytää...</em> (I would like to request...), <em>Olisiko mahdollista...</em> (Would it be possible...)</p>
            <p className="text-blue-800 m-0"><strong>Closing:</strong> <em>Ystävällisin terveisin, [Full Name]</em></p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Task 3: YKI Opinion Writing</h3>
          <p>
            <strong>YKI opinion writing</strong> is the most challenging task. You must read a short statement or article snippet and write an argumentative text expressing your opinion. Topics often revolve around society, health, environment, or work life.
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Tone:</strong> Objective, persuasive, and structured.</li>
            <li><strong>Example Prompt:</strong> <em>&quot;Remote work is better for employees than working in an office.&quot; Write your opinion on this statement.</em></li>
          </ul>
          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="font-bold text-blue-900 mb-2">Template & Vocabulary:</h4>
            <p className="text-blue-800 m-0 mb-2"><strong>Opening:</strong> <em>Olen täysin samaa mieltä / eri mieltä.</em> (I completely agree / disagree.)</p>
            <p className="text-blue-800 m-0 mb-2"><strong>Structuring arguments:</strong> <em>Ensinnäkin...</em> (Firstly...), <em>Toisaalta...</em> (On the other hand...), <em>Lisäksi ajattelen, että...</em> (Furthermore, I think that...)</p>
            <p className="text-blue-800 m-0"><strong>Conclusion:</strong> <em>Lopuksi haluan sanoa, että...</em> (Finally, I want to say that...)</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Examiner Scoring: How YKI Writing Examples Are Graded
          </h2>
          <p>
            When evaluators read your texts, they are looking for specific competencies. To score a 3 or 4 (passing grades for intermediate), you must demonstrate:
          </p>
          <ol className="list-decimal pl-6 mb-8 space-y-2">
            <li><strong>Task Fulfillment:</strong> Did you answer every part of the prompt? If a prompt asks you to explain a problem <em>and</em> suggest a solution, you must do both.</li>
            <li><strong>Register Awareness:</strong> Using "Moi" in a formal complaint will lower your score. Knowing the difference between the message and email task is vital.</li>
            <li><strong>Comprehensibility:</strong> Minor grammar mistakes are allowed. However, if your grammar prevents the examiner from understanding your point, your score will drop.</li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Common Mistakes in YKI Writing Tasks
          </h2>
          <div className="space-y-6">
            <div className="border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-red-700 mb-2">Mistake: Overcomplicating Sentences</h4>
              <p className="mb-2"><strong>Problem:</strong> Students try to translate complex English or native-language idioms into Finnish, resulting in broken grammar.</p>
              <p className="text-green-700 font-medium"><strong>Correction:</strong> Keep sentences short and clear. Combine simple clauses using basic conjunctions like <em>mutta</em> (but), <em>koska</em> (because), and <em>joten</em> (so).</p>
            </div>
            
            <div className="border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-red-700 mb-2">Mistake: Spending Too Much Time on Task 1</h4>
              <p className="mb-2"><strong>Problem:</strong> Using 25 minutes on the informal message, leaving no time to finish the opinion piece.</p>
              <p className="text-green-700 font-medium"><strong>Correction:</strong> Stick to a strict timeline. 10 minutes for the message, 15-20 for the email, and 25 for the opinion text.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 px-8 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Practice All YKI Writing Tasks Today
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Ready to test your skills? Use our AI-powered platform to practice informal messages, formal emails, and opinion texts. Get instant examiner-style feedback.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            Start Practicing for Free
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="px-8 py-12 bg-white">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What are the mandatory YKI writing tasks?</h3>
              <p className="text-gray-700">
                The intermediate YKI test requires you to complete three writing tasks: an informal message to a friend, a formal email to a service or authority, and an opinion text responding to a statement.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Is YKI email writing always formal?</h3>
              <p className="text-gray-700">
                Yes, the second task is generally a formal or semi-formal email where you must write to a business, housing manager, or customer service representative. You must use appropriate formal greetings and polite requests.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long should my YKI opinion writing be?</h3>
              <p className="text-gray-700">
                There is no strict word count, but the opinion piece is the longest task. You should write a clear introduction, 2-3 supporting arguments, and a concluding sentence, filling the provided space on the exam paper.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}