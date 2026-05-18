'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { MainNavItem } from '@/types/navigation'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

interface MainNavProps {
  items: MainNavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()

  return (
    <NavigationMenu className="hidden lg:flex lg:items-center lg:gap-3">
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.href}>
            {item.items && item.items.length > 0 ? (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    'h-10 rounded-full px-4 text-sm font-medium transition-all duration-200',
                    pathname?.startsWith(item.href)
                      ? 'bg-primary/15 text-primary-700 ring-1 ring-primary-200'
                      : 'text-foreground/80 hover:text-primary-700 hover:bg-primary/10'
                  )}
                >
                  {item.title}
                </NavigationMenuTrigger>

                <NavigationMenuContent className="rounded-3xl border border-slate-200/70 bg-white/95 shadow-lg">
                  <ul className="flex w-[280px] flex-col gap-1 p-3">
                    {item.items.map((subItem) => (
                      <ListItem
                        key={subItem.href}
                        href={subItem.href}
                        title={subItem.title}
                        isActive={pathname === subItem.href}
                      >
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'h-10 rounded-full px-4 text-sm font-medium transition-all duration-200',
                    pathname === item.href
                      ? 'bg-primary/15 text-primary-700 ring-1 ring-primary-200'
                      : 'text-foreground/80 hover:text-primary-700 hover:bg-primary/10'
                  )}
                >
                  {item.title}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

// ✅ FIXED List Item
const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string; isActive?: boolean }
>(({ className, title, children, href = '', isActive, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            'block select-none space-y-1 rounded-3xl p-3 leading-none no-underline outline-none transition-colors',
            isActive
              ? 'bg-primary/15 text-primary-700 ring-1 ring-primary-200'
              : 'hover:bg-gray-100 hover:text-primary-700 focus:bg-primary/15 focus:text-primary-700 active:bg-primary/20',
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = 'ListItem'