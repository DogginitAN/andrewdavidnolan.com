'use client'

import { useEffect, useState } from 'react'

interface Trade {
  action: 'BUY' | 'SELL'
  ticker: string
}

const SUPABASE_URL = 'https://jlytjzfurbefurrkslna.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpseXRqemZ1cmJlZnVycmtzbG5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4NDExMjAsImV4cCI6MjA3NzQxNzEyMH0.CYJglYuIbHKh_cBI_pEetQm_2aW-nv4QNtkBX9KVT74'

// Fallback data in case API fails
const FALLBACK_TRADES: Trade[] = [
  { action: 'BUY', ticker: 'GLW' },
  { action: 'BUY', ticker: 'CEG' },
  { action: 'BUY', ticker: 'MSTY' },
  { action: 'BUY', ticker: 'ARM' },
  { action: 'BUY', ticker: 'SMCI' },
]

export default function StockTicker() {
  const [trades, setTrades] = useState<Trade[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTrades() {
      try {
        const response = await fetch(
          `${SUPABASE_URL}/rest/v1/ticker_feed?select=ticker,action&order=trade_date.desc`,
          {
            headers: {
              'apikey': SUPABASE_ANON_KEY,
              'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            },
          }
        )
        
        if (!response.ok) throw new Error('Failed to fetch')
        
        const data = await response.json()
        if (data && data.length > 0) {
          setTrades(data.map((t: { ticker: string; action: string }) => ({
            ticker: t.ticker,
            action: t.action as 'BUY' | 'SELL'
          })))
        } else {
          setTrades(FALLBACK_TRADES)
        }
      } catch (error) {
        console.error('Error fetching trades:', error)
        setTrades(FALLBACK_TRADES)
      } finally {
        setLoading(false)
      }
    }

    fetchTrades()
  }, [])

  if (loading) {
    return (
      <div className="w-full overflow-hidden bg-neutral-950 border-y border-neutral-800">
        <div className="flex items-center justify-between px-4 py-1 bg-neutral-900 border-b border-neutral-800">
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
            Last 30 Days
          </span>
          <span className="text-[10px] font-mono text-neutral-500">
            Live from Robinhood
          </span>
        </div>
        <div className="py-2 px-4">
          <span className="text-sm text-neutral-500 font-mono">Loading...</span>
        </div>
      </div>
    )
  }

  if (trades.length === 0) return null

  // Double the trades for seamless infinite scroll
  const doubledTrades = [...trades, ...trades]

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
