'use client'

import { useEffect, useState } from 'react'

interface Trade {
  action: 'BUY' | 'SELL'
  ticker: string
}

// Static data - can be replaced with API call later
const TRADES: Trade[] = [
  { action: 'BUY', ticker: 'GLW' },
  { action: 'BUY', ticker: 'CEG' },
  { action: 'BUY', ticker: 'PSTG' },
  { action: 'BUY', ticker: 'VG' },
  { action: 'BUY', ticker: 'MSTY' },
  { action: 'BUY', ticker: 'ARM' },
  { action: 'BUY', ticker: 'SMCI' },
  { action: 'BUY', ticker: 'TAC' },
  { action: 'BUY', ticker: 'GRAB' },
  { action: 'BUY', ticker: 'IREN' },
  { action: 'BUY', ticker: 'STEM' },
  { action: 'BUY', ticker: 'SDGR' },
  { action: 'BUY', ticker: 'RXRX' },
  { action: 'BUY', ticker: 'ABCL' },
  { action: 'BUY', ticker: 'AREC' },
  { action: 'BUY', ticker: 'GLXY' },
  { action: 'BUY', ticker: 'ULH' },
  { action: 'BUY', ticker: 'VST' },
  { action: 'BUY', ticker: 'GTLB' },
  { action: 'BUY', ticker: 'ARKG' },
]

export default function StockTicker() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Double the trades for seamless infinite scroll
  const doubledTrades = [...TRADES, ...TRADES]

  return (
    <div className="w-full overflow-hidden bg-neutral-950 border-y border-neutral-800">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-1 bg-neutral-900 border-b border-neutral-800">
        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
          Last 30 Days
        </span>
        <span className="text-[10px] font-mono text-neutral-500">
          Live from Robinhood
        </span>
      </div>
      
      {/* Ticker */}
      <div className="relative py-2">
        <div className="animate-ticker flex whitespace-nowrap">
          {doubledTrades.map((trade, idx) => (
            <div
              key={idx}
              className="inline-flex items-center mx-6"
            >
              <span
                className={`font-mono text-sm font-bold ${
                  trade.action === 'BUY'
                    ? 'text-emerald-500'
                    : 'text-red-500'
                }`}
              >
                {trade.action}
              </span>
              <span className="mx-2 text-neutral-600">•</span>
              <span className="font-mono text-sm text-neutral-300 font-semibold">
                {trade.ticker}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
