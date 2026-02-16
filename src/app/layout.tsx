import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { spaceGrotesk, inter, jetbrainsMono } from '@/lib/fonts'
import { ThemeProvider, ThemeScript } from '@/lib/theme'
import { Header } from '@/components/navigation/Header'
import { Footer } from '@/components/navigation/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Athly — Productised guidance for athletes',
    template: '%s | Athly',
  },
  description:
    'AI-powered platforms that let athletes and creators convert authority into compounding revenue without becoming full-time creators.',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Athly',
    title: 'Athly — Productised guidance for athletes',
    description:
      'AI-powered platforms that let athletes and creators convert authority into compounding revenue without becoming full-time creators.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Athly — Productised guidance for athletes',
    description:
      'AI-powered platforms that let athletes and creators convert authority into compounding revenue without becoming full-time creators.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
