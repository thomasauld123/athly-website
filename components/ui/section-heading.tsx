'use client'

import { cn } from '@/lib/utils'
import { Reveal } from '@/components/visual/Reveal'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'center' | 'left'
}

export function SectionHeading({ title, subtitle, className, align = 'center' }: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        align === 'center' ? 'text-center' : 'text-left',
        'mb-12',
        className
      )}
    >
      <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.25rem)] tracking-tight mb-4" style={{ fontWeight: 650, letterSpacing: '-0.02em' }}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-[color:var(--text-muted)] text-[clamp(0.875rem,2vw,1rem)] leading-relaxed',
          align === 'center' && 'max-w-md mx-auto'
        )}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
