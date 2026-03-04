'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircle, CheckCircle2, Check } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/visual/Reveal'

type PillType = 'intensity' | 'rest' | 'message' | 'update' | 'checkin'

interface DayCard {
  day: string
  title: string
  details: string
  pill: { label: string; type: PillType }
  highlight?: boolean
}

interface PersonaData {
  days: DayCard[]
}

const personas: Record<string, PersonaData> = {
  'midfielder preparing for pre-season': {
    days: [
      { day: 'Mon', title: 'Speed endurance', details: '4×200m intervals, 90s rest', pill: { label: 'RPE 8/10', type: 'intensity' } },
      { day: 'Tue', title: 'Recovery', details: '20min walk + foam roll. Review Monday\'s data.', pill: { label: 'Active rest', type: 'rest' } },
      { day: 'Wed', title: 'Skills session', details: 'Ball work 30min, agility ladder.', pill: { label: 'Athlete tip received', type: 'message' }, highlight: true },
      { day: 'Thu', title: 'Strength', details: 'Lower body compound lifts, hip mobility circuit.', pill: { label: 'RPE 7/10', type: 'intensity' } },
      { day: 'Fri', title: 'Repeat efforts', details: '6×100m hills, game film review 15min.', pill: { label: 'Plan adapted', type: 'update' } },
      { day: 'Sat', title: 'Game day', details: 'Trust the prep, pre-game routine locked.', pill: { label: 'Check-in available', type: 'checkin' } },
      { day: 'Sun', title: 'Full rest', details: 'Recovery protocol, next week preview drops.', pill: { label: 'Athlete message', type: 'message' } },
    ],
  },
  'bowler improving their pace': {
    days: [
      { day: 'Mon', title: 'Pace bowling session', details: '6-over spell, focus on run-up rhythm.', pill: { label: 'RPE 7/10', type: 'intensity' } },
      { day: 'Tue', title: 'Strength & power', details: 'Posterior chain work, med ball rotations.', pill: { label: 'RPE 8/10', type: 'intensity' } },
      { day: 'Wed', title: 'Recovery + review', details: 'Foam roll, video analysis of Monday\'s spell.', pill: { label: 'Active rest', type: 'rest' } },
      { day: 'Thu', title: 'Speed work', details: 'Short sprints 6×30m, bowling-specific agility.', pill: { label: 'Athlete tip received', type: 'message' }, highlight: true },
      { day: 'Fri', title: 'Match simulation', details: '10-over spell, fielding drills.', pill: { label: 'Plan adapted', type: 'update' } },
      { day: 'Sat', title: 'Light skills', details: 'Grip work, slower ball variations, stretching.', pill: { label: 'Check-in available', type: 'checkin' } },
      { day: 'Sun', title: 'Full rest', details: 'Recovery protocol, next week preview drops.', pill: { label: 'Athlete message', type: 'message' } },
    ],
  },
  'prop trying to build power': {
    days: [
      { day: 'Mon', title: 'Max strength', details: 'Squat, bench, deadlift — 5×3 heavy.', pill: { label: 'RPE 9/10', type: 'intensity' } },
      { day: 'Tue', title: 'Scrummaging technique', details: 'Live scrum practice, body positioning drills.', pill: { label: 'RPE 7/10', type: 'intensity' } },
      { day: 'Wed', title: 'Recovery', details: 'Pool session, upper body mobility.', pill: { label: 'Active rest', type: 'rest' } },
      { day: 'Thu', title: 'Power development', details: 'Clean & jerk, box jumps, sled push.', pill: { label: 'Athlete tip received', type: 'message' }, highlight: true },
      { day: 'Fri', title: 'Contact conditioning', details: 'Tackle bag circuits, wrestling drills.', pill: { label: 'Plan adapted', type: 'update' } },
      { day: 'Sat', title: 'Game day', details: 'Pre-game activation, trust the prep.', pill: { label: 'Check-in available', type: 'checkin' } },
      { day: 'Sun', title: 'Full rest', details: 'Cold water recovery, next week preview drops.', pill: { label: 'Athlete message', type: 'message' } },
    ],
  },
}

