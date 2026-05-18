import Link from 'next/link'
import { ArrowUpRight, Clock, MapPin, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { StoryCategoryPill } from './story-category-pill'
import type { Story } from './types'

interface StoryCardProps {
  story: Story
  index: number
  className?: string
}

export function StoryCard({ story, index, className }: StoryCardProps) {
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
        'bg-white border border-amber-100',
        'transition-all duration-400 ease-out',
        'hover:border-primary-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary-900/10',
        'animate-fade-in opacity-0 [animation-fill-mode:forwards]',
        delayClass,
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        className
      )}
      aria-label={`Lire l'histoire : ${story.title}`}
    >
      {/* Image container */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
        <img
          src={story.image}
          alt={story.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
        
        {/* Warm gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 via-amber-900/10 to-transparent" />

        {/* Issue number badge */}
        <span className="absolute left-3 top-3 rounded-md bg-amber-900/80 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-amber-100 backdrop-blur-sm">
          #{String(index).padStart(2, '0')}
        </span>

        {/* Read time badge */}
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-white/95 px-2 py-1 text-[9px] font-medium text-amber-800 shadow-sm">
          <Clock className="h-2.5 w-2.5" />
          {story.readTime}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Category */}
        <div className="mb-3">
          <StoryCategoryPill category={story.category} />
        </div>

        {/* Title */}
        <h3 className="mb-2 text-base font-bold leading-snug text-gray-800 transition-colors duration-300 group-hover:text-primary-700 line-clamp-2">
          {story.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-3 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-2">
          {story.excerpt}
        </p>

        {/* Author and location */}
        <div className="mb-4 flex flex-wrap items-center gap-3 border-t border-amber-100 pt-3">
          <div className="flex items-center gap-1.5">
            <div className="rounded-full bg-amber-100 p-1">
              <User className="h-3 w-3 text-amber-600" />
            </div>
            <span className="text-xs font-medium text-gray-700">{story.author.name}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-amber-500" />
            <span className="text-xs text-gray-500">{story.location}</span>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-primary-600 transition-all duration-300 group-hover:text-primary-700 inline-flex items-center gap-1">
            Lire l'histoire
            <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-primary-600 transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Bottom accent line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300 group-hover:h-1" />
    </Link>
  )
}