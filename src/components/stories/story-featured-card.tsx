import Link from 'next/link'
import { ArrowRight, Clock, MapPin } from 'lucide-react'
import { StoryCategoryPill } from './story-category-pill'
import type { Story } from './types'

interface StoryFeaturedCardProps {
  story: Story
}

export function StoryFeaturedCard({ story }: StoryFeaturedCardProps) {
  return (
    <Link
      href={story.href}
      className="group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl transition-all duration-300 sm:min-h-[420px] lg:min-h-[600px]"
      aria-label={`Histoire à la une : ${story.title}`}
    >
      {/* Full-bleed background image */}
      <img
        src={story.image}
        alt={story.imageAlt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="eager"
        decoding="async"
      />

      {/* Cinematic layered gradient */}
      {/* Bottom gradient — primary reading area */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 transition-opacity duration-300 group-hover:via-black/60" />
      {/* Left vignette — creates depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      {/* Amber warm tint at very bottom — brand colour leaking in */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--primary-900)]/40 to-transparent transition-opacity duration-300 group-hover:opacity-100 sm:h-48" />

      {/* Top bar — issue stamp + category */}
      <div className="relative flex items-center justify-between p-4 sm:p-6 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-black/50">
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-white/50 transition-colors group-hover:text-white/70 sm:text-[10px]">
          {story.issue} · Histoire à la une
        </span>
        <StoryCategoryPill category={story.category} />
      </div>

      {/* Spacer pushes content to bottom */}
      <div className="flex-1" />

      {/* Editorial content block */}
      <div className="relative p-4 sm:p-6 lg:p-7 transition-all duration-300">
        {/* Location */}
        <div className="mb-2.5 flex items-center gap-1.5 transition-all duration-300 sm:mb-3">
          <MapPin className="h-3 w-3 transition-colors duration-300 text-[var(--primary-400)] group-hover:text-[var(--primary-300)]" />
          <span className="text-xs font-medium text-[var(--primary-300)] group-hover:text-[var(--primary-200)] transition-colors duration-300 sm:text-sm">
            {story.location}
          </span>
        </div>

        {/* H2 title — large, editorial weight */}
        <h2 className="mb-3 text-xl font-bold leading-[1.1] tracking-[-0.02em] text-white transition-all duration-300 sm:mb-4 sm:text-2xl lg:text-[1.875rem] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--primary-200)] group-hover:via-[var(--primary-300)] group-hover:to-[var(--primary-400)]">
          {story.title}
        </h2>

        {/* Pull quote — the emotional centrepiece */}
        <blockquote className="relative mb-4 pl-3.5 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-[var(--primary-500)] before:transition-colors before:duration-300 group-hover:before:bg-[var(--primary-300)] sm:mb-5 sm:pl-4">
          <p className="text-xs italic leading-relaxed text-white/70 transition-all duration-300 group-hover:text-white/85 sm:text-sm">
            &ldquo;{story.pullQuote}&rdquo;
          </p>
        </blockquote>

        {/* Author + CTA row */}
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
          <div>
            <p className="text-sm font-semibold text-white/85 transition-colors duration-300 group-hover:text-white">
              {story.author.name}
            </p>
            <p className="flex items-center gap-1 text-xs text-white/40 transition-colors duration-300 group-hover:text-white/60">
              <Clock className="h-2.5 w-2.5" />
              {story.readTime} de lecture · {story.author.role}
            </p>
          </div>

          {/* CTA — always visible, enhanced on hover */}
          <div className="flex w-full items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2.5 shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-300 group-hover:border-[var(--primary-400)] group-hover:bg-[var(--primary-600)] group-hover:shadow-lg group-hover:shadow-primary/30 group-hover:scale-105 sm:w-auto shrink-0">
            <span className="text-xs font-semibold text-white transition-all duration-300">Lire</span>
            <ArrowRight className="h-3.5 w-3.5 text-white transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}