import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YKI Formal Email Example B1-B2: Finnish Sample Answers Explained',
  description: 'Review a complete YKI formal email example to prepare for your YKI Finnish writing test. Discover how to structure formal Finnish email samples for B1-B2 levels.',
};

export default function YkiFormalEmailExamplePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long should a YKI formal email be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the YKI intermediate level (keskitaso), a formal email should generally be concise, around 50 to 80 words. The priority is to clearly address every point mentioned in the prompt."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best way to start a formal email in Finnish?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you know the recipient's name, 'Hyvä [Name]' is standard. If you are writing to a company or customer service, 'Hei' is perfectly acceptable and widely used in modern Finnish formal writing."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to use complex grammar for a B1 grade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. A solid B1 grade requires clear communication, correct basic sentence structures, and appropriate vocabulary. Using the conditional mood (haluaisin, voisitteko) is highly recommended for polite requests."
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            YKI Formal Email Example B1-B2: Finnish Sample Answers Explained
          </h1>
        </header>

        <section className="prose prose-lg max-w-none text-gray-700">
          <p>
            If you are preparing for the writing section of the Finnish language proficiency test, studying a high-quality <strong>YKI formal email example</strong> is one of the most effective ways to ensure you achieve your target B1 or B2 grade. The writing subtest evaluates your ability to adjust your tone based on the recipient, making it critical to master the conventions of formal communication.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Why Analyze a YKI Formal Email Example?
          </h2>
          <p>
            In the intermediate YKI exam (keskitaso), you will almost always be asked to write a formal message. This could be a complaint to customer service, an inquiry about an apartment, or feedback to a housing manager. By reviewing a reliable formal Finnish email sample, you can learn the exact structures, greetings, and polite requests that examiners look for when awarding B1 and B2 scores.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Example 1: The Customer Service Complaint (Valitus)
          </h2>
          <p>
            Writing a complaint is a very common task in the exam. In this scenario, you bought a defective product from an online store and need to contact customer service to resolve the issue. Let&apos;s look at a strong YKI B1 writing example.
          </p>
          
          <div className="bg-gray-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
            <h3 className="font-bold text-lg mb-2">Finnish Answer:</h3>
            <p className="whitespace-pre-line font-medium">
              Hei,
              <br /><br />
              Kirjoitan teille, koska ostin verkkokaupastanne uuden tietokoneen viime viikolla, mutta se ei toimi. Tietokoneen näyttö on täysin pimeä, vaikka latasin sen ohjeiden mukaisesti.
              <br /><br />
              Haluaisin palauttaa viallisen tuotteen ja saada rahani takaisin. Voisitteko kertoa, miten minun pitää toimia? Odotan pikaista vastaustanne.
              <br /><br />
              Ystävällisin terveisin,
              <br />
              [Oma Nimesi]
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Examiner Analysis: Why this works
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Appropriate Greeting & Sign-off:</strong> It uses the standard <em>&quot;Hei&quot;</em> and closes with the formal <em>&quot;Ystävällisin terveisin&quot;</em>.</li>
            <li><strong>Polite Phrasing (Konditionaali):</strong> Instead of demanding a refund abruptly, it uses the conditional mood: <em>&quot;Haluaisin palauttaa...&quot;</em> (I would like to return...) and <em>&quot;Voisitteko kertoa...&quot;</em> (Could you tell...). This is crucial for Finnish formal writing.</li>
            <li><strong>Task Completion:</strong> It explains the problem clearly, states what action the writer wants to take, and asks for instructions, directly answering a typical three-part YKI prompt.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Example 2: Requesting Information (Tiedustelu)
          </h2>
          <p>
            Another frequent task is requesting more information about a service, a job, or an apartment. Memorizing standard YKI email answers for inquiries will save you valuable time during the test.
          </p>

          <div className="bg-gray-50 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
            <h3 className="font-bold text-lg mb-2">Finnish Answer:</h3>
            <p className="whitespace-pre-line font-medium">
              Hyvä asunnonvälittäjä,
              <br /><br />
              Huomasin ilmoituksenne vapaasta kaksiosta Helsingin keskustassa ja olen erittäin kiinnostunut siitä. Etsin rauhallista pitkäaikaista kotia työn vuoksi.
              <br /><br />
              Haluaisin kysyä, kuuluuko vesimaksu asunnon vuokraan? Lisäksi haluaisin tietää, milloin asuntoa on mahdollista tulla katsomaan.
              <br /><br />
              Kiitos jo etukäteen tiedoista!
              <br /><br />
              Terveisin,
              <br />
              [Oma Nimesi]
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Examiner Analysis: Why this works
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Clear Context:</strong> The opening sentence immediately tells the recipient why the email is being sent (<em>&quot;Huomasin ilmoituksenne...&quot;</em>).</li>
            <li><strong>Structured Questions:</strong> The questions are clearly separated and polite (<em>&quot;Haluaisin kysyä...&quot;</em>).</li>
            <li><strong>Polite Closing:</strong> <em>&quot;Kiitos jo etukäteen tiedoista!&quot;</em> (Thank you in advance for the information) shows an excellent grasp of common professional email etiquette.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Key Vocabulary for Formal YKI Emails
          </h2>
          <p>
            To build your own successful texts, integrate these standard phrases into your exam preparation:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Opening a complaint:</strong> <em>Otan teihin yhteyttä, koska...</em> (I am contacting you because...)</li>
            <li><strong>Asking politely:</strong> <em>Voisitteko ystävällisesti...</em> (Could you kindly...)</li>
            <li><strong>Expressing dissatisfaction:</strong> <em>Olen valitettavasti tyytymätön...</em> (I am unfortunately dissatisfied with...)</li>
            <li><strong>Requesting a reply:</strong> <em>Toivon pikaista vastausta.</em> (I hope for a quick reply.)</li>
          </ul>
        </section>

        <section className="bg-blue-600 text-white p-8 rounded-xl mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Want Feedback on Your YKI Writing?</h2>
          <p className="text-lg mb-6">
            Stop guessing your grade. Practice with realistic YKI writing prompts and get instant, AI-powered examiner feedback on your grammar, vocabulary, and task completion.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            Start Practicing Now
          </Link>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">How long should a YKI formal email be?</h3>
              <p className="text-gray-600 mt-2">
                For the YKI intermediate level (keskitaso), a formal email should generally be concise, around 50 to 80 words. The priority is to clearly address every point mentioned in the prompt rather than writing a lengthy essay.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">What is the best way to start a formal email in Finnish?</h3>
              <p className="text-gray-600 mt-2">
                If you know the recipient&apos;s name or title, <em>&quot;Hyvä [Name/Title]&quot;</em> is standard. If you are writing to a company or customer service inbox, a simple <em>&quot;Hei&quot;</em> is perfectly acceptable and widely used in modern Finnish formal writing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Do I need to use complex grammar for a B1 grade?</h3>
              <p className="text-gray-600 mt-2">
                No. A solid B1 grade requires clear communication, correct basic sentence structures, and appropriate vocabulary. However, correctly using the conditional mood (<em>haluaisin</em>, <em>voisitteko</em>) is highly recommended as it demonstrates politeness and tone awareness.
              </p>
            </div>
          </div>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}