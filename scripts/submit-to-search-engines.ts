/**
 * 搜索引擎主动推送脚本 (Google Indexing API + Bing IndexNow)
 *
 * 使用方式:
 *   npx tsx scripts/submit-to-search-engines.ts
 *
 * 行为:
 *   1. 读取 lib/wiki-data.ts 中的 scheduledArticles
 *   2. 过滤出 date === 今天(北京时间) 的文章
 *   3. 未到日期的文章不推送 (未来文章禁止推送)
 *   4. 已到日期的文章:
 *      - Google Indexing API: POST https://indexing.googleapis.com/v3/urlNotifications:publish
 *        需要 GOOGLE_INDEXING_CLIENT_EMAIL + GOOGLE_INDEXING_PRIVATE_KEY
 *      - Bing IndexNow: POST https://www.bing.com/indexnow
 *        需要 BING_INDEXNOW_KEY 环境变量 + public/<key>.txt 验证文件
 *
 * 注意:
 *   - 未来文章(date > 今天)会被跳过,不推送
 *   - 缺少环境变量时只跳过对应引擎,不会中断整个流程
 *   - 适合在 GitHub Actions daily-publish.yml 中调用
 */

import { scheduledArticles } from '../lib/wiki-data';

const SITE_HOST = 'https://examcoach.ca';
const BING_INDEXNOW_KEY = process.env.BING_INDEXNOW_KEY;
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_INDEXING_CLIENT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_INDEXING_PRIVATE_KEY;

/**
 * 获取北京时间今天的 YYYY-MM-DD
 */
function getBeijingToday(): string {
  const now = new Date();
  const beijing = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
  const yyyy = beijing.getFullYear();
  const mm = String(beijing.getMonth() + 1).padStart(2, '0');
  const dd = String(beijing.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

/**
 * 创建 Google JWT (RFC 7519)
 */
async function createGoogleJwt(): Promise<string> {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: GOOGLE_CLIENT_EMAIL,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const enc = (obj: object) =>
    Buffer.from(JSON.stringify(obj)).toString('base64url');

  const headerB64 = enc(header);
  const payloadB64 = enc(payload);
  const signInput = `${headerB64}.${payloadB64}`;

  // 使用 Web Crypto API 签名 (Node 20+ 内置)
  const pemContents = (GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n');
  const pemMatch = pemContents.match(
    /-----BEGIN PRIVATE KEY-----\n([\s\S]+?)\n-----END PRIVATE KEY-----/
  );
  if (!pemMatch) throw new Error('Invalid GOOGLE_INDEXING_PRIVATE_KEY format');

  const derBuffer = Buffer.from(pemMatch[1], 'base64');
  const keyData = derBuffer.buffer.slice(
    derBuffer.byteOffset,
    derBuffer.byteOffset + derBuffer.byteLength
  );

  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    keyData,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    new TextEncoder().encode(signInput)
  );

  const signatureB64 = Buffer.from(signature).toString('base64url');
  return `${signInput}.${signatureB64}`;
}

/**
 * 获取 Google OAuth2 access token
 */
async function getGoogleAccessToken(): Promise<string> {
  const jwt = await createGoogleJwt();
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Google OAuth failed: ${res.status} ${txt}`);
  }

  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

/**
 * 推送单个 URL 到 Google Indexing API
 */
async function pushToGoogle(url: string): Promise<{ success: boolean; message: string }> {
  if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    return {
      success: false,
      message: 'SKIPPED: GOOGLE_INDEXING_CLIENT_EMAIL or GOOGLE_INDEXING_PRIVATE_KEY not set',
    };
  }

  try {
    const token = await getGoogleAccessToken();
    const res = await fetch(
      'https://indexing.googleapis.com/v3/urlNotifications:publish',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ url, type: 'URL_UPDATED' }),
      }
    );

    if (res.ok) {
      return { success: true, message: `Google Push: SUCCESS (${res.status})` };
    }
    const txt = await res.text();
    return { success: false, message: `Google Push: FAILED (${res.status}) ${txt}` };
  } catch (err) {
    return {
      success: false,
      message: `Google Push: FAILED ${(err as Error).message}`,
    };
  }
}

/**
 * 批量推送 URL 到 Bing IndexNow
 */
async function pushToBing(urls: string[]): Promise<{ success: boolean; message: string }> {
  if (!BING_INDEXNOW_KEY) {
    return { success: false, message: 'SKIPPED: BING_INDEXNOW_KEY not set' };
  }

  try {
    const res = await fetch('https://www.bing.com/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: 'examcoach.ca',
        key: BING_INDEXNOW_KEY,
        keyLocation: `${SITE_HOST}/${BING_INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });

    if (res.ok || res.status === 202) {
      return { success: true, message: `Bing Push: SUCCESS (${res.status})` };
    }
    const txt = await res.text();
    return { success: false, message: `Bing Push: FAILED (${res.status}) ${txt}` };
  } catch (err) {
    return { success: false, message: `Bing Push: FAILED ${(err as Error).message}` };
  }
}

async function main() {
  const today = getBeijingToday();
  console.log(`\n=========================`);
  console.log(`Search Engine Push Script`);
  console.log(`Beijing Today: ${today}`);
  console.log(`=========================\n`);

  // 过滤今天发布的文章 (date === 今天)
  const todayArticles = scheduledArticles.filter((a) => a.date === today);

  if (todayArticles.length === 0) {
    console.log('ℹ️  No articles scheduled for today. Exiting safely.');
    return;
  }

  console.log(`Found ${todayArticles.length} article(s) scheduled for today:\n`);

  const fullUrls = todayArticles.map((a) => `${SITE_HOST}${a.url}`);

  // Bing IndexNow 批量推送
  console.log('--- Bing IndexNow ---');
  const bingResult = await pushToBing(fullUrls);
  console.log(bingResult.message);

  // Google Indexing API 逐个推送
  console.log('\n--- Google Indexing API ---');
  for (const article of todayArticles) {
    const fullUrl = `${SITE_HOST}${article.url}`;
    console.log(`\n→ ${article.url}`);
    const googleResult = await pushToGoogle(fullUrl);
    console.log(googleResult.message);
  }

  console.log('\n=========================');
  console.log('Done.');
  console.log('=========================\n');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
