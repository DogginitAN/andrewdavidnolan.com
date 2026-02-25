'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  return (
    <div>
      {/* Hero */}
      <section className="min-h-[85vh] flex flex-col justify-center pt-24 md:pt-16">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-600 dark:text-amber-500 mb-6 animate-fadeUp" style={{ animationDelay: '0.1s', animationFillMode: 'forwards', opacity: 0 }}>
          Operations Executive &amp; Builder
        </p>

        <h1 className="font-['Syne'] font-extrabold text-[clamp(3rem,7vw,5.5rem)] leading-[1.05] tracking-tight mb-8 animate-fadeUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards', opacity: 0 }}>
          I Architect<br />
          Acquisition-Ready<br />
          Infrastructure<span className="text-amber-600 dark:text-amber-500">.</span>
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-[#525252] dark:text-[#a8a29e] max-w-[600px] mb-10 animate-fadeUp" style={{ animationDelay: '0.35s', animationFillMode: 'forwards', opacity: 0 }}>
          I don&apos;t just scale businesses — I stabilize them. By bridging the gap between
          human workflows and technical systems, I turn chaotic startups into transferable assets.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 animate-fadeUp" style={{ animationDelay: '0.5s', animationFillMode: 'forwards', opacity: 0 }}>
          <Link
            href="/story"
            className="px-8 py-3.5 bg-[#1a1a1a] dark:bg-[#f0ece4] text-white dark:text-[#0c0c0c] rounded-[10px] font-semibold text-[0.9rem] tracking-wide hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-amber-500/10 transition-all text-center"
          >
            My Story
          </Link>
          <Link
            href="/resume"
            className="px-8 py-3.5 border border-[#e5e2dc] dark:border-[#252220] rounded-[10px] font-medium text-[0.9rem] text-[#525252] dark:text-[#a8a29e] hover:border-amber-600 dark:hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-500 transition-all text-center"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 border border-[#e5e2dc] dark:border-[#252220] rounded-[10px] font-medium text-[0.9rem] text-[#525252] dark:text-[#a8a29e] hover:border-amber-600 dark:hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-500 transition-all text-center"
          >
            Contact
          </Link>
        </div>
      </section>


      {/* Lifetime Impact */}
      <section className="py-24 border-t border-[#eeebe5] dark:border-[#1e1c1a]">
        <p className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#8a8a8a] dark:text-[#6b6560] text-center mb-14">
          Lifetime Impact
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { number: '$42M+', label: 'P&L Managed', detail: 'Food tech, hospitality, and CPG' },
            { number: '600+', label: 'Staff Led', detail: 'Delivery fleets to exec teams' },
            { number: '230+', label: 'Points of Presence', detail: '18 markets, 200+ retail locations' },
            { number: '3', label: 'Successful Exits', detail: 'Built things that got bought' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 md:p-8 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a] hover:border-amber-600/20 dark:hover:border-amber-500/15 hover:bg-amber-600/[0.03] dark:hover:bg-amber-500/[0.03] hover:-translate-y-0.5 transition-all"
            >
              <p className="font-['Syne'] font-extrabold text-4xl md:text-[2.75rem] tracking-tight leading-none mb-3">{stat.number}</p>
              <p className="text-[0.85rem] font-medium text-[#525252] dark:text-[#a8a29e] mb-1">{stat.label}</p>
              <p className="text-xs text-[#8a8a8a] dark:text-[#6b6560]">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>


      {/* What I Do */}
      <section className="py-16">
        <h2 className="font-['Syne'] font-bold text-2xl tracking-tight mb-10">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Card 1: The Pattern */}
          <button
            onClick={() => toggleCard('scale')}
            className="group relative p-7 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a] text-left w-full hover:border-amber-600/20 dark:hover:border-amber-500/15 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/30 transition-all overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-600 dark:bg-amber-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            <p className="font-['Syne'] text-[0.7rem] font-bold text-amber-600 dark:text-amber-500 tracking-[0.1em] mb-3">01</p>
            <h3 className="font-['Syne'] font-bold text-[1.1rem] tracking-tight mb-3">The Pattern: 3 Exits in 15 Years</h3>

            {!expandedCard || expandedCard !== 'scale' ? (
              <>
                <p className="text-[0.9rem] leading-relaxed text-[#525252] dark:text-[#a8a29e]">
                  I&apos;ve been through three acquisitions — always as the operator who built the infrastructure that made the business sellable. From my first exit as a founder to a Fortune 200 acquisition, I&apos;ve developed a playbook for turning chaotic growth into transferable value.
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-[0.8rem] font-semibold text-amber-600 dark:text-amber-500 tracking-wide">Read more ↓</span>
              </>
            ) : (
              <div className="text-[0.9rem] text-[#525252] dark:text-[#a8a29e] space-y-4 mt-2">
                <div>
                  <h4 className="font-['Syne'] font-semibold text-[#1a1a1a] dark:text-[#f0ece4] mb-2">My Scaling Playbook</h4>
                  <p className="leading-relaxed">Growth is marketing; scaling is operations. I specialize in the friction points that break companies when they grow too fast.</p>
                </div>
                <div>
                  <h4 className="font-['Syne'] font-semibold text-[#1a1a1a] dark:text-[#f0ece4] mb-2">Phase 1: Stabilization</h4>
                  <p className="leading-relaxed">My foundation was built in the trenches. As a founder at Escape Restaurant Group, I learned that operations is survival, building the business from scratch before exiting to my partner.</p>
                  <p className="leading-relaxed italic mt-2">The lesson: You can&apos;t scale chaos. I focus first on unit economics and foundational SOPs.</p>
                </div>
                <div>
                  <h4 className="font-['Syne'] font-semibold text-[#1a1a1a] dark:text-[#f0ece4] mb-2">Phase 2: Systematization</h4>
                  <p className="leading-relaxed">At Salad Pangea, I replaced heroics with systems. I built inventory and forecasting models that removed dependency on key individuals, allowing us to hit $6.8M in revenue.</p>
                </div>
                <div>
                  <h4 className="font-['Syne'] font-semibold text-[#1a1a1a] dark:text-[#f0ece4] mb-2">Phase 3: Optimization</h4>
                  <p className="leading-relaxed">At Good Uncle, scaling to 18 markets meant building for the acquirer. I implemented corporate-grade compliance, supply chain redundancy, and data visibility that survived Fortune 200 due diligence.</p>
                  <p className="font-medium text-[#1a1a1a] dark:text-[#f0ece4] mt-2">I build companies that are ready to be handed over.</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-amber-600 dark:text-amber-500 tracking-wide">Collapse ↑</span>
              </div>
            )}
          </button>


          {/* Card 2: Human-Centric Bridge */}
          <button
            onClick={() => toggleCard('hardware')}
            className="group relative p-7 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a] text-left w-full hover:border-amber-600/20 dark:hover:border-amber-500/15 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/30 transition-all overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-600 dark:bg-amber-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            <p className="font-['Syne'] text-[0.7rem] font-bold text-amber-600 dark:text-amber-500 tracking-[0.1em] mb-3">02</p>
            <h3 className="font-['Syne'] font-bold text-[1.1rem] tracking-tight mb-3">The Human-Centric Bridge</h3>

            {!expandedCard || expandedCard !== 'hardware' ? (
              <>
                <p className="text-[0.9rem] leading-relaxed text-[#525252] dark:text-[#a8a29e]">
                  I don&apos;t just write requirements — I translate operational reality into technical execution. I sat in the passenger seat with drivers to redesign our fleet and apps around human behavior, not specs.
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-[0.8rem] font-semibold text-amber-600 dark:text-amber-500 tracking-wide">Read more ↓</span>
              </>
            ) : (
              <div className="text-[0.9rem] text-[#525252] dark:text-[#a8a29e] space-y-4 mt-2">
                <div>
                  <h4 className="font-['Syne'] font-semibold text-[#1a1a1a] dark:text-[#f0ece4] mb-2">Observation as the Blueprint</h4>
                  <p className="leading-relaxed">Tech fails when it ignores the human holding the tool. My approach wasn&apos;t started in a Jira ticket — it started in the passenger seat.</p>
                </div>
                <div>
                  <h4 className="font-['Syne'] font-semibold text-[#1a1a1a] dark:text-[#f0ece4] mb-2">The Hardware</h4>
                  <p className="leading-relaxed">When we built our custom fleet, I started with occupational empathy. I mapped every movement a driver made. By bringing those observations to our electrical engineers, we built a 24.8kWh battery system that fit the workflow.</p>
                </div>
                <div>
                  <h4 className="font-['Syne'] font-semibold text-[#1a1a1a] dark:text-[#f0ece4] mb-2">The Software</h4>
                  <p className="leading-relaxed">I acted as the translator between our React/Node developers and the operations team. Field → Dev: I filtered vague complaints into actionable bug reports. Dev → Field: I was the &quot;megaphone&quot; explaining the why and how, ensuring high adoption.</p>
                </div>
                <div className="pt-3 border-t border-[#eeebe5] dark:border-[#1e1c1a]">
                  <p className="leading-relaxed">Whether it&apos;s food delivery, energy logistics, or SaaS — you can&apos;t engineer a solution if you don&apos;t understand the problem. I ensure the solution matches the reality on the ground.</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-amber-600 dark:text-amber-500 tracking-wide">Collapse ↑</span>
              </div>
            )}
          </button>


          {/* Card 3: Transform with AI */}
          <button
            onClick={() => toggleCard('ai')}
            className="group relative p-7 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a] text-left w-full hover:border-amber-600/20 dark:hover:border-amber-500/15 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/30 transition-all overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-600 dark:bg-amber-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            <p className="font-['Syne'] text-[0.7rem] font-bold text-amber-600 dark:text-amber-500 tracking-[0.1em] mb-3">03</p>
            <h3 className="font-['Syne'] font-bold text-[1.1rem] tracking-tight mb-3">Transform with AI</h3>

            {!expandedCard || expandedCard !== 'ai' ? (
              <>
                <p className="text-[0.9rem] leading-relaxed text-[#525252] dark:text-[#a8a29e]">
                  I pivoted a 150-person organization into a lean $5M CPG brand run by two people. Autonomous AI agents replaced the executive layer while maintaining 60% YoY growth.
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-[0.8rem] font-semibold text-amber-600 dark:text-amber-500 tracking-wide">Read more ↓</span>
              </>
            ) : (
              <div className="text-[0.9rem] text-[#525252] dark:text-[#a8a29e] space-y-4 mt-2">
                <div>
                  <h4 className="font-['Syne'] font-semibold text-[#1a1a1a] dark:text-[#f0ece4] mb-2">Replacing the Head Office with Code</h4>
                  <p className="leading-relaxed">In 2024, I faced a choice: keep running a capital-intensive delivery fleet, or pivot to our high-margin CPG product. I chose the pivot.</p>
                </div>
                <div>
                  <h4 className="font-['Syne'] font-semibold text-[#1a1a1a] dark:text-[#f0ece4] mb-2">Decouple &amp; Automate</h4>
                  <p className="leading-relaxed">First, I shut down the physical logistics arm and moved production to major manufacturing partners. This eliminated the need for 140 operational staff.</p>
                </div>
                <div>
                  <h4 className="font-['Syne'] font-semibold text-[#1a1a1a] dark:text-[#f0ece4] mb-2">The AI Execution</h4>
                  <p className="leading-relaxed">I didn&apos;t hire a team; I built one. We fed 5 years of company history into a vector database and built AI agents for Sales Ops, Marketing, and Customer Support. A reliable, repeatable executive function that runs on-demand.</p>
                  <p className="font-medium text-[#1a1a1a] dark:text-[#f0ece4] mt-2">We now operate a $5M revenue business with a 2-person team.</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-amber-600 dark:text-amber-500 tracking-wide">Collapse ↑</span>
              </div>
            )}
          </button>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-16 border-t border-[#eeebe5] dark:border-[#1e1c1a]">
        <p className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#8a8a8a] dark:text-[#6b6560] text-center mb-14">
          What People Say
        </p>
        <div className="grid md:grid-cols-2 gap-5 max-w-[900px] mx-auto">
          {/* Matt Doumar */}
          <div className="p-7 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a] hover:border-amber-600/20 dark:hover:border-amber-500/15 transition-all">
            <div className="relative text-[0.95rem] italic leading-relaxed text-[#525252] dark:text-[#a8a29e] mb-6">
              <span className="absolute -top-3 -left-1 font-['Syne'] text-5xl text-amber-600/20 dark:text-amber-500/15 leading-none select-none">&ldquo;</span>
              <p className="relative">
                Andrew was an early hire at Good Uncle, and quickly proved his work ethic and talent — but those are table stakes for A-players. What set him apart was his ability to translate. He could drop into any function, solve problems alongside the team, and extract excellence without ever losing the 30,000-foot view. That&apos;s why when it was time for me to move on, both Aramark leadership and I chose Andrew as my replacement to be the CEO of Good Uncle — with full confidence.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[10px] bg-amber-600/[0.06] dark:bg-amber-500/[0.06] border border-amber-600/15 dark:border-amber-500/10 flex items-center justify-center font-['Syne'] font-bold text-[0.85rem] text-amber-600 dark:text-amber-500">
                MD
              </div>
              <div>
                <p className="font-semibold text-[0.9rem]">
                  <a href="https://www.linkedin.com/in/mattdoumar/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">
                    Matt Doumar
                  </a>
                </p>
                <p className="text-xs text-[#8a8a8a] dark:text-[#6b6560]">Founder, Good Uncle</p>
              </div>
            </div>
          </div>

          {/* Jonathan Duffy */}
          <div className="p-7 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a] hover:border-amber-600/20 dark:hover:border-amber-500/15 transition-all">
            <div className="relative text-[0.95rem] italic leading-relaxed text-[#525252] dark:text-[#a8a29e] mb-6">
              <span className="absolute -top-3 -left-1 font-['Syne'] text-5xl text-amber-600/20 dark:text-amber-500/15 leading-none select-none">&ldquo;</span>
              <p className="relative">
                Leading a former startup inside a Fortune 250 company demands both entrepreneurial agility and corporate rigor. Andrew possesses both, consistently flexing across strategy, operations, and execution to take on whatever challenges the business demanded.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[10px] bg-amber-600/[0.06] dark:bg-amber-500/[0.06] border border-amber-600/15 dark:border-amber-500/10 flex items-center justify-center font-['Syne'] font-bold text-[0.85rem] text-amber-600 dark:text-amber-500">
                JD
              </div>
              <div>
                <p className="font-semibold text-[0.9rem]">
                  <a href="https://www.linkedin.com/in/duffy/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">
                    Jonathan Duffy
                  </a>
                </p>
                <p className="text-xs text-[#8a8a8a] dark:text-[#6b6560]">VP of Technology and Innovation, Aramark</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
