import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="space-y-2">
        <p className="text-6xl font-extrabold text-primary">404</p>
        <h1 className="text-2xl font-bold text-foreground">
          Page introuvable
        </h1>
        <p className="text-muted-foreground max-w-sm">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  )
}