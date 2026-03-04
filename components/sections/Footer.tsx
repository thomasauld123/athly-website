'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Separator } from '@/components/ui/separator'
import { Container } from '@/components/ui/Container'

gsap.registerPlugin(ScrollTrigger)

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          once: true,
        },
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="relative py-12">
      <Container>
        <Separator className="mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'var(--text-dim)' }}>
            &copy; {new Date().getFullYear()} Athly. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@athly.com"
              className="text-xs hover:text-white/60 transition-colors"
              style={{ color: 'var(--text-dim)' }}
            >
              hello@athly.com
            </a>
            <span className="text-xs hover:text-white/60 transition-colors cursor-default" style={{ color: 'var(--text-dim)' }}>
              Privacy
            </span>
            <span className="text-xs hover:text-white/60 transition-colors cursor-default" style={{ color: 'var(--text-dim)' }}>
              Terms
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
