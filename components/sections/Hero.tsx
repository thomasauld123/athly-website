'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { scrollToSection } from '@/lib/scroll'

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
      </defs>
      <ellipse
        cx="400"
        cy="400"
        rx="250"
        ry="220"
        fill="url(#blob-gradient)"
        filter="url(#liquid-glass)"
      />
      <defs>
        <radialGradient id="blob-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.4)" />
          <stop offset="50%" stopColor="rgba(79, 70, 229, 0.2)" />
          <stop offset="100%" stopColor="rgba(30, 27, 75, 0)" />
        </radialGradient>
      </defs>
    </svg>
  )
}

function GradientOrbs() {
  return (
    <>
      <div
        className="absolute top-[15%] left-[10%] w-72 h-72 rounded-full opacity-20 blur-[100px] animate-float-slow pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-[60%] right-[5%] w-96 h-96 rounded-full opacity-15 blur-[120px] animate-float-slower pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[10%] left-[30%] w-64 h-64 rounded-full opacity-10 blur-[80px] animate-float-slow pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.5) 0%, transparent 70%)', animationDelay: '3s' }}
        aria-hidden="true"
      />
    </>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <LiquidGlassBlob />
      <GradientOrbs />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center pt-24 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-white/40 mb-6"
        >
          Athly
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-6"
        >
          One plan you&apos;ll actually follow
          <span className="text-white/40"> — shaped by the athletes you trust.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Stop piecing together random programs and generic advice.
          Athly gives you a single, personalised plan built around the methodology
          of athletes who&apos;ve done what you&apos;re trying to do.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
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
          Early access is limited. No spam.
        </motion.p>
      </div>
    </section>
  )
}
