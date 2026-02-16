'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

const metrics = [
  { label: 'Active Users', value: '2,847', change: '12%', positive: true },
  { label: 'Completion Rate', value: '78%', change: '4%', positive: true },
  { label: 'Avg. Retention', value: '6.2 mo', change: '0.8 mo', positive: true },
  { label: 'Revenue / User', value: '$34', change: '18%', positive: true },
]

const chartBars = [35, 42, 38, 56, 62, 58, 71, 68, 74, 82, 78, 89]

export function DashboardArtifact() {
  return (
    <motion.div
      variants={fadeUp}
      className="w-full max-w-md overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
    >
      <div className="border-b border-[var(--color-border)] px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium">Platform Overview</span>
          <span className="rounded-full bg-[var(--color-surface-raised)] px-2 py-0.5 text-[10px] text-[var(--color-muted)]">
            Last 30 days
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-px border-b border-[var(--color-border)] bg-[var(--color-border)]">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-[var(--color-surface)] p-4">
            <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--color-muted)]">
              {metric.label}
            </p>
            <p className="mt-1 font-[family-name:var(--font-heading)] text-xl font-semibold tracking-tight">
              {metric.value}
            </p>
            <p className="mt-0.5 text-[10px] font-medium text-[var(--color-success)]">
              +{metric.change}
            </p>
          </div>
        ))}
      </div>

      <div className="p-4">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-[var(--color-muted)]">
          Engagement trend
        </p>
        <div className="flex h-16 items-end gap-1">
          {chartBars.map((height, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-[var(--color-accent)] opacity-60 transition-opacity hover:opacity-100"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="mt-1 flex justify-between text-[9px] text-[var(--color-muted)]">
          <span>Jan</span>
          <span>Dec</span>
        </div>
      </div>
    </motion.div>
  )
}
