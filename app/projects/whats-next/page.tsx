import Link from 'next/link'

export default function WhatsNext() {
  return (
    <div className="py-8 md:py-12">
      {/* Hero */}
      <div className="mb-12">
        <Link 
          href="/builder-mode" 
          className="text-sm text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400 mb-4 inline-block"
        >
          ← Back to Builder Mode
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">What's Next</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
          A Personal ERP for career transition — because job searching shouldn't be a full-time job.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
            In Production
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
            Next.js
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
            TypeScript
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
            Claude MCP
          </span>
        </div>
      </div>

      {/* The Problem */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
        <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            Executive job searching is inefficient by design. High-value candidates spend excessive time on low-value tasks:
          </p>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">✕</span>
              <span>Scrolling LinkedIn hoping to find something relevant</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">✕</span>
              <span>Sending the same generic resume to every opportunity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">✕</span>
              <span>No systematic way to evaluate company fit</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">✕</span>
              <span>Missing companies that don't actively post on job boards</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">✕</span>
              <span>Writing cover letters from scratch for each application</span>
            </li>
          </ul>
        </div>
      </section>

      {/* The Solution */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
        <div className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800">
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            <strong>Invert the ratio.</strong> Automate the tedious. Surface the strategic.
          </p>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">✓</span>
              <span>Jobs surface automatically, pre-scored for fit</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">✓</span>
              <span>Tailored resume + cover letter generated in minutes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">✓</span>
              <span>Systematic company scoring with weighted dimensions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">✓</span>
              <span>Proactive pipeline of target companies, not just posted roles</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">✓</span>
              <span>Time spent on high-value activities: networking, interviews, strategy</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">System Architecture</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Company Targeting */}
          <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg font-semibold mb-3 text-emerald-600 dark:text-emerald-500">
              📊 Company Targeting
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Dual-sourcing strategy combining portfolio analysis with funding news monitoring.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-500">Pipeline Size</span>
                <span className="font-medium">52 companies</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Tier 1 (Priority)</span>
                <span className="font-medium text-emerald-600">15 companies</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Scoring Dimensions</span>
                <span className="font-medium">6 weighted factors</span>
              </div>
            </div>
          </div>

          {/* Resume 2.0 */}
          <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg font-semibold mb-3 text-amber-600 dark:text-amber-500">
              📄 Resume 2.0
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Structured master resume that can be programmatically tailored for any opportunity.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-500">Format</span>
                <span className="font-medium">Markdown → PDF</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Achievements Tracked</span>
                <span className="font-medium">12+ quantified</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Summary Variants</span>
                <span className="font-medium">5 personas</span>
              </div>
            </div>
          </div>

          {/* The Scribe */}
          <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-500">
              ✍️ The Scribe
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Auto-generate tailored application materials from any job description.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-500">Input</span>
                <span className="font-medium">Job Description</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Output</span>
                <span className="font-medium">Resume + Cover + Prep</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Target Time</span>
                <span className="font-medium">&lt;10 minutes</span>
              </div>
            </div>
          </div>

          {/* LinkedIn Presence */}
          <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-500">
              🔗 LinkedIn Presence
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Fully automated posting and engagement. Zero manual effort required.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-500">Posting Cadence</span>
                <span className="font-medium">2-3x per week</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Content Pillars</span>
                <span className="font-medium">4 themes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Manual Time</span>
                <span className="font-medium">0 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scoring Model */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Scoring Model</h2>
        <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
            Every company is evaluated across 6 weighted dimensions. Scores range from 0-100.
          </p>
          
          <div className="space-y-4">
            {[
              { name: 'Role Match', weight: 25, desc: 'Building/scaling ops, not maintaining' },
              { name: 'Mission Alignment', weight: 20, desc: 'AI, nuclear, logistics, climate, deep tech' },
              { name: 'Stage/Scale Fit', weight: 20, desc: 'Series B-D or growth-mode public' },
              { name: 'Investment Thesis', weight: 15, desc: 'Would I put my own money in?' },
              { name: 'Compensation', weight: 10, desc: 'Equity upside potential' },
              { name: 'Location', weight: 10, desc: 'NYC-accessible or full remote' },
            ].map((dim) => (
              <div key={dim.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{dim.name}</span>
                  <span className="text-amber-600 dark:text-amber-500">{dim.weight}%</span>
                </div>
                <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-500 rounded-full"
                    style={{ width: `${dim.weight * 4}%` }}
                  ></div>
                </div>
                <p className="text-xs text-neutral-500 mt-1">{dim.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <p className="text-sm font-medium mb-2">Score Modifiers</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <span className="px-2 py-1 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                +5: Hold stock (skin in the game)
              </span>
              <span className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                +5: Recent funding
              </span>
              <span className="px-2 py-1 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">
                +10: No COO/VP Ops
              </span>
              <span className="px-2 py-1 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">
                +5: Strategic backing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tier Breakdown */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tier Classification</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
            <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
              Tier 1: 85+
            </h3>
            <p className="text-sm text-emerald-600 dark:text-emerald-500 mb-3">
              Proactive outreach, even without open role
            </p>
            <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">15</p>
            <p className="text-xs text-emerald-600 dark:text-emerald-500">companies</p>
          </div>

          <div className="p-6 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400 mb-2">
              Tier 2: 75-84
            </h3>
            <p className="text-sm text-amber-600 dark:text-amber-500 mb-3">
              Apply if role exists, monitor actively
            </p>
            <p className="text-2xl font-bold text-amber-700 dark:text-amber-400">25</p>
            <p className="text-xs text-amber-600 dark:text-amber-500">companies</p>
          </div>

          <div className="p-6 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
            <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
              Tier 3: 65-74
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
              Monitor only, opportunistic
            </p>
            <p className="text-2xl font-bold text-neutral-700 dark:text-neutral-300">12</p>
            <p className="text-xs text-neutral-500">companies</p>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Success Metrics</h2>
        <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-neutral-500 mb-3">PRIMARY GOAL</h3>
              <p className="text-3xl font-bold mb-1">3 Final Rounds</p>
              <p className="text-sm text-neutral-500">at mission-aligned companies within 90 days</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-500 mb-3">SECONDARY GOALS</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>LinkedIn time</span>
                  <span className="font-medium">&lt;30 min/week</span>
                </li>
                <li className="flex justify-between">
                  <span>Application prep time</span>
                  <span className="font-medium">&lt;10 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Pipeline companies</span>
                  <span className="font-medium text-emerald-600">52 ✓</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Build This? */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Build This?</h2>
        <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200 dark:border-neutral-700">
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
            Two reasons:
          </p>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-amber-600 dark:text-amber-500 mb-1">1. Practice what I preach</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                I'm an operations executive who has spent 15 years building systems that scale. 
                If I can't systematize my own job search, why would anyone hire me to systematize theirs?
              </p>
            </div>
            <div>
              <p className="font-medium text-amber-600 dark:text-amber-500 mb-1">2. Signal > Resume</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                For the companies I'm targeting — AI infrastructure, nuclear, deep tech — 
                building this system demonstrates more about my capabilities than any resume ever could.
                They're not hiring someone who follows playbooks. They're hiring someone who writes them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <div className="p-8 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
          <h2 className="text-xl font-semibold mb-3">See the Live Pipeline</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            The tracker is operational. 52 companies scored and prioritized.
          </p>
          <Link 
            href="/tracker"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
          >
            View Tracker →
          </Link>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {['Next.js', 'TypeScript', 'Tailwind CSS', 'Claude Desktop', 'MCP Tools', 'Nash (Docker)', 'Vercel'].map(tech => (
            <span 
              key={tech}
              className="px-3 py-1 text-sm rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
