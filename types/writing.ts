export interface WritingCheckRequest {
  text: string;
}

export interface WritingCheckResponse {
  estimated_level: string;
  grammar_score: number;
  vocabulary_score: number;
  task_score: number;
  feedback: string;
  corrected_text: string;
}
