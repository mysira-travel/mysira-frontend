// Server Component — no 'use client' needed
import Link from 'next/link'
import { ArrowRight, BookOpen, ChevronRight, Sparkles, Clock, MapPin, User } from 'lucide-react'
import { StoryFeaturedCard } from './story-featured-card'
import { StoryCard } from './story-card'
import { storiesData } from './data'
import type { Story } from './types'

interface StoriesSectionProps {
  stories?: Story[]
}

export function StoriesSection({ stories = storiesData }: StoriesSectionProps) {
  const featured = stories.find((s) => s.featured) ?? stories[0]
  const secondary = stories.filter((s) => s.id !== featured.id).slice(0, 6)

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{
        background: 'linear-gradient(165deg, #FFF8ED 0%, #FFF3E0 50%, #FFEFD9 100%)',
      }}
      aria-labelledby="stories-heading"
    >
      {/* Warm ambient glow effects */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary-400/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary-400/10 blur-3xl"
        aria-hidden="true"
      />
      
      {/* Subtle desert texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #F59E0B 0px, #F59E0B 1px, transparent 1px, transparent 8px)`,
        }}
        aria-hidden="true"
      />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="mb-14 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            {/* Eyebrow with warm accent */}
            <div className="mb-4 flex items-center gap-2">
              <div className="h-px w-10 bg-primary-500" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary-700">
                Histoires Authentiques
              </span>
              <Sparkles className="h-3 w-3 text-primary-500" />
            </div>

            <h2
              id="stories-heading"
              className="text-3xl font-bold leading-tight tracking-[-0.02em] text-gray-900 sm:text-4xl lg:text-5xl"
            >
              Histoires vraies.{' '}
              <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-2 h-3 bg-primary-200/40 -skew-x-12" />
                <span className="relative text-primary-700">Gens réels.</span>
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              Des guides, artisans et voyageurs qui font vivre le Sahara.
              Chaque récit est une invitation authentique.
            </p>
          </div>

          {/* Desktop CTA - matching your site's button style */}
          <Link
            href="/stories"
            className="group hidden shrink-0 items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition-all duration-300 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/30 hover:-translate-y-0.5 sm:flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
          >
            <BookOpen className="h-4 w-4" />
            Tous les récits
            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Featured card */}
          <div className="lg:col-span-5 animate-fade-in opacity-0 [animation-fill-mode:forwards] animation-delay-0">
            <StoryFeaturedCard story={featured} />
          </div>

          {/* Secondary grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:gap-7">
              {secondary.map((story, i) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  index={i + 1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative separator with warm tones - matching your brand aesthetic */}
        <div className="mt-16 flex items-center gap-4 sm:mt-20" aria-hidden="true">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-300/40 to-transparent" />
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary-600/60">
              {stories.length} Portraits du Sahara
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-300/40 to-transparent" />
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            href="/stories"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition-all duration-300 hover:bg-primary-700 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
          >
            <BookOpen className="h-4 w-4" />
            Tous les récits
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}