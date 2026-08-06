import Link from 'next/link';

/**
 * 文章作者信息组件 (E-E-A-T 信号)
 *
 * 在每篇 Wiki 文章末尾自动展示作者与审稿信息。
 * 不虚构真人姓名,仅使用团队角色。
 */
export default function AuthorBox() {
  return (
    <section
      className="bg-gray-50 border-t border-gray-200"
      aria-label="Article authorship"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-base font-semibold text-gray-900 mb-6">
            Article Authorship
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Written by
              </p>
              <p className="mt-1 text-base font-semibold text-gray-900">
                ExamCoach AI Team
              </p>
              <p className="mt-1 text-sm text-gray-600">
                AI-assisted Finnish writing specialists focused on YKI exam preparation.
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Reviewed by
              </p>
              <p className="mt-1 text-base font-semibold text-gray-900">
                Finnish Language Learning Specialist
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Reviewed for YKI exam accuracy, kirjakieli usage, and B1–B2 level alignment.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <Link
              href="/about"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Learn more about ExamCoach.ai →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
