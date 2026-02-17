'use client'

import { SectionHeading } from '@/components/ui/section-heading'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/visual/Reveal'
import { GlassPanel } from '@/components/ui/glass-card'
import { Quote } from 'lucide-react'

const endorsements = [
  {
    quote: "I wish I'd had something like this when I was coming up. The kids training now deserve access to what actually works.",
    attribution: '— [Athlete], revealed at launch',
    gradient: 'from-emerald-600 to-teal-800',
  },
  {
    quote: "Most fitness apps give you a plan and leave you to it. This is different — it's built around how we actually train.",
    attribution: '— [Athlete], revealed at launch',
    gradient: 'from-sky-600 to-blue-800',
  },
  {
    quote: "I want to help people who are serious about getting better. Not just followers — athletes who actually put in the work.",
    attribution: '— [Athlete], revealed at launch',
    gradient: 'from-rose-600 to-pink-800',
  },
]

export function AthleteEndorsements() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="From the athletes"
          subtitle="Real words from the people building Athly with us."
        />

        <div className="grid md:grid-cols-3 gap-4">
          {endorsements.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <GlassPanel className="p-6 h-full flex flex-col">
                <Quote className="h-5 w-5 text-[color:var(--accent)] opacity-40 mb-4" strokeWidth={1.5} />

                <p className="text-sm text-white/60 leading-relaxed italic flex-1 mb-5">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.gradient} opacity-40`} />
                  <p className="text-[11px] text-white/30">{item.attribution}</p>
                </div>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
