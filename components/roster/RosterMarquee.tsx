'use client'

import { SectionHeading } from '@/components/ui/section-heading'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/visual/Reveal'
import { RosterCard } from './RosterCard'

const athletes = [
  { sport: 'AFL', gradient: 'from-emerald-600 to-teal-800' },
  { sport: 'Cricket', gradient: 'from-sky-600 to-blue-800' },
  { sport: 'NRL', gradient: 'from-amber-600 to-orange-800' },
  { sport: 'Football', gradient: 'from-rose-600 to-pink-800' },
  { sport: 'Olympics', gradient: 'from-indigo-600 to-violet-800' },
  { sport: 'Surf', gradient: 'from-cyan-600 to-teal-800' },
  { sport: 'Basketball', gradient: 'from-orange-600 to-red-800' },
  { sport: 'Netball', gradient: 'from-pink-600 to-rose-800' },
  { sport: 'Tennis', gradient: 'from-lime-600 to-green-800' },
  { sport: 'Rugby', gradient: 'from-yellow-600 to-amber-800' },
  { sport: 'Swimming', gradient: 'from-blue-600 to-indigo-800' },
  { sport: 'Athletics', gradient: 'from-red-600 to-rose-800' },
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
