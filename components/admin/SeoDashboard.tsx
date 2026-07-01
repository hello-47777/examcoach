'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface GscRow {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

interface GscTimeSeriesPoint {
  date: string;
  impressions: number;
  clicks: number;
}

interface GscReport {
  summary: {
    impressions: number;
    clicks: number;
    ctr: number;
    position: number;
  };
  timeSeries: GscTimeSeriesPoint[];
  topQueries: GscRow[];
  topPages: GscRow[];
  siteUrl: string;
  startDate: string;
  endDate: string;
}

const STORAGE_KEY = 'examcoach_admin_key';

function formatNumber(n: number): string {
  return new Intl.NumberFormat('en-US').format(Math.round(n));
}

function formatPercent(n: number): string {
  return `${(n * 100).toFixed(1)}%`;
}

function formatShortDate(iso: string): string {
  const d = new Date(iso);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(d);
}

function truncateUrl(url: string, max = 60): string {
  if (url.length <= max) return url;
  return url.slice(0, max - 1) + '…';
}

export default function SeoDashboard() {
  const [adminKey, setAdminKey] = useState<string | null>(null);
  const [report, setReport] = useState<GscReport | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);

  // Load saved key on mount
  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) setAdminKey(saved);
  }, []);

  const fetchReport = useCallback(async (key: string) => {
    setIsLoading(true);
    setError(null);
    let authFailure = false;
    try {
      const res = await fetch('/api/admin/seo', {
        headers: { 'x-admin-key': key },
      });
      if (res.status === 401) {
        authFailure = true;
        setAuthError('Invalid admin key.');
        throw new Error('Invalid admin key.');
      }
      if (res.status === 503) {
        authFailure = true;
        setAuthError('Admin access is not configured on the server.');
        throw new Error('Admin access is not configured on the server.');
      }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to load SEO report.');
      }
      const data: GscReport = await res.json();
      setAuthError(null);
      setReport(data);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      setError(msg);
      setReport(null);
      // Only clear the key on auth failures; keep the session for other errors
      // so the user can retry from the dashboard.
      if (authFailure) {
        sessionStorage.removeItem(STORAGE_KEY);
        setAdminKey(null);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (adminKey) fetchReport(adminKey);
  }, [adminKey, fetchReport]);

  // ---- Passcode gate ----
  if (!adminKey) {
    return <PasscodeGate
      authError={authError}
      onUnlock={(key) => {
        setAuthError(null);
        sessionStorage.setItem(STORAGE_KEY, key);
        setAdminKey(key);
      }}
    />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      <header className="sticky top-0 z-30 border-b border-gray-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Admin
            </p>
            <h1 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
              SEO Monitoring
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              ← Site
            </Link>
            <button
              type="button"
              onClick={() => {
                sessionStorage.removeItem(STORAGE_KEY);
                setAdminKey(null);
                setReport(null);
              }}
              className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
            >
              Lock
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        {isLoading && !report ? (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-28 animate-pulse rounded-2xl border border-gray-200 bg-white" />
              ))}
            </div>
            <div className="h-80 animate-pulse rounded-2xl border border-gray-200 bg-white" />
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
            <p className="text-red-700">{error}</p>
            <button
              type="button"
              onClick={() => adminKey && fetchReport(adminKey)}
              className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        ) : report ? (
          <ReportView report={report} />
        ) : null}
      </main>
    </div>
  );
}

function PasscodeGate({
  authError,
  onUnlock,
}: {
  authError: string | null;
  onUnlock: (key: string) => void;
}) {
  const [value, setValue] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) {
      setLocalError('Please enter the admin key.');
      return;
    }
    setLocalError(null);
    onUnlock(trimmed);
  };

  const displayError = localError ?? authError;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 to-blue-50/30 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
          Admin
        </p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
          SEO Dashboard
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Enter the admin key to view Search Console analytics.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-3">
          <input
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (localError) setLocalError(null);
            }}
            placeholder="Admin key"
            autoFocus
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {displayError && (
            <p className="text-xs text-red-600">{displayError}</p>
          )}
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Unlock
          </button>
        </form>
        <Link
          href="/"
          className="mt-4 block text-center text-xs font-medium text-gray-500 hover:text-gray-700"
        >
          ← Back to site
        </Link>
      </div>
    </div>
  );
}

