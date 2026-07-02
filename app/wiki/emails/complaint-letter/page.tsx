import Link from "next/link";

export const metadata = {
  title: "YKI Writing: Complaint Letter Guide & Examples",
  description: "Learn how to write an effective complaint letter for the Finnish YKI exam. Structure, key phrases, and a B1-level example to help you score higher.",
};

export default function YkiComplaintLetterPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <article className="prose prose-lg max-w-none text-gray-800">
          <h1 className="mb-8 text-4xl font-extrabold text-[#2563EB]">
            YKI Writing Complaint Letter
          </h1>

          <p>
            A complaint letter (<em>valituskirje</em>) is a formal writing task that appears regularly in the YKI exam. It tests your ability to explain a problem clearly, describe what went wrong, and request a specific solution — all in polite, standard written Finnish.
          </p>

          <p>
            Full guide is being prepared. For now, you can read more in our <Link href="/wiki/guides/tips" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing tips</Link> or review the official <Link href="/wiki/scoring/yki-b1-guide" className="font-semibold text-[#2563EB] underline hover:text-blue-800">YKI writing scoring</Link> rubric.
          </p>
        </article>

        <div className="my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 p-8 text-center text-white shadow-xl">
          <h3 className="mb-4 text-2xl font-bold text-white">Practice makes perfect!</h3>
          <p className="mb-6 text-blue-50">Check your YKI writing score instantly with our AI Examiner.</p>
          <Link href="/" className="inline-block rounded-xl bg-white px-6 py-3 font-semibold text-[#2563EB] shadow-sm transition-colors hover:bg-gray-100">
            Try Our Free YKI Writing Checker
          </Link>
        </div>
      </div>
    </div>
  );
}
