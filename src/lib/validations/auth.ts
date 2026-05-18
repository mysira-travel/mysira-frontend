// src/lib/validations/auth.ts
import { z } from 'zod'
import { USER_ROLES } from '@/config/constants'

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email requis')
    .email('Adresse email invalide'),
  password: z
    .string()
    .min(1, 'Mot de passe requis')
    .min(8, 'Minimum 8 caractères'),
})

export const registerSchema = z.object({
  name: z
    .string()
    .min(1, 'Nom requis')
    .min(2, 'Minimum 2 caractères')
    .max(100, 'Maximum 100 caractères'),
  email: z
    .string()
    .min(1, 'Email requis')
    .email('Adresse email invalide'),
  password: z
    .string()
    .min(8, 'Minimum 8 caractères')
    .regex(/[A-Z]/, 'Au moins une majuscule')
    .regex(/[0-9]/, 'Au moins un chiffre'),
  confirmPassword: z.string().min(1, 'Confirmation requise'),
  role: z.enum(
    [USER_ROLES.TRAVELER, USER_ROLES.PROVIDER],
    { errorMap: () => ({ message: 'Rôle invalide' }) }
  ),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: 'Vous devez accepter les CGU' }),
  }),
}).refine(
  (data) => data.password === data.confirmPassword,
  { message: 'Les mots de passe ne correspondent pas', path: ['confirmPassword'] }
)

export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>