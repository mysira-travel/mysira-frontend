import { MainNavItem } from '@/types/navigation'
import { Compass, Map, Users, Palette } from 'lucide-react'

export const mainNavigation: MainNavItem[] = [
  {
    title: 'Découvrir',
    href: '/search',
    description: 'Explorer toutes les expériences',
  },
  {
    title: 'Destinations',
    href: '/destinations',
    description: 'Villes et régions du Sahara',
    items: [
      {
        title: 'Douz',
        href: '/destinations/douz',
        description: 'La porte du Sahara',
      },
      {
        title: 'Tozeur',
        href: '/destinations/tozeur',
        description: 'Oasis et palmeraies',
      },
      {
        title: 'Matmata',
        href: '/destinations/matmata',
        description: 'Villages troglodytes',
      },
    ],
  },
  {
    title: 'Expériences',
    href: '/experiences',
    description: 'Par type d\'activité',
    items: [
      {
        title: 'Camps Désert',
        href: '/experiences/camps',
        description: 'Nuits sous les étoiles',
        icon: Compass,
      },
      {
        title: 'Guides Locaux',
        href: '/experiences/guides',
        description: 'Explorations guidées',
        icon: Map,
      },
      {
        title: 'Agences',
        href: '/experiences/agencies',
        description: 'Circuits organisés',
        icon: Users,
      },
      {
        title: 'Artisans',
        href: '/experiences/artisans',
        description: 'Découverte artisanale',
        icon: Palette,
      },
    ],
  },
  {
    title: 'Comment ça marche',
    href: '/how-it-works',
  },
]

export const userNavigation = {
  traveler: [
    {
      title: 'Mes réservations',
      href: '/dashboard/bookings',
    },
    {
      title: 'Mes favoris',
      href: '/dashboard/favorites',
    },
    {
      title: 'Profil',
      href: '/dashboard/profile',
    },
  ],
  provider: [
    {
      title: 'Tableau de bord',
      href: '/provider',
    },
    {
      title: 'Mes annonces',
      href: '/provider/listings',
    },
    {
      title: 'Demandes',
      href: '/provider/inquiries',
    },
    {
      title: 'Paramètres',
      href: '/provider/settings',
    },
  ],
}