// No 'use client' directive — this is a Server Component
import { mainNavigation } from '@/config/navigation'
import { ScrollHeader } from './scroll-header'
import { Logo } from './logo'
import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'
import { UserNav } from './user-nav'
import { SearchBar } from './search-bar'

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  // TODO: Replace with real auth session — next-auth getServerSession()
  const user = undefined

  return (
    <ScrollHeader className={className}>
      <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
        {/* Left: Logo + Desktop Nav */}
        <div className="flex items-center gap-6">
          <Logo />
          <MainNav items={mainNavigation} />
        </div>

        {/* Center: Search (Desktop) */}
        <div className="hidden flex-1 justify-center lg:flex">
          <SearchBar />
        </div>

        {/* Right: User Nav + Mobile Menu */}
        <div className="flex items-center gap-2">
          <UserNav user={user} />
          <MobileNav items={mainNavigation} />
        </div>
      </div>

      {/* Search Bar — Mobile (below header row) */}
      <div className="border-t bg-background px-4 py-3 lg:hidden">
        <SearchBar placeholder="Rechercher..." />
      </div>
    </ScrollHeader>
  )
}