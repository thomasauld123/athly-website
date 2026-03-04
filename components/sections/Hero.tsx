'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ParticleCanvas } from '@/components/ParticleCanvas'
import { scrollToSection } from '@/lib/scroll'
import { Flame, MessageCircle, CheckCircle2, Radio } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

function DataFragment({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`hidden lg:flex absolute items-center gap-2 rounded-xl px-3 py-2 backdrop-blur-xl border border-white/10 bg-white/[0.06] text-[11px] font-medium text-white/70 ${className}`}
    >
      {children}
    </div>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const phonesRef = useRef<HTMLDivElement>(null)
  const fragmentsRef = useRef<HTMLDivElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      // Entry animation on page load
      const entry = gsap.timeline({ defaults: { ease: 'power3.out' } })
      entry
        .from(headlineRef.current, { opacity: 0, y: 40, duration: 0.9 }, 0.2)
        .from(bodyRef.current, { opacity: 0, y: 24, duration: 0.7 }, 0.5)
        .from(phonesRef.current, { opacity: 0, x: 50, duration: 1 }, 0.4)
        .from(fragmentsRef.current?.children ?? [], {
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          stagger: 0.15,
        }, 0.8)
        .from(hintRef.current, { opacity: 0, y: 8, duration: 0.5 }, 1.1)

      // Scroll-out parallax
      const scrollTl = gsap.timeline({ paused: true, defaults: { ease: 'none' } })
      scrollTl
        .to(headlineRef.current, { opacity: 0, y: -70 }, 0)
        .to(bodyRef.current, { opacity: 0, y: -50 }, 0)
        .to(phonesRef.current, { y: -40 }, 0)
        .to(fragmentsRef.current, { opacity: 0, y: -20 }, 0)
        .to(hintRef.current, { opacity: 0 }, 0)

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
        animation: scrollTl,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    /* Outer: 200vh gives 100vh of scroll space while pinned */
    <div ref={containerRef} style={{ position: 'relative', height: '200vh' }}>
      <div
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
        className="relative bg-[#050505]"
      >
        {/* Particle canvas */}
        <ParticleCanvas />

        {/* Scene label */}
        <span className="scene-label">HERO — 01</span>

        {/* Accent glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(200,255,0,0.04) 0%, transparent 70%)',
          }}
        />

        {/* Floating phones — positioned right side */}
        <div
          ref={phonesRef}
          aria-hidden="true"
          className="absolute right-[5%] xl:right-[10%] top-1/2 -translate-y-1/2 hidden md:flex gap-6 items-end z-10"
          style={{ perspective: '900px' }}
        >
          {/* Back phone */}
          <div
            className="w-[200px] h-[400px] rounded-[28px] bg-white/[0.05] border border-white/[0.08] backdrop-blur-xl overflow-hidden flex-shrink-0 animate-float-b"
            style={{
              transform: 'rotateY(-12deg) rotateX(4deg) translateZ(-20px)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
            }}
          >
            <div className="h-full flex flex-col">
              <div className="h-1 w-10 rounded-full bg-white/20 mx-auto mt-3 mb-1" />
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/5">
                <span
                  className="font-[family-name:var(--font-display)] text-[11px] font-semibold"
                  style={{ color: 'var(--accent)' }}
                >
                  Athly
                </span>
                <span className="text-[8px] text-white/30 font-mono">WEEK 4</span>
              </div>
              <div className="flex-1 px-3 py-3 flex flex-col gap-2">
                {['MON · Speed intervals', 'WED · Skill drills', 'FRI · Hill repeats', 'SAT · Game day'].map(
                  (row) => (
                    <div
                      key={row}
                      className="h-8 rounded-lg bg-white/[0.05] px-2.5 flex items-center"
                    >
                      <span className="text-[9px] text-white/50">{row}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Front phone */}
          <div
            className="w-[220px] h-[440px] rounded-[30px] bg-white/[0.07] border border-white/[0.12] backdrop-blur-xl overflow-hidden flex-shrink-0 animate-float-a"
            style={{
              transform: 'rotateY(6deg) rotateX(2deg)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)',
            }}
          >
            <div className="h-full flex flex-col">
              <div className="h-1 w-12 rounded-full bg-white/20 mx-auto mt-3 mb-1" />
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/5">
                <span className="font-[family-name:var(--font-display)] text-[12px] font-semibold text-white">
                  Messages
                </span>
                <span
                  className="text-[8px] font-medium rounded-full px-2 py-0.5 border"
                  style={{
                    color: 'var(--accent)',
                    borderColor: 'var(--accent-border)',
                    background: 'var(--accent-soft)',
                  }}
                >
                  Verified
                </span>
              </div>
              <div className="flex-1 px-3 py-4 flex flex-col gap-3 justify-center">
                <div className="flex justify-end">
                  <div
                    className="max-w-[80%] rounded-2xl rounded-br-sm px-3 py-2 border"
                    style={{ background: 'var(--accent-soft)', borderColor: 'var(--accent-border)' }}
                  >
                    <p className="text-[9px] text-white/80 leading-snug">
                      Hamstring tight before Friday — should I push through?
                    </p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-white/[0.08] border border-white/10 px-3 py-2">
                    <p className="text-[8px] font-semibold mb-1" style={{ color: 'var(--accent)' }}>
                      Your athlete
                    </p>
                    <p className="text-[9px] text-white/70 leading-snug">
                      Swap hills for 20min tempo. Don&apos;t risk it before game day.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] border border-white/10 px-3 py-1">
                    <CheckCircle2 className="h-2.5 w-2.5" style={{ color: 'var(--accent)' }} />
                    <span className="text-[8px] font-medium text-white/60">Plan adjusted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating data fragments */}
        <div ref={fragmentsRef} aria-hidden="true">
          <DataFragment className="top-[22%] right-[33%]">
            <CheckCircle2 className="h-3 w-3" style={{ color: 'var(--accent)' }} />
            PLAN UPDATED
          </DataFragment>
          <DataFragment className="top-[38%] left-[6%]">
            <Flame className="h-3 w-3 text-amber-400" />
            14-DAY STREAK
          </DataFragment>
          <DataFragment className="bottom-[30%] right-[32%]">
            <MessageCircle className="h-3 w-3" style={{ color: 'var(--accent)' }} />
            VOICE NOTE — 0:42
          </DataFragment>
          <DataFragment className="bottom-[22%] left-[8%]">
            <Radio className="h-3 w-3 text-red-400 animate-pulse-dot" />
            LIVE CHECK-IN
          </DataFragment>
        </div>

        {/* Centre content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 md:px-8 pointer-events-none">
          <div className="text-center max-w-4xl mx-auto">
            {/* Label */}
            <div className="mb-5">
              <span
                className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em]"
                style={{ color: 'var(--accent)' }}
              >
                <span
                  className="inline-block w-4 h-px"
                  style={{ background: 'var(--accent)' }}
                />
                Coming soon — invite only
                <span
                  className="inline-block w-4 h-px"
                  style={{ background: 'var(--accent)' }}
                />
              </span>
            </div>

            {/* Headline */}
            <div ref={headlineRef}>
              <h1
                className="font-[family-name:var(--font-display)] leading-[0.92] tracking-tight text-white"
                style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}
              >
                Personal coaching
                <br />
                from your favourite
                <br />
                <span style={{ color: 'var(--accent)' }}>athlete.</span>
              </h1>
            </div>

            {/* Body + CTAs */}
            <div ref={bodyRef} className="mt-7">
              <p
                className="text-white/50 mx-auto mb-8"
                style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)', maxWidth: '520px', lineHeight: 1.65 }}
              >
                You&apos;re training for something real. Get a weekly plan, direct guidance,
                and real accountability — from athletes who&apos;ve been where you want to go.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
                <button
                  onClick={() => scrollToSection('waitlist')}
                  className="px-7 py-3 rounded-xl font-semibold text-sm text-black transition-all hover:scale-105 active:scale-100"
                  style={{ background: 'var(--accent)', boxShadow: '0 0 30px rgba(200,255,0,0.25)' }}
                >
                  Join the waitlist
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="px-7 py-3 rounded-xl font-medium text-sm text-white/60 hover:text-white transition-colors border border-white/10 hover:border-white/20"
                >
                  See how it works
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          ref={hintRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span
            className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.2em]"
            style={{ color: 'var(--text-dim)' }}
          >
            Scroll
          </span>
          <div
            className="w-px h-10"
            style={{
              background: 'linear-gradient(to bottom, var(--accent), transparent)',
              opacity: 0.4,
            }}
          />
        </div>
      </div>
    </div>
  )
}
