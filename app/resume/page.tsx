import Link from 'next/link'

export default function Resume() {
  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Resume</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            15 years building operations that scale.
          </p>
        </div>
        <a
          href="/andrew-nolan-resume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </a>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
        <div className="text-center">
          <p className="text-2xl font-bold">$25M</p>
          <p className="text-xs text-neutral-500">P&L</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">150</p>
          <p className="text-xs text-neutral-500">Employees</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">18</p>
          <p className="text-xs text-neutral-500">Markets</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">3</p>
          <p className="text-xs text-neutral-500">Acquisitions</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">70</p>
          <p className="text-xs text-neutral-500">Vehicles</p>
        </div>
      </div>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-neutral-200 dark:border-neutral-800">
          Experience
        </h2>

        {/* Aramark + Good Uncle */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h3 className="font-semibold text-lg">Aramark Collegiate Hospitality + Good Uncle</h3>
              <p className="text-neutral-600 dark:text-neutral-400">VP Operations (Aramark) | CEO (Good Uncle)</p>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 md:text-right">Sep 2021 – Jan 2026</p>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
            $25M revenue · $5M budget · 150 employees · 70-vehicle fleet · 18 markets
          </p>
          <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span>Scaled Good Uncle delivery service from regional startup to 18 higher education markets nationwide</span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span>Grew CPG product line to $5M revenue (60% YoY growth) across 200 locations in 3 verticals</span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span>Built proprietary technology ecosystem with 75,000 users (React Native, Node.js)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span>Transformed 150-person org to 2-person AI-powered operation while maintaining growth</span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span>Designed and manufactured 50 custom delivery vehicles—half refrigeration, half convection oven</span>
            </li>
          </ul>
        </div>

        {/* Good Uncle */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h3 className="font-semibold text-lg">Good Uncle</h3>
              <p className="text-neutral-600 dark:text-neutral-400">COO → VP Operations → Senior Director</p>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 md:text-right">Oct 2016 – Sep 2021</p>
          </div>
          <p className="text-sm text-green-600 dark:text-green-400 mb-3">
            Acquired by Aramark (NYSE: ARMK) in May 2019
          </p>
          <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span>Recruited by CEO to build operational infrastructure for venture-backed startup; grew to COO as company grew 800%</span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span>Designed proprietary delivery vehicles with Mercedes-Benz, ThermoKing, and Motivo</span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span>Reduced labor costs 21% through cloud-based video surveillance technology</span>
            </li>
            <li className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span>Centralized production model reduced OpEx by 13%</span>
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

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-neutral-200 dark:border-neutral-800">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2 text-neutral-900 dark:text-neutral-100">Operations</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              P&L Management ($25M+), Multi-Site Operations, Fleet Management, Supply Chain, Logistics, Post-Acquisition Integration
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2 text-neutral-900 dark:text-neutral-100">Technical</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              React Native, Node.js, Hardware Product Development, AI Implementation, Systems Architecture
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2 text-neutral-900 dark:text-neutral-100">Leadership</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Team Building (150 employees), Organizational Design, Vendor Negotiations, Executive Reporting
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2 text-neutral-900 dark:text-neutral-100">Sectors</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Food Service, Last-Mile Delivery, CPG/Retail, Higher Education, Healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-neutral-200 dark:border-neutral-800">
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
  )
}
