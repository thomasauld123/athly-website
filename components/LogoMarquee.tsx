'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const logos = [
  { name: 'Logo 1', src: '/logo-1.svg' },
  { name: 'Logo 2', src: '/logo-2.svg' },
  { name: 'Logo 3', src: '/logo-3.png' },
  { name: 'Logo 4', src: '/logo-4.svg' },
  { name: 'Logo 5', src: '/logo-5.svg' },
  { name: 'Logo 6', src: '/logo-6.webp' },
  { name: 'Logo 7', src: '/logo-7.svg' },
  { name: 'Logo 8', src: '/logo-8.svg' },
  { name: 'Logo 9', src: '/logo-9.png' },
  { name: 'Logo 10', src: '/logo-10.svg' },
]

function LogoItem({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex items-center justify-center px-10 h-14 flex-shrink-0 opacity-40 hover:opacity-70 transition-opacity duration-300 cursor-default">
      <Image
        src={src}
        alt={name}
        width={140}
        height={56}
        className="h-8 md:h-10 w-auto object-contain grayscale"
        draggable={false}
      />
    </div>
  )
}

export function LogoMarquee() {
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from([labelRef.current], {
        opacity: 0,
        y: 12,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-12 md:py-16 overflow-hidden">
      <div className="mx-auto w-full max-w-[var(--container-max)] px-6 md:px-8">
        <p
          ref={labelRef}
          className="text-center font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-white/25 mb-8"
        >
          Built around the sports you live in
        </p>
      </div>

      <div
        className="relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
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
    </section>
  )
}
