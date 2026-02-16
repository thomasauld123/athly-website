'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/layout'
import { Button, Badge, Card, SectionHeader, Metric } from '@/components/ui'
import { DashboardArtifact } from '@/components/artifacts/DashboardArtifact'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function ForInvestorsPage() {
  return (
    <>
      {/* Hero */}
      <Section padding="none" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl space-y-6">
          <motion.div variants={fadeUp}>
            <Badge variant="accent">For Investors</Badge>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl font-semibold tracking-tight md:text-5xl">
            The infrastructure layer
            <br />for athlete-led products.
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg text-[var(--color-muted)]">
            Athly is building the operating system that lets athletes convert authority into
            productised, recurring revenue. We sit at the intersection of creator economy
            infrastructure and vertical SaaS for sport.
          </motion.p>
          <motion.div variants={fadeUp} className="flex gap-3">
            <Button href="/contact" variant="secondary" size="lg">
              Talk to us
            </Button>
          </motion.div>
        </motion.div>
      </Section>

      {/* Thesis */}
      <Section className="bg-[var(--color-surface-raised)]">
        <SectionHeader
          badge="Thesis"
          title="Why this market. Why now."
        />
        <motion.div variants={staggerContainer} className="grid gap-8 md:grid-cols-2">
          <motion.div variants={fadeUp} className="space-y-4">
            <h3 className="text-xl font-semibold">The wedge</h3>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Athletes have authority — trusted expertise that fans will pay for. But they lack the
              infrastructure to deliver it as a product. Current options are binary: free content
              (social media) or high-touch coaching (unscalable).
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Athly fills the gap. Productised guidance that adapts to each user, delivers measurable
              outcomes, and compounds over time — without requiring the athlete to be online.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-4">
            <h3 className="text-xl font-semibold">Why this team can ship</h3>
            <p className="text-[var(--color-muted)] leading-relaxed">
              We come from the intersection of product engineering, sports management, and AI
              infrastructure. We've built and scaled platforms in adjacent markets. We understand that
              the constraint isn't technology — it's trust, distribution, and athlete time management.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Our approach is operator-led: we build what works, measure what matters, and iterate on
              evidence rather than assumptions.
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* What's Being Validated */}
      <Section>
        <SectionHeader
          badge="Validation"
          title="What we're proving."
          description="We focus on behaviour, not compliments. These are the signals we track."
        />
        <motion.div variants={staggerContainer} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={fadeUp}>
            <Metric label="Time committed" value="3.2 hrs" change="avg. weekly per user" />
          </motion.div>
          <motion.div variants={fadeUp}>
            <Metric label="Manager approval" value="94%" change="would recommend to talent" />
          </motion.div>
          <motion.div variants={fadeUp}>
            <Metric label="Fan willingness to pay" value="$28" change="avg. monthly per user" />
          </motion.div>
          <motion.div variants={fadeUp}>
            <Metric label="Return rate" value="72%" change="30-day return engagement" />
          </motion.div>
        </motion.div>
      </Section>

      {/* Evidence We Track */}
      <Section className="bg-[var(--color-surface-raised)]">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionHeader
              badge="Evidence"
              title="Behaviour over narrative."
              description="We prioritise metrics that indicate real demand and retention, not vanity."
            />
            <motion.div variants={staggerContainer} className="space-y-4">
              {[
                { metric: 'Time invested', why: 'Users committing hours proves value delivery. We track weekly active minutes per user.' },
                { metric: 'Completion rate', why: 'Finishing tracks and modules indicates product-market fit for the guidance format.' },
                { metric: 'Willingness to pay', why: 'Conversion from free to paid, and pricing tolerance, measured through actual transactions.' },
                { metric: 'Return frequency', why: 'Users coming back without prompting is the strongest retention signal.' },
                { metric: 'Manager adoption', why: 'When managers actively deploy Athly for their athletes, it validates the B2B channel.' },
              ].map((item) => (
                <motion.div key={item.metric} variants={fadeUp} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                  <h4 className="mb-1 font-semibold text-sm">{item.metric}</h4>
                  <p className="text-sm text-[var(--color-muted)]">{item.why}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div variants={fadeUp} className="flex justify-center">
            <DashboardArtifact />
          </motion.div>
        </div>
      </Section>

      {/* Market Structure */}
      <Section>
        <SectionHeader
          badge="Market"
          title="Structural tailwinds."
        />
        <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Creator economy maturation',
              description: 'The tools exist for content creation. What\'s missing is product infrastructure — the ability to deliver outcomes, not just engagement.',
            },
            {
              title: 'AI-native expectations',
              description: 'Users increasingly expect personalised, adaptive experiences. Static content and one-size programs are losing ground to AI-enhanced delivery.',
            },
            {
              title: 'Athlete revenue diversification',
              description: 'As sponsorship concentrates, mid-tier athletes actively seek alternative revenue. The addressable market is underserved and growing.',
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
            Interested in the thesis?
          </h2>
          <p className="text-[var(--color-muted)]">
            We're happy to share more detail on traction, product roadmap, and market analysis.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Talk to us
          </Button>
        </motion.div>
      </Section>
    </>
  )
}
