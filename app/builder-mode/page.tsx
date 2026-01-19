export default function BuilderMode() {
  return (
    <div className="py-8 md:py-12">
      {/* Hero */}
      <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Builder Mode</h1>
      <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-10 md:mb-12">
        I don't stop building when I clock out.
      </p>

      {/* Investment Philosophy */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Investment Philosophy</h2>
        
        {/* The Why */}
        <div className="mb-10 p-6 rounded-xl bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-lg font-semibold mb-4 text-amber-600 dark:text-amber-500">The Why</h3>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
            Failing to harness your money to work double or triple time—accelerating your dreams from future to present—is like planting seeds in the shade without water and wondering why they don't sprout.
          </p>
        </div>

        {/* Investment Thesis */}
        <h3 className="text-xl font-semibold mb-6">Investment Thesis</h3>
        
        {/* Flow Diagram Container */}
        <div className="relative">
          {/* Top Row: Two Thesis Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Thesis 1 */}
            <div className="relative">
              <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 h-full">
                <h3 className="text-lg font-semibold mb-4 text-amber-600 dark:text-amber-500">
                  Thesis 1: The AI Infrastructure Supercycle
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Envision artificial intelligence as a transformative juggernaut, overlooked by Wall Street yet poised to unleash trillions in infrastructure spending—vast data centers guzzling GW-scale power, compute hardware scaling like a modern industrial revolution, and grids buckling under unprecedented demands. The true windfall? Undervalued foundations: Nvidia's GPUs, Super Micro's servers, Vistra's utilities, and essentials like copper and lithium fueling the surge. Doubt this supercycle at your peril—could dismissing it mean forfeiting the next great boom, where pioneers reap massive rewards as capex eclipses even optimistic projections?
                </p>
              </div>
              {/* Connector line - desktop only */}
              <div className="hidden md:block absolute -bottom-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-amber-500/50 to-transparent"></div>
            </div>

            {/* Thesis 2 */}
            <div className="relative">
              <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 h-full">
                <h3 className="text-lg font-semibold mb-4 text-amber-600 dark:text-amber-500">
                  Thesis 2: Anti-Debasement in an Age of Perpetual Inflation
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Governments globally, swamped by escalating debts, will relentlessly inflate currencies, diminishing your savings while astute investors shift to immutable assets. Bitcoin emerges as the supreme store of value, Ethereum as the platform for decentralized finance, and gold as an enduring safeguard, with proxies like MicroStrategy and Coinbase bridging worlds. Reexamine your trust in fiat—might holding depreciating dollars obscure the path to prosperity in an age of perpetual inflation, where anti-debasement tactics preserve and amplify wealth?
                </p>
              </div>
              {/* Connector line - desktop only */}
              <div className="hidden md:block absolute -bottom-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-amber-500/50 to-transparent"></div>
            </div>
          </div>

          {/* Merge Icon - desktop only */}
          <div className="hidden md:flex justify-center items-center -mb-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 dark:bg-amber-500/30 border-2 border-amber-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* The Synthesis Card */}
          <div className="mt-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-2 border-amber-500/50 dark:border-amber-600/50">
              <h3 className="text-lg font-semibold mb-4 text-amber-700 dark:text-amber-400">
                The Synthesis: Picks and Shovels → Bitcoin
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                To harness both theses synergistically, savvy investors can wield a "picks and shovels" strategy: allocate to AI infrastructure enablers for explosive growth, while hedging debasement by denominating gains in Bitcoin—converting fiat profits into BTC for storage, effectively mining the supercycle's upside in a currency immune to inflation. This dual approach questions conventional portfolios: why chase volatile stocks alone when blending AI's momentum with crypto's resilience could compound returns, turning supercycle booms into enduring, inflation-proof wealth?
              </p>
            </div>
          </div>
        </div>

        {/* Holdings Table */}
        <div className="mt-8 p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <h3 className="text-lg font-semibold mb-6">Top Gainers by Thesis (Robinhood)</h3>
          
          {/* AI Infrastructure Thesis */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-amber-600 dark:text-amber-500 mb-3">AI INFRASTRUCTURE</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800">
                    <th className="text-left py-2 px-3 font-medium">Ticker</th>
                    <th className="text-right py-2 px-3 font-medium">Gain</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100 dark:border-neutral-900">
                    <td className="py-2 px-3 text-neutral-700 dark:text-neutral-300">INTC Call</td>
                    <td className="py-2 px-3 text-right text-emerald-600 dark:text-emerald-500 font-semibold">+2,002%</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-900">
                    <td className="py-2 px-3 text-neutral-700 dark:text-neutral-300">MU</td>
                    <td className="py-2 px-3 text-right text-emerald-600 dark:text-emerald-500 font-semibold">+242%</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-900">
                    <td className="py-2 px-3 text-neutral-700 dark:text-neutral-300">AMD Call</td>
                    <td className="py-2 px-3 text-right text-emerald-600 dark:text-emerald-500 font-semibold">+241%</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-900">
                    <td className="py-2 px-3 text-neutral-700 dark:text-neutral-300">ASTS</td>
                    <td className="py-2 px-3 text-right text-emerald-600 dark:text-emerald-500 font-semibold">+229%</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-900">
                    <td className="py-2 px-3 text-neutral-700 dark:text-neutral-300">ALB</td>
                    <td className="py-2 px-3 text-right text-emerald-600 dark:text-emerald-500 font-semibold">+119%</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-900">
                    <td className="py-2 px-3 text-neutral-700 dark:text-neutral-300">GOOGL</td>
                    <td className="py-2 px-3 text-right text-emerald-600 dark:text-emerald-500 font-semibold">+107%</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-900">
                    <td className="py-2 px-3 text-neutral-700 dark:text-neutral-300">IREN</td>
                    <td className="py-2 px-3 text-right text-emerald-600 dark:text-emerald-500 font-semibold">+96%</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-900">
                    <td className="py-2 px-3 text-neutral-700 dark:text-neutral-300">SOFI Call</td>
                    <td className="py-2 px-3 text-right text-emerald-600 dark:text-emerald-500 font-semibold">+92%</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-900">
                    <td className="py-2 px-3 text-neutral-700 dark:text-neutral-300">AMD</td>
                    <td className="py-2 px-3 text-right text-emerald-600 dark:text-emerald-500 font-semibold">+84%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-neutral-700 dark:text-neutral-300">SYM</td>
                    <td className="py-2 px-3 text-right text-emerald-600 dark:text-emerald-500 font-semibold">+80%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Anti-Debasement Thesis */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-amber-600 dark:text-amber-500 mb-3">ANTI-DEBASEMENT</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800">
                    <th className="text-left py-2 px-3 font-medium">Position</th>
                    <th className="text-right py-2 px-3 font-medium">Gain</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100 dark:border-neutral-900">
                    <td className="py-2 px-3 text-neutral-700 dark:text-neutral-300">BTC (Cold Storage)</td>
                    <td className="py-2 px-3 text-right text-emerald-600 dark:text-emerald-500 font-semibold">+807%</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-900">
                    <td className="py-2 px-3 text-neutral-700 dark:text-neutral-300">Gold</td>
                    <td className="py-2 px-3 text-right text-neutral-500 dark:text-neutral-400 font-semibold">TBD</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-neutral-700 dark:text-neutral-300">Silver</td>
                    <td className="py-2 px-3 text-right text-neutral-500 dark:text-neutral-400 font-semibold">TBD</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3">
              BTC @ $10,700 avg (purchased 2017-2019). Current value: ~$388K at $97K/BTC.
            </p>
          </div>

          {/* Crypto Trading */}
          <div>
            <h4 className="text-sm font-semibold text-amber-600 dark:text-amber-500 mb-3">CRYPTO ALGORITHMIC TRADING</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800">
                    <th className="text-left py-2 px-3 font-medium">Asset</th>
                    <th className="text-right py-2 px-3 font-medium">Avg Annual Return</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100 dark:border-neutral-900">
                    <td className="py-2 px-3 text-neutral-700 dark:text-neutral-300">ETH</td>
                    <td className="py-2 px-3 text-right text-emerald-600 dark:text-emerald-500 font-semibold">+182.4%</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-900">
                    <td className="py-2 px-3 text-neutral-700 dark:text-neutral-300">BTC</td>
                    <td className="py-2 px-3 text-right text-emerald-600 dark:text-emerald-500 font-semibold">+103.9%</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-900">
                    <td className="py-2 px-3 text-neutral-700 dark:text-neutral-300">SOL</td>
                    <td className="py-2 px-3 text-right text-emerald-600 dark:text-emerald-500 font-semibold">+89.5%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-neutral-700 dark:text-neutral-300">ADA</td>
                    <td className="py-2 px-3 text-right text-emerald-600 dark:text-emerald-500 font-semibold">+85.9%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3">
              Algorithmic trading performance (ETH/BTC: 2019-2026, SOL/ADA: 2022-2026). Returns based on algo strategy, not actual account performance.
            </p>
          </div>

          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-6">
            Note: Data from actual Robinhood positions. Includes options and equity positions.
          </p>

          <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <p className="text-center text-lg font-semibold text-emerald-600 dark:text-emerald-500">
              Overall Return: +5,321%
            </p>
          </div>
        </div>

        {/* Annual Performance */}
        <div className="mt-8 p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <h3 className="text-lg font-semibold mb-4">Annual Performance (Robinhood)</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
            Overall: +5,321% (54.2x) | CAGR: 74.4% | Period: Nov 2018 - Jan 2026
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <div className="text-center">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">2019</p>
              <p className="text-lg md:text-xl font-bold text-emerald-600 dark:text-emerald-500">+45%</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">2020</p>
              <p className="text-lg md:text-xl font-bold text-emerald-600 dark:text-emerald-500">+180%</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">2021</p>
              <p className="text-lg md:text-xl font-bold text-emerald-600 dark:text-emerald-500">+65%</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">2022</p>
              <p className="text-lg md:text-xl font-bold text-red-600 dark:text-red-500">-35%</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">2023</p>
              <p className="text-lg md:text-xl font-bold text-emerald-600 dark:text-emerald-500">+55%</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">2024</p>
              <p className="text-lg md:text-xl font-bold text-emerald-600 dark:text-emerald-500">+85%</p>
            </div>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-4">
            * Estimated based on transaction history and market conditions. Actual returns calculated from $4,365 net invested to current value.
          </p>
        </div>
      </section>

      {/* AI Projects - PLACEHOLDER */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">AI Projects</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
          GitHub repositories and project details coming soon.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: 'What\'s Next', desc: 'Personal ERP for career transition', stack: 'Next.js, TypeScript, MCP' },
            { name: 'Themis', desc: 'AI-powered system [description pending]', stack: 'TBD' },
            { name: 'Hermes', desc: 'AI-powered system [description pending]', stack: 'TBD' },
            { name: 'Pantry', desc: 'AI-powered system [description pending]', stack: 'TBD' },
          ].map(project => (
            <div key={project.name} className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.stack.split(', ').map(tech => (
                  <span key={tech} className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href="#" 
                className="text-sm text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.430.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub (coming soon)
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Reading - PLACEHOLDER */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Reading</h2>
        
        <div className="space-y-6">
          {/* Top 25 Books */}
          <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg font-semibold mb-4">Top 25 Favorite Books</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Book list coming soon.
            </p>
          </div>

          {/* 2025 Reading Log */}
          <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg font-semibold mb-4">2025 Reading Log</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Books read this year will be tracked here.
            </p>
          </div>
        </div>
      </section>

      {/* Photography & Mountain Biking - PLACEHOLDER */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Photography & Mountain Biking</h2>
        <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Photo gallery and race highlights coming soon.
          </p>
        </div>
      </section>
    </div>
  )
}
