import * as React from 'react'
import { cn } from '@/lib/utils'

interface GlassProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  sheen?: boolean
}

const GlassPanel = React.forwardRef<HTMLDivElement, GlassProps>(
  ({ className, hover = false, sheen = false, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'glass-surface rounded-3xl',
        hover && 'glass-interactive',
        sheen && 'glass-sheen',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
GlassPanel.displayName = 'GlassPanel'

const GlassCard = React.forwardRef<HTMLDivElement, GlassProps>(
  ({ className, hover = true, sheen = true, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'glass-surface rounded-[18px]',
        hover && 'glass-interactive',
        sheen && 'glass-sheen',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
GlassCard.displayName = 'GlassCard'

const GlassPill = React.forwardRef<HTMLDivElement, GlassProps>(
  ({ className, hover = false, sheen = false, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'glass-surface rounded-full',
        hover && 'glass-interactive',
        sheen && 'glass-sheen',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
GlassPill.displayName = 'GlassPill'

export { GlassPanel, GlassCard, GlassPill }
