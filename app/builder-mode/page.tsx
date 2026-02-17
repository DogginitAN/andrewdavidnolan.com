import StockTicker from '@/components/StockTicker'
import ImageLightbox from '@/components/ImageLightbox'
import Image from 'next/image'

export default function BuilderMode() {
  return (
    <div className="tron-grid tron-scanline min-h-screen -mx-4 md:-mx-8 px-4 md:px-8">
      <div className="relative z-10 py-8 md:py-12">
        
        {/* Hero Section with Tron Image */}
        <section className="mb-16 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Side */}
            <div>
              <p className="text-sm font-mono tracking-widest text-[#7DFDFE]/80 mb-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#7DFDFE] pulse-glow mr-2"></span>
                SYSTEM STATUS: ONLINE
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                <span className="neon-text-cyan">Builder</span>{' '}
                <span className="neon-text-purple">Mode</span>
              </h1>
              <p className="text-lg tron-text mb-6">
                I don't stop building when I clock out. This is where the real experiments happen.
              </p>
              <div className="flex gap-3">
                {['AI PROJECTS', 'INVESTMENTS', 'SYSTEMS'].map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono rounded border border-[#7DFDFE]/20 text-[#B0B3B8]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Image Side */}
            <div className="relative hero-image-glow">
              <div className="relative rounded-xl overflow-hidden neon-border">
                <Image
                  src="/images/tron-headshot.png"
                  alt="Andrew Nolan - Builder Mode"
                  width={600}
                  height={750}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Neon Divider */}
        <div className="neon-divider mb-16"></div>

        {/* Investment Philosophy */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#7DFDFE] pulse-glow"></span>
            Investment Philosophy
          </h2>
          
          {/* The Why */}
          <div className="mb-10 p-6 rounded-xl neon-card neon-border">
            <h3 className="text-lg font-semibold mb-4 neon-text-cyan">The Why</h3>
            <p className="tron-text leading-relaxed italic">
              Failing to harness your money to work double or triple time—accelerating your dreams from future to present—is like planting seeds in the shade without water and wondering why they don't sprout.
            </p>
          </div>

          {/* Investment Thesis */}
          <h3 className="text-xl font-semibold mb-6 text-white">Investment Thesis</h3>
          
          {/* Flow Diagram Container */}
          <div className="relative">
            {/* Top Row: Two Thesis Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Thesis 1 */}
              <div className="relative">
                <div className="p-6 rounded-xl neon-card neon-border h-full">
                  <h3 className="text-lg font-semibold mb-4 neon-text-cyan">
                    Thesis 1: The AI Infrastructure Supercycle
                  </h3>
                  <p className="tron-text leading-relaxed text-sm">
                    Envision artificial intelligence as a transformative juggernaut, overlooked by Wall Street yet poised to unleash trillions in infrastructure spending—vast data centers guzzling GW-scale power, compute hardware scaling like a modern industrial revolution, and grids buckling under unprecedented demands. The true windfall? Undervalued foundations: Nvidia's GPUs, Super Micro's servers, Vistra's utilities, and essentials like copper and lithium fueling the surge.
                  </p>
                </div>
                {/* Connector line - desktop only */}
                <div className="hidden md:block absolute -bottom-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-[#7DFDFE]/30 to-transparent"></div>
              </div>

              {/* Thesis 2 */}
              <div className="relative">
                <div className="p-6 rounded-xl neon-card neon-border-purple h-full">
                  <h3 className="text-lg font-semibold mb-4 neon-text-purple">
                    Thesis 2: Anti-Debasement in an Age of Perpetual Inflation
                  </h3>
                  <p className="tron-text leading-relaxed text-sm">
                    Governments globally, swamped by escalating debts, will relentlessly inflate currencies, diminishing your savings while astute investors shift to immutable assets. Bitcoin emerges as the supreme store of value, Ethereum as the platform for decentralized finance, and gold as an enduring safeguard, with proxies like MicroStrategy and Coinbase bridging worlds.
                  </p>
                </div>
                {/* Connector line - desktop only */}
                <div className="hidden md:block absolute -bottom-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-[#A500FF]/30 to-transparent"></div>
              </div>
            </div>

            {/* Merge Icon - desktop only */}
            <div className="hidden md:flex justify-center items-center -mb-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-[#7DFDFE]/10 border border-[#7DFDFE]/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#7DFDFE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* The Synthesis Card */}
            <div className="mt-4">
              <div className="p-6 rounded-xl neon-card border border-[#F2A007]/30" style={{
                boxShadow: '0 0 15px rgba(242, 160, 7, 0.1)'
              }}>
                <h3 className="text-lg font-semibold mb-4 neon-text-gold">
                  The Synthesis: Picks and Shovels → Bitcoin
                </h3>
                <p className="tron-text leading-relaxed text-sm">
                  To harness both theses synergistically, savvy investors can wield a "picks and shovels" strategy: allocate to AI infrastructure enablers for explosive growth, while hedging debasement by denominating gains in Bitcoin—converting fiat profits into BTC for storage, effectively mining the supercycle's upside in a currency immune to inflation.
                </p>
              </div>
            </div>
          </div>

          {/* Holdings Table */}
          <div className="mt-8 p-6 rounded-xl neon-card neon-border">
            <h3 className="text-lg font-semibold mb-6 text-white">
              Top Gainers by Thesis <span className="text-[#B0B3B8]/60 font-mono text-sm">(Robinhood)</span>
            </h3>
            
            {/* AI Infrastructure Thesis */}
            <div className="mb-6">
              <h4 className="text-sm font-mono tracking-wider text-[#7DFDFE] mb-3">AI INFRASTRUCTURE</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#7DFDFE]/20">
                      <th className="text-left py-2 px-3 font-medium text-[#B0B3B8]">Ticker</th>
                      <th className="text-right py-2 px-3 font-medium text-[#B0B3B8]">Gain</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono">
                    {[
                      ['INTC Call', '+2,002%'],
                      ['MU', '+242%'],
                      ['AMD Call', '+241%'],
                      ['ASTS', '+229%'],
                      ['ALB', '+119%'],
                      ['GOOGL', '+107%'],
                      ['IREN', '+96%'],
                      ['SOFI Call', '+92%'],
                      ['AMD', '+84%'],
                      ['SYM', '+80%'],
                    ].map(([ticker, gain]) => (
                      <tr key={ticker} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="py-2 px-3 text-[#B0B3B8]">{ticker}</td>
                        <td className="py-2 px-3 text-right text-emerald-400 font-semibold">{gain}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Anti-Debasement Thesis */}
            <div className="mb-6">
              <h4 className="text-sm font-mono tracking-wider text-[#A500FF] mb-3">ANTI-DEBASEMENT</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#A500FF]/20">
                      <th className="text-left py-2 px-3 font-medium text-[#B0B3B8]">Position</th>
                      <th className="text-right py-2 px-3 font-medium text-[#B0B3B8]">Gain</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono">
                    {[
                      ['BTC (Cold Storage)', '+807%'],
                      ['Gold', '+95%'],
                      ['Silver', '+85%'],
                    ].map(([position, gain]) => (
                      <tr key={position} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="py-2 px-3 text-[#B0B3B8]">{position}</td>
                        <td className="py-2 px-3 text-right text-emerald-400 font-semibold">{gain}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs tron-text-dim mt-3 font-mono">
                BTC @ $10,700 avg (purchased 2017-2019). Gold & Silver held across IRAs, physical (safe), and custodial accounts.
              </p>
            </div>

            {/* Crypto Trading */}
            <div>
              <h4 className="text-sm font-mono tracking-wider text-[#7DFDFE] mb-3">CRYPTO ALGORITHMIC TRADING</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#7DFDFE]/20">
                      <th className="text-left py-2 px-3 font-medium text-[#B0B3B8]">Asset</th>
                      <th className="text-right py-2 px-3 font-medium text-[#B0B3B8]">Avg Annual Return</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono">
                    {[
                      ['ETH', '+182.4%'],
                      ['BTC', '+103.9%'],
                      ['SOL', '+89.5%'],
                      ['ADA', '+85.9%'],
                    ].map(([asset, ret]) => (
                      <tr key={asset} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="py-2 px-3 text-[#B0B3B8]">{asset}</td>
                        <td className="py-2 px-3 text-right text-emerald-400 font-semibold">{ret}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs tron-text-dim mt-3 font-mono">
                Algorithmic trading performance (ETH/BTC: 2019-2026, SOL/ADA: 2022-2026). Returns based on algo strategy.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-center text-xl font-bold text-emerald-400">
                Overall Return: +5,321%
              </p>
            </div>
          </div>

          {/* Annual Performance */}
          <div className="mt-8 p-6 rounded-xl neon-card neon-border">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Annual Performance <span className="text-[#B0B3B8]/60 font-mono text-sm">(Robinhood)</span>
            </h3>
            <p className="text-sm tron-text-dim mb-4 font-mono">
              Overall: +5,321% (54.2x) | CAGR: 74.4% | Period: Nov 2018 - Jan 2026
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[
                { year: '2019', perf: '+45%', positive: true },
                { year: '2020', perf: '+180%', positive: true },
                { year: '2021', perf: '+65%', positive: true },
                { year: '2022', perf: '-35%', positive: false },
                { year: '2023', perf: '+55%', positive: true },
                { year: '2024', perf: '+85%', positive: true },
              ].map(({ year, perf, positive }) => (
                <div key={year} className="text-center p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <p className="text-xs tron-text-dim mb-1 font-mono">{year}</p>
                  <p className={`text-lg md:text-xl font-bold font-mono ${positive ? 'text-emerald-400' : 'text-[#d85318]'}`}>
                    {perf}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Trades Ticker */}
          <div className="mt-8 rounded-xl overflow-hidden neon-border">
            <StockTicker />
          </div>
        </section>

        {/* Neon Divider */}
        <div className="neon-divider mb-16"></div>

        {/* AI Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#A500FF] pulse-glow"></span>
            AI Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Pantry */}
            <div className="p-6 rounded-xl neon-card neon-border group">
              <h3 className="text-xl font-semibold mb-2 text-white">🥫 Pantry</h3>
              <p className="text-sm text-[#7DFDFE] mb-4">
                AI-powered grocery intelligence: receipt OCR, meal planning, smart reordering
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-[#B0B3B8]">The Problem</h4>
                <p className="text-sm tron-text">
                  30-40% of food purchased in US households goes to waste (~$1,500/year per family). 
                  Meanwhile, "what's for dinner?" remains the most asked question in any home.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-[#B0B3B8]">The Solution</h4>
                <p className="text-sm tron-text">
                  Pantry automatically tracks groceries by scraping email receipts, uses velocity-based 
                  algorithms to predict when items need replenishment, and leverages local AI to suggest 
                  meals using ingredients you actually have on hand.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-[#B0B3B8]">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Streamlit', 'PostgreSQL', 'Ollama', 'BakLLaVA', 'Playwright'].map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs rounded bg-white/5 text-[#B0B3B8] border border-white/10 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#F2A007]/10 text-[#F2A007] border border-[#F2A007]/30">
                  Production
                </span>
              </div>
              
              <ImageLightbox 
                src="/images/pantry-dashboard.webp" 
                alt="Pantry Dashboard"
                className="mb-4 rounded-lg overflow-hidden border border-white/10"
              />
              
              <a 
                href="https://github.com/DogginitAN/pantry" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#7DFDFE] hover:text-[#7DFDFE]/80 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.430.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub →
              </a>
            </div>

            {/* What's Next */}
            <div className="p-6 rounded-xl neon-card neon-border group">
              <h3 className="text-xl font-semibold mb-2 text-white">🎯 What's Next</h3>
              <p className="text-sm text-[#7DFDFE] mb-4">
                Personal ERP for career transition: company targeting, resume tailoring, pipeline tracking
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-[#B0B3B8]">The Problem</h4>
                <p className="text-sm tron-text">
                  Executive job searching is inefficient. High-value candidates spend excessive time 
                  on low-value tasks — scrolling LinkedIn, reformatting resumes, writing cover letters.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-[#B0B3B8]">The Solution</h4>
                <p className="text-sm tron-text">
                  Automate the tedious, surface the strategic. 52 companies scored and prioritized. 
                  Tailored materials generated in minutes. Zero manual LinkedIn effort.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-[#B0B3B8]">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'TypeScript', 'Claude MCP', 'Nash', 'Supabase'].map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs rounded bg-white/5 text-[#B0B3B8] border border-white/10 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#F2A007]/10 text-[#F2A007] border border-[#F2A007]/30">
                  Production
                </span>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href="/projects/whats-next" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#7DFDFE] hover:text-[#7DFDFE]/80 transition-colors"
                >
                  Learn More →
                </a>
                <a 
                  href="/tracker" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#A500FF] hover:text-[#A500FF]/80 transition-colors"
                >
                  View Tracker →
                </a>
              </div>
            </div>

            {/* Themis */}
            <div className="p-6 rounded-xl neon-card neon-border-purple group">
              <h3 className="text-xl font-semibold mb-2 text-white">⚖️ Themis</h3>
              <p className="text-sm text-[#A500FF] mb-4">
                Intelligence-led investing: 36 sources monitored, convergence scoring, weekly digest
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-[#B0B3B8]">The Problem</h4>
                <p className="text-sm tron-text">
                  The best investment analysts publish across YouTube, Substack, and X — but nobody 
                  reads all of them. The real signal isn&apos;t any single take. It&apos;s when independent 
                  analysts arrive at the same thesis from completely different angles.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-[#B0B3B8]">The Solution</h4>
                <p className="text-sm tron-text">
                  Themis monitors 36 sources across YouTube, Substack, and X — extracting investment 
                  themes from every video, article, and post. When independent sources converge on the 
                  same ticker, that&apos;s signal, not noise. Every security gets a Themis Score combining 
                  convergence strength, fundamentals, and technicals. The highest-signal opportunities 
                  surface in a weekly intelligence digest on Substack. Named for the Greek goddess of 
                  justice and good counsel.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center p-2 rounded bg-white/5 border border-white/10">
                  <div className="text-lg font-bold text-[#7DFDFE]">36</div>
                  <div className="text-xs text-[#B0B3B8]">Sources</div>
                </div>
                <div className="text-center p-2 rounded bg-white/5 border border-white/10">
                  <div className="text-lg font-bold text-[#7DFDFE]">274K+</div>
                  <div className="text-xs text-[#B0B3B8]">Securities</div>
                </div>
                <div className="text-center p-2 rounded bg-white/5 border border-white/10">
                  <div className="text-lg font-bold text-[#7DFDFE]">74K+</div>
                  <div className="text-xs text-[#B0B3B8]">Themes</div>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-[#B0B3B8]">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'Vercel', 'LangChain'].map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs rounded bg-white/5 text-[#B0B3B8] border border-white/10 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Live
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <a
                  href="https://themis-platform.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#A500FF] hover:text-[#7DFDFE] transition-colors"
                >
                  Open Platform →
                </a>
                <a
                  href="https://themisvile.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#A500FF] hover:text-[#7DFDFE] transition-colors"
                >
                  Weekly Digest →
                </a>
              </div>
            </div>

            {/* Hermes */}
            <div className="p-6 rounded-xl neon-card neon-border-purple group">
              <h3 className="text-xl font-semibold mb-2 text-white">🏛️ Hermes</h3>
              <p className="text-sm text-[#A500FF] mb-4">
                Autonomous trading infrastructure: prediction markets, crypto algos, live-event execution
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-[#B0B3B8]">The Problem</h4>
                <p className="text-sm tron-text">
                  Markets don&apos;t sleep, and the best edges are fleeting. Prediction markets move on 
                  real-time information — a name dropped in a live press conference, a weather shift 
                  mid-event. By the time a human reacts, the line has already moved.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-[#B0B3B8]">The Solution</h4>
                <p className="text-sm tron-text">
                  Hermes is a fleet of headless autonomous agents that trade without human intervention. 
                  Weather agents price meteorological data against prediction markets. Mention agents 
                  monitor live event transcripts via Deepgram, executing trades the moment a keyword is 
                  detected. Crypto algos run momentum and mean-reversion strategies 24/7 on Alpaca. No 
                  dashboard, no UI — just agents executing in production. Named for the Greek god of 
                  trade and messenger of the gods.
                </p>
              </div>

              {/* Active Strategies */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-[#B0B3B8]">Active Strategies</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded bg-white/5 border border-white/10">
                    <div className="text-xs font-semibold text-[#7DFDFE]">Weather</div>
                    <div className="text-xs text-[#B0B3B8]">Meteorological → prediction markets</div>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/10">
                    <div className="text-xs font-semibold text-[#7DFDFE]">Mention</div>
                    <div className="text-xs text-[#B0B3B8]">Event monitoring → keyword triggers</div>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/10">
                    <div className="text-xs font-semibold text-[#7DFDFE]">Live-Mention</div>
                    <div className="text-xs text-[#B0B3B8]">Deepgram transcription → instant execution</div>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/10">
                    <div className="text-xs font-semibold text-[#7DFDFE]">Crypto Algos</div>
                    <div className="text-xs text-[#B0B3B8]">Momentum + mean-reversion on Alpaca</div>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-[#B0B3B8]">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'TradingView', 'Alpaca API', 'Deepgram', 'Kalshi', 'Polymarket'].map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs rounded bg-white/5 text-[#B0B3B8] border border-white/10 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Live — Headless Agents in Production
                </span>
              </div>
              
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[#B0B3B8]/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.430.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub (private)
              </span>
            </div>
          </div>
        </section>

        {/* Neon Divider */}
        <div className="neon-divider mb-16"></div>

        {/* Reading */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#7DFDFE] pulse-glow"></span>
            Reading
          </h2>
          
          <div className="space-y-6">
            {/* Top 25 Books */}
            <div className="p-6 rounded-xl neon-card neon-border">
              <h3 className="text-lg font-semibold mb-6 text-white">Top 25 Favorite Books</h3>
              
              <div className="space-y-4">
                {[
                  { num: 1, title: "Man's Search for Meaning", author: "Viktor Frankl", quote: "Everything can be taken from a man but one thing: the last of the human freedoms—to choose one's attitude in any given set of circumstances, to choose one's own way." },
                  { num: 2, title: "Awareness", author: "Anthony de Mello", quote: "You see persons and things not as they are but as you are." },
                  { num: 3, title: "Dune", author: "Frank Herbert", quote: "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me." },
                  { num: 4, title: "Bird by Bird", author: "Anne Lamott", quote: "You own everything that happened to you. Tell your stories. If people wanted you to write warmly about them, they should have behaved better." },
                  { num: 5, title: "About Face", author: "Colonel David H. Hackworth", quote: "If you're a decent leader, you don't dare lose it—for your own good. You've got to keep your unit up there doing its job. Combat is no place for martinets." },
                  { num: 6, title: "Extreme Ownership", author: "Jocko Willink & Leif Babin", quote: "There are no bad teams, only bad leaders." },
                  { num: 7, title: "Thinking in Bets", author: "Annie Duke", quote: "What makes a decision great is not that it has a great outcome. A great decision is the result of a good process, and that process must include an attempt to accurately represent our own state of knowledge." },
                  { num: 8, title: "Make Your Bed", author: "Admiral William H. McRaven", quote: "If you want to change the world, start off by making your bed. If you make your bed every morning, you will have accomplished the first task of the day." },
                  { num: 9, title: "The Lion Tracker's Guide to Life", author: "Boyd Varty", quote: "I don't know where we are going, but I know exactly how to get there." },
                  { num: 10, title: "Essays After Eighty", author: "Donald Hall", quote: "It is fitting, now, to speak of ambition. I was ambitious. I worked hard. I wanted to be the best poet... Now I think of the long-dead poets whose work I loved. I don't think about their rankings; I love to read them." },
                  { num: 11, title: "Blood Meridian", author: "Cormac McCarthy", quote: "The truth about the world, he said, is that anything is possible. Had you not seen it all from birth and thereby bled it of its strangeness it would appear to you for what it is, a hat trick in a medicine show, a fevered dream." },
                  { num: 12, title: "Arctic Dreams", author: "Barry Lopez", quote: "To hunt means to have the land around you like clothing. To engage in a wordless dialogue with it, one so absorbing that you cease to talk with your human companions." },
                  { num: 13, title: "Empire of the Summer Moon", author: "S.C. Gwynne", quote: "In a fight with Comanches, dismounting on open ground was like signing your own death warrant." },
                  { num: 14, title: "The Foundation", author: "Isaac Asimov", quote: "Violence is the last refuge of the incompetent." },
                  { num: 15, title: "Hyperion", author: "Dan Simmons", quote: "Sol Weintraub had come to a single, unshakable conclusion: any allegiance to a deity or concept or universal principle which put obedience above decent behavior toward an innocent human being was evil." },
                  { num: 16, title: "Infinite Jest", author: "David Foster Wallace", quote: "Everybody is identical in their secret unspoken belief that way deep down they are different from everyone else." },
                  { num: 17, title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", quote: "For a moment, nothing happened. Then, after a second or so, nothing continued to happen." },
                  { num: 18, title: "The Fountainhead", author: "Ayn Rand", quote: "The question isn't who is going to let me; it's who is going to stop me." },
                  { num: 19, title: "The Graveyard Book", author: "Neil Gaiman", quote: "If you dare nothing, then when the day is over, nothing is all you will have gained." },
                  { num: 20, title: "The Fish that Ate the Whale", author: "Rich Cohen", quote: "A man can free his soul only by exhausting his body." },
                  { num: 21, title: "The Alchemist", author: "Paulo Coelho", quote: "It's the possibility of having a dream come true that makes life interesting." },
                  { num: 22, title: "Meditations", author: "Marcus Aurelius", quote: "You have power over your mind—not outside events. Realize this, and you will find strength." },
                  { num: 23, title: "The War of Art", author: "Steven Pressfield", quote: "The amateur believes he must first overcome his fear; then he can do his work. The professional knows that fear can never be overcome." },
                  { num: 24, title: "Endurance: Shackleton's Incredible Voyage", author: "Alfred Lansing", quote: "For scientific leadership, give me Scott; for swift and efficient travel, Amundsen; but when you are in a hopeless situation, when there seems to be no way out, get down on your knees and pray for Shackleton." },
                  { num: 25, title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", quote: "History is something that very few people have been doing while everyone else was ploughing fields and carrying water buckets." },
                ].map((book) => (
                  <div key={book.num} className="group py-3 border-b border-white/5 last:border-0">
                    <div className="flex gap-4">
                      <span className="text-[#7DFDFE] font-mono text-sm w-6 shrink-0 pt-0.5">
                        {book.num.toString().padStart(2, '0')}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <span className="text-white font-medium">{book.title}</span>
                          <span className="text-[#B0B3B8]/60 text-sm">— {book.author}</span>
                        </div>
                        <p className="text-sm tron-text-dim italic mt-1 leading-relaxed">
                          "{book.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2025 Reading Log */}
            <div className="p-6 rounded-xl neon-card neon-border">
              <h3 className="text-lg font-semibold mb-4 text-white">2025 Reading Log</h3>
              <p className="text-sm tron-text-dim font-mono">
                [ INITIALIZING TRACKING MODULE... ]
              </p>
            </div>
          </div>
        </section>

        {/* Photography & Mountain Biking */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#A500FF] pulse-glow"></span>
            Photography & Mountain Biking
          </h2>
          <div className="p-6 rounded-xl neon-card neon-border">
            <p className="text-sm tron-text-dim font-mono">
              [ MEDIA GALLERY OFFLINE — UPLOADING ASSETS... ]
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}
