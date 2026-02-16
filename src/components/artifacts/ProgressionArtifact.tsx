'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

const steps = [
  {
    label: 'Assessment',
    description: 'Baseline captured',
    status: 'complete' as const,
    detail: '5K: 28:42 / VO2 est: 38',
  },
  {
    label: 'Prescription',
    description: 'Plan generated',
    status: 'complete' as const,
    detail: '12-week progressive build',
  },
  {
    label: 'Practice',
    description: 'Week 6 of 12',
    status: 'active' as const,
    detail: '18 sessions completed',
  },
  {
    label: 'Tracking',
    description: 'Continuous',
    status: 'active' as const,
    detail: 'Pace improving 4.2%',
  },
  {
    label: 'Progression',
    description: 'Next milestone',
    status: 'upcoming' as const,
    detail: 'Target: sub-26:00',
  },
]

export function ProgressionArtifact() {
  return (
    <motion.div
      variants={fadeUp}
      className="w-full max-w-sm overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
    >
      <div className="border-b border-[var(--color-border)] px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium">Progression Track</span>
          <span className="rounded-full bg-[var(--color-accent-muted)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-accent)]">
            On pace
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-medium ${
                    step.status === 'complete'
                      ? 'bg-[var(--color-foreground)] text-[var(--color-background)]'
                      : step.status === 'active'
                      ? 'border-2 border-[var(--color-accent)] text-[var(--color-accent)]'
                      : 'border border-[var(--color-border)] text-[var(--color-muted)]'
                  }`}
                >
                  {step.status === 'complete' ? (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 5l2.5 2.5L8 3" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`h-8 w-px ${
                      step.status === 'complete'
                        ? 'bg-[var(--color-foreground)]'
                        : 'bg-[var(--color-border)]'
                    }`}
                  />
                )}
              </div>
              <div className="pb-6">
                <p className="text-xs font-medium">{step.label}</p>
                <p className="text-[10px] text-[var(--color-muted)]">{step.description}</p>
                <p className="mt-1 rounded bg-[var(--color-surface-raised)] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-muted)]">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
