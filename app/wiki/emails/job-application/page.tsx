import Link from "next/link";
import { generateWikiMetadata } from "@/lib/wiki-metadata";

export const metadata = generateWikiMetadata("emails", "job-application", {
  title: "YKI Writing: Job Application Letter Guide & Examples",
  description: "Master the job application letter for the Finnish YKI exam. Learn the correct structure, avoid common mistakes, and study a perfect B1-level example.",
});

export default function YkiJobApplicationPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <article className="prose prose-lg max-w-none text-gray-800">
          <h1 className="mb-8 text-4xl font-extrabold text-[#2563EB]">
            Master the YKI Job Application Letter: An Examiner&apos;s Guide
          </h1>

          <p>
            When evaluating the Finnish YKI test (Yleinen kielitutkinto), one of the most reliable indicators of a candidate&apos;s proficiency is how they handle formal communication. The job application letter (<em>työhakemus</em>) is a high-frequency topic. It tests your ability to structure a formal text, use polite phrasing, and describe your skills accurately. As an examiner, I look for clarity, standard written language, and direct answers to the prompt&apos;s bullet points.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Step-by-Step Formatting Guide
          </h2>
          <p>
            To achieve a solid B1 level, your letter must follow a predictable, logical structure. Do not try to be overly creative; focus on professional communication.
          </p>
          <ul>
            <li>
              <strong>1. Professional Greeting:</strong> Always start formally. Use <em>Hyvä rekrytoija</em> (Dear Recruiter) or <em>Hyvä herra/rouva</em> (Dear Sir/Madam).
            </li>
            <li>
              <strong>2. State Your Purpose:</strong> In the very first sentence, explain why you are writing. Mention where you saw the job advertisement.
            </li>
            <li>
              <strong>3. Highlight Your Experience:</strong> Briefly explain your background, previous work experience, and your current Finnish language level. Keep sentences clear and concise.
            </li>
            <li>
              <strong>4. Express Motivation:</strong> State why you want this specific job. Using the conditional form here (<em>haluaisin</em> - I would like) shows politeness and grammatical competence.
            </li>
            <li>
              <strong>5. Formal Sign-off:</strong> End the letter with a polite closing, such as <em>Ystävällisin terveisin</em> (Kind regards), followed by your full name.
            </li>
          </ul>

          <p>
            Mastering these core components is essential. For more detailed strategies on organizing your paragraphs effectively, review our essential <Link href="/wiki/guides/tips" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing tips</Link> to ensure you meet all structural requirements.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Common Mistakes Candidates Make
          </h2>
          <p>
            Many students fail to secure a level 3 or 4 because they make fundamental stylistic errors. Here are the most common pitfalls you must avoid:
          </p>
          <ul>
            <li>
              <strong>Using Spoken Language (Puhekieli):</strong> Writing <em>&quot;Moi, mä haluun tän työn&quot;</em> is an immediate red flag. A job application must always use standard written Finnish (<em>kirjakieli</em>).
            </li>
            <li>
              <strong>Ignoring the Prompt&apos;s Instructions:</strong> The exam will always give you 3 to 4 specific points you must include. If you forget to mention your availability or previous experience, you will lose points directly based on the official <Link href="/wiki/scoring/yki-b1-guide" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing scoring</Link> rubrics.
            </li>
            <li>
              <strong>Overcomplicating Grammar:</strong> Trying to use complex clause equivalents (lauseenvastikkeet) when you aren&apos;t confident often leads to completely incomprehensible sentences. Stick to simple, correct main and subordinate clauses (using <em>että</em>, <em>koska</em>, <em>kun</em>).
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            B1-Level Example: Application for a Shop Assistant
          </h2>
          <p>
            Below is an excellent example of a B1-level response. It is polite, answers the common prompt requirements, and uses appropriate vocabulary without overreaching.
          </p>
          
          <div className="my-6 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <p><strong>Aihe: Työhakemus myyjän paikkaan</strong></p>
            <p>Hyvä rekrytoija,</p>
            <p>
              Huomasin TE-palvelujen verkkosivuilla, että etsitte uutta myyjää teidän vaatekauppaanne. Kirjoitan teille, koska haluaisin hakea tätä työpaikkaa.
            </p>
            <p>
              Olen 28-vuotias ja asun Helsingissä. Minulla on aikaisempaa kokemusta asiakaspalvelusta. Olin töissä kahvilassa kaksi vuotta kotimaassani. Olen ahkera, ystävällinen ja opin nopeasti uusia asioita. Puhun sujuvaa englantia ja minun suomen kielen taitoni on keskitasolla. Ymmärrän hyvin suomea ja pystyn palvelemaan asiakkaita suomeksi.
            </p>
            <p>
              Haluaisin työskennellä teillä, koska pidän asiakaspalvelutyöstä ja olen kiinnostunut muodista. Voin aloittaa työt heti ja olen valmis tekemään myös ilta- ja viikonloppuvuoroja.
            </p>
            <p>
              Toivon, että voin tulla työhaastatteluun kertomaan lisää itsestäni. Minun ansioluetteloni on liitteenä.
            </p>
            <p>Ystävällisin terveisin,<br/>Anna Malli</p>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Essential Job Application Vocabulary
          </h2>
          <p>
            Memorize these key terms to elevate the professionalism of your text:
          </p>
          <ul>
            <li><strong>Työhakemus:</strong> Job application</li>
            <li><strong>Ansioluettelo (CV):</strong> Resume</li>
            <li><strong>Työkokemus:</strong> Work experience</li>
            <li><strong>Asiakaspalvelu:</strong> Customer service</li>
            <li><strong>Kielitaito:</strong> Language skills</li>
            <li><strong>Ahkera:</strong> Hardworking</li>
            <li><strong>Liite:</strong> Attachment</li>
            <li><strong>Työhaastattelu:</strong> Job interview</li>
          </ul>
        </article>

        <div className="my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 p-8 text-center text-white shadow-xl">
          <h3 className="mb-4 text-2xl font-bold text-white">Practice makes perfect!</h3>
          <p className="mb-6 text-blue-50">Check your YKI writing score instantly with our AI Examiner.</p>
          <Link href="/" className="inline-block rounded-xl bg-white px-6 py-3 font-semibold text-[#2563EB] shadow-sm transition-colors hover:bg-gray-100">
            Try Our Free YKI Writing Checker
          </Link>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">How long should my YKI job application letter be?</h3>
            <p className="text-[#64748B]">
              For the intermediate (keskitaso) YKI exam, a formal message like a job application should generally be around 70 to 100 words. It is more important to answer all the prompt&apos;s bullet points clearly than to write a very long text.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Is it acceptable to use spoken language (puhekieli) in this task?</h3>
            <p className="text-[#64748B]">
              No. A job application is a formal document. You must use standard written Finnish (kirjakieli). Avoid abbreviations like &quot;mä&quot; or &quot;sä&quot; and use full pronouns like &quot;minä&quot; and &quot;sinä&quot; (or the formal &quot;te&quot;).
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">What if I don&apos;t have real experience for the job in the prompt?</h3>
            <p className="text-[#64748B]">
              The examiners are testing your language skills, not your actual resume. You can entirely invent your work experience, age, and skills to fit the vocabulary you are most comfortable using during the exam.
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
                  "name": "How long should my YKI job application letter be?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For the intermediate (keskitaso) YKI exam, a formal message like a job application should generally be around 70 to 100 words. It is more important to answer all the prompt's bullet points clearly than to write a very long text."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is it acceptable to use spoken language (puhekieli) in this task?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. A job application is a formal document. You must use standard written Finnish (kirjakieli). Avoid abbreviations like 'mä' or 'sä' and use full pronouns like 'minä' and 'sinä' (or the formal 'te')."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if I don't have real experience for the job in the prompt?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The examiners are testing your language skills, not your actual resume. You can entirely invent your work experience, age, and skills to fit the vocabulary you are most comfortable using during the exam."
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
