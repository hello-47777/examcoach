import { NextRequest, NextResponse } from 'next/server';
import {
  createServerClient,
  getAccessTokenFromRequest,
} from '@/utils/supabase/server';
import type { EssayHistory } from '@/types/essay-history';

export async function GET(request: NextRequest) {
  try {
    const accessToken = getAccessTokenFromRequest(request);

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const supabase = createServerClient(accessToken);
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Invalid or expired session' },
        { status: 401 }
      );
    }

    const { data, error } = await supabase
      .from('essay_history')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Failed to fetch essay history:', error);
      return NextResponse.json(
        { error: 'Failed to fetch essay history' },
        { status: 500 }
      );
    }

    return NextResponse.json({ essays: (data ?? []) as EssayHistory[] });
  } catch (error) {
    console.error('Essay history API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
