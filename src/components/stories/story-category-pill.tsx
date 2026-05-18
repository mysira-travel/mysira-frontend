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

// Warm, accessible color palette for light backgrounds (WCAG AA compliant)
const CATEGORY_STYLES: Record<StoryCategory, string> = {
  culture:    'bg-amber-100 text-amber-800 border-amber-200',
  desert:     'bg-orange-100 text-orange-800 border-orange-200',
  gastronomy: 'bg-rose-100 text-rose-800 border-rose-200',
  artisan:    'bg-teal-100 text-teal-800 border-teal-200',
  festival:   'bg-yellow-100 text-yellow-800 border-yellow-200',
  nomadic:    'bg-stone-100 text-stone-800 border-stone-200',
  guide:      'bg-sky-100 text-sky-800 border-sky-200',
}

interface StoryCategoryPillProps {
  category: StoryCategory
  className?: string
}

export function StoryCategoryPill({ category, className }: StoryCategoryPillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] transition-all duration-300',
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