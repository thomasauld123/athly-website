'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const navItems = [
  { label: 'For Investors', href: '/for-investors' },
  { label: 'For Managers', href: '/for-managers' },
  { label: 'For Athletes', href: '/for-athletes' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="font-[family-name:var(--font-heading)] text-xl font-semibold tracking-tight"
            >
              Athly
            </Link>

            <nav className="hidden items-center gap-8 md:flex" role="navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    pathname === item.href
                      ? 'text-[var(--color-foreground)]'
                      : 'text-[var(--color-muted)] hover:text-[var(--color-foreground)]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <ThemeToggle />
              <Button href="/contact" variant="secondary" size="sm">
                Talk to us
              </Button>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-8 w-8 items-center justify-center text-[var(--color-foreground)]"
                aria-label="Toggle menu"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {mobileOpen ? (
                    <path d="M4 4l10 10M14 4L4 14" />
                  ) : (
                    <path d="M2 5h14M2 9h14M2 13h14" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-[var(--color-background)] md:hidden"
          >
            <Container>
              <nav className="flex flex-col gap-1 pt-4" role="navigation">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-md px-4 py-3 text-base transition-colors ${
                      pathname === item.href
                        ? 'bg-[var(--color-surface-raised)] text-[var(--color-foreground)]'
                        : 'text-[var(--color-muted)] hover:text-[var(--color-foreground)]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-4 border-t border-[var(--color-border)] pt-4">
                  <Button href="/contact" variant="secondary" size="md" className="w-full">
                    Talk to us
                  </Button>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
