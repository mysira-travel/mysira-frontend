import type { USER_ROLES } from '@/config/constants'

export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES]

export interface User {
  id: string
  name: string
  email: string
  image?: string
  role: UserRole
  isVerified: boolean
  createdAt: string
}

export type SessionUser = Pick<User, 'id' | 'name' | 'email' | 'image' | 'role'>