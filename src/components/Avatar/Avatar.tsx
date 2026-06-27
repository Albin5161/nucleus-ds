import { User } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const wrapperVariants = cva('relative inline-flex shrink-0', {
  variants: {
    size: {
      xs: 'h-6 w-6',
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-14 w-14',
    },
  },
  defaultVariants: { size: 'md' },
})

const iconVariants = cva('text-neutral-500', {
  variants: {
    size: {
      xs: 'h-4 w-4',
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    },
  },
  defaultVariants: { size: 'md' },
})

const initialsVariants = cva('font-normal text-foreground select-none leading-none', {
  variants: {
    size: {
      xs: 'text-label',
      sm: 'text-label',
      md: 'text-body-sm',
      lg: 'text-body',
    },
  },
  defaultVariants: { size: 'md' },
})

const dotVariants = cva(
  'absolute rounded-full border-2 border-white',
  {
    variants: {
      size: {
        xs: 'h-1.5 w-1.5 bottom-0 right-0',
        sm: 'h-2 w-2 bottom-0 right-0',
        md: 'h-2.5 w-2.5 bottom-0 right-0',
        lg: 'h-3 w-3 bottom-0.5 right-0.5',
      },
      status: {
        online:  'bg-status-online',
        away:    'bg-status-away',
        offline: 'bg-status-offline',
        busy:    'bg-status-busy',
      },
    },
  }
)

export type AvatarStatus = 'online' | 'away' | 'offline' | 'busy'
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg'

export interface AvatarProps extends VariantProps<typeof wrapperVariants> {
  /** Content type: image photo, initials text, or fallback user icon */
  type?: 'image' | 'initials' | 'icon'
  initials?: string
  src?: string
  alt?: string
  status?: AvatarStatus
  className?: string
}

export function Avatar({
  type = 'icon',
  size = 'md',
  initials,
  src,
  alt = '',
  status,
  className,
}: AvatarProps) {
  const displayInitials = initials?.slice(0, 2).toUpperCase()

  return (
    <div className={cn(wrapperVariants({ size }), className)}>
      {/* Circle */}
      <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-muted border border-neutral-200">
        {type === 'image' && src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : type === 'initials' && displayInitials ? (
          <span className={initialsVariants({ size })}>{displayInitials}</span>
        ) : (
          <User className={iconVariants({ size })} aria-hidden />
        )}
      </div>

      {/* Status dot */}
      {status && (
        <span
          className={dotVariants({ size, status })}
          aria-label={status}
          role="img"
        />
      )}
    </div>
  )
}
