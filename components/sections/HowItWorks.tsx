'use client'

import { SectionHeading } from '@/components/ui/section-heading'
import { GlassCard } from '@/components/ui/glass-card'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/visual/Reveal'

const steps = [
  {
    number: '01',
    title: 'Pick an athlete',
    description: "Choose who you trust — Athly is built around their approach.",
  },
  {
    number: '02',
    title: 'Get one plan',
    description: 'A personalised weekly plan that consolidates training, skills, and recovery.',
  },
  {
    number: '03',
    title: 'Get guidance',
    description: 'Message within the community for adjustments and access occasional check-ins (limited).',
  },
]

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container>
        <SectionHeading
          title="How it works"
          subtitle="Three steps. One plan. Real guidance."
        />

        <div className="relative">
          {/* Connector line — desktop only */}
          <div
            className="absolute top-[52px] h-px border-t border-dashed border-white/10 hidden lg:block pointer-events-none"
            style={{ left: 'calc(16.666% + 1.5rem)', right: 'calc(16.666% + 1.5rem)' }}
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.12}>
                <GlassCard className="p-7 text-center">
                  <div className="inline-flex w-11 h-11 rounded-xl items-center justify-center mb-5 glass-surface">
                    <span className="font-[family-name:var(--font-display)] text-sm font-bold text-[color:var(--accent)]">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-base font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {step.description}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
