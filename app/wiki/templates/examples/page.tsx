import type { Metadata } from "next";

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
      "Hei Maria!\n\nKiitos viestistäsi! Olen iloinen, että saamme kirjoittaa toisillemme. Minun nimeni on Anna ja asun Helsingissä Suomessa. Olen 25-vuotias ja opiskelen yliopistossa pääaineena historiaa.\n\nVapaa-ajallani tykkään lukemisesta, musiikista ja pitkistä kävelyistä luonnossa. Viikonloppuisin käyn usein rannalla tai tapaan ystäviä kahvilassa. Tykkään myös matkustamisesta ja olin viime kesänä Italiassa.\n\nKerro minulle lisää itsestäsi! Mitä tykkäät tehdä vapaa-ajallasi? Onko sinulla lempiharrastusta? Toivottavasti voimme tavata jonain päivänä.\n\nLämpimästi,\nAnna",
    vocabulary: [
      "kiitos viestistäsi — thank you for your message",
      "vapaa-aika — free time",
      "toivottavasti — hopefully",
      "lämpimästi — warmly",
      "tapaan ystäviä — I meet friends",
    ],
    whyItWorks:
      "The letter opens with a warm, informal greeting and a clear self-introduction, then ends with genuine follow-up questions that keep the exchange going. The register is appropriately casual ('Hei Maria!'), the vocabulary is varied without being forced, and the closing 'Lämpimästi' matches the friendly tone a pen-pal letter needs.",
  },
  {
    number: 2,
    topic: "Formal Email: Reporting a Delayed Delivery",
    sampleAnswer:
      "Hyvä asiakaspalvelu,\n\nKirjoitan, koska tilaukseni (tilausnumero 48213) on viivästynyt. Tilasin tuotteet 5. maaliskuuta ja toimituksen piti tulla viime viikolla, mutta en ole vielä saanut pakettia.\n\nOlen yrittänyt soittaa, mutta linja oli varattu. Voisitteko tarkistaa tilauksen tilan ja kertoa, milloin paketti saapuu? Tarvittaessa voin perua tilauksen ja pyytää rahat takaisin.\n\nToivon, että saatte ongelman korjattua pian. Odotan vastaustanne.\n\nYstävällisin terveisin,\nMarkus Lehtinen",
    vocabulary: [
      "tilaus — order",
      "viivästynyt — delayed",
      "asiakaspalvelu — customer service",
      "perua — to cancel",
      "rahat takaisin — refund",
    ],
    whyItWorks:
      "This formal email states the problem immediately with concrete details (order number, dates), explains what the writer has already tried, and clearly requests a specific resolution. The formal register ('Hyvä asiakaspalvelu', 'Ystävällisin terveisin') fits a business context, and offering a clear next step (refund) keeps the message action-oriented.",
  },
  {
    number: 3,
    topic: "Opinion Text: Remote Work vs. Office Work",
    sampleAnswer:
      "Mielestäni etätyö on parempi kuin toimistotyö useimmille ihmisille. Ensinnäkin etätyö säästää aikaa, koska työntekijän ei tarvitse matkustaa töihin. Tämä on hyväksi sekä ympäristölle että ihmisten jaksamiselle.\n\nToisaalta toimistossa on helpompi tavata kollegoita ja tehdä yhteistyötä. Jotkut ihmiset kaipaavat sosiaalista kanssakäymistä, jota etätyössä on vähemmän. Siksi paras ratkaisu voisi olla hybridityö, jossa työntekijä on osan viikosta toimistolla ja osan kotona.\n\nYhteenvetona uskon, että etätyö tarjoaa enemmän hyötyjä kuin haittoja, kunhan ihmiset saavat valita itse työtapansa. Joustavuus on nykyään tärkeämpää kuin ennen.",
    vocabulary: [
      "etätyö — remote work",
      "toimistotyö — office work",
      "säästää aikaa — to save time",
      "toisaalta — on the other hand",
      "yhteenvetona — in summary",
    ],
    whyItWorks:
      "The opinion text follows a clear three-part structure: a stated position with reasons, a counter-argument with a concession, and a balanced conclusion. Linking words ('ensinnäkin', 'toisaalta', 'yhteenvetona') make the logic easy to follow, and acknowledging the opposing view before re-stating the position shows mature argumentation.",
  },
  {
    number: 4,
    topic: "Message to a Friend: Inviting Them on a Weekend Trip",
    sampleAnswer:
      "Hei Laura!\n\nMulla on sellainen idea, mitä jos me mentäisiin viikonloppuna mökille? Löysin hienon mökin Nuuksion kansallispuiston läheltä, ja se on varattavissa ensi viikonloppuna.\n\nMökissä on sauna ja järvi aivan vieressä. Voisimme mennä käymään luonnossa, saunomaan ja vain rentoutumaan. Mä voin hoitaa varauksen ja ajaa sinut sinne autolla.\n\nSopiiko sinulle lauantai? Kerro mulle heti, jos oot kiinnostunut, niin mä varaan mökin ennen kuin joku toinen ehtii ottaa sen!\n\nTsemppiä viikkoon!\nSami",
    vocabulary: [
      "mökki — cabin",
      "saunomaan — to go to the sauna",
      "rentoutumaan — to relax",
      "varaus — reservation",
      "kiinnostunut — interested",
    ],
    whyItWorks:
      "The message uses casual spoken-style Finnish ('mulla', 'me mentäisiin') that fits a friendly invitation perfectly. It gives concrete details (location, activities, logistics) and creates a gentle sense of urgency ('ennen kuin joku toinen ehtii') without being pushy, ending with an encouraging sign-off.",
  },
  {
    number: 5,
    topic: "Formal Email: Inquiring About a Language Course",
    sampleAnswer:
      "Hyvä kurssisihteeri,\n\nOlen kiinnostunut suomen kielen kurssista ja haluaisin saada lisätietoa. Näin ilmoituksen kesän intensiivikurssista verkkosivuillanne.\n\nHaluisin tietää, mikä on kurssin hinta ja milloin se alkaa. Onko kurssi tarkoitettu aloittelijoille vai edistyneemmille? Tarvitaanko kurssille jokin kielitodistus ennakolta?\n\nTyöskentelen tällä hetkellä, ja siksi minulle sopisivat parhaiten iltapäivän tai illan tunnit. Onko mahdollista käydä kurssia etänä?\n\nOdotan vastaustanne ja kiitos avustanne.\n\nYstävällisin terveisin,\nElena Petrova",
    vocabulary: [
      "kiinnostunut — interested",
      "intensiivikurssi — intensive course",
      "kielitodistus — language certificate",
      "etänä — remotely",
      "avustanne — your help",
    ],
    whyItWorks:
      "The email is concise but covers multiple relevant questions (price, schedule, level, prerequisites, format) in a logical order. The writer explains their personal constraint (working during the day) to make the inquiry specific rather than generic, and the formal closing fits an institutional context.",
  },
  {
    number: 6,
    topic: "Forum Post: Best Way to Learn Finnish",
    sampleAnswer:
      "Hei kaikki!\n\nOlen asunut Suomessa nyt puoli vuotta ja haluan oppia suomea paremmin. Olen käynyt kurssin, mutta minusta tuntuu, etten pääse eteenpäin. Mitä te suosittelette?\n\nItse olen huomannut, että parasta oppimista on puhuminen paikallisten kanssa. Yritän käyttää suomea kaupassa ja töissä, vaikka se on vaikeaa. Myös sarjojen katsominen suomeksi auttaa.\n\nOnko teillä vinkkejä, miten voisin harjoitella enemmän? Ehkä joku tietää hyvän sovelluksen tai kerhon Helsingissä?\n\nKiitos jo etukäteen!",
    vocabulary: [
      "suosittella — to recommend",
      "päästä eteenpäin — to make progress",
      "harjoitella — to practice",
      "vinkki — tip",
      "etukäteen — in advance",
    ],
    whyItWorks:
      "The forum post opens with a friendly greeting and context, shares what the writer has already tried, and ends with a clear, specific question. The tone is conversational and inviting, which encourages replies, and acknowledging personal effort ('olen huomannut') makes the post feel genuine rather than lazy.",
  },
  {
    number: 7,
    topic: "Complaint: Noisy Neighbors in the Apartment Building",
    sampleAnswer:
      "Hyvä taloyhtiön hallitus,\n\nKirjoitan, koska minulla on ongelma naapurini kanssa. Viime kuukausien ajan hän on pitänyt kovaa meteliä iltaisin, usein myöhään yöllä. Tämä häiritsee minun ja perheeni unta.\n\nOlen yrittänyt puhua asiasta naapurin kanssa, mutta tilanne ei ole parantunut. Lisäksi hän soittaa usein musiikkia kovalla äänellä, mikä kuuluu selvästi asuntoomme.\n\nPyydän teitä keskustelemaan asiasta hänen kanssaan tai antamaan minulle neuvoja, miten voin toimia. Haluan, että talossa on mukava asua kaikille.\n\nYstävällisin terveisin,\nJoonas Virtanen",
    vocabulary: [
      "naapuri — neighbor",
      "meteli — noise",
      "häiritä — to disturb",
      "taloyhtiö — housing company",
      "neuvo — advice",
    ],
    whyItWorks:
      "The complaint stays calm and factual rather than emotional, specifies the problem and timing, and explains what the writer has already attempted before escalating. It ends with a clear, reasonable request, which is exactly the tone a formal complaint to a housing board requires.",
  },
  {
    number: 8,
    topic: "Personal Story: A Memorable Summer Holiday",
    sampleAnswer:
      "Viime kesänä minä ja perheeni matkustimme Lappiin. Se oli yksi ikimuistoisimmista lomista koskaan.\n\nAjoimme autolla pohjoiseen, ja matka kesti kaksi päivää. Matkalla näimme kauniita maisemia ja pysähdyimme usein ottamaan kuvia. Kun saavuimme mökille, olimme kaikki väsyneitä mutta onnellisia.\n\nParasta oli se, kun näimme poroja luonnossa ensimmäistä kertaa. Lapsemme olivat innoissaan. Illalla kokkasimme ruokaa nuotiolla ja söimme ulkona. Taivas oli kirkas ja näimme jopa revontulet.\n\nTämä matka opetti minulle, että luonnossa voi kokea asioita, joita ei voi kokea kaupungissa. Toivon, että voimme palata sinne ensi kesänä.",
    vocabulary: [
      "ikimuistoinen — memorable",
      "maisema — landscape",
      "poro — reindeer",
      "nuotio — campfire",
      "revontulet — northern lights",
    ],
    whyItWorks:
      "The narrative follows a clear timeline (journey, arrival, highlight, reflection) using consistent past tense, which keeps it coherent. It includes specific, vivid details (poroja, revontulet, nuotio) that make the story engaging, and ends with a personal reflection that gives the piece a satisfying conclusion.",
  },
  {
    number: 9,
    topic: "Request: Asking for Information About a Gym Membership",
    sampleAnswer:
      "Hei!\n\nOlen kiinnostunut kuntosalijäsenyydestä ja haluaisin kysyä muutamasta asiasta.\n\nKuinka paljon kuukausijäsenyys maksaa? Onko mahdollista saada opastusta alkuun, jos en ole käynyt kuntosalilla aiemmin? Olisin myös kiinnostunut tietämään, mitkä laitteet ovat käytettävissä ja oletteko auki viikonloppuisin.\n\nSopisiko, että tulen katsomaan paikan ennen päätöstä? Voisin tulla ensi viikolla illalla.\n\nKiitos vastauksesta!\n\nTerveisin,\nMika",
    vocabulary: [
      "kuntosalijäsenyys — gym membership",
      "kuukausijäsenyys — monthly membership",
      "opastus — guidance",
      "laitteet — equipment",
      "päätös — decision",
    ],
    whyItWorks:
      "The request uses short, clear questions grouped logically so the recipient can answer each one easily. It explains the writer's situation (no prior gym experience) to make the inquiry relevant, and proposes a concrete next step (a visit), which shows genuine intent and makes a helpful reply more likely.",
  },
  {
    number: 10,
    topic: "Opinion: Public Transport in Your City",
    sampleAnswer:
      "Mielestäni julkinen liikenne Helsingissä toimii melko hyvin, mutta siinä on vielä parannettavaa.\n\nPositiivista on, että bussit ja metrot kulkevat usein ja ajat ovat luotettavia. Lisäksi liput ovat kohtuuhintaisia verrattuna moniin muihin Euroopan kaupunkeihin. Verkosto on laaja, ja pääsee melkein kaikkialle.\n\nToisaalta ruuhka-aikoina junat ovat usein täynnä, ja silloin matkustaminen on epämiellyttävää. Myös iltaisin vuorot ovat harvempia, mikä vaikeuttaa elämää ihmisille, jotka työskentelevät myöhään.\n\nMielestäni kaupungin pitäisi lisätä vuoroja erityisesti iltaisin ja investoida uusiin juniin. Tämä tekisi liikkumisesta kaikille helpompaa.",
    vocabulary: [
      "julkinen liikenne — public transport",
      "luotettava — reliable",
      "kohtuuhintainen — reasonably priced",
      "ruuhka-aika — rush hour",
      "investoida — to invest",
    ],
    whyItWorks:
      "The opinion text balances positives and negatives fairly before making a concrete recommendation, which makes the argument credible. Topic-specific vocabulary ('julkinen liikenne', 'ruuhka-aika', 'vuorot') shows range, and the closing recommendation ties everything together with a clear call to action.",
  },
  {
    number: 11,
    topic: "Apology Message: Explaining Why You Are Late",
    sampleAnswer:
      "Hei Sanna!\n\nAnteeksi, että myöhästyin tänään. Bussi, jolla piti tulla, oli myöhässä melkein 20 minuuttia, enkä minä voinut tehdä asialle mitään.\n\nYritin soittaa sinulle, mutta puhelimesi oli varattu. Olen pahoillani, jos joudut odottamaan pitkään. Ensi kerralla lähden aikaisemmin kotoa, jotta tämä ei tapahdu uudestaan.\n\nVoimmeko tavata huomenna samaan aikaan? Kutsun sinut kahville anteeksi.\n\nTerveisin,\nPetra",
    vocabulary: [
      "myöhästyä — to be late",
      "anteeksi — sorry",
      "odottaa — to wait",
      "aikaisemmin — earlier",
      "kahville — for coffee",
    ],
    whyItWorks:
      "The apology gives a brief, honest reason without over-explaining, acknowledges the impact on the other person, and offers a small gesture to make up for it. Ending with a concrete proposal to reschedule shows responsibility and keeps the relationship positive.",
  },
  {
    number: 12,
    topic: "Formal Letter: Requesting a Refund for a Faulty Product",
    sampleAnswer:
      "Hyvä myyjä,\n\nOstin verkkokaupastanne puhelimen 10. toukokuuta, mutta laite ei toimi oikein. Näyttö ei reagoi kosketukseen kunnolla, ja puhelin sammuu itsestään satunnaisesti.\n\nLiitteenä on kopio kuitista ja kuva viallisesta näytöstä. Haluaisin palauttaa tuotteen ja saada rahat takaisin, koska laite on selvästi viallinen. Olen lukenut palautusehtonne, ja minulla on oikeus palautukseen 14 päivän kuluessa.\n\nVoisitteko lähettää minulle palautusosoitteen ja vahvistaa, milloin saan rahat takaisin? Odotan vastaustanne pian.\n\nYstävällisin terveisin,\nAnna Korhonen",
    vocabulary: [
      "viallinen — faulty",
      "kuitti — receipt",
      "palauttaa — to return",
      "palautusehdot — return policy",
      "vahvistaa — to confirm",
    ],
    whyItWorks:
      "The letter states the defect precisely, attaches evidence (receipt and photo), references the return policy directly, and makes a clear request (refund and return address). The formal register and structured, evidence-based approach match what a consumer complaint needs to succeed.",
  },
  {
    number: 13,
    topic: "Advice: Tips for Newcomers Settling in Finland",
    sampleAnswer:
      "Jos olet muuttamassa Suomeen, tässä on muutama vinkki, jotka auttavat alkuun.\n\nEnsinnäkin, opi vähän suomea jo ennen saapumista. Vaikka moni puhuu englantia, suomen kieli auttaa sinua arjessa paljon. Muutamat sanat ja lauseet riittävät alkuun, kuten 'kiitos' ja 'anteeksi'.\n\nToiseksi, hae Kela-kortti ja henkilötunnus mahdollisimman pian. Niitä tarvitset melkein kaikkialla — lääkäriin, pankkiin ja töihin.\n\nKolmanneksi, älä ole yksin. Liity johonkin kerhoon tai harrastukseen, niin tapaat uusia ihmisiä helpommin. Suomalaiset ovat aluksi hiljaisia, mutta ystävällisiä, kunhan tutustutte paremmin.\n\nLopuksi, nauti luonnosta! Se on paras osa Suomea.",
    vocabulary: [
      "muuttaminen — moving",
      "henkilötunnus — personal identity code",
      "harrastus — hobby",
      "tutustua — to get to know",
      "nauttia — to enjoy",
    ],
    whyItWorks:
      "The advice is structured with clear signpost words ('ensinnäkin', 'toiseksi', 'kolmanneksi', 'lopuksi') that make each tip easy to follow. Each point is practical and specific (Kela-kortti, henkilötunnus, kerho), and the warm, encouraging closing matches a helpful advice piece.",
  },
  {
    number: 14,
    topic: "Description: Introducing Your Hometown",
    sampleAnswer:
      "Minun kotikaupunkini on Tampere. Se on Suomen kolmanneksi suurin kaupunki, ja siellä asuu noin 250 000 ihmistä.\n\nTampere sijaitsee kahden järven välissä, ja siksi maisemat ovat kauniita. Keskustassa on paljon vanhoja punatiilisiä teollisuusrakennuksia, jotka on muutettu kahviloiksi ja museoiksi. Yksi tunnetuimmista paikoista on Särkänniemen huvipuisto.\n\nTykkään Tampereella erityisesti kesäisin, jolloin ihmiset istuvat rannalla ja nauttivat auringosta. Talvella puolestaan voi hiihtää lähimetsissä tai käydä saunassa.\n\nMielestäni Tampere on sopivan kokoinen: se ei ole liian suuri eikä liian pieni. Siellä on aina jotain tekemistä, mutta se on myös rauhallinen.",
    vocabulary: [
      "sijaita — to be located",
      "järvi — lake",
      "teollisuusrakennus — industrial building",
      "huvipuisto — amusement park",
      "rauhallinen — calm",
    ],
    whyItWorks:
      "The description moves logically from general facts (size, location) to specific landmarks, then to seasonal life and a personal opinion. It uses varied descriptive vocabulary ('punatiilisiä', 'rauhallinen') and contrasts (kesä/talvi, suuri/pieni) to keep the reader engaged while covering all the information a description task expects.",
  },
  {
    number: 15,
    topic: "Invitation: A Birthday Party",
    sampleAnswer:
      "Hei kaikki!\n\nKutsun teidät syntymäpäiväjuhliini, jotka pidetään lauantaina 12. elokuuta. Juhlat alkavat klo 18 minun luonani.\n\nOsoite on Kalevankatu 15, Helsinki. Ovi on sisällä vasemmalla, ja olen varannut meille tilaa yhteensä 20 hengelle.\n\nTarjoan ruokaa ja juomaa, mutta voitte tuoda omat juomat, jos haluatte. Myös kakkua on tarpeeksi! Jos teillä on erityisruokavalio, kertokaa minulle etukäteen, niin järjestän vaihtoehdon.\n\nOlisin iloinen, jos voitte tulla. Vastatkaa viimeistään 5. elokuuta, jotta voin varmistaa ruokamäärän.\n\nNähdään pian!\nSofia",
    vocabulary: [
      "syntymäpäiväjuhlat — birthday party",
      "tarjota — to offer",
      "erityisruokavalio — special diet",
      "varmistaa — to confirm",
      "nähdään pian — see you soon",
    ],
    whyItWorks:
      "The invitation covers all essential information (date, time, place, what's provided, RSVP deadline) in a friendly, organized way. It anticipates a practical need (dietary restrictions) and sets a clear response deadline, which makes the invitation both warm and functional — exactly what an event invite should do.",
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
      "A good YKI writing score depends on your goal, but for most candidates aiming at Finnish citizenship, level 3 (intermediate, roughly B1) is the target. At level 3, your writing is clear enough to handle everyday situations, even if you make some mistakes. The key is that your message comes across without the reader having to work hard to understand it.",
    relatedLink: {
      href: "/wiki/scoring/yki-b1-guide",
      label: "See the full YKI writing scoring guide",
    },
  },
  {
    question: "How long should YKI writing answers be?",
    answer:
      "YKI writing answers should match the length suggested in the prompt — usually somewhere between 80 and 150 words per task, depending on the task type. Writing too little limits how much vocabulary and grammar you can show, while writing far too much often introduces extra errors. Aim for the middle of the suggested range and focus on fully answering every part of the prompt rather than padding the word count.",
    relatedLink: {
      href: "/wiki/guides/tips",
      label: "Get more YKI writing strategy tips",
    },
  },
  {
    question: "Can I memorize YKI writing templates?",
    answer:
      "You should not memorize full answers, because YKI examiners reward responses that directly address the specific prompt, and a memorized answer usually fails task achievement if it doesn't fit the actual question. What you can memorize are useful building blocks: greeting and closing phrases, linking words, and topic vocabulary. These give you a strong foundation while leaving room to respond naturally to whatever the prompt asks.",
    relatedLink: {
      href: "/wiki/guides/topics",
      label: "Practice with more YKI writing topics",
    },
  },
];

