'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from '@/components/ui/button'
import { PhoneMockups } from '@/components/PhoneMockups'
import { Container } from '@/components/ui/Container'
import { scrollToSection } from '@/lib/scroll'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const phonesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      // Entry animations only — no scroll-driven behaviour
      const entry = gsap.timeline({ defaults: { ease: 'power3.out' } })
      entry
        .from(textRef.current?.children ?? [], { opacity: 0, y: 20, stagger: 0.12, duration: 0.7 }, 0.2)
        .from(phonesRef.current, { opacity: 0, x: 30, duration: 0.9 }, 0.4)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" ref={sectionRef} className="relative flex items-center min-h-[100svh] bg-[#060D18]">
      {/* Accent glow behind phones */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.4) 0%, transparent 70%)' }}
      />

      <Container className="relative z-10 pt-[80px] pb-[60px] md:pt-24 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div ref={textRef}>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.375rem,5.4vw,4rem)] uppercase leading-[0.97] mb-5" style={{ fontWeight: 900, letterSpacing: '-0.01em' }}>
              Personal coaching from your favourite athlete.
            </h1>

            <p className="text-[15px] leading-[1.7] max-w-md mb-8" style={{ color: 'var(--fog)' }}>
              You&apos;re training for something real. Get a weekly plan, direct guidance,
              and real accountability — from athletes who&apos;ve been where you want to go.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
              <Button size="lg" onClick={() => scrollToSection('waitlist')}>
                Join the waitlist
              </Button>
              <Button variant="ghost" size="lg" onClick={() => scrollToSection('how-it-works')}>
                See how it works
              </Button>
            </div>

            <p className="text-xs text-[color:var(--text-dim)]">Coming soon.</p>
          </div>

          {/* Phones column */}
          <div ref={phonesRef} className="flex justify-center lg:justify-end">
            <PhoneMockups />
          </div>
        </div>
      </Container>
    </section>
  )
}
