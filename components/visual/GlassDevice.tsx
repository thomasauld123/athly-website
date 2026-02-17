'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface GlassDeviceProps {
  children: ReactNode
  className?: string
  animate?: boolean
  variant?: 'front' | 'back'
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 pb-1">
      <span className="text-[10px] font-medium text-white/50">9:41</span>
      <div className="flex items-center gap-1">
        <div className="flex gap-[2px]">
          {[1, 0.8, 0.6, 0.3].map((opacity, i) => (
            <div key={i} className="w-[3px] rounded-full bg-white" style={{ height: `${6 + i * 2}px`, opacity }} />
          ))}
        </div>
        <div className="w-1" />
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="text-white/50">
          <rect x="0.5" y="0.5" width="11" height="9" rx="1.5" stroke="currentColor" strokeWidth="1" />
          <rect x="2" y="2" width="7" height="6" rx="0.5" fill="currentColor" />
          <rect x="12" y="3" width="2" height="4" rx="0.5" fill="currentColor" />
        </svg>
      </div>
    </div>
  )
}

function Notch() {
  return (
    <div className="flex justify-center pt-1">
      <div className="w-[90px] h-[22px] bg-black rounded-full" />
    </div>
  )
}

export function GlassDevice({ children, className, animate = true, variant = 'front' }: GlassDeviceProps) {
  const isFront = variant === 'front'

  const shell = (
    <div
      className={cn(
        'rounded-[32px] overflow-hidden',
        isFront
          ? 'bg-white/[0.08] border border-white/[0.14]'
          : 'bg-white/[0.06] border border-white/[0.12] opacity-70',
        className
      )}
      style={{
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        boxShadow: isFront
          ? 'inset 0 1px 0 0 rgba(255,255,255,0.1), 0 25px 50px -12px rgba(0,0,0,0.6)'
          : 'inset 0 1px 0 0 rgba(255,255,255,0.08), 0 25px 50px -12px rgba(0,0,0,0.5)',
      }}
    >
      <Notch />
      <StatusBar />
      {children}
    </div>
  )

  if (!animate) return shell

  return (
    <motion.div
      animate={
        isFront
          ? { y: [0, 6, 0], rotate: [1, -0.5, 1] }
          : { y: [0, -6, 0], rotate: [-1, 1, -1] }
      }
      transition={{ duration: isFront ? 8 : 10, ease: 'easeInOut', repeat: Infinity }}
    >
      {shell}
    </motion.div>
  )
}

export { StatusBar as DeviceStatusBar, Notch as DeviceNotch }
