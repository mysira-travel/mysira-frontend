'use client'

import * as React from 'react'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  className?: string
  placeholder?: string
}

export function SearchBar({
  className,
  placeholder = 'Rechercher une destination, un camp...',
}: SearchBarProps) {
  const [query, setQuery] = React.useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form
      onSubmit={handleSearch}
      className={cn('relative flex items-center w-full', className)}
    >
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-10 w-full rounded-full border border-input bg-white/95 pl-10 pr-4 text-sm shadow-sm focus:border-primary focus:ring-primary/20"
        />
      </div>
      <Button
        type="submit"
        size="sm"
        className="ml-2 hidden sm:inline-flex"
        disabled={!query.trim()}
      >
        Rechercher
      </Button>
    </form>
  )
}