import type { ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 rounded-lg font-normal transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ].join(' '),
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:bg-brand-primary-strong',
        outline:
          'border border-primary text-primary hover:bg-brand-primary-strong hover:text-primary-foreground',
        ghost:
          'text-foreground hover:bg-muted',
        secondary:
          'bg-brand-secondary text-brand-secondary-foreground hover:bg-brand-secondary-strong',
        danger:
          'bg-destructive text-destructive-foreground hover:bg-danger-strong',
      },
      size: {
        sm: 'px-4 py-2 text-body-sm',
        md: 'px-6 py-3 text-body',
        lg: 'px-8 py-4 text-body-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

const iconSize: Record<string, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-5 w-5',
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  isLoading?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  isLoading = false,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  const sz = (size ?? 'md') as string
  const icon = iconSize[sz] ?? iconSize.md

  return (
    <button
      disabled={disabled || isLoading}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {isLoading ? (
        <Loader2 className={cn(icon, 'animate-spin stroke-2')} aria-hidden />
      ) : (
        leadingIcon && (
          <span className={cn(icon, 'shrink-0 stroke-2 [&>svg]:h-full [&>svg]:w-full')} aria-hidden>
            {leadingIcon}
          </span>
        )
      )}

      {children}

      {!isLoading && trailingIcon && (
        <span className={cn(icon, 'shrink-0 stroke-2 [&>svg]:h-full [&>svg]:w-full')} aria-hidden>
          {trailingIcon}
        </span>
      )}
    </button>
  )
}
