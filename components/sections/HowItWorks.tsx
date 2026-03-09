'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown, MessageCircle, CheckCircle2, Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

type PillType = 'intensity' | 'rest' | 'message' | 'update' | 'checkin'

interface DayCard {
  day: string
  title: string
  details: string
  pill: { label: string; type: PillType }
  highlight?: boolean
}

const personas: Record<string, DayCard[]> = {
  'midfielder preparing for pre-season': [
    { day: 'Mon', title: 'Speed endurance', details: '4×200m intervals, 90s rest', pill: { label: 'RPE 8/10', type: 'intensity' } },
    { day: 'Tue', title: 'Recovery', details: '20min walk + foam roll. Review Monday\'s data.', pill: { label: 'Active rest', type: 'rest' } },
    { day: 'Wed', title: 'Skills session', details: 'Ball work 30min, agility ladder.', pill: { label: 'Athlete tip received', type: 'message' }, highlight: true },
    { day: 'Thu', title: 'Strength', details: 'Lower body compound lifts, hip mobility circuit.', pill: { label: 'RPE 7/10', type: 'intensity' } },
    { day: 'Fri', title: 'Repeat efforts', details: '6×100m hills, game film review 15min.', pill: { label: 'Plan adapted', type: 'update' } },
    { day: 'Sat', title: 'Game day', details: 'Trust the prep, pre-game routine locked.', pill: { label: 'Check-in available', type: 'checkin' } },
    { day: 'Sun', title: 'Full rest', details: 'Recovery protocol, next week preview drops.', pill: { label: 'Athlete message', type: 'message' } },
  ],
  'bowler improving their pace': [
    { day: 'Mon', title: 'Pace bowling session', details: '6-over spell, focus on run-up rhythm.', pill: { label: 'RPE 7/10', type: 'intensity' } },
    { day: 'Tue', title: 'Strength & power', details: 'Posterior chain work, med ball rotations.', pill: { label: 'RPE 8/10', type: 'intensity' } },
    { day: 'Wed', title: 'Recovery + review', details: 'Foam roll, video analysis of Monday\'s spell.', pill: { label: 'Active rest', type: 'rest' } },
    { day: 'Thu', title: 'Speed work', details: 'Short sprints 6×30m, bowling-specific agility.', pill: { label: 'Athlete tip received', type: 'message' }, highlight: true },
    { day: 'Fri', title: 'Match simulation', details: '10-over spell, fielding drills.', pill: { label: 'Plan adapted', type: 'update' } },
    { day: 'Sat', title: 'Light skills', details: 'Grip work, slower ball variations, stretching.', pill: { label: 'Check-in available', type: 'checkin' } },
    { day: 'Sun', title: 'Full rest', details: 'Recovery protocol, next week preview drops.', pill: { label: 'Athlete message', type: 'message' } },
  ],
  'prop trying to build power': [
    { day: 'Mon', title: 'Max strength', details: 'Squat, bench, deadlift — 5×3 heavy.', pill: { label: 'RPE 9/10', type: 'intensity' } },
    { day: 'Tue', title: 'Scrummaging technique', details: 'Live scrum practice, body positioning drills.', pill: { label: 'RPE 7/10', type: 'intensity' } },
    { day: 'Wed', title: 'Recovery', details: 'Pool session, upper body mobility.', pill: { label: 'Active rest', type: 'rest' } },
    { day: 'Thu', title: 'Power development', details: 'Clean & jerk, box jumps, sled push.', pill: { label: 'Athlete tip received', type: 'message' }, highlight: true },
    { day: 'Fri', title: 'Contact conditioning', details: 'Tackle bag circuits, wrestling drills.', pill: { label: 'Plan adapted', type: 'update' } },
    { day: 'Sat', title: 'Game day', details: 'Pre-game activation, trust the prep.', pill: { label: 'Check-in available', type: 'checkin' } },
    { day: 'Sun', title: 'Full rest', details: 'Cold water recovery, next week preview drops.', pill: { label: 'Athlete message', type: 'message' } },
  ],
}

const personaOptions = Object.keys(personas)

function PillBadge({ pill }: { pill: { label: string; type: PillType } }) {
  const base = 'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[8px] font-medium uppercase tracking-wider border'
  if (pill.type === 'intensity') {
    return (
      <span className={base} style={{ borderColor: 'var(--accent-border)', color: 'var(--accent)', background: 'var(--accent-soft)' }}>
        {pill.label}
      </span>
    )
  }
  if (pill.type === 'rest') {
    return (
      <span className={`${base} bg-white/[0.05] border-white/[0.08] text-white/30`}>{pill.label}</span>
    )
  }
  if (pill.type === 'message') {
    return (
      <span className={base} style={{ borderColor: 'var(--accent-border)', color: 'var(--accent)', background: 'var(--accent-soft)' }}>
        <MessageCircle className="h-2.5 w-2.5" strokeWidth={1.5} />{pill.label}
      </span>
    )
  }
  if (pill.type === 'update') {
    return (
      <span className={base} style={{ borderColor: 'var(--accent-border)', color: 'var(--accent)', background: 'var(--accent-soft)' }}>
        <Check className="h-2.5 w-2.5" strokeWidth={2} />{pill.label}
      </span>
    )
  }
  return (
    <span className={base} style={{ borderColor: 'var(--accent-border)', color: 'var(--accent)', background: 'var(--accent-soft)' }}>
      <CheckCircle2 className="h-2.5 w-2.5" strokeWidth={1.5} />{pill.label}
    </span>
  )
}

