import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Star, Clock, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { ListingCard as ListingCardType } from '@/types'
import { LISTING_TYPES } from '@/config/constants'
import { ListingCardActions } from './listing-card-actions'
import { ListingCardCta } from './listing-card-cta'

// Label map — keeps i18n-ready structure
const TYPE_LABELS: Record<string, string> = {
  [LISTING_TYPES.EXPERIENCE]: 'Expérience',
  [LISTING_TYPES.GUIDE]:      'Guide local',
  [LISTING_TYPES.CAMP]:       'Camp désert',
  [LISTING_TYPES.AGENCY]:     'Agence',
  [LISTING_TYPES.STORE]:      'Artisan',
}

// Format price in TND from centimes
function formatPrice(centimes: number): string {
  const amount = centimes / 100
  return new Intl.NumberFormat('fr-TN', {
    style: 'currency',
    currency: 'TND',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

interface ListingCardProps {
  listing: ListingCardType
  className?: string
  priority?: boolean
}

export function ListingCard({ listing, className, priority = false }: ListingCardProps) {
  const {
    id,
    slug,
    type,
    title,
    shortDescription,
    coverImage,
    address,
    priceFrom,
    rating,
    reviewCount,
    isFeatured,
    isVerified,
    duration,
    tags,
    spotsLeft,
  } = listing

  return (
    <Link href={`/listings/${slug}`} className="group block" prefetch={false}>
      <Card
        className={cn(
          'overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
          className
        )}
      >
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          {coverImage ? (
            <Image
              src={coverImage.url}
              alt={coverImage.alt ?? title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={priority}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
              <MapPin className="h-8 w-8 text-primary-400" />
            </div>
          )}

          {/* Quick actions (top-right) */}
          <div className="absolute right-4 top-4 flex gap-2">
            <ListingCardActions
              listingId={id}
              className="p-2 rounded-full bg-white/90 hover:bg-white shadow-sm transition-all hover:scale-110"
            />
            <Badge variant="outline" className="rounded-full bg-background/90 px-2.5 text-xs border-0 backdrop-blur-sm">
              {TYPE_LABELS[type] ?? type}
            </Badge>
          </div>

          {/* Status badges (top-left) */}
          <div className="absolute left-4 top-4 flex flex-col gap-2">
            {isFeatured && (
              <Badge className="rounded-full bg-gradient-sunset border-0 px-2.5 text-xs font-semibold text-white shadow-lg">
                À la une
              </Badge>
            )}
            {isVerified && (
              <Badge variant="secondary" className="rounded-full text-xs font-semibold shadow-sm">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Vérifié
              </Badge>
            )}
          </div>

          {/* Urgency badge (bottom-left) */}
          {spotsLeft && spotsLeft < 5 && spotsLeft > 0 && (
            <Badge variant="destructive" className="absolute bottom-4 left-4 rounded-full shadow-lg">
              🔥 Plus que {spotsLeft} places
            </Badge>
          )}
        </div>

        <CardContent className="space-y-4 px-5 py-5">
          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="truncate text-sm">
              {address.city}, {address.region}
            </span>
          </div>

          {/* Title and description */}
          <div className="space-y-2">
            <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
              {title}
            </h3>
            {shortDescription && (
              <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                {shortDescription}
              </p>
            )}
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-3 text-sm">
            {reviewCount > 0 && (
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-foreground">{rating.toFixed(1)}</span>
                <span className="text-muted-foreground">({reviewCount})</span>
              </span>
            )}
            {duration && (
              <span className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-4 w-4" />
                {duration}
              </span>
            )}
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="h-6 rounded-full px-2.5 py-0 text-xs font-medium border-dashed"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Price and CTA */}
          <div className="flex items-end justify-between border-t border-muted/70 pt-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                À partir de
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-lg font-bold text-foreground">{formatPrice(priceFrom)}</p>
                {duration && <span className="text-xs text-muted-foreground">· {duration}</span>}
              </div>
            </div>

            {/* CTA button */}
            <ListingCardCta slug={slug} />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}