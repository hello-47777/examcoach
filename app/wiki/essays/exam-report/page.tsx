import Link from "next/link";
import { generateWikiMetadata } from "@/lib/wiki-metadata";

export const metadata = generateWikiMetadata("essays", "exam-report", {
  title: "YKI Writing: Exam Report & Teacher Message Guide & B1 Examples",
  description: "Learn how to write a formal message or report to a teacher regarding an exam (absence, retake, or feedback) for the Finnish YKI test. Master B1 vocabulary and structures.",
});

export default function YkiExamReportPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <article className="prose prose-lg max-w-none text-gray-800">
          <h1 className="mb-8 text-4xl font-extrabold text-[#2563EB]">
            Writing an Exam Report or Teacher Message for YKI: A Student&apos;s Guide
          </h1>

          <p>
            Educational scenarios are incredibly common in the intermediate YKI exam. You will often be asked to write a message to a teacher or course instructor. This might involve reporting an unexpected absence from an exam, requesting a retake (<em>uusintakoe</em>), or providing formal feedback about a course. To succeed, you need to strike the right balance between respectfulness and directness, showcasing your ability to navigate the Finnish educational system using standard B1-level Finnish.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Step-by-Step Formatting Guide
          </h2>
          <p>
            When writing to a teacher or school administration, your message should be polite, clear, and action-oriented. Follow this five-step structure to ensure you meet all task requirements:
          </p>
          <ul>
            <li>
              <strong>1. Appropriate Greeting:</strong> In Finland, communicating with teachers is semi-formal. Starting with <em>Hei opettaja</em> (Hello teacher) or <em>Hei [Teacher&apos;s First Name]</em> is perfectly acceptable and natural.
            </li>
            <li>
              <strong>2. State the Purpose Immediately:</strong> Explain exactly why you are writing in the first sentence. For example: <em>Kirjoitan sinulle, koska en valitettavasti päässyt kokeeseen eilen.</em> (I am writing to you because unfortunately I couldn&apos;t make it to the exam yesterday).
            </li>
            <li>
              <strong>3. Provide a Valid Reason:</strong> Give a brief but clear explanation for your absence or issue. Mentioning illness (<em>sairaus</em>) or a sudden work shift is a great way to use standard YKI vocabulary. Offer to show proof, like a medical certificate (<em>lääkärintodistus</em>).
            </li>
            <li>
              <strong>4. Propose a Solution:</strong> Take initiative. Ask when the make-up exam is held or suggest a specific day when you are available to complete the missed work.
            </li>
            <li>
              <strong>5. Polite Sign-off:</strong> Thank the teacher for their understanding. End with a polite closing like <em>Ystävällisin terveisin</em> and your full name.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Common Mistakes Candidates Make
          </h2>
          <p>
            Avoid these typical pitfalls that can lower your score when writing educational messages:
          </p>
          <ul>
            <li>
              <strong>Being Too Casual:</strong> While the Finnish school system is quite egalitarian, you should still avoid overly casual slang (<em>puhekieli</em>) when writing a formal explanation for an absence. Stick to standard written Finnish (<em>kirjakieli</em>).
            </li>
            <li>
              <strong>Forgetting to Ask for a Solution:</strong> If the prompt asks you to arrange a new exam date, and you only write about why you were sick, you will lose points for incomplete task fulfillment according to the <Link href="/wiki/scoring/yki-b1-guide" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing scoring</Link> guidelines.
            </li>
            <li>
              <strong>Over-complicating the Excuse:</strong> Keep your reason simple. Saying you had a high fever is much easier to translate correctly than trying to explain a complex multi-step travel delay. Keep your grammar safe and accurate.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            B1-Level Example: Reporting an Exam Absence & Requesting a Retake
          </h2>
          <p>
            Below is a model response for one of the most common school-related tasks: missing a test and asking for a new date. Notice how the writer uses conditional forms to sound polite. For more examples of semi-formal messages, browse our <Link href="/wiki/templates/examples" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing examples</Link>.
          </p>
          
          <div className="my-6 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <p><strong>Aihe: Poissaolo suomen kielen kokeesta ja uusintakoe</strong></p>
            <p>Hei opettaja,</p>
            <p>
              Kirjoitan sinulle, koska en valitettavasti päässyt osallistumaan suomen kielen kokeeseen eilen aamulla. Olin todella sairaana ja minulla oli korkea kuume. 
            </p>
            <p>
              Minulla on lääkärintodistus poissaolostani, ja voin lähettää sen sinulle sähköpostilla tai tuoda sen seuraavalle oppitunnille, jos tarvitset sitä. Olen nyt onneksi jo parantunut.
            </p>
            <p>
              Haluaisin kysyä, milloin minun on mahdollista tehdä uusintakoe? Sopiiko esimerkiksi ensi viikon perjantai kello 14.00? Olen silloin vapaa ja valmis tekemään kokeen.
            </p>
            <p>
              Pahoittelen tästä aiheutuvaa ylimääräistä vaivaa ja odotan vastaustasi.
            </p>
            <p>Ystävällisin terveisin,<br/>Samir Ahmed</p>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Essential Educational Vocabulary
          </h2>
          <p>
            Memorize these school and exam-related words to ensure you can handle any educational prompt:
          </p>
          <ul>
            <li><strong>Koe / Tentti:</strong> Exam / Test</li>
            <li><strong>Uusintakoe:</strong> Retake exam / Make-up test</li>
            <li><strong>Poissaolo:</strong> Absence</li>
            <li><strong>Osallistua:</strong> To participate / To attend</li>
            <li><strong>Lääkärintodistus:</strong> Medical certificate / Doctor&apos;s note</li>
            <li><strong>Oppitunti:</strong> Lesson / Class</li>
            <li><strong>Päästä läpi / Repuuttaa:</strong> To pass / To fail</li>
            <li><strong>Kurssipalaute:</strong> Course feedback</li>
          </ul>
        </article>

        <div className="my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 p-8 text-center text-white shadow-xl">
          <h3 className="mb-4 text-2xl font-bold text-white">Practice makes perfect!</h3>
          <p className="mb-6 text-blue-50">Check your YKI writing score instantly with our AI Examiner.</p>
          <Link href="/" className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
            Try Our Free YKI Writing Checker
          </Link>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">How formal should I be when writing to a Finnish teacher?</h3>
            <p className="text-[#64748B]">
              Communication with teachers in Finland is generally semi-formal. You do not need overly rigid titles (like &quot;Arvoisa Herra&quot;), but you should maintain a respectful tone, use standard grammar (kirjakieli), and clearly organize your message.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">What if the prompt asks me to write feedback about a course instead?</h3>
            <p className="text-[#64748B]">
              If asked for feedback, adjust the structure to mention what you liked about the course and one thing that could be improved. You can use phrases like <em>&quot;Kurssi oli erittäin mielenkiintoinen, mutta kotitehtäviä oli liikaa&quot;</em> (The course was very interesting, but there was too much homework).
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Is it important to apologize for missing an exam?</h3>
            <p className="text-[#64748B]">
              Yes. Even if it wasn&apos;t your fault (like being sick), saying <em>&quot;Pahoittelen vaivaa&quot;</em> (I apologize for the trouble) shows excellent sociolinguistic awareness and helps you secure higher marks for appropriateness.
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
                  "name": "How formal should I be when writing to a Finnish teacher?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Communication with teachers in Finland is generally semi-formal. You do not need overly rigid titles (like 'Arvoisa Herra'), but you should maintain a respectful tone, use standard grammar (kirjakieli), and clearly organize your message."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if the prompt asks me to write feedback about a course instead?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If asked for feedback, adjust the structure to mention what you liked about the course and one thing that could be improved. You can use phrases like 'Kurssi oli erittäin mielenkiintoinen, mutta kotitehtäviä oli liikaa' (The course was very interesting, but there was too much homework)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is it important to apologize for missing an exam?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Even if it wasn't your fault (like being sick), saying 'Pahoittelen vaivaa' (I apologize for the trouble) shows excellent sociolinguistic awareness and helps you secure higher marks for appropriateness."
                  }
                }
              ]
            })
          }}
        />
      </div>
    </div>
  );
}