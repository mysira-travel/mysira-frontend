import { USER_ROLES } from '@/config/constants'

// Derives directly from the const — single source of truth
export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES]

export interface User {
  id: string
  name: string
  email: string
  image?: string
  role: UserRole
  emailVerified?: Date
  createdAt: Date
}

// Shape used by NextAuth session callbacks
export interface AuthSession {
  user: {
    id: string
    name: string
    email: string
    image?: string
    role: UserRole
  }
  expires: string
}

// Decoupled prop type for UI components (UserNav, Avatar, etc.)
// Does NOT import from next-auth — keeps components testable in isolation
export interface SessionUser {
  name: string
  email: string
  image?: string
  role: UserRole
}