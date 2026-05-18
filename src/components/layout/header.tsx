'use client'
import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { mainNavigation } from '@/config/navigation'
import { Logo } from './logo'
import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'
import { UserNav } from './user-nav'
import { SearchBar } from './search-bar'
import { Sparkles, Menu, X } from 'lucide-react'

interface HeaderProps { 
  className?: string 
}

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile search on route change
  React.useEffect(() => {
    setIsMobileSearchOpen(false)
  }, [pathname])

  // TODO Phase 1: replace with await auth() in a server wrapper
  const user = undefined

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 ease-out',
        isScrolled
          ? 'border-b border-gray-200/80 bg-white/95 shadow-lg shadow-gray-900/5 backdrop-blur-md supports-[backdrop-filter]:bg-white/90'
          : 'border-b border-transparent bg-white',
        className
      )}
    >
      {/* Main bar — height 72px */}
      <div className="container flex h-[72px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        
        {/* Left: Logo + Desktop Navigation */}
        <div className="flex items-center gap-6 lg:gap-8">
          <Logo />
          <MainNav items={mainNavigation} />
        </div>

        {/* Center: Search Bar (desktop only) */}
        <div className="hidden flex-1 max-w-md justify-center lg:flex">
          <SearchBar />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Provider CTA — professional badge style */}
          <Link
            href="/register?role=provider"
            className={cn(
              'group relative hidden items-center gap-2 overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 md:flex',
              'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-md shadow-primary-600/20',
              'hover:shadow-lg hover:shadow-primary-600/30 hover:-translate-y-0.5',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2',
              isScrolled ? 'ring-1 ring-white/20' : ''
            )}
          >
            <Sparkles className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" />
            <span>Proposer une expérience</span>
          </Link>

          {/* User Navigation */}
          <UserNav user={user} />

          {/* Mobile Menu Toggle (replaces individual mobile nav trigger) */}
          <MobileNav items={mainNavigation} />

          {/* Mobile Search Toggle */}
          <button
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-primary-600 lg:hidden"
            aria-label={isMobileSearchOpen ? "Fermer la recherche" : "Ouvrir la recherche"}
          >
            {isMobileSearchOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar (expandable) */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-out lg:hidden',
          isMobileSearchOpen ? 'max-h-24 border-t border-gray-100 bg-white px-4 py-3' : 'max-h-0'
        )}
      >
        <SearchBar 
          placeholder="Rechercher une destination, activité ou guide..."
          className="w-full"
        />
      </div>
    </header>
  )
}