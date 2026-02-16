'use client'

import { type ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

const variants = {
  primary:
    'bg-[var(--color-foreground)] text-[var(--color-background)] hover:opacity-90',
  secondary:
    'border border-[var(--color-border-strong)] text-[var(--color-foreground)] hover:bg-[var(--color-surface-raised)] hover:border-[var(--color-foreground)]',
  ghost:
    'text-[var(--color-muted)] hover:text-[var(--color-foreground)]',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-150 ${variants[variant]} ${sizes[size]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.15 },
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </motion.button>
  )
}
