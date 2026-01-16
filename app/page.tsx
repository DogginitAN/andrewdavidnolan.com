'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }
  return (
    <div className="py-16 md:py-24">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Andrew Nolan
        </h1>
        
        {/* Identity Label */}
        <p className="text-sm md:text-base font-medium uppercase tracking-wider text-amber-600 dark:text-amber-500 mb-6">
          Operations Executive & Builder
        </p>
        
        {/* Main Headline - Value Proposition */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-neutral-100 leading-tight">
          I Architect Acquisition-Ready Infrastructure.
        </h2>
        
        {/* Subtext - Methodology */}
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mb-10 leading-relaxed">
          I don't just scale businesses; I stabilize them. By bridging the gap between human workflows and technical systems, I turn chaotic startups into transferable assets.
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

      {/* Lifetime Impact Dashboard */}
      <section className="py-8 md:py-10 border-t border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="text-sm md:text-base font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-6 text-center">
          Lifetime Impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">$42M+</p>
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-2">Lifetime P&L Managed</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Across food tech, hospitality, and CPG verticals.</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">600+</p>
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-2">Staff Led & Trained</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">From delivery fleets to executive leadership teams.</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">230+</p>
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-2">Points of Presence</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Scaled operations across 18 markets and 200+ retail locations.</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">3</p>
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-2">Successful Exits</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Escape (Founder), Salad Pangea (Dir), Good Uncle (COO).</p>
          </div>
        </div>
      </section>

      {/* Teaser */}
      <section className="py-10">
        <h2 className="text-xl font-semibold mb-4">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <button
            onClick={() => toggleCard('scale')}
            className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-left w-full hover:border-neutral-300 dark:hover:border-neutral-700 transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium">The Pattern: 3 Exits in 15 Years</h3>
              <svg
                className={`w-5 h-5 text-neutral-400 transition-transform flex-shrink-0 ${expandedCard === 'scale' ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {!expandedCard || expandedCard !== 'scale' ? (
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                I've been through three acquisitions—always as the operator who built the infrastructure that made the business sellable. From my first exit as a founder to a Fortune 200 acquisition, I've developed a playbook for turning chaotic growth into transferable value.
              </p>
            ) : (
              <div className="text-sm text-neutral-600 dark:text-neutral-400 space-y-4 mt-4">
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">My Scaling Playbook</h4>
                  <p>Growth is marketing; scaling is operations. I specialize in the friction points that break companies when they grow too fast.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">Phase 1: Stabilization (The "Zero to One")</h4>
                  <p className="mb-2">My foundation was built in the trenches. As a founder at Escape Restaurant Group, I learned that operations is survival, building the business from scratch before exiting to my partner. I refined this discipline at 'wichcraft (Tom Colicchio), managing high-volume complexity for a premier hospitality brand.</p>
                  <p className="italic">The lesson: You can't scale chaos. I focus first on unit economics and foundational SOPs. If it doesn't work at one location, it won't work at 100.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">Phase 2: Systematization (The "One to Ten")</h4>
                  <p>At Salad Pangea, I replaced heroics with systems. I built inventory and forecasting models that removed dependency on key individuals, allowing us to hit $6.8M in revenue across multiple channels.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">Phase 3: Optimization (The "Ten to Exit")</h4>
                  <p className="mb-2">At Good Uncle, scaling to 18 markets meant building for the acquirer. I implemented corporate-grade compliance, supply chain redundancy, and data visibility that survived Fortune 200 due diligence.</p>
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">I build companies that are ready to be handed over.</p>
                </div>
              </div>
            )}
          </button>
          <button
            onClick={() => toggleCard('hardware')}
            className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-left w-full hover:border-neutral-300 dark:hover:border-neutral-700 transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium">The Human-Centric Bridge</h3>
              <svg
                className={`w-5 h-5 text-neutral-400 transition-transform ${expandedCard === 'hardware' ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {!expandedCard || expandedCard !== 'hardware' ? (
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                I don't just write requirements; I translate operational reality into technical execution. By embedding with drivers and kitchen staff, I bridged the gap between end-users and engineering teams, leading the design of custom vehicles and proprietary apps that worked because they were built for the human first.
              </p>
            ) : (
              <div className="text-sm text-neutral-600 dark:text-neutral-400 space-y-4 mt-4">
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">The Method: Observation as the Blueprint</h4>
                  <p>Tech fails when it ignores the human holding the tool. My approach to building our proprietary ecosystem wasn't started in a Jira ticket—it started in the passenger seat.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">The Hardware: Designing for the Operator</h4>
                  <p className="mb-2">When we built our custom fleet, I didn't hand a spec sheet to our electrical engineers. I started with occupational empathy. I mapped every movement a driver made: How do they reach the oven? Where is the friction in the loading process?</p>
                  <p>By bringing those observations to the table, I guided the engineers and industrial designers to build a 24.8kWh battery system that didn't just "work"—it fit the workflow. We solved technical constraints (power/heat) by understanding human constraints (movement/safety).</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">The Software: The "Megaphone" Effect</h4>
                  <p className="mb-3">I acted as the translator between our React/Node developers and the operations team.</p>
                  
                  <ul className="space-y-2 ml-4 mb-3">
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-400 mt-0.5">•</span>
                      <span><strong className="text-neutral-900 dark:text-neutral-100">Field → Dev:</strong> I filtered vague complaints ("it doesn't work") into actionable bug reports and feature requests based on root-cause observation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-400 mt-0.5">•</span>
                      <span><strong className="text-neutral-900 dark:text-neutral-100">Dev → Field:</strong> When updates shipped, I was the "megaphone" explaining the why and how to the team, ensuring high adoption rates.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">The Takeaway</h4>
                  <p>Whether it's food delivery, energy logistics, or SaaS, the principle is the same: You can't engineer a solution if you don't understand the problem. I ensure the solution matches the reality on the ground.</p>
                </div>
              </div>
            )}
          </button>
          <button
            onClick={() => toggleCard('ai')}
            className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-left w-full hover:border-neutral-300 dark:hover:border-neutral-700 transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium">Transform with AI</h3>
              <svg
                className={`w-5 h-5 text-neutral-400 transition-transform ${expandedCard === 'ai' ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {!expandedCard || expandedCard !== 'ai' ? (
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                I pivoted a 150-person heavy-logistics organization into a lean $5M CPG brand run by just two people. By shifting to manufacturing partnerships and encoding our executive functions into autonomous AI agents, we maintained 60% YoY growth with 98% less overhead.
              </p>
            ) : (
              <div className="text-sm text-neutral-600 dark:text-neutral-400 space-y-4 mt-4">
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">How I Replaced the "Head Office" with Code</h4>
                  <p>In 2024, I faced a choice: keep running a capital-intensive delivery fleet, or pivot to our high-margin CPG product. I chose the pivot.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">The Strategy: Decouple & Automate</h4>
                  <p>First, I shut down the physical logistics arm (drivers, kitchens, fleet) and moved production to major manufacturing partners. This eliminated the need for 140 operational staff.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">The AI Execution</h4>
                  <p className="mb-3">The remaining challenge was the "Head Office"—the expensive layer of leadership, creative, and admin needed to run a national brand. I didn't hire a team; I built one.</p>
                  
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-400 mt-0.5">•</span>
                      <span><strong className="text-neutral-900 dark:text-neutral-100">Ingestion:</strong> We fed 5 years of company history, brand voice guidelines, social media archives, and Salesforce data into a vector database.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-400 mt-0.5">•</span>
                      <span><strong className="text-neutral-900 dark:text-neutral-100">Agent Architecture:</strong> I built specific AI agents for Sales Operations (analyzing distributor data), Marketing (generating on-brand social/email assets), and Customer Support.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-400 mt-0.5">•</span>
                      <span><strong className="text-neutral-900 dark:text-neutral-100">The Result:</strong> A reliable, repeatable executive function that runs on-demand. We now operate a $5M revenue business with a 2-person team, leveraging AI to do the work of a 10-person leadership suite.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </button>
        </div>
      </section>
    </div>
  )
}
