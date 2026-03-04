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

const row1 = athletes.slice(0, 6)
const row2 = athletes.slice(6, 12)

export function RosterMarquee() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } })

      tl.from(headingRef.current, { opacity: 0, y: 18, duration: 0.3, ease: 'power3.out' }, 0)
      tl.from(spotlightRef.current, { opacity: 0, scale: 0.5, duration: 0.4, ease: 'power3.out' }, 0)

      // Opposing scroll-driven movement
      tl.fromTo(row1Ref.current, { x: 60 }, { x: -280, duration: 1 }, 0.05)
      tl.fromTo(row2Ref.current, { x: -60 }, { x: 280, duration: 1 }, 0.05)

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
        animation: tl,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    /* 450vh: 100vh visible + 350vh scroll space */
    <div ref={containerRef} id="athletes" style={{ position: 'relative', height: '450vh' }}>
      <div
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
        className="relative flex flex-col items-center justify-center bg-[#050505]"
      >
        {/* Center spotlight */}
        <div
          ref={spotlightRef}
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(200,255,0,0.04) 0%, transparent 70%)' }}
        />

        <span className="scene-label">ROSTER — 06</span>

        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12 px-6 relative z-10">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--accent)' }}>
            Launch roster
          </p>
          <h2
            className="font-[family-name:var(--font-display)] tracking-tight text-white"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Launch roster
          </h2>
          <p className="text-white/40 mt-2 text-sm max-w-sm mx-auto">
            Names stay hidden until launch. Waitlist members influence who drops first.
          </p>
        </div>

        {/* Rows */}
        <div
          className="w-full relative z-10"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          {/* Row 1 — moves left */}
          <div
            ref={row1Ref}
            className="flex gap-4 mb-4 justify-center"
            style={{ willChange: 'transform' }}
          >
            {[...row1, ...row1].map((a, i) => (
              <RosterCard key={`1-${i}`} {...a} />
            ))}
          </div>

          {/* Row 2 — moves right, slight scale for depth */}
          <div
            ref={row2Ref}
            className="flex gap-4 justify-center"
            style={{ transform: 'scale(0.92)', opacity: 0.8, willChange: 'transform' }}
          >
            {[...row2, ...row2].map((a, i) => (
              <RosterCard key={`2-${i}`} {...a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
