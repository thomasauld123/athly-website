'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FloatClusterProps {
  className?: string
  variant?: 'default' | 'invite' | 'drop'
}

export function FloatCluster({ className, variant = 'default' }: FloatClusterProps) {
  if (variant === 'invite') {
    return (
      <div className={cn('pointer-events-none select-none', className)}>
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [-2, 1, -2] }}
          transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity }}
          className="w-64 rounded-3xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl p-6"
          style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.06), 0 16px 40px rgba(0,0,0,0.3)' }}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
              <p className="text-xs font-medium text-white/50">Invite wave</p>
            </div>
            <div className="h-px bg-white/[0.06]" />
            <div className="space-y-2">
              <div className="h-2 w-3/4 rounded-full bg-white/[0.06]" />
              <div className="h-2 w-1/2 rounded-full bg-white/[0.06]" />
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-medium"
              style={{ background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid var(--accent-border)' }}
            >
              You&apos;re in
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  if (variant === 'drop') {
    return (
      <div className={cn('pointer-events-none select-none', className)}>
        <motion.div
          animate={{ y: [0, -6, 0], rotate: [1, -1, 1] }}
          transition={{ duration: 9, ease: 'easeInOut', repeat: Infinity }}
          className="w-48 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl p-4"
          style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.06), 0 12px 32px rgba(0,0,0,0.3)' }}
        >
          <p className="text-[10px] font-medium text-white/50 mb-2">Next drop</p>
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-white/[0.06]" />
            <div className="h-1.5 w-2/3 rounded-full bg-white/[0.06]" />
          </div>
          <div className="mt-3 flex gap-1.5">
            <div className="h-5 w-5 rounded-md bg-white/[0.06]" />
            <div className="h-5 w-5 rounded-md bg-white/[0.06]" />
            <div className="h-5 w-5 rounded-md bg-white/[0.06]" />
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={cn('pointer-events-none select-none', className)}>
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity }}
        className="w-44 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl p-3"
        style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.3)' }}
      >
        <div className="space-y-2">
          <div className="h-1.5 w-3/4 rounded-full bg-white/[0.06]" />
          <div className="h-1.5 w-1/2 rounded-full bg-white/[0.06]" />
        </div>
      </motion.div>
    </div>
  )
}
