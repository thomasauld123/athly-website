'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { scrollToSection } from '@/lib/scroll'
import { PhoneMockups } from '@/components/PhoneMockups'
import { GlassPill } from '@/components/ui/glass-card'
import { Container } from '@/components/ui/Container'
import { CalendarCheck, MessageCircle, Phone } from 'lucide-react'

const bullets = [
  { icon: CalendarCheck, label: 'One consolidated weekly plan' },
  { icon: MessageCircle, label: 'Athlete-guided adjustments' },
  { icon: Phone, label: 'Messaging + calling' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Green accent glow behind phones */}
      <div
        className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.5) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container className="relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
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
              A weekly plan, direct messaging, and real guidance — built around the athletes you trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {bullets.map((b) => (
                <GlassPill key={b.label} className="flex items-center gap-2 px-4 py-2">
                  <b.icon className="h-3.5 w-3.5 text-[color:var(--accent)]" strokeWidth={1.5} />
                  <span className="text-xs text-white/60">{b.label}</span>
                </GlassPill>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
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
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-xs text-[color:var(--text-dim)]"
            >
              Coming soon.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockups />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
