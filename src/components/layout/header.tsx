'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { mainNavigation } from '@/config/navigation'
import { Logo } from './logo'
import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'
import { UserNav } from './user-nav'
import { SearchBar } from './search-bar'

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)

  // Detect scroll for sticky header effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mock user - TODO: Replace with real auth
  const user = undefined // or { name: 'John Doe', email: 'john@example.com', role: 'traveler' as const }

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
      <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
        {/* Left: Logo + Main Nav */}
        <div className="flex items-center gap-6">
          <Logo />
          <MainNav items={mainNavigation} />
        </div>

        {/* Center: Search Bar (Desktop) */}
        <div className="hidden flex-1 justify-center lg:flex">
          <SearchBar />
        </div>

        {/* Right: User Nav + Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* User Navigation */}
          <UserNav user={user} />

          {/* Mobile Navigation */}
          <MobileNav items={mainNavigation} />
        </div>
      </div>

      {/* Search Bar Mobile (Below header) */}
      <div className="border-t bg-background px-4 py-3 lg:hidden">
        <SearchBar placeholder="Rechercher..." />
      </div>
    </header>
  )
}