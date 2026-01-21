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
              <p className="text-sm font-mono tracking-widest text-cyan-400 mb-2 pulse-glow inline-block">
                SYSTEM STATUS: ONLINE
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                <span className="neon-text-cyan">Builder</span>{' '}
                <span className="neon-text-magenta">Mode</span>
              </h1>
              <p className="text-lg text-cyan-100/70 mb-6">
                I don't stop building when I clock out. This is where the real experiments happen.
              </p>
              <div className="flex gap-3">
                <span className="px-3 py-1 text-xs font-mono rounded neon-border text-cyan-400">
                  AI PROJECTS
                </span>
                <span className="px-3 py-1 text-xs font-mono rounded neon-border text-cyan-400">
                  INVESTMENTS
                </span>
                <span className="px-3 py-1 text-xs font-mono rounded neon-border text-cyan-400">
                  SYSTEMS
                </span>
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
            <span className="w-2 h-2 rounded-full bg-cyan-400 pulse-glow"></span>
            Investment Philosophy
          </h2>
          
          {/* The Why */}
          <div className="mb-10 p-6 rounded-xl neon-card neon-border">
            <h3 className="text-lg font-semibold mb-4 neon-text-cyan">The Why</h3>
            <p className="text-cyan-100/80 leading-relaxed italic">
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
                  <p className="text-cyan-100/70 leading-relaxed">
                    Envision artificial intelligence as a transformative juggernaut, overlooked by Wall Street yet poised to unleash trillions in infrastructure spending—vast data centers guzzling GW-scale power, compute hardware scaling like a modern industrial revolution, and grids buckling under unprecedented demands. The true windfall? Undervalued foundations: Nvidia's GPUs, Super Micro's servers, Vistra's utilities, and essentials like copper and lithium fueling the surge.
                  </p>
                </div>
                {/* Connector line - desktop only */}
                <div className="hidden md:block absolute -bottom-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
              </div>

              {/* Thesis 2 */}
              <div className="relative">
                <div className="p-6 rounded-xl neon-card neon-border h-full">
                  <h3 className="text-lg font-semibold mb-4 neon-text-magenta">
                    Thesis 2: Anti-Debasement in an Age of Perpetual Inflation
                  </h3>
                  <p className="text-cyan-100/70 leading-relaxed">
                    Governments globally, swamped by escalating debts, will relentlessly inflate currencies, diminishing your savings while astute investors shift to immutable assets. Bitcoin emerges as the supreme store of value, Ethereum as the platform for decentralized finance, and gold as an enduring safeguard, with proxies like MicroStrategy and Coinbase bridging worlds.
                  </p>
                </div>
                {/* Connector line - desktop only */}
                <div className="hidden md:block absolute -bottom-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-fuchsia-500/50 to-transparent"></div>
              </div>
            </div>

            {/* Merge Icon - desktop only */}
            <div className="hidden md:flex justify-center items-center -mb-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center pulse-glow">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* The Synthesis Card */}
            <div className="mt-4">
              <div className="p-6 rounded-xl neon-card border-2 border-cyan-500/50" style={{
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.2), 0 0 40px rgba(255, 0, 255, 0.1)'
              }}>
                <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  The Synthesis: Picks and Shovels → Bitcoin
                </h3>
                <p className="text-cyan-100/80 leading-relaxed">
                  To harness both theses synergistically, savvy investors can wield a "picks and shovels" strategy: allocate to AI infrastructure enablers for explosive growth, while hedging debasement by denominating gains in Bitcoin—converting fiat profits into BTC for storage, effectively mining the supercycle's upside in a currency immune to inflation.
                </p>
              </div>
            </div>
          </div>

          {/* Holdings Table */}
          <div className="mt-8 p-6 rounded-xl neon-card neon-border">
            <h3 className="text-lg font-semibold mb-6 text-white">Top Gainers by Thesis <span className="text-cyan-400 font-mono text-sm">(Robinhood)</span></h3>
            
            {/* AI Infrastructure Thesis */}
            <div className="mb-6">
              <h4 className="text-sm font-mono tracking-wider neon-text-cyan mb-3">AI INFRASTRUCTURE</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-cyan-500/30">
                      <th className="text-left py-2 px-3 font-medium text-cyan-300">Ticker</th>
                      <th className="text-right py-2 px-3 font-medium text-cyan-300">Gain</th>
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
                      <tr key={ticker} className="border-b border-cyan-500/10 hover:bg-cyan-500/5 transition-colors">
                        <td className="py-2 px-3 text-cyan-100/80">{ticker}</td>
                        <td className="py-2 px-3 text-right text-emerald-400 font-semibold">{gain}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Anti-Debasement Thesis */}
            <div className="mb-6">
              <h4 className="text-sm font-mono tracking-wider neon-text-magenta mb-3">ANTI-DEBASEMENT</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-fuchsia-500/30">
                      <th className="text-left py-2 px-3 font-medium text-fuchsia-300">Position</th>
                      <th className="text-right py-2 px-3 font-medium text-fuchsia-300">Gain</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono">
                    {[
                      ['BTC (Cold Storage)', '+807%'],
                      ['Gold', '+95%'],
                      ['Silver', '+85%'],
                    ].map(([position, gain]) => (
                      <tr key={position} className="border-b border-fuchsia-500/10 hover:bg-fuchsia-500/5 transition-colors">
                        <td className="py-2 px-3 text-cyan-100/80">{position}</td>
                        <td className="py-2 px-3 text-right text-emerald-400 font-semibold">{gain}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-cyan-400/50 mt-3 font-mono">
                BTC @ $10,700 avg (purchased 2017-2019). Gold & Silver held across IRAs, physical (safe), and custodial accounts.
              </p>
            </div>

            {/* Crypto Trading */}
            <div>
              <h4 className="text-sm font-mono tracking-wider neon-text-cyan mb-3">CRYPTO ALGORITHMIC TRADING</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-cyan-500/30">
                      <th className="text-left py-2 px-3 font-medium text-cyan-300">Asset</th>
                      <th className="text-right py-2 px-3 font-medium text-cyan-300">Avg Annual Return</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono">
                    {[
                      ['ETH', '+182.4%'],
                      ['BTC', '+103.9%'],
                      ['SOL', '+89.5%'],
                      ['ADA', '+85.9%'],
                    ].map(([asset, ret]) => (
                      <tr key={asset} className="border-b border-cyan-500/10 hover:bg-cyan-500/5 transition-colors">
                        <td className="py-2 px-3 text-cyan-100/80">{asset}</td>
                        <td className="py-2 px-3 text-right text-emerald-400 font-semibold">{ret}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-cyan-400/50 mt-3 font-mono">
                Algorithmic trading performance (ETH/BTC: 2019-2026, SOL/ADA: 2022-2026). Returns based on algo strategy, not actual account performance.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-cyan-500/30">
              <p className="text-center text-xl font-bold text-emerald-400" style={{
                textShadow: '0 0 10px rgba(52, 211, 153, 0.5)'
              }}>
                Overall Return: +5,321%
              </p>
            </div>
          </div>

          {/* Annual Performance */}
          <div className="mt-8 p-6 rounded-xl neon-card neon-border">
            <h3 className="text-lg font-semibold mb-4 text-white">Annual Performance <span className="text-cyan-400 font-mono text-sm">(Robinhood)</span></h3>
            <p className="text-sm text-cyan-400/60 mb-4 font-mono">
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
                <div key={year} className="text-center p-3 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
                  <p className="text-xs text-cyan-400/60 mb-1 font-mono">{year}</p>
                  <p className={`text-lg md:text-xl font-bold font-mono ${positive ? 'text-emerald-400' : 'text-red-400'}`}>
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
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 pulse-glow"></span>
            AI Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Pantry */}
            <div className="p-6 rounded-xl neon-card neon-border group">
              <h3 className="text-xl font-semibold mb-2 text-white">🥫 Pantry</h3>
              <p className="text-sm neon-text-cyan mb-4">
                AI-powered grocery intelligence: receipt OCR, meal planning, smart reordering
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-cyan-300">The Problem</h4>
                <p className="text-sm text-cyan-100/70">
                  30-40% of food purchased in US households goes to waste (~$1,500/year per family). 
                  Meanwhile, "what's for dinner?" remains the most asked question in any home.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-cyan-300">The Solution</h4>
                <p className="text-sm text-cyan-100/70">
                  Pantry automatically tracks groceries by scraping email receipts, uses velocity-based 
                  algorithms to predict when items need replenishment, and leverages local AI to suggest 
                  meals using ingredients you actually have on hand.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-cyan-300">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Streamlit', 'PostgreSQL', 'Ollama', 'BakLLaVA', 'Playwright'].map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Production
                </span>
              </div>
              
              <ImageLightbox 
                src="/images/pantry-dashboard.webp" 
                alt="Pantry Dashboard"
                className="mb-4 rounded-lg overflow-hidden border border-cyan-500/30"
              />
              
              <a 
                href="https://github.com/DogginitAN/pantry" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
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
              <p className="text-sm neon-text-cyan mb-4">
                Personal ERP for career transition: company targeting, resume tailoring, pipeline tracking
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-cyan-300">The Problem</h4>
                <p className="text-sm text-cyan-100/70">
                  Executive job searching is inefficient. High-value candidates spend excessive time 
                  on low-value tasks — scrolling LinkedIn, reformatting resumes, writing cover letters.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-cyan-300">The Solution</h4>
                <p className="text-sm text-cyan-100/70">
                  Automate the tedious, surface the strategic. 52 companies scored and prioritized. 
                  Tailored materials generated in minutes. Zero manual LinkedIn effort.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-cyan-300">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'TypeScript', 'Claude MCP', 'Nash', 'Supabase'].map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Production
                </span>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href="/projects/whats-next" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Learn More →
                </a>
                <a 
                  href="/tracker" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                >
                  View Tracker →
                </a>
              </div>
            </div>

            {/* Themis */}
            <div className="p-6 rounded-xl neon-card neon-border group">
              <h3 className="text-xl font-semibold mb-2 text-white">⚖️ Themis</h3>
              <p className="text-sm neon-text-magenta mb-4">
                AI-powered stock research: guru aggregation, technical analysis, confluence scoring
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-fuchsia-300">The Problem</h4>
                <p className="text-sm text-cyan-100/70">
                  Good investment research is scattered across dozens of sources — guru portfolios, 
                  technical indicators, sentiment analysis, fundamental metrics. Synthesizing it manually 
                  is time-consuming and error-prone.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-fuchsia-300">The Solution</h4>
                <p className="text-sm text-cyan-100/70">
                  Themis aggregates signals from multiple sources: tracks what top investors are buying, 
                  runs technical analysis across timeframes, and scores "confluence" — when multiple 
                  independent signals align on the same opportunity. Named for the Greek goddess of 
                  justice and good counsel.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-fuchsia-300">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Streamlit', 'PostgreSQL', 'yfinance', 'pandas-ta', 'LangChain'].map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs rounded bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  Active Development
                </span>
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400/50 cursor-not-allowed"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.430.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub (coming soon)
              </a>
            </div>

            {/* Hermes */}
            <div className="p-6 rounded-xl neon-card neon-border group">
              <h3 className="text-xl font-semibold mb-2 text-white">🏛️ Hermes</h3>
              <p className="text-sm neon-text-magenta mb-4">
                Algorithmic crypto trading: momentum strategies, mean-reversion, automated execution
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-fuchsia-300">The Problem</h4>
                <p className="text-sm text-cyan-100/70">
                  Crypto markets run 24/7. Human traders can't. Emotional decisions destroy returns. 
                  Most retail traders buy high and sell low because they can't execute disciplined 
                  strategies consistently.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-fuchsia-300">The Solution</h4>
                <p className="text-sm text-cyan-100/70">
                  Hermes executes systematic trading strategies without emotion or sleep. Runs 
                  momentum and mean-reversion algorithms on BTC, ETH, SOL, and ADA. The 100%+ annual 
                  returns in the crypto table above? That's Hermes. Named for the Greek god of trade 
                  and messenger of the gods.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-fuchsia-300">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'CCXT', 'PostgreSQL', 'pandas', 'numpy', 'Telegram API'].map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs rounded bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Production
                </span>
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400/50 cursor-not-allowed"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.430.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub (private)
              </a>
            </div>
          </div>
        </section>

        {/* Neon Divider */}
        <div className="neon-divider mb-16"></div>

        {/* Reading */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 pulse-glow"></span>
            Reading
          </h2>
          
          <div className="space-y-6">
            {/* Top 25 Books */}
            <div className="p-6 rounded-xl neon-card neon-border">
              <h3 className="text-lg font-semibold mb-4 text-white">Top 25 Favorite Books</h3>
              <p className="text-sm text-cyan-400/50 font-mono">
                [ DATA LOADING... ]
              </p>
            </div>

            {/* 2025 Reading Log */}
            <div className="p-6 rounded-xl neon-card neon-border">
              <h3 className="text-lg font-semibold mb-4 text-white">2025 Reading Log</h3>
              <p className="text-sm text-cyan-400/50 font-mono">
                [ INITIALIZING TRACKING MODULE... ]
              </p>
            </div>
          </div>
        </section>

        {/* Photography & Mountain Biking */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 pulse-glow"></span>
            Photography & Mountain Biking
          </h2>
          <div className="p-6 rounded-xl neon-card neon-border">
            <p className="text-sm text-cyan-400/50 font-mono">
              [ MEDIA GALLERY OFFLINE — UPLOADING ASSETS... ]
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}
