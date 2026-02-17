'use client'

import { SectionHeading } from '@/components/ui/section-heading'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/visual/Reveal'
import { GlassPanel } from '@/components/ui/glass-card'
import { X, Check } from 'lucide-react'

const rows = [
  { generic: 'Random workout plans', athly: 'One plan shaped by a real athlete' },
  { generic: 'No real accountability', athly: 'Direct messaging + plan adjustments' },
  { generic: 'Cookie-cutter programs', athly: 'Adapted to your sport and goals' },
  { generic: 'Faceless AI coaches', athly: 'Athletes you actually trust' },
]

export function Comparison() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="Not another fitness app"
          subtitle="You've seen the rest. Here's what's different."
        />

        <Reveal>
          <div className="max-w-3xl mx-auto">
            <GlassPanel className="overflow-hidden">
              {/* Header row */}
              <div className="grid grid-cols-2 border-b border-white/5">
                <div className="p-4 md:p-5">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-white/30">Generic fitness apps</p>
                </div>
                <div className="p-4 md:p-5 border-l border-white/5">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-[color:var(--accent)]">Athly</p>
                </div>
              </div>

              {/* Comparison rows */}
              {rows.map((row, i) => (
                <div key={i} className={`grid grid-cols-2 ${i < rows.length - 1 ? 'border-b border-white/5' : ''}`}>
                  <div className="p-4 md:p-5 flex items-start gap-3">
                    <X className="h-4 w-4 text-white/20 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <p className="text-sm text-white/35">{row.generic}</p>
                  </div>
                  <div className="p-4 md:p-5 border-l border-white/5 flex items-start gap-3">
                    <Check className="h-4 w-4 text-[color:var(--accent)] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-sm text-white/70">{row.athly}</p>
                  </div>
                </div>
              ))}
            </GlassPanel>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
