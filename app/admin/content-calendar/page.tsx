import Link from 'next/link';
import { getCalendarEntries, ArticleStatus } from '@/lib/content-calendar';

export const metadata = {
  title: 'Content Calendar | ExamCoach Admin',
  description: 'Manage scheduled article publishing.',
  robots: { index: false, follow: false },
};

const statusStyles: Record<ArticleStatus, string> = {
  FUTURE: 'bg-gray-100 text-gray-700',
  READY: 'bg-amber-100 text-amber-800',
  PUBLISHED: 'bg-green-100 text-green-800',
};

export default function ContentCalendarPage() {
  const entries = getCalendarEntries();

  const stats = {
    total: entries.length,
    future: entries.filter((e) => e.status === 'FUTURE').length,
    ready: entries.filter((e) => e.status === 'READY').length,
    published: entries.filter((e) => e.status === 'PUBLISHED').length,
  };

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
            Content Calendar
          </h1>
          <p className="text-base text-gray-600">
            Scheduled article publishing plan. Reads from <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">_drafts/</code> folders (YYYY.M.D format).
          </p>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <p className="text-sm text-gray-500">Total</p>
            <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <p className="text-sm text-gray-500">Future</p>
            <p className="text-2xl font-bold text-gray-700">{stats.future}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <p className="text-sm text-gray-500">Ready</p>
            <p className="text-2xl font-bold text-amber-600">{stats.ready}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <p className="text-sm text-gray-500">Published</p>
            <p className="text-2xl font-bold text-green-600">{stats.published}</p>
          </div>
        </section>

        {/* Table */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {entries.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No scheduled articles found in <code>_drafts/</code>.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 sm:px-6 py-3 font-semibold text-gray-700">Date</th>
                    <th className="text-left px-4 sm:px-6 py-3 font-semibold text-gray-700">Article Name</th>
                    <th className="text-left px-4 sm:px-6 py-3 font-semibold text-gray-700">Category</th>
                    <th className="text-left px-4 sm:px-6 py-3 font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {entries.map((entry, i) => (
                    <tr key={`${entry.dateFolder}-${entry.articleName}-${i}`} className="hover:bg-gray-50">
                      <td className="px-4 sm:px-6 py-3 text-gray-900 whitespace-nowrap">
                        {entry.dateISO}
                      </td>
                      <td className="px-4 sm:px-6 py-3 text-gray-900">
                        {entry.status === 'PUBLISHED' ? (
                          <Link
                            href={`/wiki/${entry.category}/${entry.articleName}`}
                            className="text-blue-600 hover:text-blue-700 font-medium"
                          >
                            {entry.articleName}
                          </Link>
                        ) : (
                          <span className="text-gray-700">{entry.articleName}</span>
                        )}
                      </td>
                      <td className="px-4 sm:px-6 py-3 text-gray-600 capitalize">
                        {entry.category}
                      </td>
                      <td className="px-4 sm:px-6 py-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[entry.status]}`}>
                          {entry.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <p className="mt-6 text-xs text-gray-500">
          Status rules: PUBLISHED = found in app/wiki/, READY = today or overdue but not yet published, FUTURE = date is after today (Beijing time).
        </p>
      </main>
    </div>
  );
}
