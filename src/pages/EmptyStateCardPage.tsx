import { EmptyStateCard } from '@/components/EmptyStateCard'
import { AccessibilitySection, ContrastCheck } from '@/components/A11y'

const TYPES = ['default', 'no-data', 'error'] as const

export function EmptyStateCardPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10">
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
          {TYPES.map(type => (
            <div key={type} className="flex flex-col">
              <p className="text-label font-medium text-neutral-500 mb-3 capitalize">
                {type === 'no-data' ? 'No Data' : type.charAt(0).toUpperCase() + type.slice(1)}
              </p>
              <EmptyStateCard type={type} className="h-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Overriding defaults */}
      <section className="mb-10">
        <h2 className="text-h4 font-medium text-neutral-900 mb-1">Customised copy</h2>
        <p className="text-body-sm text-neutral-500 mb-6">
          All text and button labels can be overridden while keeping the type's structural defaults.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
          <EmptyStateCard
            type="no-data"
            headline="No teammates found"
            description="No one matches that name or email. Try a different search term."
            primaryLabel="Clear search"
            secondaryLabel="Invite someone"
            className="h-full"
          />
          <EmptyStateCard
            type="error"
            headline="Failed to load dashboard"
            description="The dashboard data couldn't be fetched. Check your connection and retry."
            primaryLabel="Retry"
            secondaryLabel="Get help"
            className="h-full"
          />
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-h4 font-medium text-neutral-900 mb-1">Accessibility</h2>
        <p className="text-body-sm text-neutral-500 mb-6">
          How this component behaves for keyboard and assistive technology users.
        </p>
        <AccessibilitySection
          bare
          role="The card itself has no role — it's a static content region, not a dialog or alert. The headline renders as a real <h3>, so it participates in the page's heading outline."
          keyboard={['The two CTA buttons are real <button> elements (via the Button component) and follow standard Tab/Enter/Space behaviour — see the Button page for details.']}
          screenReader={'The image placeholder is aria-hidden by default since it ships empty/decorative. If you pass a meaningful image via the image prop, drop the aria-hidden by using a real <img alt="..."> instead of a decorative div.'}
          contrastChecks={
            <>
              <ContrastCheck label="Headline" fgClassName="text-foreground" bgClassName="bg-surface-0" level="text" />
              <ContrastCheck label="Description" fgClassName="text-foreground" bgClassName="bg-surface-0" level="text" />
            </>
          }
        />
      </section>
    </div>
  )
}
