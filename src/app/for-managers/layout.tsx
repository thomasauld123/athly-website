import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Managers',
  description: 'Repeatable, brand-safe revenue systems for your athletes. Built for talent management scale.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
