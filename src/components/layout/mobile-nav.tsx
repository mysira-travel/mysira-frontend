'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { MainNavItem } from '@/types/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetHeader } from "@/components/ui/sheet"
import { VisuallyHidden } from 'radix-ui'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Logo } from './logo'

interface MobileNavProps {
    items: MainNavItem[]
}

export function MobileNav({ items }: MobileNavProps) {
    const pathname = usePathname()
    const [open, setOpen] = React.useState(false)

    // Close mobile menu on route change
    React.useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setOpen(false)
    }, [pathname])

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    aria-label="Toggle menu"
                >
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm p-0">
                <VisuallyHidden.Root>
                    <SheetHeader>
                        <SheetTitle>Menu de navigation principal</SheetTitle>
                        <SheetDescription>
                            Accédez aux différentes sections de l&apos;application pour planifier votre voyage dans le Sahara.
                        </SheetDescription>
                    </SheetHeader>
                </VisuallyHidden.Root>
                <div className="flex h-full flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b px-6 py-4">
                        <Logo showText />
                        
                    </div>

                    {/* Navigation */}
                    <ScrollArea className="flex-1 py-4">
                        <nav className="flex flex-col gap-1 px-4">
                            {items.map((item) => (
                                <MobileNavItem key={item.href} item={item} />
                            ))}
                        </nav>
                    </ScrollArea>

                    {/* Footer CTA */}
                    <div className="border-t p-4">
                        <div className="grid gap-2">
                            <Button asChild variant="default" size="lg" className="w-full">
                                <Link href="/login">{"Se connecter"}</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="w-full">
                                <Link href="/register">{"S'inscrire"}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

// Mobile Nav Item with Accordion
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
                    'flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                    isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'
                )}
            >
                {item.title}
            </Link>
        )
    }

    return (
        <div>
            <button
                onClick={() => setExpanded(!expanded)}
                className={cn(
                    'flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                    isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'
                )}
            >
                {item.title}
                <ChevronRight
                    className={cn(
                        'h-4 w-4 transition-transform',
                        expanded && 'rotate-90'
                    )}
                />
            </button>
            {expanded && (
                <div className="ml-4 mt-1 space-y-1">
                    {item.items?.map((subItem) => (
                        <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={cn(
                                'flex items-center rounded-lg px-4 py-2.5 text-sm transition-colors',
                                pathname === subItem.href
                                    ? 'bg-primary/5 text-primary'
                                    : 'text-foreground/70 hover:bg-accent hover:text-accent-foreground'
                            )}
                        >
                            {subItem.title}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}