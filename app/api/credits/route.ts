import { NextRequest, NextResponse } from 'next/server';
import {
  createServerClient,
  createServiceRoleClient,
  getAccessTokenFromRequest,
} from '@/utils/supabase/server';

// 免费额度上限，可后续配置化
const FREE_CREDITS_LIMIT = 3;

export async function GET(request: NextRequest) {
  try {
    const accessToken = getAccessTokenFromRequest(request);

    if (!accessToken) {
      return NextResponse.json(
        { remaining: FREE_CREDITS_LIMIT, isPro: false },
        { status: 200 }
      );
    }

    // 1. 验证用户身份
    const authClient = createServerClient(accessToken);
    const {
      data: { user },
      error: authError,
    } = await authClient.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { remaining: FREE_CREDITS_LIMIT, isPro: false },
        { status: 200 }
      );
    }

    // 2. 读取 users 表的 free_credits_used 和 is_pro
    const supabase = createServiceRoleClient();
    const { data, error } = await supabase
      .from('users')
      .select('free_credits_used, is_pro')
      .eq('id', user.id)
      .single();

    if (error || !data) {
      // 用户可能尚未在 users 表中（首次访问），返回满额
      return NextResponse.json(
        { remaining: FREE_CREDITS_LIMIT, isPro: false },
        { status: 200 }
      );
    }

    const isPro = Boolean(data.is_pro);
    const used = data.free_credits_used ?? 0;
    const remaining = isPro ? Infinity : Math.max(0, FREE_CREDITS_LIMIT - used);

    return NextResponse.json(
      { remaining: isPro ? null : remaining, isPro },
      { status: 200 }
    );
  } catch (error) {
    console.error('Credits API error:', error);
    return NextResponse.json(
      { remaining: FREE_CREDITS_LIMIT, isPro: false },
      { status: 200 }
    );
  }
}
