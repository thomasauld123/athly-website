'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { PhoneMockups } from '@/components/PhoneMockups'
import { Container } from '@/components/ui/Container'
import { scrollToSection } from '@/lib/scroll'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const phonesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      // Entry animations
      const entry = gsap.timeline({ defaults: { ease: 'power3.out' } })
      entry
        .from(textRef.current?.children ?? [], { opacity: 0, y: 20, stagger: 0.12, duration: 0.7 }, 0.2)
        .from(phonesRef.current, { opacity: 0, x: 30, duration: 0.9 }, 0.4)

      // Scroll-out parallax
      const scrollTl = gsap.timeline({ paused: true, defaults: { ease: 'none' } })
      scrollTl
        .to(textRef.current, { opacity: 0, y: -60 }, 0)
        .to(phonesRef.current, { y: -30 }, 0)

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
    <div ref={containerRef} style={{ position: 'relative', height: '200vh' }}>
      <div
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
        className="relative flex items-center bg-[#050505]"
      >
        {/* Accent glow behind phones */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(200,255,0,0.4) 0%, transparent 70%)' }}
        />

        <Container className="relative z-10 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text column */}
            <div ref={textRef}>
              <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.625rem,6vw,4.5rem)] tracking-tight leading-[1.06] mb-5">
                Personal coaching from your favourite athlete.
              </h1>

              <p className="text-[clamp(1rem,2vw,1.125rem)] text-[color:var(--text-muted)] max-w-md mb-8 leading-relaxed">
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
      </div>
    </div>
  )
}
