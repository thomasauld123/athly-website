import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Barlow_Condensed, Barlow, JetBrains_Mono } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '900'],
  display: 'swap',
  variable: '--font-display',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-mono',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
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
    <html lang="en" className={`${barlowCondensed.variable} ${jetbrainsMono.variable} ${barlow.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
