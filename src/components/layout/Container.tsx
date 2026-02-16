import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'default' | 'narrow' | 'wide'
}

const sizes = {
  narrow: 'max-w-4xl',
  default: 'max-w-7xl',
  wide: 'max-w-[1440px]',
}

export function Container({ children, className = '', size = 'default' }: ContainerProps) {
  return (
    <div className={`mx-auto px-6 md:px-8 ${sizes[size]} ${className}`}>
      {children}
    </div>
  )
}
