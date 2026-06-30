import type { ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Button } from '@/components/Button'

const cardVariants = cva(
  'bg-surface-0 border border-neutral-200 rounded-lg p-6 flex flex-col gap-6',
  { variants: {}, defaultVariants: {} }
)

type CardType = 'default' | 'no-data' | 'error'
type ButtonVariant = 'primary' | 'danger'

interface TypeDefaults {
  headline: string
  description: string
  primaryLabel: string
  primaryVariant: ButtonVariant
  secondaryLabel: string
}

const TYPE_DEFAULTS: Record<CardType, TypeDefaults> = {
  default: {
    headline:       'Headline',
    description:    "You haven't added anything yet. Start by creating your first item.",
    primaryLabel:   'Add your first item',
    primaryVariant: 'primary',
    secondaryLabel: 'Add your first item',
  },
  'no-data': {
    headline:       'No results found',
    description:    "Try adjusting your search or filters to find what you're looking for.",
    primaryLabel:   'Clear filters',
    primaryVariant: 'primary',
    secondaryLabel: 'Reset search',
  },
  error: {
    headline:       'Something went wrong',
    description:    "We couldn't load this content. Please try again.",
    primaryLabel:   'Try again',
    primaryVariant: 'danger',
    secondaryLabel: 'Contact support',
  },
}

export interface EmptyStateCardProps extends VariantProps<typeof cardVariants> {
  type?: CardType
  headline?: string
  description?: string
  image?: ReactNode
  primaryLabel?: string
  primaryVariant?: ButtonVariant
  onPrimary?: () => void
  secondaryLabel?: string
  onSecondary?: () => void
  className?: string
}

export function EmptyStateCard({
  type = 'default',
  headline,
  description,
  image,
  primaryLabel,
  primaryVariant,
  onPrimary,
  secondaryLabel,
  onSecondary,
  className,
}: EmptyStateCardProps) {
  const defaults = TYPE_DEFAULTS[type]

  const resolvedHeadline      = headline      ?? defaults.headline
  const resolvedDescription   = description   ?? defaults.description
  const resolvedPrimaryLabel  = primaryLabel  ?? defaults.primaryLabel
  const resolvedPrimaryVariant = primaryVariant ?? defaults.primaryVariant
  const resolvedSecondaryLabel = secondaryLabel ?? defaults.secondaryLabel

  return (
    <div className={cn(cardVariants(), className)}>
      {/* Image area */}
      {image ? (
        <div className="w-full h-[200px] rounded-lg overflow-hidden">{image}</div>
      ) : (
        <div className="w-full h-[200px] rounded-lg bg-neutral-200" aria-hidden />
      )}

      {/* Body */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-h4 text-foreground">{resolvedHeadline}</h3>
        <p className="text-body text-foreground">{resolvedDescription}</p>
      </div>

      {/* CTA */}
      <div className="flex flex-col gap-3">
        <Button
          variant={resolvedPrimaryVariant}
          size="md"
          className="w-full"
          onClick={onPrimary}
        >
          {resolvedPrimaryLabel}
        </Button>
        <Button
          variant="secondary"
          size="md"
          className="w-full"
          onClick={onSecondary}
        >
          {resolvedSecondaryLabel}
        </Button>
      </div>
    </div>
  )
}
