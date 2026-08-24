import Link from "next/link";
import { generateWikiMetadata } from "@/lib/wiki-metadata";

export const metadata = generateWikiMetadata("essays", "problem-solution-essay", {
  title: "YKI Writing: Problem-Solution Essay Guide & B1 Examples",
  description: "Learn how to structure a high-scoring problem-solution essay for the Finnish YKI exam. Discover formatting rules, example texts, and key vocabulary.",
});

export default function YkiProblemSolutionEssayPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <article className="prose prose-lg max-w-none text-gray-800">
          <h1 className="mb-8 text-4xl font-extrabold text-[#2563EB]">
            How to Write a YKI Problem-Solution Essay: A Student Coach&apos;s Strategy
          </h1>

          <p>
            Hey there, future Finnish citizens! As your YKI Student Coach, I am thrilled to walk you through one of the most empowering essay formats on the intermediate writing exam: the Problem-Solution essay (<em>ongelma ja ratkaisu -kirjoitus</em>). This task requires you to describe a specific challenge in modern society—such as environmental issues, plastic waste, or lack of exercise—and propose practical solutions. It is your perfect chance to show the examiners that you can argue constructively and creatively in standard Finnish.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Step-by-Step Formatting Guide
          </h2>
          <p>
            To clear the B1 benchmark, your essay must be clearly organized so that the reader can easily connect each problem to its corresponding solution. Use this highly effective four-paragraph framework:
          </p>
          <ul>
            <li>
              <strong>1. Introduce the Problem:</strong> State what the issue is and why it is a growing concern in modern life. Use opening hooks like <em>Nykyään yksi suurimmista ongelmista on...</em> (Nowadays one of the biggest problems is...).
            </li>
            <li>
              <strong>2. Explain the Causes and Effects:</strong> Dig a bit deeper. Explain why this problem occurs and how it impacts people, cities, or the environment. Keep sentences clear and avoid overly convoluted grammatical structures.
            </li>
            <li>
              <strong>3. Propose Solutions (Ratkaisut):</strong> Transition smoothly to how the community or individuals can solve the problem. Use transition signals such as <em>Tähän ongelmaan on olemassa useita ratkaisuja</em> (There are several solutions to this problem).
            </li>
            <li>
              <strong>4. Conclude with an Optimistic Summary:</strong> Summarize your main points and express hope for the future. A standard ending phrase like <em>Yhteenvetona voidaan sanoa, että...</em> works wonderfully.
            </li>
          </ul>

          <p>
            Structuring your paragraphs using this layout makes your text highly readable. To master more structural secrets for the test day, make sure to read through our comprehensive <Link href="/wiki/guides/tips" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing tips</Link> as part of your study plan.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Common Mistakes Students Make
          </h2>
          <p>
            Even students with great vocabulary can lose points if they don&apos;t follow the specific rules of an essay task. Watch out for these three mistakes:
          </p>
          <ul>
            <li>
              <strong>Listing Problems Without Solutions:</strong> The prompt explicitly asks you to discuss solutions. If you spend the whole essay complaining about a problem and only write one short sentence at the end about a solution, your task fulfillment score will drop significantly.
            </li>
            <li>
              <strong>Proposing Unrealistic or Extreme Solutions:</strong> You don&apos;t need to save the world with your essay! Keep your solutions simple and relatable, such as raising taxes, improving education, or using recycling bins. This allows you to use safer, high-frequency B1 vocabulary.
            </li>
            <li>
              <strong>Forgetting Logical Connectors:</strong> A good essay flows like a conversation. If you jump directly from a problem to a solution without a clear transition word like <em>Mielestäni paras ratkaisu on...</em> (In my opinion, the best solution is...), the text feels disjointed.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            B1-Level Example: Plastic Waste in Cities
          </h2>
          <p>
            Plastic waste and littering (<em>roskaantuminen</em>) are very common themes in the YKI test. Check out this high-quality B1-level response below. If you want to compare this format with other essay types, take a look at our curated collection of <Link href="/wiki/templates/examples" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing examples</Link> to expand your skills.
          </p>
          
          <div className="my-6 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <p><strong>Essee: Muovijätteen vähentäminen kaupungeissa</strong></p>
            <p>
              Nykyään muovijäte ja roskaantuminen ovat suuria ongelmia monissa Suomen kaupungeissa. Ihmiset ostavat paljon tuotteita, joissa on muovipakkauksia, ja usein nämä roskat päätyvät luontoon tai katujen varsille. Tämä vahingoittaa ympäristöä ja eläimiä.
            </p>
            <p>
              Yksi suuri syy ongelmaan on se, että ihmisillä on kiire, eivätkä he aina jaksa etsiä oikeaa kierrätysastiaa. Lisäksi kaikilla asuinalueilla ei ole tarpeeksi muovinkeräyspisteitä. Tämä johtaa siihen, että arvokas materiaali menee sekajätteeseen tai luontoon.
            </p>
            <p>
              Mielestäni tähän ongelmaan on olemassa kaksi hyvää ratkaisua. Ensinnäkin, kaupunkien pitäisi lisätä kierrätysastioita puistoihin, bussipysäkeille ja katujen varsille. Kun kierrättäminen on helppoa, ihmiset tekevät sitä useammin. Toiseksi, kaupat voisivat käyttää enemmän paperipakkauksia muovin sijasta. Myös muovipussien hintaa voitaisiin nostaa, jotta ihmiset ottaisivat oman kangaskassin mukaan kauppaan.
            </p>
            <p>
              Yhteenvetona voidaan sanoa, että muovijäte on vakava haaste, mutta pienillä arjen muutoksilla ja paremmalla kierrätyksellä voimme pitää kaupunkimme puhtaina.
            </p>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Essential Problem-Solution Vocabulary
          </h2>
          <p>
            Make sure to practice these words so you can quickly build cause-and-effect arguments during your exam:
          </p>
          <ul>
            <li><strong>Ongelma:</strong> Problem</li>
            <li><strong>Ratkaisu:</strong> Solution</li>
            <li><strong>Ratkaista:</strong> To solve</li>
            <li><strong>Roskaantuminen:</strong> Littering</li>
            <li><strong>Kierrätys / Kierrättää:</strong> Recycling / To recycle</li>
            <li><strong>Vahingoittaa:</strong> To damage / To harm</li>
            <li><strong>Syy / Seuraus:</strong> Cause / Consequence</li>
            <li><strong>Lisätä:</strong> To increase / To add</li>
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
            <h3 className="text-lg font-semibold text-gray-900">Should I focus on one solution or offer multiple solutions?</h3>
            <p className="text-[#64748B]">
              It is always best to offer two distinct solutions. This allows you to show off your grammar flexibility by using transition words like &quot;ensinnäkin&quot; (firstly) and &quot;toiseksi&quot; (secondly), making your text look more structured and professional.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">How long should a YKI problem-solution essay be?</h3>
            <p className="text-[#64748B]">
              Aim for a length between 100 and 140 words. Focus on answering all parts of the prompt clearly and spending equal time describing the problem and outlining the practical solutions.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Can I write about my own personal experiences with the problem?</h3>
            <p className="text-[#64748B]">
              Yes, absolutely! Incorporating a sentence like &quot;Omassa kotikaupungissani huomasin, että...&quot; (In my own hometown I noticed that...) is an excellent way to transition into the problem context and makes your essay sound very natural.
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
                  "name": "Should I focus on one solution or offer multiple solutions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is always best to offer two distinct solutions. This allows you to show off your grammar flexibility by using transition words like 'ensinnäkin' (firstly) and 'toiseksi' (secondly), making your text look more structured and professional."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long should a YKI problem-solution essay be?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aim for a length between 100 and 140 words. Focus on answering all parts of the prompt clearly and spending equal time describing the problem and outlining the practical solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I write about my own personal experiences with the problem?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, absolutely! Incorporating a sentence like 'Omassa kotikaupungissani huomasin, että...' (In my own hometown I noticed that...) is an excellent way to transition into the problem context and makes your essay sound very natural."
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