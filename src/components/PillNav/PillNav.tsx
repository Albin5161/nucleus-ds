import { useEffect, useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import './PillNav.css'

export interface PillNavItem {
  label: string
  href: string
  ariaLabel?: string
}

interface PillNavProps {
  logoNode: ReactNode
  items?: PillNavItem[]
  activeHref?: string
  ease?: string
  baseColor?: string
  pillColor?: string
  hoveredPillTextColor?: string
  pillTextColor?: string
}

export function PillNav({
  logoNode,
  items = [],
  activeHref,
  ease = 'power3.easeOut',
  baseColor = '#1c1c1e',
  pillColor = '#f5f5f5',
  hoveredPillTextColor = '#f5f5f5',
  pillTextColor,
}: PillNavProps) {
  const resolvedPillTextColor = pillTextColor ?? baseColor

  const circleRefs = useRef<(HTMLSpanElement | null)[]>([])
  const tlRefs = useRef<(gsap.core.Timeline | null)[]>([])
  const activeTweenRefs = useRef<(gsap.core.Tween | null)[]>([])
  const logoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    tlRefs.current.forEach(tl => tl?.kill())
    activeTweenRefs.current.forEach(t => t?.kill())
    tlRefs.current = []
    activeTweenRefs.current = []

    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return

        const pill = circle.parentElement
        const rect = pill.getBoundingClientRect()
        const { width: w, height: h } = rect
        if (!w || !h) return

        const R = ((w * w) / 4 + h * h) / (2 * h)
        const D = Math.ceil(2 * R) + 2
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1
        const originY = D - delta

        circle.style.width = `${D}px`
        circle.style.height = `${D}px`
        circle.style.bottom = `-${delta}px`

        gsap.set(circle, { xPercent: -50, scale: 0, transformOrigin: `50% ${originY}px` })

        const label = pill.querySelector('.pill-label')
        const hover = pill.querySelector('.pill-label-hover')

        if (label) gsap.set(label, { y: 0 })
        if (hover) gsap.set(hover, { y: h + 12, opacity: 0 })

        tlRefs.current[index]?.kill()
        const tl = gsap.timeline({ paused: true })

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0)
        if (label) tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0)
        if (hover) {
          gsap.set(hover, { y: Math.ceil(h + 100), opacity: 0 })
          tl.to(hover, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0)
        }

        tlRefs.current[index] = tl
      })
    }

    layout()
    window.addEventListener('resize', layout)
    document.fonts?.ready.then(layout).catch(() => {})

    return () => window.removeEventListener('resize', layout)
  }, [items, ease])

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i]
    if (!tl) return
    activeTweenRefs.current[i]?.kill()
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease, overwrite: 'auto' })
  }

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i]
    if (!tl) return
    activeTweenRefs.current[i]?.kill()
    activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease, overwrite: 'auto' })
  }

  const handleLogoEnter = () => {
    const el = logoRef.current
    if (!el) return
    gsap.killTweensOf(el)
    gsap.set(el, { rotate: 0 })
    gsap.to(el, { rotate: 360, duration: 0.4, ease })
  }

  const cssVars = {
    '--base': baseColor,
    '--pill-bg': pillColor,
    '--hover-text': hoveredPillTextColor,
    '--pill-text': resolvedPillTextColor,
  } as React.CSSProperties

  return (
    <div className="pill-nav-container">
      <nav className="pill-nav" aria-label="Primary" style={cssVars}>
        <Link
          className="pill-logo"
          to="/"
          aria-label="Home"
          onMouseEnter={handleLogoEnter}
          ref={logoRef}
        >
          {logoNode}
        </Link>

        {items.length > 0 && (
          <div className="pill-nav-items">
            <ul className="pill-list" role="menubar">
              {items.map((item, i) => (
                <li key={item.href} role="none">
                  <Link
                    role="menuitem"
                    to={item.href}
                    className={`pill${activeHref === item.href ? ' is-active' : ''}`}
                    aria-label={item.ariaLabel ?? item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    <span
                      className="hover-circle"
                      aria-hidden="true"
                      ref={el => { circleRefs.current[i] = el }}
                    />
                    <span className="label-stack">
                      <span className="pill-label">{item.label}</span>
                      <span className="pill-label-hover" aria-hidden="true">
                        {item.label}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  )
}
