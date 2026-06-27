import { Link } from 'react-router-dom'
import { TiltedCard } from '@/components/TiltedCard'

function FoundationsIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Colour circles */}
      <div className="absolute left-12 top-8 w-20 h-20 rounded-full bg-brand-primary opacity-90" />
      <div className="absolute left-24 top-6 w-16 h-16 rounded-full bg-brand-secondary opacity-90" />
      <div className="absolute left-16 top-20 w-14 h-14 rounded-full bg-success opacity-80" />
      <div className="absolute left-6 top-16 w-12 h-12 rounded-full bg-warning opacity-80" />
      {/* Large "Aa" */}
      <span className="absolute right-10 font-serif text-[96px] font-bold text-neutral-300 leading-none select-none">
        Aa
      </span>
      {/* Radius squares */}
      <div className="absolute bottom-6 left-8 flex gap-2 items-end">
        <div className="w-7 h-7 bg-neutral-300 rounded-none" />
        <div className="w-7 h-7 bg-neutral-300 rounded-md" />
        <div className="w-7 h-7 bg-neutral-300 rounded-xl" />
        <div className="w-7 h-7 bg-neutral-300 rounded-full" />
      </div>
      {/* Spacing bars */}
      <div className="absolute bottom-8 right-10 flex flex-col gap-1.5 items-end">
        {[40, 32, 24, 16, 8].map(w => (
          <div key={w} className="h-1.5 bg-neutral-300 rounded-full" style={{ width: w }} />
        ))}
      </div>
    </div>
  )
}

function ComponentsIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Toggle */}
      <div className="absolute top-8 left-12 w-16 h-8 bg-brand-primary rounded-full relative shadow-sm">
        <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full shadow" />
      </div>
      {/* Button */}
      <div className="absolute top-7 left-36 w-28 h-9 bg-brand-primary rounded-lg" />
      {/* Checkbox checked */}
      <div className="absolute top-8 right-12 w-9 h-9 bg-brand-primary rounded-lg flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      {/* Tags */}
      <div className="absolute bottom-10 left-8 flex gap-2">
        <span className="px-3 py-1 bg-brand-primary-subtle text-brand-primary-strong rounded-full text-label font-medium">Design</span>
        <span className="px-3 py-1 bg-success-subtle text-success-strong rounded-full text-label font-medium">Active</span>
        <span className="px-3 py-1 bg-danger-subtle text-danger-strong rounded-full text-label font-medium">Error</span>
      </div>
      {/* Avatars */}
      <div className="absolute bottom-10 right-8 flex -space-x-3">
        {[['bg-brand-primary', 'AS'], ['bg-brand-secondary', 'JD'], ['bg-success', 'MK']].map(([bg, label], i) => (
          <div
            key={i}
            className={`w-10 h-10 rounded-full ${bg} border-[3px] border-neutral-100 flex items-center justify-center text-white text-label font-semibold`}
            style={{ zIndex: 3 - i }}
          >
            {label}
          </div>
        ))}
      </div>
      {/* Input */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-10 bg-white rounded-lg border-2 border-brand-primary flex items-center px-3 gap-2 shadow-sm">
        <div className="w-14 h-2 bg-neutral-300 rounded" />
        <div className="w-px h-4 bg-brand-primary" />
      </div>
    </div>
  )
}

export function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-14">
      <div className="mb-12">
        <h1 className="text-h1 font-semibold text-neutral-900 mb-3">Nucleus Design System</h1>
        <p className="text-body text-neutral-500 max-w-xl">
          A React + TypeScript component library built with Tailwind CSS and shadcn/ui,
          driven by a 3-tier design token system.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <TiltedCard rotateAmplitude={8} scaleOnHover={1.02}>
          <Link
            to="/foundations"
            className="group bg-neutral-100 rounded-2xl hover:bg-neutral-200/70 transition-colors flex flex-col h-full"
          >
            <div className="h-56 shrink-0 relative overflow-hidden rounded-t-2xl">
              <FoundationsIllustration />
            </div>
            <div className="px-6 pb-6 flex-1">
              <h2 className="text-h3 font-semibold text-neutral-900 mb-1.5">Foundations</h2>
              <p className="text-body-sm text-neutral-500">
                Colour tokens, typography scale, spacing, corner radius, and elevation — the visual language every component is built on.
              </p>
            </div>
          </Link>
        </TiltedCard>

        <TiltedCard rotateAmplitude={8} scaleOnHover={1.02}>
          <Link
            to="/components"
            className="group bg-neutral-100 rounded-2xl hover:bg-neutral-200/70 transition-colors flex flex-col h-full"
          >
            <div className="h-56 shrink-0 relative overflow-hidden rounded-t-2xl">
              <ComponentsIllustration />
            </div>
            <div className="px-6 pb-6 flex-1">
              <h2 className="text-h3 font-semibold text-neutral-900 mb-1.5">Components</h2>
              <p className="text-body-sm text-neutral-500">
                10 production-ready React components built from Figma designs, token-audited, and accessible out of the box.
              </p>
            </div>
          </Link>
        </TiltedCard>
      </div>
    </div>
  )
}
