import Link from "next/link";
import { generateWikiMetadata } from "@/lib/wiki-metadata";

export const metadata = generateWikiMetadata("essays", "study-plan", {
  title: "YKI Writing: Study Plan Guide & B1 Examples",
  description: "Learn how to write a clear and structured study plan (opintosuunnitelma) for the Finnish YKI exam. Master future intentions, education vocabulary, and B1 formatting.",
});

export default function YkiStudyPlanPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <article className="prose prose-lg max-w-none text-gray-800">
          <h1 className="mb-8 text-4xl font-extrabold text-[#2563EB]">
            Writing a Study Plan for YKI: A Career Counselor&apos;s Guide
          </h1>

          <p>
            In the intermediate YKI exam, you may be asked to outline your future educational goals by writing a study plan (<em>opintosuunnitelma</em>). This task might be framed as a message to a guidance counselor (<em>opinto-ohjaaja</em>), an application to a vocational school, or a plan submitted to the employment office (<em>TE-toimisto</em>). The examiner wants to see that you can express future intentions, describe your current skills, and explain your motivation clearly in standard Finnish.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Step-by-Step Formatting Guide
          </h2>
          <p>
            A good study plan is logical and forward-looking. It should connect your past experience to your future goals. Follow this reliable four-paragraph structure:
          </p>
          <ul>
            <li>
              <strong>1. Professional Greeting & Purpose:</strong> Start formally or semi-formally depending on the recipient (e.g., <em>Hei opinto-ohjaaja</em>). State clearly that you are writing to present your study plan.
            </li>
            <li>
              <strong>2. Current Situation & Background:</strong> Briefly explain your educational or professional background and your current Finnish language level. Mentioning that you are preparing for the YKI test or completing a specific course is a great detail.
            </li>
            <li>
              <strong>3. The Plan (Future Intentions):</strong> This is the most important part. Explain <em>what</em> you want to study, <em>where</em>, and <em>when</em>. Use future-oriented verbs like <em>aion</em> (I intend), <em>haluan</em> (I want), or <em>suunnittelen</em> (I plan).
            </li>
            <li>
              <strong>4. Career Goal & Conclusion:</strong> Connect your studies to a concrete career goal in Finland (e.g., getting a job as a nurse or an IT specialist). End politely and express hope for a future meeting or a positive decision.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Common Mistakes Candidates Make
          </h2>
          <p>
            Writing about the future can be tricky in Finnish since there is no distinct future tense. Avoid these common pitfalls:
          </p>
          <ul>
            <li>
              <strong>Only Using the Present Tense:</strong> If you only write &quot;Opiskelen suomea&quot; (I study Finnish), it doesn&apos;t sound like a plan. You must demonstrate intention by using auxiliary verbs: <em>Aion opiskella...</em> (I intend to study...) or <em>Tarkoitukseni on hakea...</em> (My intention is to apply...).
            </li>
            <li>
              <strong>Lacking Concrete Details:</strong> A study plan needs to be specific. Instead of saying &quot;I want to go to school,&quot; say &quot;I want to study to become a practical nurse at Omnia vocational school.&quot; Detailed vocabulary earns higher marks based on the <Link href="/wiki/scoring/yki-b1-guide" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing scoring</Link> rubrics.
            </li>
            <li>
              <strong>Rambling Without Structure:</strong> Jumping back and forth between your childhood dreams and next week&apos;s language course will confuse the examiner. Keep the timeline strictly logical: Past/Present → Immediate Plan → Long-term Goal.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            B1-Level Example: Submitting a Study Plan to the TE-Office
          </h2>
          <p>
            Below is a strong B1-level example of a study plan sent to an employment office expert. Notice how the writer uses intention verbs and clear educational vocabulary. For more task-specific examples, explore our <Link href="/wiki/templates/examples" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing examples</Link> archive.
          </p>
          
          <div className="my-6 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <p><strong>Aihe: Minun opintosuunnitelmani / Maria Garcia</strong></p>
            <p>Hei,</p>
            <p>
              Kirjoitan sinulle, koska pyysit minulta opintosuunnitelmaa TE-toimistoa varten. 
            </p>
            <p>
              Olen opiskellut suomea nyt vuoden ajan, ja kielitaitoni on B1-tasolla. Kotimaassani opiskelin kauppatieteitä, mutta haluaisin nyt vaihtaa alaa ja työllistyä sosiaali- ja terveysalalle Suomessa.
            </p>
            <p>
              Minun suunnitelmani on hakea opiskelemaan lähihoitajaksi ammattikouluun ensi syksynä. Ennen sitä aion osallistua YKI-testiin tammikuussa, koska tarvitsen virallisen todistuksen kielitaidostani koulua varten. Keväällä aion myös käydä ensiapukurssin, josta on varmasti hyötyä tulevissa opinnoissani.
            </p>
            <p>
              Tavoitteeni on valmistua lähihoitajaksi kahdessa vuodessa ja saada vakituinen työpaikka päiväkodista tai vanhainkodista. 
            </p>
            <p>
              Toivon, että voimme keskustella tästä suunnitelmasta lisää seuraavassa tapaamisessamme.
            </p>
            <p>Ystävällisin terveisin,<br/>Maria Garcia</p>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Essential Education and Planning Vocabulary
          </h2>
          <p>
            Master these terms to effortlessly describe your educational journey and professional ambitions:
          </p>
          <ul>
            <li><strong>Opintosuunnitelma:</strong> Study plan</li>
            <li><strong>Opinto-ohjaaja (Opo):</strong> Guidance counselor</li>
            <li><strong>Aikoa / Suunnitella:</strong> To intend / To plan</li>
            <li><strong>Hakea opiskelemaan:</strong> To apply to study</li>
            <li><strong>Ammattikoulu:</strong> Vocational school</li>
            <li><strong>Valmistua:</strong> To graduate</li>
            <li><strong>Työllistyä:</strong> To find employment / To get a job</li>
            <li><strong>Tavoite:</strong> Goal / Objective</li>
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
            <h3 className="text-lg font-semibold text-gray-900">Do I need to write about my real education or career goals?</h3>
            <p className="text-[#64748B]">
              No. Just like with any YKI task, you can completely invent your background and goals. Choose a profession (like lähihoitaja, kokki, or IT-tukihenkilö) that you already know the Finnish vocabulary for, as it will make writing the plan much easier.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">How do I talk about the future in Finnish without a future tense?</h3>
            <p className="text-[#64748B]">
              Finnish relies on auxiliary verbs and time markers to indicate the future. Use verbs like <em>aion</em> (I intend), <em>haluan</em> (I want), or <em>tulen tekemään</em> (I will do) combined with future time markers like <em>ensi vuonna</em> (next year) or <em>tulevaisuudessa</em> (in the future).
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Who is the typical recipient for a study plan prompt?</h3>
            <p className="text-[#64748B]">
              The prompt usually asks you to direct the plan to a teacher (<em>opettaja</em>), a guidance counselor (<em>opinto-ohjaaja</em>), or an integration official at the TE-office (<em>TE-toimiston virkailija</em>). Make sure to adjust your greeting accordingly based on the instructions.
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
                  "name": "Do I need to write about my real education or career goals?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Just like with any YKI task, you can completely invent your background and goals. Choose a profession (like lähihoitaja, kokki, or IT-tukihenkilö) that you already know the Finnish vocabulary for, as it will make writing the plan much easier."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I talk about the future in Finnish without a future tense?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Finnish relies on auxiliary verbs and time markers to indicate the future. Use verbs like 'aion' (I intend), 'haluan' (I want), or 'tulen tekemään' (I will do) combined with future time markers like 'ensi vuonna' (next year) or 'tulevaisuudessa' (in the future)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who is the typical recipient for a study plan prompt?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The prompt usually asks you to direct the plan to a teacher (opettaja), a guidance counselor (opinto-ohjaaja), or an integration official at the TE-office (TE-toimiston virkailija). Make sure to adjust your greeting accordingly based on the instructions."
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