function ReportView({ report }: { report: GscReport }) {
  const { summary, timeSeries, topQueries, topPages, siteUrl, startDate, endDate } = report;
  const chartData = timeSeries.map((p) => ({
    name: formatShortDate(p.date),
    impressions: p.impressions,
    clicks: p.clicks,
  }));

  return (
    <div className="space-y-10">
      {/* Header summary */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Search Console
        </p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
          SEO Performance
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          <span className="font-medium text-gray-700">{siteUrl}</span>
          {' · '}
          {formatShortDate(startDate)} – {formatShortDate(endDate)}
          {' · '}
          last 28 days
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Impressions" value={formatNumber(summary.impressions)} />
        <StatCard label="Clicks" value={formatNumber(summary.clicks)} />
        <StatCard label="CTR" value={formatPercent(summary.ctr)} />
        <StatCard
          label="Avg. Position"
          value={summary.position > 0 ? summary.position.toFixed(1) : '—'}
        />
      </div>

      {/* Impressions over time */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-bold text-gray-900">
          Impressions &amp; Clicks Over Time
        </h3>
        {chartData.length === 0 ? (
          <EmptyState text="No time-series data available for this period." />
        ) : (
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: '#6b7280' }}
                  interval="preserveStartEnd"
                />
                <YAxis
                  tick={{ fontSize: 11, fill: '#6b7280' }}
                  width={50}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: 8,
                    border: '1px solid #e5e7eb',
                    fontSize: 12,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="impressions"
                  stroke="#2563eb"
                  strokeWidth={2}
                  dot={false}
                  name="Impressions"
                />
                <Line
                  type="monotone"
                  dataKey="clicks"
                  stroke="#16a34a"
                  strokeWidth={2}
                  dot={false}
                  name="Clicks"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </section>

      {/* Two columns: top queries + top pages */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Top queries table */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-bold text-gray-900">
            Top Search Queries
          </h3>
          {topQueries.length === 0 ? (
            <EmptyState text="No query data available." />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-xs uppercase tracking-wide text-gray-500">
                    <th className="pb-2 pr-3 font-semibold">Query</th>
                    <th className="pb-2 pr-3 text-right font-semibold">Clicks</th>
                    <th className="pb-2 pr-3 text-right font-semibold">Impr.</th>
                    <th className="pb-2 pr-3 text-right font-semibold">CTR</th>
                    <th className="pb-2 text-right font-semibold">Pos.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {topQueries.slice(0, 20).map((row, i) => (
                    <tr key={i} className="text-gray-700">
                      <td className="py-2 pr-3 font-medium text-gray-900">
                        {row.keys[0]}
                      </td>
                      <td className="py-2 pr-3 text-right tabular-nums">
                        {formatNumber(row.clicks)}
                      </td>
                      <td className="py-2 pr-3 text-right tabular-nums">
                        {formatNumber(row.impressions)}
                      </td>
                      <td className="py-2 pr-3 text-right tabular-nums">
                        {formatPercent(row.ctr)}
                      </td>
                      <td className="py-2 text-right tabular-nums">
                        {row.position.toFixed(1)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Top pages ranking */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-bold text-gray-900">
            Top Performing Pages
          </h3>
          {topPages.length === 0 ? (
            <EmptyState text="No page data available." />
          ) : (
            <ol className="space-y-3">
              {topPages.slice(0, 15).map((row, i) => {
                const maxImpressions = topPages[0]?.impressions || 1;
                const pct = Math.max(
                  4,
                  Math.round((row.impressions / maxImpressions) * 100)
                );
                return (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <a
                          href={row.keys[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="truncate text-sm font-medium text-blue-600 hover:underline"
                          title={row.keys[0]}
                        >
                          {truncateUrl(row.keys[0])}
                        </a>
                        <span className="flex-none text-xs tabular-nums text-gray-500">
                          {formatNumber(row.impressions)} impr.
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <div className="mt-1 flex gap-3 text-xs text-gray-500">
                        <span>{formatNumber(row.clicks)} clicks</span>
                        <span>{formatPercent(row.ctr)} CTR</span>
                        <span>pos. {row.position.toFixed(1)}</span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          )}
        </section>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-medium text-gray-500">{label}</p>
      <p className="mt-1.5 text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="flex h-32 items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50/50">
      <p className="text-sm text-gray-400">{text}</p>
    </div>
  );
}
