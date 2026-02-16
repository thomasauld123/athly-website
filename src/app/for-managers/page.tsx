'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/layout'
import { Button, Badge, Card, SectionHeader } from '@/components/ui'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function ForManagersPage() {
  return (
    <>
      {/* Hero */}
      <Section padding="none" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl space-y-6">
          <motion.div variants={fadeUp}>
            <Badge variant="accent">For Managers</Badge>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl font-semibold tracking-tight md:text-5xl">
            Repeatable revenue systems
            <br />for your athletes.
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg text-[var(--color-muted)]">
            Athly gives talent managers a controlled, measurable way to monetise athlete
            authority. Brand-safe. Time-efficient. Built for scale.
          </motion.p>
          <motion.div variants={fadeUp} className="flex gap-3">
            <Button href="/contact" variant="secondary" size="lg">
              Talk to us
            </Button>
          </motion.div>
        </motion.div>
      </Section>

      {/* What You Get */}
      <Section className="bg-[var(--color-surface-raised)]">
        <SectionHeader
          badge="What you get"
          title="Infrastructure that works for management."
        />
        <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Brand control',
              description: 'White-label deployment. Your athlete\'s brand, not ours. Full control over messaging, positioning, and presentation.',
            },
            {
              title: 'Time efficiency',
              description: 'Athletes contribute expertise in structured sessions — not ongoing content creation. Initial setup takes hours, not months.',
            },
            {
              title: 'Measurable outcomes',
              description: 'Real-time dashboards showing engagement, retention, revenue, and user progression. No vanity metrics.',
            },
            {
              title: 'Scalable operations',
              description: 'One infrastructure handles multiple athletes. Shared tooling, individual brands. Manage a portfolio, not individual projects.',
            },
            {
              title: 'Compliance-ready',
              description: 'Data handling, privacy controls, and content moderation built in. Designed for professional management requirements.',
            },
            {
              title: 'Revenue transparency',
              description: 'Clear attribution. Direct payment flows. No hidden fees or complex revenue shares. You see what your athletes earn.',
            },
          ].map((item) => (
            <Card key={item.title} hover={false}>
              <h3 className="mb-2 font-semibold">{item.title}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </motion.div>
      </Section>

      {/* What We Avoid */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeader
              badge="What we avoid"
              title="Designed with guardrails."
            />
            <motion.div variants={staggerContainer} className="space-y-3">
              {[
                'No "always-on" content demands — structured, time-boxed contributions only.',
                'No algorithmic dependency — owned audience, direct relationships.',
                'No brand risk — moderated, controlled, professional presentation.',
                'No complex integration — standalone or embeddable, minimal technical overhead.',
                'No vague ROI — measurable from day one, with clear attribution.',
                'No lock-in — data is portable, relationships belong to the athlete.',
              ].map((item) => (
                <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                  <span className="mt-0.5 text-[var(--color-accent)]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 7l3.5 3.5L12 3" />
                    </svg>
                  </span>
                  <p className="text-sm text-[var(--color-muted)]">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <SectionHeader
              badge="Workflow"
              title="How managers use Athly."
            />
            <motion.div variants={staggerContainer} className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Onboard athlete',
                  description: 'Structured knowledge capture sessions. We extract the expertise, organise it, and build the product.',
                },
                {
                  step: '02',
                  title: 'Configure brand',
                  description: 'Set up the athlete\'s product presence. White-label interface, pricing, positioning. Your team controls the brand.',
                },
                {
                  step: '03',
                  title: 'Launch and distribute',
                  description: 'Deploy through existing channels. Social, email, website embed. Drive traffic to an owned property.',
                },
                {
                  step: '04',
                  title: 'Monitor and optimise',
                  description: 'Real-time performance data. Engagement, retention, revenue. Identify what works and adjust.',
                },
              ].map((item) => (
                <motion.div key={item.step} variants={fadeUp} className="flex gap-4">
                  <span className="font-[family-name:var(--font-mono)] text-sm font-medium text-[var(--color-accent)]">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-[var(--color-muted)]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Multi-Athlete */}
      <Section className="bg-[var(--color-surface-raised)]">
        <SectionHeader
          badge="Portfolio"
          title="Built for multi-athlete management."
          description="If you manage multiple athletes, Athly scales with your roster. Shared infrastructure, individual products."
        />
        <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-3">
          {[
            { value: 'Shared ops', description: 'One dashboard for your entire roster. Centralised reporting, billing, and management.' },
            { value: 'Individual brands', description: 'Each athlete gets their own branded product. Different audiences, different positioning, same quality.' },
            { value: 'Consistent quality', description: 'Standardised onboarding, content moderation, and quality checks across all athletes.' },
          ].map((item) => (
            <Card key={item.value} hover={false}>
              <h3 className="mb-2 text-lg font-semibold">{item.value}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <Section>
        <motion.div variants={fadeUp} className="text-center max-w-xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Ready to explore?
          </h2>
          <p className="text-[var(--color-muted)]">
            We work with management teams to scope, build, and launch. No commitment required to start the conversation.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Talk to us
          </Button>
        </motion.div>
      </Section>
    </>
  )
}
