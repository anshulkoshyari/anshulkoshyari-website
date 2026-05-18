import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="max-w-xl mx-auto px-8 py-12">
      <Header activePage="home" />
      <main className="space-y-8">
        <p className="text-sm font-light">
          Situations that the matter most are often dependent on what you can think
          and say in the moment, not what you can come up with later.{' '}
          <a href="https://hovrlay.com" className="underline">
            Hovrlay
          </a>{' '}
          is my attempt at making the hardest conversations easier.
        </p>
        <section className="pt-4">
          <div className="space-y-0.5">
            <p>
              <a
                href="https://twitter.com/anshulkoshyari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:underline text-xs"
              >
                Twitter
              </a>
            </p>
            <p>
              <a
                href="https://github.com/anshulkoshyari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:underline text-xs"
              >
                Github
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

