import { useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
  content: ReactNode
  position?: TooltipPosition
  /** Force the tooltip open — useful for static demos/showcases */
  open?: boolean
  children: ReactNode
  className?: string
}

const bubblePositionCls: Record<TooltipPosition, string> = {
  top:    'absolute bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'absolute top-full left-1/2 -translate-x-1/2 mt-2',
  left:   'absolute right-full top-1/2 -translate-y-1/2 mr-2',
  right:  'absolute left-full top-1/2 -translate-y-1/2 ml-2',
}

// CSS triangle arrows — a 0×0 box whose borders form the triangle
const arrowCls: Record<TooltipPosition, string> = {
  // Points down (tooltip is above trigger)
  top:    'absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-[6px] border-x-transparent border-t-[6px] border-t-tooltip-bg',
  // Points up (tooltip is below trigger)
  bottom: 'absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-[6px] border-x-transparent border-b-[6px] border-b-tooltip-bg',
  // Points right (tooltip is to the left)
  left:   'absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[6px] border-l-tooltip-bg',
  // Points left (tooltip is to the right)
  right:  'absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-r-[6px] border-r-tooltip-bg',
}

export function Tooltip({
  content,
  position = 'top',
  open,
  children,
  className,
}: TooltipProps) {
  const [hovered, setHovered] = useState(false)
  const isVisible = open ?? hovered

  return (
    <div
      className={cn('relative inline-flex', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {children}

      {isVisible && (
        <div
          role="tooltip"
          className={cn(
            'absolute z-50 px-3 py-2 rounded bg-tooltip-bg text-tooltip-text text-label whitespace-nowrap pointer-events-none',
            bubblePositionCls[position],
          )}
        >
          {content}
          <span className={arrowCls[position]} aria-hidden />
        </div>
      )}
    </div>
  )
}
