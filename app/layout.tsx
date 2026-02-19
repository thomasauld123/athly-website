import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Athly — Train with athletes you trust',
  description:
    'You\'re training for something real. Get a weekly plan, direct guidance, and real accountability — from athletes who\'ve been where you want to go.',
  openGraph: {
    type: 'website',
    title: 'Athly — Train with athletes you trust',
    description:
      'You\'re training for something real. Get a weekly plan, direct guidance, and real accountability — from athletes who\'ve been where you want to go.',
    siteName: 'Athly',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Athly — Train with athletes you trust',
    description:
      'You\'re training for something real. Get a weekly plan, direct guidance, and real accountability — from athletes who\'ve been where you want to go.',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
