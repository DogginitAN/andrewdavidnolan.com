'use client'

import Link from 'next/link'

export default function Contact() {
  return (
    <div className="pt-20 md:pt-24 pb-8">
      {/* Hero Section — 2 column */}
      <section className="md:grid md:grid-cols-2 md:gap-16 mb-16 md:mb-24 items-start">
        {/* Left: Bio blurb */}
        <div className="mb-8 md:mb-0">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-600 dark:text-amber-500 mb-4">
            Get In Touch
          </p>
          <p className="text-[0.95rem] leading-[1.8] text-[#525252] dark:text-[#a8a29e]">
            I am best deployed on problems that require bridging the gap between
            physical operations and digital strategy. I operate at the intersection
            of atoms, bits, and people. Most companies break there. I build.
          </p>
        </div>
        {/* Right: Big headline */}
        <div>
          <h1 className="font-['Syne'] font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.1]">
            Let&apos;s Build<br />
            Something<span className="text-amber-600 dark:text-amber-500">.</span>
          </h1>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16 md:mb-24">
        <a href="mailto:anolan22@gmail.com"
          className="group p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a] hover:border-amber-600/20 dark:hover:border-amber-500/15 hover:-translate-y-1 transition-all">
          <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <p className="font-['Syne'] font-semibold text-sm mb-1">Email</p>
          <p className="text-xs text-[#8a8a8a] dark:text-[#6b6560] break-all">anolan22@gmail.com</p>
        </a>
        <a href="https://linkedin.com/in/andrewdavidnolan" target="_blank" rel="noopener noreferrer"
          className="group p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a] hover:border-amber-600/20 dark:hover:border-amber-500/15 hover:-translate-y-1 transition-all">
          <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mb-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <p className="font-['Syne'] font-semibold text-sm mb-1">LinkedIn</p>
          <p className="text-xs text-[#8a8a8a] dark:text-[#6b6560]">andrewdavidnolan</p>
        </a>
        <a href="tel:+13153918464"
          className="group p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a] hover:border-amber-600/20 dark:hover:border-amber-500/15 hover:-translate-y-1 transition-all">
          <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <p className="font-['Syne'] font-semibold text-sm mb-1">Phone</p>
          <p className="text-xs text-[#8a8a8a] dark:text-[#6b6560]">(315) 391-8464</p>
        </a>
        <div className="p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a]">
          <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="font-['Syne'] font-semibold text-sm mb-1">Location</p>
          <p className="text-xs text-[#8a8a8a] dark:text-[#6b6560]">Syracuse, NY</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16 md:mb-24">
        <a href="mailto:anolan22@gmail.com"
          className="group p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a] hover:border-amber-600/20 dark:hover:border-amber-500/15 hover:-translate-y-1 transition-all">
          <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <p className="font-['Syne'] font-semibold text-sm mb-1">Email</p>
          <p className="text-xs text-[#8a8a8a] dark:text-[#6b6560] break-all">anolan22@gmail.com</p>
        </a>
        <a href="https://linkedin.com/in/andrewdavidnolan" target="_blank" rel="noopener noreferrer"
          className="group p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a] hover:border-amber-600/20 dark:hover:border-amber-500/15 hover:-translate-y-1 transition-all">
          <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mb-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <p className="font-['Syne'] font-semibold text-sm mb-1">LinkedIn</p>
          <p className="text-xs text-[#8a8a8a] dark:text-[#6b6560]">andrewdavidnolan</p>
        </a>
        <a href="tel:+13153918464"
          className="group p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a] hover:border-amber-600/20 dark:hover:border-amber-500/15 hover:-translate-y-1 transition-all">
          <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <p className="font-['Syne'] font-semibold text-sm mb-1">Phone</p>
          <p className="text-xs text-[#8a8a8a] dark:text-[#6b6560]">(315) 391-8464</p>
        </a>
        <div className="p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a]">
          <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="font-['Syne'] font-semibold text-sm mb-1">Location</p>
          <p className="text-xs text-[#8a8a8a] dark:text-[#6b6560]">Syracuse, NY</p>
        </div>
      </section>

      {/* Value Props — Dark strip */}
      <section className="rounded-2xl bg-[#1a1a1a] dark:bg-[#141414] border border-[#252220] dark:border-[#1e1c1a] overflow-hidden">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2a2825]">
          <div className="p-8">
            <p className="font-['Syne'] font-bold text-sm text-amber-500 tracking-wide mb-3">STARTUP → EXIT</p>
            <p className="text-sm leading-relaxed text-[#a8a29e]">
              Three acquisitions in 15 years. I build the operational infrastructure that makes companies transferable assets.
            </p>
          </div>
          <div className="p-8">
            <p className="font-['Syne'] font-bold text-sm text-amber-500 tracking-wide mb-3">HARDWARE + SOFTWARE</p>
            <p className="text-sm leading-relaxed text-[#a8a29e]">
              From custom IoT vehicles to React apps — I bridge the gap between physical operations and digital systems.
            </p>
          </div>
          <div className="p-8">
            <p className="font-['Syne'] font-bold text-sm text-amber-500 tracking-wide mb-3">AI TRANSFORMATION</p>
            <p className="text-sm leading-relaxed text-[#a8a29e]">
              Replaced a 150-person operation with autonomous agents. I don&apos;t just adopt AI — I architect it into the operating model.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
