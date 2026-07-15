import Link from "next/link";

export const metadata = {
  title: "YKI Writing Informal Scoring: How the Email Task is Graded | Pass Finnish",
  description: "Understand YKI writing informal scoring and the YKI keskitaso assessment criteria. Learn exactly how examiners grade your email and what separates Level 3 from Level 4 for B1-B2 Finnish writing."
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose prose-lg max-w-none text-gray-800">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900">YKI Writing Informal Scoring: How the Email Task is Graded</h1>
        
        <p>
          If you want to pass the intermediate Finnish exam, you must understand exactly how <strong>YKI writing informal scoring</strong> works. As someone who analyzes examiner criteria deeply, I often see candidates panic over minor grammar mistakes while completely missing the big picture. 
        </p>

        <p>
          In this guide, we are going to demystify the <strong>YKI test grading</strong> process for the first writing task. By learning how the points are actually awarded, you can focus your study efforts on what truly matters to the evaluators and maximize your chances of success.
        </p>

        <h2>How YKI Writing Tasks are Evaluated</h2>
        <p>
          The YKI exam does not use a traditional point-based deduction system where every spelling mistake costs you a fraction of a grade. Instead, the <strong>YKI keskitaso assessment criteria</strong> rely on holistic grading. Evaluators look at the overall effectiveness of your communication. They ask themselves: <em>&quot;Does this text do what it was supposed to do, and can a native speaker understand it without severe effort?&quot;</em>
        </p>

        <h2>Task Fulfillment: Why Answering Every Question is Crucial</h2>
        <p>
          The absolute core of <strong>YKI writing informal scoring</strong> is task fulfillment. When you are given a prompt, it comes with a bulleted list of questions or instructions. You must address every single one.
        </p>
        <p>
          If a prompt asks you to invite a friend to a movie, suggest a time, and ask what snack they want, leaving out the snack question will significantly hurt your score. Examiners cannot give you full credit if the task is incomplete, regardless of how beautifully your Finnish sentences are constructed.
        </p>

        <h2>Comprehensibility vs. Perfect Grammar</h2>
        <p>
          Many students obsess over whether they used the correct partitive plural or illative case. While good grammar helps, comprehensibility is far more important. If you write a sentence with incorrect cases, but the examiner immediately understands your meaning, you are still on track for a passing grade. 
        </p>
        <p>
          However, if your grammar is so tangled that the reader has to guess what you are trying to say, your score will drop. Keep your sentences short and clear. Simple, correct sentences score higher than complex, confusing ones.
        </p>

        <h2>Appropriate Tone: Puhekieli vs. Kirjakieli</h2>
        <p>
          Because the first task is an informal email, tone matters. You are expected to write to a friend, neighbor, or family member. Mixing overly formal phrases (like <em>&quot;Arvoisa ystävä&quot;</em>) into a casual message shows a lack of situational awareness. 
        </p>
        <p>
          You do not need to write in heavy spoken language (puhekieli) to get a good score, but using casual greetings (<em>Moi, Hei</em>) and natural sign-offs is expected. Standard written Finnish (kirjakieli) is perfectly safe as long as the overall tone remains friendly.
        </p>

        <h2>What Distinguishes a Level 3 from a Level 4?</h2>
        <p>
          When looking at <strong>YKI level 3 vs 4</strong>, the differences are distinct. 
        </p>
        <ul>
          <li><strong>Level 3 (Passing):</strong> The message is understandable, and all bullet points are addressed. There may be noticeable grammar errors or limited vocabulary, but the communication succeeds.</li>
          <li><strong>Level 4 (Strong):</strong> The text flows naturally. The vocabulary is more varied, transition words (like <em>kuitenkin, siksi</em>) are used effectively, and errors are rare and do not distract the reader at all.</li>
        </ul>
        <p>
          To ensure you aim for the highest score possible, I recommend reviewing our <Link href="/wiki/guides/how-to-write-informal-email" className="font-semibold text-blue-600 underline">step-by-step guide to writing an informal email for the YKI test</Link>. Additionally, seeing a real <Link href="/wiki/essays/yki-informal-email-example" className="font-semibold text-blue-600 underline">YKI informal email example with Finnish translations</Link> will help you understand exactly what a Level 3 or 4 text looks like in practice.
        </p>
      </article>

      <div className="my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 p-8 text-center text-white shadow-xl">
        <h3 className="text-2xl font-bold mb-4 text-white">Practice makes perfect!</h3>
        <p className="mb-6 text-blue-50">Check your YKI writing score instantly with our AI Examiner.</p>
        <Link href="/" className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
          Try AI Examiner Now
        </Link>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold text-lg">Will I fail if I write less than 50 words?</h3>
          <p className="text-gray-600">Not necessarily. The word count is a guideline. If you successfully and clearly answer all the prompt&apos;s bullet points in 40 words, you can still easily pass. However, if your text is too short, you might not have fully answered the prompt.</p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-lg">Do examiners penalize you for using English loanwords?</h3>
          <p className="text-gray-600">Using common, accepted loanwords in an informal context (like &apos;bändi&apos; or &apos;printteri&apos;) is fine. However, making up &apos;Finglish&apos; words because you forgot the Finnish translation can lower your comprehensibility score.</p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-lg">How is the final writing grade calculated?</h3>
          <p className="text-gray-600">Your final YKI writing grade is an overall assessment of all the writing tasks combined (informal message, formal message, and opinion piece). The examiners look at your consistent performance across all different registers and topics.</p>
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
                "name": "Will I fail if I write less than 50 words?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not necessarily. The word count is a guideline. If you successfully and clearly answer all the prompt's bullet points in 40 words, you can still easily pass. However, if your text is too short, you might not have fully answered the prompt."
                }
              },
              {
                "@type": "Question",
                "name": "Do examiners penalize you for using English loanwords?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Using common, accepted loanwords in an informal context (like 'bändi' or 'printteri') is fine. However, making up 'Finglish' words because you forgot the Finnish translation can lower your comprehensibility score."
                }
              },
              {
                "@type": "Question",
                "name": "How is the final writing grade calculated?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your final YKI writing grade is an overall assessment of all the writing tasks combined (informal message, formal message, and opinion piece). The examiners look at your consistent performance across all different registers and topics."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
