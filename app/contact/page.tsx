export default function Contact() {
  return (
    <div className="py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl">
        I am best deployed on problems that require bridging the gap between physical operations and digital strategy.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Email */}
        <a
          href="mailto:anolan22@gmail.com"
          className="group p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-neutral-600 dark:text-neutral-400">anolan22@gmail.com</p>
            </div>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/andrewdavidnolan"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-neutral-600 dark:text-neutral-400">linkedin.com/in/andrewdavidnolan</p>
            </div>
          </div>
        </a>

        {/* Phone */}
        <a
          href="tel:+13153918464"
          className="group p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-neutral-600 dark:text-neutral-400">(315) 391-8464</p>
            </div>
          </div>
        </a>

        {/* Location */}
        <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Location</p>
              <p className="text-neutral-600 dark:text-neutral-400">Syracuse, NY</p>
            </div>
          </div>
        </div>
      </div>

      {/* Current Focus */}
      <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
        <h2 className="font-semibold mb-4">Current Focus</h2>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          I am selectively exploring opportunities to lead operations in Hard Tech, Logistics, and Energy. I thrive in environments where the playbook hasn't been written yet.
        </p>
      </div>
    </div>
  )
}
