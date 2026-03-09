'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GlassPanel } from '@/components/ui/glass-card'
import { Container } from '@/components/ui/Container'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

gsap.registerPlugin(ScrollTrigger)

const faq = [
  {
    question: 'When can I get access?',
    answer:
      "We're rolling out invite waves starting soon. Waitlist members get priority — the earlier you sign up, the earlier you're in.",
  },
  {
    question: 'What do I actually get?',
    answer:
      "One consolidated plan — training, skills, and recovery — shaped by an athlete's methodology and adapted to your goals. Plus messaging within the athlete's community for adjustments.",
  },
  {
    question: 'Can I talk to athletes directly?',
    answer:
      "Athly includes a community layer and occasional limited-access check-ins with athletes. This isn't guaranteed 1:1 coaching — it's structured so that coaching insight reaches you at scale, with real moments of connection built in.",
  },
]

export function ComingSoon() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          once: true,
        },
      })
      gsap.from(panelRef.current, {
        opacity: 0,
        y: 28,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: panelRef.current,
          start: 'top 82%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-[var(--section-py)]">
      <Container>
        <div className="max-w-[640px] mx-auto">
          <div ref={headingRef} className="text-center mb-10">
            <p className="font-[family-name:var(--font-mono)] text-[11px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--fog)' }}>
              Timeline
            </p>
            <h2
              className="font-[family-name:var(--font-display)] tracking-tight text-white mb-3 uppercase"
              style={{ fontSize: 'clamp(1.6rem, 3.6vw, 2.7rem)', fontWeight: 900, letterSpacing: '-0.01em', lineHeight: 0.97 }}
            >
              Coming soon
            </h2>
            <p className="text-[15px] leading-[1.7] max-w-md mx-auto" style={{ color: 'var(--fog)' }}>
              We&apos;re building Athly now. When it&apos;s ready, we&apos;ll open access in waves — starting with the waitlist.
            </p>
          </div>

          <div ref={panelRef}>
            <GlassPanel className="p-6 md:p-8">
              <p className="font-[family-name:var(--font-mono)] text-[11px] font-bold uppercase tracking-[0.2em] mb-6" style={{ color: 'var(--fog)' }}>
                Questions
              </p>
              <Accordion type="single" collapsible className="w-full">
                {faq.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-white/5 data-[state=open]:border-l-2 data-[state=open]:border-l-[color:var(--accent)] data-[state=open]:pl-4 transition-all"
                  >
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassPanel>
          </div>
        </div>
      </Container>
    </section>
  )
}
