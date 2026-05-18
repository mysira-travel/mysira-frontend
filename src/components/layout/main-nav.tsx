'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Compass, 
  Tent, 
  Map, 
  Users, 
  Palette, 
  BookOpen,
  Info,
  ChevronRight,
  Star,
  Eye,
  TrendingUp
} from 'lucide-react'

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

// Icon mapping for different navigation items
const getIconForItem = (title: string, icon?: string) => {
  if (icon) {
    switch (icon) {
      case 'compass': return <Compass className="h-4 w-4" />
      case 'map': return <Map className="h-4 w-4" />
      case 'users': return <Users className="h-4 w-4" />
      case 'palette': return <Palette className="h-4 w-4" />
      default: return <Compass className="h-4 w-4" />
    }
  }
  
  switch (title.toLowerCase()) {
    case 'discover': return <Eye className="h-4 w-4" />
    case 'destinations': return <Map className="h-4 w-4" />
    case 'experiences': return <Compass className="h-4 w-4" />
    case 'stories': return <BookOpen className="h-4 w-4" />
    case 'how it works': return <Info className="h-4 w-4" />
    default: return <Star className="h-4 w-4" />
  }
}

// Category colors for visual distinction
const getCategoryColor = (title: string) => {
  switch (title.toLowerCase()) {
    case 'discover': return 'from-sky-500 to-blue-600'
    case 'destinations': return 'from-emerald-500 to-teal-600'
    case 'experiences': return 'from-amber-500 to-orange-600'
    case 'stories': return 'from-rose-500 to-pink-600'
    case 'how it works': return 'from-indigo-500 to-purple-600'
    default: return 'from-primary-500 to-primary-700'
  }
}

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
                    'transition-all duration-200',
                    pathname?.startsWith(item.href)
                      ? 'bg-primary/15 text-primary-700 ring-1 ring-primary-200'
                      : 'text-gray-700 hover:bg-primary/10 hover:text-primary-700'
                  )}
                >
                  {item.title}
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="w-[380px] p-2 md:w-[440px]">
                    {/* Header section */}
                    <div className="mb-3 rounded-lg bg-gradient-to-r from-primary-50 to-amber-50 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br shadow-sm",
                          getCategoryColor(item.title)
                        )}>
                          {getIconForItem(item.title)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {item.title}
                          </p>
                          <p className="text-xs text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Menu items grid */}
                    <div className="grid gap-1">
                      {item.items.map((subItem) => (
                        <ListItem
                          key={subItem.href}
                          href={subItem.href}
                          title={subItem.title}
                          description={subItem.description}
                          isActive={pathname === subItem.href}
                          icon={getIconForItem(subItem.title, subItem.icon)}
                        />
                      ))}
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-3 border-t border-gray-100 pt-2">
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-primary-600 transition-all hover:bg-primary/10"
                      >
                        <span className="flex items-center gap-2">
                          <TrendingUp className="h-3.5 w-3.5" />
                          Voir tous les {item.title.toLowerCase()}
                        </span>
                        <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'transition-all duration-200',
                    pathname === item.href
                      ? 'bg-primary/15 text-primary-700 ring-1 ring-primary-200'
                      : 'text-gray-700 hover:bg-primary/10 hover:text-primary-700'
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

// Improved ListItem with better visual hierarchy
const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & {
    title: string
    description?: string
    isActive?: boolean
    icon?: React.ReactNode
  }
>(({ className, title, description, href = '', isActive, icon, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        href={href}
        className={cn(
          'group block w-full rounded-xl transition-all duration-200',
          isActive
            ? 'bg-primary/10 text-primary-700'
            : 'hover:bg-primary/5 hover:text-primary-700',
          className
        )}
        {...props}
      >
        <div className="flex items-start gap-3 px-3 py-2.5">
          {/* Icon container with hover effect */}
          <div className={cn(
            "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200",
            isActive
              ? "bg-primary/15 text-primary-600"
              : "bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary-600"
          )}>
            {icon || <Compass className="h-4 w-4" />}
          </div>
          
          {/* Text content */}
          <div className="flex-1 space-y-0.5">
            <div className="text-sm font-semibold leading-tight">
              {title}
            </div>
            {description && (
              <p className="line-clamp-2 text-xs leading-relaxed text-gray-500 group-hover:text-gray-600">
                {description}
              </p>
            )}
          </div>
          
          {/* Arrow indicator on hover */}
          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-gray-400 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
        </div>
      </Link>
    </NavigationMenuLink>
  )
})

ListItem.displayName = 'ListItem'