'use client'

import { SectionHeading } from '@/components/ui/section-heading'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/visual/Reveal'
import { RosterCard } from './RosterCard'

const athletes = [
  { sport: 'AFL' },
  { sport: 'Cricket' },
  { sport: 'NRL' },
  { sport: 'Football' },
  { sport: 'Olympics' },
  { sport: 'Surf' },
  { sport: 'Basketball' },
  { sport: 'Netball' },
  { sport: 'Tennis' },
  { sport: 'Rugby' },
  { sport: 'Swimming' },
  { sport: 'Athletics' },
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
