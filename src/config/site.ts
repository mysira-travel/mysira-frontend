export const siteConfig = {
    name: 'Mysira',
  
    description:
      'Mysira: AI‑powered discovery of authentic Sahara experiences. From desert camps to local guides, explore Douz and beyond with intelligent, bookable itineraries.',
  
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://mysira-frontend.vercel.app',
  
    // TODO: Create 1200×630 branded image in /public
    ogImage: '/og-image.jpg',
  
    links: {
      github: 'https://github.com/mysira-travel',
      instagram: 'https://instagram.com/mysira.travel',
      facebook: 'https://facebook.com/mysiratravel',
    },
  
    keywords: [
      'Tunisia travel',
      'Sahara desert',
      'Douz',
      'desert camps',
      'local guides',
      'Tunisia experiences',
      'cultural travel',
      'Sahara adventure',
      'authentic travel',
      'sustainable tourism',
    ],
  
    author: {
      name: 'Mysira Team',
      url: 'https://mysira.co',
    },
  
    locale: 'en',
    defaultLocale: 'en',
  
    locales: ['en', 'fr', 'ar'],
  }