'use client'

import { Separator } from '@/components/ui/separator'
import { SectionHeading } from '@/components/ui/section-heading'
import { GlassCard } from '@/components/ui/glass-card'
import { GlassCardStack } from '@/components/visual/GlassCardStack'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/visual/Reveal'
import { CalendarCheck, MessageCircle, Phone } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Pick an athlete',
    description: "Choose who you trust — Athly is built around their approach.",
  },
  {
    number: '02',
    title: 'Get one plan',
    description:
      'A personalised weekly plan that consolidates training, skills, and recovery.',
  },
  {
    number: '03',
    title: 'Get guidance',
    description:
      'Message within the community for adjustments and access occasional check-ins (limited).',
  },
]

const features = [
  { icon: CalendarCheck, label: 'Weekly plan' },
  { icon: MessageCircle, label: 'Messaging' },
  { icon: Phone, label: 'Limited check-ins' },
]

const stackCards = [
  { label: 'Plan updated', detail: 'Week 4 — speed endurance' },
  { label: 'New drop', detail: 'Athlete added to roster' },
  { label: 'Check-in available', detail: 'Limited — next wave' },
]

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container>
        <SectionHeading
          title="How it works"
          subtitle="Three steps. One plan. Real guidance."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left: steps */}
          <div className="space-y-10">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl glass-surface flex items-center justify-center">
                    <span className="font-[family-name:var(--font-display)] text-sm font-bold text-[color:var(--accent)]">
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-[family-name:var(--font-display)] text-base font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right: floating notification cards */}
          <Reveal delay={0.2} direction="right">
            <div className="flex justify-center lg:justify-end">
              <GlassCardStack cards={stackCards} />
            </div>
          </Reveal>
        </div>

        <Separator className="mb-12" />

        <Reveal>
          <div className="grid grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <Reveal key={feature.label} delay={i * 0.08}>
                <GlassCard className="rounded-xl p-5 text-center">
                  <feature.icon className="h-5 w-5 mx-auto mb-3 text-[color:var(--accent)]" strokeWidth={1.5} />
                  <p className="text-xs font-medium text-white/70">{feature.label}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
