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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen bg-[#faf9f7] dark:bg-[#0c0c0c] text-[#1a1a1a] dark:text-[#f0ece4] transition-colors">
        <ThemeProvider>
          <Navigation />
          <main className="max-w-[1100px] mx-auto px-5 md:px-8 py-8 md:py-12">
            {children}
          </main>
          <footer className="max-w-[1100px] mx-auto px-5 md:px-8 py-8 border-t border-[#eeebe5] dark:border-[#1e1c1a]">
            <p className="text-xs text-[#8a8a8a] dark:text-[#6b6560] text-center">
              © 2026 Andrew Nolan
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
