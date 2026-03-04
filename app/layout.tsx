import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Bebas_Neue, Space_Mono, DM_Sans } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-display',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-mono',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Athly — Train with athletes you trust',
  description:
    "You're training for something real. Get a weekly plan, direct guidance, and real accountability — from athletes who've been where you want to go.",
  openGraph: {
    type: 'website',
    title: 'Athly — Train with athletes you trust',
    description:
      "You're training for something real. Get a weekly plan, direct guidance, and real accountability — from athletes who've been where you want to go.",
    siteName: 'Athly',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Athly — Train with athletes you trust',
    description:
      "You're training for something real. Get a weekly plan, direct guidance, and real accountability — from athletes who've been where you want to go.",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${spaceMono.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
