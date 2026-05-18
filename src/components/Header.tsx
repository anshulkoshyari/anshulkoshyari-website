import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

interface HeaderProps {
  activePage?: 'home' | 'books' | 'thoughts'
}

export default function Header({ activePage = 'home' }: HeaderProps) {
  return (
    <header className="flex justify-between items-center mb-12">
      <h1 className="text-lg font-semibold">
        <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-300">
          Anshul Koshyari
        </Link>
      </h1>
      <nav className="flex items-center space-x-6 text-xs">
        <Link
          href="/thoughts"
          className={
            activePage === 'thoughts'
              ? 'text-gray-900 dark:text-gray-100'
              : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
          }
        >
          Thoughts
        </Link>
        <Link
          href="/books"
          className={
            activePage === 'books'
              ? 'text-gray-900 dark:text-gray-100'
              : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
          }
        >
          Books
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  )
}

