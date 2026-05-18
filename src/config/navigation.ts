import { MainNavItem } from '@/types/navigation'

export const mainNavigation: MainNavItem[] = [
  {
    title: 'Discover',
    href: '/search',
    description: 'Explore authentic Sahara experiences',
  },

  {
    title: 'Destinations',
    href: '/destinations',
    description: 'Cities and regions of the Tunisian Sahara',
    items: [
      {
        title: 'Douz',
        href: '/destinations/douz',
        description: 'Gateway to the Sahara',
      },
      {
        title: 'Tozeur',
        href: '/destinations/tozeur',
        description: 'Oases and palm groves',
      },
      {
        title: 'Matmata',
        href: '/destinations/matmata',
        description: 'Troglodyte villages',
      },
    ],
  },

  {
    title: 'Experiences',
    href: '/experiences',
    description: 'Activities and cultural adventures',
    items: [
      {
        title: 'Desert Camps',
        href: '/experiences/camps',
        description: 'Sleep under the Sahara stars',
        icon: 'compass',
      },
      {
        title: 'Local Guides',
        href: '/experiences/guides',
        description: 'Authentic guided explorations',
        icon: 'map',
      },
      {
        title: 'Tours & Agencies',
        href: '/experiences/agencies',
        description: 'Organized cultural journeys',
        icon: 'users',
      },
      {
        title: 'Artisans',
        href: '/experiences/artisans',
        description: 'Traditional craftsmanship',
        icon: 'palette',
      },
    ],
  },

  {
    title: 'Stories',
    href: '/stories',
    description: 'Travel stories and inspiration',
  },

  {
    title: 'How It Works',
    href: '/how-it-works',
    description: 'Booking and platform guide',
  },
]

export const userNavigation = {
  traveler: [
    {
      title: 'My Bookings',
      href: '/dashboard/bookings',
    },
    {
      title: 'Favorites',
      href: '/dashboard/favorites',
    },
    {
      title: 'Profile',
      href: '/dashboard/profile',
    },
  ],

  provider: [
    {
      title: 'Dashboard',
      href: '/provider',
    },
    {
      title: 'My Listings',
      href: '/provider/listings',
    },
    {
      title: 'Requests',
      href: '/provider/inquiries',
    },
    {
      title: 'Settings',
      href: '/provider/settings',
    },
  ],
}