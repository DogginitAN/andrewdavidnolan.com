import Link from 'next/link'

export default function Resume() {
  return (
    <div className="pt-20 md:pt-24 pb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8 gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-600 dark:text-amber-500 mb-3">Resume</p>
          <h1 className="font-['Syne'] font-extrabold text-3xl md:text-4xl tracking-tight mb-2">Andrew Nolan</h1>
          <p className="text-[#525252] dark:text-[#a8a29e] text-sm md:text-base">
            I architect scalable systems that drive valuation and successful exits—proven by 3 acquisitions in 15 years.
          </p>
        </div>
      </div>

      {/* Lifetime Impact Dashboard */}
      <div className="mb-12">
        <h2 className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-amber-600 dark:text-amber-500 mb-6 text-center">
          Lifetime Impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a]">
            <p className="font-['Syne'] font-extrabold text-2xl md:text-3xl tracking-tight mb-1">$42M+</p>
            <p className="text-xs text-[#8a8a8a] dark:text-[#6b6560]">Combined P&L across three acquisitions</p>
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a]">
            <p className="font-['Syne'] font-extrabold text-2xl md:text-3xl tracking-tight mb-1">600+</p>
            <p className="text-xs text-[#8a8a8a] dark:text-[#6b6560]">Staff managed at peak</p>
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a]">
            <p className="font-['Syne'] font-extrabold text-2xl md:text-3xl tracking-tight mb-1">230+</p>
            <p className="text-xs text-[#8a8a8a] dark:text-[#6b6560]">Points of presence</p>
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#eeebe5] dark:border-[#1e1c1a]">
            <p className="font-['Syne'] font-extrabold text-2xl md:text-3xl tracking-tight mb-1">3</p>
            <p className="text-xs text-[#8a8a8a] dark:text-[#6b6560]">Successful exits</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid: Experience + Sticky Sidebar */}
      <div className="grid md:grid-cols-[1fr_300px] gap-8 md:gap-12">
        {/* Left Column: Experience */}
        <div className="md:pt-6">
          <section className="mb-12">
            <h2 className="font-['Syne'] font-bold text-xl mb-6 pb-2 border-b border-[#eeebe5] dark:border-[#1e1c1a]">
              Experience
            </h2>

            {/* Aramark + Good Uncle */}
            <div className="mb-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded flex items-center justify-center">
                    <img 
                      src="/aramark-logo.png" 
                      alt="Aramark" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Aramark Collegiate Hospitality + Good Uncle</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">VP Operations (Aramark) | CEO (Good Uncle)</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 md:text-right">Sep 2021 – Jan 2026</p>
              </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
            $25M revenue · $5M budget · 150 employees · 70-vehicle fleet · 18 markets
          </p>
          <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span><strong>The AI Transformation:</strong> Architected a new operating system replacing 150-person manual functions with autonomous agent workflows. Built the logic layer that auto-routes orders and generates marketing assets, maintaining $5M revenue with a 2-person team.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span><strong>The Hardware:</strong> Led engineering sprint to design a proprietary mobile-kitchen vehicle platform. Integrated a 24.8 kWh battery system to support cooking-in-transit, scaling fleet to 70 custom units.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span><strong>The Scale:</strong> Built proprietary technology ecosystem with 75,000 users, connecting customer ordering (React Native) with driver logistics and commissary production.</span>
            </li>
          </ul>
        </div>

            {/* Good Uncle */}
            <div className="mb-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded flex items-center justify-center">
                    <img 
                      src="/gooduncle-logo.png" 
                      alt="Good Uncle" 
                      className="w-full h-full object-contain dark:invert"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Good Uncle</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">COO → VP Operations → Senior Director</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 md:text-right">Oct 2016 – Sep 2021</p>
              </div>
          <p className="text-sm text-green-600 dark:text-green-400 mb-3">
            Acquired by Aramark (NYSE: ARMK) in May 2019
          </p>
          <p className="text-sm italic text-neutral-500 dark:text-neutral-400 mb-3">
            "Recruited by Founders Wiley Cerilli & Matt Doumar to build the ops engine."
          </p>
          <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span><strong>The Mandate:</strong> Recruited by Founders Wiley Cerilli and Matt Doumar to build operational infrastructure for a venture-backed food delivery startup.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span><strong>The Win:</strong> Led operations through acquisition and Fortune 200 integration, maintaining brand identity while achieving corporate compliance.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span><strong>The Efficiency:</strong> Reduced labor costs 21% through cloud-based video surveillance and centralized production models.</span>
            </li>
          </ul>
        </div>

        {/* Salad Pangea */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h3 className="font-semibold text-lg">Salad Pangea</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Director of Operations</p>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 md:text-right">May 2013 – Aug 2016</p>
          </div>
          <p className="text-sm text-green-600 dark:text-green-400 mb-3">
            Acquired by Mohegan Holdings in May 2016
          </p>
          <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span>Built operational infrastructure from ground up; created inventory, production, forecasting, and purchasing systems</span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span>Grew revenue to $6.8M across catering, delivery, and brick-and-mortar channels</span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span>Managed 50+ employees including GMs, chef consultants, and marketing team</span>
            </li>
          </ul>
        </div>

        {/* 'wichcraft */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h3 className="font-semibold text-lg">'wichcraft (Tom Colicchio)</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Manager of Operations | Expansion GM</p>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 md:text-right">Aug 2011 – Jun 2013</p>
          </div>
          <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span>Managed $10M+ P&L at Bryant Park flagship including high-volume bar partnership</span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span>Led expansion to premier locations at NYPL and Chelsea Piers</span>
            </li>
          </ul>
        </div>

        {/* Escape */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h3 className="font-semibold text-lg">Escape Restaurant Group</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Founding Partner</p>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 md:text-right">Oct 2009 – May 2011</p>
          </div>
          <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span>Co-founded holding company; built from $0 to $689K revenue with $97K profit in 18 months</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="font-['Syne'] font-bold text-xl mb-6 pb-2 border-b border-[#eeebe5] dark:border-[#1e1c1a]">
          Education
        </h2>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">Binghamton University</h3>
            <p className="text-neutral-600 dark:text-neutral-400">Bachelor of Arts, Philosophy</p>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400">2009</p>
        </div>
      </section>
        </div>

        {/* Right Sidebar: Skills (Sticky) */}
        <div className="md:sticky md:top-8 md:self-start">
          <section className="p-6 bg-[#f5f3ef] dark:bg-[#141414] rounded-xl border border-[#eeebe5] dark:border-[#1e1c1a]">
            <h2 className="font-['Syne'] font-bold text-xl mb-6 pb-2 border-b border-[#eeebe5] dark:border-[#1e1c1a]">
              Skills
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3 text-neutral-900 dark:text-neutral-100 text-sm">Building Business</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#eeebe5] dark:bg-[#1e1c1a] text-[#525252] dark:text-[#a8a29e] rounded-full text-xs font-medium border border-[#e5e0d8] dark:border-[#2a2725]">P&L Management</span>
                  <span className="px-3 py-1.5 bg-[#eeebe5] dark:bg-[#1e1c1a] text-[#525252] dark:text-[#a8a29e] rounded-full text-xs font-medium border border-[#e5e0d8] dark:border-[#2a2725]">Post-Acquisition Integration</span>
                  <span className="px-3 py-1.5 bg-[#eeebe5] dark:bg-[#1e1c1a] text-[#525252] dark:text-[#a8a29e] rounded-full text-xs font-medium border border-[#e5e0d8] dark:border-[#2a2725]">Unit Economics</span>
                  <span className="px-3 py-1.5 bg-[#eeebe5] dark:bg-[#1e1c1a] text-[#525252] dark:text-[#a8a29e] rounded-full text-xs font-medium border border-[#e5e0d8] dark:border-[#2a2725]">Vendor Negotiation</span>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-3 text-neutral-900 dark:text-neutral-100 text-sm">Building Tech</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#eeebe5] dark:bg-[#1e1c1a] text-[#525252] dark:text-[#a8a29e] rounded-full text-xs font-medium border border-[#e5e0d8] dark:border-[#2a2725]">React Native</span>
                  <span className="px-3 py-1.5 bg-[#eeebe5] dark:bg-[#1e1c1a] text-[#525252] dark:text-[#a8a29e] rounded-full text-xs font-medium border border-[#e5e0d8] dark:border-[#2a2725]">Node.js</span>
                  <span className="px-3 py-1.5 bg-[#eeebe5] dark:bg-[#1e1c1a] text-[#525252] dark:text-[#a8a29e] rounded-full text-xs font-medium border border-[#e5e0d8] dark:border-[#2a2725]">System Architecture</span>
                  <span className="px-3 py-1.5 bg-[#eeebe5] dark:bg-[#1e1c1a] text-[#525252] dark:text-[#a8a29e] rounded-full text-xs font-medium border border-[#e5e0d8] dark:border-[#2a2725]">Hardware/IoT</span>
                  <span className="px-3 py-1.5 bg-[#eeebe5] dark:bg-[#1e1c1a] text-[#525252] dark:text-[#a8a29e] rounded-full text-xs font-medium border border-[#e5e0d8] dark:border-[#2a2725]">AI Implementation</span>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-3 text-neutral-900 dark:text-neutral-100 text-sm">Building Teams</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#eeebe5] dark:bg-[#1e1c1a] text-[#525252] dark:text-[#a8a29e] rounded-full text-xs font-medium border border-[#e5e0d8] dark:border-[#2a2725]">Org Design</span>
                  <span className="px-3 py-1.5 bg-[#eeebe5] dark:bg-[#1e1c1a] text-[#525252] dark:text-[#a8a29e] rounded-full text-xs font-medium border border-[#e5e0d8] dark:border-[#2a2725]">Remote/Hybrid Leadership</span>
                  <span className="px-3 py-1.5 bg-[#eeebe5] dark:bg-[#1e1c1a] text-[#525252] dark:text-[#a8a29e] rounded-full text-xs font-medium border border-[#e5e0d8] dark:border-[#2a2725]">Change Management</span>
                  <span className="px-3 py-1.5 bg-[#eeebe5] dark:bg-[#1e1c1a] text-[#525252] dark:text-[#a8a29e] rounded-full text-xs font-medium border border-[#e5e0d8] dark:border-[#2a2725]">Executive Reporting</span>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-3 text-neutral-900 dark:text-neutral-100 text-sm">Vertical Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#eeebe5] dark:bg-[#1e1c1a] text-[#525252] dark:text-[#a8a29e] rounded-full text-xs font-medium border border-[#e5e0d8] dark:border-[#2a2725]">Food Tech</span>
                  <span className="px-3 py-1.5 bg-[#eeebe5] dark:bg-[#1e1c1a] text-[#525252] dark:text-[#a8a29e] rounded-full text-xs font-medium border border-[#e5e0d8] dark:border-[#2a2725]">Last-Mile Logistics</span>
                  <span className="px-3 py-1.5 bg-[#eeebe5] dark:bg-[#1e1c1a] text-[#525252] dark:text-[#a8a29e] rounded-full text-xs font-medium border border-[#e5e0d8] dark:border-[#2a2725]">Complex Operations</span>
                  <span className="px-3 py-1.5 bg-[#eeebe5] dark:bg-[#1e1c1a] text-[#525252] dark:text-[#a8a29e] rounded-full text-xs font-medium border border-[#e5e0d8] dark:border-[#2a2725]">Higher Ed</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Floating Download Button */}
      <a
        href="/andrew-nolan-resume.pdf"
        download
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 px-6 py-4 bg-amber-600 dark:bg-amber-500 text-white dark:text-[#0c0c0c] rounded-full font-medium hover:bg-amber-700 dark:hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl text-sm"
        aria-label="Download Resume PDF"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span className="hidden sm:inline">Download PDF</span>
      </a>
    </div>
  )
}
