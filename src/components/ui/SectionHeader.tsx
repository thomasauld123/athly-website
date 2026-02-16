'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import { Badge } from './Badge'

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  badge,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 max-w-2xl space-y-4 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {badge && (
        <motion.div variants={fadeUp}>
          <Badge variant="accent">{badge}</Badge>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-3xl font-semibold tracking-tight md:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="text-lg text-[var(--color-muted)]"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
