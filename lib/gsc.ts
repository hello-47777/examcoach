import { google } from 'googleapis';

/**
 * Google Search Console integration.
 *
 * Authenticates with a Google Cloud service account (JWT) and pulls search
 * analytics for the ExamCoach property.
 *
 * Required env vars:
 *   - GSC_CLIENT_EMAIL  : service account email
 *   - GSC_PRIVATE_KEY   : service account private key
 *   - GSC_SITE_URL      : registered Search Console property (https://examcoach.ca)
 */

export interface GscRow {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface GscTimeSeriesPoint {
  date: string;
  impressions: number;
  clicks: number;
}

export interface GscSummary {
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
}

export interface GscReport {
  summary: GscSummary;
  timeSeries: GscTimeSeriesPoint[];
  topQueries: GscRow[];
  topPages: GscRow[];
  siteUrl: string;
  startDate: string;
  endDate: string;
}

function getGscEnv() {
  const clientEmail = process.env.GSC_CLIENT_EMAIL;
  const privateKeyRaw = process.env.GSC_PRIVATE_KEY;

  if (!clientEmail) {
    throw new Error('Missing env var: GSC_CLIENT_EMAIL');
  }
  if (!privateKeyRaw) {
    throw new Error('Missing env var: GSC_PRIVATE_KEY');
  }

  // Support pasted keys with literal "\n" sequences (common in .env files).
  const privateKey = privateKeyRaw.replace(/\\n/g, '\n');

  return { clientEmail, privateKey };
}

export function getSiteUrl(): string {
  return process.env.GSC_SITE_URL || 'https://examcoach.ca';
}

function createSearchConsoleClient() {
  const { clientEmail, privateKey } = getGscEnv();

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });

  return google.searchconsole({ version: 'v1', auth });
}

function toIsoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/**
 * Default window: last 28 days (GSC data is delayed ~2 days, so we offset end).
 */
export function getDefaultDateRange(): { startDate: string; endDate: string } {
  const end = new Date();
  end.setDate(end.getDate() - 2); // account for GSC reporting delay
  const start = new Date(end);
  start.setDate(start.getDate() - 27);
  return { startDate: toIsoDate(start), endDate: toIsoDate(end) };
}

async function query(
  siteUrl: string,
  startDate: string,
  endDate: string,
  dimensions: string[],
  rowLimit = 50
): Promise<GscRow[]> {
  const searchconsole = createSearchConsoleClient();

  const res = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate,
      endDate,
      dimensions,
      rowLimit,
    },
  });

  const rows = (res.data.rows ?? []) as unknown as GscRow[];
  return rows;
}

function aggregateSummary(rows: GscRow[]): GscSummary {
  const impressions = rows.reduce((s, r) => s + r.impressions, 0);
  const clicks = rows.reduce((s, r) => s + r.clicks, 0);
  const ctr = impressions > 0 ? clicks / impressions : 0;

  // Weighted average position across all rows.
  const position =
    rows.length > 0
      ? rows.reduce((s, r) => s + r.position, 0) / rows.length
      : 0;

  return {
    impressions,
    clicks,
    ctr,
    position,
  };
}

/**
 * Fetch a full SEO report. One summary query + one per-dimension breakdown.
 */
export async function fetchGscReport(
  dateRange?: { startDate: string; endDate: string }
): Promise<GscReport> {
  const siteUrl = getSiteUrl();
  const { startDate, endDate } = dateRange ?? getDefaultDateRange();

  // 1. Summary (no dimensions -> totals for the window)
  const summaryRows = await query(siteUrl, startDate, endDate, []);
  const summary = aggregateSummary(summaryRows);

  // 2. Time series (by date)
  const dateRows = await query(siteUrl, startDate, endDate, ['date']);
  const timeSeries: GscTimeSeriesPoint[] = dateRows
    .map((r) => ({
      date: r.keys[0],
      impressions: r.impressions,
      clicks: r.clicks,
    }))
    .sort((a, b) => a.date.localeCompare(b.date));

  // 3. Top search queries
  const topQueries = await query(siteUrl, startDate, endDate, ['query'], 50);

  // 4. Top performing pages
  const topPages = await query(siteUrl, startDate, endDate, ['page'], 50);

  return {
    summary,
    timeSeries,
    topQueries,
    topPages,
    siteUrl,
    startDate,
    endDate,
  };
}
