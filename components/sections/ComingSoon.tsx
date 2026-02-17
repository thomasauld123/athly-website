'use client'

import { motion } from 'framer-motion'
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
import { Zap, CalendarCheck, Phone, Clock } from 'lucide-react'

const cadence = [
  { icon: Zap, label: 'Invite waves', detail: 'Access opens in waves. Waitlist members go first.' },
  { icon: CalendarCheck, label: 'Weekly drops', detail: 'New athletes and plans drop each week after launch.' },
  { icon: Phone, label: 'Limited check-ins', detail: 'Occasional access to athletes. Not guaranteed, not 24/7.' },
]

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
        <SectionHeading
          title="Coming soon"
          subtitle="We're building Athly now. When it's ready, we'll open access in waves — starting with the waitlist."
          align="left"
        />

        <div className="grid lg:grid-cols-[55fr_45fr] gap-10 lg:gap-16">
          {/* Left column — FAQ */}
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

          {/* Right column — Cadence + floating card */}
          <div className="relative">
            <Reveal delay={0.1}>
              <GlassPanel className="p-6 md:p-8">
                <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-white/50 uppercase tracking-wider mb-6">
                  Drop cadence
                </p>
                <div className="space-y-0">
                  {cadence.map((item, i) => (
                    <div
                      key={item.label}
                      className={`flex items-start gap-4 py-4 ${i < cadence.length - 1 ? 'border-b border-white/5' : ''}`}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg glass-surface flex items-center justify-center">
                        <item.icon className="h-4 w-4 text-[color:var(--accent)]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white/80 mb-0.5">{item.label}</p>
                        <p className="text-xs text-white/35 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </Reveal>

            {/* Floating "Next drop" card */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
              className="absolute -right-4 -bottom-4 hidden lg:flex items-center gap-2.5 glass-surface rounded-xl px-3.5 py-2.5 shadow-xl z-10"
            >
              <Clock className="h-4 w-4 text-[color:var(--accent)] flex-shrink-0" />
              <div>
                <p className="text-[10px] font-medium text-white/80">Next drop</p>
                <p className="text-[9px] text-white/40">3 days</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
