import type { MetadataRoute } from 'next';
import { getWikiArticles } from '@/lib/wiki-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://examcoach.ca';
  const lastModified = new Date();

  const wikiUrls = getWikiArticles().map((article) => ({
    url: `${baseUrl}${article.url}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/admin/seo`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.3,
    },
    ...wikiUrls,
  ];
}
