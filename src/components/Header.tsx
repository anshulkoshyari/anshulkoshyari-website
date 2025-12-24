import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

interface HeaderProps {
  activePage?: 'home' | 'books' | 'papers'
}

export default function Header({ activePage = 'home' }: HeaderProps) {
  return (
    <header className="flex justify-between items-center mb-12">
      <h1 className="text-lg font-bold">
        <Link href="/" className="hover:text-gray-400 dark:hover:text-gray-600">
          Anshul Koshyari
        </Link>
      </h1>
      <nav className="flex items-center space-x-4 text-xs">
        <Link 
          href="/papers" 
          className={
            activePage === 'papers' 
              ? 'font-medium'
              : 'text-gray-500 hover:text-gray-300 dark:hover:text-gray-700'
          }
        >
          Papers
        </Link>
        <Link 
          href="/books" 
          className={
            activePage === 'books' 
              ? 'font-medium'
              : 'text-gray-500 hover:text-gray-300 dark:hover:text-gray-700'
          }
        >
          Books
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  )
}

