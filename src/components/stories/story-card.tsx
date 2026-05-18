import Link from 'next/link'
import { ArrowUpRight, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { StoryCategoryPill } from './story-category-pill'
import type { Story } from './types'

interface StoryCardProps {
  story: Story
  index: number          // used for staggered CSS animation delay
  className?: string
}

export function StoryCard({ story, index, className }: StoryCardProps) {
  // Stagger: 0ms, 75ms, 150ms, 225ms
  const delayClass = [
    'animation-delay-0',
    '[animation-delay:75ms]',
    '[animation-delay:150ms]',
    '[animation-delay:225ms]',
    '[animation-delay:300ms]',
  ][index % 5] ?? ''

  return (
    <Link
      href={story.href}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl',
        'bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.12]',
        'transition-all duration-400 ease-out',
        'hover:from-white/[0.12] hover:to-white/[0.06] hover:border-white/[0.2] hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10',
        'animate-fade-in opacity-0 [animation-fill-mode:forwards]',
        delayClass,
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-black',
        className
      )}
      aria-label={`Lire l'histoire : ${story.title}`}
    >
      {/* Image — 16:9 for grid cards */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[var(--gray-800)] to-[var(--gray-900)]">
        <img
          src={story.image}
          alt={story.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        {/* Subtle dark scrim over image — more pronounced on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/60 group-hover:via-black/30" />

        {/* Issue number — editorial top-left stamp */}
        <span className="absolute left-3 top-3 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-white/50 transition-all duration-300 group-hover:text-white/70 sm:text-[9px]">
          {story.issue}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Category + read time */}
        <div className="mb-3 flex items-center justify-between gap-2">
          <StoryCategoryPill category={story.category} />
          <span className="flex items-center gap-1 text-[9px] text-white/35 transition-colors duration-300 group-hover:text-white/50 sm:text-[10px]">
            <Clock className="h-2.5 w-2.5" />
            {story.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-2.5 text-sm font-semibold leading-snug text-white/90 transition-all duration-300 group-hover:text-white line-clamp-2 sm:text-base group-hover:line-clamp-3">
          {story.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-4 flex-1 text-xs leading-relaxed text-white/50 transition-colors duration-300 group-hover:text-white/65 line-clamp-2 sm:text-sm group-hover:line-clamp-3">
          {story.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/[0.08] pt-3 transition-all duration-300 group-hover:border-white/[0.12]">
          <div>
            <p className="text-[9px] font-medium text-white/60 transition-colors duration-300 group-hover:text-white/80 sm:text-[10px]">
              {story.author.name}
            </p>
            <p className="text-[8px] text-white/30 transition-colors duration-300 group-hover:text-white/50 sm:text-[9px]">
              {story.location}
            </p>
          </div>
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-sm transition-all duration-300 group-hover:border-[var(--primary-500)] group-hover:bg-[var(--primary-600)] group-hover:shadow-lg group-hover:shadow-primary/30 group-hover:scale-125 sm:h-8 sm:w-8">
            <ArrowUpRight className="h-3.5 w-3.5 text-white/50 transition-colors duration-300 group-hover:text-white sm:h-4 sm:w-4" />
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/10">
<span className="text-xs text-white/60">
  Découvrir les expériences de {story.author?.name} →
</span>
</div>
      </div>
    </Link>
  )
}