'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

interface CardProps {
  children: ReactNode
  href?: string
  className?: string
  hover?: boolean
}

export function Card({ children, href, className = '', hover = true }: CardProps) {
  const baseClasses = `rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 ${
    hover ? 'transition-all duration-200 hover:border-[var(--color-border-strong)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]' : ''
  } ${className}`

  const content = (
    <motion.div variants={fadeUp} className={baseClasses}>
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    )
  }

  return content
}
