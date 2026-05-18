// src/lib/validations/listing.ts
import { z } from 'zod'
import { LISTING_TYPES, PRICING_TYPES, MAX_IMAGES_PER_LISTING } from '@/config/constants'

export const listingFiltersSchema = z.object({
  type: z.enum(Object.values(LISTING_TYPES) as [string, ...string[]]).optional(),
  destination: z.string().optional(),
  priceMin: z.coerce.number().min(0).optional(),
  priceMax: z.coerce.number().min(0).optional(),
  rating: z.coerce.number().min(1).max(5).optional(),
  q: z.string().max(200).optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
  sortBy: z.enum(['price', 'rating', 'newest', 'popular']).default('popular'),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
})

export type ListingFiltersInput = z.infer<typeof listingFiltersSchema>