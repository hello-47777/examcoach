import type { Metadata } from "next";
import Link from "next/link";

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
      "In the YKI writing test, you're often asked to introduce yourself in a letter to a new contact — for example, a future colleague, host family, or pen pal. This task tests your ability to share personal information clearly: your name, age, where you live, your job or studies, your family situation, and your hobbies. Examiners look for accurate basic vocabulary, correct word order, and an appropriate greeting and closing. Even at lower levels, candidates are expected to connect ideas with simple linking words rather than writing isolated sentences. A strong self-introduction also shows personality — mentioning why you're writing helps the letter feel natural rather than like a form.",
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
    title: "Describing Your Hometown or City",
    description:
      "Many YKI tasks ask you to describe the place where you live, often in a letter to someone who has never visited. This topic tests descriptive vocabulary: location, size, atmosphere, services, and things to see or do nearby. Examiners want to see varied adjectives and clear spatial expressions, such as describing what is in the center, what is nearby, and how people get around. It's common to compare your town with somewhere else, so practising comparative structures is useful too. A good answer balances facts (population, location, transport) with personal opinion. Mentioning a specific local event, building, or tradition makes the description memorable rather than generic.",
    vocabulary: [
      "asukasluku – population",
      "sijaitsee – is located",
      "keskustassa – in the center",
      "julkinen liikenne – public transport",
      "viihtyisä – cozy / pleasant",
      "lähellä – nearby",
    ],
    tip: "Use comparative adjectives (isompi, pienempi, rauhallisempi) to contrast your town with another place, and mention at least one concrete landmark or event to avoid a generic answer.",
  },
  {
    number: 3,
    title: "A Typical Day at Work or School",
    description:
      "Describing a typical day is a classic YKI topic because it tests your ability to sequence events in time using everyday verbs. You'll usually need to describe when you wake up, how you travel, what you do at work or school, and how you spend your evening. The challenge is using time expressions naturally — aamulla, sitten, sen jälkeen, illalla — instead of repeating the same connector. Examiners pay attention to verb tense consistency and realistic, specific detail rather than vague statements. A strong response includes small concrete details, such as what you eat for lunch, which make the text feel authentic. Keeping a logical chronological order is essential for clarity.",
    vocabulary: [
      "herään – I wake up",
      "menen töihin/kouluun – I go to work/school",
      "lounastauko – lunch break",
      "sitten – then",
      "illalla – in the evening",
      "nukkumaan – to sleep",
    ],
    tip: "Vary your time connectors (aluksi, sitten, sen jälkeen, lopuksi) instead of repeating 'ja sitten', and stick to present tense for routine actions.",
  },
  {
    number: 4,
    title: "Family and Family Relationships",
    description:
      "Family is a frequent YKI topic, often appearing as a letter introducing your relatives or describing relationships within your household. You may need to talk about family members, their occupations or ages, and the activities you share with them. This topic rewards correct possessive structures (siskoni, isäni, lapseni) and family vocabulary, as well as the ability to express feelings and opinions, such as why you are close to a particular relative. Some advanced-level tasks ask you to reflect on changing family roles across generations, requiring more abstract vocabulary. Keep the description personal and specific — naming relatives and giving one example of a shared activity is stronger than a list of generic facts.",
    vocabulary: [
      "sisarukset – siblings",
      "isovanhemmat – grandparents",
      "läheinen – close (relationship)",
      "perheenjäsen – family member",
      "kasvaa – to grow up",
      "pitää yhteyttä – to keep in touch",
    ],
    tip: "Use possessive suffixes correctly (äitini, veljeni) and add one short anecdote about a family activity to make the text personal rather than a dry list of relatives.",
  },
  {
    number: 5,
    title: "Hobbies and Free Time Activities",
    description:
      "This topic asks you to describe what you do in your free time and why you enjoy it. It's a good opportunity to use hobby-related vocabulary and expressions of frequency (usein, joskus, harvoin) alongside opinion phrases like pidän siitä, koska. Examiners look for specific activities rather than vague statements like 'I like sports' — naming the exact hobby, how often you do it, and with whom adds depth. You might also be asked how a hobby has changed over time or what new hobby you'd like to try, which tests future tense and conditional structures. A well-rounded answer explains both the activity itself and the personal benefit it brings, such as relaxation or social contact.",
    vocabulary: [
      "harrastus – hobby",
      "vapaa-aika – free time",
      "useimmiten – most often",
      "rentoutua – to relax",
      "kuntoilu – exercise / fitness",
      "haluaisin kokeilla – I would like to try",
    ],
    tip: "Name a specific hobby rather than a general category, and explain one concrete reason you enjoy it — this shows richer vocabulary than a simple list of activities.",
  },
  {
    number: 6,
    title: "A Memorable Holiday or Trip",
    description:
      "Describing a past trip or holiday is a common task that tests past tense accuracy, since you must narrate events that already happened. You'll typically need to explain where you went, who you went with, what you did, and how you felt about the experience. Strong answers move beyond a simple itinerary and include one memorable moment or small problem that occurred, since real travel rarely goes perfectly to plan. This topic also offers a natural place to use weather and emotion vocabulary. Watch your past tense forms carefully (matkustin, näin, söin) and keep the narrative in clear time order. Ending with a brief reflection gives the text a natural conclusion.",
    vocabulary: [
      "matkustin – I traveled",
      "näimme – we saw",
      "majoituimme – we stayed (accommodation)",
      "mukava kokemus – a pleasant experience",
      "valitettavasti – unfortunately",
      "suosittelen – I recommend",
    ],
    tip: "Use consistent past tense verb forms throughout (matkustin, näin, söin) and include one small unexpected event to make the story feel real.",
  },
  {
    number: 7,
    title: "Healthy Lifestyle and Wellbeing",
    description:
      "This topic asks you to discuss habits related to diet, exercise, sleep, or stress management, often in the form of advice or personal reflection. You may be asked to describe your own routine or give tips to someone else, which requires recommendation structures like kannattaa, sinun pitäisi, or muista. Vocabulary around food, exercise, and rest is essential, along with simple cause-and-effect expressions explaining why a habit is good or bad for health. Higher-level tasks may ask for an opinion on modern lifestyle problems, such as screen time or stress, requiring more abstract argumentation. A balanced answer mixes practical tips with a short personal example to avoid sounding like a generic list of advice.",
    vocabulary: [
      "terveellinen ruokavalio – healthy diet",
      "liikkua säännöllisesti – to exercise regularly",
      "stressi – stress",
      "riittävä uni – sufficient sleep",
      "hyvinvointi – wellbeing",
      "kannattaa – it's worth (doing)",
    ],
    tip: "Use recommendation structures such as 'kannattaa' and 'sinun pitäisi' when giving advice, and support each tip with one short reason rather than just listing actions.",
  },
  {
    number: 8,
    title: "Environmental Protection and Recycling",
    description:
      "Environmental topics appear regularly in YKI writing, asking candidates to describe personal habits around recycling, energy use, or sustainable choices, or to argue for environmental action. This requires environment-specific vocabulary and opinion-giving phrases such as mielestäni or on tärkeää, että. Because the topic is often abstract, candidates need to structure arguments clearly, giving at least one reason and one example, rather than only general statements like 'recycling is good.' It also helps to mention a concrete local practice, such as Finland's deposit-return bottle system or apartment recycling stations, to ground the answer in real life. Logical paragraph structure — problem, opinion, example, conclusion — is especially valued here.",
    vocabulary: [
      "kierrättää – to recycle",
      "ympäristöystävällinen – environmentally friendly",
      "pullonpalautus – bottle deposit system",
      "säästää energiaa – to save energy",
      "ilmastonmuutos – climate change",
      "mielestäni – in my opinion",
    ],
    tip: "Structure your answer as opinion → reason → example → conclusion, and mention a concrete local detail to avoid a purely abstract response.",
  },
  {
    number: 9,
    title: "Studying in Finland",
    description:
      "This topic is aimed at candidates living or planning to live in Finland, asking them to describe their studies, school system experiences, or language-learning journey. You might write a letter to a friend about starting a course, or describe challenges and successes in learning Finnish. Useful vocabulary includes school and course-related terms, as well as expressions of difficulty and progress, such as alussa oli vaikeaa, mutta nyt. This topic often combines past and present tense, since you compare how things were before with how they are now. A strong answer is specific about the course or subject, rather than speaking generally about 'studying,' and includes a brief reflection on motivation or future plans.",
    vocabulary: [
      "opiskelen – I study",
      "kurssi – course",
      "edistyä – to make progress",
      "vaikeaa/helppoa – difficult/easy",
      "tavoite – goal",
      "valmistua – to graduate",
    ],
    tip: "Contrast past difficulty with present progress (alussa oli vaikeaa, mutta nyt...) to show range in both tense use and vocabulary.",
  },
  {
    number: 10,
    title: "Writing a Job Application",
    description:
      "A simplified job application or covering letter is a common formal-register task in YKI writing. You'll need to introduce yourself professionally, mention relevant experience or skills, and explain why you're interested in the position, using formal vocabulary and polite phrasing rather than casual expressions. Structure matters greatly here: a clear opening stating the purpose, a middle section on qualifications, and a polite closing requesting further contact. Common phrases include haen paikkaa, minulla on kokemusta, and otan mielelläni yhteyttä. Avoid overly casual words you might use with friends, and keep sentences professional. Including one specific skill or experience, rather than vague claims, makes the application more convincing to an examiner.",
    vocabulary: [
      "hakemus – application",
      "työkokemus – work experience",
      "pätevyys – qualification",
      "haen paikkaa – I am applying for the position",
      "suosittelen itseäni – I recommend myself",
      "ystävällisin terveisin – kind regards (formal)",
    ],
    tip: "Keep the register consistently formal from greeting to closing, and mention one specific, concrete skill or experience instead of general claims like 'I am hardworking.'",
  },
  {
    number: 11,
    title: "Making a Complaint About a Product or Service",
    description:
      "Complaint letters test your ability to explain a problem clearly and request a specific solution in a polite but firm tone. You'll usually need to describe what you bought or used, what went wrong, and what outcome you expect, such as a refund, repair, or apology. Key vocabulary includes problem-description verbs and polite request structures like toivon, että and odotan, että. Examiners look for a logical order — situation, problem, request — and an appropriately formal but not aggressive tone. It's important to avoid emotional or rude language even when describing frustration; phrases like olen pettynyt convey dissatisfaction politely. Ending with a clear, specific request makes the letter purposeful and realistic.",
    vocabulary: [
      "valitus – complaint",
      "olen pettynyt – I am disappointed",
      "virheellinen tuote – defective product",
      "hyvitys – compensation/refund",
      "toivon, että – I hope that",
      "odotan vastaustanne – I look forward to your reply",
    ],
    tip: "Keep your tone polite even when frustrated — use phrases like 'olen pettynyt' instead of harsh language — and always end with one clear, specific request.",
  },
  {
    number: 12,
    title: "Inviting a Friend to an Event",
    description:
      "Invitation letters or messages test informal register and the ability to give practical details clearly: what the event is, when and where it takes place, and why the person should come. This topic often includes persuasive language, since you're encouraging someone to attend, using phrases like tule mukaan or se olisi mukavaa. Because it's informal, contractions and casual expressions are appropriate, unlike in formal letters. A well-written invitation answers the practical questions a reader would naturally have — time, place, what to bring — while also conveying enthusiasm. Adding a small personal touch, such as mentioning why this particular event matters to you, makes the invitation feel genuine rather than purely informational.",
    vocabulary: [
      "kutsu – invitation",
      "tapahtuma – event",
      "tule mukaan – come along",
      "ajankohta – the date/time",
      "ottaa mukaan – to bring along",
      "odotan innolla – I'm looking forward to",
    ],
    tip: "Cover the practical basics — time, place, what to bring — early in the message, and use an informal, enthusiastic tone with phrases like 'tule mukaan!'",
  },
  {
    number: 13,
    title: "Giving Advice to a Friend",
    description:
      "In this type of task, a friend has a problem — at work, in a relationship, or with stress, for example — and you must respond with supportive, practical advice. This tests conditional and recommendation structures, such as minä sinun tilanteessasi or kannattaisi, along with empathetic opening phrases acknowledging the friend's feelings before jumping to solutions. A common mistake is offering advice without first showing understanding, which can sound cold; starting with ymmärrän, että tämä on vaikeaa softens the tone. Strong answers give two or three concrete, realistic suggestions rather than one vague one, and close with encouragement. This balance of empathy and practicality is exactly what examiners look for in personal, supportive writing.",
    vocabulary: [
      "neuvo – advice / tip",
      "ymmärrän, että – I understand that",
      "kannattaisi – it would be worth (doing)",
      "minä sinun tilanteessasi – if I were in your situation",
      "rohkaista – to encourage",
      "ota yhteyttä – get in touch",
    ],
    tip: "Open with empathy ('ymmärrän, että tämä on vaikeaa') before giving advice, and offer two or three concrete suggestions rather than a single vague recommendation.",
  },
  {
    number: 14,
    title: "Comparing City Life and Countryside Life",
    description:
      "Comparison tasks ask you to weigh the advantages and disadvantages of two options — commonly city versus countryside living — and often to state a personal preference. This requires comparative structures (rauhallisempi, kalliimpi, lähempänä) and balanced argumentation, mentioning at least one point for each side before concluding. Vocabulary around housing, transport, nature, and lifestyle pace is essential. Examiners value a clear structure: an introduction, a paragraph on each option's pros and cons, and a concluding personal opinion with a reason. Avoid simply listing facts about each place; instead, directly compare them using linking words like kun taas (whereas) and toisaalta (on the other hand) to show contrast clearly.",
    vocabulary: [
      "maaseutu – countryside",
      "kaupunkielämä – city life",
      "rauhallinen – peaceful",
      "palvelut – services / amenities",
      "toisaalta – on the other hand",
      "kun taas – whereas",
    ],
    tip: "Use contrast connectors like 'toisaalta' and 'kun taas' to directly compare the two options, and always finish with a clear personal preference and reason.",
  },
  {
    number: 15,
    title: "Describing a Problem and Proposing a Solution",
    description:
      "This problem-solution format appears across many contexts — a broken appliance, a scheduling conflict, a neighborhood issue — and tests your ability to structure a logical argument. You must clearly state the problem, explain its cause or effect, and then propose one or more realistic solutions, using cause-and-effect language such as tämän takia or siksi. Strong answers avoid jumping straight to a solution without first establishing the problem clearly, since examiners want to see the full reasoning chain. It also helps to briefly acknowledge why the problem matters, which shows deeper understanding rather than a surface-level description. Closing with the proposed solution and its expected benefit gives the text a complete, satisfying structure.",
    vocabulary: [
      "ongelma – problem",
      "ratkaisu – solution",
      "syy – cause / reason",
      "seuraus – consequence",
      "tämän takia / siksi – because of this / therefore",
      "ehdotan – I propose",
    ],
    tip: "Follow a clear problem → cause → solution → benefit structure, and use 'siksi' or 'tämän takia' to make the cause-and-effect logic explicit.",
  },
  {
    number: 16,
    title: "Opinions on Social Media and Technology",
    description:
      "This topic asks for your opinion on a modern issue, such as the effects of social media, smartphones, or technology on daily life. It requires opinion vocabulary (mielestäni, olen sitä mieltä, että) and a balanced approach that considers both benefits and drawbacks before stating your own view. Because the topic is abstract, vague generalizations are a common weakness; stronger answers include a specific example, such as a personal habit or a particular app, to ground the opinion in real experience. Linking words like toisaalta...toisaalta help organize a balanced argument. A clear concluding sentence summarizing your overall stance ties the response together and leaves no doubt about your position.",
    vocabulary: [
      "mielestäni – in my opinion",
      "hyöty – benefit",
      "haitta – disadvantage / harm",
      "riippuvuus – dependency / addiction",
      "tasapaino – balance",
      "olen sitä mieltä, että – I am of the opinion that",
    ],
    tip: "Present both sides with 'toisaalta...toisaalta' before giving your own opinion, and ground your argument with one specific personal example rather than only general claims.",
  },
  {
    number: 17,
    title: "Finnish Weather and the Four Seasons",
    description:
      "Describing the weather or seasons is a practical, everyday topic that builds vocabulary around temperature, light, and seasonal activities — relevant given Finland's dramatic seasonal contrasts. You might be asked to describe your favorite season, explain how weather affects daily life, or compare seasons to each other. This topic offers good practice for descriptive adjectives (kylmä, pimeä, valoisa) and seasonal activity vocabulary, from skiing in winter to swimming in summer. A strong answer goes beyond stating temperatures and explains how the season affects mood, clothing, or activities, connecting weather description to personal experience. Mentioning a specific Finnish seasonal tradition, such as midsummer bonfires or winter darkness, adds authentic local color that examiners appreciate.",
    vocabulary: [
      "sää – weather",
      "pimeä – dark",
      "valoisa – light / bright",
      "lumi – snow",
      "vuodenaika – season",
      "juhannus – midsummer",
    ],
    tip: "Connect weather description to how it affects your mood or routine, and mention a specific Finnish seasonal tradition to make the answer feel authentic rather than generic.",
  },
  {
    number: 18,
    title: "Finnish Culture and Traditions",
    description:
      "This topic tests cultural vocabulary and the ability to explain customs to someone unfamiliar with Finland, often in a letter to a foreign friend. You might describe a holiday like Christmas or Midsummer, a tradition like sauna culture, or everyday customs such as removing shoes indoors. Strong answers don't just list facts but explain the meaning or feeling behind a tradition, using phrases like se on tärkeää, koska. This is also a good opportunity to compare Finnish customs with those in another country, which adds a personal, comparative dimension. Because cultural topics can feel abstract, anchoring the answer in one specific, vivid example — a particular holiday meal or family ritual — makes the writing far more engaging.",
    vocabulary: [
      "perinne – tradition",
      "juhlapäivä – holiday / celebration day",
      "sauna – sauna",
      "tapa – custom",
      "merkitys – meaning / significance",
      "vieras – guest",
    ],
    tip: "Explain the meaning behind a tradition, not just what happens, using 'se on tärkeää, koska...' and anchor your answer in one vivid, specific example.",
  },
  {
    number: 19,
    title: "Future Plans and Personal Goals",
    description:
      "This forward-looking topic asks about your plans for the coming months or years — career, study, travel, or personal development — testing future tense and goal-related vocabulary such as aion, tavoitteenani on, and toivottavasti. A common structure is to state a goal, explain why it matters to you, and describe one concrete step you're taking toward it. Examiners value specificity: 'I want to learn Finnish' is weaker than naming a particular course, exam, or deadline. This topic may also invite reflection on obstacles you expect to face and how you plan to overcome them, which adds depth through cause-and-effect reasoning. A confident, optimistic tone, balanced with realistic detail, tends to make the strongest impression.",
    vocabulary: [
      "aion – I intend to",
      "tavoite – goal",
      "tulevaisuudessa – in the future",
      "saavuttaa – to achieve",
      "haaste – challenge",
      "toivottavasti – hopefully",
    ],
    tip: "Name one specific, measurable goal rather than a vague wish, and describe a concrete step you're already taking toward it to add credibility.",
  },
  {
    number: 20,
    title: "Writing a Thank-You or Apology Letter",
    description:
      "Thank-you and apology letters test your ability to express emotion and social nuance appropriately — gratitude, regret, or reassurance — within a short, personal format. A thank-you letter typically names the specific favor or gift, explains its impact, and closes warmly, using phrases like kiitos paljon and se merkitsi minulle paljon. An apology letter requires acknowledging the mistake clearly, explaining briefly what happened, and proposing how to make things right, with phrases like olen pahoillani and en tarkoittanut. Both formats reward sincerity over generic phrasing — naming the exact reason for thanks or apology makes the letter feel genuine. Tone should stay warm and personal throughout, matching the relationship between writer and reader.",
    vocabulary: [
      "kiitos paljon – thank you very much",
      "olen pahoillani – I am sorry",
      "en tarkoittanut – I didn't mean to",
      "merkitsi paljon – meant a lot",
      "hyvittää – to make up for",
      "ystävällisin terveisin – warm regards",
    ],
    tip: "Name the exact reason for your thanks or apology instead of a vague general statement, and keep the tone warm and sincere throughout.",
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
      "YKI writing tasks usually draw from everyday, practical situations rather than academic essay topics. Expect personal letters (introducing yourself, describing your family, town, or routine), opinion-based texts (technology, environment, lifestyle), and semi-formal or formal writing such as job applications, complaints, and invitations. The exact mix depends on your test level (perustaso, keskitaso, or ylin taso) and the specific exam version, but the 20 topics above cover the large majority of themes that appear regularly.",
    relatedLink: {
      href: "/finland/yki-writing-examples",
      label: "See real YKI writing examples",
    },
  },
  {
    question: "Is YKI writing difficult?",
    answer:
      "YKI writing is manageable with focused practice because it tests practical communication rather than literary or academic writing. The main challenges are usually time pressure, building enough topic-specific vocabulary, and matching the correct register (informal vs. formal) to the task. Difficulty also depends heavily on your target level — perustaso tasks are short and concrete, while ylin taso requires more nuanced argumentation and a wider vocabulary range.",
    relatedLink: {
      href: "/finland/yki-writing-tips",
      label: "Read our full YKI writing tips guide",
    },
  },
  {
    question: "How can I improve my YKI writing score?",
    answer:
      "Improvement comes mainly from structured, topic-based practice rather than general writing. Useful strategies include learning vocabulary in topic clusters (like the 20 above) instead of random word lists, practicing under timed conditions to match real exam pressure, memorizing reliable letter openings and closings for both formal and informal registers, and getting feedback on your drafts, since self-correction alone misses many recurring errors.",
    relatedLink: {
      href: "/finland/yki-writing-scoring",
      label: "Learn how YKI writing is scored",
    },
  },
];

