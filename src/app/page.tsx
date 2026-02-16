'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Section } from '@/components/layout'
import { Button, Badge, Card, SectionHeader } from '@/components/ui'
import { ChatArtifact } from '@/components/artifacts/ChatArtifact'
import { DashboardArtifact } from '@/components/artifacts/DashboardArtifact'
import { ProgressionArtifact } from '@/components/artifacts/ProgressionArtifact'
import { fadeUp, staggerContainer } from '@/lib/motion'

/* ─── Hero ─── */
function Hero() {
  return (
    <Section padding="none" className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6">
          <motion.div variants={fadeUp}>
            <Badge variant="accent">Athlete-owned revenue rails</Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
          >
            Convert authority into
            <br />
            compounding revenue.
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-lg text-lg text-[var(--color-muted)]">
            Athly builds AI-powered platforms for athletes and creators who want structured,
            productised guidance — without becoming full-time content machines.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <Button href="#how-it-works" variant="secondary" size="lg">
              See how it works
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Request access
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <ChatArtifact />
            <div className="absolute -right-4 -bottom-8 scale-75 origin-bottom-right">
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                <div className="space-y-2">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--color-muted)]">This month</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-[family-name:var(--font-heading)] text-xl font-semibold">78%</span>
                    <span className="text-[10px] text-[var(--color-success)]">+4%</span>
                  </div>
                  <p className="text-[10px] text-[var(--color-muted)]">Completion rate</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

