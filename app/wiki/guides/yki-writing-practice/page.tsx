import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YKI Writing Practice: How to Train With Real Exam Topics | ExamCoach.ai',
  description: 'Master the Finnish language test with targeted YKI writing practice. Learn examiner scoring criteria, vocabulary frameworks, and step-by-step methods using real YKI practice topics.',
  keywords: ['YKI writing practice', 'Finnish writing exercises', 'YKI practice topics', 'YKI exam preparation', 'Finnish writing training'],
  alternates: {
    canonical: '/wiki/guides/yki-writing-practice',
  },
  openGraph: {
    title: 'YKI Writing Practice: How to Train With Real Exam Topics',
    description: 'Master the Finnish language test with targeted YKI writing practice. Learn examiner scoring criteria, vocabulary frameworks, and step-by-step methods.',
    type: 'article',
  },
};

export default function YkiWritingPracticePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much time should I spend on YKI writing practice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the intermediate level (Keskitaso), you should aim for at least two to three targeted writing sessions per week. Focus on different text types (formal, informal, and opinion pieces) during each session to build versatility."
        }
      },
      {
        "@type": "Question",
        "name": "What are the most common YKI practice topics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most frequent YKI practice topics include writing a formal complaint to a company, sending an informal email to a friend about a shared plan, and composing an opinion piece (mielipidekirjoitus) on everyday societal issues like public transport or recycling."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use spoken language (puhekieli) in the YKI writing test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should only use spoken Finnish (puhekieli) in the informal message task, such as writing to a friend. For formal messages and opinion pieces, examiners expect strict use of standard written Finnish (kirjakieli)."
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
          YKI Writing Practice: How to Train With Real Exam Topics
        </h1>

        <p className="lead text-xl text-gray-700 mb-8">
          Passing the Finnish intermediate language test (Keskitaso) requires more than just grammar knowledge; it requires targeted <strong>YKI writing practice</strong>. Many candidates struggle not because they lack vocabulary, but because they are unprepared for the specific text formats the test demands. In this step-by-step guide, you will learn how to structure your training using authentic exam scenarios, understand examiner criteria, and avoid common pitfalls.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-4">
          Understanding Examiner Scoring Criteria
        </h2>
        <p>
          Before diving into Finnish writing exercises, you must understand what the assessors are looking for. The YKI writing section tests your ability to communicate effectively in different contexts.
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Task Fulfillment:</strong> Did you answer all parts of the prompt? If the prompt asks you to complain, explain the issue, and request a refund, missing the refund request lowers your score.</li>
          <li><strong>Register and Tone:</strong> Are you using the correct level of formality? A formal complaint requires standard Finnish (<em>kirjakieli</em>), while a message to a friend can use conversational elements.</li>
          <li><strong>Text Structure:</strong> Is your text logically organized with clear beginnings, middle sections, and polite closings?</li>
          <li><strong>Vocabulary and Grammar:</strong> Do you use a variety of words? Assessors prefer candidates who attempt complex sentences (even with minor errors) over those who write only short, flawless, but overly simple sentences.</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-4">
          Step-by-Step Guide to Effective YKI Writing Practice
        </h2>
        <p>
          To simulate the pressure of the real exam, follow this structured approach during your study sessions.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-blue-900 mb-3">Step 1: Read and Analyze the Prompt</h3>
          <p className="mb-0 text-blue-800">
            Spend 1-2 minutes underlining every action item required in the prompt. Identify the intended audience to determine whether your tone should be formal or informal.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-blue-900 mb-3">Step 2: Draft a Brief Outline</h3>
          <p className="mb-0 text-blue-800">
            Write down 3-4 bullet points in Finnish to guide your writing. Note down essential vocabulary words or conjunctions (like <em>koska</em>, <em>vaikka</em>, <em>kuitenkin</em>) you plan to use.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-blue-900 mb-3">Step 3: Write Under Time Pressure</h3>
          <p className="mb-0 text-blue-800">
            The exam gives you limited time (usually 55 minutes for all three writing tasks). Set a timer for 15-20 minutes per task. Do not use a dictionary during this phase.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-blue-900 mb-3">Step 4: Self-Correction and Review</h3>
          <p className="mb-0 text-blue-800">
            Read your text out loud. Check for common errors such as partitive case mistakes, verb conjugation errors, and missing capital letters.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-4">
          Core YKI Practice Topics and Templates
        </h2>
        <p>
          You should center your study around the three most common text types featured in the exam.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. The Formal Message (Virallinen viesti)</h3>
        <p>
          <strong>Scenario:</strong> You bought a broken phone and need to write an email to customer service demanding a replacement.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 mb-6">
          <h4 className="font-bold mb-2">Reusable Template Framework:</h4>
          <ul className="list-none pl-0">
            <li><strong>Greeting:</strong> Hyvä vastaanottaja, / Hei,</li>
            <li><strong>The Issue:</strong> Kirjoitan teille, koska ostin liikkeestänne... (I am writing to you because I bought from your store...)</li>
            <li><strong>The Details:</strong> Valitettavasti tuote on rikki. (Unfortunately, the product is broken.)</li>
            <li><strong>The Demand:</strong> Haluaisin palauttaa tuotteen ja saada rahani takaisin. (I would like to return the product and get my money back.)</li>
            <li><strong>Closing:</strong> Ystävällisin terveisin, [Your Name]</li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. The Informal Message (Epävirallinen viesti)</h3>
        <p>
          <strong>Scenario:</strong> You are inviting a friend to your summer cottage for the weekend.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 mb-6">
          <h4 className="font-bold mb-2">Reusable Template Framework:</h4>
          <ul className="list-none pl-0">
            <li><strong>Greeting:</strong> Moi [Name]! / Terve!</li>
            <li><strong>Opening:</strong> Mitä kuuluu? Toivottavasti sinulle kuuluu hyvää. (How are you? I hope you are doing well.)</li>
            <li><strong>The Invite:</strong> Haluaisitko tulla minun mökille ensi viikonloppuna? (Would you like to come to my cottage next weekend?)</li>
            <li><strong>Details:</strong> Voimme saunoa ja uida. (We can go to the sauna and swim.)</li>
            <li><strong>Closing:</strong> Nähdään pian! Terveisin, [Your Name]</li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3. The Opinion Piece (Mielipidekirjoitus)</h3>
        <p>
          <strong>Scenario:</strong> You are writing to a local newspaper about why public transport should be free.
        </p>
        <p>
          This is often the hardest task. You must take a clear stance, provide at least two supporting arguments, and write a concluding sentence.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-4">
          High-Value Vocabulary for Finnish Writing Exercises
        </h2>
        <p>
          Memorizing versatile phrases is the secret weapon for fast improvement. Categorize your vocabulary to ensure you always have the right transitional word ready.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-lg mb-2 text-green-700">Expressing Opinion</h4>
            <ul className="list-disc pl-5">
              <li><strong>Minun mielestäni...</strong> (In my opinion...)</li>
              <li><strong>Olen sitä mieltä, että...</strong> (I am of the opinion that...)</li>
              <li><strong>Uskon, että...</strong> (I believe that...)</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-lg mb-2 text-green-700">Adding Information</h4>
            <ul className="list-disc pl-5">
              <li><strong>Lisäksi...</strong> (In addition...)</li>
              <li><strong>Toisaalta...</strong> (On the other hand...)</li>
              <li><strong>Esimerkiksi...</strong> (For example...)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-4">
          Common Mistakes and How to Correct Them
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-red-600">Mistake: Inconsistent Formality</h3>
            <p>
              <strong>The Problem:</strong> Writing <em>&quot;Moi, kirjoitan teille koska...&quot;</em> to a formal institution. Mixing casual greetings with formal complaints is an immediate red flag for examiners.
            </p>
            <p>
              <strong>The Correction:</strong> Always establish the context first. If writing to a company, school, or authority, use <em>&quot;Hyvä vastaanottaja&quot;</em> and standard <em>kirjakieli</em>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-red-600">Mistake: Ignoring Partitive Rules After Numbers</h3>
            <p>
              <strong>The Problem:</strong> Writing <em>&quot;Minulla on kaksi koirat.&quot;</em>
            </p>
            <p>
              <strong>The Correction:</strong> In Finnish, numbers greater than one require the following noun to be in the partitive singular. It must be <em>&quot;Minulla on kaksi koiraa.&quot;</em>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-red-600">Mistake: Overcomplicating Sentences</h3>
            <p>
              <strong>The Problem:</strong> Translating long, complex English sentences directly into Finnish, resulting in severe grammatical breakdown.
            </p>
            <p>
              <strong>The Correction:</strong> Keep sentences relatively short and clear. Use conjunctions like <em>mutta</em> (but), <em>koska</em> (because), and <em>että</em> (that) to connect two simple ideas rather than forming massive paragraphs.
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8 mt-16">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
        <ul className="space-y-2">
          <li><Link href="/wiki/guides/yki-writing-topics" className="text-blue-700 hover:underline">YKI Writing Topics: Common Exam Themes and Questions</Link></li>
          <li><Link href="/wiki/guides/how-to-improve-finnish-writing-skills-yki-test" className="text-blue-700 hover:underline">How to Improve Finnish Writing Skills for YKI Test</Link></li>
        </ul>
      </nav>

      <section className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center shadow-lg">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Ready to Test Your Finnish Writing Skills?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Stop guessing if your writing is good enough for the exam. Get instant, AI-powered feedback on your YKI practice essays, complaints, and messages.
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
            <h3 className="text-xl font-semibold text-gray-800 mb-2">How much time should I spend on YKI writing practice?</h3>
            <p className="text-gray-600">
              For the intermediate level (Keskitaso), you should aim for at least two to three targeted writing sessions per week. Focus on different text types (formal, informal, and opinion pieces) during each session to build versatility.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">What are the most common YKI practice topics?</h3>
            <p className="text-gray-600">
              The most frequent YKI practice topics include writing a formal complaint to a company, sending an informal email to a friend about a shared plan, and composing an opinion piece (mielipidekirjoitus) on everyday societal issues like public transport or recycling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Can I use spoken language (puhekieli) in the YKI writing test?</h3>
            <p className="text-gray-600">
              You should only use spoken Finnish (puhekieli) in the informal message task, such as writing to a friend. For formal messages and opinion pieces, examiners expect strict use of standard written Finnish (kirjakieli).
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
