'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { staggerContainer, fadeSlideItem, staticVariants } from '@/lib/motion'

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
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const count = useCountUp(value, inView)

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
  const reduced = useReducedMotion()
  const containerVariant = reduced ? staticVariants : staggerContainer
  const itemVariant = reduced ? staticVariants : fadeSlideItem

  return (
    <section className="py-10 md:py-14 border-y border-white/5">
      <Container>
        <motion.div
          className="grid grid-cols-3 gap-6"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariant}>
              <StatItem {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
