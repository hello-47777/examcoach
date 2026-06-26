import type { Metadata } from "next";
import Link from "next/link";

type Example = {
  number: number;
  topic: string;
  sampleAnswer: string;
  vocabulary: string[];
  whyItWorks: string;
};

const examples: Example[] = [
  {
    number: 1,
    topic: "Informal Letter: Introducing Yourself to a New Pen Pal",
    sampleAnswer:
      "Hei Maria!\n\nKiitos viestistäsi, oli kiva kuulla sinusta. Nimeni on Anna ja olen 28-vuotias. Asun Tampereella ja työskentelen sairaalassa hoitajana. Minulla on yksi sisko ja kaksi koiraa. Vapaa-ajalla harrastan lukemista ja juoksemista. Pidän myös matkustamisesta, ja viime kesänä kävin Ruotsissa.\n\nKerro lisää itsestäsi! Missä sinä asut ja mitä teet työksesi?\n\nYstävällisin terveisin,\nAnna",
    vocabulary: [
      "kiitos viestistäsi – thanks for your message",
      "työskentelen – I work",
      "vapaa-ajalla – in my free time",
      "harrastan – I do as a hobby",
      "kerro lisää – tell me more",
      "ystävällisin terveisin – kind regards",
    ],
    whyItWorks:
      "This answer opens with a personal thank-you, follows a clear self-introduction order (name, age, city, job, family, hobbies), and ends by asking the reader a question — which keeps the letter feeling like a real conversation rather than a list of facts. The register stays consistently informal throughout.",
  },
  {
    number: 2,
    topic: "Describing Your Hometown to a Friend",
    sampleAnswer:
      "Hei Tomi!\n\nHaluan kertoa sinulle Jyväskylästä, missä asun. Kaupunki on keskikokoinen ja sijaitsee kauniin järven rannalla. Keskustassa on paljon kahviloita ja kauppoja, ja kesällä rannalla on aina mukavaa. Julkinen liikenne toimii hyvin, niin että pääsen kaikkialle bussilla.\n\nParasta Jyväskylässä on luonto – täältä pääsee nopeasti metsään tai järven rantaan. Toivottavasti pääset joskus käymään!\n\nTerveisin,\nLiisa",
    vocabulary: [
      "keskikokoinen – medium-sized",
      "sijaitsee – is located",
      "järven rannalla – on the lake shore",
      "julkinen liikenne – public transport",
      "luonto – nature",
      "pääsee käymään – can come visit",
    ],
    whyItWorks:
      "The writer balances factual description (size, location, transport) with a personal opinion ('parasta on luonto'), and closes with a warm invitation rather than stopping after the facts. Spatial vocabulary like 'keskustassa' and 'rannalla' makes the description concrete instead of vague.",
  },
  {
    number: 3,
    topic: "Describing a Typical Day at Work",
    sampleAnswer:
      "Tyypillinen työpäiväni alkaa aamulla kello seitsemän. Herään, syön aamupalaa ja lähden töihin pyörällä. Työpäivä alkaa kahdeksalta ja kestää viiteen asti. Töissä vastaan asiakkaiden puheluihin ja kirjoitan raportteja. Lounastauolla syön usein kollegoiden kanssa.\n\nKun pääsen kotiin, käyn lenkillä ja valmistan illallisen. Iltaisin luen kirjaa tai katson televisiota. Menen nukkumaan noin kello yksitoista.",
    vocabulary: [
      "tyypillinen työpäivä – a typical workday",
      "lähden töihin – I leave for work",
      "vastaan puheluihin – I answer calls",
      "lounastauko – lunch break",
      "käyn lenkillä – I go for a run",
      "menen nukkumaan – I go to sleep",
    ],
    whyItWorks:
      "The text follows a clear morning-to-evening order using simple present-tense verbs, and each sentence adds one concrete action rather than repeating the same structure. Specific details — cycling to work, answering calls, going for a run — make the routine feel real instead of generic.",
  },
  {
    number: 4,
    topic: "Telling a Friend About Your Family",
    sampleAnswer:
      "Hei Sara!\n\nKerron sinulle perheestäni. Meitä on neljä: äiti, isä, pikkuveljeni ja minä. Isäni on opettaja ja äitini työskentelee sairaalassa. Veljeni on vielä koulussa, ja hän on 15-vuotias.\n\nPerheeni kanssa vietämme paljon aikaa yhdessä, erityisesti viikonloppuisin. Käymme usein mökillä kesäisin. Olen läheinen erityisesti äitini kanssa, koska puhumme joka päivä puhelimessa.\n\nKerro myös sinun perheestäsi!\n\nTerveisin,\nEeva",
    vocabulary: [
      "pikkuveljeni – my younger brother",
      "työskentelee – works",
      "vietämme aikaa yhdessä – we spend time together",
      "mökki – summer cottage",
      "läheinen – close (relationship)",
      "puhelimessa – on the phone",
    ],
    whyItWorks:
      "Possessive forms (isäni, äitini, veljeni) are used correctly throughout, and the writer adds one specific reason for closeness with her mother instead of only listing family members. Ending with a direct question to the reader keeps the informal letter interactive.",
  },
  {
    number: 5,
    topic: "Writing About Your Hobbies and Free Time",
    sampleAnswer:
      "Vapaa-ajallani harrastan monia asioita. Useimmiten pelaan jalkapalloa kaverien kanssa kahdesti viikossa. Pidän myös valokuvauksesta, ja otan kuvia luonnosta kävellessäni.\n\nViime vuonna aloin opiskella myös kitaransoittoa. Aluksi se oli vaikeaa, mutta nyt osaan soittaa muutaman kappaleen. Haluaisin oppia lisää kappaleita tulevaisuudessa.\n\nHarrastukseni auttavat minua rentoutumaan stressaavan työpäivän jälkeen.",
    vocabulary: [
      "useimmiten – most often",
      "valokuvaus – photography",
      "aloin opiskella – I started learning",
      "aluksi – at first",
      "rentoutua – to relax",
      "stressaava – stressful",
    ],
    whyItWorks:
      "Rather than naming hobbies in a list, the writer gives frequency (kahdesti viikossa), a learning journey (aluksi vaikeaa, mutta nyt), and a personal benefit (rentoutuminen) — three layers that examiners reward far more than a flat list of activities.",
  },
  {
    number: 6,
    topic: "Describing a Recent Holiday Trip",
    sampleAnswer:
      "Viime kesänä matkustin Italiaan ystäväni kanssa. Lensimme Roomaan ja vietimme viikon kaupungissa. Näimme paljon historiallisia paikkoja, kuten Colosseumin ja Vatikaanin.\n\nSää oli erittäin kuuma, ja yhtenä päivänä eksyimme pieniin kujille – se oli sekä jännittävää että hieman pelottavaa! Onneksi löysimme tien takaisin hotellille paikallisen avulla.\n\nMatka oli unohtumaton, ja suosittelen Roomaa kaikille, jotka pitävät historiasta.",
    vocabulary: [
      "matkustin – I traveled",
      "vietimme viikon – we spent a week",
      "historiallinen paikka – historical site",
      "eksyimme – we got lost",
      "unohtumaton – unforgettable",
      "suosittelen – I recommend",
    ],
    whyItWorks:
      "Consistent past-tense narration (matkustin, näimme, eksyimme) carries the story, and the small mishap of getting lost makes the account feel authentic rather than a flat itinerary. A closing recommendation gives the text a natural, opinion-based ending.",
  },
  {
    number: 7,
    topic: "Giving a Friend Health and Lifestyle Advice",
    sampleAnswer:
      "Hei Jussi!\n\nKuulin, että olet ollut väsynyt viime aikoina. Ymmärrän, että työ on stressaavaa juuri nyt. Tässä muutama vinkki, jotka ovat auttaneet minua.\n\nKannattaisi nukkua vähintään seitsemän tuntia yössä ja liikkua säännöllisesti, esimerkiksi kävelemällä töihin. Minusta on myös tärkeää syödä säännöllisesti, eikä jättää aterioita väliin.\n\nToivottavasti nämä vinkit auttavat! Ota yhteyttä, jos haluat jutella lisää.\n\nTerveisin,\nMatti",
    vocabulary: [
      "väsynyt – tired",
      "ymmärrän, että – I understand that",
      "kannattaisi – it would be worth (doing)",
      "liikkua säännöllisesti – to exercise regularly",
      "jättää aterioita väliin – to skip meals",
      "ota yhteyttä – get in touch",
    ],
    whyItWorks:
      "The letter opens with empathy ('ymmärrän, että...') before giving advice, which keeps the tone supportive rather than preachy. Two concrete, realistic suggestions are offered instead of one vague tip, and the closing invites further conversation.",
  },
  {
    number: 8,
    topic: "Writing About Recycling and the Environment",
    sampleAnswer:
      "Mielestäni kierrättäminen on erittäin tärkeää nykypäivänä. Kotonani lajittelemme roskat aina muoviin, paperiin ja biojätteeseen. Vien myös pullot ja tölkit kauppaan pullonpalautukseen.\n\nToisaalta moni ihminen ei vielä kierrätä tarpeeksi, koska se tuntuu vaivalta. Mielestäni kunnat voisivat tehdä kierrättämisestä helpompaa esimerkiksi lisäämällä keräyspisteitä.\n\nPienetkin teot, kuten energian säästäminen, auttavat ympäristöä pitkällä aikavälillä.",
    vocabulary: [
      "kierrättäminen – recycling",
      "lajittelemme roskat – we sort the trash",
      "pullonpalautus – bottle deposit return",
      "toisaalta – on the other hand",
      "keräyspiste – collection point",
      "säästää energiaa – to save energy",
    ],
    whyItWorks:
      "The answer follows opinion → personal example → counterpoint → suggestion → conclusion, giving it a clear argumentative structure rather than a list of facts. Mentioning Finland's bottle deposit system grounds an otherwise abstract topic in real, local detail.",
  },
  {
    number: 9,
    topic: "A Letter About Studying Finnish",
    sampleAnswer:
      "Hei Anna!\n\nHaluan kertoa, että opiskelen suomea nyt kolmatta vuotta. Alussa kielioppi oli erittäin vaikeaa, erityisesti sijamuodot. Nyt ymmärrän paljon paremmin, ja pystyn jo keskustelemaan arkipäivän asioista.\n\nKäyn kurssilla kahdesti viikossa ja yritän myös puhua suomea töissä. Tavoitteenani on saavuttaa keskitason taitotaso tänä vuonna.\n\nMiten sinun kieliopintosi etenevät?\n\nTerveisin,\nKarim",
    vocabulary: [
      "opiskelen – I study",
      "kielioppi – grammar",
      "sijamuoto – case form (grammar)",
      "tavoitteenani on – my goal is",
      "taitotaso – proficiency level",
      "edistyä – to progress",
    ],
    whyItWorks:
      "The writer contrasts past difficulty with present progress (alussa vaikeaa, mutta nyt), which shows tense range, and states a specific, measurable goal (keskitason taitotaso) rather than a vague wish. The closing question keeps the letter conversational.",
  },
  {
    number: 10,
    topic: "A Formal Job Application for a Customer Service Position",
    sampleAnswer:
      "Hyvä vastaanottaja,\n\nHaen ilmoittamaanne asiakaspalvelijan paikkaa. Minulla on kolmen vuoden kokemus asiakaspalvelusta ravintola-alalla, ja osaan hyvin suomea, englantia ja vähän ruotsia.\n\nOlen täsmällinen ja pidän asiakkaiden auttamisesta. Uskon, että taitoni soveltuvat hyvin tähän tehtävään.\n\nLiitän mukaan CV:ni. Vastaan mielelläni lisäkysymyksiin.\n\nYstävällisin terveisin,\nHanna Korhonen",
    vocabulary: [
      "hyvä vastaanottaja – dear recipient (formal opening)",
      "haen paikkaa – I am applying for the position",
      "kokemus – experience",
      "täsmällinen – punctual / precise",
      "soveltuvat – are suitable",
      "liitän mukaan – I have attached",
    ],
    whyItWorks:
      "The register stays formal from greeting to closing, and the writer names a specific, concrete skill — three years of customer service experience — instead of a vague claim like 'I am hardworking.' The structure (purpose, qualifications, closing) matches what examiners expect from a formal application.",
  },
  {
    number: 11,
    topic: "A Complaint Letter About a Faulty Product",
    sampleAnswer:
      "Hyvä asiakaspalvelu,\n\nOstin viime viikolla pölynimurin kaupastanne, mutta laite lakkasi toimimasta kolmannella käyttökerralla. Olen erittäin pettynyt, koska tuote oli melko kallis.\n\nToivon, että voitte korjata laitteen tai vaihtaa sen uuteen. Liitän mukaan ostokuitin.\n\nOdotan vastaustanne mahdollisimman pian.\n\nYstävällisin terveisin,\nPekka Virtanen",
    vocabulary: [
      "lakkasi toimimasta – stopped working",
      "olen pettynyt – I am disappointed",
      "toivon, että – I hope that",
      "vaihtaa uuteen – to exchange for a new one",
      "ostokuitti – purchase receipt",
      "odotan vastaustanne – I look forward to your reply",
    ],
    whyItWorks:
      "The complaint follows situation → problem → request, and the tone stays polite even while expressing disappointment ('olen pettynyt' rather than harsher language). A single, clear request — repair or replace — makes the letter purposeful rather than just venting frustration.",
  },
  {
    number: 12,
    topic: "An Invitation to a Birthday Party",
    sampleAnswer:
      "Hei kaikki!\n\nVietän syntymäpäivääni lauantaina 14. kesäkuuta klo 18 alkaen kotonani. Tulkaa mukaan juhlimaan!\n\nTarjolla on ruokaa ja kakkua, niin teidän ei tarvitse tuoda mitään muuta kuin hyvän fiiliksen. Ilmoittakaa minulle viikon sisällä, tuletteko paikalle.\n\nOdotan innolla näkeväni teidät kaikki!\n\nTerveisin,\nNiina",
    vocabulary: [
      "vietän syntymäpäivääni – I am celebrating my birthday",
      "tulkaa mukaan – come along",
      "tarjolla on – available / on offer",
      "ilmoittakaa – let me know",
      "odotan innolla – I'm looking forward to",
      "näkeväni – seeing",
    ],
    whyItWorks:
      "The message answers the practical questions a guest needs — date, time, place, what to bring — within the first two sentences, then adds enthusiasm and a clear RSVP request. The informal tone ('tulkaa mukaan', 'hyvä fiilis') matches a casual party invitation.",
  },
  {
    number: 13,
    topic: "Giving Advice to a Stressed Friend Before an Exam",
    sampleAnswer:
      "Hei Outi!\n\nYmmärrän, että koe huolestuttaa sinua paljon. Se on aivan normaalia, mutta haluan antaa muutaman vinkin.\n\nYritä jakaa opiskelu pieniin osiin sen sijaan, että opiskelet kaiken kerralla. Muista myös nukkua hyvin kokeen edellä, koska väsyneenä on vaikeampi keskittyä.\n\nUskon, että pärjäät hyvin, koska olet valmistautunut huolellisesti!\n\nTerveisin,\nLaura",
    vocabulary: [
      "huolestuttaa – to worry (someone)",
      "jakaa pieniin osiin – to break into small parts",
      "sen sijaan, että – instead of",
      "keskittyä – to concentrate",
      "pärjäät hyvin – you'll do well",
      "valmistautunut – prepared",
    ],
    whyItWorks:
      "The letter validates the friend's feelings first ('se on aivan normaalia') before offering practical study tips, which keeps the advice supportive rather than blunt. Ending with encouragement and a specific reason ('koska olet valmistautunut huolellisesti') makes the closing feel genuine.",
  },
  {
    number: 14,
    topic: "Comparing City Life and Countryside Life",
    sampleAnswer:
      "Kaupunki- ja maaseutuelämässä on molemmissa hyvät ja huonot puolensa. Kaupungissa palvelut, kuten kaupat ja julkinen liikenne, ovat lähellä, mutta elämä on usein kiireisempää ja kalliimpaa.\n\nMaaseudulla taas on rauhallisempaa ja luontoa on enemmän, mutta palvelut voivat olla kauempana, ja autoa tarvitaan useammin.\n\nItse pidän enemmän maaseudusta, koska arvostan rauhaa ja luontoa enemmän kuin kaupungin vilskettä.",
    vocabulary: [
      "molemmissa – in both",
      "kiireinen – busy / hectic",
      "rauhallinen – peaceful",
      "kauempana – farther away",
      "arvostan – I value",
      "vilske – bustle",
    ],
    whyItWorks:
      "The contrast connector 'taas' clearly separates the two sides, and each side gets one advantage and one disadvantage rather than an unbalanced list. The closing personal opinion with a reason ('koska arvostan...') gives the comparison a confident conclusion.",
  },
  {
    number: 15,
    topic: "A Thank-You Note After Visiting a Friend's Family",
    sampleAnswer:
      "Hei Liisa ja perhe!\n\nKiitos paljon viikonlopusta luonanne! Oli mukavaa tutustua perheeseesi paremmin, ja ruoka oli erittäin hyvää.\n\nErityisesti pidin saunaillasta – se oli rentouttava kokemus pitkän viikon jälkeen. Toivottavasti pääsemme näkemään pian uudelleen, ehkä omalla puolellani seuraavaksi.\n\nKiitos vielä kerran vieraanvaraisuudestanne!\n\nTerveisin,\nSami",
    vocabulary: [
      "kiitos paljon – thank you very much",
      "tutustua – to get to know",
      "rentouttava – relaxing",
      "toivottavasti – hopefully",
      "vieraanvaraisuus – hospitality",
      "uudelleen – again",
    ],
    whyItWorks:
      "The note names specific moments — the sauna evening, the food — rather than a generic 'thank you for everything,' which makes the gratitude feel genuine. A warm closing and an open invitation to reciprocate keep the tone personal rather than purely polite.",
  },
];

