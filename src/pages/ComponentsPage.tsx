import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { TiltedCard } from '@/components/TiltedCard'
import { Card } from '@/components/Card'

function AlertIllustration() {
  return (
    <div className="flex flex-col gap-2 w-44">
      {[['bg-danger', 'w-10'], ['bg-success', 'w-14'], ['bg-warning', 'w-8']].map(([color, w], i) => (
        <div key={i} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
          <div className={`w-1 h-5 ${color} rounded-full shrink-0`} />
          <div className="flex flex-col gap-1 flex-1">
            <div className={`h-1.5 ${w} bg-neutral-300 rounded`} />
            <div className="h-1.5 w-full bg-neutral-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  )
}

function ButtonIllustration() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-36 h-10 bg-brand-primary rounded-lg" />
      <div className="w-28 h-10 rounded-lg border-2 border-neutral-300" />
      <div className="w-20 h-8 bg-neutral-200 rounded-md" />
    </div>
  )
}

function RadioIllustration() {
  return (
    <div className="flex gap-5 items-center">
      <div className="w-9 h-9 rounded-full border-[3px] border-brand-primary flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-brand-primary" />
      </div>
      <div className="w-9 h-9 rounded-full border-[3px] border-neutral-300" />
      <div className="w-9 h-9 rounded-full border-[3px] border-neutral-200 bg-neutral-200" />
    </div>
  )
}

function CheckboxIllustration() {
  return (
    <div className="flex gap-5 items-center">
      <div className="w-9 h-9 bg-brand-primary rounded-lg flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="w-9 h-9 rounded-lg border-2 border-neutral-300" />
      <div className="w-9 h-9 rounded-lg border-2 border-neutral-200 bg-neutral-200 flex items-center justify-center">
        <div className="w-4 h-0.5 bg-neutral-400 rounded" />
      </div>
    </div>
  )
}

function ToggleIllustration() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="w-16 h-8 bg-brand-primary rounded-full relative shadow-sm">
        <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full shadow" />
      </div>
      <div className="w-16 h-8 bg-neutral-300 rounded-full relative">
        <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-sm" />
      </div>
    </div>
  )
}

function TagBadgeIllustration() {
  return (
    <div className="flex flex-wrap gap-2 justify-center max-w-[160px]">
      <span className="px-3 py-1 bg-brand-primary-subtle text-brand-primary-strong rounded-full text-label font-medium">Design</span>
      <span className="px-3 py-1 bg-success-subtle text-success-strong rounded-full text-label font-medium">Active</span>
      <span className="px-3 py-1 bg-danger-subtle text-danger-strong rounded-full text-label font-medium">Error</span>
      <span className="px-3 py-1 bg-warning-subtle text-warning-strong rounded-full text-label font-medium">Draft</span>
    </div>
  )
}

function AvatarIllustration() {
  return (
    <div className="flex -space-x-4">
      {[
        ['bg-brand-primary', 'AS'],
        ['bg-brand-secondary', 'JD'],
        ['bg-success', 'MK'],
        ['bg-neutral-400', '+2'],
      ].map(([bg, label], i) => (
        <div
          key={i}
          className={`w-12 h-12 rounded-full ${bg} border-[3px] border-neutral-100 flex items-center justify-center text-white text-label font-semibold`}
          style={{ zIndex: 4 - i }}
        >
          {label}
        </div>
      ))}
    </div>
  )
}

function TooltipIllustration() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="bg-neutral-800 text-white text-label px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md">
        Tooltip text
      </div>
      <svg width="12" height="7" viewBox="0 0 12 7" className="shrink-0">
        <path d="M0 0 L6 7 L12 0Z" fill="#262626" />
      </svg>
      <div className="mt-2 px-4 py-2 bg-white rounded-lg border border-neutral-200 text-label text-neutral-700 shadow-sm">
        Hover me
      </div>
    </div>
  )
}