const personaOptions = Object.keys(personas)

function PillBadge({ pill }: { pill: { label: string; type: PillType } }) {
  if (pill.type === 'intensity') {
    return (
      <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[8px] font-medium uppercase tracking-wider border border-[color:var(--accent-border)] text-[color:var(--accent)] bg-[color:var(--accent-soft)]">
        {pill.label}
      </span>
    )
  }
  if (pill.type === 'rest') {
    return (
      <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[8px] font-medium uppercase tracking-wider bg-white/[0.05] border border-white/[0.08] text-white/30">
        {pill.label}
      </span>
    )
  }
  if (pill.type === 'message') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[8px] font-medium uppercase tracking-wider border border-[color:var(--accent-border)] text-[color:var(--accent)] bg-[color:var(--accent-soft)]">
        <MessageCircle className="h-2.5 w-2.5" strokeWidth={1.5} />
        {pill.label}
      </span>
    )
  }
  if (pill.type === 'update') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[8px] font-medium uppercase tracking-wider border border-[color:var(--accent-border)] text-[color:var(--accent)] bg-[color:var(--accent-soft)]">
        <Check className="h-2.5 w-2.5" strokeWidth={2} />
        {pill.label}
      </span>
    )
  }
  if (pill.type === 'checkin') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[8px] font-medium uppercase tracking-wider border border-[color:var(--accent-border)] text-[color:var(--accent)] bg-[color:var(--accent-soft)]">
        <CheckCircle2 className="h-2.5 w-2.5" strokeWidth={1.5} />
        {pill.label}
      </span>
    )
  }
  return null
}

export function HowItWorks() {
  const [selected, setSelected] = useState(personaOptions[0])
  const plan = personas[selected]

  return (
    <Section id="how-it-works">
      <Container>
        {/* Interactive subtitle with dropdown */}
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight mb-4">
            Your week on Athly
          </h2>
          <p className="text-[color:var(--text-muted)] text-base leading-relaxed inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>You&apos;re a</span>
            <span className="relative inline-flex items-center">
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="appearance-none bg-white/[0.06] border border-white/10 rounded-lg pl-3 pr-8 py-1 text-white font-medium text-base focus:border-[color:var(--accent-border)] focus:outline-none focus:ring-1 focus:ring-[color:var(--accent-border)] cursor-pointer transition-colors"
                style={{ colorScheme: 'dark' }}
              >
                {personaOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#0a0a0a]">
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/40 pointer-events-none" strokeWidth={2} />
            </span>
            <span>— here&apos;s what a week looks like.</span>
          </p>
        </div>
      </Container>

      <Reveal>
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="relative"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
              }}
            >
              <div
                className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 px-6 md:px-8"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {plan.days.map((d) => (
                  <div
                    key={d.day}
                    className={`w-[180px] flex-shrink-0 snap-start rounded-2xl p-4 backdrop-blur-xl transition-all duration-300 ${
                      d.highlight
                        ? 'bg-white/[0.06] border border-[color:var(--accent-border)]'
                        : 'bg-white/[0.04] border border-white/[0.07]'
                    }`}
                  >
                    <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${d.highlight ? 'text-[color:var(--accent)]' : 'text-white/30'}`}>
                      {d.day}
                    </p>
                    <p className="text-[13px] font-semibold text-white/80 leading-tight mb-1.5">
                      {d.title}
                    </p>
                    <p className="text-[11px] text-white/35 leading-snug mb-4">
                      {d.details}
                    </p>
                    <PillBadge pill={d.pill} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="text-sm text-white/35 text-center mt-8 px-6">
          Every week adapts. Message your athlete, adjust the plan, stay on track.
        </p>
      </Reveal>
    </Section>
  )
}
