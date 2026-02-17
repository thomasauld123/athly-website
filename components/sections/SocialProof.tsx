'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Smartphone, Filter, Users } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'

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
    <section className="relative px-6" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cues.map((cue, i) => (
            <motion.div
              key={cue.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard className="p-6 h-full">
                <cue.icon className="h-5 w-5 mb-4" style={{ color: 'var(--accent)' }} strokeWidth={1.5} />
                <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-white mb-1.5">
                  {cue.title}
                </p>
                <p className="text-xs text-white/40 leading-relaxed">
                  {cue.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
