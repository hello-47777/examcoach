import type { Metadata } from 'next';
import SeoDashboard from '@/components/admin/SeoDashboard';

export const metadata: Metadata = {
  title: 'SEO Monitoring — ExamCoach Admin',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminSeoPage() {
  return <SeoDashboard />;
}
