import Link from "next/link";
import { generateWikiMetadata } from "@/lib/wiki-metadata";

export const metadata = generateWikiMetadata("emails", "invitation-email", {
  title: "YKI Writing: Invitation Email Guide & Examples",
  description: "Learn how to write a casual and friendly invitation email for the Finnish YKI exam. Get step-by-step coaching, B1-level examples, and key vocabulary.",
});

export default function YkiInvitationEmailPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <article className="prose prose-lg max-w-none text-gray-800">
          <h1 className="mb-8 text-4xl font-extrabold text-[#2563EB]">
            Writing an Invitation Email for the YKI Exam: A Student Coach&apos;s Guide
          </h1>

          <p>
            Hello, language learners! As your Student Coach, I often see candidates overthink the informal writing tasks on the YKI test. The invitation email (<em>kutsu</em>) is a classic example. It tests your ability to manage everyday social situations, organize a simple event, and communicate casually with a friend or colleague. Let&apos;s break down how to craft a warm, welcoming, and grammatically correct invitation that guarantees a high score.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Step-by-Step Formatting Guide
          </h2>
          <p>
            An invitation email should feel natural but still cover all the logical steps of event planning. Follow this simple structure:
          </p>
          <ul>
            <li>
              <strong>1. Casual Greeting:</strong> Start with a friendly, informal opening like <em>Moi Matti!</em> or <em>Hei Anna!</em> Asking <em>Mitä kuuluu?</em> (How are you?) is a great way to set a warm tone.
            </li>
            <li>
              <strong>2. The Purpose of the Email:</strong> State clearly that you are hosting an event and want them to come. (e.g., &quot;I am celebrating my birthday and would like to invite you.&quot;)
            </li>
            <li>
              <strong>3. Event Details (Crucial!):</strong> Always include the time (<em>milloin</em>), the place (<em>missä</em>), and any special instructions, such as what to bring or wear.
            </li>
            <li>
              <strong>4. Call to Action (RSVP):</strong> Ask the recipient to confirm if they can make it. Use phrases like <em>Ilmoita minulle, pääsetkö tulemaan</em> (Let me know if you can come).
            </li>
            <li>
              <strong>5. Warm Closing:</strong> End with a casual sign-off such as <em>Nähdään!</em> (See you!) or <em>Terveisin</em> (Regards), followed by your first name.
            </li>
          </ul>

          <p>
            Mastering these steps ensures you hit every requirement of the prompt. For more advice on how to structure different types of informal messages, I highly recommend checking out our <Link href="/wiki/guides/tips" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing tips</Link> to boost your overall confidence.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Common Mistakes Students Make
          </h2>
          <p>
            Even in a casual email, there are specific traps that can lower your grade. Here are the top three mistakes I see in my coaching sessions:
          </p>
          <ul>
            <li>
              <strong>Being Too Formal:</strong> If the prompt says you are writing to a friend, do not use <em>Hyvä ystävä</em> or the formal <em>Te</em>. Use <em>sinä</em> and keep the tone relaxed.
            </li>
            <li>
              <strong>Forgetting Logistics:</strong> An invitation without a date or time is useless! Examiners will deduct points if you miss these practical details because it means you haven&apos;t fully answered the prompt.
            </li>
            <li>
              <strong>Confusing &quot;Missä&quot; and &quot;Mihin&quot;:</strong> When talking about location, remember that arriving at your place is <em>minun luokseni</em> (to my place), but the party happening at your place is <em>minun luonani</em> (at my place).
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            B1-Level Example: A Birthday Party Invitation
          </h2>
          <p>
            Here is a model answer for a classic YKI prompt: inviting a friend to a birthday party. If you want to see how this compares to formal texts, browse through our other <Link href="/wiki/templates/examples" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing examples</Link> to understand the difference in tone.
          </p>
          
          <div className="my-6 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <p><strong>Aihe: Kutsun sinut syntymäpäiväjuhliin!</strong></p>
            <p>Moi Matti!</p>
            <p>Mitä kuuluu? Toivottavasti sinulle kuuluu hyvää.</p>
            <p>
              Kirjoitan sinulle, koska täytän ensi viikolla 30 vuotta ja järjestän juhlat. Haluaisin kutsua sinut juhlimaan minun kanssani!
            </p>
            <p>
              Juhlat ovat minun kotonani ensi lauantaina, 12. elokuuta, kello 18.00 alkaen. Minä tarjoan ruokaa, kakkua ja juotavaa, mutta voit ottaa mukaan omat saunajuomat, jos haluat. Meillä on tarkoitus saunoa ja kuunnella hyvää musiikkia.
            </p>
            <p>
              Voitko ilmoittaa minulle viimeistään keskiviikkona, pääsetkö tulemaan? Olisi tosi kiva nähdä sinut pitkästä aikaa.
            </p>
            <p>Nähdään lauantaina!</p>
            <p>Terveisin,<br/>Alex</p>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Essential Invitation Vocabulary
          </h2>
          <p>
            Keep these words handy when practicing for your exam:
          </p>
          <ul>
            <li><strong>Kutsu:</strong> Invitation</li>
            <li><strong>Kutsua:</strong> To invite</li>
            <li><strong>Järjestää juhlat:</strong> To organize a party</li>
            <li><strong>Syntymäpäivä:</strong> Birthday</li>
            <li><strong>Ilmoittaa:</strong> To inform / to let someone know</li>
            <li><strong>Tarjota:</strong> To offer / to serve (food/drinks)</li>
            <li><strong>Otta mukaan:</strong> To bring with</li>
            <li><strong>Viimeistään:</strong> At the latest</li>
          </ul>
        </article>

        <div className="my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 p-8 text-center text-white shadow-xl">
          <h3 className="mb-4 text-2xl font-bold text-white">Practice makes perfect!</h3>
          <p className="mb-6 text-blue-50">Check your YKI writing score instantly with our AI Examiner.</p>
          <Link href="/" className="inline-block rounded-xl bg-white px-6 py-3 font-semibold text-[#2563EB] shadow-sm transition-colors hover:bg-gray-100">
            Try Our Free YKI Writing Checker
          </Link>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Is it okay to use spoken language (puhekieli) in an invitation?</h3>
            <p className="text-[#64748B]">
              If the prompt explicitly states you are writing to a close friend, you can use some mild spoken language elements (like &quot;kiva&quot; instead of &quot;mukava&quot;). However, as your coach, I recommend sticking mostly to standard written Finnish (kirjakieli) because it is safer and guarantees you won&apos;t make awkward stylistic errors.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">How long should an informal invitation email be?</h3>
            <p className="text-[#64748B]">
              Informal messages in the YKI exam are usually shorter than formal letters. Aim for around 50 to 80 words. Focus on answering the prompt&apos;s bullet points efficiently rather than writing a long essay.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Do I need to make up a real address for the invitation?</h3>
            <p className="text-[#64748B]">
              No, you do not need to invent a complex Finnish street address. Simply saying &quot;minun kotonani&quot; (at my home) or &quot;puistossa&quot; (in the park) is completely sufficient for the exam and reduces the risk of making grammar mistakes with location cases.
            </p>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is it okay to use spoken language (puhekieli) in an invitation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If the prompt explicitly states you are writing to a close friend, you can use some mild spoken language elements (like 'kiva' instead of 'mukava'). However, as your coach, I recommend sticking mostly to standard written Finnish (kirjakieli) because it is safer and guarantees you won't make awkward stylistic errors."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long should an informal invitation email be?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Informal messages in the YKI exam are usually shorter than formal letters. Aim for around 50 to 80 words. Focus on answering the prompt's bullet points efficiently rather than writing a long essay."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to make up a real address for the invitation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, you do not need to invent a complex Finnish street address. Simply saying 'minun kotonani' (at my home) or 'puistossa' (in the park) is completely sufficient for the exam and reduces the risk of making grammar mistakes with location cases."
                  }
                }
              ]
            })
          }}
        />
      </div>
    </div>
  );
}
