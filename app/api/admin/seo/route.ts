import { NextResponse } from 'next/server';
import { fetchGscReport } from '@/lib/gsc';

/**
 * GET /api/admin/seo
 *
 * Returns Google Search Console analytics for the ExamCoach property.
 * Protected by an admin key checked against the ADMIN_API_KEY env var.
 * Clients send it via the `x-admin-key` header (or Bearer token).
 */
export async function GET(request: Request) {
  const adminKey = process.env.ADMIN_API_KEY;

  // If no admin key is configured, fail closed rather than open.
  if (!adminKey) {
    console.error('ADMIN_API_KEY is not set; refusing to serve SEO report.');
    return NextResponse.json(
      { error: 'Admin access is not configured.' },
      { status: 503 }
    );
  }

  const providedKey =
    request.headers.get('x-admin-key') ||
    (request.headers.get('authorization')?.startsWith('Bearer ')
      ? request.headers.get('authorization')!.slice(7).trim()
      : null);

  if (!providedKey || providedKey !== adminKey) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const report = await fetchGscReport();
    return NextResponse.json(report);
  } catch (error) {
    console.error('SEO report error:', error);
    const message =
      error instanceof Error ? error.message : 'Failed to load SEO report';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
