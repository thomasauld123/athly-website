'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { scrollToSection } from '@/lib/scroll'

const navLinks = [
  { label: 'How it works', target: 'how-it-works' },
  { label: 'Athletes', target: 'athletes' },
  { label: 'Waitlist', target: 'waitlist' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Left: wordmark + pill */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-white"
            >
              Athly
            </button>
            <Badge variant="accent" className="text-[10px]">
              Coming soon
            </Badge>
          </div>

          {/* Center: nav links (desktop) */}
          <nav className="hidden items-center gap-8 md:flex" role="navigation">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right: CTA */}
          <Button
            size="sm"
            onClick={() => scrollToSection('waitlist')}
            className="hidden sm:inline-flex"
          >
            Get early access
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
