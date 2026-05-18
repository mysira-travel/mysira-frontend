import { cn } from '@/lib/utils'
import type { StoryCategory } from './types'

const CATEGORY_LABELS: Record<StoryCategory, string> = {
  culture:    'Culture',
  desert:     'Désert',
  gastronomy: 'Gastronomie',
  artisan:    'Artisanat',
  festival:   'Festival',
  nomadic:    'Nomadisme',
  guide:      'Rencontre',
}

// Each category gets a distinct treatment — no generic pill soup
const CATEGORY_STYLES: Record<StoryCategory, string> = {
  culture:    'text-amber-200 border-amber-400/50 bg-amber-500/15 group-hover:border-amber-300 group-hover:bg-amber-500/25 group-hover:text-amber-100 transition-all duration-300',
  desert:     'text-orange-200 border-orange-400/50 bg-orange-500/15 group-hover:border-orange-300 group-hover:bg-orange-500/25 group-hover:text-orange-100 transition-all duration-300',
  gastronomy: 'text-rose-200 border-rose-400/50 bg-rose-500/15 group-hover:border-rose-300 group-hover:bg-rose-500/25 group-hover:text-rose-100 transition-all duration-300',
  artisan:    'text-teal-200 border-teal-400/50 bg-teal-500/15 group-hover:border-teal-300 group-hover:bg-teal-500/25 group-hover:text-teal-100 transition-all duration-300',
  festival:   'text-yellow-200 border-yellow-400/50 bg-yellow-500/15 group-hover:border-yellow-300 group-hover:bg-yellow-500/25 group-hover:text-yellow-100 transition-all duration-300',
  nomadic:    'text-stone-200 border-stone-400/50 bg-stone-500/15 group-hover:border-stone-300 group-hover:bg-stone-500/25 group-hover:text-stone-100 transition-all duration-300',
  guide:      'text-sky-200 border-sky-400/50 bg-sky-500/15 group-hover:border-sky-300 group-hover:bg-sky-500/25 group-hover:text-sky-100 transition-all duration-300',
}

interface StoryCategoryPillProps {
  category: StoryCategory
  className?: string
}

export function StoryCategoryPill({ category, className }: StoryCategoryPillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em]',
        CATEGORY_STYLES[category],
        className
      )}
      role="text"
      aria-label={`Catégorie : ${CATEGORY_LABELS[category]}`}
    >
      {CATEGORY_LABELS[category]}
    </span>
  )
}