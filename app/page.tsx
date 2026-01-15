import Link from 'next/link'

export default function Home() {
  return (
    <div className="py-16 md:py-24">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Andrew Nolan
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-6">
          Operations Executive · Builder · 3x Acquired
        </p>
        <p className="text-2xl md:text-3xl font-medium mb-8 text-neutral-800 dark:text-neutral-200">
          I build operations that scale—and get acquired.
        </p>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mb-10 leading-relaxed">
          15 years building businesses from startup to acquisition. Most recently VP Operations at Aramark and CEO of Good Uncle, scaling a delivery service to 18 markets and a $5M CPG line across 200 locations.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link
            href="/story"
            className="px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors"
          >
            My Story
          </Link>
          <Link
            href="/resume"
            className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Contact
          </Link>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-t border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <p className="text-3xl font-bold">$25M</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">P&L Responsibility</p>
        </div>
        <div>
          <p className="text-3xl font-bold">150</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Employees Managed</p>
        </div>
        <div>
          <p className="text-3xl font-bold">18</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Markets Scaled</p>
        </div>
        <div>
          <p className="text-3xl font-bold">3</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Acquisitions</p>
        </div>
      </section>

      {/* Teaser */}
      <section className="py-10">
        <h2 className="text-xl font-semibold mb-4">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <h3 className="font-medium mb-2">Build & Scale</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Take operations from 0→1→100. Design systems that outlast individuals.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <h3 className="font-medium mb-2">Hardware + Software</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Designed custom delivery vehicles. Built the apps that ran them. Managed the teams that operated them.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <h3 className="font-medium mb-2">Transform with AI</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Replaced a 150-person org with AI personas. Maintained 60% growth with 2 people.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
