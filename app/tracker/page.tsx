'use client'

import { useState, useEffect, useMemo } from 'react'

interface Company {
  id: number
  name: string
  ticker: string | null
  sector: string
  source: string
  stage: string
  employees: number
  hq: string
  score: number
  tier: number
  status: string
  holdStock: boolean
  recentFunding: boolean
  noExecOps: boolean
  strategicBacking: boolean
  notes: string
  nextAction: string
  lastAction: string | null
  lastActionDate: string | null
}

interface Metrics {
  totalCompanies: number
  tier1: number
  tier2: number
  tier3: number
  deepResearched: number
  warmIntros: number
  outreachSent: number
  applications: number
  interviews: number
  finalRounds: number
}

interface Data {
  lastUpdated: string
  metrics: Metrics
  companies: Company[]
}

type SortField = 'score' | 'name' | 'employees' | 'tier'
type SortDirection = 'asc' | 'desc'

export default function Tracker() {
  const [data, setData] = useState<Data | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedTier, setSelectedTier] = useState<number | 'all'>('all')
  const [selectedSector, setSelectedSector] = useState<string>('all')
  const [sortField, setSortField] = useState<SortField>('score')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  useEffect(() => {
    fetch('/data/companies.json')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to load data:', err)
        setLoading(false)
      })
  }, [])

  const sectors = useMemo(() => {
    if (!data) return []
    const uniqueSectors = Array.from(new Set(data.companies.map(c => c.sector)))
    return uniqueSectors.sort()
  }, [data])

  const filteredAndSortedCompanies = useMemo(() => {
    if (!data) return []
    
    let companies = [...data.companies]
    
    // Filter by tier
    if (selectedTier !== 'all') {
      companies = companies.filter(c => c.tier === selectedTier)
    }
    
    // Filter by sector
    if (selectedSector !== 'all') {
      companies = companies.filter(c => c.sector === selectedSector)
    }
    
    // Sort
    companies.sort((a, b) => {
      let aVal = a[sortField]
      let bVal = b[sortField]
      
      if (typeof aVal === 'string') aVal = aVal.toLowerCase()
      if (typeof bVal === 'string') bVal = bVal.toLowerCase()
      
      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1
      return 0
    })
    
    return companies
  }, [data, selectedTier, selectedSector, sortField, sortDirection])

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection(field === 'name' ? 'asc' : 'desc')
    }
  }

  const getTierColor = (tier: number) => {
    switch (tier) {
      case 1: return 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
      case 2: return 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
      case 3: return 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
      default: return 'bg-neutral-100 dark:bg-neutral-800'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Identified': return 'text-neutral-500'
      case 'Researching': return 'text-blue-600 dark:text-blue-400'
      case 'Outreach': return 'text-amber-600 dark:text-amber-400'
      case 'Applied': return 'text-purple-600 dark:text-purple-400'
      case 'Interviewing': return 'text-emerald-600 dark:text-emerald-400'
      default: return 'text-neutral-500'
    }
  }

  if (loading) {
    return (
      <div className="py-8 md:py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-neutral-200 dark:bg-neutral-800 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-2/3 mb-8"></div>
          <div className="grid grid-cols-5 gap-4 mb-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-20 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="py-8 md:py-12">
        <p className="text-red-600">Failed to load tracker data.</p>
      </div>
    )
  }

  return (
    <div className="py-8 md:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Company Tracker</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          What's Next Pipeline • Last updated: {data.lastUpdated}
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <p className="text-2xl font-bold">{data.metrics.totalCompanies}</p>
          <p className="text-sm text-neutral-500">Total Companies</p>
        </div>
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
          <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{data.metrics.tier1}</p>
          <p className="text-sm text-emerald-600 dark:text-emerald-500">Tier 1 (85+)</p>
        </div>
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
          <p className="text-2xl font-bold text-amber-700 dark:text-amber-400">{data.metrics.tier2}</p>
          <p className="text-sm text-amber-600 dark:text-amber-500">Tier 2 (75-84)</p>
        </div>
        <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <p className="text-2xl font-bold">{data.metrics.applications}</p>
          <p className="text-sm text-neutral-500">Applications</p>
        </div>
        <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <p className="text-2xl font-bold text-purple-700 dark:text-purple-400">{data.metrics.finalRounds}/3</p>
          <p className="text-sm text-purple-600 dark:text-purple-500">Final Rounds (Goal)</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-neutral-600 dark:text-neutral-400">Pipeline Progress</span>
          <span className="font-medium">{data.metrics.finalRounds}/3 Final Rounds</span>
        </div>
        <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
          <div className="flex h-full">
            <div 
              className="bg-emerald-500 transition-all duration-500"
              style={{ width: `${(data.metrics.finalRounds / 3) * 100}%` }}
            ></div>
            <div 
              className="bg-purple-500 transition-all duration-500"
              style={{ width: `${(data.metrics.interviews / 3) * 100}%` }}
            ></div>
            <div 
              className="bg-amber-500 transition-all duration-500"
              style={{ width: `${(data.metrics.applications / 30) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="flex gap-4 mt-2 text-xs text-neutral-500">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Final Rounds
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span> Interviews
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span> Applications
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div>
          <label className="block text-sm text-neutral-500 mb-1">Tier</label>
          <select 
            value={selectedTier}
            onChange={(e) => setSelectedTier(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm"
          >
            <option value="all">All Tiers</option>
            <option value={1}>Tier 1 (85+)</option>
            <option value={2}>Tier 2 (75-84)</option>
            <option value={3}>Tier 3 (65-74)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-neutral-500 mb-1">Sector</label>
          <select 
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
            className="px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm"
          >
            <option value="all">All Sectors</option>
            {sectors.map(sector => (
              <option key={sector} value={sector}>{sector}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Companies Table */}
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                <th className="text-left py-3 px-4 font-medium">
                  <button onClick={() => handleSort('score')} className="flex items-center gap-1 hover:text-amber-600">
                    Score {sortField === 'score' && (sortDirection === 'desc' ? '↓' : '↑')}
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium">
                  <button onClick={() => handleSort('name')} className="flex items-center gap-1 hover:text-amber-600">
                    Company {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium hidden md:table-cell">Sector</th>
                <th className="text-left py-3 px-4 font-medium hidden lg:table-cell">Stage</th>
                <th className="text-left py-3 px-4 font-medium hidden lg:table-cell">
                  <button onClick={() => handleSort('employees')} className="flex items-center gap-1 hover:text-amber-600">
                    Size {sortField === 'employees' && (sortDirection === 'desc' ? '↓' : '↑')}
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
                <th className="text-left py-3 px-4 font-medium hidden md:table-cell">Flags</th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedCompanies.map((company) => (
                <>
                  <tr 
                    key={company.id}
                    onClick={() => setExpandedId(expandedId === company.id ? null : company.id)}
                    className="border-b border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 cursor-pointer transition-colors"
                  >
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center justify-center w-10 h-10 rounded-lg font-bold ${getTierColor(company.tier)}`}>
                        {company.score}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium">{company.name}</p>
                        {company.ticker && (
                          <p className="text-xs text-neutral-500">{company.ticker}</p>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 hidden md:table-cell">
                      <span className="text-neutral-600 dark:text-neutral-400">{company.sector}</span>
                    </td>
                    <td className="py-3 px-4 hidden lg:table-cell">
                      <span className="text-neutral-600 dark:text-neutral-400">{company.stage}</span>
                    </td>
                    <td className="py-3 px-4 hidden lg:table-cell">
                      <span className="text-neutral-600 dark:text-neutral-400">
                        {company.employees >= 1000 ? `${(company.employees / 1000).toFixed(1)}k` : company.employees}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`font-medium ${getStatusColor(company.status)}`}>
                        {company.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 hidden md:table-cell">
                      <div className="flex gap-1">
                        {company.holdStock && (
                          <span className="px-2 py-0.5 text-xs rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400" title="Hold Stock">
                            📈
                          </span>
                        )}
                        {company.recentFunding && (
                          <span className="px-2 py-0.5 text-xs rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" title="Recent Funding">
                            💰
                          </span>
                        )}
                        {company.noExecOps && (
                          <span className="px-2 py-0.5 text-xs rounded bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400" title="No COO/VP Ops">
                            🎯
                          </span>
                        )}
                        {company.strategicBacking && (
                          <span className="px-2 py-0.5 text-xs rounded bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400" title="Strategic Backing">
                            🏢
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                  {expandedId === company.id && (
                    <tr className="bg-neutral-50 dark:bg-neutral-900/50">
                      <td colSpan={7} className="py-4 px-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium mb-1">Notes</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">{company.notes}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium mb-1">Next Action</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">{company.nextAction}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium mb-1">Location</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">{company.hq}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium mb-1">Source</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">{company.source}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
        <p className="text-sm font-medium mb-2">Flag Legend</p>
        <div className="flex flex-wrap gap-4 text-xs">
          <span className="flex items-center gap-1">📈 Hold Stock (+5 pts)</span>
          <span className="flex items-center gap-1">💰 Recent Funding (+5 pts)</span>
          <span className="flex items-center gap-1">🎯 No COO/VP Ops (+10 pts)</span>
          <span className="flex items-center gap-1">🏢 Strategic Backing (+5 pts)</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-sm text-neutral-500">
          Part of the <a href="/projects/whats-next" className="text-amber-600 hover:text-amber-700 dark:text-amber-500">What's Next</a> personal ERP system
        </p>
      </div>
    </div>
  )
}
