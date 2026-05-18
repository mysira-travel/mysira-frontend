'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, ChevronRight, ChevronDown, Sparkles, Compass, Map, BookOpen, Info, Star, Eye } from 'lucide-react'

import { cn } from '@/lib/utils'
import { MainNavItem } from '@/types/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetDescription } from "@/components/ui/sheet"
import { ScrollArea } from '@/components/ui/scroll-area'
import { Logo } from './logo'

interface MobileNavProps {
    items: MainNavItem[]
}

// Icon mapping for mobile nav
const getMobileIcon = (title: string) => {
  switch (title.toLowerCase()) {
    case 'discover': return <Eye className="h-4 w-4" />
    case 'destinations': return <Map className="h-4 w-4" />
    case 'experiences': return <Compass className="h-4 w-4" />
    case 'stories': return <BookOpen className="h-4 w-4" />
    case 'how it works': return <Info className="h-4 w-4" />
    default: return <Star className="h-4 w-4" />
  }
}

export function MobileNav({ items }: MobileNavProps) {
    const pathname = usePathname()
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden hover:bg-primary/10"
                    aria-label="Toggle menu"
                >
                    <Menu className="h-5 w-5" />
                </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-full max-w-sm p-0 rounded-r-2xl border-r border-slate-200/70 bg-white shadow-2xl"
            >
                <SheetHeader className="border-b border-slate-200/70 px-5 py-4">
                    <div className="flex items-center justify-between">
                        <Logo showText />
                    </div>
                    <SheetDescription className="mt-2 text-xs text-gray-500">
                        Découvrez le Sahara autrement
                    </SheetDescription>
                </SheetHeader>
                
                <div className="flex h-full flex-col">
                    <ScrollArea className="flex-1 py-3">
                        <nav className="flex flex-col gap-1 px-3">
                            {items.map((item) => (
                                <MobileNavItem key={item.href} item={item} />
                            ))}
                        </nav>
                    </ScrollArea>

                    {/* Footer CTA - Provider section */}
                    <div className="border-t border-slate-200/70 bg-gradient-to-br from-amber-50 to-white p-5">
                        <div className="rounded-xl bg-primary-600 p-4 text-center">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/80">
                                Vous êtes un prestataire ?
                            </p>
                            <Link
                                href="/register?role=provider"
                                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-primary-600 transition-all hover:bg-amber-50 hover:shadow-md"
                            >
                                <Sparkles className="h-3.5 w-3.5" />
                                Proposer une expérience
                            </Link>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

// Improved Mobile Nav Item with better visual hierarchy
function MobileNavItem({ item }: { item: MainNavItem }) {
    const pathname = usePathname()
    const [expanded, setExpanded] = React.useState(false)
    const hasChildren = item.items && item.items.length > 0

    const isActive = pathname === item.href || pathname?.startsWith(item.href)

    if (!hasChildren) {
        return (
            <Link
                href={item.href}
                className={cn(
                    'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200',
                    isActive
                        ? 'bg-primary/10 text-primary-700'
                        : 'text-gray-700 hover:bg-primary/5 hover:text-primary-700'
                )}
            >
                <span className="text-primary-500">
                    {getMobileIcon(item.title)}
                </span>
                <span className="flex-1">{item.title}</span>
                {item.description && (
                    <span className="text-[10px] text-gray-400">
                        {item.description}
                    </span>
                )}
            </Link>
        )
    }

    return (
        <div className="rounded-xl border border-gray-100 bg-white/50">
            <button
                onClick={() => setExpanded(!expanded)}
                className={cn(
                    'flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200',
                    isActive
                        ? 'bg-primary/10 text-primary-700'
                        : 'text-gray-700 hover:bg-primary/5 hover:text-primary-700'
                )}
            >
                <span className="text-primary-500">
                    {getMobileIcon(item.title)}
                </span>
                <span className="flex-1 text-left">{item.title}</span>
                <ChevronDown
                    className={cn(
                        'h-4 w-4 transition-transform duration-200',
                        expanded && 'rotate-180'
                    )}
                />
            </button>
            
            {expanded && (
                <div className="ml-4 mr-2 mb-2 mt-1 space-y-1 border-l-2 border-primary-200 pl-3">
                    {item.items?.map((subItem) => (
                        <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={cn(
                                'flex flex-col rounded-lg px-4 py-2.5 transition-all duration-200',
                                pathname === subItem.href
                                    ? 'bg-primary/5 text-primary-700'
                                    : 'text-gray-600 hover:bg-primary/5 hover:text-primary-700'
                            )}
                        >
                            <span className="text-sm font-medium">
                                {subItem.title}
                            </span>
                            {subItem.description && (
                                <span className="text-[10px] text-gray-400">
                                    {subItem.description}
                                </span>
                            )}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}