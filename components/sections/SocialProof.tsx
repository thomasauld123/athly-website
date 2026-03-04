'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/visual/Reveal'
import { StatusBar, Notch } from '@/components/PhoneMockups'
import { CheckCircle2, Lock, Flame } from 'lucide-react'

function PlanScreen() {
  return (
    <div className="flex flex-col h-full">
      <Notch />
      <StatusBar />

      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
        <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-white">Your plan</span>
        <span className="text-[9px] font-medium uppercase tracking-wider text-[color:var(--accent)]">Week 4</span>
      </div>

      <div className="flex-1 px-3 py-3 flex flex-col gap-2 overflow-hidden">
        {[
          { day: 'MON', session: 'Speed intervals', detail: '8 × 200m @ 85%', tag: 'Track' },
          { day: 'WED', session: 'Skill drills', detail: 'Ball control + 1v1', tag: 'Field' },
          { day: 'FRI', session: 'Hill repeats', detail: '6 × 60m incline', tag: 'Strength' },
          { day: 'SAT', session: 'Game day', detail: 'Full match — rest after', tag: 'Competition' },
        ].map((item) => (
          <div key={item.day} className="flex items-center gap-2.5 rounded-xl bg-white/[0.05] px-3 py-2.5">
            <span className="text-[9px] font-bold uppercase tracking-widest text-white/30 w-7 flex-shrink-0">{item.day}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-white/80 leading-tight">{item.session}</p>
              <p className="text-[10px] text-white/35 mt-0.5">{item.detail}</p>
            </div>
            <span className="text-[8px] font-medium uppercase tracking-wider rounded-full px-2 py-0.5 border border-[color:var(--accent-border)] text-[color:var(--accent)] bg-[color:var(--accent-soft)] flex-shrink-0">{item.tag}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MessagingScreen() {
  return (
    <div className="flex flex-col h-full">
      <Notch />
      <StatusBar />

      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
        <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-white">Messages</span>
        <span className="text-[9px] font-medium uppercase tracking-wider rounded-full px-2 py-0.5 bg-[color:var(--accent-soft)] border border-[color:var(--accent-border)] text-[color:var(--accent)]">Verified</span>
      </div>

      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
        <div className="w-8 h-8 rounded-full flex-shrink-0 ring-1 ring-[color:var(--accent-border)]" style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }} />
        <div className="flex items-center gap-1">
          <Lock className="h-2.5 w-2.5 text-white/30" />
          <span className="text-[9px] text-white/30">Hidden until launch</span>
        </div>
      </div>

      <div className="flex-1 px-3 py-3 flex flex-col gap-2.5 overflow-hidden">
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-br-md px-3 py-2 bg-[color:var(--accent-soft)] border border-[color:var(--accent-border)]">
            <p className="text-[10px] text-white/80 leading-snug">Hamstring tight before Friday — should I push through?</p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white/[0.08] border border-white/10 px-3 py-2">
            <p className="text-[9px] font-semibold text-[color:var(--accent)] mb-1">Your athlete</p>
            <p className="text-[10px] text-white/70 leading-snug">Swap hills for a 20min tempo instead. Don't risk it before game day.</p>
          </div>
        </div>

        <div className="flex justify-center mt-1">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] border border-white/10 px-3 py-1">
            <CheckCircle2 className="h-3 w-3 text-[color:var(--accent)]" />
            <span className="text-[9px] font-medium text-white/60">Plan adjusted</span>
          </div>
        </div>
      </div>

      <div className="px-3 pb-4 pt-1">
        <div className="flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-2">
          <span className="text-[10px] text-white/25 flex-1">Message...</span>
          <svg className="h-3.5 w-3.5 text-white/30" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function ProgressScreen() {
  return (
    <div className="flex flex-col h-full">
      <Notch />
      <StatusBar />

      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
        <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-white">Progress</span>
      </div>

      <div className="flex-1 px-3 py-3 flex flex-col gap-3 overflow-hidden">
        <div className="rounded-xl bg-white/[0.05] px-3 py-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-[11px] font-semibold text-white/80">Level 12 — Committed</p>
              <p className="text-[9px] text-white/35 mt-0.5">3,200 XP to next level</p>
            </div>
            <span className="text-[10px] font-bold text-[color:var(--accent)]">Lv.12</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
            <div className="h-full rounded-full bg-[color:var(--accent)] w-[75%]" />
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-white/[0.05] px-3 py-2.5">
          <Flame className="h-5 w-5 text-amber-400 flex-shrink-0" strokeWidth={1.5} />
          <div>
            <p className="text-[11px] font-semibold text-white/80">14-day streak</p>
            <p className="text-[9px] text-white/35">Best: 21 days</p>
          </div>
        </div>

        <div>
          <p className="text-[9px] font-medium uppercase tracking-wider text-white/25 mb-2 px-0.5">Achievements</p>
          <div className="flex gap-1.5">
            {[
              { label: 'First check-in', done: true },
              { label: '7-day streak', done: true },
              { label: '30-day streak', done: false },
            ].map((a) => (
              <div
                key={a.label}
                className={`flex-1 rounded-lg px-1.5 py-1.5 flex flex-col items-center gap-1 border ${
                  a.done
                    ? 'bg-[color:var(--accent-soft)] border-[color:var(--accent-border)]'
                    : 'bg-white/[0.03] border-white/[0.06]'
                }`}
              >
                {a.done ? (
                  <CheckCircle2 className="h-3 w-3 text-[color:var(--accent)]" strokeWidth={2} />
                ) : (
                  <Lock className="h-3 w-3 text-white/20" strokeWidth={1.5} />
                )}
                <p className={`text-[8px] text-center leading-tight ${a.done ? 'text-white/60' : 'text-white/20'}`}>{a.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white/[0.05] border border-[color:var(--accent-border)] px-3 py-3">
          <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[color:var(--accent)] mb-2">New workout unlocked</p>
          <div className="h-px bg-white/[0.06] mb-2" />
          <p className="text-[11px] font-semibold text-white/80 mb-0.5">&ldquo;Elite sprint circuit&rdquo;</p>
          <p className="text-[9px] text-white/35 mb-2.5">Unlocked at Level 10</p>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--accent-soft)] border border-[color:var(--accent-border)] px-3 py-1">
            <span className="text-[9px] font-medium text-[color:var(--accent)]">Start workout →</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const phones = [
  { label: 'YOUR PLAN', screen: <PlanScreen /> },
  { label: 'YOUR CONVERSATIONS', screen: <MessagingScreen /> },
  { label: 'YOUR PROGRESS', screen: <ProgressScreen /> },
]

// Phone dimensions for scroll math
const PHONE_W = 280
const PHONE_GAP = 24
const PHONE_STEP = PHONE_W + PHONE_GAP // 304px per phone

function DesktopPinnedSequence() {
  const outerRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start start', 'end end'],
  })

  // Strip slides left to reveal phones sequentially
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [0, -(PHONE_STEP * (phones.length - 1))]
  )

  // Per-phone opacity curves — full when centered, dim otherwise
  const opacity0 = useTransform(scrollYProgress, [0, 0.25, 0.42], [1, 1, 0.3])
  const opacity1 = useTransform(scrollYProgress, [0.28, 0.42, 0.58, 0.72], [0.3, 1, 1, 0.3])
  const opacity2 = useTransform(scrollYProgress, [0.58, 0.75, 1], [0.3, 1, 1])
  const opacities = [opacity0, opacity1, opacity2]

  // Progress dot opacities (bright when active)
  const dot0 = useTransform(scrollYProgress, [0, 0.33], [1, 0.3])
  const dot1 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.3, 1, 0.3])
  const dot2 = useTransform(scrollYProgress, [0.67, 1], [0.3, 1])
  const dotOpacities = [dot0, dot1, dot2]

  return (
    <div ref={outerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden py-16">
        <div className="mb-10 px-4 text-center">
          <SectionHeading
            title="Built around how you actually train"
            subtitle="Not another dashboard you'll forget to open. One place for your plan, your athlete, and your progress."
          />
        </div>

        {/* Phone strip — centered on phone 0 by default, slides left on scroll */}
        <div className="w-full overflow-hidden flex items-center">
          <motion.div
            style={{ x, paddingLeft: `calc(50vw - ${PHONE_W / 2}px)` }}
            className="flex"
            // gap as inline style because Tailwind gap + paddingLeft need to be consistent
          >
            {phones.map((phone, i) => (
              <motion.div
                key={phone.label}
                style={{
                  opacity: opacities[i],
                  marginRight: i < phones.length - 1 ? `${PHONE_GAP}px` : 0,
                }}
                className="flex flex-col items-center flex-shrink-0"
              >
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/30 mb-4">
                  {phone.label}
                </p>
                <div
                  className="rounded-[32px] bg-white/[0.06] border border-white/[0.10] backdrop-blur-xl overflow-hidden"
                  style={{
                    width: `${PHONE_W}px`,
                    height: '500px',
                    boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.08), 0 25px 50px -12px rgba(0,0,0,0.5)',
                  }}
                >
                  {phone.screen}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll progress dots */}
        <div className="flex gap-2 mt-8">
          {phones.map((_, i) => (
            <motion.div
              key={i}
              style={{ opacity: dotOpacities[i] }}
              className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileStaticLayout() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="Built around how you actually train"
          subtitle="Not another dashboard you'll forget to open. One place for your plan, your athlete, and your progress."
        />
      </Container>

      <Reveal>
        <div
          className="overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6 min-w-max mx-auto px-6 md:px-8 justify-center">
            {phones.map((phone, i) => (
              <div key={phone.label} className="flex flex-col items-center" style={{ animationDelay: `${i * 0.1}s` }}>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/30 mb-4">
                  {phone.label}
                </p>
                <div
                  className="w-[260px] sm:w-[280px] h-[500px] rounded-[32px] bg-white/[0.06] border border-white/[0.10] backdrop-blur-xl overflow-hidden flex-shrink-0"
                  style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.08), 0 25px 50px -12px rgba(0,0,0,0.5)' }}
                >
                  {phone.screen}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export function SocialProof() {
  const reduced = useReducedMotion()

  if (reduced) {
    return <MobileStaticLayout />
  }

  return (
    <>
      {/* Desktop: pinned scroll sequence */}
      <div className="hidden lg:block">
        <DesktopPinnedSequence />
      </div>
      {/* Mobile: static horizontal scroll */}
      <div className="lg:hidden">
        <MobileStaticLayout />
      </div>
    </>
  )
}
