import Link from "next/link";

export const metadata = {
  title: "YKI Writing: Workplace Email Guide & B1 Examples",
  description: "Learn how to write a workplace email (työpaikan sähköposti) for the Finnish YKI exam. Master semi-formal tone, office vocabulary, and B1 structures.",
};

export default function YkiWorkplaceEmailPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <article className="prose prose-lg max-w-none text-gray-800">
          <h1 className="mb-8 text-4xl font-extrabold text-[#2563EB]">
            Writing a Workplace Email for YKI: A Professional&apos;s Guide
          </h1>

          <p>
            Workplace communication is a major theme in the YKI intermediate exam. You will almost certainly be asked to write an email or a message to a colleague (<em>kollega</em>), a boss (<em>esimies</em>), or your entire team. Common prompts include reporting a sick day, apologizing for missing a meeting, requesting time off, or organizing a workplace event. Success in this task requires mastering the Finnish semi-formal tone—being respectful and professional, yet direct and practical.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Step-by-Step Formatting Guide
          </h2>
          <p>
            Finnish workplace culture values efficiency. Your email should be well-structured, clear, and get straight to the point without unnecessary fluff. Follow this five-step structure:
          </p>
          <ul>
            <li>
              <strong>1. Appropriate Greeting:</strong> Finnish workplaces are generally informal, but respect is still required. <em>Hei [Name]</em> works perfectly for a boss or colleague. If writing to the whole team, use <em>Hei kaikki</em> or <em>Hei tiimi</em>.
            </li>
            <li>
              <strong>2. State the Purpose Immediately:</strong> Put the main reason for your email in the very first sentence. For example: <em>Kirjoitan sinulle, koska olen tänään sairaana enkä pääse töihin.</em> (I am writing to you because I am sick today and cannot come to work).
            </li>
            <li>
              <strong>3. Provide Necessary Details:</strong> Explain the situation briefly. If you are missing a meeting, mention which one. If you need a shift covered, specify the date and time.
            </li>
            <li>
              <strong>4. Propose a Solution or Action:</strong> Show initiative. Suggest rescheduling the meeting, note that you will send a doctor&apos;s certificate later, or mention who is covering your urgent tasks.
            </li>
            <li>
              <strong>5. Professional Sign-off:</strong> Close politely. <em>Ystävällisin terveisin</em> (Best regards) or simply <em>Terveisin</em> (Regards) followed by your name is the standard.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Common Mistakes Candidates Make
          </h2>
          <p>
            Navigating the workplace tone can be tricky. Avoid these three common errors that can negatively impact your score:
          </p>
          <ul>
            <li>
              <strong>Using the Wrong Tone (Too Formal or Too Casual):</strong> Starting an email to a close colleague with <em>Arvoisa herra</em> (Honorable sir) sounds unnatural, just as starting an email to the HR manager with a highly informal <em>Moro!</em> does. Stick to the safe, semi-formal <em>Hei</em>.
            </li>
            <li>
              <strong>Beating Around the Bush:</strong> In some cultures, it is polite to write a long preamble before making a request. In Finland (and in the YKI test), being indirect can confuse the reader. State your business clearly to maximize your task fulfillment score according to the <Link href="/wiki/scoring/yki-b1-guide" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing scoring</Link> rubrics.
            </li>
            <li>
              <strong>Ignoring Time and Date Constraints:</strong> If the prompt asks you to suggest a new time for a canceled meeting, you must include a specific day or time (e.g., <em>Sopiiko ensi tiistai kello 10?</em>). Leaving this out means you haven&apos;t fully answered the prompt.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            B1-Level Example: Informing a Boss About Sick Leave
          </h2>
          <p>
            Below is a classic example of a workplace email: informing a supervisor about a sudden illness and handling a missed meeting. It uses clear vocabulary, polite conditional forms, and covers all logistical bases. Discover more scenarios in our <Link href="/wiki/templates/examples" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing examples</Link> section.
          </p>
          
          <div className="my-6 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <p><strong>Aihe: Sairausloma / Matti Meikäläinen</strong></p>
            <p>Hei Mikko,</p>
            <p>
              Kirjoitan sinulle, koska olen herännyt tänään kovassa kuumeessa enkä valitettavasti pääse tulemaan töihin. Olen menossa lääkäriin aamupäivällä ja toimitan sairauslomatodistuksen sinulle heti, kun saan sen.
            </p>
            <p>
              Minulla oli tänään kello 14.00 tärkeä palaveri asiakkaan kanssa. Voisitko pyytää Annaa sijaistamaan minua tai ilmoittamaan asiakkaalle, että joudumme siirtämään tapaamista ensi viikkoon?
            </p>
            <p>
              Pahoittelen tästä aiheutuvaa ylimääräistä vaivaa ja toivon, että palaan töihin taas ensi maanantaina.
            </p>
            <p>Ystävällisin terveisin,<br/>Matti</p>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Essential Workplace Vocabulary
          </h2>
          <p>
            Make sure you are familiar with these essential office and employment terms:
          </p>
          <ul>
            <li><strong>Esimies / Pomo:</strong> Supervisor / Boss</li>
            <li><strong>Kollega / Työkaveri:</strong> Colleague / Coworker</li>
            <li><strong>Kokous / Palaveri:</strong> Meeting</li>
            <li><strong>Sairausloma:</strong> Sick leave</li>
            <li><strong>Työvuoro:</strong> Work shift</li>
            <li><strong>Sijainen / Sijaistaa:</strong> Substitute / To cover for someone</li>
            <li><strong>Siirtää:</strong> To move / To postpone (e.g., a meeting)</li>
            <li><strong>Pahoitella:</strong> To apologize</li>
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
            <h3 className="text-lg font-semibold text-gray-900">How formal should I be when writing to a boss in Finland?</h3>
            <p className="text-[#64748B]">
              Finnish workplaces are relatively flat hierarchies. You do not need highly formal titles. Starting with <em>Hei [First Name]</em> is almost always the correct and most natural approach, even when writing to a manager. Just keep the grammar standard (kirjakieli) and polite.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Do I need to know specific vocabulary for different professions?</h3>
            <p className="text-[#64748B]">
              No. The YKI exam tests general language proficiency. You only need to know general workplace vocabulary (meetings, shifts, sick leave, breaks). You do not need to know specialized medical, engineering, or IT jargon.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">What is the difference between &quot;kokous&quot; and &quot;palaveri&quot;?</h3>
            <p className="text-[#64748B]">
              Both mean &quot;meeting.&quot; <em>Kokous</em> is often slightly more formal or official (like a board meeting or a large team meeting), while <em>palaveri</em> is typically a smaller, more everyday working meeting. In the YKI exam, they are largely interchangeable.
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
                  "name": "How formal should I be when writing to a boss in Finland?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Finnish workplaces are relatively flat hierarchies. You do not need highly formal titles. Starting with Hei [First Name] is almost always the correct and most natural approach, even when writing to a manager. Just keep the grammar standard (kirjakieli) and polite."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to know specific vocabulary for different professions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. The YKI exam tests general language proficiency. You only need to know general workplace vocabulary (meetings, shifts, sick leave, breaks). You do not need to know specialized medical, engineering, or IT jargon."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between 'kokous' and 'palaveri'?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Both mean 'meeting.' Kokous is often slightly more formal or official (like a board meeting or a large team meeting), while palaveri is typically a smaller, more everyday working meeting. In the YKI exam, they are largely interchangeable."
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