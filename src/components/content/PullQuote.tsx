import type { ReactNode } from 'react'

interface PullQuoteProps {
  children: ReactNode
  author?: string
}

export function PullQuote({ children, author }: PullQuoteProps) {
  return (
    <blockquote className="my-8 border-l-2 border-[var(--color-accent)] pl-6">
      <p className="font-[family-name:var(--font-heading)] text-xl font-medium leading-relaxed tracking-tight">
        {children}
      </p>
      {author && (
        <cite className="mt-2 block text-sm not-italic text-[var(--color-muted)]">
          {author}
        </cite>
      )}
    </blockquote>
  )
}
