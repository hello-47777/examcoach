import type { Metadata } from "next";

// ---------------------------------------------------------------------------
// ExamCoach.ai — /finland/yki-writing-scoring
// Per examcoach-project-context.txt + examcoach-seo-masterplan.txt:
//   - English only, long-form SEO content, mobile friendly, semantic HTML
//   - FAQ Schema, Open Graph, internal linking
// Per examcoach-ui-design-system.txt:
//   - Primary #2563EB / Secondary #64748B / Background #FFFFFF
//   - Cards: rounded + shadow-sm. Buttons: rounded-xl.
//   - CTA copy: "Try Our Free YKI Writing Checker" -> "/"
//   - Page sections required: Hero, Content, FAQ, CTA, Internal Links
// ---------------------------------------------------------------------------

const PAGE_TITLE = "How YKI Writing Is Scored (2026 Guide)";
const PAGE_DESCRIPTION =
  "Learn exactly how YKI writing is scored in 2026: grammar, vocabulary, task achievement, and coherence, with score tables, weak vs. strong answer examples, and the most common mistakes that cost points.";
const PAGE_URL = "https://examcoach.ai/finland/yki-writing-scoring";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "ExamCoach.ai",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://examcoach.ai/og/yki-writing-scoring.png",
        width: 1200,
        height: 630,
        alt: "How YKI Writing Is Scored — ExamCoach.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const faqs = [
  {
    question: "How do examiners score YKI writing?",
    answer:
      "YKI examiners score your writing against four main criteria: task achievement (how well you respond to the actual prompt), coherence and organization (how logically your ideas connect), vocabulary range and accuracy, and grammar control. Each criterion is rated against the Finnish National Certificates of Language Proficiency scale, and your final writing band reflects the overall balance across all four areas rather than any single one in isolation.",
  },
  {
    question: "Can grammar mistakes fail YKI writing?",
    answer:
      "A few isolated grammar mistakes will not fail your YKI writing if your message is still clear and your task achievement is strong. However, frequent or basic errors that make your writing hard to understand, or that suggest you have not reached the targeted proficiency level, can pull your score down significantly. Examiners weigh whether mistakes interfere with communication, not just whether mistakes exist.",
  },
  {
    question: "What level do I need for citizenship?",
    answer:
      "For Finnish citizenship, you generally need to demonstrate YKI proficiency at level 3 (intermediate) on the six-level YKI scale, which corresponds to roughly B1 on the CEFR scale. Requirements can vary slightly depending on your specific citizenship pathway, so it's worth confirming the current requirement with Migri before your exam date.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function YkiWritingScoringPage() {
  return (
    <>
      {/* FAQ Schema (JSON-LD) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-white text-slate-900">
        {/* ----------------------------------------------------------- */}
        {/* HERO                                                       */}
        {/* ----------------------------------------------------------- */}
        <header className="border-b border-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[#2563EB]">
              Finland · YKI Writing
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              How YKI Writing Is Scored
            </h1>
            <p className="mt-5 max-w-2xl text-base text-[#64748B] sm:text-lg">
              A complete 2026 breakdown of the four official YKI writing
              criteria, what examiners actually reward, and the mistakes
              that quietly cost the most points.
            </p>
            <div className="mt-8">
              <CtaButton />
            </div>
          </div>
        </header>

        {/* ----------------------------------------------------------- */}
        {/* CONTENT                                                    */}
        {/* ----------------------------------------------------------- */}
        <article className="mx-auto max-w-5xl px-6 py-16">
          {/* Intro */}
          <section aria-labelledby="overview">
            <h2 id="overview" className="text-2xl font-semibold text-slate-900">
              How YKI Writing Scoring Works
            </h2>
            <p className="mt-4 text-[#64748B]">
              YKI writing is not scored on a single &quot;right or wrong&quot;
              basis. Instead, examiners rate your response across four
              criteria&nbsp;&mdash; task achievement, coherence, vocabulary,
              and grammar&nbsp;&mdash; and combine them into one overall
              writing level on the six-point YKI scale. Understanding each
              criterion separately is the fastest way to know exactly where
              you are losing points.
            </p>
          </section>

          {/* Score table: overview of the 4 criteria */}
          <section aria-labelledby="criteria-table" className="mt-12">
            <h2 id="criteria-table" className="text-2xl font-semibold text-slate-900">
              The Four YKI Writing Criteria
            </h2>
            <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-semibold">
                      Criterion
                    </th>
                    <th scope="col" className="px-5 py-3 font-semibold">
                      What It Measures
                    </th>
                    <th scope="col" className="px-5 py-3 font-semibold">
                      Typical Weight
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-5 py-4 font-medium text-slate-900">
                      Task Achievement
                    </td>
                    <td className="px-5 py-4 text-[#64748B]">
                      Whether you fully answer the prompt, cover all required
                      points, and stay within the expected format and length.
                    </td>
                    <td className="px-5 py-4 text-[#64748B]">High</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium text-slate-900">
                      Coherence &amp; Organization
                    </td>
                    <td className="px-5 py-4 text-[#64748B]">
                      Logical flow, paragraphing, and use of linking words to
                      connect ideas clearly.
                    </td>
                    <td className="px-5 py-4 text-[#64748B]">High</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium text-slate-900">
                      Vocabulary
                    </td>
                    <td className="px-5 py-4 text-[#64748B]">
                      Range, precision, and appropriateness of word choice for
                      the topic and register.
                    </td>
                    <td className="px-5 py-4 text-[#64748B]">Medium</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium text-slate-900">
                      Grammar
                    </td>
                    <td className="px-5 py-4 text-[#64748B]">
                      Accuracy and control of sentence structure, verb forms,
                      and case endings.
                    </td>
                    <td className="px-5 py-4 text-[#64748B]">Medium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Grammar */}
          <section aria-labelledby="grammar" className="mt-12">
            <h2 id="grammar" className="text-2xl font-semibold text-slate-900">
              Grammar
            </h2>
            <p className="mt-4 text-[#64748B]">
              Grammar accuracy matters, but examiners are primarily checking
              whether errors interfere with understanding. Case endings,
              verb conjugation, and word order are the most common trouble
              spots for YKI candidates. A response with a few minor slips but
              a clear overall structure will outscore a grammatically
              cautious response that uses only short, simple sentences.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[#64748B]">
              <li>Correct case endings (partitive, genitive, illative, etc.)</li>
              <li>Consistent verb tense across the whole response</li>
              <li>Subject-verb agreement and word order</li>
              <li>Appropriate use of conjunctions and connectors</li>
            </ul>
          </section>

          {/* Vocabulary */}
          <section aria-labelledby="vocabulary" className="mt-12">
            <h2 id="vocabulary" className="text-2xl font-semibold text-slate-900">
              Vocabulary
            </h2>
            <p className="mt-4 text-[#64748B]">
              Examiners look for a vocabulary range that goes beyond the most
              basic, repeated words. Using topic-specific terms accurately,
              varying word choice instead of repeating the same word
              throughout, and choosing the right register (formal vs.
              everyday) all contribute to a stronger vocabulary score.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[#64748B]">
              <li>Topic-relevant vocabulary used correctly in context</li>
              <li>Variety: avoiding the same word repeated many times</li>
              <li>Idiomatic or natural-sounding phrasing where appropriate</li>
              <li>Correct collocations (which words naturally pair together)</li>
            </ul>
          </section>

          {/* Task Achievement */}
          <section aria-labelledby="task-achievement" className="mt-12">
            <h2 id="task-achievement" className="text-2xl font-semibold text-slate-900">
              Task Achievement
            </h2>
            <p className="mt-4 text-[#64748B]">
              This is often the single most decisive criterion. If your
              response ignores part of the prompt, drifts off-topic, or is
              far too short, your score is capped regardless of how
              grammatically correct your Finnish is. Always re-read the
              prompt before submitting and confirm you have addressed every
              part of it.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[#64748B]">
              <li>Every part of the prompt is addressed</li>
              <li>Response length matches what is expected</li>
              <li>Content stays relevant to the task throughout</li>
              <li>The format matches what was asked (email, message, essay)</li>
            </ul>
          </section>

          {/* Coherence */}
          <section aria-labelledby="coherence" className="mt-12">
            <h2 id="coherence" className="text-2xl font-semibold text-slate-900">
              Coherence
            </h2>
            <p className="mt-4 text-[#64748B]">
              Coherence is about how easily a reader can follow your ideas
              from start to finish. Clear paragraph breaks, logical ordering,
              and linking words (like <em>ensiksi</em>, <em>toisaalta</em>,
              and <em>lopuksi</em>) all signal strong coherence, even when
              individual sentences are simple.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[#64748B]">
              <li>Clear introduction, body, and conclusion structure</li>
              <li>Logical paragraph breaks for each new idea</li>
              <li>Linking words used to connect sentences and paragraphs</li>
              <li>No abrupt topic jumps without transition</li>
            </ul>
          </section>

          {/* Common mistakes */}
          <section aria-labelledby="common-mistakes" className="mt-12">
            <h2 id="common-mistakes" className="text-2xl font-semibold text-slate-900">
              Common Mistakes That Cost Points
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[#64748B]">
              <li>Writing far below or above the requested word count</li>
              <li>Ignoring one of the sub-questions in a multi-part prompt</li>
              <li>Repeating the same 3–4 vocabulary words throughout</li>
              <li>Using only short, simple sentences with no connectors</li>
              <li>Mixing formal and informal register inconsistently</li>
              <li>Leaving no time to proofread for case-ending errors</li>
            </ul>
          </section>

          {/* Weak vs strong examples */}
          <section aria-labelledby="examples" className="mt-12">
            <h2 id="examples" className="text-2xl font-semibold text-slate-900">
              Weak vs. Strong Answer Examples
            </h2>
            <p className="mt-4 text-[#64748B]">
              Below is a simplified comparison for a common YKI prompt:{" "}
              <em>&quot;Write a message to your colleague explaining why you
              will be late to a meeting.&quot;</em>
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-red-100 bg-red-50/50 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
                  Weak Answer
                </p>
                <p className="mt-3 text-sm text-slate-700">
                  Hei. Minä myöhässä. Bussi ei tule. Minä tulen kohta.
                  Anteeksi.
                </p>
                <ul className="mt-4 space-y-1 text-sm text-[#64748B]">
                  <li>• Missing verb conjugation (&quot;minä myöhässä&quot;)</li>
                  <li>• No greeting/closing structure expected in a message</li>
                  <li>• No connecting words between ideas</li>
                  <li>• Too short for the task</li>
                </ul>
              </div>

              <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                  Strong Answer
                </p>
                <p className="mt-3 text-sm text-slate-700">
                  Hyvä Maria, valitettavasti myöhästyn tämän aamun
                  palaverista, koska bussini on myöhässä liikenneruuhkan
                  takia. Saavun toimistolle noin viidentoista minuutin
                  kuluttua. Voitteko aloittaa palaverin ilman minua?
                  Pahoittelut häiriöstä. Ystävällisin terveisin, Anna.
                </p>
                <ul className="mt-4 space-y-1 text-sm text-[#64748B]">
                  <li>• Correct greeting and closing for a message</li>
                  <li>• Clear cause-and-effect connector (&quot;koska&quot;)</li>
                  <li>• Specific, relevant detail (estimated arrival time)</li>
                  <li>• Polite, appropriate register throughout</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Mid-page CTA */}
          <section className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm sm:p-10">
            <h2 className="text-xl font-semibold text-slate-900">
              See exactly where your own writing loses points
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[#64748B]">
              Paste in a practice response and get instant feedback on
              grammar, vocabulary, task achievement, and coherence&nbsp;&mdash;
              for free.
            </p>
            <div className="mt-6">
              <CtaButton />
            </div>
          </section>

          {/* ----------------------------------------------------------- */}
          {/* FAQ                                                        */}
          {/* ----------------------------------------------------------- */}
          <section aria-labelledby="faq" className="mt-16">
            <h2 id="faq" className="text-2xl font-semibold text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 divide-y divide-slate-100 rounded-xl border border-slate-200 shadow-sm">
              {faqs.map((faq) => (
                <details key={faq.question} className="group p-6">
                  <summary className="cursor-pointer list-none text-base font-medium text-slate-900 marker:content-none">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-[#64748B]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ----------------------------------------------------------- */}
          {/* INTERNAL LINKS                                             */}
          {/* ----------------------------------------------------------- */}
          <nav aria-labelledby="related-guides" className="mt-16">
            <h2 id="related-guides" className="text-xl font-semibold text-slate-900">
              Related YKI Writing Guides
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              <li>
                <a
                  href="/finland/yki-writing-topics"
                  className="block rounded-xl border border-slate-200 p-4 text-sm font-medium text-[#2563EB] shadow-sm transition-colors hover:bg-slate-50"
                >
                  YKI Writing Topics →
                </a>
              </li>
              <li>
                <a
                  href="/finland/yki-writing-examples"
                  className="block rounded-xl border border-slate-200 p-4 text-sm font-medium text-[#2563EB] shadow-sm transition-colors hover:bg-slate-50"
                >
                  YKI Writing Examples →
                </a>
              </li>
              <li>
                <a
                  href="/finland/yki-writing-tips"
                  className="block rounded-xl border border-slate-200 p-4 text-sm font-medium text-[#2563EB] shadow-sm transition-colors hover:bg-slate-50"
                >
                  YKI Writing Tips →
                </a>
              </li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}

/**
 * Shared CTA button.
 * Copy and destination are fixed by examcoach-ui-design-system.txt:
 *   "Try Our Free YKI Writing Checker" -> "/"
 */
function CtaButton() {
  return (
    <a
      href="/"
      className="inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
    >
      Try Our Free YKI Writing Checker
    </a>
  );
}
