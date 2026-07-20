import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Writing Test Structure Explained: Tasks, Format and Requirements',
  description: 'Understand the complete YKI writing structure for the intermediate exam. Learn about the YKI writing sections, format, time limits, and task expectations.',
  openGraph: {
    title: 'YKI Writing Test Structure Explained: Tasks, Format and Requirements',
    description: 'Understand the complete YKI writing structure for the intermediate exam. Learn about the YKI writing sections, format, time limits, and task expectations.',
    type: 'article',
  },
};

export default function YkiWritingStructureGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many tasks are in the YKI writing section?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The YKI writing section at the intermediate level (keskitaso) consists of three mandatory tasks: an informal message, a formal message, and an opinion piece."
        }
      },
      {
        "@type": "Question",
        "name": "How much time do I have for the YKI writing test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You have exactly 55 minutes to complete all three tasks in the writing section. Proper time management is crucial to ensure all parts are finished."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a strict word count for the YKI writing tasks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are no strict word counts, but there are physical space limits on the exam paper. Typically, tasks require concise answers ranging from a few sentences for the informal message to a couple of paragraphs for the opinion piece."
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
            YKI Writing Test Structure Explained: Tasks, Format and Requirements
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive breakdown of the intermediate Finnish writing exam layout, time limits, and task expectations.
          </p>
        </header>

        {/* Content Section */}
        <div className="px-8 py-10 prose prose-lg prose-blue max-w-none text-gray-700">
          <p>
            If you are preparing for the intermediate Finnish exam (keskitaso), mastering the <strong>YKI writing structure</strong> is just as important as knowing your grammar. The exam is highly standardized, meaning you will face the exact same layout and types of questions as every other test-taker. By understanding the format before test day, you can allocate your time effectively and focus solely on demonstrating your Finnish skills.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Understanding the YKI Writing Structure and Format
          </h2>
          <p>
            The overall <strong>YKI writing format</strong> is strict and fast-paced. You are given a total of <strong>55 minutes</strong> to complete the entire writing portion of the exam. All tasks are completed on paper with a pencil and eraser, and you must manage your own time between the tasks. 
          </p>
          <p>
            Unlike many other language tests, there is no strict "minimum word count" printed on the exam. Instead, you are limited by the physical lines provided on the paper. Writing concisely and clearly is favored over writing long, rambling paragraphs.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            The Three YKI Writing Sections
          </h2>
          <p>
            The <strong>Finnish language test structure</strong> for the writing subtest is divided into three distinct tasks. Each task is designed to test a different register (level of formality) and vocabulary set.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Task 1: The Informal Message (Epävirallinen viesti)</h3>
          <p>
            This is a short, casual message written to a friend, colleague, or family member.
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Time recommendation:</strong> 10-15 minutes</li>
            <li><strong>Example Prompt:</strong> Your friend invited you to a movie, but you are sick. Write a message apologizing, explaining why you can't come, and suggesting a new time.</li>
            <li><strong>Template / Vocabulary:</strong> Start with <em>&quot;Moi!&quot;</em> or <em>&quot;Hei [Name],&quot;</em>. Use spoken language structures if you are comfortable (e.g., <em>mä, sä</em>), but standard written Finnish (kirjakieli) is also perfectly acceptable. End with <em>&quot;Nähdään!&quot;</em> or <em>&quot;Terveisin, [Your Name]&quot;</em>.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Task 2: The Formal Message (Virallinen viesti)</h3>
          <p>
            This task tests your ability to interact with businesses, officials, or services. Tone is critical here.
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Time recommendation:</strong> 15-20 minutes</li>
            <li><strong>Example Prompt:</strong> You bought a jacket online, but it arrived damaged. Write to customer service to complain, explain the issue, and request a refund.</li>
            <li><strong>Template / Vocabulary:</strong> Always use formal greetings. Start with <em>&quot;Hyvä asiakaspalvelu,&quot;</em>. Use polite conditionals like <em>&quot;Haluaisin kysyä...&quot;</em> (I would like to ask...). End formally with <em>&quot;Ystävällisin terveisin, [Full Name]&quot;</em>.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Task 3: The Opinion Piece (Mielipidekirjoitus)</h3>
          <p>
            This is the longest and most demanding task. You must respond to a claim or short article, expressing and justifying your personal viewpoint.
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Time recommendation:</strong> 20-25 minutes</li>
            <li><strong>Example Prompt:</strong> &quot;Public transportation should be free for everyone.&quot; Write your opinion on this statement.</li>
            <li><strong>Template / Vocabulary:</strong> Structure this with a clear introduction, 1-2 supporting points, and a conclusion. Use phrases like <em>&quot;Olen sitä mieltä, että...&quot;</em> (I am of the opinion that...), <em>&quot;Toisaalta...&quot;</em> (On the other hand...), and <em>&quot;Lopuksi haluan sanoa, että...&quot;</em> (Finally, I want to say that...).</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Expectations for YKI Intermediate Writing
          </h2>
          <p>
            To achieve a passing grade (Skill Level 3 or 4) in <strong>YKI intermediate writing</strong>, examiners evaluate several core criteria:
          </p>
          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="font-bold text-blue-900 mb-2">Examiner Scoring Criteria:</h4>
            <ol className="list-decimal pl-6 text-blue-800 space-y-2">
              <li><strong>Prompt Fulfillment:</strong> Did you address every bullet point asked in the prompt? Missing a required detail will lower your score significantly.</li>
              <li><strong>Understandability:</strong> The message must be understandable to a native Finnish speaker who is not used to reading language learners' text.</li>
              <li><strong>Register:</strong> Did you correctly distinguish between the informal friend message and the formal complaint?</li>
              <li><strong>Grammar & Vocabulary:</strong> You do not need to be perfect. Minor case errors (mixing partitive and genitive) are expected at B1. However, using a variety of vocabulary rather than repeating basic words will push you toward a Level 4.</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Common Structural Mistakes to Avoid
          </h2>
          <div className="space-y-6">
            <div className="border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-red-700 mb-2">Mistake: Poor Time Management</h4>
              <p className="mb-2"><strong>Problem:</strong> Spending 30 minutes on the informal message (Task 1) and leaving only 5 minutes for the heavily weighted opinion piece (Task 3).</p>
              <p className="text-green-700 font-medium"><strong>Correction:</strong> Practice the exact test structure at home with a 55-minute timer. If 15 minutes pass on Task 1, force yourself to wrap it up and move on.</p>
            </div>
            
            <div className="border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-red-700 mb-2">Mistake: Ignoring the Bullet Points</h4>
              <p className="mb-2"><strong>Problem:</strong> Writing a beautiful paragraph that only answers half of what the prompt asked.</p>
              <p className="text-green-700 font-medium"><strong>Correction:</strong> Treat the prompt as a strict checklist. Before handing in your paper, literally point at your written sentences and match them to the prompt's requirements.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 px-8 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Master the YKI Writing Structure
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Put this theory into practice. Try our simulated YKI writing exams, get used to the strict time limits, and receive instant AI feedback on your performance.
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
              <h3 className="text-lg font-bold text-gray-900 mb-2">How many tasks are in the YKI writing section?</h3>
              <p className="text-gray-700">
                The YKI writing section at the intermediate level (keskitaso) consists of three mandatory tasks: an informal message, a formal message, and an opinion piece.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How much time do I have for the YKI writing test?</h3>
              <p className="text-gray-700">
                You have exactly 55 minutes to complete all three tasks in the writing section. Proper time management is crucial to ensure all parts are finished.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Is there a strict word count for the YKI writing tasks?</h3>
              <p className="text-gray-700">
                There are no strict word counts, but there are physical space limits on the exam paper. Typically, tasks require concise answers ranging from a few sentences for the informal message to a couple of paragraphs for the opinion piece.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}