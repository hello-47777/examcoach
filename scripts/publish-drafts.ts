import fs from 'fs';
import path from 'path';

const DRAFTS_DIR = path.join(process.cwd(), 'app', '_drafts');
const WIKI_DIR = path.join(process.cwd(), 'app', 'wiki');

/**
 * 获取当前北京时间 (Asia/Shanghai)
 */
function getBeijingNow(): Date {
  const now = new Date();
  return new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
}

/**
 * 解析文件夹名 "YYYY.M.D" 为 Date 对象 (按北京时间)
 */
function parseFolderDate(folderName: string): Date | null {
  const parts = folderName.split('.');
  if (parts.length !== 3) return null;
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);
  if (isNaN(year) || isNaN(month) || isNaN(day)) return null;
  return new Date(Date.UTC(year, month - 1, day, -8, 0, 0));
}

/**
 * 发布脚本:将 _drafts/ 中已到日期的文章复制到 app/wiki/<category>/<slug>/page.tsx
 */
function publishDrafts(): void {
  console.log('🚀 Starting publish-drafts script...');
  console.log(`📅 Beijing time: ${getBeijingNow().toISOString()}`);

  if (!fs.existsSync(DRAFTS_DIR)) {
    console.log('📁 _drafts folder does not exist. Nothing to publish.');
    return;
  }

  const now = getBeijingNow();
  const dateFolders = fs.readdirSync(DRAFTS_DIR);
  let publishedCount = 0;
  let skippedCount = 0;

  for (const dateFolder of dateFolders) {
    const folderPath = path.join(DRAFTS_DIR, dateFolder);
    if (!fs.statSync(folderPath).isDirectory()) continue;

    const folderDate = parseFolderDate(dateFolder);
    if (!folderDate) {
      console.warn(`⚠️  Invalid date folder: ${dateFolder} (skipped)`);
      continue;
    }

    if (folderDate > now) {
      console.log(`⏭️  Future folder: ${dateFolder} (skipped)`);
      skippedCount++;
      continue;
    }

    console.log(`✅ Publishing folder: ${dateFolder}`);

    // 读取 category 子目录
    const categories = fs.readdirSync(folderPath);
    for (const category of categories) {
      const categoryPath = path.join(folderPath, category);
      if (!fs.statSync(categoryPath).isDirectory()) continue;

      const allowedCategories = ['essays', 'guides', 'scoring', 'templates'];
      if (!allowedCategories.includes(category)) {
        console.warn(`⚠️  Invalid category: ${category} (skipped)`);
        continue;
      }

      // 读取 .tsx 文件
      const files = fs.readdirSync(categoryPath);
      for (const file of files) {
        if (!file.endsWith('.tsx')) continue;
        const slug = file.replace(/\.tsx$/, '');
        const sourcePath = path.join(categoryPath, file);
        const targetDir = path.join(WIKI_DIR, category, slug);
        const targetPath = path.join(targetDir, 'page.tsx');

        // 安全检查:目标文件已存在则跳过,不允许覆盖
        if (fs.existsSync(targetPath)) {
          console.log(`   ⏭️  SKIP: ${category}/${slug} already exists in app/wiki/`);
          continue;
        }

        // 创建目标目录
        fs.mkdirSync(targetDir, { recursive: true });

        // 复制文件
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`   ✅ ${category}/${slug} ← ${dateFolder}`);
        publishedCount++;
      }
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Published: ${publishedCount} articles`);
  console.log(`   Skipped (future): ${skippedCount} folders`);
  console.log(`🚀 Publish-drafts script completed.`);
}

publishDrafts();
