import { scheduledArticles } from '@/lib/wiki-data';

/**
 * 获取今天北京时间日期 (YYYY-MM-DD)
 */
function getBeijingToday(): string {
  const now = new Date();
  const beijing = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
  const y = beijing.getFullYear();
  const m = String(beijing.getMonth() + 1).padStart(2, '0');
  const d = String(beijing.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

async function main() {
  const today = getBeijingToday();
  console.log(`📍 Beijing today: ${today}`);

  // 过滤今天发布的文章
  const todayArticles = scheduledArticles.filter((a) => a.date === today);

  if (todayArticles.length === 0) {
    console.log('ℹ️  No articles scheduled for today. Exiting safely.');
    return;
  }

  console.log(`✅ Found ${todayArticles.length} article(s) to push to Bing IndexNow:`);
  todayArticles.forEach((a) => console.log(`   - ${a.url}`));

  const host = 'www.examcoach.com';
  const key = process.env.BING_INDEXNOW_KEY;
  const keyLocation = `https://${host}/91ef10b84e824b30bc8a1d63d8353b34.txt`;

  if (!key) {
    console.error('❌ BING_INDEXNOW_KEY environment variable is not set');
    process.exit(1);
  }

  const baseUrl = `https://${host}`;
  const urlList = todayArticles.map((a) => `${baseUrl}${a.url}`);

  const body = {
    host,
    key,
    keyLocation,
    urlList,
  };

  console.log('\n🚀 Sending POST to Bing IndexNow...');
  console.log(`   Endpoint: https://www.bing.com/indexnow`);
  console.log(`   URL count: ${urlList.length}`);

  try {
    const response = await fetch('https://www.bing.com/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });

    console.log(`\nHTTP Status: ${response.status}`);

    if (response.status === 200 || response.status === 202) {
      console.log('✅ Bing IndexNow push successful');
    } else {
      console.error(`❌ Unexpected status: ${response.status}`);
      const text = await response.text().catch(() => '');
      if (text) console.error(`Response: ${text}`);
      process.exit(1);
    }
  } catch (err) {
    console.error('❌ Request failed:', err);
    process.exit(1);
  }
}

main();
