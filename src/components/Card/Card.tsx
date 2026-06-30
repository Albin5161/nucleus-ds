import type { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva(
  '',
  {
    variants: {
      tone: {
        static: 'bg-surface-0',
        interactive: 'bg-neutral-100 hover:bg-white transition-colors duration-slow ease-standard cursor-pointer',
      },
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      radius: {
        lg: 'rounded-xl',
        xl: 'rounded-2xl',
      },
      border: {
        default: 'border border-neutral-200',
        none: '',
      },
    },
    defaultVariants: {
      tone: 'static',
      padding: 'md',
      radius: 'lg',
      border: 'default',
    },
  }
)

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({ tone, padding, radius, border, className, children, ...props }: CardProps) {
  return (
    <div className={cn(cardVariants({ tone, padding, radius, border }), className)} {...props}>
      {children}
    </div>
  )
}
