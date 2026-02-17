'use client'

import { SectionHeading } from '@/components/ui/section-heading'
import { GlassPanel } from '@/components/ui/glass-card'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/visual/Reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faq = [
  {
    question: 'When can I get access?',
    answer:
      'We\'re rolling out invite waves starting soon. Waitlist members get priority — the earlier you sign up, the earlier you\'re in.',
  },
  {
    question: 'What do I actually get?',
    answer:
      'One consolidated plan — training, skills, and recovery — shaped by an athlete\'s methodology and adapted to your goals. Plus messaging within the athlete\'s community for adjustments.',
  },
  {
    question: 'Can I talk to athletes directly?',
    answer:
      'Athly includes a community layer and occasional limited-access check-ins with athletes. This isn\'t guaranteed 1:1 coaching — it\'s structured so that coaching insight reaches you at scale, with real moments of connection built in.',
  },
]

export function ComingSoon() {
  return (
    <Section>
      <Container>
        <div className="max-w-[640px] mx-auto">
          <SectionHeading
            title="Coming soon"
            subtitle="We're building Athly now. When it's ready, we'll open access in waves — starting with the waitlist."
          />

          <Reveal>
            <GlassPanel className="p-6 md:p-8">
              <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-white/50 uppercase tracking-wider mb-6">
                Questions
              </p>
              <Accordion type="single" collapsible className="w-full">
                {faq.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-white/5 data-[state=open]:border-l-2 data-[state=open]:border-l-[color:var(--accent)] data-[state=open]:pl-4 transition-all">
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassPanel>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
