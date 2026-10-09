import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 禁用 Next.js 内置尾斜杠重定向 (308 + Refresh 头, GSC 对其兼容性差)
  // 尾斜杠规范化改由 middleware 统一返回标准 301
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      // /wiki/ (带尾斜杠) → /wiki: 标准化 301, 避免内置 308+refresh 头触发 GSC "重定向错误"
      // redirects() 优先于 Next.js 内置 trailing slash 规范化, 此规则命中后 /wiki 直接返回 200
      {
        source: '/wiki/',
        destination: '/wiki',
        statusCode: 301,
      },

      // === Emails (邮件类) ===
      {
        source: '/finland/yki-writing-job-application',
        destination: '/wiki/emails/job-application',
        statusCode: 301,
      },
      {
        source: '/finland/yki-writing-complaint-letter',
        destination: '/wiki/emails/complaint-letter',
        statusCode: 301,
      },
      {
        source: '/finland/yki-writing-formal-email',
        destination: '/wiki/emails/formal-email',
        statusCode: 301,
      },
      {
        source: '/finland/yki-writing-informal-email',
        destination: '/wiki/emails/informal-email',
        statusCode: 301,
      },
      {
        source: '/finland/yki-writing-invitation-email',
        destination: '/wiki/emails/invitation-email',
        statusCode: 301,
      },
      
      // === Essays (短文/议论文类) ===
      {
        source: '/finland/yki-writing-advantages-disadvantages-essay',
        destination: '/wiki/essays/advantages-disadvantages',
        statusCode: 301,
      },

      // === Guides & Core Pages (指南与核心页) ===
      {
        source: '/finland/yki-writing-scoring',
        destination: '/wiki/scoring/yki-b1-guide', // 指向你规划的评分规则页
        statusCode: 301,
      },
      {
        source: '/finland/yki-writing-tips',
        destination: '/wiki/guides/tips', // 统一归入指南类
        statusCode: 301,
      },
      {
        source: '/finland/yki-writing-examples',
        destination: '/wiki/templates/examples', // 统一归入模板/示例类
        statusCode: 301,
      },
      {
        source: '/finland/yki-writing-topics',
        destination: '/wiki/guides/topics', 
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
