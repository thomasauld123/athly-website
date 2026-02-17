'use client'

import { motion } from 'framer-motion'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const timeline = [
  { label: 'Roster locked', status: 'active' as const },
  { label: 'Early access invites', status: 'upcoming' as const },
  { label: 'Public launch', status: 'upcoming' as const },
]

const faq = [
  {
    question: 'When can I get access?',
    answer:
      'We\'re rolling out invite waves starting soon. Waitlist members get priority. The earlier you sign up, the earlier you\'re in.',
  },
  {
    question: 'Is this a training plan or a content library?',
    answer:
      'Neither, exactly. Athly gives you one consolidated plan — training, skills, and recovery — shaped by an athlete\'s methodology and adapted to your goals and schedule. It\'s not a library you browse. It\'s a plan you follow.',
  },
  {
    question: 'Can I interact with athletes?',
    answer:
      'Athly includes a community layer and occasional limited-access moments with athletes. This isn\'t guaranteed 1:1 coaching — it\'s structured so that coaching insight reaches you at scale, with real moments of connection built in.',
  },
]

export function ComingSoon() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Coming soon
          </h2>
          <p className="text-lg text-white/60 font-medium mb-3">
            Athly isn&apos;t live yet — this is an early preview.
          </p>
          <p className="text-sm text-white/40 max-w-lg mx-auto leading-relaxed">
            We&apos;re building the first version now. When it&apos;s ready, we&apos;ll open access
            in waves — starting with the waitlist. You&apos;ll be the first to know.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-6 mb-12"
        >
          <div className="flex items-center justify-between gap-2">
            {timeline.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2 flex-1">
                <div className="flex items-center gap-3 flex-1">
                  <div
                    className={`w-3 h-3 rounded-full flex-shrink-0 ${
                      step.status === 'active'
                        ? 'bg-violet-500 shadow-lg shadow-violet-500/30'
                        : 'bg-white/15'
                    }`}
                  />
                  <span
                    className={`text-xs font-medium whitespace-nowrap ${
                      step.status === 'active' ? 'text-white' : 'text-white/40'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {i < timeline.length - 1 && (
                  <div className="h-px flex-1 bg-white/10 mx-2 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <Separator className="mb-12" />

        {/* FAQ */}
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
    </section>
  )
}
