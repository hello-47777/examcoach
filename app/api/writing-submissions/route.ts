import { NextRequest, NextResponse } from 'next/server';
import {
  createServerClient,
  createServiceRoleClient,
  getAccessTokenFromRequest,
} from '@/utils/supabase/server';
import type { WritingSubmission } from '@/types/writing-submission';

export async function GET(request: NextRequest) {
  try {
    const accessToken = getAccessTokenFromRequest(request);

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // 1. Verify user identity with their access token
    const authClient = createServerClient(accessToken);
    const {
      data: { user },
      error: authError,
    } = await authClient.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Invalid or expired session' },
        { status: 401 }
      );
    }

    // 2. Use service role client to read (bypasses RLS)
    const supabase = createServiceRoleClient();
    const { data, error } = await supabase
      .from('writing_submissions')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Failed to fetch writing submissions:', error);
      return NextResponse.json(
        { error: 'Failed to fetch writing submissions' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      submissions: (data ?? []) as WritingSubmission[],
    });
  } catch (error) {
    console.error('Writing submissions API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
