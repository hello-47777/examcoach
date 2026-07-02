import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {/* Top: Links grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Product</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-blue-600">
                  Writing Checker
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-gray-600 hover:text-blue-600">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-sm text-gray-600 hover:text-blue-600">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Wiki</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/wiki" className="text-sm text-gray-600 hover:text-blue-600">
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="/wiki/guides/tips" className="text-sm text-gray-600 hover:text-blue-600">
                  Writing Tips
                </Link>
              </li>
              <li>
                <Link href="/wiki/scoring/yki-b1-guide" className="text-sm text-gray-600 hover:text-blue-600">
                  Scoring Guide
                </Link>
              </li>
              <li>
                <Link href="/wiki/templates/examples" className="text-sm text-gray-600 hover:text-blue-600">
                  Examples
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/wiki/guides/topics" className="text-sm text-gray-600 hover:text-blue-600">
                  YKI Topics
                </Link>
              </li>
              <li>
                <Link href="/wiki/emails/job-application" className="text-sm text-gray-600 hover:text-blue-600">
                  Email Guide
                </Link>
              </li>
              <li>
                <Link href="/wiki/essays/advantages-disadvantages" className="text-sm text-gray-600 hover:text-blue-600">
                  Essay Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/login" className="text-sm text-gray-600 hover:text-blue-600">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center shadow-sm">
          <p className="text-lg font-semibold text-white sm:text-xl">
            Ready to pass YKI? Start your first writing check now →
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-colors hover:bg-gray-100"
          >
            Start Free Check
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-100 pt-6 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} ExamCoach.ai — YKI Writing Checker
          </p>
        </div>
      </div>
    </footer>
  );
}
