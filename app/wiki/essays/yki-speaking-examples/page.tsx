import { Metadata } from 'next';
import Link from 'next/link';
import { generateWikiMetadata } from '@/lib/wiki-metadata';

export const metadata = generateWikiMetadata('essays', 'yki-speaking-examples', {
  title: 'YKI Writing: Speaking Examples: Finnish Speaking Answers for B1-B2',
  description: 'Master the YKI oral test with realistic YKI speaking examples. Learn how to structure your Finnish speaking practice to achieve a B1-B2 passing grade.',
});

export default function YKISpeakingExamplesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long should my answers be in the YKI oral test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the YKI oral test (keskitaso B1-B2), you typically have 20 to 60 seconds to answer depending on the task type. Shorter reaction tasks require 1-2 clear sentences, while longer opinion tasks require structured, multi-sentence responses."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I make a grammar mistake during my Finnish speaking practice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the YKI exam, communication is more important than perfect grammar. If you make a mistake, correct yourself quickly if possible, or simply keep talking. Examiners are evaluating your ability to be understood in everyday situations."
        }
      },
      {
        "@type": "Question",
        "name": "Are these YKI speaking examples enough to pass the exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While these examples provide an excellent framework for B1-B2 level responses, you must actively incorporate them into your daily Finnish speaking practice. Consistency and practicing under timed conditions are key to passing."
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
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
            
            {/* Header Section */}
            <header className="mb-10">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
                YKI Speaking Examples: Master the Finnish Oral Test for B1-B2
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                If you want to pass the intermediate Finnish language exam (keskitaso), studying realistic <strong>YKI speaking examples</strong> is essential. In this guide, we will walk you through high-quality examples, breakdown why they score well for the B1-B2 level, and show you how to structure your <strong>Finnish speaking practice</strong> to succeed in the <strong>YKI oral test</strong>.
              </p>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg prose-indigo max-w-none text-gray-700">
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                Why Analyzing YKI Speaking Examples is Crucial
              </h2>
              <p>
                The YKI oral test happens in a language lab. You will speak into a microphone, often with a strict time limit, and you won't be talking face-to-face with a human examiner. This unnatural environment can cause anxiety. By memorizing the structure of good YKI speaking examples, you train your brain to react automatically, ensuring you don't freeze when the timer starts.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                Scenario 1: Reacting in Everyday Situations (Reagointi)
              </h2>
              <p>
                In the first part of the YKI oral test, you must react quickly to short prompts. You usually have about 20 seconds to reply.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-6">
                <h3 className="text-lg font-semibold text-blue-900 mt-0">Prompt (Situation)</h3>
                <p className="italic text-blue-800">
                  Olet ostanut uuden puhelimen, mutta se ei toimi. Soitat kauppaan. (You bought a new phone, but it doesn't work. You call the store.)
                </p>
                
                <h3 className="text-lg font-semibold text-blue-900 mt-4">B1-B2 Example Answer</h3>
                <p className="text-gray-800 font-medium">
                  "Hei, nimeni on Alex. Ostin teiltä eilen uuden matkapuhelimen, mutta huomasin kotona, että se ei toimi. Näyttö on täysin pimeä. Haluaisin palauttaa tämän tai vaihtaa uuteen. Miten minun pitäisi toimia?"
                </p>
                
                <h3 className="text-lg font-semibold text-blue-900 mt-4">Why this works:</h3>
                <ul className="text-blue-800 text-sm list-disc pl-4 mb-0">
                  <li><strong>Greeting & Context:</strong> Starts naturally with a greeting and immediately states the problem ("Ostin teiltä eilen... mutta se ei toimi").</li>
                  <li><strong>Specific Detail:</strong> Adds a small, realistic detail ("Näyttö on täysin pimeä" - The screen is completely dark) which shows B1 vocabulary.</li>
                  <li><strong>Clear Request:</strong> Ends with a direct question indicating what they want to happen ("Haluaisin palauttaa..." and "Miten minun pitäisi toimia?").</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                Scenario 2: Expressing an Opinion (Mielipiteen ilmaiseminen)
              </h2>
              <p>
                Later in the test, you will be asked to talk continuously for 1 to 2 minutes about a specific topic. This requires structuring your thoughts with clear connecting words.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-6">
                <h3 className="text-lg font-semibold text-green-900 mt-0">Prompt (Topic)</h3>
                <p className="italic text-green-800">
                  Mitä mieltä olet etätyöstä? (What is your opinion on remote work?)
                </p>
                
                <h3 className="text-lg font-semibold text-green-900 mt-4">B1-B2 Example Answer</h3>
                <p className="text-gray-800 font-medium">
                  "Olen sitä mieltä, että etätyö on nykyään erittäin tärkeä asia. Ensimmäiseksi se säästää paljon aikaa ja rahaa, koska minun ei tarvitse matkustaa työpaikalle joka päivä. Voin myös keskittyä paremmin kotona, kun on hiljaista. Toisaalta on myös tärkeää nähdä työkavereita ja jutella heidän kanssaan. Siksi uskon, että hybridimalli, jossa tehdään töitä sekä kotona että toimistolla, on paras vaihtoehto."
                </p>
                
                <h3 className="text-lg font-semibold text-green-900 mt-4">Why this works:</h3>
                <ul className="text-green-800 text-sm list-disc pl-4 mb-0">
                  <li><strong>Clear Opening:</strong> Uses a standard opinion phrase ("Olen sitä mieltä, että...").</li>
                  <li><strong>Connectors:</strong> Uses transition words to organize points ("Ensimmäiseksi", "Toisaalta", "Siksi").</li>
                  <li><strong>Balanced Argument:</strong> Discusses both the pros of remote work and the cons (missing colleagues), concluding with a nuanced solution (hybrid work). This is classic B2 level task fulfillment.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                How to Structure Your Finnish Speaking Practice
              </h2>
              <p>
                Reading these examples is just the first step. To ensure you perform well in the actual YKI oral test, follow this practice framework:
              </p>
              <ol>
                <li><strong>Record Yourself:</strong> Set a timer for 20 seconds or 1 minute (depending on the task type) and record your answer on your phone.</li>
                <li><strong>Listen and Transcribe:</strong> Write down exactly what you said.</li>
                <li><strong>Compare and Correct:</strong> Compare your transcription against high-quality YKI speaking examples. Did you use connecting words? Did you hesitate too long?</li>
                <li><strong>Repeat:</strong> Do the same prompt again, consciously applying the corrections.</li>
              </ol>

            </div>
          </div>
          
          {/* Internal Links - Related Articles */}
          <nav className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 not-prose">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h2>
            <ul className="space-y-2">
              <li><Link href="/wiki/essays/yki-opinion-writing-examples" className="text-blue-700 hover:underline">YKI Opinion Writing Examples: Finnish B1-B2 Sample Essays</Link></li>
              <li><Link href="/wiki/guides/ai-yki-writing-checker" className="text-blue-700 hover:underline">AI YKI Writing Checker: Check Your Finnish Writing Level Instantly</Link></li>
            </ul>
          </nav>

          {/* CTA Section */}
          <div className="bg-indigo-700 p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Master the YKI Oral Test?</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Stop guessing what the examiners want. Use our AI-driven platform to practice with hundreds of realistic prompts and get instant, personalized feedback on your Finnish speaking skills.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors duration-200"
            >
              Start Practicing on ExamCoach.ai Now
            </Link>
          </div>
        </article>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto mt-16 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long should my answers be in the YKI oral test?</h3>
              <p className="text-gray-600">
                For the YKI oral test (keskitaso B1-B2), you typically have 20 to 60 seconds to answer depending on the task type. Shorter reaction tasks require 1-2 clear sentences, while longer opinion tasks require structured, multi-sentence responses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What happens if I make a grammar mistake during my Finnish speaking practice?</h3>
              <p className="text-gray-600">
                In the YKI exam, communication is more important than perfect grammar. If you make a mistake, correct yourself quickly if possible, or simply keep talking. Examiners are evaluating your ability to be understood in everyday situations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Are these YKI speaking examples enough to pass the exam?</h3>
              <p className="text-gray-600">
                While these examples provide an excellent framework for B1-B2 level responses, you must actively incorporate them into your daily Finnish speaking practice. Consistency and practicing under timed conditions are key to passing.
              </p>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}