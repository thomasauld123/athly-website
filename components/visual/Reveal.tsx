'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  stagger?: number
  once?: boolean
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
}: RevealProps) {
  const reduced = useReducedMotion()

  const offsets = {
    up: { y: 14 },
    left: { x: -20 },
    right: { x: 20 },
    none: {},
  }

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
