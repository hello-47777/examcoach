export interface EssayHistory {
  id: string;
  user_id: string;
  essay_text: string;
  estimated_level: string;
  grammar_score: number;
  vocabulary_score: number;
  task_score: number;
  created_at: string;
}

export interface EssayHistoryInsert {
  user_id: string;
  essay_text: string;
  estimated_level: string;
  grammar_score: number;
  vocabulary_score: number;
  task_score: number;
}
