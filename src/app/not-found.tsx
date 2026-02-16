'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/layout'
import { Button } from '@/components/ui'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function NotFound() {
  return (
    <Section className="flex min-h-[60vh] items-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-md text-center"
      >
        <motion.p
          variants={fadeUp}
          className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-muted)]"
        >
          404
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Page not found.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-3 text-[var(--color-muted)]"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-6">
          <Button href="/" variant="secondary">
            Back to home
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  )
}
