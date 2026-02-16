import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Investors',
  description: 'The infrastructure layer for athlete-led products. Thesis, traction evidence, and market analysis.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
