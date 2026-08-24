import Link from "next/link";
import { generateWikiMetadata } from "@/lib/wiki-metadata";

export const metadata = generateWikiMetadata("essays", "personal-experience-essay", {
  title: "YKI Writing: Personal Experience Essay Guide & B1 Examples",
  description: "Learn how to write a compelling personal experience essay (oma kokemus) for the Finnish YKI exam. Master past tenses, text structure, and B1 vocabulary.",
});

export default function YkiPersonalExperienceEssayPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <article className="prose prose-lg max-w-none text-gray-800">
          <h1 className="mb-8 text-4xl font-extrabold text-[#2563EB]">
            Writing a Personal Experience Essay for YKI: A Friendly Tutor&apos;s Guide
          </h1>

          <p>
            Welcome back to your preparation journey! As your friendly tutor, I find that the personal experience essay (<em>oma kokemus</em>) is often the most enjoyable task for candidates. You are usually asked to write about a memorable trip, your first job, or an important life event. While the topic feels casual and personal, you must remember that examiners are specifically testing your ability to use past tenses (imperfekti and perfekti) correctly. Let&apos;s map out how to share your story clearly and accurately.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Step-by-Step Formatting Guide
          </h2>
          <p>
            A good narrative essay flows like a movie. The examiner should be able to follow the timeline of events without getting confused. Use this four-step structure for your essay:
          </p>
          <ul>
            <li>
              <strong>1. Set the Scene (Tausta):</strong> Start by telling the reader when and where the event happened. Use phrases like <em>Pari vuotta sitten...</em> (A couple of years ago...) or <em>Kun olin nuori...</em> (When I was young...).
            </li>
            <li>
              <strong>2. The Sequence of Events (Tapahtumat):</strong> Describe what happened in chronological order. Use time connectors such as <em>Ensin</em> (First), <em>Sitten</em> (Then), and <em>Sen jälkeen</em> (After that) to link your sentences logically.
            </li>
            <li>
              <strong>3. The Climax or Core Memory:</strong> Focus on the most important part of the experience. Describe the challenges you faced or the best moment of the day.
            </li>
            <li>
              <strong>4. Reflection (Omat tunteet ja oppiminen):</strong> Conclude by describing how the experience made you feel and what you learned. You can bring the timeline back to the present with <em>Nykyään ajattelen, että...</em> (Nowadays I think that...).
            </li>
          </ul>

          <p>
            Organizing your timeline correctly is the key to narrative success. To learn more about pacing your texts and managing paragraph length, I highly suggest reviewing our essential <Link href="/wiki/guides/tips" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing tips</Link> before your exam.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Common Mistakes Candidates Make
          </h2>
          <p>
            Telling a story in a foreign language can be tricky. Avoid these three common pitfalls to secure a high score:
          </p>
          <ul>
            <li>
              <strong>Mixing Up Verb Tenses:</strong> The biggest mistake is jumping unpredictably between the present tense and the past tense. If you are telling a story about yesterday, ensure your verbs stay in the imperfect tense (e.g., <em>olin</em>, <em>menin</em>, <em>tein</em>).
            </li>
            <li>
              <strong>Lacking Descriptive Details:</strong> Writing &quot;It was nice&quot; (<em>Se oli kivaa</em>) isn&apos;t enough for a B1 rating. You need to expand your vocabulary and explain <em>why</em> it was nice using adjectives like <em>mielenkiintoinen</em> (interesting) or <em>ikimuistoinen</em> (memorable).
            </li>
            <li>
              <strong>Ignoring Prompt Requirements:</strong> Often, the prompt will ask you to describe what went wrong or how a problem was solved. Missing these specific details will negatively affect your grade according to the official <Link href="/wiki/scoring/yki-b1-guide" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing scoring</Link> criteria.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            B1-Level Example: My First Workday in Finland
          </h2>
          <p>
            Here is a strong B1-level example of a personal experience essay. Notice how the writer uses past tenses consistently and structures the text with clear time markers.
          </p>
          
          <div className="my-6 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <p><strong>Essee: Minun ensimmäinen työpäiväni Suomessa</strong></p>
            <p>
              Haluan kertoa teille minun ensimmäisestä työpäivästäni Suomessa. Se tapahtui kaksi vuotta sitten, kun sain paikan siivoojana isossa toimistorakennuksessa Helsingissä.
            </p>
            <p>
              Aamulla olin todella hermostunut. Heräsin aikaisin, koska en halunnut myöhästyä. Kun saavuin työpaikalle kello seitsemän, minun uusi pomoni odotti minua aulassa. Hän oli erittäin ystävällinen ja näytti minulle, mistä löydän työvaatteet ja siivousvälineet.
            </p>
            <p>
              Ensin työ tuntui vaikealta, koska minun piti muistaa monta uutta asiaa ja suomen kielen taitoni oli vielä heikko. Pelkäsin, että teen virheitä. Kuitenkin työkaverini auttoivat minua paljon ja puhuivat minulle hitaasti ja selkeästi.
            </p>
            <p>
              Lopulta päivä meni todella hyvin. Olin väsynyt, mutta erittäin iloinen. Opin paljon uusia sanoja ja ymmärsin, että suomalaiset työpaikat voivat olla todella mukavia. Tämä kokemus oli minulle tärkeä, koska se antoi minulle rohkeutta puhua enemmän suomea.
            </p>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Essential Narrative Vocabulary
          </h2>
          <p>
            Memorize these words and phrases to bring your personal stories to life during the exam:
          </p>
          <ul>
            <li><strong>Kokemus:</strong> Experience</li>
            <li><strong>Ikimuistoinen:</strong> Memorable</li>
            <li><strong>Tapahtua:</strong> To happen</li>
            <li><strong>Ensin / Aluksi:</strong> First / At first</li>
            <li><strong>Sen jälkeen:</strong> After that</li>
            <li><strong>Lopulta:</strong> Finally / In the end</li>
            <li><strong>Hermostunut:</strong> Nervous</li>
            <li><strong>Rohkeus:</strong> Courage</li>
          </ul>
        </article>

        <div className="my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 p-8 text-center text-white shadow-xl">
          <h3 className="mb-4 text-2xl font-bold text-white">Practice makes perfect!</h3>
          <p className="mb-6 text-blue-50">Check your YKI writing score instantly with our AI Examiner.</p>
          <Link href="/" className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
            Try AI Examiner Now
          </Link>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Do I have to write a true story?</h3>
            <p className="text-[#64748B]">
              No! The examiners have no way of knowing if your story is true. You can completely invent an experience if it makes it easier for you to use vocabulary and grammar that you are confident with.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Which past tense is more important: imperfekti or perfekti?</h3>
            <p className="text-[#64748B]">
              Imperfekti (the simple past tense, e.g., &quot;söin&quot;, &quot;menin&quot;) is the most common tense for telling a sequential story about a specific event in the past. You will use it heavily in this type of essay.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">How long should a narrative essay be?</h3>
            <p className="text-[#64748B]">
              Aim for around 100 to 140 words. Focus on dividing the text into clear paragraphs (introduction, events, feelings/conclusion) to make it easy to read.
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
                  "name": "Do I have to write a true story?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No! The examiners have no way of knowing if your story is true. You can completely invent an experience if it makes it easier for you to use vocabulary and grammar that you are confident with."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which past tense is more important: imperfekti or perfekti?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Imperfekti (the simple past tense, e.g., 'söin', 'menin') is the most common tense for telling a sequential story about a specific event in the past. You will use it heavily in this type of essay."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long should a narrative essay be?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aim for around 100 to 140 words. Focus on dividing the text into clear paragraphs (introduction, events, feelings/conclusion) to make it easy to read."
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