import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://andrewdavidnolan.com'),
  title: 'Andrew Nolan | Operations Executive',
  description: 'Operations executive with 15 years building businesses from startup to acquisition. Three successful exits. VP Operations, COO, CEO.',
  keywords: ['operations', 'COO', 'VP Operations', 'CEO', 'startup', 'acquisition', 'logistics', 'supply chain'],
  authors: [{ name: 'Andrew Nolan' }],
  openGraph: {
    title: 'Andrew Nolan | Operations Executive',
    description: 'I build operations that scale—and get acquired.',
    url: 'https://andrewdavidnolan.com',
    siteName: 'Andrew Nolan',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrew Nolan | Operations Executive',
    description: 'I build operations that scale—and get acquired.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors">
        <ThemeProvider>
          <Navigation />
          <main className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
            {children}
          </main>
          <footer className="max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-8 border-t border-neutral-200 dark:border-neutral-800">
            <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400">
              © 2026 Andrew Nolan
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
