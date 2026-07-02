import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE = "20 Common YKI Writing Topics (2026 Guide)";
const PAGE_DESCRIPTION =
  "Master the YKI writing exam with ExamCoach.ai's 2026 guide to the 20 most common YKI writing topics, each with a description, key vocabulary, and a practical writing tip.";
const PAGE_PATH = "/wiki/guides/topics";
const PAGE_URL = "https://examcoach.ca" + PAGE_PATH;

export async function generateMetadata(): Promise<Metadata> {
  const title = PAGE_TITLE;
  const description = PAGE_DESCRIPTION;
  const path = PAGE_PATH;
  return {
    metadataBase: new URL("https://examcoach.ca"),
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: PAGE_URL,
      siteName: "ExamCoach.ai",
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

type Topic = {
  number: number;
  title: string;
  description: string;
  vocabulary: string[];
  tip: string;
};

const topics: Topic[] = [
  {
    number: 1,
    title: "Introducing Yourself in a Letter",
    description:
      "In the YKI writing test, you're often asked to introduce yourself in a letter to a new contact — for example, a future colleague, host family, or pen pal. The task checks whether you can give your name, age, where you're from, where you live, and a few personal details in a natural, friendly tone.",
    vocabulary: [
      "nimeni on – my name is",
      "olen kotoisin – I am from",
      "asun – I live",
      "harrastan – I do as a hobby",
      "perheeseeni kuuluu – my family includes",
      "ystävällisin terveisin – with kind regards",
    ],
    tip: "Open with a friendly greeting and close with a standard phrase like 'Ystävällisin terveisin'; keep sentences short and connect them with words like 'ja', 'mutta', and 'koska'.",
  },
  {
    number: 2,
    title: "Writing a Complaint About a Product or Service",
    description:
      "You may be asked to write a complaint about a faulty product, a delayed delivery, or poor service. The task tests your ability to describe what happened, explain why it's a problem, and clearly state what you want the company to do — all in a polite but firm formal register.",
    vocabulary: [
      "haluaisin tehdä valituksen – I would like to make a complaint",
      "tilaustani – my order",
      "ei toiminut – did not work",
      "korvaus – compensation",
      "pyydän teitä – I ask you to",
      "odoitettu – expected",
    ],
    tip: "Structure your complaint in three parts: state the problem, give the details (dates, order numbers), then state exactly what you want — a refund, a replacement, or an apology.",
  },
  {
    number: 3,
    title: "Replying to a Friend's Informal Message",
    description:
      "This task asks you to reply to a friend's message about everyday life — an invitation, a piece of news, or a request for help. It checks your ability to use informal language naturally, acknowledge what your friend said, and respond with relevant details of your own.",
    vocabulary: [
      "moi – hi",
      "kiitos viestistä – thanks for the message",
      "totta kai – of course",
      "nähdään – see you",
      "mulla on – I have (colloquial)",
      "tulen mielelläni – I'll gladly come",
    ],
    tip: "Match your friend's informal tone — use colloquial forms like 'mulla' and 'sä' — and make sure you answer every question they asked, not just the first one.",
  },
  {
    number: 4,
    title: "Describing Your Hometown",
    description:
      "You may need to describe the place you come from or where you live now. The task evaluates whether you can write about location, size, what the place is known for, and what you like or dislike about it, using basic descriptive vocabulary and opinions.",
    vocabulary: [
      "kotoisin – from (originally)",
      "pieni kaupunki – small town",
      "sijaitsee – is located",
      "tunnettu – famous/known",
      "minusta – in my opinion",
      "tykkään siitä, koska – I like it because",
    ],
    tip: "Balance facts (where it is, how big) with one or two personal opinions so the text isn't just a list — link them with 'lisäksi' (in addition) or 'mutta' (but).",
  },
  {
    number: 5,
    title: "Writing a Formal Job Application",
    description:
      "A formal job application tests your ability to introduce yourself professionally, describe your relevant experience and skills, explain why you're interested in the position, and close politely. This is one of the most formal YKI tasks and checks register, structure, and formal vocabulary.",
    vocabulary: [
      "haen paikkaa – I apply for the position",
      "työkokemus – work experience",
      "koulutus – education",
      "olen kiinnostunut – I am interested",
      "liitteenä – attached",
      "kunnioituksella – with respect (formal close)",
    ],
    tip: "Use the formal 'te' form throughout, open with 'Hyvä rekrytointipäällikkö' or similar, and always mention that your CV is attached ('Liitteenä ansioluettelo').",
  },
  {
    number: 6,
    title: "Telling About Your Last Holiday",
    description:
      "This topic asks you to write about a trip or holiday you took — where you went, who with, what you did, and what it was like. It checks your ability to use past tense consistently and describe events in chronological order with descriptive detail.",
    vocabulary: [
      "matkustin – I travelled",
      "menimme – we went",
      "nähtävyydet – sights/attractions",
      "sää oli – the weather was",
      "nautimme – we enjoyed",
      "suosittelen – I recommend",
    ],
    tip: "Pick one consistent tense — past — and stick to it; avoid jumping between past and present. Use 'ensin' (first), 'sitten' (then), 'lopuksi' (finally) to order events.",
  },
  {
    number: 7,
    title: "Explaining a Problem at Work or School",
    description:
      "You might be asked to describe a problem you faced at work or school and how you handled it. The task checks whether you can describe a situation clearly, explain the cause, and describe the solution or what you learned from it.",
    vocabulary: [
      "ongelma – problem",
      "ilmantyi – appeared/arose",
      "ratkaisin – I solved",
      "selittää – to explain",
      "opin, että – I learned that",
      "yhteistyö – cooperation",
    ],
    tip: "Use a clear before–during–after structure: describe the situation, then the problem, then the solution, so the reader can follow what changed and why.",
  },
  {
    number: 8,
    title: "Writing an Invitation to an Event",
    description:
      "This task asks you to invite someone to an event — a birthday party, a study group, or a meeting. It checks whether you can give the key details (what, when, where, why) and use the right register depending on whether the invitee is a friend or a formal contact.",
    vocabulary: [
      "kutsun sinut – I invite you",
      "juhlat – party/celebration",
      "aika ja paikka – time and place",
      "olet tervetullut – you are welcome",
      "vastaa viimeistään – reply by at the latest",
      "ilmoittaudu – sign up / let me know",
    ],
    tip: "Make sure all five W-details (what, when, where, why, who) are present and easy to find; bold them in your plan so you don't forget the date or address.",
  },
  {
    number: 9,
    title: "Describing Your Daily Routine",
    description:
      "You may be asked to describe a typical day in your life. The task checks your ability to use the present tense, time expressions, and linking words to describe a sequence of habitual actions from morning to evening in a clear, organised way.",
    vocabulary: [
      "herään – I wake up",
      "aamulla – in the morning",
      "menen töihin – I go to work",
      "illalla – in the evening",
      "yleensä – usually",
      "ennen nukkumaanmenoa – before going to bed",
    ],
    tip: "Use time markers ('aamulla', 'keskipäivällä', 'illalla', 'ennen nukkumaanmenoa') to order your routine so the reader can follow the day chronologically.",
  },
  {
    number: 10,
    title: "Writing a Message About a Change of Plans",
    description:
      "This task asks you to inform someone that plans have changed — a meeting moved, a class cancelled, or you're running late. It checks your ability to explain the change, apologise if needed, and propose a new arrangement clearly and politely.",
    vocabulary: [
      "suunnitelma muuttui – the plan changed",
      "valitettavasti – unfortunately",
      "pyydän anteeksi – I apologise",
      "uusi aika – new time",
      "sovimme uudesta – let's agree on a new one",
      "kerro, milloin – let me know when",
    ],
    tip: "Be direct about the change first, then apologise, then propose the new plan — don't bury the key information (new time/place) at the very end of a long sentence.",
  },
  {
    number: 11,
    title: "Describing Your Family and Home",
    description:
      "You may need to write about your family members and where you live. The task checks whether you can describe people (age, work, relationship to you) and your home (size, location, what you like about it) using basic descriptive and possessive structures.",
    vocabulary: [
      "perheeseeni kuuluu – my family includes",
      "vanhemmat – parents",
      "sisarukset – siblings",
      "asun talossa – I live in a house",
      "kuisti – porch",
      "minun mielestäni – in my opinion",
    ],
    tip: "Don't list family members as a dry inventory — add one detail about each (job, hobby, age) to show vocabulary range and make the text feel natural.",
  },
  {
    number: 12,
    title: "Writing a Thank-You Note",
    description:
      "This topic asks you to write a thank-you message — for a gift, a favour, or hospitality. It checks your ability to express gratitude sincerely, mention what you're thankful for specifically, and use the right level of formality for the recipient.",
    vocabulary: [
      "kiitos paljon – thank you very much",
      "arvostan – I appreciate",
      "lahja – gift",
      "vieraanvaraisuus – hospitality",
      "olipa mukava – it was nice",
      "toivottavasti nähdään pian – hope to see you soon",
    ],
    tip: "Be specific about what you're thanking the person for — naming the actual gift or favour shows genuine appreciation and pushes your vocabulary higher than a generic 'kiitos kaikesta'.",
  },
  {
    number: 13,
    title: "Sharing Your Opinion on a Public Issue",
    description:
      "You may be asked to give your opinion on a public or community issue — for example, public transport, recycling, or local services. The task checks whether you can state a clear opinion, give at least one reason, and acknowledge an opposing view before restating your position.",
    vocabulary: [
      "minun mielestäni – in my opinion",
      "kannatan – I support",
      "toisaalta – on the other hand",
      "syynä on – the reason is",
      "parantaisi – would improve",
      "vaikka – although",
    ],
    tip: "Always include a 'toisaalta' (on the other hand) clause acknowledging the opposite view — examiners reward balanced argument over one-sided opinion.",
  },
  {
    number: 14,
    title: "Writing About Your Studies or Work",
    description:
      "This topic asks you to describe what you study or what your job involves. The task checks your ability to describe a routine, explain responsibilities, and express an opinion about your studies or work using relevant vocabulary and the present tense.",
    vocabulary: [
      "opiskelen – I study",
      "alan – field/profession",
      "vastuullani on – I am responsible for",
      "tykkään työstäni – I like my job",
      "haastava – challenging",
      "tavoitteeni on – my goal is",
    ],
    tip: "Add one specific detail (a project, a class, a colleague) rather than describing your job in vague general terms — specific detail raises vocabulary and task achievement scores.",
  },
  {
    number: 15,
    title: "Booking or Cancelling an Appointment",
    description:
      "You may need to write a message to book, reschedule, or cancel an appointment — with a doctor, a hairdresser, or an official. The task checks your ability to state dates and times clearly, explain the reason, and confirm the new arrangement politely.",
    vocabulary: [
      "haluaisin varata ajan – I would like to book an appointment",
      "perua – to cancel",
      "siirtää – to reschedule",
      "sopisiko – would it suit",
      "uusi varaus – new booking",
      "pahoittelut – apologies",
    ],
    tip: "Always write the date and time in full ('maanantaina 15. tammikuuta klo 14') rather than abbreviating, to avoid ambiguity and to demonstrate clear written communication.",
  },
  {
    number: 16,
    title: "Asking for Information About a Course",
    description:
      "This task asks you to write to a school or training provider asking about a course — schedule, price, level, or prerequisites. It checks your ability to ask clear questions in a formal register and structure a request logically.",
    vocabulary: [
      "haluaisin tiedustella – I would like to enquire",
      "kurssin aikataulu – course schedule",
      "maksu – payment/fee",
      "edellytykset – prerequisites",
      "ilmoittautuminen – registration",
      "olisin kiitollinen – I would be grateful",
    ],
    tip: "List your questions as separate short questions rather than one long run-on sentence — examiners reward clear, scannable structure in request emails.",
  },
  {
    number: 17,
    title: "Writing About Your Free Time and Hobbies",
    description:
      "You may be asked to describe how you spend your free time and what hobbies you enjoy. The task checks your ability to use present tense, express likes and dislikes, and add reasons or details that make the description feel personal rather than generic.",
    vocabulary: [
      "vapaa-aika – free time",
      "harrastan – I do as a hobby",
      "tykkään – I like",
      "rentouttaa – it relaxes",
      "viikonloppuisin – on weekends",
      "usein – often",
    ],
    tip: "Explain why you enjoy each hobby ('rentouttaa', 'pitää mielen virkeänä') — adding a reason doubles your sentence count and demonstrates linking-word use.",
  },
  {
    number: 18,
    title: "Comparing Two Options",
    description:
      "This task asks you to compare two options — for example, living in a city versus the countryside, or studying alone versus in a group. It checks your ability to describe both options, weigh pros and cons, and reach a clear conclusion.",
    vocabulary: [
      "toisaalta – on the other hand",
      "edut – advantages",
      "haitat – disadvantages",
      "verrattuna – compared to",
      "valitsisin – I would choose",
      "lyhyesti sanottuna – in short",
    ],
    tip: "Use a clear 'toisaalta... toisaalta...' structure for each comparison, then end with one sentence stating which option you'd choose and why — a missing conclusion is a common point-loss.",
  },
  {
    number: 19,
    title: "Writing a Message to a Neighbour",
    description:
      "You might be asked to write a message to a neighbour — about noise, a shared space, or an upcoming event. The task checks your ability to use a semi-formal register (polite but not stiff), explain a situation tactfully, and propose a reasonable solution.",
    vocabulary: [
      "naapurina – as a neighbour",
      "häiriö – disturbance",
      "pyydän anteeksi – I apologise",
      "ehtotan, että – I suggest that",
      "yhteinen – shared",
      "kiitos ymmärryksestä – thanks for understanding",
    ],
    tip: "Stay polite even if the topic is a complaint — open with a friendly greeting, state the issue neutrally, and end with 'kiitos ymmärryksestä' to keep the tone neighbourly.",
  },
  {
    number: 20,
    title: "Reflecting on a Past Experience",
    description:
      "This topic asks you to write about a meaningful past experience — a challenge you overcame, a person who influenced you, or a decision that mattered. It checks your ability to use past tenses, narrate events clearly, and reflect on what the experience taught you.",
    vocabulary: [
      "muistan – I remember",
      "silloin – at that time",
      "opin, että – I learned that",
      "tärkeä kokemus – important experience",
      "vaikutti minuun – it affected me",
      "nykyään – nowadays",
    ],
    tip: "End with a reflective sentence that connects the past experience to your present — examiners reward texts that show narrative purpose rather than just a list of past events.",
  },
];

type FaqItem = {
  question: string;
  answer: string;
  relatedLink?: { href: string; label: string };
};

const faqs: FaqItem[] = [
  {
    question: "What topics appear in YKI writing?",
    answer:
      "YKI writing tasks usually draw from everyday, practical situations — introducing yourself, complaining about a service, inviting someone, describing your routine, or giving an opinion on a community issue. The 20 topics above cover the most common task types, so practising each one builds familiarity with the formats and vocabulary the exam most often rewards.",
    relatedLink: { href: "/wiki/templates/examples", label: "See real YKI writing examples" },
  },
  {
    question: "Is YKI writing difficult?",
    answer:
      "YKI writing is challenging mainly because it combines several skills at once — vocabulary, grammar, task achievement, and coherence — within a strict time limit. Candidates who struggle usually do so because they under-answer the prompt or run out of time, not because the language itself is impossibly hard. Practising full responses under timed conditions is the single most effective way to lower the difficulty.",
    relatedLink: { href: "/wiki/guides/tips", label: "Read our full YKI writing tips guide" },
  },
  {
    question: "How can I improve my YKI writing score?",
    answer:
      "The fastest gains come from three habits: practising with real YKI-style prompts, getting feedback on full responses (not just isolated sentences), and targeting your own recurring error patterns. Pay special attention to task achievement — fully answering every part of the prompt — since this criterion often determines whether you reach level 3 or stay at level 2.",
    relatedLink: { href: "/wiki/scoring/yki-b1-guide", label: "Learn how YKI writing is scored" },
  },
];

const relatedResources = [
  {
    href: "/wiki/templates/examples",
    title: "YKI Writing Examples",
    description:
      "Read real, scored YKI writing samples with examiner-style feedback, so you can see exactly what a strong and a weak response look like before you write your own.",
  },
  {
    href: "/wiki/scoring/yki-b1-guide",
    title: "YKI Writing Scoring",
    description:
      "Understand exactly how YKI writing tasks are graded across the four criteria — task achievement, coherence, vocabulary, and grammar — and what level you need for each band.",
  },
  {
    href: "/wiki/guides/tips",
    title: "YKI Writing Tips",
    description:
      "Practical strategies for structure, vocabulary, and timing, each with an explanation, an example, and the common mistake that costs candidates the most points.",
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

export default function YkiWritingTopicsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://examcoach.ca" },
      { "@type": "ListItem", position: 2, name: "YKI Writing Topics", item: "https://examcoach.ca/wiki/guides/topics" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="min-h-screen bg-white text-slate-900">
        <header className="border-b border-slate-100 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-blue-100">Finland · YKI Writing</p>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              20 Common YKI Writing Topics
            </h1>
            <p className="mt-5 max-w-2xl text-base text-blue-100 sm:text-lg">
              A complete 2026 guide to the 20 most common YKI writing topics&nbsp;&mdash; each with a description, key
              vocabulary, and a practical writing tip so you can prepare efficiently.
            </p>
          </div>
        </header>

        <article className="mx-auto max-w-4xl px-6 py-16">
          <section aria-labelledby="topics-list" className="mt-2">
            <h2 id="topics-list" className="sr-only">20 Common YKI Writing Topics</h2>
            <ol className="space-y-8">
              {topics.map((topic) => (
                <li
                  key={topic.number}
                  className="rounded-xl border border-slate-200 p-6 shadow-sm sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#2563EB] text-sm font-semibold text-white">
                      {topic.number}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">{topic.title}</h3>
                  </div>
                  <p className="mt-4 text-[#64748B]">{topic.description}</p>
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Key vocabulary</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {topic.vocabulary.map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 rounded-xl border-l-4 border-[#2563EB] bg-blue-50/60 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#2563EB]">Writing Tip</p>
                    <p className="mt-1 text-sm text-slate-700">{topic.tip}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="related-resources" className="mt-16">
            <h2 id="related-resources" className="text-2xl font-semibold text-slate-900">
              Continue Your YKI Writing Prep
            </h2>
            <p className="mt-3 text-[#64748B]">
              Once you know the topics, deepen your preparation with these connected guides.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {relatedResources.map((resource) => (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className="flex h-full flex-col rounded-xl border border-slate-200 p-5 shadow-sm transition-colors hover:border-[#2563EB] hover:bg-slate-50"
                  >
                    <span className="text-sm font-semibold text-slate-900">{resource.title}</span>
                    <span className="mt-2 text-sm text-[#64748B]">{resource.description}</span>
                    <span className="mt-4 text-sm font-medium text-[#2563EB]">Read more &rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="faq" className="mt-16">
            <h2 id="faq" className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
            <div className="mt-6 divide-y divide-slate-100 rounded-xl border border-slate-200 shadow-sm">
              {faqs.map((faq) => (
                <details key={faq.question} className="group p-6">
                  <summary className="cursor-pointer list-none text-base font-medium text-slate-900 marker:content-none">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-[#64748B]">{faq.answer}</p>
                  {faq.relatedLink ? (
                    <Link
                      href={faq.relatedLink.href}
                      className="mt-3 inline-block text-sm font-medium text-[#2563EB] hover:underline"
                    >
                      {faq.relatedLink.label} &rarr;
                    </Link>
                  ) : null}
                </details>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-xl bg-[#2563EB] p-8 text-center shadow-sm sm:p-10">
            <h2 className="text-xl font-semibold text-white">Practice these topics with instant feedback</h2>
            <p className="mx-auto mt-3 max-w-xl text-blue-100">
              Write a practice response to any YKI topic and get instant feedback on grammar, vocabulary, task
              achievement, and coherence&nbsp;&mdash; for free.
            </p>
            <a
              href="/"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#2563EB] shadow-sm transition-colors hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563EB]"
            >
              Try Our Free YKI Writing Checker
            </a>
          </section>
        </article>
      </main>
    </>
  );
}
