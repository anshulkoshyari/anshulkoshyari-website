import Header from '@/components/Header'

interface Paper {
  title: string
  authors: string
  review?: string
  rating: number
  dateRead: string
}

const papers: Paper[] = [
  {
    title: 'MapReduce: Simplified Data Processing on Large Clusters',
    authors: 'Jeffrey Dean & Sanjay Ghemawat',
    rating: 5,
    dateRead: '01-2024'
  },
  {
    title: 'Attention Is All You Need',
    authors: 'Vaswani et al.',
    review: 'Paper introduces the Transformer architecture for LLMs. Need to read again.',
    rating: 5,
    dateRead: '02-2025'
  }
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

export default function Papers() {
  return (
    <div className="max-w-xl mx-auto px-8 py-12">
      <Header activePage="papers" />
      <main>
        <div className="space-y-4">
          {papers.map((paper, index) => (
            <div key={index} className="rounded-lg px-2 py-1 -mx-2">
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-[13.5px] font-light dark:text-gray-100">{paper.title}</h2>
                    <p className="text-[11.5px] text-gray-500 font-light dark:text-gray-400">{paper.authors}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <StarRating rating={paper.rating} />
                    <span className="text-[11.5px] text-gray-500 font-light dark:text-gray-400 mt-0.5">{paper.dateRead}</span>
                  </div>
                </div>
                {paper.review && (
                  <p className="font-light dark:text-gray-300 text-[11.5px]">{paper.review}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

