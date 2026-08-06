import Link from 'next/link';
import { scoreAllArticles, getQualitySummary, CheckStatus } from '@/lib/article-quality-score';

export const metadata = {
  title: 'Article SEO Quality Check | ExamCoach Admin',
  description: 'Automated SEO quality checker for published articles.',
  robots: { index: false, follow: false },
};

const statusConfig: Record<CheckStatus, { label: string; style: string; icon: string }> = {
  pass: { label: 'PASS', style: 'text-green-700 bg-green-50', icon: '✅' },
  warn: { label: 'WARN', style: 'text-amber-700 bg-amber-50', icon: '⚠️' },
  fail: { label: 'FAIL', style: 'text-red-700 bg-red-50', icon: '❌' },
};

function scoreColor(score: number): string {
  if (score >= 90) return 'text-green-600';
  if (score >= 70) return 'text-amber-600';
  return 'text-red-600';
}

export default function ArticleCheckPage() {
  const scores = scoreAllArticles();
  const summary = getQualitySummary(scores);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/admin/seo"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mb-6"
        >
          ← Back to Admin
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 tracking-tight mb-3">
            Article SEO Quality Check
          </h1>
          <p className="text-base text-gray-600">
            Automated SEO quality analysis of all published Wiki articles. Read-only — no articles are modified.
          </p>
        </header>

        {/* Summary */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <p className="text-sm text-gray-500">Articles Checked</p>
            <p className="text-2xl font-bold text-gray-900">{scores.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <p className="text-sm text-gray-500">Average Score</p>
            <p className={`text-2xl font-bold ${scoreColor(summary.average)}`}>
              {summary.average}/100
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <p className="text-sm text-gray-500">Excellent (≥90)</p>
            <p className="text-2xl font-bold text-green-600">{summary.excellent}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <p className="text-sm text-gray-500">Needs Work (&lt;70)</p>
            <p className="text-2xl font-bold text-amber-600">{summary.needsWork}</p>
          </div>
        </section>

        {/* Articles list */}
        <section className="space-y-4">
          {scores.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center text-gray-500">
              No published articles found.
            </div>
          ) : (
            scores.map((article) => (
              <div
                key={article.url}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <div>
                    <Link
                      href={article.url}
                      className="text-base sm:text-lg font-semibold text-blue-600 hover:text-blue-700"
                    >
                      {article.title}
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">{article.url}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className={`text-2xl font-bold ${scoreColor(article.score)}`}>
                      {article.score}/100
                    </span>
                  </div>
                </div>

                {/* Checks grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {article.checks.map((check) => {
                    const cfg = statusConfig[check.status];
                    return (
                      <div
                        key={check.label}
                        className={`rounded-lg px-3 py-2 ${cfg.style}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium">{check.label}</span>
                          <span className="text-xs">{cfg.icon}</span>
                        </div>
                        {check.detail && (
                          <p className="text-xs mt-1 opacity-80">{check.detail}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
}
