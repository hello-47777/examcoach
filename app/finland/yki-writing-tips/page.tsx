import type { Metadata } from "next";

// ---------------------------------------------------------------------------
// ExamCoach.ai — /finland/yki-writing-tips
// Per examcoach-project-context.txt + examcoach-seo-masterplan.txt:
//   - English only, long-form SEO content, mobile friendly, semantic HTML
//   - FAQ Schema, Open Graph, internal linking
// Per examcoach-ui-design-system.txt:
//   - Primary #2563EB / Secondary #64748B / Background #FFFFFF
//   - Cards: rounded + shadow-sm. Buttons: rounded-xl.
//   - CTA copy: "Try Our Free YKI Writing Checker" -> "/"
//   - Page sections required: Hero, Content, FAQ, CTA, Internal Links
// ---------------------------------------------------------------------------

const PAGE_TITLE = "15 YKI Writing Tips to Pass Faster";
const PAGE_DESCRIPTION =
  "15 detailed YKI writing tips for 2026, each with a clear explanation, a real example, and the common mistake to avoid, so you can raise your score faster.";
const PAGE_URL = "https://examcoach.ca/finland/yki-writing-tips";

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
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

type Tip = {
  number: number;
  title: string;
  explanation: string;
  example: string;
  mistake: string;
};

