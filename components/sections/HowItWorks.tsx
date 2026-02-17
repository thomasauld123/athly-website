'use client'

import { motion } from 'framer-motion'
import { Separator } from '@/components/ui/separator'
import { SectionHeading } from '@/components/ui/section-heading'
import { GlassCard } from '@/components/ui/glass-card'
import { GlassCardStack } from '@/components/visual/GlassCardStack'
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
    <section id="how-it-works" className="relative px-6" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
        <SectionHeading
          title="How it works"
          subtitle="Three steps. One plan. Real guidance."
        />

        <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-16 items-start mb-16">
          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 items-start"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl glass flex items-center justify-center">
                  <span className="font-[family-name:var(--font-display)] text-sm font-bold" style={{ color: 'var(--accent)' }}>
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
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <GlassCardStack cards={stackCards} />
          </div>
        </div>

        <Separator className="mb-12" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <GlassCard className="rounded-xl p-5 text-center">
                  <feature.icon className="h-5 w-5 mx-auto mb-3" style={{ color: 'var(--accent)' }} strokeWidth={1.5} />
                  <p className="text-xs font-medium text-white/70">{feature.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
