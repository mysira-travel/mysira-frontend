// Server Component — no 'use client' needed
// Phase 2: add async + await fetch('/api/stories?limit=7') here
import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { StoryFeaturedCard } from './story-featured-card'
import { StoryCard } from './story-card'
import { storiesData } from './data'
import type { Story } from './types'

interface StoriesSectionProps {
  // Phase 2: stories will be fetched server-side and passed in
  stories?: Story[]
}

export function StoriesSection({ stories = storiesData }: StoriesSectionProps) {
  const featured = stories.find((s) => s.featured) ?? stories[0]
  // Up to 6 secondary stories, excluding the featured one
  const secondary = stories.filter((s) => s.id !== featured.id).slice(0, 6)

  return (
    <section
      className="relative overflow-hidden bg-[#0C0A08] py-16 sm:py-20 lg:py-28"
      aria-labelledby="stories-heading"
    >
      {/*
        ── Atmospheric background ──────────────────────────────────────────
        Desert grain texture: radial vignette from top-right in amber,
        fading to near-black. Evokes a campfire or a lamp in the dark.
      */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(ellipse 100% 80% at 60% -10%, #F59E0B, transparent)`,
        }}
        aria-hidden="true"
      />
      {/* Subtle grain overlay for editorial texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
        aria-hidden="true"
      />

      <div className="container relative">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {/* Eyebrow — editorial label */}
            <div className="mb-3 flex items-center gap-2">
              <div className="h-px w-8 bg-[var(--primary-600)]" aria-hidden="true" />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--primary-500)] sm:text-[10px]">
                Récits du Sahara
              </span>
            </div>

            <h2
              id="stories-heading"
              className="text-2xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-3xl lg:text-4xl"
            >
              Histoires vraies.{' '}
              <br className="hidden sm:block" />
              <span
                style={{
                  background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 60%, #D97706 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Gens réels.
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-xs leading-relaxed text-white/55 transition-colors duration-300 sm:mt-4 sm:text-sm">
              Des guides, artisans et voyageurs qui font vivre le Sahara. Chaque récit
              est une invitation — pas une publicité.
            </p>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/stories"
            className="group hidden shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white/70 transition-all duration-300 hover:border-[var(--primary-500)] hover:bg-[var(--primary-600)] hover:text-white hover:shadow-lg hover:shadow-primary/30 sm:flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <BookOpen className="h-4 w-4" />
            Tous les récits
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* ── Main layout ────────────────────────────────────────────────── */}
        {/*
          Layout logic:
          Mobile:    full-width featured card → 1-col secondary grid
          Tablet:    full-width featured card → 2-col secondary grid
          Desktop:   [featured card 5/12] [secondary grid 7/12] side-by-side
        */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-start lg:gap-8">

          {/* Featured card — takes 5 columns on desktop */}
          <div className="lg:col-span-5 animate-fade-in opacity-0 [animation-fill-mode:forwards] animation-delay-0">
            <StoryFeaturedCard story={featured} />
          </div>

          {/* Secondary grid — takes 7 columns on desktop */}
          <div className="lg:col-span-7">
            {/*
              Secondary layout:
              Mobile: 1 column
              Tablet: 2 columns
              Desktop: 2 columns (3 rows of 2 = 6 stories)
            */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
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

        {/*
          ── Horizontal rule — editorial magazine separator
          Thin amber line with the issue count, like a magazine's table of contents
        */}
        <div className="mt-12 flex items-center gap-4 sm:mt-14 lg:mt-16" aria-hidden="true">
          <div className="h-px flex-1 bg-white/[0.08]" />
          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25 sm:text-[9px]">
            {stories.length} récits · Sahara Tunisien
          </span>
          <div className="h-px flex-1 bg-white/[0.08]" />
        </div>

        {/* Mobile CTA — only visible below sm */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/stories"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/70 transition-all duration-300 hover:border-[var(--primary-500)] hover:bg-[var(--primary-600)] hover:text-white hover:shadow-lg hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <BookOpen className="h-4 w-4" />
            Tous les récits
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

      </div>
    </section>
  )
}