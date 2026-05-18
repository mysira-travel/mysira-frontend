// src/app/page.tsx
// Server Component
import Link from 'next/link'
import {
  ArrowRight,
  Star,
  Shield,
  Globe,
  Sparkles,
  MapPin,
  Tent,
  Map,
  Palette,
  Car,
  CheckCircle2,
  TrendingUp,
  Globe2,
  Users,
  Search,
} from 'lucide-react'
import { StoriesSection } from '@/components/stories'
import { ListingCard } from '@/components/listings'
import { mockListings } from '@/lib/mock-data'

// Phase 2: replace with → await fetch('/api/listings?featured=true&limit=6')
const featuredListings = mockListings.filter((l) => l.isFeatured).slice(0, 3)
const allListings = mockListings.slice(0, 6)

const trustSignals = [
  { 
    icon: Shield, 
    label: '234 prestataires vérifiés', 
    description: 'Chaque guide et camp est visité par notre équipe à Douz',
    stat: '100%',
    statLabel: 'Taux de vérification'
  },
  { 
    icon: Star, 
    label: '4.8/5 sur 1,247 avis', 
    description: 'Note moyenne des expériences réservées',
    stat: '94%',
    statLabel: 'Satisfaction client'
  },
  { 
    icon: Globe, 
    label: 'Assistance locale 7j/7', 
    description: 'Équipe basée à Douz et Tunis, disponible en FR/AR/EN',
    stat: '<2h',
    statLabel: 'Temps de réponse moyen'
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
<section className="relative overflow-hidden bg-gradient-desert py-16 sm:py-20 lg:py-24">
  <div className="container relative z-10">
    <div className="mx-auto max-w-4xl text-center">
      {/* Eyebrow badge */}
      <span className="mb-5 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary-700">
        🌍 La porte du Sahara tunisien
      </span>

      {/* Main headline */}
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-[3rem] leading-tight">
        Vivez le Sahara <span className="text-gradient">autrement</span>
      </h1>

      {/* NEW: Social proof stats */}
      <div className="flex flex-wrap items-center justify-center gap-6 mb-6 text-sm">
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 fill-primary text-primary" />
          <span className="font-semibold text-gray-700">4.8/5 sur 1,247 avis</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <span className="font-semibold text-gray-700">234 prestataires vérifiés</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          <span className="font-semibold text-gray-700">12,450 voyageurs</span>
        </div>
      </div>

      {/* Subheadline */}
      <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
        Guides locaux, camps de désert, artisans et expériences culturelles —
        réservez directement auprès des acteurs du terrain.
      </p>

      {/* NEW: Hero search */}
      <div className="mx-auto max-w-3xl mb-8">
        <div className="flex gap-2 bg-white rounded-2xl shadow-2xl p-2 border-2 border-gray-100">
          <div className="flex-1 flex items-center gap-3 px-4">
            <Search className="h-5 w-5 text-gray-400" />
            <input 
              type="text"
              placeholder="Où voulez-vous aller ? (ex: Trek dans le désert, Guide à Douz...)"
              className="w-full py-3 text-base focus:outline-none placeholder:text-gray-400"
            />
          </div>
          <button className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
            Rechercher
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Quick filter pills */}
        <div className="flex gap-2 mt-3 justify-center flex-wrap">
          <button className="px-4 py-2 text-sm rounded-full border-2 border-primary/30 hover:bg-primary/10 transition-colors flex items-center gap-1.5">
            <Tent className="h-4 w-4" />
            Camps désert
          </button>
          <button className="px-4 py-2 text-sm rounded-full border-2 border-primary/30 hover:bg-primary/10 transition-colors flex items-center gap-1.5">
            <Map className="h-4 w-4" />
            Guides locaux
          </button>
          <button className="px-4 py-2 text-sm rounded-full border-2 border-primary/30 hover:bg-primary/10 transition-colors flex items-center gap-1.5">
            <Palette className="h-4 w-4" />
            Artisans
          </button>
          <button className="px-4 py-2 text-sm rounded-full border-2 border-primary/30 hover:bg-primary/10 transition-colors flex items-center gap-1.5">
            <Car className="h-4 w-4" />
            Circuits
          </button>
        </div>
      </div>

      {/* NEW: Live activity indicator */}
      <div className="flex items-center gap-2 justify-center mb-6 text-sm text-gray-600">
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <span>127 voyageurs en ligne · 12 réservations aujourd'hui</span>
      </div>

      {/* Secondary CTA */}
      <Link
        href="/how-it-works"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
      >
        Comment ça marche
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </div>
</section>



      {/* Transition — smooth blend from Stories dark section */}
      <div className="relative h-1 overflow-hidden bg-gradient-to-b from-[#0C0A08] via-[#1a1512] to-white" aria-hidden="true" />



      {/* Featured listings */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container">
          <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
                Expériences à la une
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base sm:mt-3">
                Sélectionnées par notre équipe pour leur authenticité
              </p>
            </div>
            <Link
              href="/search?featured=true"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Voir tout <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featuredListings.map((listing, i) => (
              <ListingCard
                key={listing.id}
                listing={listing}
                priority={i < 3}  // LCP: first 3 cards are above the fold
              />
            ))}
          </div>
        </div>
      </section>

      {/* All listings */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container">
          <div className="mb-10 sm:mb-12">
            <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Toutes les expériences
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base sm:mt-3">
              Guides, camps, artisans et circuits autour de Douz et du Sahara
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {allListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
          <div className="mt-12 text-center sm:mt-14">
            <Link
              href="/search"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Voir toutes les annonces
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

            {/* Trust signals */}
      <section className="bg-white py-12 sm:py-14 lg:py-16">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-3">
            {trustSignals.map(({ icon: Icon, label, description, stat, statLabel }) => (
              <div
                key={label}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:shadow-primary/10 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:p-7"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary transition-all duration-300 group-hover:from-primary/15 group-hover:to-primary/10 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mb-2 text-sm font-semibold text-gray-900 transition-colors duration-300">
                  {label}
                </p>
                <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                  {description}
                </p>
                <div className="text-center mb-2">
  <span className="text-3xl font-bold text-primary">{stat}</span>
  <p className="text-xs text-gray-500 uppercase tracking-wider">{statLabel}</p>
</div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Stories section */}
      <StoriesSection />

      {/* Provider CTA */}
      <section className="bg-gradient-sunset py-16 sm:py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 p-8 text-center shadow-2xl shadow-primary/20 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 sm:p-10 lg:p-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/85 sm:text-sm">
              Prestataire local
            </p>
            <h2 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              Vous proposez des expériences locales ?
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-white/85 sm:text-base">
              Rejoignez Mysira et connectez-vous avec des voyageurs du monde entier.
              Inscription gratuite, commission seulement à la réservation.
            </p>
            <Link
              href="/register?role=provider"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/40 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Devenir prestataire
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}