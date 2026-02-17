'use client'

import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = glowRef.current
    if (!el) return

    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    function onMove(e: MouseEvent) {
      if (!el) return
      el.style.top = `${e.clientY}px`
      el.style.left = `${e.clientX}px`
      el.classList.add('active')
    }

    function onLeave() {
      if (!el) return
      el.classList.remove('active')
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
}
