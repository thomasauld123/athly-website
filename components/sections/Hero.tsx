'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { scrollToSection } from '@/lib/scroll'
import { PhoneMockups } from '@/components/PhoneMockups'
import { Container } from '@/components/ui/Container'

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const textY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -60])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], reduced ? [1, 1] : [1, 0])
  const phoneFrontY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -40])
  const phoneBackY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -20])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Green accent glow behind phones */}
      <div
        className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.5) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container className="relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div style={{ y: textY, opacity: textOpacity }}>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-[family-name:var(--font-display)] text-[clamp(2.625rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.06] mb-5"
            >
              Personal coaching from your favourite athlete.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[clamp(1rem,2vw,1.125rem)] text-[color:var(--text-muted)] max-w-md mb-8 leading-relaxed"
            >
              You're training for something real. Get a weekly plan, direct guidance, and real accountability — from athletes who've been where you want to go.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-4"
            >
              <Button size="lg" onClick={() => scrollToSection('waitlist')}>
                Join the waitlist
              </Button>
              <Button variant="ghost" size="lg" onClick={() => scrollToSection('how-it-works')}>
                See how it works
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-xs text-[color:var(--text-dim)]"
            >
              Coming soon.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockups
              backStyle={{ y: phoneBackY }}
              frontStyle={{ y: phoneFrontY }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
