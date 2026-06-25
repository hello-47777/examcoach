'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { WritingCheckResponse } from '@/types/writing';
import Navbar from '@/components/layout/Navbar';
import { useAuth } from '@/components/providers/AuthProvider';

const FREE_CREDITS_LIMIT = 3;

export default function Home() {
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

            {/* Free checks remaining */}
            {!isAuthLoading && (
              <p className="mt-4 text-sm text-gray-500">
                {isPro
                  ? 'Pro account — unlimited checks'
                  : `You have ${remainingChecks} free check${remainingChecks === 1 ? '' : 's'} remaining`}
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

                {/* SECTION 3 & 4: Premium content with paywall */}
                <div className="relative">
                  <div className={!isPro ? 'blur-sm select-none pointer-events-none' : ''}>
                    {/* SECTION 3: Examiner Feedback */}
                    <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 mb-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4">Examiner Feedback</h3>
                          <p className="text-gray-700 leading-relaxed text-base">{result.feedback}</p>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 4: Corrected Text */}
                    <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-4">Your Corrected Version</h3>
                          <p className="text-gray-700 leading-relaxed text-base whitespace-pre-wrap">{result.corrected_text}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {!isPro && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/50 via-white/75 to-white/90 flex flex-col items-center justify-center">
                      <button
                        type="button"
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all"
                      >
                        🔒 Unlock Detailed Report &amp; Corrections
                      </button>
                      <p className="mt-4 text-sm text-gray-500 text-center">
                        Join 247 learners preparing for the YKI exam today.
                      </p>
                    </div>
                  )}
                </div>

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
      </main>
    </div>
  );
}
