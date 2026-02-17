'use client'

import { motion } from 'framer-motion'
import { Separator } from '@/components/ui/separator'
import { CalendarCheck, Flame, Target, MessageCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Tell us about you',
    description:
      'Your sport, your goals, your schedule, where you\'re at right now. Athly builds around your actual life, not a template.',
  },
  {
    number: '02',
    title: 'Get one clear plan',
    description:
      'Training, skills, recovery — consolidated into a single weekly plan shaped by your chosen athlete\'s methodology. No guesswork.',
  },
  {
    number: '03',
    title: 'Stay consistent',
    description:
      'Track your progress, hit streaks, take on challenges, and stay connected to a community and coaching moments that keep you going.',
  },
]

const features = [
  { icon: CalendarCheck, label: 'Weekly plan you can follow' },
  { icon: Target, label: 'Progress tracking' },
  { icon: Flame, label: 'Challenges and streaks' },
  { icon: MessageCircle, label: 'Community and coaching moments' },
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
            Three steps. One plan. Real progress.
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

        {/* What you get mini-grid */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center font-[family-name:var(--font-display)] text-sm font-semibold text-white/50 uppercase tracking-wider mb-8">
            What you get
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
