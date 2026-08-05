import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Message Template: Finnish Short Message Structures for Exam',
  description: 'Master the YKI Finnish exam writing section with our reusable YKI message templates. Learn the proper Finnish message format, structure, and phrases to pass.',
  alternates: {
    canonical: '/wiki/templates/yki-message-template',
  },
  openGraph: {
    title: 'YKI Message Template: Finnish Short Message Structures for Exam',
    description: 'Master the YKI Finnish exam writing section with our reusable YKI message templates.',
    type: 'article',
  },
};

export default function YkiMessageTemplatePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long should a short message be in the YKI exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the intermediate YKI exam, a short message is typically around 30 to 50 words. The focus should be on clearly conveying the required information rather than writing a long text."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have to use a formal Finnish message format for every prompt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. You must read the prompt carefully to determine the recipient. If you are writing to a friend, use an informal tone. If you are writing to a company, housing manager, or teacher, use a formal Finnish message format."
        }
      },
      {
        "@type": "Question",
        "name": "Will using a YKI writing template lower my score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all. Examiners look for a logical Finnish writing structure, clear communication, and correct tone. A template helps you organize your thoughts and ensures you include standard greetings and closings, which are required for full marks."
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
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <article className="prose prose-lg prose-blue max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            YKI Message Template: Finnish Short Message Structures for Exam
          </h1>
          
          <p className="lead text-xl text-slate-700 mb-8">
            Preparing for the writing section of the Finnish language test can feel overwhelming, but utilizing a reliable <strong>YKI message template</strong> can significantly improve your speed, accuracy, and overall score. By memorizing standard structures, you can focus on translating your specific ideas rather than worrying about formatting during the exam.
          </p>

          <h2 className="text-3xl font-semibold text-slate-800 mt-10 mb-4">
            Mastering the Finnish Writing Structure
          </h2>
          <p>
            In the YKI intermediate (keskitaso) exam, the writing section usually includes a task where you must write a short message (viesti) or an email (sähköposti). This could be an invitation to a friend, a complaint to a landlord, or an inquiry to a business. To succeed, you need a solid <strong>Finnish writing structure</strong> that adapts to both formal and informal scenarios.
          </p>
          <p>
            A successful message always contains three core components:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li><strong>Opening:</strong> Appropriate greeting based on the recipient.</li>
            <li><strong>Body:</strong> The main point (answering the bullet points given in the prompt).</li>
            <li><strong>Closing:</strong> A natural sign-off and your name.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-slate-800 mt-10 mb-4">
            Formal YKI Message Template
          </h2>
          <p>
            Use this <strong>Finnish message format</strong> when writing to authorities, businesses, teachers, or people you do not know well. The tone should be polite and direct.
          </p>
          
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-slate-900">Template Framework: Formal Request / Complaint</h3>
            <div className="space-y-4 font-mono text-sm md:text-base">
              <p><span className="text-blue-600 font-bold">[Greeting]:</span> Hei / Hyvä [Name / Title],</p>
              <p><span className="text-blue-600 font-bold">[Reason for writing]:</span> Kirjoitan teille, koska... <em>(I am writing to you because...)</em></p>
              <p><span className="text-blue-600 font-bold">[The details]:</span> [Insert specific situation requested by the prompt].</p>
              <p><span className="text-blue-600 font-bold">[Call to action]:</span> Voisitko / Voisitteko auttaa minua? <em>(Could you help me?)</em> OR Odotan vastaustanne. <em>(I await your reply.)</em></p>
              <p><span className="text-blue-600 font-bold">[Sign-off]:</span> Ystävällisin terveisin, <em>(Kind regards,)</em></p>
              <p><span className="text-blue-600 font-bold">[Your Name]:</span> [Etunimi Sukunimi]</p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-slate-800 mt-10 mb-4">
            Informal YKI Writing Template
          </h2>
          <p>
            This <strong>YKI writing template</strong> is ideal for tasks where you are writing to a friend, family member, or a close colleague. The language is more relaxed, and you can use spoken-language-like features if you are comfortable, though standard Finnish (yleiskieli) is always safe.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-slate-900">Template Framework: Informal Invitation / Update</h3>
            <div className="space-y-4 font-mono text-sm md:text-base">
              <p><span className="text-green-600 font-bold">[Greeting]:</span> Moi [Name]! / Hei!</p>
              <p><span className="text-green-600 font-bold">[Opening pleasantry]:</span> Mitä kuuluu? / Kiitos viestistäsi. <em>(How are you? / Thanks for your message.)</em></p>
              <p><span className="text-green-600 font-bold">[The details]:</span> Ajattelin kysyä... <em>(I thought I'd ask...)</em> OR Haluaisin kertoa, että... <em>(I would like to tell you that...)</em></p>
              <p><span className="text-green-600 font-bold">[Call to action/Question]:</span> Sopisiko sinulle? <em>(Would that suit you?)</em> OR Nähdäänkö pian? <em>(Shall we see each other soon?)</em></p>
              <p><span className="text-green-600 font-bold">[Sign-off]:</span> Terveisin / Nähdään, <em>(Regards / See you,)</em></p>
              <p><span className="text-green-600 font-bold">[Your Name]:</span> [Etunimi]</p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-slate-800 mt-10 mb-4">
            Common Mistakes to Avoid
          </h2>
          <ul className="list-disc pl-6 mb-12">
            <li><strong>Mixing Registers:</strong> Do not use <em>"Moi"</em> to start a message to a property manager, and do not use <em>"Ystävällisin terveisin"</em> to a close friend. Match the tone to the prompt.</li>
            <li><strong>Ignoring Prompt Bullet Points:</strong> The examiners grade you on task completion. Ensure your chosen template houses all the specific points you were asked to write about.</li>
            <li><strong>Overcomplicating the Grammar:</strong> Keep your sentences short and clear. Use familiar structures rather than attempting complex grammar you haven't mastered yet.</li>
          </ul>
        </article>

        {/* Internal Links - Related Articles */}
        <nav className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 not-prose">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
          <ul className="space-y-2">
            <li><Link href="/wiki/guides/yki-message-writing-guide" className="text-blue-700 hover:underline">YKI Message Writing Guide: How to Write Short Messages in Finnish</Link></li>
            <li><Link href="/wiki/essays/yki-message-writing-examples" className="text-blue-700 hover:underline">YKI Message Writing Examples: Finnish Sample Answers Explained</Link></li>
          </ul>
        </nav>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white rounded-xl p-8 my-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to perfect your YKI writing skills?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            Join ExamCoach.ai today to practice with interactive YKI writing tasks. Get instant AI-powered feedback on your templates, grammar, and vocabulary.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-blue-700 font-semibold text-lg px-8 py-4 rounded-full hover:bg-blue-50 transition duration-300 shadow-md"
          >
            Start Practicing for Free
          </Link>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">How long should a short message be in the YKI exam?</h3>
              <p className="text-slate-600">In the intermediate YKI exam, a short message is typically around 30 to 50 words. The focus should be on clearly conveying the required information rather than writing a long text.</p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Do I have to use a formal Finnish message format for every prompt?</h3>
              <p className="text-slate-600">No. You must read the prompt carefully to determine the recipient. If you are writing to a friend, use an informal tone. If you are writing to a company, housing manager, or teacher, use a formal Finnish message format.</p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Will using a YKI writing template lower my score?</h3>
              <p className="text-slate-600">Not at all. Examiners look for a logical Finnish writing structure, clear communication, and correct tone. A template helps you organize your thoughts and ensures you include standard greetings and closings, which are required for full marks.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}