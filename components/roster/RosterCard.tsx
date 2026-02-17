'use client'

import { Lock } from 'lucide-react'

interface RosterCardProps {
  sport: string
  teaser: string
  gradient: string
  tier: string
}

export function RosterCard({ sport, teaser, gradient, tier }: RosterCardProps) {
  return (
    <div className="w-[200px] flex-shrink-0 group">
      <div
        className="rounded-2xl bg-white/[0.06] border border-white/[0.10] backdrop-blur-xl p-4 transition-all duration-300 hover:bg-white/[0.10] hover:border-white/[0.18] glass-sheen cursor-default"
        style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.3)' }}
      >
        {/* Tier label */}
        <p className="text-[9px] font-medium uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--accent)', opacity: 0.5 }}>
          {tier}
        </p>

        {/* Avatar */}
        <div className="relative w-14 h-14 mb-3">
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} opacity-25 blur-md`} />
          <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden ring-1 ring-white/10`}>
            <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent h-1/2" />
          </div>
        </div>

        {/* Blurred name */}
        <div className="relative mb-3 h-5">
          <div className="h-4 w-24 rounded bg-white/10 blur-md" />
          <div className="absolute inset-0 flex items-center gap-1.5">
            <Lock className="h-2.5 w-2.5 text-white/25" />
            <span className="text-[9px] font-medium rounded-full px-2 py-0.5 bg-white/[0.06] border border-white/[0.08] text-white/30">Hidden</span>
          </div>
        </div>

        {/* Sport pill */}
        <div
          className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium mb-2"
          style={{ background: 'var(--glass-fill)', border: '1px solid var(--glass-border)', color: 'rgba(255,255,255,0.6)' }}
        >
          {sport}
        </div>

        {/* Teaser */}
        <p className="text-[11px] text-white/35 leading-relaxed">{teaser}</p>
      </div>
    </div>
  )
}
