import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Writing Topics: Common Exam Themes and Questions | ExamCoach.ai',
  description: 'Explore the most common YKI writing topics and exam themes. Review realistic YKI exam questions and detailed examples to prepare for your Finnish intermediate test.',
  keywords: ['YKI writing topics', 'YKI exam questions', 'Finnish writing themes', 'YKI test topics', 'common YKI writing tasks'],
  alternates: {
    canonical: '/wiki/guides/yki-writing-topics',
  },
  openGraph: {
    title: 'YKI Writing Topics: Common Exam Themes and Questions',
    description: 'Explore the most common YKI writing topics and exam themes. Review realistic YKI exam questions and examples.',
    type: 'article',
  },
};

export default function YkiWritingTopicsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the most common YKI writing topics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most frequent YKI writing topics include making a formal complaint about a faulty product or bad service, writing an informal message to a friend (like an invitation or apology), and writing an opinion piece on everyday societal issues like public transport, recycling, or remote work."
        }
      },
      {
        "@type": "Question",
        "name": "How many YKI exam questions are in the writing section?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The writing section typically consists of three distinct tasks: a short informal message, a formal email or letter, and a longer opinion piece. You have 55 minutes to complete all three tasks."
        }
      },
      {
        "@type": "Question",
        "name": "Should I study generic Finnish writing topics for the exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Instead of practicing generic creative writing or essays, you should focus entirely on task-based, practical themes. The exam tests your ability to function in everyday Finnish society, so you should practice complaints, requests, and stating clear opinions."
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
      />

      <article className="prose prose-lg prose-slate max-w-none">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          YKI Writing Topics: Common Exam Themes and Questions
        </h1>

        <p className="lead text-xl text-gray-700 mb-8">
          If you are preparing for the intermediate Finnish language test (Keskitaso), familiarizing yourself with the most common <strong>YKI writing topics</strong> is the most effective way to boost your score. The examiners are not looking for creative storytelling; they want to see that you can handle practical, everyday situations in Finnish society. By understanding the typical themes, you can prepare reusable vocabulary and structures.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-4">
          Breaking Down the Most Common YKI Writing Topics
        </h2>
        <p>
          When you review past <strong>YKI exam questions</strong>, a clear pattern emerges. The writing section always tests your ability to navigate different registers (informal vs. formal) and express opinions. Unlike generic <strong>Finnish writing topics</strong> you might find in a standard language textbook, YKI tasks are strictly situational.
        </p>
        <p>
          Let's explore the three main categories of tasks you will face, complete with realistic examples and explanations of what the examiners expect.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-4">
          Theme 1: The Informal Message (Epävirallinen viesti)
        </h2>
        <p>
          The informal message tests your ability to communicate with friends, family, or close colleagues. Common scenarios include inviting someone to an event, apologizing for being late, or suggesting a weekend plan.
        </p>

        <div className="bg-white border-l-4 border-blue-500 shadow-sm p-6 rounded-r-lg mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Example YKI Exam Question:</h3>
          <p className="text-gray-700 italic mb-4">
            "Your friend has invited you to their birthday party next Saturday. Write a message to your friend. Thank them for the invitation, explain that you cannot attend because you are sick, and suggest meeting up next week instead."
          </p>
          
          <h4 className="font-semibold text-gray-800 mt-4 mb-2">Realistic Answer Example:</h4>
          <div className="bg-gray-50 p-4 rounded text-gray-800 font-mono text-sm mb-4">
            Moi Anna!<br /><br />
            Kiitos paljon kutsusta syntymäpäiväjuhliisi! Valitettavasti en voi tulla, koska olen tullut kipeäksi. Minulla on kuumetta ja minun täytyy levätä kotina.<br /><br />
            Harmittaa todella paljon, etten pääse mukaan juhlimaan. Voidaanko nähdä ensi viikolla, kun olen terve? Voisin tarjota sinulle syntymäpäiväkahvit kaupungilla.<br /><br />
            Mukavia juhlia!<br /><br />
            Terveisin,<br />
            [Oma Nimi]
          </div>

          <h4 className="font-semibold text-gray-800 mt-4 mb-2">Why this works:</h4>
          <ul className="list-disc pl-5 text-gray-700">
            <li><strong>Answers the prompt exactly:</strong> It includes the thank you, the reason for declining (sickness), and the alternative suggestion (coffee next week).</li>
            <li><strong>Appropriate tone:</strong> Uses conversational greetings ("Moi", "Mukavia juhlia") without being overly slangy.</li>
            <li><strong>Good vocabulary:</strong> Uses words like <em>valitettavasti</em> (unfortunately) and <em>harmittaa</em> (it's a shame).</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-4">
          Theme 2: The Formal Message (Virallinen viesti)
        </h2>
        <p>
          The formal message evaluates your command of standard written Finnish (<em>kirjakieli</em>). The most frequent scenarios include writing a complaint about a broken product, providing feedback to housing maintenance (<em>huoltoyhtiö</em>), or inquiring about a job.
        </p>

        <div className="bg-white border-l-4 border-red-500 shadow-sm p-6 rounded-r-lg mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Example YKI Exam Question:</h3>
          <p className="text-gray-700 italic mb-4">
            "You ordered a pair of shoes from an online store, but they sent you the wrong size. Write a formal message to customer service. Explain what happened, give your order details, and tell them what you want them to do to fix the issue."
          </p>
          
          <h4 className="font-semibold text-gray-800 mt-4 mb-2">Realistic Answer Example:</h4>
          <div className="bg-gray-50 p-4 rounded text-gray-800 font-mono text-sm mb-4">
            Hyvä asiakaspalvelu,<br /><br />
            Kirjoitan teille, koska tilasin verkkokaupastanne talvikengät (tilausnumero: 12345) viime viikolla, mutta sain väärän koon. Tilasin koon 42, mutta paketissa oli koko 40.<br /><br />
            Haluaisin palauttaa nämä kengät ja saada oikean kokoiset kengät tilalle. Voitteko kertoa, miten voin palauttaa tuotteen ilmaiseksi?<br /><br />
            Odotan vastaustanne.<br /><br />
            Ystävällisin terveisin,<br />
            [Oma Nimi]
          </div>

          <h4 className="font-semibold text-gray-800 mt-4 mb-2">Why this works:</h4>
          <ul className="list-disc pl-5 text-gray-700">
            <li><strong>Clear structure:</strong> Opens with a formal greeting (<em>Hyvä asiakaspalvelu</em>) and immediately states the purpose of the message (<em>Kirjoitan teille, koska...</em>).</li>
            <li><strong>Direct problem solving:</strong> Clearly demands an exchange and asks for instructions on the return process.</li>
            <li><strong>Formal register:</strong> Strict use of standard Finnish, correct capitalization, and polite phrasing (<em>Haluaisin...</em>).</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-4">
          Theme 3: The Opinion Piece (Mielipidekirjoitus)
        </h2>
        <p>
          The longest and often most challenging task is the opinion piece. You will be given a statement about a societal issue and asked to share your thoughts. Common themes revolve around public transportation, remote work vs. office work, children's screen time, and recycling.
        </p>

        <div className="bg-white border-l-4 border-green-500 shadow-sm p-6 rounded-r-lg mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Example YKI Exam Question:</h3>
          <p className="text-gray-700 italic mb-4">
            "Topic: Public transportation should be free for all residents. Write an opinion piece to a local newspaper. State whether you agree or disagree, and provide at least two reasons for your opinion."
          </p>
          
          <h4 className="font-semibold text-gray-800 mt-4 mb-2">Realistic Answer Example:</h4>
          <div className="bg-gray-50 p-4 rounded text-gray-800 font-mono text-sm mb-4">
            <strong>Ilmainen joukkoliikenne on hyvä idea</strong><br /><br />
            Olen sitä mieltä, että julkisen liikenteen pitäisi olla ilmainen kaikille asukkaille. Tähän on kaksi tärkeää syytä.<br /><br />
            Ensinnäkin, ilmainen joukkoliikenne on hyväksi ympäristölle. Jos bussit ja junat olisivat ilmaisia, useammat ihmiset jättäisivät autonsa kotiin. Tämä vähentäisi saasteita ja ruuhkia kaupungissa.<br /><br />
            Toiseksi, se auttaisi vähävaraisia perheitä ja opiskelijoita. Matkaliput ovat nykyään hyvin kalliita, ja kaikilla ei ole varaa ostaa autoa. Ilmainen liikenne tekisi kaupungista tasa-arvoisemman.<br /><br />
            Minun mielestäni kaupungin pitäisi kokeilla tätä ideaa mahdollisimman pian.<br /><br />
            - Ahkera matkustaja
          </div>

          <h4 className="font-semibold text-gray-800 mt-4 mb-2">Why this works:</h4>
          <ul className="list-disc pl-5 text-gray-700">
            <li><strong>Strong stance:</strong> Starts immediately with a clear opinion statement (<em>Olen sitä mieltä, että...</em>).</li>
            <li><strong>Logical flow:</strong> Uses excellent connector words to organize arguments (<em>Ensinnäkin</em> - firstly, <em>Toiseksi</em> - secondly).</li>
            <li><strong>Complete task:</strong> Provides the required two distinct reasons (environment and equality/cost) and wraps up with a concluding thought.</li>
          </ul>
        </div>
      </article>

      {/* Related Articles */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8 mt-16">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
        <ul className="space-y-2">
          <li><Link href="/wiki/guides/yki-writing-practice" className="text-blue-700 hover:underline">YKI Writing Practice: How to Train With Real Exam Topics</Link></li>
          <li><Link href="/wiki/templates/yki-writing-answer-template" className="text-blue-700 hover:underline">YKI Writing Answer Template: Structure Every Task</Link></li>
        </ul>
      </nav>

      <section className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center shadow-lg">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Master These YKI Writing Topics Today
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Don't just read examples—practice them! Use our AI-powered platform to write your own responses to these common exam themes and receive instant, examiner-style feedback.
        </p>
        <Link 
          href="/"
          className="inline-block bg-white text-blue-700 font-bold text-lg px-8 py-4 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-300"
        >
          Start Practicing for Free
        </Link>
      </section>

      <section className="mt-16 pt-10 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">What are the most common YKI writing topics?</h3>
            <p className="text-gray-600">
              The most frequent YKI writing topics include making a formal complaint about a faulty product or bad service, writing an informal message to a friend (like an invitation or apology), and writing an opinion piece on everyday societal issues like public transport, recycling, or remote work.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">How many YKI exam questions are in the writing section?</h3>
            <p className="text-gray-600">
              The writing section typically consists of three distinct tasks: a short informal message, a formal email or letter, and a longer opinion piece. You have 55 minutes to complete all three tasks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Should I study generic Finnish writing topics for the exam?</h3>
            <p className="text-gray-600">
              No. Instead of practicing generic creative writing or essays, you should focus entirely on task-based, practical themes. The exam tests your ability to function in everyday Finnish society, so you should practice complaints, requests, and stating clear opinions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
