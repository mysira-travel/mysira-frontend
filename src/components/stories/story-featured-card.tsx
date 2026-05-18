import Link from 'next/link'
import { ArrowUpRight, Clock, MapPin, User, Calendar } from 'lucide-react'
import { StoryCategoryPill } from './story-category-pill'
import type { Story } from './types'

interface StoryFeaturedCardProps {
  story: Story
  priority?: boolean
}

export function StoryFeaturedCard({ story, priority = false }: StoryFeaturedCardProps) {
  return (
    <Link
      href={story.href}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm border border-amber-100/80 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-900/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
    >
      {/* Image container - larger aspect ratio for featured */}
      <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-amber-200 to-orange-200">
        <img
          src={story.image}
          alt={story.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
        
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-amber-900/20 to-transparent" />
        
        {/* Featured badge */}
        <span className="absolute left-4 top-4 rounded-full bg-primary-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
          À la une
        </span>
      </div>

      {/* Content with generous padding */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3">
          <StoryCategoryPill category={story.category} />
        </div>

        <h3 className="mb-3 text-xl font-bold leading-tight text-gray-800 transition-colors duration-300 group-hover:text-primary-700 line-clamp-2">
          {story.title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-3">
          {story.excerpt}
        </p>

        {/* Meta info with warm styling */}
        <div className="mb-4 flex flex-wrap items-center gap-4 border-t border-amber-100 pt-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-amber-100 p-1.5">
              <User className="h-3.5 w-3.5 text-amber-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">{story.author.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-amber-500" />
            <span className="text-sm text-gray-600">{story.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-amber-500" />
            <span className="text-sm text-gray-600">{story.publishedDate}</span>
          </div>
        </div>

        {/* Stronger CTA for featured */}
        <div className="flex items-center justify-between rounded-xl bg-amber-50 p-3 transition-all duration-300 group-hover:bg-amber-100">
          <span className="text-sm font-semibold text-primary-700">
            Découvrir cette histoire
          </span>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}