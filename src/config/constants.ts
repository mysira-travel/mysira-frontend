export const LISTING_TYPES = {
    EXPERIENCE: 'experience',
    GUIDE: 'guide',
    CAMP: 'camp',
    AGENCY: 'agency',
    STORE: 'store',
  } as const
  
  export const LISTING_STATUS = {
    DRAFT: 'draft',
    PENDING_REVIEW: 'pending_review',
    ACTIVE: 'active',
    PAUSED: 'paused',
    REJECTED: 'rejected',
  } as const
  
  export const INQUIRY_STATUS = {
    PENDING: 'pending',
    CONTACTED: 'contacted',
    CONVERTED: 'converted',
    CANCELLED: 'cancelled',
  } as const
  
  export const PRICING_TYPES = {
    PER_HOUR: 'per_hour',
    PER_DAY: 'per_day',
    PER_NIGHT: 'per_night',
    PER_PERSON: 'per_person',
    PER_GROUP: 'per_group',
    FIXED: 'fixed',
  } as const
  
  export const USER_ROLES = {
    TRAVELER: 'traveler',
    PROVIDER: 'provider',
    ADMIN: 'admin',
  } as const
  
  // Pagination
  export const ITEMS_PER_PAGE = 20
  export const ITEMS_PER_PAGE_MOBILE = 10
  
  // File uploads
  export const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
  export const MAX_IMAGES_PER_LISTING = 10
  
  export const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
  ] as const
  
  // Maps
  export const DEFAULT_MAP_CENTER = {
    lat: 33.4667, // Douz
    lng: -9.0167,
  } as const
  
  export const DEFAULT_MAP_ZOOM = 12
  
  // Contact
  export const SUPPORT_EMAIL = 'support@mysira.tn'
  export const CONTACT_PHONE = '+216 XX XXX XXX'
  
  // Social
  export const SOCIAL_LINKS = {
    instagram: 'https://instagram.com/mysira.travel',
    facebook: 'https://facebook.com/mysiratravel',
    twitter: 'https://twitter.com/mysiratravel',
  } as const
  
  // Feature flags
  export const FEATURES = {
    AI_CHAT: process.env.NEXT_PUBLIC_ENABLE_AI_CHAT === 'true',
    PAYMENTS: process.env.NEXT_PUBLIC_ENABLE_PAYMENTS === 'true',
    REVIEWS: true,
    MULTI_LANGUAGE: false, // TODO: Enable later
  } as const