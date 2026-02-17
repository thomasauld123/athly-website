'use client'

import { SectionHeading } from '@/components/ui/section-heading'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/visual/Reveal'
import { GlassCard } from '@/components/ui/glass-card'
import { CalendarCheck, MessageCircle, Bell, Dumbbell, BarChart3, Coffee, Trophy } from 'lucide-react'

const days = [
  {
    day: 'Mon',
    label: 'Speed session',
    icon: Dumbbell,
    accent: true,
    detail: 'Repeat sprints — 6×40m',
  },
  {
    day: 'Tue',
    label: 'Recovery',
    icon: Coffee,
    accent: false,
    detail: 'Mobility + foam roll',
  },
  {
    day: 'Wed',
    label: 'Plan adjusted',
    icon: MessageCircle,
    accent: true,
    detail: '"Added lateral work"',
  },
  {
    day: 'Thu',
    label: 'Strength',
    icon: BarChart3,
    accent: false,
    detail: 'Lower body focus',
  },
  {
    day: 'Fri',
    label: 'Rest day',
    icon: Coffee,
    accent: false,
    detail: 'Pre-game recovery',
  },
  {
    day: 'Sat',
    label: 'Game day',
    icon: Trophy,
    accent: true,
    detail: 'Match — apply the work',
  },
  {
    day: 'Sun',
    label: 'Check-in',
    icon: Bell,
    accent: true,
    detail: 'Week 5 plan drops',
  },
]

export function WeekTimeline() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="What your week looks like"
          subtitle="One plan that fits your life. Adjusted as you go."
        />

        <Reveal>
          <div className="flex gap-3 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-7 md:overflow-visible scrollbar-none">
            {days.map((day, i) => (
              <Reveal key={day.day} delay={i * 0.06} direction="none">
                <GlassCard hover={false} sheen={false} className="min-w-[140px] md:min-w-0 p-4 h-full">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-white/30 mb-3">{day.day}</p>
                  <day.icon
                    className={`h-4 w-4 mb-2 ${day.accent ? 'text-[color:var(--accent)]' : 'text-white/30'}`}
                    strokeWidth={1.5}
                  />
                  <p className={`text-xs font-medium mb-1 ${day.accent ? 'text-white/80' : 'text-white/50'}`}>
                    {day.label}
                  </p>
                  <p className="text-[10px] text-white/30 leading-relaxed">{day.detail}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/[0.06] px-4 py-2">
              <CalendarCheck className="h-3.5 w-3.5 text-[color:var(--accent)]" strokeWidth={1.5} />
              <span className="text-xs text-white/50">Plans update weekly based on your conversations</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
