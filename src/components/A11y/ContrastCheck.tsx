import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

function parseRgb(value: string): [number, number, number] {
  const nums = value.match(/\d+(\.\d+)?/g)
  if (!nums) return [0, 0, 0]
  const [r, g, b] = nums.map(Number)
  return [r, g, b]
}

function relativeLuminance([r, g, b]: [number, number, number]): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    const cs = c / 255
    return cs <= 0.04045 ? cs / 12.92 : Math.pow((cs + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

function contrastRatio(fg: [number, number, number], bg: [number, number, number]): number {
  const l1 = relativeLuminance(fg)
  const l2 = relativeLuminance(bg)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return (lighter + 0.05) / (darker + 0.05)
}

export type ContrastLevel = 'text' | 'large-text' | 'ui'

const THRESHOLDS: Record<ContrastLevel, { min: number; label: string }> = {
  text:       { min: 4.5, label: 'AA text (4.5:1)' },
  'large-text': { min: 3.0, label: 'AA large text (3:1)' },
  ui:         { min: 3.0, label: 'AA UI component (3:1)' },
}

export interface ContrastCheckProps {
  label: string
  /** Tailwind class applied to the foreground sample. With mode="text" this should be a
   *  `text-*` class; with mode="fill" it should be a `bg-*` class (icon/dot/fill colour). */
  fgClassName: string
  bgClassName: string
  level?: ContrastLevel
  mode?: 'text' | 'fill'
}

export function ContrastCheck({ label, fgClassName, bgClassName, level = 'text', mode = 'text' }: ContrastCheckProps) {
  const fgRef = useRef<HTMLSpanElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const [ratio, setRatio] = useState<number | null>(null)

  useEffect(() => {
    if (!fgRef.current || !bgRef.current) return
    const fgColor = getComputedStyle(fgRef.current)
    const fg = parseRgb(mode === 'fill' ? fgColor.backgroundColor : fgColor.color)
    const bg = parseRgb(getComputedStyle(bgRef.current).backgroundColor)
    setRatio(contrastRatio(fg, bg))
  }, [fgClassName, bgClassName, mode])

  const threshold = THRESHOLDS[level]
  const pass = ratio !== null && ratio >= threshold.min

  return (
    <div
      ref={bgRef}
      className={cn('rounded-lg border border-neutral-200 px-3 py-2 flex items-center justify-between gap-3', bgClassName)}
    >
      <span className="flex items-center gap-2">
        {mode === 'fill' && <span ref={fgRef} className={cn('h-3 w-3 rounded-full shrink-0', fgClassName)} />}
        <span
          ref={mode === 'text' ? fgRef : undefined}
          className={cn('text-body-sm font-medium', mode === 'text' && fgClassName)}
        >
          {label}
        </span>
      </span>
      <span
        className={cn(
          'text-label font-mono px-1.5 py-0.5 rounded shrink-0',
          ratio === null ? 'bg-neutral-100 text-neutral-500' : pass ? 'bg-success-subtle text-success-strong' : 'bg-danger-subtle text-danger-strong'
        )}
      >
        {ratio !== null ? `${ratio.toFixed(2)}:1` : '—'} {ratio !== null ? (pass ? 'Pass' : 'Fail') : ''} · {threshold.label}
      </span>
    </div>
  )
}
