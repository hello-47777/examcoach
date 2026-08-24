import Link from "next/link";
import { generateWikiMetadata } from "@/lib/wiki-metadata";

export const metadata = generateWikiMetadata("emails", "housing-application", {
  title: "YKI Writing: Housing Application Guide & B1 Examples",
  description: "Learn how to write a formal and effective housing application (asuntohakemus) for the Finnish YKI exam. Master B1-level structures and essential vocabulary.",
});

export default function YkiHousingApplicationPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <article className="prose prose-lg max-w-none text-gray-800">
          <h1 className="mb-8 text-4xl font-extrabold text-[#2563EB]">
            Writing a Housing Application for YKI: An Immigration Advisor&apos;s Guide
          </h1>

          <p>
            Navigating Finland&apos;s rental market is a critical milestone for any newcomer, and the YKI examiners know this well. The housing application (<em>asuntohakemus</em>) is a highly frequent formal writing task. As an immigration advisor, I have helped countless individuals draft letters to landlords, and the principles for real life are exactly what you need to pass the exam. You must present yourself as a reliable, polite, and financially stable applicant using standard written Finnish.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Step-by-Step Formatting Guide
          </h2>
          <p>
            A strong housing application leaves no room for confusion. Landlords—and examiners—want clear facts. Follow this reliable structure to ensure your application hits all the right notes:
          </p>
          <ul>
            <li>
              <strong>1. Professional Greeting:</strong> Always begin formally. <em>Hyvä vuokranantaja</em> (Dear landlord) is the safest and most standard opening.
            </li>
            <li>
              <strong>2. Introduce Yourself:</strong> State your name, your current situation, and why you are looking for an apartment. Mentioning a stable job or study place builds trust instantly.
            </li>
            <li>
              <strong>3. State Your Requirements:</strong> Be specific about what you need based on the exam prompt. Do you need a one-bedroom apartment (<em>kaksio</em>)? Does it need a balcony or a sauna? 
            </li>
            <li>
              <strong>4. Provide Reassurance:</strong> This is a golden B1-level trick. Mention that you are a non-smoker, have no pets, and that your credit information is impeccable (<em>luottotiedot ovat kunnossa</em>). 
            </li>
            <li>
              <strong>5. Formal Call to Action and Sign-off:</strong> Express a desire to view the apartment. End with <em>Ystävällisin terveisin</em> and your full name.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Common Mistakes Candidates Make
          </h2>
          <p>
            Even if your grammar is generally good, failing to adopt the correct tone can cost you points. Avoid these major pitfalls:
          </p>
          <ul>
            <li>
              <strong>Missing Prompt Instructions:</strong> If the exam prompt asks you to mention your maximum rent budget and you forget, you won&apos;t achieve full task completion. Examiners are very strict about this when applying the official <Link href="/wiki/scoring/yki-b1-guide" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing scoring</Link> criteria.
            </li>
            <li>
              <strong>Using Casual Language:</strong> Writing to a landlord is a formal business interaction. Do not use spoken language (<em>puhekieli</em>). Avoid words like <em>&quot;kämppä&quot;</em> and use the formal <em>&quot;asunto&quot;</em> instead.
            </li>
            <li>
              <strong>Sounding Too Demanding:</strong> Remember that you are asking for a service. Use conditional politeness like <em>&quot;Haluaisin vuokrata...&quot;</em> (I would like to rent) rather than direct commands like <em>&quot;Haluan tämän asunnon&quot;</em> (I want this apartment).
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            B1-Level Example: Applying for a Two-Room Apartment
          </h2>
          <p>
            Below is a model response representing a strong intermediate level. Study the sentence structures carefully. If you want to see how this compares to other text formats, you can browse our extensive library of <Link href="/wiki/templates/examples" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing examples</Link> for more inspiration.
          </p>
          
          <div className="my-6 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <p><strong>Aihe: Asuntohakemus - Kaksio Kalliosta</strong></p>
            <p>Hyvä vuokranantaja,</p>
            <p>
              Huomasin Oikotie-sivustolla ilmoituksenne vapaasta kaksiosta Kalliossa, ja olen erittäin kiinnostunut vuokraamaan sen. 
            </p>
            <p>
              Olen 30-vuotias ohjelmistosuunnittelija ja olen juuri saanut vakituisen työpaikan Helsingin keskustasta. Etsin rauhallista ja siistiä asuntoa pitkäaikaiseen tarpeeseen. Minulla ei ole lemmikkieläimiä, en tupakoi, ja minun luottotietoni ovat kunnossa. 
            </p>
            <p>
              Asuntonne sijainti ja koko sopivat minulle täydellisesti. Voin maksaa enintään 900 euroa kuukaudessa, ja olen valmis maksamaan kahden kuukauden takuuvuokran heti. Voin muuttaa asuntoon ensi kuun alussa.
            </p>
            <p>
              Haluaisin mielelläni tulla katsomaan asuntoa. Milloin näyttö sopisi teille? Voitte soittaa minulle numeroon 040 123 4567.
            </p>
            <p>Ystävällisin terveisin,<br/>Alex Smith</p>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Essential Housing Vocabulary
          </h2>
          <p>
            Mastering these specific real estate terms will make your application look incredibly authentic:
          </p>
          <ul>
            <li><strong>Vuokranantaja:</strong> Landlord</li>
            <li><strong>Asuntohakemus:</strong> Housing application</li>
            <li><strong>Takuuvuokra:</strong> Security deposit</li>
            <li><strong>Luottotiedot:</strong> Credit information</li>
            <li><strong>Vakinainen työpaikka:</strong> Permanent job</li>
            <li><strong>Tupakoimaton:</strong> Non-smoker</li>
            <li><strong>Lemmikkieläin:</strong> Pet</li>
            <li><strong>Asuntonäyttö / Näyttö:</strong> Apartment viewing</li>
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
            <h3 className="text-lg font-semibold text-gray-900">Do I need to invent a real Finnish address for the application?</h3>
            <p className="text-[#64748B]">
              No, inventing a specific street address isn&apos;t strictly necessary unless the prompt demands it. Simply mentioning a neighborhood (like Kallio) or a city (like Helsinki) is usually enough context for the examiner to evaluate your language skills.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">How long should a YKI housing application be?</h3>
            <p className="text-[#64748B]">
              For formal messages like this, aim for about 80 to 110 words. Your primary goal is to ensure that every bullet point in the exam prompt has been clearly answered in standard Finnish.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Is it important to mention the security deposit (takuuvuokra)?</h3>
            <p className="text-[#64748B]">
              While not always mandatory, mentioning that you are ready to pay the &quot;takuuvuokra&quot; is an excellent way to show off your practical Finnish vocabulary and demonstrate your understanding of local cultural norms.
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
                  "name": "Do I need to invent a real Finnish address for the application?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, inventing a specific street address isn't strictly necessary unless the prompt demands it. Simply mentioning a neighborhood (like Kallio) or a city (like Helsinki) is usually enough context for the examiner to evaluate your language skills."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long should a YKI housing application be?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For formal messages like this, aim for about 80 to 110 words. Your primary goal is to ensure that every bullet point in the exam prompt has been clearly answered in standard Finnish."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is it important to mention the security deposit (takuuvuokra)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While not always mandatory, mentioning that you are ready to pay the 'takuuvuokra' is an excellent way to show off your practical Finnish vocabulary and demonstrate your understanding of local cultural norms."
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