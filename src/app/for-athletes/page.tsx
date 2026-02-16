'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/layout'
import { Button, Badge, Card, SectionHeader } from '@/components/ui'
import { ChatArtifact } from '@/components/artifacts/ChatArtifact'
import { ProgressionArtifact } from '@/components/artifacts/ProgressionArtifact'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function ForAthletesPage() {
  return (
    <>
      {/* Hero */}
      <Section padding="none" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl space-y-6">
          <motion.div variants={fadeUp}>
            <Badge variant="accent">For Athletes</Badge>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl font-semibold tracking-tight md:text-5xl">
            Your knowledge is an asset.
            <br />Make it work for you.
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg text-[var(--color-muted)]">
            You've spent years building expertise. Athly turns that into a product that
            earns while you train — structured, personal, and completely yours.
          </motion.p>
          <motion.div variants={fadeUp} className="flex gap-3">
            <Button href="/contact" variant="secondary" size="lg">
              Request access
            </Button>
          </motion.div>
        </motion.div>
      </Section>

      {/* The Opportunity */}
      <Section className="bg-[var(--color-surface-raised)]">
        <SectionHeader
          badge="The opportunity"
          title="Revenue that compounds. Time that doesn't."
          description="Current options ask you to trade hours for income. Athly builds systems that scale without scaling your time."
        />
        <motion.div variants={staggerContainer} className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div variants={fadeUp} className="space-y-6">
            {[
              {
                title: 'Leverage, not hustle',
                description: 'You contribute your expertise once through structured sessions. AI handles personalisation and delivery. Your knowledge works around the clock.',
              },
              {
                title: 'Owned audience',
                description: 'Stop renting attention on social platforms. Build a direct relationship with people who trust your guidance. Your data. Your community.',
              },
              {
                title: 'Compounding returns',
                description: 'Each user interaction feeds the system. Better guidance, higher retention, growing revenue. The product improves as it scales.',
              },
              {
                title: 'No content treadmill',
                description: 'This isn\'t about posting daily or building a media brand. It\'s about packaging what you know into something people pay for and return to.',
              },
            ].map((item) => (
              <div key={item.title} className="space-y-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-6">
            <ChatArtifact />
          </motion.div>
        </motion.div>
      </Section>

      {/* How It Works for Athletes */}
      <Section>
        <SectionHeader
          badge="Your process"
          title="Built around your schedule."
          description="We designed the process to respect your time. Here's what it looks like."
        />
        <motion.div variants={staggerContainer} className="grid gap-8 md:grid-cols-2 items-start">
          <motion.div variants={fadeUp} className="space-y-8">
            {[
              {
                step: '01',
                title: 'Share what you know',
                description: 'We run structured sessions to capture your expertise — training philosophy, technique cues, programming logic, recovery protocols. A few hours, not a few months.',
              },
              {
                step: '02',
                title: 'We build the product',
                description: 'AI organises your knowledge into personalised guidance tracks. Each user gets a tailored experience based on their level, goals, and constraints.',
              },
              {
                step: '03',
                title: 'Your fans engage',
                description: 'Users follow structured progressions. They get assessments, prescriptions, practice protocols, and measurable milestones. Real outcomes, not just motivation.',
              },
              {
                step: '04',
                title: 'Revenue flows',
                description: 'Subscription-based. Users pay monthly. You earn continuously. Retention mechanics keep engagement high. Revenue compounds as your audience grows.',
              },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeUp} className="flex gap-4">
                <span className="font-[family-name:var(--font-mono)] text-sm font-medium text-[var(--color-accent)]">
                  {item.step}
                </span>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="flex justify-center">
            <ProgressionArtifact />
          </motion.div>
        </motion.div>
      </Section>

      {/* What This Isn't */}
      <Section className="bg-[var(--color-surface-raised)]">
        <SectionHeader
          badge="Straight talk"
          title="What this isn't."
          description="We'd rather be clear than impressive. Here's what Athly is not."
        />
        <motion.div variants={staggerContainer} className="grid gap-4 md:grid-cols-2">
          {[
            'Not a get-rich-quick scheme. Revenue builds over time through real engagement.',
            'Not a content platform. You don\'t need to post, film, or be online.',
            'Not a coaching marketplace. This is your product, not a listing in someone else\'s directory.',
            'Not a social media tool. We build owned infrastructure, not rented reach.',
            'Not passive income. Your expertise drives it, but the system handles scale.',
            'Not vaporware. We ship working product and measure outcomes.',
          ].map((item) => (
            <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <span className="mt-0.5 flex-shrink-0 text-[var(--color-muted)]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 3l8 8M11 3l-8 8" />
                </svg>
              </span>
              <p className="text-sm text-[var(--color-muted)]">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Who It's For */}
      <Section>
        <SectionHeader
          badge="Fit"
          title="Athly works best for athletes who..."
        />
        <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Have domain authority',
              description: 'You\'ve competed, coached, or operated at a level where people trust your guidance. Doesn\'t require fame — requires earned expertise.',
            },
            {
              title: 'Want leverage, not scale',
              description: 'You\'re looking for systems that work without demanding more of your time. You want to build something, not become a media company.',
            },
            {
              title: 'Think long-term',
              description: 'You\'re building for compounding returns over months and years. Not chasing a quick audience spike. Sustainable revenue over viral moments.',
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
            Curious?
          </h2>
          <p className="text-[var(--color-muted)]">
            We'll walk you through how it works, what's involved, and whether it's a fit.
            No pitch deck. Just a conversation.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Request access
          </Button>
        </motion.div>
      </Section>
    </>
  )
}
