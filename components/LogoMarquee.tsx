'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: 'AFL', width: 'w-12' },
  { name: 'NRL', width: 'w-12' },
  { name: 'Cricket Australia', width: 'w-28' },
  { name: 'Football Australia', width: 'w-32' },
  { name: 'Surfing Australia', width: 'w-28' },
  { name: 'Olympics', width: 'w-16' },
  { name: 'NBL', width: 'w-12' },
  { name: 'A-League', width: 'w-16' },
]

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-8 h-10 flex-shrink-0 opacity-40 hover:opacity-70 transition-opacity duration-300 cursor-default">
      <span className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-white whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

export function LogoMarquee() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="relative py-12 px-6 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-white/25 mb-8">
          Built around the sports you live in
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {/* First copy */}
          <div className="flex flex-shrink-0">
            {logos.map((logo, i) => (
              <LogoItem key={`a-${i}`} name={logo.name} />
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex flex-shrink-0">
            {logos.map((logo, i) => (
              <LogoItem key={`b-${i}`} name={logo.name} />
            ))}
          </div>
          {/* Third copy for extra safety */}
          <div className="flex flex-shrink-0">
            {logos.map((logo, i) => (
              <LogoItem key={`c-${i}`} name={logo.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
