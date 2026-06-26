'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';
import Navbar from '@/components/layout/Navbar';
import { useAuth } from '@/components/providers/AuthProvider';
import type { WritingSubmission } from '@/types/writing-submission';

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(dateString));
}

function scoreColor(score: number) {
  if (score >= 80) return 'text-emerald-600 bg-emerald-50';
  if (score >= 60) return 'text-blue-600 bg-blue-50';
  return 'text-amber-600 bg-amber-50';
}

export default function DashboardClient() {
  const { getAccessToken, isLoading: isAuthLoading } = useAuth();
  const [submissions, setSubmissions] = useState<WritingSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubmissions = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const accessToken = await getAccessToken();

      // 匿名登录由 AuthProvider 自动处理；若 token 尚未就绪，静默等待，不弹登录提示
      if (!accessToken) {
        setSubmissions([]);
        return;
      }

      const response = await fetch('/api/writing-submissions', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to load writing submissions');
      }

      const data: { submissions: WritingSubmission[] } = await response.json();
      setSubmissions(data.submissions);
    } catch (err) {
      console.error(err);
      setError('Unable to load your writing history. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [getAccessToken]);

  useEffect(() => {
    if (!isAuthLoading) {
      fetchSubmissions();
    }
  }, [isAuthLoading, fetchSubmissions]);

  const totalEssays = submissions.length;
  const averageGrammar =
    totalEssays > 0
      ? Math.round(
          submissions.reduce((sum, s) => sum + s.grammar_score, 0) / totalEssays
        )
      : 0;

  // Chart data: oldest -> newest for trend line
  const chartData = useMemo(() => {
    return [...submissions]
      .reverse()
      .map((s, i) => ({
        name: `#${i + 1}`,
        Grammar: s.grammar_score,
        Vocabulary: s.vocabulary_score,
        Task: s.task_achievement,
      }));
  }, [submissions]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      <Navbar active="dashboard" />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Writing History
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your YKI Writing Progress
            </h1>
            <p className="mt-3 max-w-2xl text-base text-gray-600">
              Track every essay you submit, review estimated levels, and monitor your
              score improvement over time.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 sm:w-auto"
          >
            Back to Writing Checker
          </Link>
        </div>

        {/* Stats summary */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Total Essays</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">{totalEssays}</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Avg. Grammar Score</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {totalEssays > 0 ? averageGrammar : '—'}
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Latest Level</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {submissions[0]?.estimated_level ?? '—'}
            </p>
          </div>
        </div>

        {isAuthLoading || isLoading ? (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="h-56 animate-pulse rounded-2xl border border-gray-200 bg-white"
              />
            ))}
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
            <p className="text-red-700">{error}</p>
            <button
              type="button"
              onClick={fetchSubmissions}
              className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        ) : totalEssays === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl">
              📝
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              You haven&apos;t written any essays yet.
            </h2>
            <p className="mt-2 text-gray-600">
              Submit your first Finnish essay to start building your history.
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Check My Essay
            </Link>
          </div>
        ) : (
          <>
            {/* Score trend chart */}
            {totalEssays > 1 && (
              <div className="mb-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-bold text-gray-900">
                  Score Trend
                </h2>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={chartData}
                      margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis
                        dataKey="name"
                        tick={{ fontSize: 12, fill: '#6b7280' }}
                      />
                      <YAxis
                        domain={[0, 100]}
                        tick={{ fontSize: 12, fill: '#6b7280' }}
                      />
                      <Tooltip
                        contentStyle={{
                          borderRadius: 8,
                          border: '1px solid #e5e7eb',
                          fontSize: 12,
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: 12 }} />
                      <Line
                        type="monotone"
                        dataKey="Grammar"
                        stroke="#2563eb"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Vocabulary"
                        stroke="#16a34a"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Task"
                        stroke="#d97706"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Submission cards */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {submissions.map((submission, index) => (
                <article
                  key={submission.id}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                        Essay #{totalEssays - index}
                      </p>
                      <h3 className="mt-1 text-lg font-bold text-gray-900">
                        {formatDate(submission.created_at)}
                      </h3>
                    </div>

                    <div className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-1.5 text-sm font-semibold text-white shadow-sm">
                      Level {submission.estimated_level}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className={`rounded-xl p-4 ${scoreColor(submission.grammar_score)}`}>
                      <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
                        Grammar
                      </p>
                      <p className="mt-1 text-3xl font-bold">
                        {submission.grammar_score}
                      </p>
                    </div>

                    <div className={`rounded-xl p-4 ${scoreColor(submission.vocabulary_score)}`}>
                      <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
                        Vocabulary
                      </p>
                      <p className="mt-1 text-3xl font-bold">
                        {submission.vocabulary_score}
                      </p>
                    </div>

                    <div className={`rounded-xl p-4 ${scoreColor(submission.task_achievement)}`}>
                      <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
                        Task Achievement
                      </p>
                      <p className="mt-1 text-3xl font-bold">
                        {submission.task_achievement}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 line-clamp-3 text-sm leading-relaxed text-gray-600">
                    {submission.user_text}
                  </p>
                </article>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