/* ─── Credibility Strip ─── */
function CredibilityStrip() {
  const tokens = [
    'AFL pathways',
    'NRL performance',
    'Olympic programs',
    'Creator economy',
    'Sports management',
    'Fitness operators',
  ]

  return (
    <Section padding="tight" className="border-y border-[var(--color-border)] bg-[var(--color-surface-raised)]">
      <motion.div variants={fadeUp} className="text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
          Built with operators close to
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {tokens.map((token) => (
            <span
              key={token}
              className="rounded-full border border-[var(--color-border)] px-4 py-1.5 text-sm text-[var(--color-muted)]"
            >
              {token}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}

/* ─── Problem Section ─── */
function ProblemSection() {
  const problems = [
    {
      persona: 'Athletes',
      constraint: 'Time-bottlenecked',
      description:
        'Training, competing, and recovery consume most hours. Content creation doesn\'t compound. Sponsorship is concentrating toward fewer names. The window to build leverage is narrow.',
    },
    {
      persona: 'Fans',
      constraint: 'Underserved',
      description:
        'Fans want trusted, personalised guidance from people they respect. Generic programs don\'t retain. Communities without structure churn. There\'s no product between "follow me" and "hire a coach."',
    },
    {
      persona: 'Managers',
      constraint: 'Risk-averse',
      description:
        'Managers need repeatable, brand-safe revenue systems. Most creator tools require the athlete to be always-on. Measurement is vague. Scale without quality control is a liability.',
    },
  ]

  return (
    <Section>
      <SectionHeader
        badge="The problem"
        title="Three constraints. One gap."
        description="The current model asks athletes to trade time for attention. It doesn't scale, and it doesn't compound."
      />
      <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-3">
        {problems.map((p) => (
          <Card key={p.persona} hover={false}>
            <Badge variant="outline" className="mb-3">{p.persona}</Badge>
            <h3 className="mb-2 text-lg font-semibold">{p.constraint}</h3>
            <p className="text-sm leading-relaxed text-[var(--color-muted)]">{p.description}</p>
          </Card>
        ))}
      </motion.div>
    </Section>
  )
}

/* ─── How It Works ─── */
function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Capture expertise',
      description:
        'Athletes contribute knowledge through structured sessions. AI processes and organises guidance into deliverable formats.',
    },
    {
      number: '02',
      title: 'Productise delivery',
      description:
        'Guidance becomes personalised tracks: assessments, prescriptions, practice protocols, and progression milestones.',
    },
    {
      number: '03',
      title: 'Build owned audiences',
      description:
        'Fans engage through owned channels. Data stays with the athlete. Relationships deepen over time, not through algorithms.',
    },
    {
      number: '04',
      title: 'Compound revenue',
      description:
        'Retention mechanics drive recurring revenue. Each user\'s engagement feeds the next. The system scales without scaling athlete hours.',
    },
  ]

  return (
    <Section id="how-it-works">
      <SectionHeader
        badge="How it works"
        title="From authority to infrastructure."
        description="Four steps. Minimal athlete time. Maximum leverage."
      />
      <motion.div variants={staggerContainer} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <motion.div key={step.number} variants={fadeUp} className="space-y-3">
            <span className="font-[family-name:var(--font-mono)] text-sm font-medium text-[var(--color-accent)]">
              {step.number}
            </span>
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-sm leading-relaxed text-[var(--color-muted)]">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

/* ─── Why Now ─── */
function WhyNow() {
  const shifts = [
    {
      title: 'Sponsorship concentration',
      description: 'Fewer athletes capture a larger share. Mid-tier athletes need alternative revenue rails.',
    },
    {
      title: 'Deliverable inflation',
      description: 'Sponsors demand more content per dollar. The time cost per sponsorship dollar is rising.',
    },
    {
      title: 'Rented distribution',
      description: 'Social platforms own the audience. Algorithm changes wipe reach overnight. Athletes have followers, not customers.',
    },
    {
      title: 'AI personalisation',
      description: 'Users now expect personalised, adaptive experiences. Static content and programs can\'t compete.',
    },
  ]

  return (
    <Section className="bg-[var(--color-surface-raised)]">
      <SectionHeader
        badge="Why now"
        title="The market is shifting."
        description="Four structural changes are creating the conditions for athlete-owned product infrastructure."
      />
      <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-2">
        {shifts.map((shift) => (
          <motion.div
            key={shift.title}
            variants={fadeUp}
            className="flex gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
          >
            <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
            <div>
              <h3 className="mb-1 font-semibold">{shift.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">{shift.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

/* ─── Product Modules ─── */
function ProductModules() {
  return (
    <Section>
      <SectionHeader
        badge="Product"
        title="Infrastructure, not content."
        description="Four modules that work together. Each solves a specific constraint."
      />
      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div variants={staggerContainer} className="space-y-8">
          {[
            {
              title: 'Productised guidance engine',
              description:
                'AI-powered personalisation that transforms athlete expertise into structured, adaptive guidance. Each user gets a path tailored to their level, goals, and constraints.',
            },
            {
              title: 'Progression mechanics',
              description:
                'Assessment, prescription, practice, tracking, progression. Built-in retention mechanics that give users reasons to stay and measurable proof of outcomes.',
            },
            {
              title: 'Owned relationship rails',
              description:
                'Direct data, direct communication, direct monetisation. No platform intermediary. Athletes own the funnel from discovery to conversion to retention.',
            },
            {
              title: 'Multi-creator hub',
              description:
                'White-label capability for managers running multiple athletes. Shared infrastructure, individual brands. Consistent quality, scalable operations.',
            },
          ].map((module) => (
            <motion.div key={module.title} variants={fadeUp} className="space-y-2">
              <h3 className="text-lg font-semibold">{module.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">{module.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center justify-center gap-6"
        >
          <DashboardArtifact />
          <ProgressionArtifact />
        </motion.div>
      </div>
    </Section>
  )
}

/* ─── Persona Preview Cards ─── */
function PersonaPreview() {
  const personas = [
    {
      title: 'For Investors',
      angle: 'Thesis, wedge, and traction evidence.',
      description:
        'Understand the market structure, the product wedge, and the behavioural metrics we track. Evidence over narrative.',
      href: '/for-investors',
    },
    {
      title: 'For Managers',
      angle: 'Safety, repeatability, measurement.',
      description:
        'See how Athly fits into existing talent management workflows. Brand-safe, time-efficient, measurable.',
      href: '/for-managers',
    },
    {
      title: 'For Athletes',
      angle: 'Leverage without the time burden.',
      description:
        'Convert what you already know into a product that works while you train. Compounding revenue, owned audience.',
      href: '/for-athletes',
    },
  ]

  return (
    <Section className="bg-[var(--color-surface-raised)]">
      <SectionHeader
        badge="Learn more"
        title="Built for different stakeholders."
        align="center"
      />
      <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-3">
        {personas.map((p) => (
          <Card key={p.title} href={p.href}>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--color-accent)]">
              {p.angle}
            </p>
            <h3 className="mb-2 text-xl font-semibold">{p.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-[var(--color-muted)]">{p.description}</p>
            <span className="text-sm font-medium text-[var(--color-foreground)]">
              Learn more &rarr;
            </span>
          </Card>
        ))}
      </motion.div>
    </Section>
  )
}

/* ─── Resources Preview ─── */
function ResourcesPreview() {
  const posts = [
    {
      title: 'Sponsorship isn\'t dying. It\'s concentrating.',
      summary: 'The top 5% of athletes capture an increasing share of sponsorship revenue. What does this mean for everyone else?',
      tag: 'Market',
      href: '/resources/sponsorship-concentration',
    },
    {
      title: 'Community without progression mechanics churns.',
      summary: 'Why most athlete communities plateau at 90 days, and what retention actually requires.',
      tag: 'Product',
      href: '/resources/community-progression-mechanics',
    },
    {
      title: 'The wedge: scaling trust without scaling hours.',
      summary: 'How productised guidance creates leverage without demanding more of the athlete\'s time.',
      tag: 'Strategy',
      href: '/resources/scaling-trust-wedge',
    },
  ]

  return (
    <Section>
      <div className="flex items-end justify-between mb-12">
        <SectionHeader
          badge="Resources"
          title="Thinking in public."
          description="Strategy, product, and market analysis. Written by operators."
        />
        <Link
          href="/resources"
          className="hidden text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)] md:block"
        >
          View all &rarr;
        </Link>
      </div>
      <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.title} href={post.href}>
            <Badge className="mb-3">{post.tag}</Badge>
            <h3 className="mb-2 text-lg font-semibold leading-snug">{post.title}</h3>
            <p className="text-sm leading-relaxed text-[var(--color-muted)]">{post.summary}</p>
          </Card>
        ))}
      </motion.div>
      <div className="mt-8 text-center md:hidden">
        <Button href="/resources" variant="secondary" size="sm">
          View all resources
        </Button>
      </div>
    </Section>
  )
}

/* ─── Page ─── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <ProblemSection />
      <HowItWorks />
      <WhyNow />
      <ProductModules />
      <PersonaPreview />
      <ResourcesPreview />
    </>
  )
}
