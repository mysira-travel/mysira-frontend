'use client'

import Link from 'next/link'
import { Compass } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 transition-opacity hover:opacity-80',
        className
      )}
    >
      {/* Icon */}
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-orange-500 to-amber-600 shadow-md">
        <Compass className="h-6 w-6 text-white" strokeWidth={2.5} />
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold leading-none tracking-tight text-foreground">
            Mysira
          </span>
          <span className="text-[10px] font-medium leading-none text-muted-foreground">
            Voyage Authentique
          </span>
        </div>
      )}
    </Link>
  )
}