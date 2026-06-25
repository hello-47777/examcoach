import { createClient, SupabaseClient } from '@supabase/supabase-js';

function getSupabaseEnv() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl) {
    throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_URL');
  }

  if (!supabaseAnonKey) {
    throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY');
  }

  return { supabaseUrl, supabaseAnonKey };
}

export function createServerClient(accessToken?: string): SupabaseClient {
  const { supabaseUrl, supabaseAnonKey } = getSupabaseEnv();

  return createClient(supabaseUrl, supabaseAnonKey, {
    global: accessToken
      ? { headers: { Authorization: `Bearer ${accessToken}` } }
      : undefined,
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

/**
 * Service role client — bypasses RLS. Use ONLY in trusted server-side
 * code (API routes) after authenticating the user via getUser().
 * Requires SUPABASE_SERVICE_ROLE_KEY env var.
 */
export function createServiceRoleClient(): SupabaseClient {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl) {
    throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_URL');
  }

  if (!serviceRoleKey) {
    throw new Error(
      'Missing environment variable: SUPABASE_SERVICE_ROLE_KEY. ' +
        'Find it in Supabase Dashboard → Settings → API → service_role key.'
    );
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export function getAccessTokenFromRequest(request: Request): string | null {
  const authHeader = request.headers.get('Authorization');

  if (!authHeader?.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.slice(7).trim();
  return token || null;
}
