import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // === Emails (邮件类) ===
      {
        source: '/finland/yki-writing-job-application',
        destination: '/wiki/emails/job-application',
        permanent: true,
      },
      {
        source: '/finland/yki-writing-complaint-letter',
        destination: '/wiki/emails/complaint-letter',
        permanent: true,
      },
      {
        source: '/finland/yki-writing-formal-email',
        destination: '/wiki/emails/formal-email',
        permanent: true,
      },
      {
        source: '/finland/yki-writing-informal-email',
        destination: '/wiki/emails/informal-email',
        permanent: true,
      },
      {
        source: '/finland/yki-writing-invitation-email',
        destination: '/wiki/emails/invitation-email',
        permanent: true,
      },
      
      // === Essays (短文/议论文类) ===
      {
        source: '/finland/yki-writing-advantages-disadvantages-essay',
        destination: '/wiki/essays/advantages-disadvantages',
        permanent: true,
      },

      // === Guides & Core Pages (指南与核心页) ===
      {
        source: '/finland/yki-writing-scoring',
        destination: '/wiki/scoring/yki-b1-guide', // 指向你规划的评分规则页
        permanent: true,
      },
      {
        source: '/finland/yki-writing-tips',
        destination: '/wiki/guides/tips', // 统一归入指南类
        permanent: true,
      },
      {
        source: '/finland/yki-writing-examples',
        destination: '/wiki/templates/examples', // 统一归入模板/示例类
        permanent: true,
      },
      {
        source: '/finland/yki-writing-topics',
        destination: '/wiki/guides/topics', 
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
