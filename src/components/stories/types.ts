export type StoryCategory =
  | 'culture'
  | 'desert'
  | 'gastronomy'
  | 'artisan'
  | 'festival'
  | 'nomadic'
  | 'guide'

export interface Story {
  id: string
  slug: string
  category: StoryCategory
  issue: string           // e.g. "No. 01" — editorial numbering
  title: string
  pullQuote: string       // The emotional one-liner shown large on featured card
  excerpt: string         // 1–2 sentence description for grid cards
  image: string
  imageAlt: string
  author: {
    id: string
    name: string
    role: string        // e.g. "Guide local, Douz"
  }
  location: string        // e.g. "Grand Erg Oriental"
  readTime: string        // e.g. "6 min"
  href: string
  featured?: boolean      // First story in array is featured if true
  publishedDate: string   // ISO format date for sorting and display
}