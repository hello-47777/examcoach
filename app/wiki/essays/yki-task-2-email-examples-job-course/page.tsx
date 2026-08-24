import Link from 'next/link';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('essays', 'yki-task-2-email-examples-job-course', {
  title: 'YKI Task 2 Email Examples: Applying for a Job or Course',
  description: 'Master the Finnish intermediate language test with realistic YKI email examples. Learn how to write a B1 Finnish formal letter for job and course applications.',
});

export default function YKIEmailExamplesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How formal does a YKI job application email need to be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a YKI job application email, you must use standard written Finnish (kirjakieli). You should address the recipient formally, often using the conditional mood (isi-muoto) for requests, and avoid spoken language (puhekieli)."
        }
      },
      {
        "@type": "Question",
        "name": "How many words should a YKI Task 2 email be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard YKI Task 2 email does not need to be an essay. A length of roughly 50 to 80 words is typical. The priority is answering all the bullet points in the prompt clearly and correctly."
        }
      },
      {
        "@type": "Question",
        "name": "What level of Finnish is required for a B1 formal letter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Level B1 requires you to communicate understandably in familiar, everyday situations and basic official contexts. Minor grammar mistakes are acceptable as long as the message is clear and polite."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Article Content */}
        <article className="bg-white rounded-2xl shadow-sm p-8 sm:p-12">
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            YKI Task 2: High-Scoring YKI Email Examples for Applications
          </h1>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            If you want to pass the intermediate Finnish language test, studying high-scoring <strong>YKI email examples</strong> is one of the most effective strategies. Task 2 of the writing section (Kirjoittaminen) frequently asks you to apply for something—most commonly a job, an apartment, or a study course. In this guide, we provide realistic examples and deep dive into the structure required to ace these application prompts.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            Why YKI Email Examples Matter
          </h2>
          <p className="text-gray-700 mb-6">
            Many test-takers struggle with tone and register. They write too informally or forget to address all the prompt's requirements. By analyzing a realistic <em>YKI writing Task 2 sample</em>, you will learn exactly how evaluators expect a <strong>B1 Finnish formal letter</strong> to be structured: clear intent, direct answers to the prompt's bullet points, and appropriate formal phrasing (kirjakieli).
          </p>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            Example 1: The Finnish Job Application Email
          </h2>
          <p className="text-gray-700 mb-4">
            Applying for a job is a classic YKI prompt. The key here is to sound professional, highlight relevant skills concisely, and request an interview.
          </p>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-gray-900 mb-2">The Exam Prompt:</h3>
            <p className="text-gray-700 mb-4 italic">
              You saw an advertisement for a part-time job at a local café (Kahvila Helmi). Write an email to the manager to apply for the job. You must mention:
              <br/>1) Why you are interested in the job.
              <br/>2) What relevant experience you have.
              <br/>3) Ask for an interview.
            </p>
            
            <h3 className="font-bold text-gray-900 mb-2">High-Scoring Response:</h3>
            <div className="font-mono text-gray-800 mb-4 bg-white p-5 border border-gray-300 rounded shadow-sm">
              <p className="mb-2">Hei,</p>
              <p className="mb-2">Huomasin ilmoituksenne ja haluaisin hakea osa-aikaista työtä Kahvila Helmestä. Olen erittäin kiinnostunut tästä työstä, koska rakastan asiakaspalvelua ja pidän kahvilaympäristössä työskentelystä.</p>
              <p className="mb-2">Minulla on aiempaa kokemusta alalta. Työskentelin viime vuonna puoli vuotta tarjoilijana ravintolassa, joten osaan käyttää kassakonetta ja palvella asiakkaita sujuvasti suomeksi ja englanniksi.</p>
              <p className="mb-2">Olisiko mahdollista päästä työhaastatteluun ensi viikolla? Voin tulla paikalle minä tahansa arkipäivänä.</p>
              <p className="mb-2">Odotan vastaustanne.</p>
              <p>Ystävällisin terveisin,<br/>Anna Virtanen</p>
            </div>
            
            <h3 className="font-bold text-gray-900 mb-2 mt-4">Why This Response Works:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Clear purpose:</strong> <em>"haluaisin hakea..."</em> (I would like to apply...) immediately sets the formal but active tone.</li>
              <li><strong>Task fulfillment:</strong> It addresses the interest (rakastan asiakaspalvelua), the experience (työskentelin tarjoilijana), and the interview request (Olisiko mahdollista päästä...).</li>
              <li><strong>Conditional mood:</strong> Uses polite requests like <em>"Olisiko mahdollista..."</em> instead of the demanding <em>"Haluan haastattelun"</em>.</li>
            </ul>
          </div>

          <hr className="border-gray-200 my-8" />

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            Example 2: Applying for a Language Course
          </h2>
          <p className="text-gray-700 mb-4">
            Another common scenario is contacting a school or institution. This <strong>Finnish job application email</strong> counterpart focuses on inquiring about study opportunities.
          </p>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-gray-900 mb-2">The Exam Prompt:</h3>
            <p className="text-gray-700 mb-4 italic">
              You want to enroll in an advanced Finnish language course at the adult education center (Työväenopisto). Write an email to the office. You must mention:
              <br/>1) Which course you want to take and why.
              <br/>2) What your current Finnish level is.
              <br/>3) Ask a question about the course schedule or materials.
            </p>
            
            <h3 className="font-bold text-gray-900 mb-2">High-Scoring Response:</h3>
            <div className="font-mono text-gray-800 mb-4 bg-white p-5 border border-gray-300 rounded shadow-sm">
              <p className="mb-2">Hyvä vastaanottaja,</p>
              <p className="mb-2">Kirjoitan teille, koska haluaisin ilmoittautua edistyneiden suomen kielen kurssille. Haluan osallistua kurssille, koska tavoitteenani on suorittaa YKI-testi ensi keväänä ja tarvitsen lisää harjoitusta kirjoittamisessa.</p>
              <p className="mb-2">Minun suomen kielen tasoni on tällä hetkellä B1. Puhun ja ymmärrän suomea melko hyvin, mutta kielioppini kaipaa vielä parannusta.</p>
              <p className="mb-2">Haluaisin kysyä, minä päivinä kurssi järjestetään ja tarvitsenko kurssille jonkin tietyn oppikirjan?</p>
              <p className="mb-2">Kiitos jo etukäteen tiedoista.</p>
              <p>Ystävällisin terveisin,<br/>John Doe</p>
            </div>
            
            <h3 className="font-bold text-gray-900 mb-2 mt-4">Why This Response Works:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Formal greeting:</strong> <em>"Hyvä vastaanottaja"</em> (Dear recipient) is a safe, polite way to start when you don't know the person's name.</li>
              <li><strong>Answering the prompt:</strong> Mentions the course (edistyneiden kurssi), the reason (YKI-testi), current level (B1), and asks specific questions about schedule and books.</li>
              <li><strong>Grammar accuracy:</strong> Correct use of cases, such as <em>"kurssille"</em> (onto the course) and <em>"tiedoista"</em> (for the information).</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            Key Takeaways for Your Exam
          </h2>
          <p className="text-gray-700 mb-4">
            When reviewing any YKI email examples, notice how the successful ones follow a strict formula. Examiners are not looking for poetry or complex philosophy; they are looking for functional, clear communication.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
            <li>Never skip a bullet point from the prompt. Treat them like a checklist.</li>
            <li>Use the conditional (<em>haluaisin</em>, <em>voisinko</em>, <em>olisiko</em>) to soften your requests and sound polite.</li>
            <li>Stick to vocabulary you know well rather than translating complicated English idioms directly into Finnish.</li>
          </ul>

        </article>

        {/* CTA Section */}
        <section className="mt-12 bg-blue-600 rounded-2xl p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Practice Makes Perfect</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Ready to test your skills? Write your own responses to realistic YKI prompts and receive instant, AI-driven feedback on your grammar, structure, and tone.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            Try the YKI Exam Simulator
          </Link>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How formal does a YKI job application email need to be?</h3>
              <p className="text-gray-700">For a YKI job application email, you must use standard written Finnish (kirjakieli). You should address the recipient formally, often using the conditional mood (isi-muoto) for requests, and avoid spoken language (puhekieli).</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How many words should a YKI Task 2 email be?</h3>
              <p className="text-gray-700">A standard YKI Task 2 email does not need to be an essay. A length of roughly 50 to 80 words is typical. The priority is answering all the bullet points in the prompt clearly and correctly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What level of Finnish is required for a B1 formal letter?</h3>
              <p className="text-gray-700">Level B1 requires you to communicate understandably in familiar, everyday situations and basic official contexts. Minor grammar mistakes are acceptable as long as the message is clear and polite.</p>
            </div>
          </div>
        </section>

      </main>

      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}