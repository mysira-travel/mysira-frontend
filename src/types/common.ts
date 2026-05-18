export type ID = string

export interface Timestamps {
  createdAt: Date
  updatedAt: Date
}

export interface PaginatedResponse<T> {
  data: T[]
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
    details?: Record<string, string[]>
  }
}

export type SortOrder = 'asc' | 'desc'

export interface GeoPoint {
  lat: number
  lng: number
}

export interface Address {
  street?: string
  city: string
  region: string
  country: string
  postalCode?: string
  coordinates?: GeoPoint
}

// Utility: extract values from const objects in constants.ts
export type ValueOf<T extends Record<string, unknown>> = T[keyof T]