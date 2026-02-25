'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from './ThemeProvider'

export default function Navigation() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  const isBuilderMode = pathname === '/builder-mode'

  const links = [
    { href: '/', label: 'Home' },
    { href: '/story', label: 'Story' },
    { href: '/resume', label: 'Resume' },
    { href: '/builder-mode', label: 'Builder Mode' },
    { href: '/contact', label: 'Contact' },
  ]

  if (isBuilderMode) {
    return (
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors py-2">
            ADN
          </Link>
          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center gap-2 md:gap-4">
              {links.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm md:text-base py-2 px-1 transition-colors ${
                    pathname === link.href
                      ? 'text-neutral-900 dark:text-neutral-100 font-medium'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#faf9f7]/80 dark:bg-[#0c0c0c]/85 border-b border-[#eeebe5] dark:border-[#1e1c1a] transition-colors">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-3.5 flex items-center justify-between">
        <Link href="/" className="font-['Syne'] font-extrabold text-xl tracking-tight hover:text-[#8a8a8a] dark:hover:text-[#a8a29e] transition-colors">
          ADN
        </Link>
        <div className="flex items-center gap-5 md:gap-8">
          <div className="flex items-center gap-4 md:gap-6">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.85rem] tracking-wide transition-colors ${
                  pathname === link.href
                    ? 'text-[#1a1a1a] dark:text-[#f0ece4] font-medium'
                    : 'text-[#8a8a8a] dark:text-[#6b6560] hover:text-[#1a1a1a] dark:hover:text-[#f0ece4]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-[#e5e2dc] dark:border-[#252220] text-[#8a8a8a] dark:text-[#6b6560] hover:border-amber-600 dark:hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-500 transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
