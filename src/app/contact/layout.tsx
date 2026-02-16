import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Athly team. Whether you\'re an investor, manager, or athlete.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
