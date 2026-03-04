'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2, Lock, Flame } from 'lucide-react'
import { StatusBar, Notch } from '@/components/PhoneMockups'

gsap.registerPlugin(ScrollTrigger)

/* ─── Screen components ─── */
function PlanScreen() {
  return (
    <div className="flex flex-col h-full">
      <Notch />
      <StatusBar />
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
        <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-white">Your plan</span>
        <span className="text-[9px] font-medium uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Week 4</span>
      </div>
      <div className="flex-1 px-3 py-3 flex flex-col gap-2 overflow-hidden">
        {[
          { day: 'MON', session: 'Speed intervals', detail: '8 × 200m @ 85%', tag: 'Track' },
          { day: 'WED', session: 'Skill drills', detail: 'Ball control + 1v1', tag: 'Field' },
          { day: 'FRI', session: 'Hill repeats', detail: '6 × 60m incline', tag: 'Strength' },
          { day: 'SAT', session: 'Game day', detail: 'Full match — rest after', tag: 'Competition' },
        ].map((item) => (
          <div key={item.day} className="plan-row flex items-center gap-2.5 rounded-xl bg-white/[0.05] px-3 py-2.5">
            <span className="text-[9px] font-bold uppercase tracking-widest text-white/30 w-7 flex-shrink-0">{item.day}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-white/80 leading-tight">{item.session}</p>
              <p className="text-[10px] text-white/35 mt-0.5">{item.detail}</p>
            </div>
            <span
              className="text-[8px] font-medium uppercase tracking-wider rounded-full px-2 py-0.5 border flex-shrink-0"
              style={{ borderColor: 'var(--accent-border)', color: 'var(--accent)', background: 'var(--accent-soft)' }}
            >{item.tag}</span>
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
        <span
          className="text-[9px] font-medium uppercase tracking-wider rounded-full px-2 py-0.5 border"
          style={{ background: 'var(--accent-soft)', borderColor: 'var(--accent-border)', color: 'var(--accent)' }}
        >Verified</span>
      </div>
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
        <div className="w-8 h-8 rounded-full flex-shrink-0 ring-1 ring-[color:var(--accent-border)]" style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }} />
        <div className="flex items-center gap-1">
          <Lock className="h-2.5 w-2.5 text-white/30" />
          <span className="text-[9px] text-white/30">Hidden until launch</span>
        </div>
      </div>
      <div className="flex-1 px-3 py-3 flex flex-col gap-2.5 overflow-hidden">
        <div className="msg-bubble flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-br-md px-3 py-2 border" style={{ background: 'var(--accent-soft)', borderColor: 'var(--accent-border)' }}>
            <p className="text-[10px] text-white/80 leading-snug">Hamstring tight before Friday — should I push through?</p>
          </div>
        </div>
        <div className="msg-bubble flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white/[0.08] border border-white/10 px-3 py-2">
            <p className="text-[9px] font-semibold mb-1" style={{ color: 'var(--accent)' }}>Your athlete</p>
            <p className="text-[10px] text-white/70 leading-snug">Swap hills for a 20min tempo instead. Don&apos;t risk it before game day.</p>
          </div>
        </div>
        <div className="msg-bubble flex justify-center mt-1">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] border border-white/10 px-3 py-1">
            <CheckCircle2 className="h-3 w-3" style={{ color: 'var(--accent)' }} />
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
        <div className="xp-card rounded-xl bg-white/[0.05] px-3 py-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-[11px] font-semibold text-white/80">Level 12 — Committed</p>
              <p className="text-[9px] text-white/35 mt-0.5">3,200 XP to next level</p>
            </div>
            <span className="text-[10px] font-bold" style={{ color: 'var(--accent)' }}>Lv.12</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
            <div className="xp-bar h-full rounded-full" style={{ width: '0%', background: 'var(--accent)' }} />
          </div>
        </div>
        <div className="streak-card flex items-center gap-3 rounded-xl bg-white/[0.05] px-3 py-2.5">
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
                className={`achievement-item flex-1 rounded-lg px-1.5 py-1.5 flex flex-col items-center gap-1 border ${a.done ? 'border-[color:var(--accent-border)]' : 'bg-white/[0.03] border-white/[0.06]'}`}
                style={a.done ? { background: 'var(--accent-soft)' } : undefined}
              >
                {a.done
                  ? <CheckCircle2 className="h-3 w-3" strokeWidth={2} style={{ color: 'var(--accent)' }} />
                  : <Lock className="h-3 w-3 text-white/20" strokeWidth={1.5} />}
                <p className={`text-[8px] text-center leading-tight ${a.done ? 'text-white/60' : 'text-white/20'}`}>{a.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="unlock-card rounded-xl bg-white/[0.05] border border-[color:var(--accent-border)] px-3 py-3">
          <p className="text-[8px] font-bold uppercase tracking-[0.12em] mb-2" style={{ color: 'var(--accent)' }}>New workout unlocked</p>
          <div className="h-px bg-white/[0.06] mb-2" />
          <p className="text-[11px] font-semibold text-white/80 mb-0.5">&ldquo;Elite sprint circuit&rdquo;</p>
          <p className="text-[9px] text-white/35 mb-2.5">Unlocked at Level 10</p>
          <div className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1" style={{ background: 'var(--accent-soft)', borderColor: 'var(--accent-border)' }}>
            <span className="text-[9px] font-medium" style={{ color: 'var(--accent)' }}>Start workout →</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const SLIDE_LABELS = ['YOUR PLAN', 'YOUR CONVERSATIONS', 'YOUR PROGRESS']
const SLIDE_SCREENS = [<PlanScreen key={0} />, <MessagingScreen key={1} />, <ProgressScreen key={2} />]

export function SocialProof() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const slideRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]
  const labelRefs = [
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
  ]

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      // Initial hidden states
      gsap.set([slideRefs[1].current, slideRefs[2].current], { opacity: 0, y: 20 })
      gsap.set([labelRefs[1].current, labelRefs[2].current], { opacity: 0 })
      gsap.set(slideRefs[0].current?.querySelectorAll('.plan-row') ?? [], { opacity: 0, x: -14 })
      gsap.set(slideRefs[1].current?.querySelectorAll('.msg-bubble') ?? [], { opacity: 0, y: 10 })
      gsap.set(slideRefs[2].current?.querySelector('.xp-bar') ?? null, { width: '0%' })
      gsap.set(slideRefs[2].current?.querySelector('.streak-card') ?? null, { opacity: 0, x: -14 })
      gsap.set(slideRefs[2].current?.querySelectorAll('.achievement-item') ?? [], { opacity: 0, scale: 0.82 })
      gsap.set(slideRefs[2].current?.querySelector('.unlock-card') ?? null, { opacity: 0, y: 12 })

      const tl = gsap.timeline({ paused: true, defaults: { ease: 'power2.inOut' } })

      // Heading entrance
      tl.from(headingRef.current, { opacity: 0, y: 20, duration: 0.5 }, 0)

      // Slide 1: plan rows stagger in
      tl.to(slideRefs[0].current?.querySelectorAll('.plan-row') ?? [], {
        opacity: 1, x: 0, stagger: 0.05, duration: 0.2,
      }, 0.06)

      // Slide 1 → 2 crossfade
      tl.to(labelRefs[0].current, { opacity: 0, duration: 0.08 }, 0.30)
      tl.to(slideRefs[0].current, { opacity: 0, y: -22, duration: 0.15 }, 0.30)
      tl.to(labelRefs[1].current, { opacity: 1, duration: 0.08 }, 0.38)
      tl.to(slideRefs[1].current, { opacity: 1, y: 0, duration: 0.15 }, 0.38)

      // Slide 2: messages arrive
      tl.to(slideRefs[1].current?.querySelectorAll('.msg-bubble') ?? [], {
        opacity: 1, y: 0, stagger: 0.07, duration: 0.14,
      }, 0.44)

      // Slide 2 → 3 crossfade
      tl.to(labelRefs[1].current, { opacity: 0, duration: 0.08 }, 0.65)
      tl.to(slideRefs[1].current, { opacity: 0, y: -22, duration: 0.15 }, 0.65)
      tl.to(labelRefs[2].current, { opacity: 1, duration: 0.08 }, 0.73)
      tl.to(slideRefs[2].current, { opacity: 1, y: 0, duration: 0.15 }, 0.73)

      // Slide 3: progress animations
      tl.to(slideRefs[2].current?.querySelector('.xp-bar') ?? null, { width: '75%', duration: 0.2, ease: 'power1.out' }, 0.78)
      tl.to(slideRefs[2].current?.querySelector('.streak-card') ?? null, { opacity: 1, x: 0, duration: 0.14 }, 0.83)
      tl.to(slideRefs[2].current?.querySelectorAll('.achievement-item') ?? [], {
        opacity: 1, scale: 1, stagger: 0.05, duration: 0.1,
      }, 0.89)
      tl.to(slideRefs[2].current?.querySelector('.unlock-card') ?? null, { opacity: 1, y: 0, duration: 0.12 }, 0.95)

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
        animation: tl,
      })
    }, containerRef)

    return () => ctx.revert()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    /* 700vh: 100vh visible + 600vh scroll space */
    <div ref={containerRef} style={{ position: 'relative', height: '700vh' }}>
      <div
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
        className="relative flex flex-col items-center justify-center bg-[#050505]"
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(200,255,0,0.03) 0%, transparent 70%)',
        }} />

        <span className="scene-label">FEATURES — 03</span>

        {/* Heading */}
        <div ref={headingRef} className="text-center mb-10 px-6 relative z-10">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--accent)' }}>
            The platform
          </p>
          <h2
            className="font-[family-name:var(--font-display)] tracking-tight text-white leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Built around how you actually train
          </h2>
          <p className="text-white/40 mt-3 text-sm max-w-md mx-auto">
            Not another dashboard you&apos;ll forget to open. One place for your plan, your athlete, and your progress.
          </p>
        </div>

        {/* Phone + labels */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Slide label */}
          <div className="relative h-6 mb-5 w-[300px] flex items-center justify-center">
            {SLIDE_LABELS.map((label, i) => (
              <p
                key={i}
                ref={labelRefs[i]}
                className="absolute font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em]"
                style={{ color: 'var(--accent)' }}
              >
                {label}
              </p>
            ))}
          </div>

          {/* Phone frame */}
          <div
            className="relative w-[260px] sm:w-[280px] h-[480px] rounded-[32px] overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.10)',
              backdropFilter: 'blur(24px)',
              boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.08), 0 30px 60px -10px rgba(0,0,0,0.6)',
            }}
          >
            {SLIDE_SCREENS.map((screen, i) => (
              <div key={i} ref={slideRefs[i]} style={{ position: 'absolute', inset: 0 }}>
                {screen}
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div className="flex gap-2 mt-6">
            {SLIDE_LABELS.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
