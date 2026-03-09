'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/ui/Container'
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
          ? 'bg-[#060D18]/95 backdrop-blur-xl border-b border-[#2D4A6E]/60'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-[family-name:var(--font-display)] text-xl font-black tracking-[0.04em] uppercase text-white"
            >
              Athly
            </button>
            <Badge variant="accent" className="text-[10px]">
              Coming soon
            </Badge>
          </div>

          <nav className="hidden items-center gap-8 md:flex" role="navigation">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="text-[13px] font-semibold transition-colors hover:text-white"
                style={{ color: 'var(--fog)' }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <Button
            size="sm"
            onClick={() => scrollToSection('waitlist')}
            className="hidden sm:inline-flex bg-[#0A1628] text-white hover:bg-[#1E3A5F] border border-[#2D4A6E]"
          >
            Get early access
          </Button>
        </div>
      </Container>
    </motion.header>
  )
}
