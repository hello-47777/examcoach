import Link from "next/link";
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('templates', 'job-application-examples', {
  title: 'YKI Writing Job Application Templates & B1 Examples (Copy-Paste) | Pass Finnish',
  description: 'Copy-paste YKI writing job application templates for IT, Healthcare, and Cleaning industries. Fill-in-the-blank B1-B2 level Finnish writing examples for exam practice.',
});

export default function JobApplicationExamplesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <article className="prose prose-lg max-w-none text-gray-800">
        <h1>YKI Job Application Templates & B1 Examples (Copy-Paste)</h1>
        
        <p>
          Preparing for the YKI Keskitaso writing exam doesn&apos;t mean you have to reinvent the wheel. As a language tutor, my biggest piece of advice is to have a flexible, reliable template memorized before you even step into the exam room.
        </p>

        <p>
          Below, you&apos;ll find three high-quality, B1-level templates tailored for different industries. These examples use a clear, three-paragraph structure. All you need to do is adapt the bracketed <strong>[fill-in-the-blank]</strong> sections to match the specific exam prompt. If you want a deeper dive into the logic behind these sections, revisit our <Link href="/wiki/guides/how-to-write-job-application" className="font-semibold text-blue-600 underline">ultimate guide to the YKI job application letter</Link>.
        </p>

        <h2>1. The Service / Cleaning Industry Template</h2>
        
        <p>
          This template is perfect for roles like cleaner (<em>siivooja</em>), restaurant worker (<em>ravintolatyöntekijä</em>), or retail assistant (<em>myyjä</em>). It emphasizes hard work, reliability, and customer service skills.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-8 border border-gray-200">
          <p>
            <strong>Hei,</strong>
          </p>
          <p>
            Kirjoitan teille, koska huomasin ilmoituksenne <strong>[missä näit ilmoituksen, esim. TE-toimiston sivuilla]</strong>. Haluaisin hakea <strong>[mikä työ, esim. siivoojan]</strong> paikkaa teidän yrityksestänne.
          </p>
          <p>
            Minulla on jo kokemusta tältä alalta, sillä olen työskennellyt aiemmin <strong>[edellinen työpaikka tai tehtävä]</strong> kaksi vuotta. Olen ahkera, luotettava ja opin nopeasti uusia asioita. Tulen hyvin toimeen erilaisten ihmisten kanssa ja puhun suomea keskitasolla. 
          </p>
          <p>
            Haluaisin mielelläni tulla työhaastatteluun kertomaan lisää itsestäni ja osaamisestani. Toivottavasti kuulen teistä pian!
          </p>
          <p>
            <strong>Ystävällisin terveisin,</strong><br />
            [Oma Nimesi]
          </p>
        </div>

        <h2>2. The IT / Technology Template</h2>
        
        <p>
          If the exam prompt asks you to apply for an office or tech job, this template works wonders. It highlights technical skills, teamwork, and relevant education. 
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-8 border border-gray-200">
          <p>
            <strong>Hyvä rekrytoija,</strong>
          </p>
          <p>
            Luin ilmoituksenne <strong>[esim. LinkedInistä]</strong> ja kiinnostuin heti avoimesta <strong>[esim. IT-tukihenkilön]</strong> tehtävästä. Haluan hakea tätä paikkaa, koska yrityksenne vaikuttaa erittäin mielenkiintoiselta.
          </p>
          <p>
            Olen koulutukseltani <strong>[esim. insinööri/tradenomi]</strong> ja olen työskennellyt IT-alalla <strong>[esim. viisi]</strong> vuotta. Osaan käyttää monia eri ohjelmistoja ja ratkaisen ongelmia tehokkaasti. Työntekijänä olen tiimipelaaja, mutta pystyn työskentelemään myös itsenäisesti. 
          </p>
          <p>
            Olisin erittäin innostunut tästä mahdollisuudesta. Liitteenä on CV:ni, josta näette tarkemmin työkokemukseni. Odotan yhteydenottoanne!
          </p>
          <p>
            <strong>Ystävällisin terveisin,</strong><br />
            [Oma Nimesi]
          </p>
        </div>

        <h2>3. The Healthcare / Nursing Template</h2>
        
        <p>
          Healthcare roles like practical nurse (<em>lähihoitaja</em>) or registered nurse (<em>sairaanhoitaja</em>) are common YKI themes. This template focuses on empathy, qualifications, and shift work readiness.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-8 border border-gray-200">
          <p>
            <strong>Hei,</strong>
          </p>
          <p>
            Huomasin <strong>[esim. sairaalan nettisivuilla]</strong>, että etsitte uutta <strong>[esim. lähihoitajaa]</strong> tiimiinne. Haluan hakea tätä paikkaa, koska nautin ihmisten auttamisesta.
          </p>
          <p>
            Valmistuin <strong>[esim. lähihoitajaksi]</strong> vuonna <strong>[vuosiluku]</strong> ja olen työskennellyt vanhustenhoidossa useita vuosia. Olen joustava, rauhallinen ja teen mielelläni myös vuorotyötä. Puhun suomea ymmärrettävästi ja opiskelen kieltä koko ajan lisää.
          </p>
          <p>
            Toivon, että voin tulla esittäytymään teille paikan päälle. Vastaan mielelläni lisäkysymyksiin.
          </p>
          <p>
            <strong>Ystävällisin terveisin,</strong><br />
            [Oma Nimesi]
          </p>
        </div>

        <h2>How to Customize These Templates</h2>
        
        <p>
          To make these templates your own, don&apos;t just copy them blindly. Before filling out these templates, make sure you brush up on the <Link href="/wiki/guides/formal-job-application" className="font-semibold text-blue-600 underline">essential YKI job application vocabulary and formal phrases</Link> to ensure your word choices are accurate and professional. 
        </p>

        <p>
          Remember, using the correct register is vital. The evaluators are strictly checking your tone. Learn more about mastering <Link href="/wiki/guides/kirjakieli-vs-puhekieli" className="font-semibold text-blue-600 underline">Kirjakieli vs Puhekieli</Link> to avoid losing points by accidentally inserting spoken slang into a formal application.
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
          <h3 className="font-semibold text-lg">Can I just memorize one template for the YKI exam?</h3>
          <p className="text-gray-600">
            Yes, memorizing a core structure is highly recommended! However, you must be flexible enough to alter the vocabulary so that you answer the specific bullet points provided in the exam prompt.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-lg">What if my real profession isn&apos;t in these templates?</h3>
          <p className="text-gray-600">
            You do not need to tell the truth on the YKI exam. If you are a specialized researcher but the prompt asks you to apply for a bakery job, apply for the bakery job. Use simple, easily translatable professions and skills that you confidently know in Finnish.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-lg">Should I include my real contact information in the letter?</h3>
          <p className="text-gray-600">
            No, you should never include your real phone number, email address, or home address in the YKI writing tasks. Simply signing off with your first name or a fake name is perfectly fine for the application format.
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
                "name": "Can I just memorize one template for the YKI exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, memorizing a core structure is highly recommended! However, you must be flexible enough to alter the vocabulary so that you answer the specific bullet points provided in the exam prompt."
                }
              },
              {
                "@type": "Question",
                "name": "What if my real profession isn't in these templates?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You do not need to tell the truth on the YKI exam. If you are a specialized researcher but the prompt asks you to apply for a bakery job, apply for the bakery job. Use simple, easily translatable professions and skills that you confidently know in Finnish."
                }
              },
              {
                "@type": "Question",
                "name": "Should I include my real contact information in the letter?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, you should never include your real phone number, email address, or home address in the YKI writing tasks. Simply signing off with your first name or a fake name is perfectly fine for the application format."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
