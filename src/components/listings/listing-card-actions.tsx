'use client'

import { Heart } from 'lucide-react'
import { useState } from 'react'

interface ListingCardActionsProps {
  listingId: string
  className?: string
}

export function ListingCardActions({ listingId, className }: ListingCardActionsProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorited(!isFavorited)
    // TODO: API call to save favorite
    console.log('Toggle favorite for listing:', listingId)
  }

  return (
    <button
      onClick={handleFavorite}
      className={className}
      aria-label={isFavorited ? 'Retirer des favoris' : 'Ajouter aux favoris'}
    >
      <Heart
        className={`h-4 w-4 transition-colors ${
          isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600'
        }`}
      />
    </button>
  )
}