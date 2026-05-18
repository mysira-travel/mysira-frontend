// src/types/listing.ts
import { LISTING_TYPES, LISTING_STATUS, PRICING_TYPES } from '@/config/constants'
import type { ID, Timestamps, Address, ValueOf } from './common'
import type { SessionUser } from './auth'

export type ListingType = ValueOf<typeof LISTING_TYPES>
export type ListingStatus = ValueOf<typeof LISTING_STATUS>
export type PricingType = ValueOf<typeof PRICING_TYPES>

export interface ListingImage {
  id: ID
  url: string
  alt?: string
  order: number
  isCover: boolean
}

export interface PricingOption {
  type: PricingType
  amount: number          // in TND (Tunisian Dinar), stored as integer centimes
  currency: 'TND'
  label?: string          // e.g. "per person", "per night"
  minPersons?: number
  maxPersons?: number
}

export interface Listing {
  id: ID
  slug: string
  type: ListingType
  status: ListingStatus

  // Content
  title: string
  description: string
  shortDescription?: string

  // Location
  address: Address

  // Media
  images: ListingImage[]
  coverImage?: ListingImage

  // Pricing
  pricing: PricingOption[]
  priceFrom: number       // denormalized: minimum price for display/sorting

  // Provider
  provider: Pick<SessionUser, 'name' | 'image'> & { id: ID }

  // Stats (denormalized for performance)
  rating: number          // 0–5, rounded to 1 decimal
  reviewCount: number
  inquiryCount: number
  viewCount: number

  // Features
  tags: string[]
  spotsLeft?: number          // for limited-capacity listings like tours or workshops
  languages: string[]     // ['fr', 'ar', 'en']
  maxCapacity?: number
  duration?: string       // e.g. "2h", "1 day", "3 nights"
  isFeatured: boolean
  isVerified: boolean

  createdAt: Date
  updatedAt: Date
}

// Lightweight version for cards — avoids over-fetching
export type ListingCard = Pick<
  Listing,
  | 'id'
  | 'slug'
  | 'type'
  | 'title'
  | 'shortDescription'
  | 'coverImage'
  | 'address'
  | 'priceFrom'
  | 'rating'
  | 'reviewCount'
  | 'isFeatured'
  | 'isVerified'
  | 'duration'
  | 'tags'
  | 'spotsLeft'
>

// Search / filter params — used in URL search params and API queries
export interface ListingFilters {
  type?: ListingType
  destination?: string
  priceMin?: number
  priceMax?: number
  rating?: number
  languages?: string[]
  page?: number
  limit?: number
  sortBy?: 'price' | 'rating' | 'newest' | 'popular'
  sortOrder?: 'asc' | 'desc'
  q?: string              // full-text search query
}