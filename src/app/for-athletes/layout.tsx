import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Athletes',
  description: 'Convert your expertise into compounding revenue. Structured, personal, and completely yours.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
