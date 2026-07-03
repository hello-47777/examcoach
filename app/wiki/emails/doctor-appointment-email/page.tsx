import Link from "next/link";

export const metadata = {
  title: "YKI Writing: Doctor Appointment Message Guide & B1 Examples",
  description: "Learn how to write a message to book a doctor's appointment (lääkärinaika) for the Finnish YKI exam. Master symptom vocabulary and B1 formal structures.",
};

export default function YkiDoctorAppointmentEmailPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <article className="prose prose-lg max-w-none text-gray-800">
          <h1 className="mb-8 text-4xl font-extrabold text-[#2563EB]">
            Writing a Doctor Appointment Message for YKI: A Health Care Guide
          </h1>

          <p>
            Hello language learners! Navigating the healthcare system is an essential part of living in Finland, which makes booking a doctor&apos;s appointment (<em>lääkärinajan varaaminen</em>) a very common task in the YKI intermediate exam. Usually, you are asked to write an email or an online portal message to your local health center (<em>terveyskeskus</em>). The examiner wants to see that you can clearly describe your symptoms and politely request an appointment. Let&apos;s break down how to do this perfectly.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Step-by-Step Formatting Guide
          </h2>
          <p>
            When writing to a health clinic, clarity is your best friend. The staff needs to know who you are, what is wrong, and what you need. Follow this structured five-step approach:
          </p>
          <ul>
            <li>
              <strong>1. Professional Greeting:</strong> Use a polite opening. <em>Hei</em> or <em>Hyvä terveyskeskuksen henkilökunta</em> works well for a clinic.
            </li>
            <li>
              <strong>2. State Your Purpose:</strong> Get straight to the point. Say that you want to book an appointment (<em>Haluaisin varata ajan lääkärille / hoitajalle</em>).
            </li>
            <li>
              <strong>3. Describe Your Symptoms:</strong> This is where you show off your vocabulary! Explain what hurts, what your symptoms (<em>oireet</em>) are, and how long you have been sick. Use the "Minulla on..." (I have...) structure.
            </li>
            <li>
              <strong>4. State Your Availability & Needs:</strong> Tell them when you are able to come to the clinic. Also, mention if you need a sick leave certificate (<em>sairauslomatodistus</em>) for your employer.
            </li>
            <li>
              <strong>5. Contact Info and Sign-off:</strong> End politely with <em>Ystävällisin terveisin</em>, your full name, and your phone number so they can reach you.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Common Mistakes Candidates Make
          </h2>
          <p>
            Medical prompts can make students nervous, leading to basic errors. Watch out for these three pitfalls:
          </p>
          <ul>
            <li>
              <strong>Being Too Vague:</strong> Simply writing <em>&quot;Olen sairas&quot;</em> (I am sick) does not give the examiner enough to evaluate your B1 vocabulary. You must name specific symptoms like fever (<em>kuume</em>), cough (<em>yskä</em>), or pain (<em>kipu</em>).
            </li>
            <li>
              <strong>Forgetting the "Minulla on" Rule:</strong> In Finnish, you don&apos;t "am" sick with a fever, you "have" a fever. Remember to use the adessive case: <em>Minulla on kuumetta</em> (I have a fever), not <em>Olen kuume</em> (I am a fever).
            </li>
            <li>
              <strong>Ignoring the Time Constraint:</strong> If the prompt asks you to tell the clinic when you are available, failing to include days or times (e.g., <em>&quot;Pääsen tulemaan vain iltapäivällä&quot;</em>) will lower your task fulfillment score based on the <Link href="/wiki/scoring/yki-b1-guide" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing scoring</Link> rubrics.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            B1-Level Example: Booking a Time for a Bad Cold
          </h2>
          <p>
            Below is a model response for booking an appointment due to a prolonged illness. It is clear, polite, and answers all the typical requirements of a YKI health prompt. You can find more situational examples like this in our <Link href="/wiki/templates/examples" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing examples</Link> section.
          </p>
          
          <div className="my-6 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <p><strong>Aihe: Ajanvaraus lääkärille / Anna Virtanen</strong></p>
            <p>Hei,</p>
            <p>
              Haluaisin varata ajan lääkärille mahdollisimman pian. 
            </p>
            <p>
              Olen ollut sairaana jo yli kolme päivää. Minulla on korkea kuume, kova yskä ja kurkkukipua. Olen ottanut särkylääkettä, mutta se ei ole auttanut, ja oloni on edelleen todella huono.
            </p>
            <p>
              Tarvitsen lääkärin apua ja lisäksi sairauslomatodistuksen työpaikkaani varten. Pääsen tulemaan terveyskeskukseen minä tahansa päivänä kello 10.00 jälkeen.
            </p>
            <p>
              Voitteko ilmoittaa minulle vapaasta ajasta sähköpostitse tai soittaa numeroon 040 123 4567?
            </p>
            <p>Ystävällisin terveisin,<br/>Anna Virtanen</p>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Essential Medical Vocabulary
          </h2>
          <p>
            Learn these key healthcare terms to confidently write about illnesses:
          </p>
          <ul>
            <li><strong>Varata aika:</strong> To book an appointment</li>
            <li><strong>Terveyskeskus:</strong> Health center / clinic</li>
            <li><strong>Oire:</strong> Symptom</li>
            <li><strong>Kuume:</strong> Fever</li>
            <li><strong>Yskä:</strong> Cough</li>
            <li><strong>Kipu / Särky:</strong> Pain / Ache (e.g., päänsärky = headache)</li>
            <li><strong>Särkylääke:</strong> Painkiller</li>
            <li><strong>Sairauslomatodistus:</strong> Sick leave certificate</li>
          </ul>
        </article>

        <div className="my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 p-8 text-center text-white shadow-xl">
          <h3 className="mb-4 text-2xl font-bold text-white">Practice makes perfect!</h3>
          <p className="mb-6 text-blue-50">Check your YKI writing score instantly with our AI Examiner.</p>
          <Link href="/" className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
            Try Our Free YKI Writing Checker
          </Link>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Is it better to ask for a doctor (lääkäri) or a nurse (hoitaja)?</h3>
            <p className="text-[#64748B]">
              Unless the prompt specifically asks you to book a time with a nurse, it is perfectly fine to ask for a doctor (<em>lääkäri</em>). In real life in Finland, nurses often handle initial assessments, but for the exam, using <em>lääkäri</em> is standard and correct.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Do I need to include my personal identity code (henkilötunnus)?</h3>
            <p className="text-[#64748B]">
              No! For privacy and safety reasons, never write your real personal identity code in any exam task. If a prompt requires it, invent a fake one or simply write your full name and date of birth instead.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">How do I ask for a sick leave certificate?</h3>
            <p className="text-[#64748B]">
              This is a very common requirement in YKI tasks. You can use a simple phrase like: <em>&quot;Tarvitsen sairauslomatodistuksen pomolleni / työpaikalle.&quot;</em> (I need a sick leave certificate for my boss / for work).
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
                  "name": "Is it better to ask for a doctor (lääkäri) or a nurse (hoitaja)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Unless the prompt specifically asks you to book a time with a nurse, it is perfectly fine to ask for a doctor (lääkäri). In real life in Finland, nurses often handle initial assessments, but for the exam, using lääkäri is standard and correct."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to include my personal identity code (henkilötunnus)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No! For privacy and safety reasons, never write your real personal identity code in any exam task. If a prompt requires it, invent a fake one or simply write your full name and date of birth instead."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I ask for a sick leave certificate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "This is a very common requirement in YKI tasks. You can use a simple phrase like: 'Tarvitsen sairauslomatodistuksen pomolleni / työpaikalle.' (I need a sick leave certificate for my boss / for work)."
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