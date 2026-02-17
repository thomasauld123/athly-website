'use client'

import { MessageCircle, Smartphone, Filter, Users } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/visual/Reveal'

const cues = [
  {
    icon: MessageCircle,
    title: 'Direct messaging',
    description: 'Message within the athlete\'s community for personalised guidance and plan adjustments.',
  },
  {
    icon: Filter,
    title: 'One plan, not ten',
    description: 'A single consolidated plan instead of scattered advice from random sources.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-first, habit-friendly',
    description: 'Built for daily use. Open, train, track, message. No friction.',
  },
  {
    icon: Users,
    title: 'Occasional check-ins',
    description: 'Limited access moments with athletes. Real connection, not a promise of 24/7.',
  },
]

export function SocialProof() {
  return (
    <Section>
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cues.map((cue, i) => (
            <Reveal key={cue.title} delay={i * 0.08}>
              <GlassCard className="p-6 h-full">
                <cue.icon className="h-5 w-5 mb-4 text-[color:var(--accent)]" strokeWidth={1.5} />
                <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-white mb-1.5">
                  {cue.title}
                </p>
                <p className="text-xs text-white/40 leading-relaxed">
                  {cue.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
