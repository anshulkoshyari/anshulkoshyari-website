import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="max-w-xl mx-auto px-8 py-12">
      <Header activePage="home" />
      <p className="mb-8">Hello Nigga</p>
      <main className="space-y-8">
        <section className="pt-4">
          <div className="space-y-0.5">
            <p>
              <a
                href="https://twitter.com/anshulkoshyari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 font-light hover:underline text-xs"
              >
                Twitter
              </a>
            </p>
            <p>
              <a
                href="https://github.com/anshulkoshyari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 font-light hover:underline text-xs"
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

