'use client'

import { motion } from 'framer-motion'
import { Shield, Smartphone, Filter, Users } from 'lucide-react'

const cues = [
  {
    icon: Shield,
    title: 'Built with elite athlete input',
    description: 'Training methodology shaped by people who compete at the highest level.',
  },
  {
    icon: Filter,
    title: 'Designed to reduce noise',
    description: 'One consolidated plan instead of scattered advice from ten different sources.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-first, habit-friendly',
    description: 'Built for daily use. Open, train, track. No friction.',
  },
  {
    icon: Users,
    title: 'Early roster across major sports',
    description: 'Athletes from AFL, cricket, NRL, football, and more. Names dropping soon.',
  },
]

export function SocialProof() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl">
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
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 transition-all duration-300 glass-hover"
            >
              <cue.icon className="h-5 w-5 text-violet-400 mb-4" strokeWidth={1.5} />
              <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-white mb-1.5">
                {cue.title}
              </p>
              <p className="text-xs text-white/40 leading-relaxed">
                {cue.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
