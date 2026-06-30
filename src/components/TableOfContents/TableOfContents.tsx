import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export interface TocItem {
  id: string
  label: string
}

export interface TableOfContentsProps {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')
  const [hovered, setHovered] = useState(false)
  const ratios = useRef<Record<string, number>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          ratios.current[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0
        })
        let bestId = ''
        let bestRatio = 0
        for (const item of items) {
          const r = ratios.current[item.id] ?? 0
          if (r > bestRatio) {
            bestRatio = r
            bestId = item.id
          }
        }
        if (bestRatio > 0) setActiveId(bestId)
      },
      { rootMargin: '-15% 0px -65% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    )

    items.forEach(item => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  function handleClick(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (items.length < 4) return null

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={cn(
          'flex flex-col items-end gap-2.5 py-2 transition-opacity duration-base ease-standard',
          hovered ? 'opacity-0 pointer-events-none absolute right-0 top-0' : 'opacity-100'
        )}
      >
        {items.map(item => (
          <span
            key={item.id}
            className={cn(
              'h-0.5 rounded-full transition-all duration-base ease-standard',
              item.id === activeId ? 'w-6 bg-accent-signature' : 'w-3 bg-white/30'
            )}
          />
        ))}
      </div>

      <div
        className={cn(
          'glass-surface rounded-xl px-4 py-3 flex flex-col gap-2 max-w-[220px] transition-opacity duration-base ease-standard',
          hovered ? 'opacity-100' : 'opacity-0 pointer-events-none absolute right-0 top-0'
        )}
      >
        {items.map(item => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleClick(item.id)}
            className={cn(
              'text-left text-body-sm transition-colors duration-base ease-standard whitespace-nowrap overflow-hidden text-ellipsis',
              item.id === activeId ? 'text-accent-signature-text font-medium' : 'text-neutral-500 hover:text-neutral-700'
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
