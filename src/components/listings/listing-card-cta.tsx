'use client'

import { useRouter } from 'next/navigation'

interface ListingCardCtaProps {
  slug: string
}

export function ListingCardCta({ slug }: ListingCardCtaProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(`/listings/${slug}`)
  }

  return (
    <button
      className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
      onClick={handleClick}
    >
      Voir détails
    </button>
  )
}