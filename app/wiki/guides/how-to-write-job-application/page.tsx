import Link from "next/link";
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('guides', 'how-to-write-job-application', {
  title: 'YKI Writing Job Application Guide: How to Write a B1 Level Letter | Pass Finnish',
  description: 'Master the YKI test job application letter with our complete B1 level guide. Learn the 3-paragraph structure, time management tips, and high-level strategy to pass Level 3.',
});

export default function YkiJobApplicationGuide() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <article className="prose prose-lg max-w-none text-gray-800">
        <h1>The Ultimate Guide to the YKI Job Application Letter</h1>
        
        <p>
          Writing a job application (<em>työhakemus</em>) is one of the most common tasks in the YKI Keskitaso (B1) writing exam. For many test-takers, this task feels intimidating because it requires formal language, a clear structure, and the ability to persuade an imaginary employer. However, once you understand the underlying formula, it becomes one of the easiest tasks to pass.
        </p>

        <p>
          This guide will break down the ideal 3-paragraph structure, provide time management strategies, and give you a high-level overview of what the evaluators are looking for. To deeply understand how graders evaluate your text, you should review exactly <Link href="/wiki/scoring/job-application-rubric" className="font-semibold text-blue-600 underline">how to pass Level 3 on the YKI writing rubric</Link>.
        </p>

        <h2>The Golden Rule: Answer the Prompt</h2>
        
        <p>
          Before we discuss structure, there is one non-negotiable rule: <strong>You must address every single bullet point mentioned in the task instructions.</strong> Even if you write a grammatically flawless letter, ignoring the prompt&apos;s specific questions will severely damage your score. The examiners want to see that you can read, comprehend, and respond appropriately in a professional context.
        </p>

        <h2>The 3-Paragraph Structure Breakdown</h2>
        
        <p>
          To ensure your writing is organized and easy for the examiner to read, you should strictly follow a 3-paragraph format. This shows logical progression and mastery of basic text structure.
        </p>

        <h3>Paragraph 1: The Introduction and Intent</h3>
        <p>
          Your first paragraph should immediately state why you are writing. Do not waste time with unnecessary fluff. Mention the specific job you are applying for and where you saw the advertisement. 
        </p>
        <ul>
          <li><strong>Goal:</strong> Be direct and professional.</li>
          <li><strong>Example concept:</strong> &quot;I am writing to apply for the position of sales assistant that was advertised in Helsingin Sanomat.&quot;</li>
        </ul>

        <h3>Paragraph 2: Your Skills and Experience</h3>
        <p>
          This is the core of your letter. In this section, you must explain why you are the perfect fit for the job. Discuss your previous work experience, your education, and any relevant skills (such as language abilities or IT skills). Remember, you do not need to tell the truth; you only need to write good Finnish. If you need inspiration, check out our collection of <Link href="/wiki/templates/job-application-examples" className="font-semibold text-blue-600 underline">YKI job application templates and B1 examples</Link> that you can adapt for your own exam.
        </p>

        <h3>Paragraph 3: Conclusion and Call to Action</h3>
        <p>
          Wrap up your letter by expressing your enthusiasm for an interview. Keep it polite, formal, and optimistic. Always end with a standard formal closing and your name.
        </p>
        <ul>
          <li><strong>Goal:</strong> Leave a positive, professional final impression.</li>
          <li><strong>Example concept:</strong> &quot;I hope to hear from you soon and would be happy to discuss this further in an interview.&quot;</li>
        </ul>

        <h2>Time Management Tips for the Exam</h2>
        
        <p>
          During the YKI test, the clock is your biggest enemy. You will typically have around 55 minutes to complete three writing tasks. You should allocate approximately <strong>15 to 20 minutes</strong> maximum for the job application letter.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-left text-sm border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Phase</th>
                <th className="border border-gray-300 px-4 py-2">Time Allocated</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">1. Plan</td>
                <td className="border border-gray-300 px-4 py-2">3 Minutes</td>
                <td className="border border-gray-300 px-4 py-2">Read the bullet points, brainstorm 2-3 vocabulary words for each.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">2. Write</td>
                <td className="border border-gray-300 px-4 py-2">12 Minutes</td>
                <td className="border border-gray-300 px-4 py-2">Execute the 3-paragraph structure. Keep sentences clear and concise.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">3. Review</td>
                <td className="border border-gray-300 px-4 py-2">3 Minutes</td>
                <td className="border border-gray-300 px-4 py-2">Check for verb conjugations, partitive cases, and spelling.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Skipping the planning phase is a classic mistake. By jumping straight into writing, candidates often lose their train of thought and create messy, unstructured texts. To ensure you don&apos;t fall into this trap, read up on the <Link href="/wiki/templates/job-application-errors" className="font-semibold text-blue-600 underline">7 fatal YKI job application mistakes that will fail your exam</Link>.
        </p>

        <h2>Final Thoughts</h2>
        <p>
          Mastering the job application is entirely about preparation. By memorizing the 3-paragraph structure and managing your time effectively, you will walk into the YKI exam room feeling confident and ready to secure your B1 certificate.
        </p>
      </article>

      <div className="my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 p-8 text-center text-white shadow-xl not-prose">
        <h3 className="text-2xl font-bold mb-4 text-white mt-0">Practice makes perfect!</h3>
        <p className="mb-6 text-blue-50 text-lg">Check your YKI writing score instantly with our AI Examiner.</p>
        <Link href="/" className="inline-block rounded-lg bg-white px-8 py-4 font-bold text-blue-600 transition-colors hover:bg-gray-100">
          Try AI Examiner Now
        </Link>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold text-lg">How long should a YKI job application be?</h3>
          <p className="text-gray-600">
            A good target is between 70 to 100 words. Examiners care much more about your ability to answer the prompt&apos;s bullet points clearly using correct B1-level grammar than they do about the length of the text. Do not write a massive essay, as this increases the chance of making grammatical errors.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-lg">Do I need to use real work experience?</h3>
          <p className="text-gray-600">
            No, you do not. The YKI test is a language evaluation, not a real job interview. You can completely invent your education, work history, and skills as long as you can describe them using correct Finnish. Choose a profession you know the vocabulary for.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-lg">Can I use spoken language (puhekieli) in a job application?</h3>
          <p className="text-gray-600">
            Absolutely not. A job application is a formal document. You must use standard written Finnish (<em>kirjakieli</em>). Using spoken language like &quot;mä haluun&quot; instead of &quot;minä haluaisin&quot; will show the examiners that you do not understand register and tone, which will negatively impact your score.
          </p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long should a YKI job application be?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A good target is between 70 to 100 words. Examiners care much more about your ability to answer the prompt's bullet points clearly using correct B1-level grammar than they do about the length of the text."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to use real work experience?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, you do not. The YKI test is a language evaluation, not a real job interview. You can completely invent your education, work history, and skills as long as you can describe them using correct Finnish."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use spoken language (puhekieli) in a job application?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely not. A job application is a formal document. You must use standard written Finnish (kirjakieli). Using spoken language will negatively impact your score."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
