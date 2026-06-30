import type { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { AlertCircle, AlertTriangle, CheckCircle2, Info, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const alertVariants = cva(
  'flex flex-row items-start gap-2 rounded-lg border px-3 py-4',
  {
    variants: {
      variant: {
        danger:  'bg-danger-subtle border-danger',
        success: 'bg-success-subtle border-success',
        warning: 'bg-warning-subtle border-warning-strong',
        default: 'bg-neutral-50 border-neutral-600',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

const iconColorMap = {
  danger:  'text-danger-strong',
  success: 'text-success',
  warning: 'text-warning',
  default: 'text-foreground',
} as const

const textColorMap = {
  danger:  'text-danger-strong',
  success: 'text-success-strong',
  warning: 'text-warning-strong',
  default: 'text-foreground',
} as const

const linkColorMap = {
  danger:  'text-danger',
  success: 'text-success',
  warning: 'text-warning',
  default: 'text-neutral-600',
} as const

const leadingIconMap = {
  danger:  AlertCircle,
  success: CheckCircle2,
  warning: AlertTriangle,
  default: Info,
} as const

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title: string
  subtitle?: string
  showSubtitle?: boolean
  showLeadingIcon?: boolean
  showTrailingIcon?: boolean
  showActionLink?: boolean
  actionLink?: { label: string; href: string }
  onDismiss?: () => void
}

export function Alert({
  variant = 'default',
  title,
  subtitle,
  showSubtitle = true,
  showLeadingIcon = true,
  showTrailingIcon = true,
  showActionLink = false,
  actionLink,
  onDismiss,
  className,
  ...props
}: AlertProps) {
  const v = (variant ?? 'default') as keyof typeof iconColorMap
  const iconColor = iconColorMap[v]
  const textColor = textColorMap[v]
  const linkColor = linkColorMap[v]
  const LeadingIcon = leadingIconMap[v]

  return (
    <div role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
      {showLeadingIcon && (
        <LeadingIcon
          aria-hidden
          className={cn('mt-0.5 h-5 w-5 shrink-0 stroke-2', iconColor)}
        />
      )}

      <div className={cn('flex flex-1 flex-col gap-1', showLeadingIcon && 'pl-2')}>
        <p className={cn('text-body-sm font-medium', textColor)}>{title}</p>

        {showSubtitle && subtitle && (
          <p className={cn('text-body-sm', textColor)}>{subtitle}</p>
        )}

        {showActionLink && actionLink && (
          <a
            href={actionLink.href}
            className={cn(
              'text-body-sm underline underline-offset-2',
              linkColor,
            )}
          >
            {actionLink.label}
          </a>
        )}
      </div>

      {showTrailingIcon && (
        <button
          type="button"
          aria-label="Dismiss"
          onClick={onDismiss}
          className={cn(
            'mt-0.5 shrink-0 rounded-sm opacity-70 transition-opacity duration-base ease-standard',
            'hover:opacity-100',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            'disabled:pointer-events-none disabled:opacity-50',
            iconColor,
          )}
        >
          <X className="h-5 w-5 stroke-2" />
        </button>
      )}
    </div>
  )
}