function InputIllustration() {
  return (
    <div className="flex flex-col gap-2.5 w-44">
      <div className="h-10 bg-white rounded-lg border-2 border-brand-primary flex items-center px-3 gap-2 shadow-sm">
        <div className="w-14 h-2 bg-neutral-300 rounded" />
        <div className="w-px h-4 bg-brand-primary" />
      </div>
      <div className="h-10 bg-white rounded-lg border border-neutral-300 flex items-center px-3">
        <div className="w-10 h-2 bg-neutral-200 rounded" />
      </div>
      <div className="h-10 bg-white rounded-lg border-2 border-danger flex items-center px-3">
        <div className="w-20 h-2 bg-neutral-300 rounded" />
      </div>
    </div>
  )
}

function EmptyStateIllustration() {
  return (
    <div className="w-40 bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm">
      <div className="h-14 bg-neutral-100" />
      <div className="p-3 flex flex-col gap-2">
        <div className="w-16 h-2 bg-neutral-300 rounded" />
        <div className="w-28 h-1.5 bg-neutral-200 rounded" />
        <div className="w-28 h-1.5 bg-neutral-200 rounded" />
        <div className="w-full h-6 bg-neutral-100 rounded-lg mt-1" />
      </div>
    </div>
  )
}

const componentList: { name: string; path: string; description: string; illustration: ReactNode }[] = [
  {
    name: 'Alert',
    path: '/components/alert',
    description: '4 semantic variants — danger, success, warning, default.',
    illustration: <AlertIllustration />,
  },
  {
    name: 'Button',
    path: '/components/button',
    description: '5 variants × 3 sizes with icons, loading state, and full keyboard accessibility.',
    illustration: <ButtonIllustration />,
  },
  {
    name: 'Radio Button',
    path: '/components/radio-button',
    description: 'Single-selection control for mutually exclusive options with 4 states.',
    illustration: <RadioIllustration />,
  },
  {
    name: 'Checkbox',
    path: '/components/checkbox',
    description: 'Boolean selection control with 5 states including indeterminate.',
    illustration: <CheckboxIllustration />,
  },
  {
    name: 'Toggle',
    path: '/components/toggle',
    description: 'Immediate on/off control for binary settings with 4 states.',
    illustration: <ToggleIllustration />,
  },
  {
    name: 'Tag & Badge',
    path: '/components/tag-badge',
    description: 'Compact pill labels for categorisation and numeric notification indicators.',
    illustration: <TagBadgeIllustration />,
  },
  {
    name: 'Avatar',
    path: '/components/avatar',
    description: 'User representation in three forms across four sizes with status dot.',
    illustration: <AvatarIllustration />,
  },
  {
    name: 'Tooltip',
    path: '/components/tooltip',
    description: 'Contextual label on hover or focus with directional arrow in four positions.',
    illustration: <TooltipIllustration />,
  },
  {
    name: 'Input Field',
    path: '/components/input-field',
    description: 'Single-line text input with 5 states — default, focused, filled, error, disabled.',
    illustration: <InputIllustration />,
  },
  {
    name: 'Empty State Card',
    path: '/components/empty-state-card',
    description: 'Contextual placeholder for absent, filtered, or failed content.',
    illustration: <EmptyStateIllustration />,
  },
]

export function ComponentsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-h2 font-semibold text-neutral-900 mb-2">Components</h1>
        <p className="text-body text-neutral-500">
          React components built from Figma, token-audited, and ready to use.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {componentList.map(c => (
          <TiltedCard key={c.name} rotateAmplitude={8} scaleOnHover={1.03}>
            <Link to={c.path} className="block h-full">
              <Card tone="interactive" radius="xl" border="none" padding="none" className="flex flex-col h-full">
                <div className="h-44 shrink-0 flex items-center justify-center p-6 overflow-hidden rounded-t-2xl">
                  {c.illustration}
                </div>
                <div className="px-5 pb-5 flex-1">
                  <h2 className="text-h4 font-semibold text-neutral-900 mb-1">
                    {c.name}
                  </h2>
                  <p className="text-body-sm text-neutral-500">{c.description}</p>
                </div>
              </Card>
            </Link>
          </TiltedCard>
        ))}
      </div>
    </div>
  )
}
