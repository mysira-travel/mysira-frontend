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
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.href}>
            {item.items && item.items.length > 0 ? (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    'h-10 font-medium transition-colors hover:text-primary',
                    pathname?.startsWith(item.href)
                      ? 'text-primary'
                      : 'text-foreground/80'
                  )}
                >
                  {item.title}
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                <ul className="flex w-[280px] flex-col gap-1 p-2">
                    {item.items.map((subItem) => (
                      <ListItem
                        key={subItem.href}
                        href={subItem.href}
                        title={subItem.title}
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
                    'h-10 font-medium transition-colors hover:text-primary',
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-foreground/80'
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
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, href = '', ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
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