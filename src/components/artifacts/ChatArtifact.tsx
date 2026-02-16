'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

const messages = [
  {
    role: 'user' as const,
    name: 'Sarah M.',
    text: 'I want to improve my 5K time but I can only train 3 days a week.',
  },
  {
    role: 'assistant' as const,
    name: 'Coach Liam',
    text: 'Based on your assessment, here\'s a structured plan. Day 1: tempo intervals. Day 2: easy aerobic. Day 3: progressive long run. Each session adapts to your pace data.',
  },
  {
    role: 'user' as const,
    name: 'Sarah M.',
    text: 'My knee has been sore after Tuesday\'s session.',
  },
  {
    role: 'assistant' as const,
    name: 'Coach Liam',
    text: 'I\'ve adjusted Thursday to low-impact cross-training. Your progression stays on track. Let\'s reassess after the next two sessions.',
  },
]

export function ChatArtifact() {
  return (
    <motion.div
      variants={fadeUp}
      className="w-full max-w-sm overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
    >
      <div className="border-b border-[var(--color-border)] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[var(--color-success)]" />
          <span className="text-xs font-medium">Guided Session</span>
          <span className="ml-auto text-xs text-[var(--color-muted)]">Live</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            <span className="text-[10px] font-medium text-[var(--color-muted)]">{msg.name}</span>
            <div
              className={`max-w-[85%] rounded-lg px-3 py-2 text-xs leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-[var(--color-foreground)] text-[var(--color-background)]'
                  : 'bg-[var(--color-surface-raised)] text-[var(--color-foreground)]'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--color-border)] px-4 py-2">
        <div className="flex items-center gap-2 rounded-md bg-[var(--color-surface-raised)] px-3 py-1.5">
          <span className="text-xs text-[var(--color-muted)]">Ask a follow-up...</span>
        </div>
      </div>
    </motion.div>
  )
}
