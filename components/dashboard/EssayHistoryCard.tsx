import type { EssayHistory } from '@/types/essay-history';

interface EssayHistoryCardProps {
  essay: EssayHistory;
  index: number;
}

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

export default function EssayHistoryCard({ essay, index }: EssayHistoryCardProps) {
  const grammarColor = scoreColor(essay.grammar_score);

  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Essay #{index}
          </p>
          <h3 className="mt-1 text-lg font-bold text-gray-900">
            {formatDate(essay.created_at)}
          </h3>
        </div>

        <div className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-1.5 text-sm font-semibold text-white shadow-sm">
          Level {essay.estimated_level}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className={`rounded-xl p-4 ${grammarColor}`}>
          <p className="text-xs font-semibold uppercase tracking-wide opacity-80">Grammar</p>
          <p className="mt-1 text-3xl font-bold">{essay.grammar_score}</p>
        </div>

        <div className={`rounded-xl p-4 ${scoreColor(essay.vocabulary_score)}`}>
          <p className="text-xs font-semibold uppercase tracking-wide opacity-80">Vocabulary</p>
          <p className="mt-1 text-3xl font-bold">{essay.vocabulary_score}</p>
        </div>

        <div className={`rounded-xl p-4 ${scoreColor(essay.task_score)}`}>
          <p className="text-xs font-semibold uppercase tracking-wide opacity-80">Task</p>
          <p className="mt-1 text-3xl font-bold">{essay.task_score}</p>
        </div>
      </div>

      <p className="mt-5 line-clamp-3 text-sm leading-relaxed text-gray-600">
        {essay.essay_text}
      </p>
    </article>
  );
}
