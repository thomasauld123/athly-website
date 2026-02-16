'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/layout'
import { Button, Badge } from '@/components/ui'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <Section padding="none" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="grid gap-16 lg:grid-cols-2">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6">
          <motion.div variants={fadeUp}>
            <Badge variant="accent">Contact</Badge>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl font-semibold tracking-tight md:text-5xl">
            Let&apos;s talk.
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-md text-lg text-[var(--color-muted)]">
            Whether you're an investor exploring the thesis, a manager evaluating options,
            or an athlete interested in building — reach out.
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-6 pt-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">Email</p>
              <p className="mt-1 text-[var(--color-foreground)]">hello@athly.com</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">Response time</p>
              <p className="mt-1 text-[var(--color-foreground)]">Usually within 24 hours.</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">What to expect</p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                No sales pitch. We'll have a straightforward conversation about whether
                Athly is a fit for your situation.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {submitted ? (
            <div className="flex h-full items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-12 text-center">
              <div className="space-y-3">
                <p className="text-lg font-semibold">Message received.</p>
                <p className="text-sm text-[var(--color-muted)]">We'll be in touch within 24 hours.</p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="space-y-5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-sm outline-none transition-colors focus:border-[var(--color-accent)] placeholder:text-[var(--color-muted-foreground)]"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-sm outline-none transition-colors focus:border-[var(--color-accent)] placeholder:text-[var(--color-muted-foreground)]"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium">
                  I am a...
                </label>
                <select
                  id="type"
                  className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
                >
                  <option>Investor</option>
                  <option>Manager / Agency</option>
                  <option>Athlete / Creator</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-sm outline-none transition-colors focus:border-[var(--color-accent)] placeholder:text-[var(--color-muted-foreground)] resize-none"
                  placeholder="Tell us what you're looking for..."
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send message
              </Button>

              <p className="text-xs text-center text-[var(--color-muted)]">
                No spam. No mailing list. Just a conversation.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  )
}
