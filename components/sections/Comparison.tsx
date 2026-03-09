'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { X, Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const rows = [
  {
    old: 'Random workout plans from the internet',
    athly: 'One plan shaped by a real athlete',
  },
  {
    old: 'No one to hold you accountable',
    athly: 'Direct messaging + plan adjustments',
  },
  {
    old: 'Cookie-cutter programs for everyone',
    athly: 'Adapted to your sport and goals',
  },
  {
    old: 'Faceless AI with no real context',
    athly: 'Athletes you actually know and trust',
  },
  {
    old: 'Scattered advice from 5 different apps',
    athly: 'Everything consolidated in one place',
  },
]

export function Comparison() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      // All rows start hidden
      gsap.set(rowRefs.current, { opacity: 0, y: 22 })

      const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })

      // Heading entrance
      tl.from(headingRef.current, { opacity: 0, y: 18, duration: 0.4 }, 0)

      // Each row pair reveals at evenly spaced intervals
      // 5 rows across ~0.10–0.95 of timeline
      rows.forEach((_, i) => {
        const at = 0.12 + i * 0.17
        tl.to(rowRefs.current[i], { opacity: 1, y: 0, duration: 0.3 }, at)
      })

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.7,
        animation: tl,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    /* 240vh: 100vh visible + 140vh scroll space */
    <div ref={containerRef} style={{ position: 'relative', height: '240vh' }}>
      <div
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
        className="relative flex flex-col items-center justify-center bg-[#050505] px-4"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 40% 50% at 50% 50%, rgba(200,255,0,0.025) 0%, transparent 70%)' }}
        />

        <span className="scene-label">COMPARISON — 04</span>

        {/* Heading */}
        <div ref={headingRef} className="text-center mb-8 relative z-10">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--accent)' }}>
            What&apos;s different
          </p>
          <h2
            className="font-[family-name:var(--font-display)] tracking-tight text-white"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Not another fitness app
          </h2>
          <p className="text-white/40 mt-2 text-sm">You&apos;ve tried the rest. Here&apos;s what&apos;s different.</p>
        </div>

        {/* Column headers */}
        <div className="w-full max-w-2xl mx-auto grid grid-cols-2 gap-4 mb-4 relative z-10 px-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 text-center">The old way</p>
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-center" style={{ color: 'var(--accent)' }}>The Athly way</p>
        </div>

        {/* Rows */}
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-3 relative z-10 px-2">
          {rows.map((row, i) => (
            <div
              key={i}
              ref={(el) => { rowRefs.current[i] = el }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Old way cell */}
              <div className="flex items-start gap-3 rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3">
                <div className="w-5 h-5 rounded-full bg-white/[0.05] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="h-3 w-3 text-white/20" strokeWidth={2} />
                </div>
                <p className="text-sm text-white/25 leading-snug">{row.old}</p>
              </div>

              {/* Athly way cell */}
              <div
                className="flex items-start gap-3 rounded-xl border px-4 py-3 relative overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'var(--accent-border)' }}
              >
                <div
                  className="absolute inset-0 pointer-events-none opacity-10"
                  style={{ background: 'radial-gradient(ellipse at top left, var(--accent), transparent 70%)' }}
                  aria-hidden="true"
                />
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border relative"
                  style={{ background: 'var(--accent-soft)', borderColor: 'var(--accent-border)' }}
                >
                  <Check className="h-3 w-3" strokeWidth={2.5} style={{ color: 'var(--accent)' }} />
                </div>
                <p className="text-sm text-white/70 leading-snug relative">{row.athly}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
