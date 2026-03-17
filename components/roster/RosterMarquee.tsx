'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RosterCard } from './RosterCard'

gsap.registerPlugin(ScrollTrigger)

const athletes = [
  { sport: 'AFL', credential: '200+ games, All-Australian' },
  { sport: 'Cricket', credential: 'International Test squad' },
  { sport: 'NRL', credential: 'State of Origin representative' },
  { sport: 'Football', credential: 'A-League Golden Boot winner' },
  { sport: 'Olympics', credential: '3× Olympic medallist' },
  { sport: 'Surf', credential: 'World Tour competitor' },
  { sport: 'Basketball', credential: 'NBL championship winner' },
  { sport: 'Netball', credential: 'Diamonds squad member' },
  { sport: 'Tennis', credential: 'Grand Slam quarterfinalist' },
  { sport: 'Rugby', credential: 'Wallabies centurion' },
  { sport: 'Swimming', credential: 'Olympic gold medallist' },
  { sport: 'Athletics', credential: 'Commonwealth Games finalist' },
]

export function RosterMarquee() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const statRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 18,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%', once: true },
      })
      gsap.from(gridRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 82%', once: true },
      })
      gsap.from(statRef.current, {
        opacity: 0,
        y: 12,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: statRef.current, start: 'top 88%', once: true },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="athletes" className="relative py-[var(--section-py)]">
      {/* Subtle glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,212,255,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto w-full max-w-[var(--container-max)] px-6 md:px-8 relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12">
          <span className="scene-label">ROSTER — 06</span>
          <h2
            className="font-[family-name:var(--font-display)] tracking-tight text-white uppercase mt-3"
            style={{ fontSize: 'clamp(1.6rem, 3.6vw, 2.7rem)', fontWeight: 900, letterSpacing: '-0.01em', lineHeight: 0.97 }}
          >
            The Roster
          </h2>
          <p className="text-[15px] leading-[1.7] mt-3 max-w-sm mx-auto" style={{ color: 'var(--fog)' }}>
            Names stay hidden until launch. Waitlist members influence who drops first.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {athletes.map((a, i) => (
            <RosterCard key={i} sport={a.sport} credential={a.credential} />
          ))}
        </div>

        {/* Stat line */}
        <p
          ref={statRef}
          className="text-center mt-8 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em]"
          style={{ color: 'var(--fog)' }}
        >
          12 athletes · 8 sports · Announcing soon
        </p>
      </div>
    </section>
  )
}
