'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'center' | 'left'
}

export function SectionHeading({ title, subtitle, className, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={cn(
        align === 'center' ? 'text-center' : 'text-left',
        'mb-12',
        className
      )}
    >
      <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.25rem)] font-bold tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-white/40 text-[clamp(0.875rem,2vw,1rem)] leading-relaxed',
          align === 'center' && 'max-w-md mx-auto'
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
