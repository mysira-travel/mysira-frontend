'use client'

import Link from 'next/link'
import { LogOut, Settings, Heart, FileText } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import type { SessionUser } from '@/types'

interface UserNavProps {
  user?: SessionUser
}

export function UserNav({ user }: UserNavProps) {
  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Button asChild variant="ghost" size="sm" className="hidden sm:flex">
          <Link href="/login">{"Se connecter"}</Link>
        </Button>
        <Button asChild variant="default" size="sm">
          <Link href="/register">{"S'inscrire"}</Link>
        </Button>
      </div>
    )
  }

  const initials = user.name
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-10 w-10 rounded-full"
          aria-label="User menu"
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {initials}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
            {user.role === 'provider' && (
              <Badge variant="secondary" className="mt-1 w-fit text-xs">
                Prestataire
              </Badge>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {user.role === 'traveler' && (
            <>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/bookings" className="cursor-pointer">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Mes réservations</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/favorites" className="cursor-pointer">
                  <Heart className="mr-2 h-4 w-4" />
                  <span>Mes favoris</span>
                </Link>
              </DropdownMenuItem>
            </>
          )}
          {user.role === 'provider' && (
            <>
              <DropdownMenuItem asChild>
                <Link href="/provider" className="cursor-pointer">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Tableau de bord</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/provider/listings" className="cursor-pointer">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Mes annonces</span>
                </Link>
              </DropdownMenuItem>
            </>
          )}
          <DropdownMenuItem asChild>
            <Link href="/dashboard/profile" className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Paramètres</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Se déconnecter</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
