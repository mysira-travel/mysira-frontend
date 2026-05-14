'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface ScrollHeaderProps {
  children: React.ReactNode
  className?: string
}

export function ScrollHeader({ children, className }: ScrollHeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200',
        isScrolled
          ? 'border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60'
          : 'border-b bg-background',
        className
      )}
    >
      {children}
    </header>
  )
}