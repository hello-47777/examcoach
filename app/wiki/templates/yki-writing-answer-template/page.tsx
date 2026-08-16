import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Writing Answer Template: Structure Every Task | ExamCoach.ai',
  description: 'Master the YKI test with a proven YKI writing answer template. Use our Finnish writing framework and YKI exam template to structure formal emails and opinion pieces.',
  alternates: {
    canonical: '/wiki/templates/yki-writing-answer-template',
  },
  keywords: ['YKI writing answer template', 'YKI exam template', 'Finnish writing framework', 'YKI writing structure', 'YKI message format'],
};

export default function YkiWritingAnswerTemplate() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I memorize a YKI writing answer template for the exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should not memorize entire essays, as your answer must address the specific prompt. However, memorizing a YKI writing answer template for greetings, closings, and structural transitions is highly recommended and saves valuable time during the test."
        }
      },
      {
        "@type": "Question",
        "name": "How do these templates improve my YKI score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Using a clear Finnish writing framework ensures you meet the structural requirements of different text types (formal vs. informal). Examiners strictly grade your ability to adapt your tone and register to the specific task."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need different templates for each writing task?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The YKI writing section tests your adaptability. An informal email to a friend requires a completely different YKI exam template compared to a formal complaint to a company or a public opinion piece."
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
      <main className="min-h-screen bg-white pb-16">
        {/* Hero Section */}
        <header className="bg-blue-50 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">
              YKI Writing Answer Template: Structure Every Task
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Stop staring at a blank page. Learn the exact structural frameworks needed to pass the intermediate YKI Finnish exam with confidence.
            </p>
          </div>
        </header>

        {/* Article Content */}
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg max-w-none">
          <p>
            Passing the YKI test requires more than just good vocabulary; it requires solid structure. Under the pressure of a ticking clock, having a reliable <strong>YKI writing answer template</strong> for each task ensures you never freeze. A well-prepared template helps you meet the examiner's strict expectations for format, tone, and coherence without wasting precious minutes figuring out how to start.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            Why You Need a YKI Writing Answer Template
          </h2>
          <p>
            The intermediate YKI test (Keskitaso) typically features three distinct writing tasks: an informal message, a formal message, and an opinion piece. Each task demands a different <strong>Finnish writing framework</strong>. 
          </p>
          <p>
            Examiners do not just read for grammar; they check if you understand the context. Are you talking to a friend or a manager? Are you complaining or just sharing news? By mastering a specific <strong>YKI exam template</strong> for each scenario, you automatically secure points for proper formatting, register, and task completion.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            Template 1: The Informal Message (Epävirallinen viesti)
          </h2>
          <p>
            This task is usually an email or text message to a friend or colleague. The tone should be relaxed, friendly, and direct. You must include a casual greeting and closing.
          </p>
          
          <div className="bg-slate-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="text-xl font-semibold text-slate-800 mt-0 mb-4">Informal Message Framework</h3>
            <ul className="list-none pl-0 space-y-4">
              <li><strong>1. Greeting:</strong> <br/>
                <code className="bg-slate-200 px-2 py-1 rounded text-sm">Hei [Nimi],</code> / <code className="bg-slate-200 px-2 py-1 rounded text-sm">Moi [Nimi],</code>
              </li>
              <li><strong>2. Opening (Friendly reference):</strong> <br/>
                <code className="bg-slate-200 px-2 py-1 rounded text-sm">Mitä kuuluu?</code> (How are you?) / <code className="bg-slate-200 px-2 py-1 rounded text-sm">Kiitos viestistäsi.</code> (Thanks for your message.)
              </li>
              <li><strong>3. Main Body (Address the bullet points):</strong> <br/>
                Write 2-3 short paragraphs answering exactly what the prompt asks. Use basic connectors like <em>mutta</em> (but), <em>koska</em> (because), and <em>siksi</em> (therefore).
              </li>
              <li><strong>4. Closing Request/Next step:</strong> <br/>
                <code className="bg-slate-200 px-2 py-1 rounded text-sm">Ilmoita minulle, sopiiko tämä sinulle.</code> (Let me know if this works for you.) / <code className="bg-slate-200 px-2 py-1 rounded text-sm">Nähdään pian!</code> (See you soon!)
              </li>
              <li><strong>5. Sign-off:</strong> <br/>
                <code className="bg-slate-200 px-2 py-1 rounded text-sm">Terveisin, [Oma Nimesi]</code> (Regards, [Your Name])
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            Template 2: The Formal Message (Virallinen viesti / Valitus)
          </h2>
          <p>
            Task two often requires writing a complaint (valitus), providing feedback, or making a formal inquiry. The tone must be polite, objective, and clear. Avoid slang and overly emotional language.
          </p>

          <div className="bg-slate-50 border-l-4 border-emerald-500 p-6 rounded-r-lg my-8">
            <h3 className="text-xl font-semibold text-slate-800 mt-0 mb-4">Formal Message Framework</h3>
            <ul className="list-none pl-0 space-y-4">
              <li><strong>1. Greeting:</strong> <br/>
                <code className="bg-slate-200 px-2 py-1 rounded text-sm">Hyvä vastaanottaja,</code> (Dear recipient) / <code className="bg-slate-200 px-2 py-1 rounded text-sm">Hei,</code> (Hello - acceptable in modern formal Finnish)
              </li>
              <li><strong>2. State your purpose immediately:</strong> <br/>
                <code className="bg-slate-200 px-2 py-1 rounded text-sm">Kirjoitan teille koskien...</code> (I am writing to you regarding...) / <code className="bg-slate-200 px-2 py-1 rounded text-sm">Haluan antaa palautetta...</code> (I want to give feedback about...)
              </li>
              <li><strong>3. Explain the context or problem:</strong> <br/>
                Clearly explain what happened, when, and where. Give details as requested by the prompt. Use connectors like <em>kuitenkin</em> (however) and <em>lisäksi</em> (furthermore).
              </li>
              <li><strong>4. State your expectation/Demand:</strong> <br/>
                <code className="bg-slate-200 px-2 py-1 rounded text-sm">Toivon, että korjaatte asian mahdollisimman pian.</code> (I hope you fix the matter as soon as possible.) / <code className="bg-slate-200 px-2 py-1 rounded text-sm">Voisitteko ystävällisesti palauttaa rahani?</code> (Could you kindly refund my money?)
              </li>
              <li><strong>5. Sign-off:</strong> <br/>
                <code className="bg-slate-200 px-2 py-1 rounded text-sm">Ystävällisin terveisin, [Oma Nimesi]</code> (Kind regards, [Your Name])
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            Template 3: Opinion Piece (Mielipidekirjoitus)
          </h2>
          <p>
            The final task is an opinion piece for a newspaper or online forum. You must present a clear argument, back it up with reasons, and summarize your thoughts. This task requires the most advanced vocabulary and structuring.
          </p>

          <div className="bg-slate-50 border-l-4 border-purple-500 p-6 rounded-r-lg my-8">
            <h3 className="text-xl font-semibold text-slate-800 mt-0 mb-4">Opinion Piece Framework</h3>
            <ul className="list-none pl-0 space-y-4">
              <li><strong>1. Title (Otsikko):</strong> <br/>
                Create a catchy title summarising your stance. Example: <em>Lisää pyöräteitä keskustaan!</em> (More bike lanes to the city center!)
              </li>
              <li><strong>2. Introduction (Johdanto):</strong> <br/>
                Refer to a recent event or general observation to introduce the topic. <br/>
                <code className="bg-slate-200 px-2 py-1 rounded text-sm">Olen huomannut, että...</code> (I have noticed that...) / <code className="bg-slate-200 px-2 py-1 rounded text-sm">Haluan ottaa kantaa asiaan, joka koskee meitä kaikkia.</code> (I want to take a stand on a matter that concerns us all.)
              </li>
              <li><strong>3. Your Opinion & Arguments (Perustelut):</strong> <br/>
                State your opinion clearly and give 2-3 reasons. <br/>
                <code className="bg-slate-200 px-2 py-1 rounded text-sm">Olen sitä mieltä, että...</code> (I am of the opinion that...) <br/>
                <code className="bg-slate-200 px-2 py-1 rounded text-sm">Ensinnäkin...</code> (Firstly...) <code className="bg-slate-200 px-2 py-1 rounded text-sm">Toiseksi...</code> (Secondly...)
              </li>
              <li><strong>4. Counter-argument & Rebuttal (Optional but impressive):</strong> <br/>
                <code className="bg-slate-200 px-2 py-1 rounded text-sm">Jotkut ajattelevat, että... mutta minun mielestäni...</code> (Some think that... but in my opinion...)
              </li>
              <li><strong>5. Conclusion & Call to Action (Yhteenveto):</strong> <br/>
                <code className="bg-slate-200 px-2 py-1 rounded text-sm">Lopuksi haluan sanoa, että...</code> (Finally, I want to say that...) / <code className="bg-slate-200 px-2 py-1 rounded text-sm">Toivon, että päättäjät tekevät asialle jotain.</code> (I hope decision-makers do something about this.)
              </li>
              <li><strong>6. Pen Name (Nimimerkki):</strong> <br/>
                Opinion pieces in Finland are often signed with a descriptive pen name. Example: <em>Huolestunut kaupunkilainen</em> (Worried citizen).
              </li>
            </ul>
          </div>

          <p>
            By memorizing these structures, you can focus all your mental energy during the exam on retrieving the right vocabulary and conjugating verbs correctly, rather than wondering how to format the text.
          </p>

        </article>

        {/* FAQ Section */}
        <section className="bg-slate-50 py-16 mt-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {faq.name}
                  </h3>
                  <p className="text-slate-600">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8 mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
          <ul className="space-y-2">
            <li><Link href="/wiki/guides/yki-writing-topics" className="text-blue-700 hover:underline">YKI Writing Topics: Common Exam Themes and Questions</Link></li>
            <li><Link href="/wiki/templates/yki-message-template" className="text-blue-700 hover:underline">YKI Message Template: Finnish Short Message Structures</Link></li>
          </ul>
        </nav>

        {/* CTA Section */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="bg-blue-600 rounded-2xl p-8 sm:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Perfect Your YKI Writing Skills?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get personalized AI feedback on your writing. Practice with real YKI prompts and see exactly where you need to improve to pass the exam.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-slate-50 transition-colors duration-200"
            >
              Start Practicing Free
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
