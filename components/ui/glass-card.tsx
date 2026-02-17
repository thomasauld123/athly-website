import * as React from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  sheen?: boolean
  radius?: 'card' | 'panel'
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hover = true, sheen = true, radius = 'card', children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'glass',
        radius === 'panel' ? 'rounded-3xl' : 'rounded-2xl',
        hover && 'glass-hover transition-all duration-300',
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

export { GlassCard }
