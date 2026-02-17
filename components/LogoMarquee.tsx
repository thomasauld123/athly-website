'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const logos = [
  { name: 'Logo 1', src: '/LOGO 1.svg' },
  { name: 'Logo 2', src: '/LOGO 2.png' },
  { name: 'Logo 3', src: '/LOGO 3.png' },
  { name: 'Logo 4', src: '/LOGO 4.png' },
  { name: 'Logo 5', src: '/LOGO 5.png' },
  { name: 'Logo 6', src: '/LOGO 6.jpg' },
  { name: 'Logo 7', src: '/LOGO 7.jpg' },
  { name: 'Logo 8', src: '/LOGO 8.svg' },
]

function LogoItem({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex items-center justify-center px-8 h-12 flex-shrink-0 opacity-40 hover:opacity-70 transition-opacity duration-300 cursor-default">
      <Image
        src={src}
        alt={name}
        width={120}
        height={48}
        className="h-8 w-auto object-contain brightness-0 invert"
        draggable={false}
      />
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
      className="relative py-10 overflow-hidden"
    >
      <div className="mx-auto px-6" style={{ maxWidth: 'var(--container-max)' }}>
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-white/25 mb-8">
          Built around the sports you live in
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          <div className="flex flex-shrink-0">
            {logos.map((logo, i) => (
              <LogoItem key={`a-${i}`} name={logo.name} src={logo.src} />
            ))}
          </div>
          <div className="flex flex-shrink-0">
            {logos.map((logo, i) => (
              <LogoItem key={`b-${i}`} name={logo.name} src={logo.src} />
            ))}
          </div>
          <div className="flex flex-shrink-0">
            {logos.map((logo, i) => (
              <LogoItem key={`c-${i}`} name={logo.name} src={logo.src} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
