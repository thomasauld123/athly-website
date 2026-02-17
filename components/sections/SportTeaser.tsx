'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/visual/Reveal'
import { GlassPanel } from '@/components/ui/glass-card'
import { Search } from 'lucide-react'

const sportData: Record<string, { athletes: number; label: string }> = {
  afl: { athletes: 3, label: 'AFL' },
  football: { athletes: 2, label: 'Football' },
  rugby: { athletes: 2, label: 'Rugby' },
  nrl: { athletes: 1, label: 'NRL' },
  cricket: { athletes: 1, label: 'Cricket' },
  basketball: { athletes: 1, label: 'Basketball' },
  netball: { athletes: 1, label: 'Netball' },
  swimming: { athletes: 1, label: 'Swimming' },
  tennis: { athletes: 1, label: 'Tennis' },
  surf: { athletes: 1, label: 'Surf' },
  athletics: { athletes: 1, label: 'Athletics' },
}

export function SportTeaser() {
  const [query, setQuery] = useState('')

  const normalised = query.trim().toLowerCase()
  const match = normalised.length >= 2
    ? Object.entries(sportData).find(([key, data]) =>
        key.includes(normalised) || data.label.toLowerCase().includes(normalised)
      )
    : null

  return (
    <Section>
      <Container>
        <Reveal>
          <div className="max-w-md mx-auto text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/25 mb-6">
              Your sport. Your athlete.
            </p>

            <GlassPanel className="p-5">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <Search className="h-4 w-4 text-white/25 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Type your sport..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="bg-transparent text-sm text-white placeholder:text-white/30 outline-none w-full"
                />
              </div>

              <div className="h-12 flex items-center justify-center mt-3">
                <AnimatePresence mode="wait">
                  {match ? (
                    <motion.div
                      key={match[0]}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent-soft)] border border-[color:var(--accent-border)] px-3 py-1.5"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]" />
                      <span className="text-xs text-white/70">
                        {match[1].athletes} {match[1].label} athlete{match[1].athletes > 1 ? 's' : ''} on the launch roster
                      </span>
                    </motion.div>
                  ) : query.length >= 2 ? (
                    <motion.p
                      key="no-match"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-white/30"
                    >
                      No athletes yet — tell us who you want on the waitlist
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>
            </GlassPanel>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
