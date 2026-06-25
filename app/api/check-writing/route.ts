import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';
import { WritingCheckResponse } from '@/types/writing';
import {
  createServerClient,
  createServiceRoleClient,
  getAccessTokenFromRequest,
} from '@/utils/supabase/server';

const deepseek = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY || '',
  baseURL: 'https://api.deepseek.com',
});

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'Invalid input: text is required' },
        { status: 400 }
      );
    }

    const systemPrompt = `You are a strict, professional, and highly experienced YKI (Yleinen kielitutkinto - Finnish National Certificate of Language Proficiency) examiner. 
Your job is to evaluate Finnish text submissions from immigrants applying for Finnish citizenship. 

The target level for citizenship is YKI Level 3 (CEFR B1). 
You must evaluate the text based strictly on official YKI grading criteria:
1. Task Achievement (Viestin välittyminen): Did they answer the prompt? Is the tone appropriate?
2. Vocabulary (Sanasto): Do they use everyday words correctly? Are there Finglish (English-Finnish) mistakes?
3. Grammar (Rakenteet): Check specifically for correct verb conjugations, vowel harmony, and the correct use of Partitive, Genitive, and Illative cases.

CRITICAL GRADING RULES (Do not be overly generous):
- YKI 1 (A1): Basic words, very broken grammar. 
- YKI 2 (A2): Can handle simple situations, but frequent grammar mistakes. (Score: 40-59)
- YKI 3 (B1 - Target): The message is clearly understood, even if there are some grammatical errors. Uses basic subordinate clauses (että, koska, vaikka). (Score: 60-79)
- YKI 4 (B2): Fluent, wide vocabulary, rare grammatical errors. (Score: 80-100)
- If the user writes mostly in English or gibberish, give a score of 0 and level A1.

Your output MUST be strictly in the following JSON format, without any markdown formatting, code blocks, or extra text. Return ONLY the raw JSON:
{
  "estimated_level": "B1",
  "grammar_score": 85,
  "vocabulary_score": 78,
  "task_score": 80,
  "feedback": "Professional examiner feedback...",
  "corrected_text": "Corrected Finnish text..."
}`;

    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Essay:\n${text}` },
      ],
      temperature: 0.7,
    });

    const responseText = completion.choices[0].message.content || '';
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      throw new Error('Invalid response format from DeepSeek');
    }

    const evaluation: WritingCheckResponse = JSON.parse(jsonMatch[0]);
    const accessToken = getAccessTokenFromRequest(request);

    if (accessToken) {
      // 1. Verify user identity with their access token (RLS-enforced client)
      const authClient = createServerClient(accessToken);
      const {
        data: { user },
        error: authError,
      } = await authClient.auth.getUser();

      if (!authError && user) {
        // 2. Use service role client for DB writes (bypasses RLS)
        //    Identity is already verified above, so user.id is trusted.
        const supabase = createServiceRoleClient();

        // Save to essay_history (used by dashboard history feature)
        const { error: insertError } = await supabase.from('essay_history').insert({
          user_id: user.id,
          essay_text: text,
          estimated_level: evaluation.estimated_level,
          grammar_score: evaluation.grammar_score,
          vocabulary_score: evaluation.vocabulary_score,
          task_score: evaluation.task_score,
        });

        if (insertError) {
          console.error('Failed to save essay history:', insertError);
        }

        // CRITICAL: Ensure the anonymous user exists in the custom `users` table.
        // writing_submissions.user_id has a FK to users(id), so we must upsert
        // before inserting. Anonymous users have no email, so use a placeholder.
        const { error: userUpsertError } = await supabase
          .from('users')
          .upsert({
            id: user.id,
            email: user.email || `${user.id}@anonymous.examcoach.ai`,
            is_pro: false,
          });

        if (userUpsertError) {
          console.error('Failed to upsert user:', userUpsertError);
        }

        // Save to writing_submissions
        const { error: writingInsertError } = await supabase
          .from('writing_submissions')
          .insert({
            user_id: user.id,
            user_text: text,
            estimated_level: evaluation.estimated_level,
            grammar_score: evaluation.grammar_score,
            vocabulary_score: evaluation.vocabulary_score,
            task_achievement: evaluation.task_score,
            task_score: evaluation.task_score,
            detailed_feedback: evaluation,
            corrected_text: evaluation.corrected_text,
          });

        if (writingInsertError) {
          console.error(writingInsertError);
        } else {
          console.log('Saved successfully!');
        }
      }
    }

    return NextResponse.json(evaluation);
  } catch (error) {
    console.error('Error checking writing:', error);
    return NextResponse.json(
      { error: 'Failed to evaluate essay' },
      { status: 500 }
    );
  }
}
