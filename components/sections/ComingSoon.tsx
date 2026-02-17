'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { GlassCard } from '@/components/ui/glass-card'
import { FloatCluster } from '@/components/visual/FloatCluster'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Zap, CalendarCheck, Phone } from 'lucide-react'

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
    <section className="relative px-6" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Coming soon"
            subtitle="We're building Athly now. When it's ready, we'll open access in waves — starting with the waitlist."
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              {cadence.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <GlassCard className="p-5 h-full">
                    <item.icon className="h-4 w-4 mb-3" style={{ color: 'var(--accent)' }} strokeWidth={1.5} />
                    <p className="text-sm font-medium text-white/80 mb-1">{item.label}</p>
                    <p className="text-xs text-white/35 leading-relaxed">{item.detail}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <FloatCluster variant="drop" className="absolute -right-4 -top-8 hidden lg:block opacity-40" />
          </motion.div>

          <Separator className="mb-12" />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-white/50 uppercase tracking-wider mb-6 text-center">
              Questions
            </p>
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
