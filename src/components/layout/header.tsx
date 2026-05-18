'use client'
import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { mainNavigation } from '@/config/navigation'
import { Logo } from './logo'
import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'
import { UserNav } from './user-nav'
import { SearchBar } from './search-bar'
interface HeaderProps { className?: string }
export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)
  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  },
    [])
  // TODO Phase 1: replace with await auth() in a server wrapper
  const user = undefined
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'border-b border-[var(--gray-200)] bg-white/95 shadow-[0_1px_3px_rgba(0,0,0,0.05)] backdrop-blur-md'
          : 'border-b border-transparent bg-white',
        className
      )}
    >
      {/* Main bar — DS §5.5: height 72px */}
      <div className="container flex h-[72px] items-center justify-between gap-4">
        {/* Left: Logo + Desktop Nav */}
        <div className="flex items-center gap-8">
          <Logo />
          <MainNav items={mainNavigation} />
        </div>
        {/* Center: Search (desktop only) */}
        <div className="hidden flex-1 max-w-md justify-center lg:flex">
          <SearchBar />
        </div>
        {/* Right: Provider CTA + Auth + Mobile menu */}
        <div className="flex items-center gap-2">
          {/* Provider CTA — supply-side acquisition, always visible */}
          <Link
            href="/register?role=provider"
            className={cn(
              'hidden items-center gap-1.5 rounded-lg border-2 border-[var(--primary-600)] px-4 py-2 text-sm font-semibold text-[var(--primary-600)] transition-all duration-200 hover:bg-[var(--primary-50)] hover:border-[var(--primary-700)] md:flex',
              isScrolled ? '' : 'border-[var(--primary-600)]'
            )}
          >
            Proposer une expérience
          </Link>
          <UserNav user={user} />
          <MobileNav items={mainNavigation} />
        </div>
      </div>
      {/* Mobile search row */}
      <div className="border-t border-[var(--gray-100)] bg-white px-4 py-2.5 lg:hidden">
        <SearchBar placeholder="Destination, activité, guide..." />
      </div>
    </header>
  )
}