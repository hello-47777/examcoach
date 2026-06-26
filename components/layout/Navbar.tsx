import Link from 'next/link';

interface NavbarProps {
  active?: 'home' | 'dashboard';
}

export default function Navbar({ active = 'home' }: NavbarProps) {
  const linkClass = (key: NavbarProps['active']) =>
    key === active
      ? 'text-blue-600 font-semibold'
      : 'text-gray-600 hover:text-gray-900 font-medium transition-colors';

  return (
    <nav className="sticky top-0 z-30 border-b border-gray-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          ExamCoach.ai
        </Link>

        <div className="flex items-center gap-6 sm:gap-8">
          <Link href="/" className={linkClass('home')}>
            YKI Writing
          </Link>
          <Link href="/dashboard" className={linkClass('dashboard')}>
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
