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
        'sticky top-0 z-50 w-full transition-all duration-300 ease-out',
        isScrolled
          ? 'border-b border-slate-200/70 bg-background/95 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.2)] backdrop-blur-xl'
          : 'bg-background/80 shadow-none supports-[backdrop-filter]:backdrop-blur-xl',
        className
      )}
    >
      {children}
    </header>
  )
}