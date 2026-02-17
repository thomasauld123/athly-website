'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { scrollToSection } from '@/lib/scroll'
import { PhoneMockups } from '@/components/PhoneMockups'
import { CalendarCheck, MessageCircle, Phone } from 'lucide-react'

function LiquidGlassBlob() {
  return (
    <svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 pointer-events-none"
      viewBox="0 0 800 800"
      aria-hidden="true"
    >
      <defs>
        <filter id="liquid-glass">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015"
            numOctaves="3"
            seed="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="80"
            xChannelSelector="R"
            yChannelSelector="G"
          />
          <feGaussianBlur stdDeviation="20" />
        </filter>
        <radialGradient id="blob-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(52, 211, 153, 0.35)" />
          <stop offset="50%" stopColor="rgba(16, 185, 129, 0.15)" />
          <stop offset="100%" stopColor="rgba(5, 46, 22, 0)" />
        </radialGradient>
      </defs>
      <ellipse
        cx="400"
        cy="400"
        rx="250"
        ry="220"
        fill="url(#blob-gradient)"
        filter="url(#liquid-glass)"
      />
    </svg>
  )
}

function GradientOrbs() {
  return (
    <>
      <div
        className="absolute top-[15%] left-[10%] w-72 h-72 rounded-full opacity-15 blur-[100px] animate-float-slow pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.5) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-[60%] right-[5%] w-96 h-96 rounded-full opacity-10 blur-[120px] animate-float-slower pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[10%] left-[30%] w-64 h-64 rounded-full opacity-8 blur-[80px] animate-float-slow pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.4) 0%, transparent 70%)', animationDelay: '3s' }}
        aria-hidden="true"
      />
    </>
  )
}

const bullets = [
  { icon: CalendarCheck, label: 'One consolidated weekly plan' },
  { icon: MessageCircle, label: 'Athlete-guided adjustments' },
  { icon: Phone, label: 'Messaging + calling' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <LiquidGlassBlob />
      <GradientOrbs />

      <div className="relative z-10 mx-auto w-full px-6 pt-24 pb-16" style={{ maxWidth: 'var(--container-max)' }}>
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
              className="text-[clamp(1rem,2vw,1.125rem)] text-white/50 max-w-md mb-8 leading-relaxed"
            >
              Message within the athlete&apos;s community for direct guidance on your training.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {bullets.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/8 px-3.5 py-1.5"
                >
                  <b.icon className="h-3.5 w-3.5" style={{ color: 'var(--accent)' }} strokeWidth={1.5} />
                  <span className="text-xs text-white/60">{b.label}</span>
                </div>
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
              className="text-xs text-white/30"
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
      </div>
    </section>
  )
}
