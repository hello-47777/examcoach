import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'The Examiner’s Guide to Acing the YKI Complaint Letter',
  description: 'An official YKI examiner’s perspective on how to write a passing complaint letter (reklamaatio) for the Finnish B1 language test. Learn the exact criteria we use to score you.',
  alternates: {
    canonical: 'https://examcoach.ai/finland/yki-writing-complaint-letter',
  },
};

export default function YkiComplaintLetterPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Will I fail the YKI complaint letter if I use angry language?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it is highly likely you will lose points for tone. In Finnish culture and the YKI B1 assessment framework, a complaint must be factual, polite, and objective. Aggressive insults show a lack of socio-linguistic competence."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I don't know the exact Finnish word for the broken item?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As an examiner, I look for your ability to circumlocute (explain around a word). If you forget the word for 'washing machine' (pesukone), you can say 'laite, jolla pesen vaatteita' (the device with which I wash clothes). This demonstrates B1 communication strategies."
        }
      },
      {
        "@type": "Question",
        "name": "How long should the complaint letter be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Length is less important than task completion. However, a passing complaint letter typically requires at least 4 to 6 well-constructed sentences to adequately cover the problem, the context, and your demand for compensation."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 py-12">
        <article className="prose prose-blue max-w-none">
          <h1>The Examiner’s Guide to Acing the YKI Complaint Letter</h1>

          <p>
            Let us be perfectly clear from the beginning: I evaluate hundreds of YKI exam papers every testing cycle. When candidates reach the complaint letter task (<em>valitus</em> or <em>reklamaatio</em>), I see a high volume of preventable errors. Candidates routinely allow emotion to override structure, or they fail to provide the factual information requested in the prompt. 
          </p>
          <p>
            The complaint letter is not a test of your ability to express rage in Finnish. It is a precise assessment of your functional language capability. Can you identify a problem objectively? Can you request a resolution clearly? Can you maintain an appropriate level of formality? If you cannot execute these three functions, you will not receive a Level 3 (B1) score. Today, I will outline exactly what is expected of you in this specific task.
          </p>

          <div className="my-12 p-8 bg-gradient-to-r from-blue-600 to-blue-900 rounded-2xl shadow-xl text-center text-white not-prose">
            <h3 className="text-2xl font-bold mb-4 text-white">Practice with AI and instantly improve your YKI writing score.</h3>
            <p className="mb-6 text-blue-100 text-lg">Stop guessing what examiners want. Submit your practice complaint letters and get immediate, strict B1 grading.</p>
            <a href="/" className="inline-block bg-white text-blue-800 font-bold py-4 px-10 rounded-xl shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105">
              Try Our Free YKI Writing Checker
            </a>
          </div>

          <h2>What We Look For: The Assessment Criteria</h2>

          <p>
            When I look at your paper, I am scanning for specific markers of B1 proficiency. I do not care if you have memorized complex poetic vocabulary; I care if you can resolve a consumer dispute effectively in standard Finnish (<em>kirjakieli</em>).
          </p>
          <p>
            To achieve a passing grade, you must address the following structural mandates. For a deeper dive into how point distribution works across different sections, I strongly advise candidates to review our official breakdown of <Link href="/finland/yki-writing-scoring" className="text-blue-600 underline">YKI writing scoring criteria</Link>.
          </p>

          <h3>1. Task Completion (Tehtävänanto)</h3>
          <p>
            The prompt will provide specific instructions. It will tell you what you bought, what is wrong with it, and what you must ask for. If the prompt instructs you to ask for a replacement, and you ask for a refund instead, you have failed to complete the task as instructed. We penalize candidates heavily for ignoring the bullet points.
          </p>

          <h3>2. Objective Tone (Asiatyyli)</h3>
          <p>
            A Finnish complaint is polite, firm, and entirely factual. Emotional outbursts or direct translations of aggressive English idioms will result in a lower score. You must demonstrate the socio-linguistic awareness that Finnish businesses expect polite communication, even when resolving an error.
          </p>

          <h3>3. Clarity and Cohesion (Ymmärrettävyys ja sidosteisuus)</h3>
          <p>
            Your sentences must connect logically. The examiner should not have to guess what you mean. The use of basic conjunctions like <em>koska</em> (because), <em>siksi</em> (therefore), and <em>mutta</em> (but) is mandatory at this level to show causal relationships between the defective product and your dissatisfaction.
          </p>

          <h2>Structural Mandates of a Finnish Complaint</h2>

          <p>
            A successful response to a complaint prompt follows a strict, predictable format. Do not deviate from this formula. We expect to see the following sections in this exact order:
          </p>
          
          <ol>
            <li><strong>The Reference:</strong> State exactly what you are complaining about (date of purchase, product name, or service).</li>
            <li><strong>The Defect:</strong> Explain clearly what is wrong. What happened?</li>
            <li><strong>The Consequence:</strong> How did this affect you? (Optional but highly recommended for demonstrating B1 vocabulary).</li>
            <li><strong>The Demand:</strong> State precisely what you want the company to do about it.</li>
          </ol>

          <h2>Required Vocabulary and Phrasing</h2>

          <p>
            You must memorize standard phrases used in Finnish consumer complaints. Using these correctly signals to the examiner that you have prepared specifically for real-world interactions in Finland.
          </p>

          <h3>Opening the Letter</h3>
          <p>
            Begin professionally. Address the customer service department directly if a specific name is not provided.
          </p>
          <ul>
            <li><strong>Hei, / Hyvä asiakaspalvelu,</strong> (Hello, / Dear customer service,)</li>
            <li><strong>Haluan tehdä valituksen tuotteesta, jonka ostin teiltä eilen.</strong> (I want to make a complaint about the product I bought from you yesterday.)</li>
            <li><strong>Kirjoitan, koska haluan reklamoida saamastani palvelusta.</strong> (I am writing because I want to complain about the service I received.)</li>
          </ul>

          <h3>Explaining the Problem</h3>
          <p>
            Be direct and use the past tense (imperfekti) to describe when you discovered the issue.
          </p>
          <ul>
            <li><strong>Huomasin kotona, että tuote on rikki.</strong> (I noticed at home that the product is broken.)</li>
            <li><strong>Laite ei toimi, vaikka seurasin ohjeita.</strong> (The device does not work, even though I followed the instructions.)</li>
            <li><strong>Tilasin punaisen paidan, mutta sain sinisen.</strong> (I ordered a red shirt, but I received a blue one.)</li>
          </ul>

          <h3>Expressing Dissatisfaction</h3>
          <p>
            This must be done calmly. Do not use exclamation marks.
          </p>
          <ul>
            <li><strong>Olen erittäin pettynyt tähän tilanteeseen.</strong> (I am very disappointed with this situation.)</li>
            <li><strong>Tämä ei vastaa odotuksiani.</strong> (This does not meet my expectations.)</li>
          </ul>

          <h3>Stating Your Demand</h3>
          <p>
            Use the conditional mood (isi-muoto) to sound polite, or state your demand firmly but professionally.
          </p>
          <ul>
            <li><strong>Haluaisin uuden tuotteen viallisen tilalle.</strong> (I would like a new product to replace the defective one.)</li>
            <li><strong>Vaadin rahojen palautusta.</strong> (I demand a refund.)</li>
            <li><strong>Toivon,