type FaqItem = {
  question: string;
  answer: string;
  relatedLink?: { href: string; label: string };
};

const faqs: FaqItem[] = [
  {
    question: "What is a good YKI writing score?",
    answer:
      "YKI writing is scored on a six-level scale (taitotaso 1–6), roughly mapped to CEFR A1–C2. For most everyday and work purposes, scoring keskitaso (levels 3–4, roughly B1–B2) on writing is considered solid, practical proficiency. What counts as 'good' depends on your goal — citizenship or many vocational qualifications typically require keskitaso, while some professional or academic paths require ylin taso (levels 5–6). Rather than chasing a single number, check the specific level required for your situation and prepare toward that target.",
    relatedLink: {
      href: "/finland/yki-writing-scoring",
      label: "See the full YKI writing scoring guide",
    },
  },
  {
    question: "How long should YKI writing answers be?",
    answer:
      "Length depends on the task and your level. Perustaso writing tasks are usually short, often 40–80 words for a simple letter or message. Keskitaso tasks typically expect 80–150 words with more developed sentences and connectors. Ylin taso tasks can require 150–250 words with clear argumentation and a wider range of structures. Writing far beyond the suggested length rarely helps your score and can introduce more errors, so aim for a complete, well-organized answer at the expected length rather than the longest one you can produce.",
    relatedLink: {
      href: "/finland/yki-writing-tips",
      label: "Get more YKI writing strategy tips",
    },
  },
  {
    question: "Can I memorize YKI writing templates?",
    answer:
      "Memorizing a rigid template is risky — examiners are trained to notice answers that don't actually respond to the specific prompt, and a memorized text can feel disconnected from the task. That said, learning flexible building blocks — reliable greetings, closings, and linking phrases for both formal and informal registers — is genuinely useful and different from memorizing whole answers. The safest approach is to internalize structures and vocabulary by topic, like the examples on this page, so you can adapt them naturally to whatever prompt you receive on exam day.",
    relatedLink: {
      href: "/finland/yki-writing-topics",
      label: "Practice with more YKI writing topics",
    },
  },
];

