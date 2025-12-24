'use client'

import { useState, useMemo } from 'react'
import Header from '@/components/Header'

interface Book {
  title: string
  author: string
  review?: string
  rating: number
  dateRead: string
}

const books: Book[] = [
  {
    title: 'The Three-Body Problem',
    author: 'Cixin Liu',
    review: 'Work in progress',
    rating: 0,
    dateRead: '12-2025'
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    review: 'Helped me go from junior to mid-senior developer',
    rating: 4,
    dateRead: '09-2023'
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    rating: 5,
    review: 'Favorite book on distributed systems',
    dateRead: '11-2024'
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    rating: 3,
    dateRead: '01-2024'
  },
  {
    title: '1984',
    author: 'George Orwell',
    rating: 4,
    dateRead: '02-2024'
  },
  {
    title: 'The Art of Seduction',
    author: 'Robert Greene',
    rating: 2,
    review: 'Left midway through',
    dateRead: '01-2025'
  },
  {
    title: 'Shoe Dog',
    author: 'Phil Knight',
    rating: 4,
    dateRead: '05-2025'
  },
  {
    title: 'Zero to One',
    author: 'Peter Thiel',
    rating: 4,
    dateRead: '09-2025'
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-0.5 text-sm">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? 'text-yellow-500 dark:text-yellow-400' : 'text-gray-300 dark:text-gray-600'}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default function Books() {
  const [sortBy, setSortBy] = useState<'date' | 'rating'>('date')

  const sortedBooks = useMemo(() => {
    const booksCopy = [...books]
    
    if (sortBy === 'rating') {
      return booksCopy.sort((a, b) => b.rating - a.rating)
    } else {
      return booksCopy.sort((a, b) => {
        const [monthA, yearA] = a.dateRead.split('-').map(Number)
        const [monthB, yearB] = b.dateRead.split('-').map(Number)
        const dateA = new Date(yearA, monthA - 1)
        const dateB = new Date(yearB, monthB - 1)
        return dateB.getTime() - dateA.getTime()
      })
    }
  }, [sortBy])

  const toggleSort = () => {
    setSortBy(sortBy === 'date' ? 'rating' : 'date')
  }

  return (
    <div className="max-w-xl mx-auto px-8 py-12">
      <Header activePage="books" />
      <main>
        <div className="flex justify-end mb-8">
          <button
            onClick={toggleSort}
            className="px-2 py-0.5 rounded-md border border-gray-600 text-xs font-light hover:bg-gray-50 dark:hover:bg-gray-900"
          >
            Sort by: {sortBy === 'date' ? 'Date' : 'Rating'}
          </button>
        </div>
        <div className="space-y-3">
          {sortedBooks.map((book, index) => (
            <div key={index} className="rounded-lg px-2 py-1 -mx-2">
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-[13.5px] font-light dark:text-gray-100">{book.title}</h2>
                    <p className="text-[11.5px] text-gray-500 font-light dark:text-gray-400">{book.author}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <StarRating rating={book.rating} />
                    <span className="text-[11.5px] text-gray-500 font-light dark:text-gray-400 mt-0.5">{book.dateRead}</span>
                  </div>
                </div>
                {book.review && (
                  <p className="font-light dark:text-gray-300 text-[11.5px]">{book.review}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

