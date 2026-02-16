import type { ComponentPropsWithoutRef } from 'react'
import { Callout } from './Callout'
import { PullQuote } from './PullQuote'
import { InlineMetric } from './InlineMetric'

export const mdxComponents = {
  Callout,
  PullQuote,
  InlineMetric,
  h1: (props: ComponentPropsWithoutRef<'h1'>) => (
    <h1 className="mt-8 mb-4 text-3xl font-semibold tracking-tight md:text-4xl" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="mt-8 mb-3 text-2xl font-semibold tracking-tight" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="mt-6 mb-2 text-xl font-semibold tracking-tight" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<'p'>) => (
    <p className="mb-4 leading-relaxed text-[var(--color-foreground)]" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<'a'>) => (
    <a
      className="text-[var(--color-accent)] underline underline-offset-2 transition-colors hover:text-[var(--color-accent-light)]"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<'ul'>) => (
    <ul className="mb-4 list-disc space-y-1 pl-6" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="mb-4 list-decimal space-y-1 pl-6" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<'li'>) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      className="my-6 border-l-2 border-[var(--color-accent)] pl-4 italic text-[var(--color-muted)]"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-[var(--color-border)]" />,
  code: (props: ComponentPropsWithoutRef<'code'>) => (
    <code
      className="rounded bg-[var(--color-surface-raised)] px-1.5 py-0.5 font-[family-name:var(--font-mono)] text-sm"
      {...props}
    />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-semibold" {...props} />
  ),
}