const relatedResources = [
  {
    href: "/finland/yki-writing-topics",
    title: "YKI Writing Topics",
    description:
      "Browse the 20 most common YKI writing topics, each with key vocabulary and a practical writing tip.",
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
  const title = "YKI Writing Examples (2026 Guide)";
  const description =
    "15 real YKI writing examples for 2026 — sample answers, useful Finnish vocabulary, and clear explanations of why each answer scores well on the YKI writing exam.";
  const path = "/finland/yki-writing-examples";

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

export default function YkiWritingExamplesPage() {
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
        name: "YKI Writing Examples",
        item: "https://examcoach.ca/finland/yki-writing-examples",
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
          <span className="font-medium text-gray-900">YKI Writing Examples</span>
        </nav>

        <header className="rounded-3xl bg-gradient-to-b from-blue-50 to-white px-6 py-12 text-center sm:px-10 sm:py-16 sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            ExamCoach.ai · YKI Writing Guide · 2026
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            YKI Writing Examples
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600 sm:mx-0 sm:text-xl">
            Every YKI writing task gives you a real-life situation — a letter
            to write, an opinion to share, a problem to solve — rather than an
            abstract essay prompt. You&apos;re scored on how clearly and
            naturally you communicate in that situation, not on literary
            style. Tasks vary by level: perustaso answers are typically short
            and informal, while keskitaso and ylin taso tasks expect longer,
            more developed responses. Below are 15 realistic YKI writing
            examples — each with a sample answer, the vocabulary it uses, and
            a short breakdown of exactly why it scores well, so you can see
            what a strong answer actually looks like.
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

        <section aria-labelledby="examples-heading" className="mt-16 space-y-8">
          <h2 id="examples-heading" className="sr-only">
            15 YKI Writing Examples
          </h2>

          {examples.map((example) => (
            <article
              key={example.number}
              id={`example-${example.number}`}
              className="scroll-mt-24 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-base font-bold text-blue-600">
                  {example.number}
                </span>
                <h3 className="pt-1 text-xl font-bold text-gray-900 sm:text-2xl">
                  {example.topic}
                </h3>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Sample Answer
                </p>
                <p className="mt-3 whitespace-pre-line rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-700 sm:p-5 sm:text-base">
                  {example.sampleAnswer}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Useful Vocabulary
                </p>
                <ul className="mt-3 flex flex-wrap gap-2" aria-label="Useful vocabulary">
                  {example.vocabulary.map((word) => (
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
                <p className="text-sm font-semibold text-blue-900">
                  Why This Answer Works
                </p>
                <p className="mt-1 text-sm leading-relaxed text-blue-800 sm:text-base">
                  {example.whyItWorks}
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
            Go deeper on topics, scoring, and exam-day strategy.
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
            See How Your Own Writing Compares
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
            Write your own answer to any of these prompts and get instant AI
            feedback before exam day.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-600 shadow-sm transition-colors duration-200 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 sm:text-lg"
            >
              Try Our Free YKI Writing Checker
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
