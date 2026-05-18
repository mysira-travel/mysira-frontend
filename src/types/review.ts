import type { ID, Timestamps } from './common'

export interface Review {
  id: ID
  listingId: ID
  userId: ID

  author: {
    name: string
    image?: string
  }

  rating: number          // 1–5 integer
  title?: string
  comment: string

  // Provider reply
  reply?: string
  repliedAt?: Date

  isVerified: boolean     // booking-verified review
  createdAt: Date
}

export interface RatingSummary {
  average: number
  count: number
  distribution: {
    5: number
    4: number
    3: number
    2: number
    1: number
  }
}