'use client'

import { SectionHeading } from '@/components/ui/section-heading'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/visual/Reveal'
import { RosterCard } from './RosterCard'

const athletes = [
  { sport: 'AFL', teaser: 'Speed and agility under fatigue', gradient: 'from-emerald-600 to-teal-800', tier: 'Headline athlete' },
  { sport: 'Cricket', teaser: 'Match-day prep and recovery', gradient: 'from-sky-600 to-blue-800', tier: 'Headline athlete' },
  { sport: 'NRL', teaser: 'Strength under contact', gradient: 'from-amber-600 to-orange-800', tier: 'Launch athlete' },
  { sport: 'Football', teaser: 'Skill under pressure', gradient: 'from-rose-600 to-pink-800', tier: 'Headline athlete' },
  { sport: 'Olympics', teaser: 'Peak performance cycles', gradient: 'from-indigo-600 to-violet-800', tier: 'Launch athlete' },
  { sport: 'Surf', teaser: 'Functional mobility and power', gradient: 'from-cyan-600 to-teal-800', tier: 'Launch athlete' },
  { sport: 'Basketball', teaser: 'Explosive vertical training', gradient: 'from-orange-600 to-red-800', tier: 'Headline athlete' },
  { sport: 'Netball', teaser: 'Lateral movement and court speed', gradient: 'from-pink-600 to-rose-800', tier: 'Launch athlete' },
  { sport: 'Tennis', teaser: 'Rotational power and endurance', gradient: 'from-lime-600 to-green-800', tier: 'Launch athlete' },
  { sport: 'Rugby', teaser: 'Contact conditioning', gradient: 'from-yellow-600 to-amber-800', tier: 'Headline athlete' },
  { sport: 'Swimming', teaser: 'Aerobic base and turn speed', gradient: 'from-blue-600 to-indigo-800', tier: 'Launch athlete' },
  { sport: 'Athletics', teaser: 'Sprint mechanics and power', gradient: 'from-red-600 to-rose-800', tier: 'Launch athlete' },
]

const row1 = athletes.slice(0, 6)
const row2 = athletes.slice(6, 12)

export function RosterMarquee() {
  return (
    <Section id="athletes">
      <Container>
        <SectionHeading
          title="Launch roster"
          subtitle="Names stay hidden until launch. Waitlist members influence who drops first."
        />
      </Container>

      <Reveal>
        <div
          className="relative overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          {/* Row 1 - moves left */}
          <div className="flex animate-roster hover:[animation-play-state:paused] mb-4">
            <div className="flex gap-4 flex-shrink-0 pr-4">
              {row1.map((a, i) => <RosterCard key={`1a-${i}`} {...a} />)}
            </div>
            <div className="flex gap-4 flex-shrink-0 pr-4">
              {row1.map((a, i) => <RosterCard key={`1b-${i}`} {...a} />)}
            </div>
          </div>

          {/* Row 2 - moves right, scaled down for depth */}
          <div className="flex animate-roster-reverse hover:[animation-play-state:paused] scale-[0.92] opacity-80">
            <div className="flex gap-4 flex-shrink-0 pr-4">
              {row2.map((a, i) => <RosterCard key={`2a-${i}`} {...a} />)}
            </div>
            <div className="flex gap-4 flex-shrink-0 pr-4">
              {row2.map((a, i) => <RosterCard key={`2b-${i}`} {...a} />)}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
