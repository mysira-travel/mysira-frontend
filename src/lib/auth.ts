import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import type { UserRole } from '@/types'

// Validation schema for credentials sign-in
const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})


export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,

  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const parsed = credentialsSchema.safeParse(credentials)

        if (!parsed.success) return null

        if (process.env.NODE_ENV === 'development') {
          return {
            id: 'dev-user-1',
            name: 'Dev User',
            email: parsed.data.email,
            role: 'traveler' as UserRole,
          }
        }

        return null
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        if (user.id) {
  token.id = user.id
}
        token.role = (user as { role?: UserRole }).role ?? 'traveler'
      }

      return token
    },

    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as UserRole
      }

      return session
    },
  },

  pages: {
    signIn: '/login',
    error: '/login',
  },

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
})