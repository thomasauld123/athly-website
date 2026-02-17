'use client'

import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const athletes = [
  { sport: 'AFL', teaser: 'Speed and agility block', gradient: 'from-violet-600 to-indigo-800', tier: 'Headline athlete' },
  { sport: 'Cricket', teaser: 'Match-day prep and recovery', gradient: 'from-blue-600 to-cyan-800', tier: 'Headline athlete' },
  { sport: 'NRL', teaser: 'Strength under fatigue', gradient: 'from-emerald-600 to-teal-800', tier: 'Launch athlete' },
  { sport: 'Football', teaser: 'Skill under pressure', gradient: 'from-amber-600 to-orange-800', tier: 'Headline athlete' },
  { sport: 'Olympics', teaser: 'Peak performance cycles', gradient: 'from-rose-600 to-pink-800', tier: 'Launch athlete' },
  { sport: 'Surf', teaser: 'Functional mobility and power', gradient: 'from-sky-600 to-blue-800', tier: 'Launch athlete' },
]

function AthleteCard({ sport, teaser, gradient, tier }: typeof athletes[0]) {
  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="glass rounded-2xl p-5 transition-all duration-300 group cursor-default glass-hover"
    >
      {/* Tier label */}
      <p className="text-[10px] font-medium uppercase tracking-widest text-violet-400/60 mb-3">
        {tier}
      </p>

      {/* Premium avatar with highlight ring */}
      <div className="relative w-16 h-16 mb-4">
        {/* Outer highlight ring */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-30 blur-md`} />
        <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden ring-1 ring-white/15`}>
          {/* Inner highlight */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent h-1/2" />
          {/* Noise texture on avatar */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: '64px 64px',
            }}
          />
        </div>
      </div>

      {/* Redacted name */}
      <div className="relative mb-3">
        <div className="h-5 w-28 rounded bg-white/10 blur-md" />
        <div className="absolute inset-0 flex items-center gap-1.5">
          <Lock className="h-3 w-3 text-white/30" />
          <Badge variant="muted" className="text-[10px]">Hidden</Badge>
        </div>
      </div>

      {/* Sport badge */}
      <Badge variant="default" className="mb-2">{sport}</Badge>

      {/* Teaser */}
      <p className="text-xs text-white/40 mt-2">{teaser}</p>
    </motion.div>
  )
}

export function FeaturedAthletes() {
  return (
    <section id="athletes" className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Launch roster
          </h2>
          <p className="text-white/40 max-w-md mx-auto mb-2">
            We&apos;re locking the first drop. Names are hidden until launch.
          </p>
          <p className="text-sm text-violet-400/80">
            Join the waitlist to influence who launches first.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-12"
        >
          {athletes.map((athlete, i) => (
            <motion.div
              key={athlete.sport}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <AthleteCard {...athlete} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
