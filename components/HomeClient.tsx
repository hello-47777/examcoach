'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { WritingCheckResponse } from '@/types/writing';
import Navbar from '@/components/layout/Navbar';
import { useAuth } from '@/components/providers/AuthProvider';

const FREE_CREDITS_LIMIT = 3;

export default function HomeClient() {
  const { getAccessToken, isLoading: isAuthLoading } = useAuth();
  const [isPro, setIsPro] = useState(false);
  const [remainingChecks, setRemainingChecks] = useState<number>(FREE_CREDITS_LIMIT);

  const [essayText, setEssayText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState('');
  const [result, setResult] = useState<WritingCheckResponse | null>(null);

  // Fluency mock score: 随机生成一个贴近总分的值（前端占位）
  const fluencyScore = useMemo(() => {
    if (!result) return 0;
    const avg =
      (result.grammar_score + result.vocabulary_score + result.task_score) / 3;
    const mock = Math.round(avg + (Math.random() * 10 - 5));
    return Math.max(0, Math.min(100, mock));
  }, [result]);

  // 拉取剩余免费次数
  const fetchCredits = useCallback(async () => {
    try {
      const accessToken = await getAccessToken();
      if (!accessToken) return;

      const response = await fetch('/api/credits', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!response.ok) return;

      const data = await response.json();
      setIsPro(Boolean(data.isPro));
      if (data.isPro) {
        setRemainingChecks(FREE_CREDITS_LIMIT);
      } else if (typeof data.remaining === 'number') {
        setRemainingChecks(data.remaining);
      }
    } catch (err) {
      console.error('Failed to fetch credits:', err);
    }
  }, [getAccessToken]);

  useEffect(() => {
    if (!isAuthLoading) {
      fetchCredits();
    }
  }, [isAuthLoading, fetchCredits]);

  // Progressive loading stages
  useEffect(() => {
    if (isLoading) {
      setLoadingStage('Analyzing grammar structures...');
      const stage1 = setTimeout(() => {
        setLoadingStage('Checking vocabulary against YKI database...');
      }, 2000);
      const stage2 = setTimeout(() => {
        setLoadingStage('Estimating official CEFR level...');
      }, 4000);
      return () => {
        clearTimeout(stage1);
        clearTimeout(stage2);
      };
    } else {
      setLoadingStage('');
    }
  }, [isLoading]);

  const handleExampleEssay = () => {
    const exampleFinnishEssay = `Minä olen opiskellut suomea jo kaksi vuotta. Suomen kieli on vaikea, mutta myös mielenkiintoinen. Päivittäin käytän suomea töissä ja kotona. Ystäväni auttavat minua kielen oppimisessa. Haluan läpäistä YKI-kokeen ensi keväänä, koska tarvitsen hyvän kielitaidon työnhaussa. Uskon, että kova työ ja harjoittelu auttavat minua saavuttamaan tavoitteeni.`;
    setEssayText(exampleFinnishEssay);
  };

  const handleCheckEssay = async () => {
    if (!essayText.trim()) return;

    setIsLoading(true);
    setResult(null);

    try {
      const accessToken = await getAccessToken();
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };

      if (accessToken) {
        headers.Authorization = `Bearer ${accessToken}`;
      }

      const response = await fetch('/api/check-writing', {
        method: 'POST',
        headers,
        body: JSON.stringify({ text: essayText }),
      });

      if (!response.ok) {
        throw new Error('Failed to check essay');
      }

      const data: WritingCheckResponse = await response.json();
      setResult(data);
      // 提交成功后刷新剩余次数
      fetchCredits();
    } catch (error) {
      console.error('Error checking essay:', error);
      alert('Failed to check essay. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar active="home" />

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Free YKI Writing Checker
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            No signup required. Get instant AI feedback.
          </p>

          <div className="w-full">
            <textarea
              value={essayText}
              onChange={(e) => setEssayText(e.target.value)}
              placeholder="Paste your Finnish essay here..."
              className="w-full h-64 p-6 text-lg border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handleExampleEssay}
                disabled={isLoading}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                Example Essay
              </button>
              <button
                onClick={handleCheckEssay}
                disabled={!essayText.trim() || isLoading || isAuthLoading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
              >
                {isAuthLoading ? 'Connecting...' : isLoading ? 'Processing...' : 'Check My Essay'}
              </button>
            </div>

            {/* Upgrade hint below Check button */}
            {!isAuthLoading && !isPro && (
              <p className="mt-2 text-xs text-gray-400">
                Students who use all free attempts usually upgrade before the exam
              </p>
            )}

            {/* Free checks remaining */}
            {!isAuthLoading && (
              <p className="mt-4 text-sm text-gray-500">
                {isPro
                  ? 'Pro account — unlimited checks'
                  : `You have ${remainingChecks} free check${remainingChecks === 1 ? '' : 's'} remaining — each one is valuable for your exam preparation`}
              </p>
            )}

            {/* Progressive Loading Animation */}
            {isLoading && (
              <div className="mt-12 flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
                </div>
                <p className="mt-4 text-lg text-gray-700 font-medium">{loadingStage}</p>
              </div>
            )}

            {/* Result Card - Official Exam Certificate Style */}
            {result && (
              <div className="mt-12 max-w-4xl mx-auto">
                {/* SECTION 1: Estimated YKI Level Badge */}
                <div className="text-center mb-10">
                  <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg">
                    <div className="text-sm text-blue-100 font-medium mb-1">Estimated YKI Level</div>
                    <div className="text-4xl font-bold text-white">{result.estimated_level}</div>
                  </div>
                </div>

                {/* SECTION 2: Score Cards (4 columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Grammar</div>
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-5xl font-bold text-gray-900 mb-2">{result.grammar_score}</div>
                    <div className="text-sm text-gray-500">out of 100</div>
                  </div>

                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Vocabulary</div>
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-5xl font-bold text-gray-900 mb-2">{result.vocabulary_score}</div>
                    <div className="text-sm text-gray-500">out of 100</div>
                  </div>

                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Task Achievement</div>
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-5xl font-bold text-gray-900 mb-2">{result.task_score}</div>
                    <div className="text-sm text-gray-500">out of 100</div>
                  </div>

                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Fluency</div>
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-5xl font-bold text-gray-900 mb-2">{fluencyScore}</div>
                    <div className="text-sm text-gray-500">out of 100</div>
                  </div>
                </div>

                {/* SECTION 2.5: Strengths (免费可见) */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-bold text-emerald-800 mb-4">Strengths</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <li className="flex items-center gap-2 text-emerald-700">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className="font-medium">Good vocabulary</span>
                    </li>
                    <li className="flex items-center gap-2 text-emerald-700">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className="font-medium">Clear structure</span>
                    </li>
                    <li className="flex items-center gap-2 text-emerald-700">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className="font-medium">Appropriate register</span>
                    </li>
                  </ul>
                </div>

                {/* SECTION 3 & 4: Premium content with SaaS-style paywall */}
                {/* Structure always visible; only detailed content is blurred when !isPro */}

                {/* Paywall Card (pricing hint) */}
                {!isPro && (
                  <div className="mb-8 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {/* Free column */}
                      <div className="rounded-xl bg-white p-5 border border-gray-200">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-gray-600">Free</span>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-0.5">✓</span>
                            <span className="text-gray-500">Score only</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-gray-300 mt-0.5">❌</span>
                            <span className="text-gray-400">No corrections</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-gray-300 mt-0.5">❌</span>
                            <span className="text-gray-400">No grammar fixes</span>
                          </li>
                        </ul>
                      </div>

                      {/* Pro column */}
                      <div className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 p-5 text-white shadow-md relative overflow-hidden ring-2 ring-blue-400 ring-offset-2">
                        <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/10" />
                        <div className="absolute top-3 right-3 rounded-full bg-emerald-400 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-900">Best Value</div>
                        <div className="flex items-center gap-2 mb-3 relative">
                          <span className="rounded-md bg-white/20 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide">Pro</span>
                          <span className="text-sm font-medium">€19/month</span>
                        </div>
                        <ul className="space-y-2 text-sm relative">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-300 mt-0.5">✓</span>
                            <span>Line-by-line corrections</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-300 mt-0.5">✓</span>
                            <span>Examiner-style feedback</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-300 mt-0.5">✓</span>
                            <span>Vocabulary improvements</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-300 mt-0.5">✓</span>
                            <span>Band-level suggestions</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* SECTION 3: Examiner Feedback - structure visible, content blurred for free users */}
                <div className="group relative bg-gray-50 rounded-xl border border-gray-200 p-8 mb-8 overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Examiner Feedback</h3>
                      <p
                        className={`text-gray-700 leading-relaxed text-base transition-all duration-300 ${
                          !isPro ? 'blur-[6px] group-hover:blur-[2px] select-none' : ''
                        }`}
                      >
                        {result.feedback}
                      </p>
                    </div>
                  </div>
                  {!isPro && (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40" />
                  )}
                </div>

                {/* SECTION 4: Corrected Text - structure visible, content blurred for free users */}
                <div className="group relative bg-emerald-50 rounded-xl border border-emerald-200 p-8 mb-8 overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Your Corrected Version</h3>
                      <p
                        className={`text-gray-700 leading-relaxed text-base whitespace-pre-wrap transition-all duration-300 ${
                          !isPro ? 'blur-[6px] group-hover:blur-[2px] select-none' : ''
                        }`}
                      >
                        {result.corrected_text}
                      </p>
                    </div>
                  </div>
                  {!isPro && (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40" />
                  )}
                </div>

                {/* Unlock CTA - below the blurred sections */}
                {!isPro && (
                  <div className="flex flex-col items-center justify-center text-center py-6">
                    {/* Loss hint */}
                    <p className="mb-4 text-sm font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
                      You are currently missing detailed corrections that affect your final score
                    </p>
                    <button
                      type="button"
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all"
                    >
                      See What You're Missing to Reach B2
                    </button>
                    <p className="mt-3 text-sm text-gray-600">
                      See detailed corrections like a real examiner
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Improve your score in minutes
                    </p>
                    {/* Future failure implication */}
                    <p className="mt-4 text-xs text-gray-500 italic">
                      Most users improve 0.5–1.5 levels after unlocking corrections
                    </p>
                    {/* Regret triggers */}
                    <p className="mt-2 text-xs text-gray-400 italic">
                      Fix this essay before your next attempt
                    </p>
                    <p className="mt-1 text-xs text-gray-400 italic">
                      Don't submit your next essay without improving this one
                    </p>
                    <p className="mt-4 text-xs text-gray-400">
                      Join 247+ learners improving their YKI score this week
                    </p>
                    {/* Direct score impact */}
                    <p className="mt-2 text-xs text-gray-500 italic">
                      Fixing this essay now can directly improve your exam score
                    </p>
                  </div>
                )}

                {/* SECTION 5: Recent Progress (进度追踪器占位) */}
                <div className="mt-10 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Recent Progress</h3>
                    <span className="text-xs text-gray-400">This is your improvement trajectory</span>
                  </div>
                  <ul className="divide-y divide-gray-100">
                    <li className="flex items-center justify-between py-3">
                      <span className="text-sm font-medium text-gray-700">Essay #1</span>
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                        B1
                      </span>
                    </li>
                    <li className="flex items-center justify-between py-3">
                      <span className="text-sm font-medium text-gray-700">Essay #2</span>
                      <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                        B1+
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* YKI Writing Guide Section */}
        <section aria-labelledby="guide-heading" className="mx-auto mt-24 max-w-5xl px-2">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              YKI Writing Guide
            </p>
            <h2 id="guide-heading" className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to pass the YKI writing test
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
              Deep-dive guides covering common topics, real examples, scoring
              criteria, and practical tips to raise your writing score.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: '/finland/yki-writing-topics',
                title: 'YKI Writing Topics',
                description: '20 most common topics with key vocabulary and writing tips for each.',
              },
              {
                href: '/finland/yki-writing-examples',
                title: 'YKI Writing Examples',
                description: '15 real sample answers with explanations of why each one scores well.',
              },
              {
                href: '/finland/yki-writing-tips',
                title: 'YKI Writing Tips',
                description: '15 practical tips, each with an example and the common mistake to avoid.',
              },
              {
                href: '/finland/yki-writing-scoring',
                title: 'YKI Writing Scoring',
                description: 'How the four official criteria work, with weak vs. strong answer examples.',
              },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <h3 className="text-base font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {guide.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600">
                  Read guide
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
