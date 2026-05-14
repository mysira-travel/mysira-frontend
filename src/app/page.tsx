export default function HomePage() {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Bienvenue sur{' '}
          <span className="text-gradient">Mysira</span>
        </h1>
        <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
          Découvrez les expériences authentiques du Sahara tunisien
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/search"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Explorer les expériences
          </a>
          <a
            href="/how-it-works"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Comment ça marche
          </a>
        </div>
      </div>

      {/* Test Content for Scroll */}
      <div className="mt-20 space-y-8">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
          >
            <h2 className="mb-2 text-2xl font-semibold">Section {i + 1}</h2>
            <p className="text-muted-foreground">
              Contenu de test pour vérifier le comportement du header sticky.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}