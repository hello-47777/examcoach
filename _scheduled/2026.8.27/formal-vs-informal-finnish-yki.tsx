import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formal vs Informal Finnish: What to Use in YKI Writing',
  description: 'Understand the differences between formal vs informal Finnish YKI writing requirements. Learn when to use kirjakieli and puhekieli to pass your exam.',
  keywords: ['formal vs informal Finnish YKI', 'Kirjakieli vs puhekieli YKI', 'YKI writing tone', 'Finnish register for exams'],
  openGraph: {
    title: 'Formal vs Informal Finnish: What to Use in YKI Writing',
    description: 'Understand the differences between formal vs informal Finnish YKI writing requirements. Learn when to use kirjakieli and puhekieli to pass your exam.',
    type: 'article',
  },
};

export default function FormalVsInformalFinnishYki() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I use spoken language (puhekieli) in the YKI writing test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but only in specific informal tasks, such as writing an email or message to a friend. For official messages, such as complaints or formal applications, you must use standard written Finnish (kirjakieli)."
        }
      },
      {
        "@type": "Question",
        "name": "Will I lose points if I mix formal and informal Finnish?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, mixing registers is a common mistake. Examiners look for a consistent YKI writing tone. If you are writing a formal letter, introducing informal slang or dropping possessive suffixes will negatively impact your score."
        }
      },
      {
        "@type": "Question",
        "name": "What is the most important rule for Finnish register for exams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Always read the prompt carefully to identify the recipient. If the recipient is a friend or family member, an informal tone is appropriate. If it is a company, manager, or official, use a strictly formal tone."
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="prose prose-lg prose-blue mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
          Formal vs Informal Finnish YKI: Mastering the Writing Test
        </h1>

        <p className="lead text-xl text-gray-600 mb-8">
          If you are preparing for the YKI test (Yleinen kielitutkinto), you must understand the rules regarding <strong>formal vs informal Finnish YKI</strong> standards. Choosing the right register—and sticking to it—can mean the difference between passing and failing the writing subtest.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
          Why Formal vs Informal Finnish YKI Rules Matter
        </h2>
        <p>
          The YKI writing test assesses your ability to adapt your language to different situations. This means you need a solid grasp of the appropriate <strong>YKI writing tone</strong> for various contexts. Examiners are specifically checking if you can distinguish between a casual message to a friend and an official complaint to a housing company.
        </p>
        <p>
          In linguistic terms, this is the classic <em>Kirjakieli vs puhekieli YKI</em> dilemma. Kirjakieli (standard written language) is required for formal tasks, while elements of puhekieli (spoken language) can sometimes be acceptable in highly informal writing tasks, though standard informal written Finnish is usually the safest bet.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
          Task Comparison: When to Use Which Register
        </h2>
        
        <div className="overflow-x-auto my-8">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam Task Type</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Required Register</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example Scenario</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Message to a Friend</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Informal</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Inviting a friend to a party or canceling lunch.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Opinion Piece (Mielipidekirjoitus)</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Formal / Semi-formal</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Writing to a local newspaper about recycling.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Official Complaint</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Strictly Formal</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Complaining to a store about a broken product.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
          Key Differences in Finnish Register for Exams
        </h2>
        <p>
          To maintain the correct <strong>Finnish register for exams</strong>, you need to adjust your vocabulary and grammar. Here is a breakdown of the critical differences to keep in mind during your test:
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Pronouns</h3>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Formal:</strong> Always use <em>minä</em> and <em>sinä</em>. For extreme formality (e.g., addressing customer service), you can use the capitalized <em>Te</em> (plural 'you' used formally).</li>
          <li><strong>Informal:</strong> While <em>minä</em> and <em>sinä</em> are still perfectly fine, using <em>mä</em> and <em>sä</em> is acceptable in very casual prompts (like a text message to a friend).</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Possessive Suffixes</h3>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Formal:</strong> You must use possessive suffixes. Example: <em>Minun autoni on rikki.</em> (My car is broken.)</li>
          <li><strong>Informal:</strong> Possessive suffixes are often dropped. Example: <em>Mun auto on rikki.</em></li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3. Vocabulary and Connectors</h3>
        <p>Your choice of transition words signals your mastery of the YKI writing tone.</p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Formal:</strong> Use connectors like <em>kuitenkin</em> (however), <em>siksi</em> (therefore), and <em>lisäksi</em> (additionally).</li>
          <li><strong>Informal:</strong> Use simpler connectors like <em>mutta</em> (but), <em>niin</em> (so), and <em>ja</em> (and).</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
          Common Mistakes to Avoid
        </h2>
        <p>
          The fastest way to lose points in the YKI writing test is <strong>register mixing</strong>. If you start an email with a formal <em>"Hyvä herra"</em> (Dear Sir) but then use spoken language like <em>"Mä haluun..."</em> (I want...), the examiner will deduct points for an inconsistent tone. Always decide before writing: is this task formal or informal? Stick to your decision from the greeting to the sign-off.
        </p>

      </article>

      <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to perfect your YKI writing tone?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Don't let the nuances of Kirjakieli and puhekieli hold you back. Start practicing with instant, AI-driven feedback tailored to the official YKI grading criteria.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Start Practicing Now
        </Link>
      </div>

      <section className="mt-16 border-t pt-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Can I use spoken language (puhekieli) in the YKI writing test?</h3>
            <p className="mt-2 text-gray-600">Yes, but only in specific informal tasks, such as writing an email or message to a friend. For official messages, such as complaints or formal applications, you must use standard written Finnish (kirjakieli).</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Will I lose points if I mix formal and informal Finnish?</h3>
            <p className="mt-2 text-gray-600">Yes, mixing registers is a common mistake. Examiners look for a consistent YKI writing tone. If you are writing a formal letter, introducing informal slang or dropping possessive suffixes will negatively impact your score.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">What is the most important rule for Finnish register for exams?</h3>
            <p className="mt-2 text-gray-600">Always read the prompt carefully to identify the recipient. If the recipient is a friend or family member, an informal tone is appropriate. If it is a company, manager, or official, use a strictly formal tone.</p>
          </div>
        </div>
      </section>
    </main>
  );
}