const relatedResources = [
  {
    href: "/finland/yki-writing-examples",
    title: "YKI Writing Examples",
    description:
      "Read real, scored YKI writing samples for the most common topics, with strengths and weaknesses explained.",
  },
  {
    href: "/finland/yki-writing-scoring",
    title: "YKI Writing Scoring",
    description:
      "Understand exactly how YKI writing tasks are graded, from perustaso to ylin taso, and what examiners reward.",
  },
  {
    href: "/finland/yki-writing-tips",
    title: "YKI Writing Tips",
    description:
      "Practical strategies for structure, vocabulary, and timing to help you raise your YKI writing score.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const title = "20 Common YKI Writing Topics (2026 Guide)";
  const description =
    "Master the YKI writing exam with ExamCoach.ai's 2026 guide to the 20 most common YKI writing topics — key vocabulary, writing tips, and structure advice for every level.";
  const path = "/finland/yki-writing-topics";

  return {
    metadataBase: new URL("https://examcoach.ca"),
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "ExamCoach.ai",
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function YkiWritingTopicsPage() {
  const faqSchema = {
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
        name: "YKI Writing Topics",
        item: "https://examcoach.ca/finland/yki-writing-topics",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="font-medium transition-colors hover:text-blue-600">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span>Finland</span>
          <span aria-hidden="true">/</span>
          <span className="font-medium text-gray-900">YKI Writing Topics</span>
        </nav>

        <header className="rounded-3xl bg-gradient-to-b from-blue-50 to-white px-6 py-12 text-center sm:px-10 sm:py-16 sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            ExamCoach.ai · YKI Writing Guide · 2026
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            20 Common YKI Writing Topics
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600 sm:mx-0 sm:text-xl">
            YKI (Yleinen kielitutkinto), the National Certificate of Language
            Proficiency, includes a writing section that tests your ability to
            communicate clearly in real-life situations — from personal
            letters to formal applications — rather than academic essay
            skills. Whether you&apos;re preparing for perustaso, keskitaso, or
            ylin taso, knowing which YKI writing topics recur most often lets
            you prepare targeted vocabulary and structures instead of
            studying blindly. Below are the 20 most common YKI writing topics
            for 2026, each with a description, key vocabulary, and a
            practical writing tip.
          </p>

          <div className="mt-8 flex justify-center sm:justify-start">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:text-lg"
            >
              Try Our Free YKI Writing Checker
            </Link>
          </div>
        </header>

        <section aria-labelledby="topics-heading" className="mt-16 space-y-8">
          <h2 id="topics-heading" className="sr-only">
            The 20 Topics
          </h2>

          {topics.map((topic) => (
            <article
              key={topic.number}
              id={`topic-${topic.number}`}
              className="scroll-mt-24 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-base font-bold text-blue-600">
                  {topic.number}
                </span>
                <h3 className="pt-1 text-xl font-bold text-gray-900 sm:text-2xl">
                  {topic.title}
                </h3>
              </div>

              <p className="mt-5 text-base leading-relaxed text-gray-600">
                {topic.description}
              </p>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Common Vocabulary
                </p>
                <ul className="mt-3 flex flex-wrap gap-2" aria-label="Common vocabulary">
                  {topic.vocabulary.map((word) => (
                    <li
                      key={word}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700"
                    >
                      {word}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-xl border-l-4 border-blue-600 bg-blue-50 p-4">
                <p className="text-sm font-semibold text-blue-900">Writing Tip</p>
                <p className="mt-1 text-sm leading-relaxed text-blue-800 sm:text-base">
                  {topic.tip}
                </p>
              </div>
            </article>
          ))}
        </section>

        <section aria-labelledby="related-heading" className="mt-20">
          <h2
            id="related-heading"
            className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
          >
            Continue Your YKI Writing Prep
          </h2>
          <p className="mt-2 text-base text-gray-600">
            Go deeper on examples, scoring, and exam-day strategy.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {relatedResources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {resource.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600">
                  Read more
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="faq-heading" className="mt-20">
          <h2
            id="faq-heading"
            className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
          >
            Frequently Asked Questions
          </h2>

          <div className="mt-6 divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white shadow-sm">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-gray-900 [&::-webkit-details-marker]:hidden sm:text-lg">
                  {faq.question}
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 shrink-0 text-blue-600 transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <path d="M10 4a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H5a1 1 0 1 1 0-2h4V5a1 1 0 0 1 1-1z" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                  {faq.answer}
                </p>
                {faq.relatedLink && (
                  <Link
                    href={faq.relatedLink.href}
                    className="mt-3 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
                  >
                    {faq.relatedLink.label}
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-1 h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                )}
              </details>
            ))}
          </div>
        </section>

        <section
          aria-label="Call to action"
          className="mt-20 rounded-3xl bg-blue-600 px-6 py-14 text-center sm:px-12 sm:py-16"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to Check Your YKI Writing?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
            Get instant AI feedback on your Finnish writing and estimate your
            YKI level in seconds.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-600 shadow-sm transition-colors duration-200 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 sm:text-lg"
            >
              Try Free YKI Writing Checker
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
