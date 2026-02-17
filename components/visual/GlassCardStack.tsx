'use client'

import { motion } from 'framer-motion'

interface StackCard {
  label: string
  detail?: string
}

interface GlassCardStackProps {
  cards: StackCard[]
  className?: string
}

export function GlassCardStack({ cards, className }: GlassCardStackProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <div className="relative w-56 h-44">
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            animate={{
              y: [0, -4, 0],
              rotate: [i * 2 - 2, i * 2 - 1, i * 2 - 2],
            }}
            transition={{
              duration: 8 + i * 2,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            className="absolute rounded-2xl bg-white/[0.06] border border-white/[0.10] backdrop-blur-xl p-4 glass-sheen"
            style={{
              width: `${200 - i * 12}px`,
              top: `${i * 20}px`,
              left: `${i * 10}px`,
              zIndex: cards.length - i,
              boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.3)',
            }}
          >
            <p className="text-xs font-medium text-white/70">{card.label}</p>
            {card.detail && (
              <p className="text-[10px] text-white/35 mt-1">{card.detail}</p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
