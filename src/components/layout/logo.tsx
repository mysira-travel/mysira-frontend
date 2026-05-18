import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showText?: boolean
  variant?: 'default' | 'light'
}
export function Logo({ className, showText = true, variant = 'default' }: LogoProps) {
  return (
    <Link href="/" className={cn('group flex items-center gap-2.5 transition-opacity hover:opacity-90',
      className
    )} aria-label="Mysira — Accueil">
      {/* Wordmark icon — stylised 'M' with dune arc */}
      <div className="relative flex h-9 w-9 items-center justify-center">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#F59E0B] via-[#D97706] to-[#B45309] shadow-md shadow-amber-900/20 transition-shadow group-hover:shadow-lg group-hover:shadow-amber-900/30" />
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" className="relative z-10" aria-hidden="true">

          {/* Dune silhouette inside the badge */}
          <path d="M2 14 C5 14 6 8 11 8 C16 8 17 14 20 14" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" fill="none" />

          {/* M letterform */}
          <path d="M3 15 L3 7 L7.5 12.5 L11 7.5 L14.5 12.5 L19 7 L19 15" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
      {showText &&
        (
          <div className="flex flex-col leading-none">
            <span className={cn('text-[1.15rem] font-bold tracking-[-0.03em]', variant === 'light' ? 'text-white' : 'text-[var(--gray-900)]')}>
              mysira
            </span>
            <span className={cn('text-[9px] font-medium uppercase tracking-[0.12em]', variant === 'light' ? 'text-white/60' : 'text-[var(--primary-600)]')}>
              Your path, intelligently.
            </span>
          </div>
        )
      }
    </Link>
  )
}