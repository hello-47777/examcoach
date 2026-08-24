import type { MetadataRoute } from 'next';

/**
 * robots.txt 配置
 *
 * 规则:
 * - 所有爬虫 (含 Googlebot / Bingbot) 允许抓取全站公开内容
 * - 禁止抓取: /admin, /api, /dashboard (非 SEO 内容, 避免索引噪音)
 * - 暴露 sitemap.xml
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // 主要搜索引擎显式允许
        userAgent: ['Googlebot', 'Bingbot', 'DuckDuckBot', 'Slurp', 'Baiduspider'],
        allow: '/',
        disallow: ['/admin/', '/api/', '/dashboard', '/login', '/search'],
      },
      {
        // 其他爬虫兜底规则
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/dashboard', '/login', '/search'],
      },
    ],
    sitemap: 'https://examcoach.ca/sitemap.xml',
    host: 'https://examcoach.ca',
  };
}
