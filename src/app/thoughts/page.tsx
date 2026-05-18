import Header from '@/components/Header'

interface Thought {
  title: string
  href: string
  date: string
}

const blogs: Thought[] = [
  {
    title: 'Launching Hovrlay',
    href: 'https://www.hovrlay.com/blog/launching-hovrlay',
    date: '2026-04',
  },
  {
    title: 'The State of AI Meeting Assistants in 2026',
    href: 'https://www.hovrlay.com/blog/meeting-bots-comparison',
    date: '2026-05',
  },
]

function ThoughtLink({ thought }: { thought: Thought }) {
  return (
    <div>
      <a
        href={thought.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-between items-baseline px-2 py-0"
      >
        <span className="flex items-center gap-2 min-w-0">
          <span className="text-sm font-light truncate">{thought.title}</span>
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 ml-4 flex-shrink-0 font-light">
          {thought.date}
        </span>
      </a>
    </div>
  )
}

function ThoughtSection({
  title,
  thoughts,
}: {
  title: string
  thoughts: Thought[]
}) {
  return (
    <section>
      <h2 className="text-base font-bold mb-4 px-2">{title}</h2>
      <div className="space-y-2">
        {thoughts.map((thought) => (
          <ThoughtLink key={thought.href} thought={thought} />
        ))}
      </div>
    </section>
  )
}

export default function Thoughts() {
  return (
    <div className="max-w-xl mx-auto px-8 py-12">
      <Header activePage="thoughts" />
      <main className="space-y-8">
        <ThoughtSection title="Blogs" thoughts={blogs} />
      </main>
    </div>
  )
}
