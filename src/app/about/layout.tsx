import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Building the infrastructure athletes deserve. Our origin, approach, and principles.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
