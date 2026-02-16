import type { ReactNode } from 'react'

interface CalloutProps {
  children: ReactNode
  type?: 'default' | 'insight' | 'warning'
}

const styles = {
  default: 'border-[var(--color-border-strong)] bg-[var(--color-surface-raised)]',
  insight: 'border-[var(--color-accent)] bg-[var(--color-accent-muted)]',
  warning: 'border-amber-500 bg-amber-50 dark:bg-amber-950/20',
}

export function Callout({ children, type = 'default' }: CalloutProps) {
  return (
    <div className={`my-6 rounded-lg border-l-2 p-4 ${styles[type]}`}>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )
}
