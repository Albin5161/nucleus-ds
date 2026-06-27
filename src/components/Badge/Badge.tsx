import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full px-2 py-0.5 text-label font-normal tabular-nums',
  {
    variants: {
      variant: {
        default: 'bg-brand-primary text-brand-primary-foreground',
        success: 'bg-success text-white',
        warning: 'bg-warning text-brand-primary-foreground',
        danger:  'bg-danger text-white',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  count: number | string
  max?: number
  className?: string
}

export function Badge({ count, max = 99, variant, className }: BadgeProps) {
  const display = typeof count === 'number' && count > max ? `${max}+` : String(count)
  return (
    <span className={cn(badgeVariants({ variant }), className)}>
      {display}
    </span>
  )
}
