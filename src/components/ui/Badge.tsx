import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'accent' | 'outline'
  className?: string
}

const variants = {
  default: 'bg-[var(--color-surface-raised)] text-[var(--color-muted)]',
  accent: 'bg-[var(--color-accent-muted)] text-[var(--color-accent)]',
  outline: 'border border-[var(--color-border)] text-[var(--color-muted)]',
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
