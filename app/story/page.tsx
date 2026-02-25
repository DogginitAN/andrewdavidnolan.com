'use client'

import { useState, useEffect } from 'react'

export default function Story() {
  const [blueprintOpen, setBlueprintOpen] = useState(false)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setBlueprintOpen(false)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <div className="pt-20 md:pt-24 pb-8">
      {/* Page Header */}
      <header className="text-center mb-16 md:mb-24">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-600 dark:text-amber-500 mb-4">
          History
        </p>
        <h1 className="font-['Syne'] font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
          My Story
        </h1>
        <p className="text-[#525252] dark:text-[#a8a29e] max-w-[450px] mx-auto leading-relaxed">
          Four moments that define how I think about building.
        </p>
      </header>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#e5e2dc] via-[#e5e2dc] to-transparent dark:from-[#252220] dark:via-[#252220]" />


        {/* 01 — The Evolution */}
        <section className="relative md:grid md:grid-cols-2 md:gap-16 mb-24 md:mb-32 items-start">
          {/* Large background number */}
          <div className="hidden md:block absolute -left-8 top-0 font-['Syne'] font-extrabold text-[12rem] leading-none text-[#f0ece4] dark:text-[#1a1a1a] select-none -z-10 opacity-80">
            01
          </div>
          {/* Timeline dot */}
          <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-600 dark:bg-amber-500 ring-4 ring-[#faf9f7] dark:ring-[#0c0c0c] z-10" />

          {/* Left: Content */}
          <div className="md:text-right md:pr-12">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-600 dark:text-amber-500 mb-2">The Evolution</p>
            <h2 className="font-['Syne'] font-bold text-2xl md:text-3xl tracking-tight mb-6">
              You Can&apos;t Scale Chaos
            </h2>
            <div className="space-y-4 md:text-right">
              <p className="text-[0.95rem] leading-[1.8] text-[#525252] dark:text-[#a8a29e]">
                When I started Escape Restaurant Group in 2009, I thought &ldquo;operations&rdquo; meant working harder than everyone else. I was wrong. We were profitable, but it was brutal. I was the system, and that meant the business couldn&apos;t grow beyond me.
              </p>
              <p className="text-[0.95rem] leading-[1.8] text-[#525252] dark:text-[#a8a29e]">
                Over the next decade — through &apos;wichcraft and Salad Pangea — I became obsessed with a single question: <em className="text-[#1a1a1a] dark:text-[#f0ece4] not-italic font-medium">How do you build a business that runs better without you?</em>
              </p>
            </div>
          </div>

          {/* Right: Continuation + Takeaway */}
          <div className="md:pl-12 mt-6 md:mt-12">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a]">
              <div className="w-1 h-8 bg-amber-600 dark:bg-amber-500 rounded-full mb-4" />
              <p className="text-[0.95rem] leading-[1.8] text-[#525252] dark:text-[#a8a29e] mb-4">
                By the time I reached Good Uncle, I wasn&apos;t just solving problems; I was engineering systems to prevent them. A scalable company isn&apos;t built on heroes — it&apos;s built on boring, reliable, bulletproof infrastructure.
              </p>
              <p className="text-[0.95rem] leading-[1.8] text-[#1a1a1a] dark:text-[#f0ece4] font-medium">
                That shift — from &ldquo;Hero&rdquo; to &ldquo;Architect&rdquo; — is what allowed me to guide three different companies to successful exits.
              </p>
            </div>
          </div>
        </section>


        {/* 02 — The View from the Passenger Seat */}
        <section className="relative md:grid md:grid-cols-2 md:gap-16 mb-24 md:mb-32 items-start">
          {/* Large background number — right side */}
          <div className="hidden md:block absolute -right-8 top-0 font-['Syne'] font-extrabold text-[12rem] leading-none text-[#f0ece4] dark:text-[#1a1a1a] select-none -z-10 opacity-80">
            02
          </div>
          {/* Timeline dot */}
          <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-600 dark:bg-amber-500 ring-4 ring-[#faf9f7] dark:ring-[#0c0c0c] z-10" />

          {/* Left: Blueprint + Stats */}
          <div className="md:pr-12 order-2 md:order-1 mt-8 md:mt-0">
            <button
              onClick={() => setBlueprintOpen(true)}
              className="relative group w-full rounded-2xl overflow-hidden border border-[#e5e2dc] dark:border-[#252220] hover:border-amber-600/30 dark:hover:border-amber-500/20 transition-all mb-4"
            >
              <img
                src="/vehicle-blueprint.png"
                alt="Good Uncle mobile kitchen technical schematic"
                className="w-full"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white dark:bg-[#141414] rounded-xl px-5 py-2.5 flex items-center gap-2.5 shadow-lg">
                    <svg className="w-5 h-5 text-amber-600 dark:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <span className="text-sm font-medium">Click to expand</span>
                  </div>
                </div>
              </div>
            </button>
            <p className="text-xs text-[#8a8a8a] dark:text-[#6b6560] text-center mb-6">
              24.8 kWh battery system · dual thermal zones · fleet monitoring
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { number: '50', label: 'Vehicles Built' },
                { number: '24.8 kWh', label: 'Battery System' },
                { number: '500', label: 'Meal Capacity' },
                { number: '150', label: 'Per Charge' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a] text-center">
                  <p className="font-['Syne'] font-extrabold text-lg tracking-tight">{stat.number}</p>
                  <p className="text-[0.7rem] text-[#8a8a8a] dark:text-[#6b6560] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:pl-12 order-1 md:order-2">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-600 dark:text-amber-500 mb-2">The Bridge</p>
            <h2 className="font-['Syne'] font-bold text-2xl md:text-3xl tracking-tight mb-6">
              The View from the Passenger Seat
            </h2>
            <div className="space-y-4">
              <p className="text-[0.95rem] leading-[1.8] text-[#525252] dark:text-[#a8a29e]">
                In 2017, we had a problem. Our delivery vehicles were theoretically perfect — on paper. But in the field, they were failing.
              </p>
              <p className="text-[0.95rem] leading-[1.8] text-[#525252] dark:text-[#a8a29e]">
                So I stopped reading reports and got in the truck. I sat in the passenger seat for weeks. I watched drivers struggle to reach ovens mounted three inches too high. I watched them fight with an app that required three taps when they had one free hand.
              </p>
              <p className="text-[0.95rem] leading-[1.8] text-[#1a1a1a] dark:text-[#f0ece4] font-medium">
                The gap between &ldquo;Engineering&rdquo; and &ldquo;Operations&rdquo; is where companies die.
              </p>
              <p className="text-[0.95rem] leading-[1.8] text-[#525252] dark:text-[#a8a29e]">
                I became the bridge. I brought the drivers&apos; frustrations to the engineers in language they understood. We redesigned the fleet and the app — not based on specs, but on human reality.
              </p>
              <p className="text-[0.95rem] leading-[1.8] text-[#525252] dark:text-[#a8a29e]">
                The result wasn&apos;t just a better truck — it was a team that trusted the tools we gave them.
              </p>
            </div>
          </div>
        </section>


        {/* 03 — The Pivot */}
        <section className="relative md:grid md:grid-cols-2 md:gap-16 mb-24 md:mb-32 items-start">
          {/* Large background number */}
          <div className="hidden md:block absolute -left-8 top-0 font-['Syne'] font-extrabold text-[12rem] leading-none text-[#f0ece4] dark:text-[#1a1a1a] select-none -z-10 opacity-80">
            03
          </div>
          {/* Timeline dot */}
          <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-600 dark:bg-amber-500 ring-4 ring-[#faf9f7] dark:ring-[#0c0c0c] z-10" />

          {/* Left: Content */}
          <div className="md:text-right md:pr-12">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-600 dark:text-amber-500 mb-2">The Pivot</p>
            <h2 className="font-['Syne'] font-bold text-2xl md:text-3xl tracking-tight mb-6">
              150 → 2
            </h2>
            <div className="space-y-4 md:text-right">
              <p className="text-[0.95rem] leading-[1.8] text-[#525252] dark:text-[#a8a29e]">
                In 2024, I looked at our P&amp;L and saw a hard truth. We had built an incredible logistics machine — 150 people, fleets of trucks, massive overhead — but the market had shifted. The value wasn&apos;t in the trucks anymore; it was in the brand.
              </p>
              <p className="text-[0.95rem] leading-[1.8] text-[#1a1a1a] dark:text-[#f0ece4] font-medium">
                Most leaders try to save the ship. I decided to build a speedboat.
              </p>
              <p className="text-[0.95rem] leading-[1.8] text-[#525252] dark:text-[#a8a29e]">
                It was the hardest decision of my career: dismantling the logistics network I had spent years building. We moved to a partnership model, but that left a gap — who runs the company?
              </p>
            </div>
          </div>

          {/* Right: AI story + Before/After */}
          <div className="md:pl-12 mt-6 md:mt-12">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a] mb-4">
              <div className="w-1 h-8 bg-amber-600 dark:bg-amber-500 rounded-full mb-4" />
              <p className="text-[0.95rem] leading-[1.8] text-[#525252] dark:text-[#a8a29e] mb-4">
                I didn&apos;t want to re-hire a bloat of middle management. Instead, I bet on AI. I spent months encoding our brand voice, our decision matrices, and our operational logic into autonomous agents.
              </p>
              <p className="text-[0.95rem] leading-[1.8] text-[#525252] dark:text-[#a8a29e]">
                It worked. We saved the business not by working harder, but by having the courage to completely reimagine how the work gets done.
              </p>
            </div>

            {/* Before/After */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-5 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/30 text-center">
                <p className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-red-500 dark:text-red-400 mb-1">Before</p>
                <p className="font-['Syne'] font-extrabold text-2xl text-red-700 dark:text-red-300">150</p>
                <p className="text-xs text-red-500 dark:text-red-400 mt-1">employees</p>
              </div>
              <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/30 text-center">
                <p className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-emerald-600 dark:text-emerald-400 mb-1">After</p>
                <p className="font-['Syne'] font-extrabold text-2xl text-emerald-700 dark:text-emerald-300">2</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">employees + AI</p>
              </div>
            </div>
          </div>
        </section>


        {/* 04 — The Origin */}
        <section className="relative md:grid md:grid-cols-2 md:gap-16 mb-16 items-start">
          {/* Large background number — right side */}
          <div className="hidden md:block absolute -right-8 top-0 font-['Syne'] font-extrabold text-[12rem] leading-none text-[#f0ece4] dark:text-[#1a1a1a] select-none -z-10 opacity-80">
            04
          </div>
          {/* Timeline dot */}
          <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-600 dark:bg-amber-500 ring-4 ring-[#faf9f7] dark:ring-[#0c0c0c] z-10" />

          {/* Left: Highlight card */}
          <div className="md:pr-12 order-2 md:order-1 mt-8 md:mt-0">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a]">
              <div className="w-1 h-8 bg-amber-600 dark:bg-amber-500 rounded-full mb-4" />
              <p className="text-[0.95rem] leading-[1.8] text-[#525252] dark:text-[#a8a29e] mb-4">
                I started selling gumballs, but I didn&apos;t stop at direct sales. I recruited friends to cover other bus routes, creating my first crude &ldquo;distribution tier.&rdquo; I was learning about inventory pinch points and wholesale margins before I knew how to do long division.
              </p>
              <p className="text-[0.95rem] leading-[1.8] text-[#525252] dark:text-[#a8a29e] mb-4">
                Eventually, the Principal shut me down (my first regulatory hurdle) and made me return the proceeds. I didn&apos;t care about the lost cash. I was hooked on the mechanics of the machine.
              </p>
              <p className="text-[0.95rem] leading-[1.8] text-[#1a1a1a] dark:text-[#f0ece4] font-medium">
                That was the spark that has driven every role since: I don&apos;t just want to participate in the economy. I want to build the engine.
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:pl-12 order-1 md:order-2">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-600 dark:text-amber-500 mb-2">The Origin</p>
            <h2 className="font-['Syne'] font-bold text-2xl md:text-3xl tracking-tight mb-6">
              The First Engine
            </h2>
            <div className="space-y-4">
              <p className="text-[0.95rem] leading-[1.8] text-[#1a1a1a] dark:text-[#f0ece4] font-medium italic">
                It wasn&apos;t about the candy. It was about the flow.
              </p>
              <p className="text-[0.95rem] leading-[1.8] text-[#525252] dark:text-[#a8a29e]">
                At age 10, while other kids were trading Pokémon cards, I was analyzing the school bus. I realized it wasn&apos;t just transportation; it was a captive logistics network.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Blueprint Modal */}
      {blueprintOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setBlueprintOpen(false)}
        >
          <div className="relative max-w-6xl w-full">
            <button
              onClick={() => setBlueprintOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#a8a29e] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm">Press ESC or click to close</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
            <img
              src="/vehicle-blueprint.png"
              alt="Good Uncle mobile kitchen technical schematic - full view"
              className="w-full rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}
