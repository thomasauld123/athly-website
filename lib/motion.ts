import type { Variants } from 'framer-motion'

export const EASE_OUT_QUART: [number, number, number, number] = [0.25, 1, 0.5, 1]

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
}

export const athlyStaggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.45,
    },
  },
}

export const fadeSlideItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_QUART },
  },
}

export const fadeScaleItem: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_OUT_QUART },
  },
}

export const staticVariants: Variants = {
  hidden: {},
  show: {},
}