export function HowItWorks() {
  const [selected, setSelected] = useState(personaOptions[0])
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<ScrollTrigger | null>(null)

  // Build / rebuild GSAP whenever persona changes
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const track = trackRef.current
    const container = containerRef.current
    if (!track || !container) return

    // Kill previous trigger
    triggerRef.current?.kill()

    const ctx = gsap.context(() => {
      const cardWidth = 188 + 12 // card + gap
      const totalCards = 7
      const xDistance = -(cardWidth * (totalCards - 1))
      const trackWidth = 188 * totalCards + 12 * (totalCards - 1) // 1388px
      const initialX = Math.max(24, (window.innerWidth - trackWidth) / 2)

      const tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } })

      // Heading entrance at start
      tl.from(headingRef.current, { opacity: 0, y: 16, duration: 0.2, ease: 'power3.out' }, 0)

      // Card track scrolls horizontally, starting centered on wide viewports
      tl.fromTo(track, { x: initialX }, { x: initialX + xDistance, duration: 0.8 }, 0.1)

      // Cards fade in staggered at start
      tl.from(track.querySelectorAll('.day-card'), {
        opacity: 0,
        y: 20,
        stagger: 0.04,
        duration: 0.2,
        ease: 'power3.out',
      }, 0)

      triggerRef.current = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.9,
        animation: tl,
      })
    }, container)

    return () => {
      ctx.revert()
      triggerRef.current?.kill()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  const days = personas[selected]

  return (
    /* 360vh: 100vh visible + 260vh scroll space */
    <div ref={containerRef} id="how-it-works" style={{ position: 'relative', height: '360vh' }}>
      <div
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
        className="relative flex flex-col bg-[#060D18]"
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(0,212,255,0.025) 0%, transparent 70%)',
        }} />

        <span className="scene-label">WEEK — 05</span>

        {/* Heading + dropdown */}
        <div ref={headingRef} className="pt-16 pb-8 px-6 md:px-10 text-center relative z-10">
          <p className="font-[family-name:var(--font-mono)] text-[11px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--fog)' }}>
            Your week on Athly
          </p>
          <h2
            className="font-[family-name:var(--font-display)] tracking-tight text-white mb-5 uppercase"
            style={{ fontSize: 'clamp(1.6rem, 3.6vw, 2.7rem)', fontWeight: 900, letterSpacing: '-0.01em', lineHeight: 0.97 }}
          >
            Your week on Athly
          </h2>
          {/* Persona dropdown */}
          <p className="text-white/50 text-base inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>You&apos;re a</span>
            <span className="relative inline-flex items-center">
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="appearance-none bg-white/[0.06] border border-white/10 rounded-lg pl-3 pr-8 py-1 text-white font-medium text-base focus:outline-none cursor-pointer transition-colors"
                style={{ colorScheme: 'dark' }}
              >
                {personaOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#060D18]">{opt}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/40 pointer-events-none" strokeWidth={2} />
            </span>
            <span>— here&apos;s what a week looks like.</span>
          </p>
        </div>

        {/* Horizontal card track */}
        <div
          className="relative flex-1 flex items-center"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          }}
        >
          <div
            ref={trackRef}
            className="flex gap-3 will-change-transform"
            style={{ willChange: 'transform' }}
          >
            {days.map((d) => (
              <div
                key={d.day}
                className={`day-card w-[188px] flex-shrink-0 rounded-2xl p-4 backdrop-blur-xl border transition-colors duration-300 ${
                  d.highlight
                    ? 'bg-white/[0.07] border-[color:var(--accent-border)]'
                    : 'bg-white/[0.04] border-white/[0.07]'
                }`}
              >
                {d.highlight && (
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none opacity-10"
                    style={{ background: 'radial-gradient(ellipse at top, var(--accent), transparent 60%)' }}
                    aria-hidden="true"
                  />
                )}
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${d.highlight ? 'text-[color:var(--accent)]' : 'text-white/30'}`} style={d.highlight ? { color: 'var(--accent)' } : undefined}>
                  {d.day}
                </p>
                <p className="text-[13px] font-semibold text-white/80 leading-tight mb-1.5">{d.title}</p>
                <p className="text-[11px] text-white/35 leading-snug mb-4">{d.details}</p>
                <PillBadge pill={d.pill} />
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-white/25 text-center pb-8 px-6 relative z-10">
          Every week adapts. Message your athlete, adjust the plan, stay on track.
        </p>
      </div>
    </div>
  )
}
