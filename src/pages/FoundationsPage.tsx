import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

function ColoursIllustration() {
  return (
    <div className="relative w-36 h-28 flex items-center justify-center">
      <div className="absolute w-16 h-16 rounded-full bg-brand-primary opacity-90 -translate-x-8 -translate-y-3" />
      <div className="absolute w-14 h-14 rounded-full bg-brand-secondary opacity-90 translate-x-6 -translate-y-5" />
      <div className="absolute w-12 h-12 rounded-full bg-success opacity-90 -translate-x-2 translate-y-6" />
      <div className="absolute w-10 h-10 rounded-full bg-warning opacity-90 translate-x-9 translate-y-4" />
      <div className="absolute w-8 h-8 rounded-full bg-danger opacity-90 -translate-x-9 translate-y-5" />
    </div>
  )
}

function TypographyIllustration() {
  return (
    <span className="font-serif text-[88px] font-bold text-neutral-800 leading-none select-none">
      Aa
    </span>
  )
}

function SpacingIllustration() {
  return (
    <div className="relative flex items-center justify-center w-36 h-36">
      <div className="absolute w-36 h-36 rounded-2xl border-[3px] border-neutral-200" />
      <div className="absolute w-28 h-28 rounded-xl border-[3px] border-neutral-300" />
      <div className="absolute w-20 h-20 rounded-lg border-[3px] border-neutral-400" />
      <div className="w-10 h-10 rounded bg-neutral-500" />
    </div>
  )
}

function CornerRadiusIllustration() {
  return (
    <div className="flex items-end gap-3">
      {[
        { cls: 'rounded-none',  h: 'h-8'  },
        { cls: 'rounded',       h: 'h-9'  },
        { cls: 'rounded-lg',    h: 'h-10' },
        { cls: 'rounded-2xl',   h: 'h-11' },
        { cls: 'rounded-full',  h: 'h-12' },
      ].map(({ cls, h }, i) => (
        <div
          key={i}
          className={`w-10 ${h} bg-neutral-400 ${cls}`}
          style={{ opacity: 0.5 + i * 0.1 }}
        />
      ))}
    </div>
  )
}

function ShadowsIllustration() {
  return (
    <div className="relative flex items-center justify-center h-32 w-44">
      <div className="absolute w-32 h-16 bg-white rounded-xl shadow-xl translate-x-3 translate-y-3" />
      <div className="absolute w-32 h-16 bg-white rounded-xl shadow-lg" />
      <div className="w-32 h-16 bg-white rounded-xl shadow-sm -translate-x-3 -translate-y-3" />
    </div>
  )
}

const foundationList: { name: string; path: string; description: string; illustration: ReactNode }[] = [
  {
    name: 'Colours',
    path: '/foundations/colours',
    description: '3-tier token system — base primitives, semantic aliases, and shadcn-compatible utilities.',
    illustration: <ColoursIllustration />,
  },
  {
    name: 'Typography',
    path: '/foundations/typography',
    description: 'Type scale from label to display, built on Inter with semantic size tokens.',
    illustration: <TypographyIllustration />,
  },
  {
    name: 'Spacing',
    path: '/foundations/spacing',
    description: '4px base-unit scale for consistent layout, padding, and gap across all components.',
    illustration: <SpacingIllustration />,
  },
  {
    name: 'Corner Radius',
    path: '/foundations/corner-radius',
    description: 'Stepped radius scale mapped to CSS variables for global theme control.',
    illustration: <CornerRadiusIllustration />,
  },
  {
    name: 'Shadows',
    path: '/foundations/shadows',
    description: 'Elevation system from flat surfaces to full-screen overlays using Tailwind shadow utilities.',
    illustration: <ShadowsIllustration />,
  },
]

export function FoundationsPage() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-10">
      <div className="mb-8">
        <h1 className="text-h2 font-semibold text-neutral-900 mb-2">Foundations</h1>
        <p className="text-body text-neutral-500">
          The core visual language — colour, type, space, and elevation that every component is built on.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {foundationList.map(f => (
          <Link
            key={f.name}
            to={f.path}
            className="group bg-neutral-100 rounded-2xl overflow-hidden hover:bg-neutral-200/70 transition-colors"
          >
            <div className="h-44 flex items-center justify-center p-6">
              {f.illustration}
            </div>
            <div className="px-5 pb-5">
              <h2 className="text-h4 font-semibold text-neutral-900 mb-1">
                {f.name}
              </h2>
              <p className="text-body-sm text-neutral-500">{f.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
