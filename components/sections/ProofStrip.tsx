'use client'

import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/ui/Container'

const stats = [
  { value: 1240, suffix: '+', label: 'on the waitlist' },
  { value: 12, suffix: '', label: 'athletes confirmed' },
  { value: 8, suffix: '', label: 'sports covered' },
]

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame: number
    const duration = 1800
    const start = performance.now()

    function animate(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [inView, target])

  return count
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const count = useCountUp(value, inView)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="text-center">
      <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold tracking-tight">
        <span className="text-[color:var(--accent)]">{count.toLocaleString()}{suffix}</span>
      </p>
      <p className="text-xs text-white/40 mt-1">{label}</p>
    </div>
  )
}

export function ProofStrip() {
  return (
    <section className="py-10 md:py-14 border-y border-white/5">
      <Container>
        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  )
}
