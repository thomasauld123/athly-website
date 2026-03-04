import { useRef } from 'react'
import { useScroll } from 'framer-motion'

// Valid scroll offset values for Framer Motion's useScroll
type OffsetValue = 'start' | 'end' | 'center' | `${number}` | `${number}px` | `${number}vw` | `${number}vh` | `${number}%`
type ScrollEdge = `${OffsetValue} ${OffsetValue}` | 'start start' | 'start end' | 'end start' | 'end end' | 'center center'

interface UseScrollSectionOptions {
  offsetStart?: ScrollEdge
  offsetEnd?: ScrollEdge
}

export function useScrollSection(options?: UseScrollSectionOptions) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [
      options?.offsetStart ?? 'start start',
      options?.offsetEnd ?? 'end end',
    ],
  })
  return { ref, scrollYProgress }
}
