import type { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';

const PAGE_TITLE = 'ExamCoach.ai - AI YKI Writing Checker';
const PAGE_DESCRIPTION =
  'Finnish YKI writing exam preparation with AI feedback and scoring';
const PAGE_URL = 'https://examcoach.ca';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: 'ExamCoach.ai',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function Home() {
  return <HomeClient />;
}