const tips: Tip[] = [
  {
    number: 1,
    title: "Read the prompt twice before writing anything",
    explanation:
      "Misreading the task is one of the fastest ways to lose points on task achievement, no matter how good your Finnish is. Read the prompt once for general meaning, then again to list every sub-question you must answer.",
    example:
      "If the prompt asks you to describe a problem and suggest a solution, your answer needs both parts — not just the problem.",
    mistake:
      "Answering only the first half of a multi-part prompt and missing the second half entirely.",
  },
  {
    number: 2,
    title: "Plan your structure before you start writing",
    explanation:
      "Spend 1–2 minutes outlining your introduction, body points, and conclusion. A short plan keeps your writing organized and prevents you from running out of ideas halfway through.",
    example:
      "For a complaint email: 1) state the problem, 2) give details, 3) state what you want to happen, 4) close politely.",
    mistake:
      "Starting to write immediately, then realizing partway through that the structure doesn't make sense.",
  },
  {
    number: 3,
    title: "Match the requested format exactly",
    explanation:
      "YKI tasks often specify a format — an email, a message, a forum post, a formal letter. Examiners check whether your response actually looks like that format, including greeting and closing conventions.",
    example:
      "A formal email should open with 'Hyvä [Name]' and close with 'Ystävällisin terveisin', not a casual 'Moi!'",
    mistake:
      "Using casual, message-style language in a task that asked for a formal letter.",
  },
  {
    number: 4,
    title: "Stay within the expected word count",
    explanation:
      "Writing far too little limits how much you can demonstrate; writing far too much can introduce more errors and signal poor task management. Aim for the length the instructions suggest.",
    example:
      "If the task suggests 100–150 words, aim for the middle of that range, not 40 words or 300 words.",
    mistake:
      "Writing a two-sentence answer because you ran out of ideas, instead of expanding with relevant detail.",
  },
  {
    number: 5,
    title: "Use linking words to connect your ideas",
    explanation:
      "Coherence is scored partly on how well your sentences connect. Linking words like 'koska' (because), 'mutta' (but), 'toisaalta' (on the other hand), and 'lopuksi' (finally) show clear logical structure.",
    example:
      "'Haluan vaihtaa lentoni, koska aikatauluni muuttui.' (I want to change my flight, because my schedule changed.)",
    mistake:
      "Writing a list of disconnected short sentences with no linking words between them.",
  },
  {
    number: 6,
    title: "Vary your vocabulary instead of repeating words",
    explanation:
      "Reusing the same two or three words throughout your response signals a limited vocabulary range. Use synonyms and related expressions where natural.",
    example:
      "Instead of using 'hyvä' (good) five times, vary it with 'mukava', 'miellyttävä', or 'erinomainen' depending on context.",
    mistake:
      "Repeating the same basic adjective or verb in nearly every sentence.",
  },
  {
    number: 7,
    title: "Double-check your case endings before submitting",
    explanation:
      "Finnish case endings (partitive, genitive, illative, and others) are a common source of small errors. A quick review pass focused only on endings catches mistakes you missed while writing.",
    example:
      "'Menen kauppaan' (illative: to the store) vs. the incorrect 'Menen kauppa', which omits the required ending.",
    mistake:
      "Writing the base form of a noun where a case ending is grammatically required.",
  },
  {
    number: 8,
    title: "Keep your verb tense consistent",
    explanation:
      "Switching between past and present tense without reason confuses the reader and signals weaker grammar control. Decide on the timeframe of your response and stay in it unless the content genuinely changes.",
    example:
      "A story about last weekend should stay in past tense throughout: 'Menin... näin... söin...' (I went... I saw... I ate...).",
    mistake:
      "Starting in past tense, then accidentally switching to present tense partway through the same narrative.",
  },
  {
    number: 9,
    title: "Address every sub-question in multi-part prompts",
    explanation:
      "Many YKI prompts contain two or three smaller questions inside one task. Treat each one as a mini-checklist item and confirm you've responded to all of them before finishing.",
    example:
      "A prompt asking you to describe your job, explain a challenge, and suggest an improvement needs all three elements covered.",
    mistake:
      "Writing a long, detailed answer to only the first sub-question and ignoring the rest.",
  },
  {
    number: 10,
    title: "Choose the right register for the situation",
    explanation:
      "Formal tasks (complaints, official requests) need formal vocabulary and structure; informal tasks (messages to friends) allow casual language. Mixing the two within one response looks inconsistent.",
    example:
      "Formal: 'Pyydän teitä korjaamaan tämän ongelman.' Informal: 'Voisitko auttaa mua tän kanssa?'",
    mistake:
      "Using slang or casual contractions in a formal letter, or sounding stiff and overly formal in a casual message.",
  },
  {
    number: 11,
    title: "Add specific details instead of staying vague",
    explanation:
      "Specific details (times, places, reasons, names) make your writing more convincing and naturally push your vocabulary range higher. Vague, generic statements give examiners less to score positively.",
    example:
      "Instead of 'Olen myöhässä' (I'm late), write 'Olen noin 20 minuuttia myöhässä, koska bussi ei tullut ajoissa.'",
    mistake:
      "Relying on short, generic sentences that technically answer the prompt but add no real content.",
  },
  {
    number: 12,
    title: "Proofread for your own recurring error patterns",
    explanation:
      "Most learners repeat the same 2–3 mistake types across different texts. Know your own patterns (a specific case ending, a verb conjugation, word order) and check specifically for them before submitting.",
    example:
      "If you often confuse partitive and genitive, scan your final draft specifically for nouns following numbers or quantities.",
    mistake:
      "Proofreading only for spelling and missing the grammar patterns that consistently cost you points.",
  },
  {
    number: 13,
    title: "Practice with real past YKI-style prompts",
    explanation:
      "Practicing with prompts that mirror real YKI tasks builds familiarity with the expected formats and timing, so the actual exam feels predictable rather than surprising.",
    example:
      "Practice writing a complaint email, a personal message, and an opinion text, since these formats appear regularly.",
    mistake:
      "Practicing only free-form writing that doesn't match any real YKI task type or format.",
  },
  {
    number: 14,
    title: "Time yourself under real exam conditions",
    explanation:
      "Writing well under time pressure is a different skill from writing well with unlimited time. Practice with a timer so the real exam's time limit doesn't catch you off guard.",
    example:
      "If your exam gives 20 minutes per writing task, practice planning, writing, and proofreading within that same window.",
    mistake:
      "Only ever practicing without a timer, then running out of time to proofread during the actual exam.",
  },
  {
    number: 15,
    title: "Get feedback on full responses, not just isolated sentences",
    explanation:
      "Errors often only become visible in the context of a full response — a repeated word, an inconsistent tense, a structural gap. Reviewing complete practice answers catches issues that checking isolated sentences misses.",
    example:
      "Submit a full practice email or message for evaluation, rather than just testing individual grammar rules in isolation.",
    mistake:
      "Only ever drilling grammar exercises and never practicing or reviewing a complete written response.",
  },
];

