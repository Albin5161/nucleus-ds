import { EmptyStateCard } from '@/components/EmptyStateCard'

const TYPES = ['default', 'no-data', 'error'] as const

export function EmptyStateCardPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-10">
      <div className="mb-10">
        <h1 className="text-h2 font-semibold text-neutral-900 mb-2">Empty State Card</h1>
        <p className="text-body text-neutral-500">
          Contextual placeholder cards shown when content is absent, filtered out, or failed to load.
          Three types cover the primary empty-state scenarios.
        </p>
      </div>

      {/* Variants */}
      <section className="mb-10">
        <h2 className="text-h4 font-medium text-neutral-900 mb-1">Types</h2>
        <p className="text-body-sm text-neutral-500 mb-6">
          Each type ships with sensible default copy and button configuration.
        </p>
        <div className="-mx-8 px-8 overflow-x-auto">
          <div className="flex gap-6 pb-2" style={{ minWidth: 'max-content' }}>
            {TYPES.map(type => (
              <div key={type} className="w-72">
                <p className="text-label font-medium text-neutral-500 mb-3 capitalize">
                  {type === 'no-data' ? 'No Data' : type.charAt(0).toUpperCase() + type.slice(1)}
                </p>
                <EmptyStateCard type={type} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom image */}
      <section className="mb-10">
        <h2 className="text-h4 font-medium text-neutral-900 mb-1">Custom image</h2>
        <p className="text-body-sm text-neutral-500 mb-6">
          Pass an <code className="text-label bg-neutral-100 px-1 rounded">image</code> prop to replace the grey placeholder with your own illustration or graphic.
        </p>
        <div className="max-w-sm">
          <EmptyStateCard
            headline="No projects yet"
            description="Create your first project to get started with the workflow."
            primaryLabel="New project"
            secondaryLabel="Learn more"
            image={
              <div className="w-full h-full bg-gradient-to-br from-brand-primary-subtle to-brand-secondary/20 flex items-center justify-center rounded-lg">
                <div className="h-16 w-16 rounded-2xl bg-brand-primary/20 flex items-center justify-center">
                  <div className="h-8 w-8 rounded-lg bg-brand-primary" />
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* Overriding defaults */}
      <section className="mb-10">
        <h2 className="text-h4 font-medium text-neutral-900 mb-1">Customised copy</h2>
        <p className="text-body-sm text-neutral-500 mb-6">
          All text and button labels can be overridden while keeping the type's structural defaults.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <EmptyStateCard
            type="no-data"
            headline="No teammates found"
            description="No one matches that name or email. Try a different search term."
            primaryLabel="Clear search"
            secondaryLabel="Invite someone"
          />
          <EmptyStateCard
            type="error"
            headline="Failed to load dashboard"
            description="The dashboard data couldn't be fetched. Check your connection and retry."
            primaryLabel="Retry"
            secondaryLabel="Get help"
          />
        </div>
      </section>
    </div>
  )
}
