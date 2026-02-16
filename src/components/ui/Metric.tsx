'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

interface MetricProps {
  label: string
  value: string
  change?: string
  positive?: boolean
}

export function Metric({ label, value, change, positive = true }: MetricProps) {
  return (
    <motion.div variants={fadeUp} className="space-y-1">
      <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
        {label}
      </p>
      <p className="font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-tight">
        {value}
      </p>
      {change && (
        <p
          className={`text-xs font-medium ${
            positive ? 'text-[var(--color-success)]' : 'text-red-500'
          }`}
        >
          {positive ? '+' : ''}{change}
        </p>
      )}
    </motion.div>
  )
}