const faqs = [
  {
    question: "How can I improve YKI writing?",
    answer:
      "The fastest way to improve YKI writing is to practice with real exam-style prompts, get feedback on full responses rather than isolated sentences, and focus on your own recurring error patterns instead of generic grammar review. Pay close attention to task achievement (fully answering the prompt) and coherence (clear structure with linking words), since these criteria carry significant weight in scoring.",
  },
  {
    question: "How long should I study?",
    answer:
      "Study time varies by starting level, but most candidates preparing for the intermediate (level 3) YKI writing benefit from several weeks of focused, regular practice rather than last-minute cramming. Consistent short sessions that include writing full practice responses and reviewing feedback tend to produce faster improvement than occasional long study sessions.",
  },
  {
    question: "What vocabulary should I learn?",
    answer:
      "Prioritize vocabulary connected to common YKI topics: daily life, work, housing, health, services, and everyday problems or requests. Alongside topic vocabulary, learn linking words for coherence ('koska', 'mutta', 'toisaalta', 'lopuksi') and a few formal and informal greeting/closing phrases, since these appear across many different writing tasks.",
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

export default function YkiWritingTipsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://examcoach.ca",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "YKI Writing Tips",
        item: "https://examcoach.ca/finland/yki-writing-tips",
      },
    ],
  };

  return (
    <>
      {/* FAQ Schema (JSON-LD) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Breadcrumb Schema (JSON-LD) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
              15 YKI Writing Tips
            </h1>
            <p className="mt-5 max-w-2xl text-base text-[#64748B] sm:text-lg">
              Fifteen detailed, practical tips to help you write faster and
              score higher on the YKI writing exam in 2026&nbsp;&mdash; each
              with an explanation, an example, and the common mistake to
              avoid.
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
          <section aria-labelledby="overview">
            <h2 id="overview" className="text-2xl font-semibold text-slate-900">
              How to Use These Tips
            </h2>
            <p className="mt-4 text-[#64748B]">
              Each tip below targets one specific habit that consistently
              separates higher-scoring YKI writing responses from
              lower-scoring ones. Work through them in order, or jump
              straight to the ones that match the mistakes you make most
              often.
            </p>
          </section>

          {/* 15 tips */}
          <section aria-labelledby="tips-list" className="mt-12">
            <h2 id="tips-list" className="sr-only">
              15 YKI Writing Tips
            </h2>

            <ol className="mt-2 space-y-8">
              {tips.map((tip) => (
                <li
                  key={tip.number}
                  className="rounded-xl border border-slate-200 p-6 shadow-sm sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-[#2563EB] text-sm font-semibold text-white">
                      {tip.number}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                      {tip.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-[#64748B]">{tip.explanation}</p>

                  <div className="mt-4 rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Example
                    </p>
                    <p className="mt-1 text-sm text-slate-700">
                      {tip.example}
                    </p>
                  </div>

                  <div className="mt-3 rounded-xl bg-red-50/60 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-red-600">
                      Common Mistake
                    </p>
                    <p className="mt-1 text-sm text-slate-700">
                      {tip.mistake}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Mid-page CTA */}
          <section className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm sm:p-10">
            <h2 className="text-xl font-semibold text-slate-900">
              Put these tips into practice right now
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[#64748B]">
              Write a practice response and get instant feedback on
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
                  href="/finland/yki-writing-scoring"
                  className="block rounded-xl border border-slate-200 p-4 text-sm font-medium text-[#2563EB] shadow-sm transition-colors hover:bg-slate-50"
                >
                  How YKI Writing Is Scored →
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
