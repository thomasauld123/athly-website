interface InlineMetricProps {
  value: string
  label: string
}

export function InlineMetric({ value, label }: InlineMetricProps) {
  return (
    <span className="inline-flex items-baseline gap-1.5 rounded-md bg-[var(--color-surface-raised)] px-2.5 py-1 font-[family-name:var(--font-mono)] text-sm">
      <span className="font-semibold text-[var(--color-foreground)]">{value}</span>
      <span className="text-xs text-[var(--color-muted)]">{label}</span>
    </span>
  )
}