const relatedResources = [
  {
    href: "/wiki/guides/topics",
    title: "YKI Writing Topics",
    description:
      "Browse the 20 most common YKI writing topics so you can practice with prompts that match the real exam.",
  },
  {
    href: "/wiki/scoring/yki-b1-guide",
    title: "YKI Writing Scoring",
    description:
      "Understand exactly how YKI writing tasks are graded across the four official criteria.",
  },
  {
    href: "/wiki/guides/tips",
    title: "YKI Writing Tips",
    description:
      "Practical strategies for structure, vocabulary, and timing to help you write stronger responses.",
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

export async function generateMetadata(): Promise<Metadata> {
  const title = "YKI Writing Examples (2026 Guide)";
  const description =
    "15 real YKI writing examples for 2026, each with a full sample answer, key vocabulary, and a clear explanation of why the answer works — so you can model your own responses on answers that actually score well.";
  const path = "/wiki/templates/examples";
  return {
    metadataBase: new URL("https://examcoach.ca"),
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: "https://examcoach.ca/wiki/templates/examples",
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

export default function YkiWritingExamplesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://examcoach.ca" },
      { "@type": "ListItem", position: 2, name: "Finland", item: "https://examcoach.ca/wiki" },
      {
        "@type": "ListItem",
        position: 3,
        name: "YKI Writing Examples",
        item: "https://examcoach.ca/wiki/templates/examples",
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
        <header className="border-b border-slate-100 bg-gradient-to-b from-blue-50 to-white">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[#64748B]">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <a href="/" className="hover:text-[#2563EB]">Home</a>
                </li>
                <li aria-hidden="true">/</li>
                <li>Finland</li>
                <li aria-hidden="true">/</li>
                <li className="font-medium text-slate-900" aria-current="page">
                  YKI Writing Examples
                </li>
              </ol>
            </nav>
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[#2563EB]">
              Finland · YKI Writing
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              15 Real YKI Writing Examples
            </h1>
            <p className="mt-5 max-w-2xl text-base text-[#64748B] sm:text-lg">
              Fifteen complete YKI writing sample answers for 2026, each with key vocabulary and
              a clear explanation of why it works&nbsp;&mdash; so you can model your own responses
              on answers that actually score well.
            </p>
          </div>
        </header>

        <article className="mx-auto max-w-4xl px-6 py-16">
          <section aria-labelledby="examples-list" className="mt-4">
            <h2 id="examples-list" className="sr-only">15 YKI Writing Examples</h2>
            <ol className="space-y-8">
              {examples.map((ex) => (
                <li
                  key={ex.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#2563EB] text-base font-semibold text-white">
                      {ex.number}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                      {ex.topic}
                    </h3>
                  </div>

                  <div className="mt-5 rounded-xl bg-slate-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Sample Answer
                    </p>
                    <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700">
                      {ex.sampleAnswer}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Key Vocabulary
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {ex.vocabulary.map((v) => (
                        <li
                          key={v}
                          className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#2563EB]"
                        >
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50/40 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#2563EB]">
                      Why It Works
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">{ex.whyItWorks}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="continue-prep" className="mt-16">
            <h2 id="continue-prep" className="text-2xl font-semibold text-slate-900">
              Continue Your YKI Writing Prep
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {relatedResources.map((r) => (
                <li key={r.href}>
                  <a
                    href={r.href}
                    className="group flex h-full flex-col rounded-xl border border-slate-200 p-5 shadow-sm transition-colors hover:bg-slate-50"
                  >
                    <span className="text-sm font-semibold text-slate-900">{r.title}</span>
                    <span className="mt-2 text-sm text-[#64748B]">{r.description}</span>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#2563EB]">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
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
                  {faq.relatedLink && (
                    <a
                      href={faq.relatedLink.href}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#2563EB]"
                    >
                      {faq.relatedLink.label} <span aria-hidden="true">&rarr;</span>
                    </a>
                  )}
                </details>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-2xl bg-[#2563EB] px-6 py-12 text-center shadow-sm sm:px-12">
              <h2 className="text-2xl font-semibold text-white">
                Ready to test your YKI writing?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-blue-100">
                Write a practice response and get instant feedback on grammar, vocabulary, task
                achievement, and coherence&nbsp;&mdash; for free.
              </p>
              <a
                href="/"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#2563EB] shadow-sm transition-colors hover:bg-blue-50"
              >
                Try Our Free YKI Writing Checker
              </a>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
