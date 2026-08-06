import type { MetadataRoute } from 'next';
import { getWikiArticles } from '@/lib/wiki-server';
import { topicMetas } from '@/lib/topics';
import { glossaryTerms } from '@/lib/glossary-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://examcoach.ca';
  const lastModified = new Date();

  // Wiki 文章 URL
  const wikiUrls = getWikiArticles().map((article) => ({
    url: `${baseUrl}${article.url}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Topic Hub 页面 URL
  const topicUrls = topicMetas.map((topic) => ({
    url: `${baseUrl}/topics/${topic.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Glossary 词条 URL
  const glossaryUrls = glossaryTerms.map((term) => ({
    url: `${baseUrl}/glossary/${term.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    // 首页
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // 核心页面
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/search`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/wiki`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/topics`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Tool 页面
    {
      url: `${baseUrl}/tools/ai-writing-checker`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Wiki 文章
    ...wikiUrls,
    // Topic Hub 页面
    ...topicUrls,
    // Glossary 词条
    ...glossaryUrls,
  ];
}

