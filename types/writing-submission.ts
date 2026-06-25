export interface WritingSubmission {
  id: string;
  user_id: string;
  user_text: string;
  estimated_level: string;
  grammar_score: number;
  vocabulary_score: number;
  task_achievement: number;
  task_score: number | null;
  corrected_text: string | null;
  detailed_feedback: Record<string, unknown> | null;
  created_at: string;
}
