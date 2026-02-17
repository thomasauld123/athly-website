'use client'

interface RosterCardProps {
  sport: string
  gradient: string
}

export function RosterCard({ sport, gradient }: RosterCardProps) {
  return (
    <div className="w-[260px] flex-shrink-0">
      <div className="rounded-2xl bg-white/[0.04] border border-white/[0.07] backdrop-blur-xl p-3 glass-sheen transition-all duration-300 hover:bg-white/[0.07] cursor-default">
        {/* Gradient portrait block */}
        <div className="relative w-full aspect-[3/4] mb-3 rounded-xl overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-25`} />
          <div className="absolute inset-0 bg-gradient-to-b from-white/8 to-transparent h-1/2" />
        </div>

        {/* Sport pill */}
        <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium border border-[color:var(--accent-border)] text-white/60 bg-[color:var(--accent-soft)]">
          {sport}
        </div>
      </div>
    </div>
  )
}
