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
    <div className="w-[260px] flex-shrink-0 group">
      <div className="glass-surface glass-sheen rounded-2xl p-4 transition-all duration-300 hover:bg-white/[0.10] hover:border-white/[0.18] cursor-default">
        {/* Tier label */}
        <p className="text-[9px] font-medium uppercase tracking-[0.15em] mb-3 text-[color:var(--accent)] opacity-50">
          {tier}
        </p>

        {/* Portrait window — ~45% of card height */}
        <div className="relative w-full aspect-[3/4] max-h-[140px] mb-3 rounded-xl overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-30`} />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent h-1/2" />
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
            <Lock className="h-2.5 w-2.5 text-white/30" />
            <span className="text-[9px] font-medium text-white/30">Reveal at launch</span>
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

        {/* Sport pill with accent outline */}
        <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium mb-2 border border-[color:var(--accent-border)] text-white/60 bg-[color:var(--accent-soft)]">
          {sport}
        </div>

        {/* Teaser */}
        <p className="text-[11px] text-white/35 leading-relaxed mb-2">{teaser}</p>

        {/* Decorative dots */}
        <div className="flex gap-1">
          {[0.15, 0.25, 0.15, 0.1, 0.2].map((opacity, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-white" style={{ opacity }} />
          ))}
        </div>
      </div>
    </div>
  )
}
