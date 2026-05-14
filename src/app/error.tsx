'use client'

import { useEffect } from 'react'
import Link from 'next/link'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // TODO: Log to Sentry — Sentry.captureException(error)
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">
          Une erreur s&apos;est produite
        </h1>
        <p className="text-muted-foreground">
          Nous sommes désolés pour la gêne occasionnée.
        </p>
        {error.digest && (
          <p className="text-xs text-muted-foreground font-mono">
            Référence&nbsp;: {error.digest}
          </p>
        )}
      </div>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Réessayer
        </button>
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-lg border border-input bg-background px-6 text-sm font-medium transition-colors hover:bg-accent"
        >
          Accueil
        </Link>
      </div>
    </div>
  )
}