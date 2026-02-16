'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/motion'
import { Container } from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  size?: 'default' | 'narrow' | 'wide'
  padding?: 'default' | 'tight' | 'none'
}

const paddings = {
  none: '',
  tight: 'py-12 md:py-16',
  default: 'py-16 md:py-24',
}

export function Section({
  children,
  className = '',
  id,
  size = 'default',
  padding = 'default',
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerContainer}
      className={`${paddings[padding]} ${className}`}
    >
      <Container size={size}>{children}</Container>
    </motion.section>
  )
}
