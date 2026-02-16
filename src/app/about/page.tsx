'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/layout'
import { Button, Badge, Card, SectionHeader } from '@/components/ui'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section padding="none" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl space-y-6">
          <motion.div variants={fadeUp}>
            <Badge variant="accent">About</Badge>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl font-semibold tracking-tight md:text-5xl">
            Building the infrastructure
            <br />athletes deserve.
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg text-[var(--color-muted)]">
            Athly exists because athletes have expertise that should compound —
            not depreciate. We build the systems that make that possible.
          </motion.p>
        </motion.div>
      </Section>

      {/* Origin */}
      <Section className="bg-[var(--color-surface-raised)]">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div variants={fadeUp}>
            <SectionHeader
              badge="Origin"
              title="Why we started."
            />
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                We watched athletes build audiences on rented platforms, create content that didn't
                compound, and trade time for revenue in ways that couldn't scale.
              </p>
              <p>
                Meanwhile, their fans wanted something more than content — they wanted trusted,
                personalised guidance. The gap between what athletes could offer and what fans
                needed was a product problem, not a content problem.
              </p>
              <p>
                Athly started as a question: what if athletes could productise their expertise
                instead of performing it? What if guidance could be structured, personalised,
                and delivered at scale — without requiring the athlete to be always-on?
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <SectionHeader
              badge="Approach"
              title="How we think."
            />
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                We're operators, not storytellers. We measure behaviour, not sentiment.
                We ship working product and iterate on evidence.
              </p>
              <p>
                Our team sits at the intersection of product engineering, sports management,
                and AI infrastructure. We've built platforms in adjacent markets and understand
                the specific constraints of athlete-led businesses.
              </p>
              <p>
                We believe the best products are built with restraint. No feature bloat.
                No premature scale. Clear value delivery at every stage.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Principles */}
      <Section>
        <SectionHeader
          badge="Principles"
          title="What guides us."
        />
        <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Evidence over narrative',
              description: 'We track behaviour, not compliments. Every decision has a measurable hypothesis behind it.',
            },
            {
              title: 'Athlete time is sacred',
              description: 'If it takes an athlete more than a few hours to set up, we haven\'t done our job. Their time is for training.',
            },
            {
              title: 'Owned, not rented',
              description: 'Athletes should own their audience data, their revenue channels, and their product. We build infrastructure, not dependency.',
            },
            {
              title: 'Outcomes, not engagement',
              description: 'Retention follows results. We measure whether users improve, not just whether they scroll.',
            },
            {
              title: 'Restraint is a feature',
              description: 'We ship what matters and resist adding complexity. The best product is the simplest one that works.',
            },
            {
              title: 'Compounding over viral',
              description: 'We optimise for long-term value creation. Sustainable growth beats attention spikes every time.',
            },
          ].map((item) => (
            <Card key={item.title} hover={false}>
              <h3 className="mb-2 font-semibold">{item.title}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <Section className="bg-[var(--color-surface-raised)]">
        <motion.div variants={fadeUp} className="text-center max-w-xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Want to learn more?
          </h2>
          <p className="text-[var(--color-muted)]">
            Whether you're an investor, manager, or athlete — we'd like to hear from you.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Get in touch
          </Button>
        </motion.div>
      </Section>
    </>
  )
}
