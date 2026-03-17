'use client'

interface RosterCardProps {
  sport: string
  credential: string
}

export function RosterCard({ sport, credential }: RosterCardProps) {
  return (
    <div className="rounded-2xl bg-white/[0.04] border border-white/[0.07] p-4 transition-colors duration-300 hover:bg-white/[0.06] cursor-default">
      {/* Redacted identity bar */}
      <div className="h-5 rounded-md bg-white/[0.08] mb-3 w-3/4" />

      {/* Sport pill */}
      <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium border border-[color:var(--accent-border)] text-white/60 bg-[color:var(--accent-soft)]">
        {sport}
      </div>

      {/* Credential */}
      <p className="text-[11px] text-white/30 italic mt-1.5">{credential}</p>
    </div>
  )
}
