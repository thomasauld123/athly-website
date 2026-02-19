'use client'

import { SectionHeading } from '@/components/ui/section-heading'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/visual/Reveal'

const days = [
  {
    day: 'Mon',
    session: 'Speed intervals',
    detail: '8 × 200m @ 85%',
    pills: ['Track', 'Pre-season'],
    highlight: false,
  },
  {
    day: 'Tue',
    session: 'Recovery',
    detail: 'Light stretch + foam roll',
    pills: ['Rest'],
    highlight: false,
  },
  {
    day: 'Wed',
    session: 'Skill drills',
    detail: 'Ball control, 1v1 pressure',
    pills: ['Field', 'Skills'],
    tip: 'Athlete tip received',
    highlight: true,
  },
  {
    day: 'Thu',
    session: 'Gym — lower body',
    detail: 'Squats, lunges, hip work',
    pills: ['Strength'],
    highlight: false,
  },
  {
    day: 'Fri',
    session: 'Hill repeats',
    detail: '6 × 60m incline',
    pills: ['Conditioning'],
    highlight: false,
  },
  {
    day: 'Sat',
    session: 'Game day',
    detail: 'Full match — play your game',
    pills: ['Competition'],
    highlight: false,
  },
  {
    day: 'Sun',
    session: 'Full rest',
    detail: 'Sleep, hydrate, reflect',
    pills: ['Recovery'],
    highlight: false,
  },
]

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container>
        <SectionHeading
          title="Your week on Athly"
          subtitle="You're a midfielder preparing for pre-season. Here's what a week looks like."
        />
      </Container>

      <Reveal>
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
            {days.map((d) => (
              <div
                key={d.day}
                className={`w-[180px] flex-shrink-0 snap-start rounded-2xl p-4 backdrop-blur-xl transition-all duration-300 ${
                  d.highlight
                    ? 'bg-white/[0.06] border border-[color:var(--accent-border)]'
                    : 'bg-white/[0.04] border border-white/[0.07]'
                }`}
              >
                {/* Day label */}
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${d.highlight ? 'text-[color:var(--accent)]' : 'text-white/30'}`}>
                  {d.day}
                </p>

                {/* Session name */}
                <p className="text-[13px] font-semibold text-white/80 leading-tight mb-1.5">
                  {d.session}
                </p>

                {/* Detail */}
                <p className="text-[11px] text-white/35 leading-snug mb-4">
                  {d.detail}
                </p>

                {/* Athlete tip badge */}
                {d.tip && (
                  <div className="flex items-center gap-1.5 rounded-full bg-[color:var(--accent-soft)] border border-[color:var(--accent-border)] px-2.5 py-1 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)] flex-shrink-0" />
                    <span className="text-[8px] font-medium uppercase tracking-wider text-[color:var(--accent)] leading-none">{d.tip}</span>
                  </div>
                )}

                {/* Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {d.pills.map((pill) => (
                    <span
                      key={pill}
                      className="text-[8px] font-medium uppercase tracking-wider rounded-full px-2 py-0.5 bg-white/[0.05] border border-white/[0.08] text-white/30"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-white/35 text-center mt-8 px-6">
          Every week adapts. Message your athlete, adjust the plan, stay on track.
        </p>
      </Reveal>
    </Section>
  )
}
