import type { Metadata } from "next";

const PAGE_TITLE = "How YKI Writing Is Scored (2026 Guide)";
const PAGE_DESCRIPTION =
  "Learn exactly how YKI writing is scored in 2026: grammar, vocabulary, task achievement, and coherence, with score tables, weak vs. strong answer examples, and the most common mistakes that cost points.";
const PAGE_URL = "https://examcoach.ca/wiki/scoring/yki-b1-guide";

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
        name: "YKI Writing Scoring",
        item: "https://examcoach.ca/wiki/scoring/yki-b1-guide",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-white text-slate-900">
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

        <article className="mx-auto max-w-5xl px-6 py-16">
          <section aria-labelledby="overview">
            <h2 id="overview" className="text-2xl font-semibold text-slate-900">
              How YKI Writing Scoring Works
            </h2>
            <p className="mt-4 text-[#64748B]">
              YKI writing is not scored on a single &quot;right or wrong&quot;
              basis. Instead, examiners rate your response across four
              criteria&nbsp;&mdash; task achievement, coherence, vocabulary,
              and grammar&nbsp;&mdash; and combine them into one overall
              writing level on the six-point YKI scale.
            </p>
          </section>

          <section aria-labelledby="criteria-table" className="mt-12">
            <h2 id="criteria-table" className="text-2xl font-semibold text-slate-900">
              The Four YKI Writing Criteria
            </h2>
            <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-semibold">Criterion</th>
                    <th scope="col" className="px-5 py-3 font-semibold">What It Measures</th>
                    <th scope="col" className="px-5 py-3 font-semibold">Typical Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-5 py-4 font-medium text-slate-900">Task Achievement</td>
                    <td className="px-5 py-4 text-[#64748B]">Whether you fully answer the prompt, cover all required points, and stay within the expected format and length.</td>
                    <td className="px-5 py-4 text-[#64748B]">High</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium text-slate-900">Coherence &amp; Organization</td>
                    <td className="px-5 py-4 text-[#64748B]">Logical flow, paragraphing, and use of linking words to connect ideas clearly.</td>
                    <td className="px-5 py-4 text-[#64748B]">High</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium text-slate-900">Vocabulary</td>
                    <td className="px-5 py-4 text-[#64748B]">Range, precision, and appropriateness of word choice for the topic and register.</td>
                    <td className="px-5 py-4 text-[#64748B]">Medium</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium text-slate-900">Grammar</td>
                    <td className="px-5 py-4 text-[#64748B]">Accuracy and control of sentence structure, verb forms, and case endings.</td>
                    <td className="px-5 py-4 text-[#64748B]">Medium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

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

          <nav aria-labelledby="related-guides" className="mt-16">
            <h2 id="related-guides" className="text-xl font-semibold text-slate-900">
              Related YKI Writing Guides
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              <li>
                <a href="/wiki/guides/topics" className="block rounded-xl border border-slate-200 p-4 text-sm font-medium text-[#2563EB] shadow-sm transition-colors hover:bg-slate-50">
                  YKI Writing Topics →
                </a>
              </li>
              <li>
                <a href="/wiki/templates/examples" className="block rounded-xl border border-slate-200 p-4 text-sm font-medium text-[#2563EB] shadow-sm transition-colors hover:bg-slate-50">
                  YKI Writing Examples →
                </a>
              </li>
              <li>
                <a href="/wiki/guides/tips" className="block rounded-xl border border-slate-200 p-4 text-sm font-medium text-[#2563EB] shadow-sm transition-colors hover:bg-slate-50">
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
