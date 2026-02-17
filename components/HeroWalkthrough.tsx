'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, CalendarCheck, MessageCircle, CheckCircle2 } from 'lucide-react'

const steps = [
  { icon: Users, label: 'Pick an athlete', detail: 'Choose who you trust' },
  { icon: CalendarCheck, label: 'Plan appears', detail: 'Week 4 — speed endurance' },
  { icon: MessageCircle, label: 'Send a message', detail: '"I fade late in games"' },
  { icon: CheckCircle2, label: 'Plan updates', detail: 'Adjusted to your feedback' },
]

export function HeroWalkthrough() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-6">
      {/* Active step detail */}
      <div className="h-10 flex items-center justify-center mb-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            {(() => {
              const Icon = steps[active].icon
              return <Icon className="h-3.5 w-3.5 text-[color:var(--accent)]" strokeWidth={1.5} />
            })()}
            <span className="text-xs text-white/60">{steps[active].label}</span>
            <span className="text-[10px] text-white/30">— {steps[active].detail}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Step dots */}
      <div className="flex items-center justify-center gap-2">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="relative h-1.5 rounded-full transition-all duration-500"
            style={{
              width: i === active ? '24px' : '6px',
              background: i === active ? 'var(--accent)' : 'rgba(255,255,255,0.15)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
