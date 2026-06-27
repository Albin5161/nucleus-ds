import { X } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const tagVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-label',
  {
    variants: {
      variant: {
        default: 'bg-brand-primary text-brand-primary-subtle border border-brand-primary-strong/30',
        success: 'bg-success-subtle text-success-strong border border-success',
        warning: 'bg-warning-subtle text-warning-strong border border-warning',
        danger:  'bg-danger-subtle text-danger-strong border border-danger',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

const dotMap: Record<string, string> = {
  default: 'bg-brand-primary-strong',
  success: 'bg-success',
  warning: 'bg-warning',
  danger:  'bg-danger',
}

const closeMap: Record<string, string> = {
  default: 'text-brand-primary-strong hover:bg-brand-primary-strong/20',
  success: 'text-success-strong hover:bg-success/20',
  warning: 'text-warning-strong hover:bg-warning/20',
  danger:  'text-danger-strong hover:bg-danger/20',
}

export interface TagProps extends VariantProps<typeof tagVariants> {
  label: string
  onRemove?: () => void
  className?: string
}

export function Tag({ label, variant = 'default', onRemove, className }: TagProps) {
  const v = variant ?? 'default'
  return (
    <span className={cn(tagVariants({ variant }), className)}>
      {/* Leading dot */}
      <span className={cn('h-1.5 w-1.5 rounded-full shrink-0', dotMap[v])} aria-hidden />

      <span>{label}</span>

      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${label}`}
          className={cn(
            'h-3 w-3 rounded-full flex items-center justify-center shrink-0 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring',
            closeMap[v],
          )}
        >
          <X className="h-2.5 w-2.5 stroke-[2.5]" />
        </button>
      )}
    </span>
  )
}
