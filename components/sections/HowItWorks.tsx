'use client'

import { motion } from 'framer-motion'
import { Separator } from '@/components/ui/separator'
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
      'Message for adjustments, join drops, and access occasional check-ins (limited).',
  },
]

const features = [
  { icon: CalendarCheck, label: 'Weekly plan' },
  { icon: MessageCircle, label: 'Messaging' },
  { icon: Phone, label: 'Limited check-ins' },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-white/40 max-w-md mx-auto">
            Three steps. One plan. Real guidance.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12 mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl glass flex items-center justify-center">
                <span className="font-[family-name:var(--font-display)] text-sm font-bold text-violet-400">
                  {step.number}
                </span>
              </div>
              <div className="pt-1">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <Separator className="mb-16" />

        {/* Mini features row */}
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
                className="glass rounded-xl p-5 text-center transition-all duration-300 glass-hover"
              >
                <feature.icon className="h-5 w-5 text-violet-400 mx-auto mb-3" strokeWidth={1.5} />
                <p className="text-xs font-medium text-white/70">{feature.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
