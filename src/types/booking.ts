import { INQUIRY_STATUS } from '@/config/constants'
import type { ID, Timestamps, ValueOf } from './common'
import type { ListingCard } from './listing'

export type InquiryStatus = ValueOf<typeof INQUIRY_STATUS>

// Phase 1: Inquiry model (no payment yet — just contact/request flow)
export interface Inquiry {
  id: ID
  listingId: ID
  listing?: Pick<ListingCard, 'id' | 'title' | 'coverImage' | 'slug'>

  userId: ID
  user?: {
    id: ID
    name: string
    email: string
  }

  status: InquiryStatus

  // Request details
  message: string
  requestedDate?: Date
  numberOfPersons?: number
  totalAmount?: number    // optional estimate in centimes

  // Provider response
  providerResponse?: string
  respondedAt?: Date

  createdAt: Date
  updatedAt: Date
}