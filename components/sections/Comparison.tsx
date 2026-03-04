'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { X, Check } from 'lucide-react'
import {
  staggerContainer,
  athlyStaggerContainer,
  fadeSlideItem,
  staticVariants,
} from '@/lib/motion'

const oldWay = [
  'Random workout plans from the internet',
  'No one to hold you accountable',
  'Cookie-cutter programs for everyone',
  'Faceless AI with no real context',
  'Scattered advice from 5 different apps',
]

const athlyWay = [
  'One plan shaped by a real athlete',
  'Direct messaging + plan adjustments',
  'Adapted to your sport and goals',
  'Athletes you actually know and trust',
  'Everything consolidated in one place',
]

export function Comparison() {
  const reduced = useReducedMotion()
  const containerVariant = reduced ? staticVariants : staggerContainer
  const athlyVariant = reduced ? staticVariants : athlyStaggerContainer
  const itemVariant = reduced ? staticVariants : fadeSlideItem

  return (
    <Section>
      <Container>
        <SectionHeading
          title="Not another fitness app"
          subtitle="You've tried the rest. Here's what's different."
        />

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {/* The Old Way */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl p-6 h-full">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 mb-5">
              The old way
            </p>
            <motion.div
              className="flex flex-col gap-3.5"
              variants={containerVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
            >
              {oldWay.map((item, i) => (
                <motion.div key={i} variants={itemVariant} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/[0.05] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="h-3 w-3 text-white/20" strokeWidth={2} />
                  </div>
                  <p className="text-sm text-white/25 leading-snug">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* The Athly Way */}
          <div className="rounded-2xl bg-white/[0.05] border border-[color:var(--accent-border)] backdrop-blur-xl p-6 h-full relative overflow-hidden">
            {/* Subtle green glow */}
            <div
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{ background: 'radial-gradient(ellipse at top left, var(--accent), transparent 70%)' }}
              aria-hidden="true"
            />
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[color:var(--accent)] mb-5 relative">
              The Athly way
            </p>
            <motion.div
              className="flex flex-col gap-3.5 relative"
              variants={athlyVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
            >
              {athlyWay.map((item, i) => (
                <motion.div key={i} variants={itemVariant} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[color:var(--accent-soft)] border border-[color:var(--accent-border)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-[color:var(--accent)]" strokeWidth={2.5} />
                  </div>
                  <p className="text-sm text-white/70 leading-snug">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
