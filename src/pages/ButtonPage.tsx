import { useState } from 'react'
import { RotateCcw, CheckCircle, XCircle, ArrowRight, Plus } from 'lucide-react'
import { Button } from '@/components/Button'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost' | 'secondary' | 'danger'
type Size = 'sm' | 'md' | 'lg'

const VARIANTS: Variant[] = ['primary', 'outline', 'ghost', 'secondary', 'danger']
const SIZES: Size[] = ['sm', 'md', 'lg']
const SIZE_LABELS: Record<Size, string> = { sm: 'Small', md: 'Medium', lg: 'Large' }

/* ── Playground primitives (same as AlertPage) ── */

function PillPicker<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: T[]
  value: T
  onChange: (v: T) => void
  label?: (v: T) => string
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map(o => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={cn(
            'rounded-full px-3 py-1 text-body-sm transition-colors border',
            value === o
              ? 'bg-primary text-primary-foreground border-primary'
              : 'bg-surface-0 text-neutral-600 border-neutral-200 hover:border-neutral-400',
          )}
        >
          {label ? label(o) : o}
        </button>
      ))}
    </div>
  )
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cn(
        'relative inline-flex h-6 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        checked ? 'bg-primary' : 'bg-neutral-300',
      )}
    >
      <span className={cn('pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transition-transform', checked ? 'translate-x-4' : 'translate-x-0')} />
    </button>
  )
}

function TextInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      className={cn(
        'w-full rounded-md border border-input bg-surface-0 px-3 py-1.5 text-body-sm text-neutral-900',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1',
        'placeholder:text-neutral-400',
      )}
    />
  )
}

function ControlRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-neutral-100 last:border-0">
      <span className="w-36 shrink-0 text-body-sm text-neutral-500">{label}</span>
      <div className="flex-1">{children}</div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-label font-semibold uppercase tracking-widest text-neutral-400 mb-4">{title}</h2>
      {children}
    </div>
  )
}

const DEFAULT_STATE = {
  variant: 'primary' as Variant,
  size: 'md' as Size,
  label: 'Button',
  showLeadingIcon: false,
  showTrailingIcon: false,
  isLoading: false,
}

const WHEN_TO_USE = [
  'Use Primary for the main call-to-action on a page — keep to one per view.',
  'Use Outline or Ghost for secondary actions that sit alongside a Primary button.',
  'Use Danger only for irreversible destructive actions such as deleting or removing data.',
]

const WHEN_NOT_TO_USE = [
  "Don't use multiple Primary buttons on the same screen — it dilutes hierarchy.",
  "Avoid Ghost buttons as standalone actions with no other buttons nearby; they lack affordance.",
  "Don't disable a button without telling the user why — prefer showing an inline error instead.",
]

export function ButtonPage() {
  const [state, setState] = useState(DEFAULT_STATE)

  function set<K extends keyof typeof DEFAULT_STATE>(key: K, value: (typeof DEFAULT_STATE)[K]) {
    setState(s => ({ ...s, [key]: value }))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 flex flex-col gap-12">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-h1 font-semibold text-neutral-900">button</h1>
          <span className="text-label bg-success-subtle text-success-strong rounded-full px-2.5 py-0.5 font-medium">
            Stable
          </span>
          <span className="ml-auto text-label text-neutral-400">v 1.0</span>
        </div>
        <p className="text-body text-neutral-500">
          5 variants × 3 sizes with optional leading/trailing icons, loading state, and full keyboard accessibility.
        </p>
      </div>

      {/* Playground */}
      <Section title="Playground">
        <div className="bg-surface-0 rounded-xl border border-neutral-200 overflow-hidden">
          {/* Live preview */}
          <div className="bg-neutral-50 border-b border-neutral-200 px-10 py-16 flex items-center justify-center min-h-[160px]">
            <Button
              variant={state.variant}
              size={state.size}
              isLoading={state.isLoading}
              leadingIcon={state.showLeadingIcon ? <Plus /> : undefined}
              trailingIcon={state.showTrailingIcon ? <ArrowRight /> : undefined}
            >
              {state.label}
            </Button>
          </div>

          {/* Controls */}
          <div className="px-6 py-2">
            <div className="flex items-center justify-between py-3 mb-1">
              <span className="text-body-sm font-medium text-neutral-700">Controls</span>
              <button
                onClick={() => setState(DEFAULT_STATE)}
                className="flex items-center gap-1.5 text-body-sm text-neutral-400 hover:text-neutral-700 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset
              </button>
            </div>

            <ControlRow label="Variant">
              <PillPicker options={VARIANTS} value={state.variant} onChange={v => set('variant', v)} />
            </ControlRow>
            <ControlRow label="Size">
              <PillPicker options={SIZES} value={state.size} onChange={v => set('size', v)} label={v => SIZE_LABELS[v]} />
            </ControlRow>
            <ControlRow label="Label">
              <TextInput value={state.label} onChange={v => set('label', v)} />
            </ControlRow>
            <ControlRow label="Leading icon">
              <Toggle checked={state.showLeadingIcon} onChange={v => set('showLeadingIcon', v)} />
            </ControlRow>
            <ControlRow label="Trailing icon">
              <Toggle checked={state.showTrailingIcon} onChange={v => set('showTrailingIcon', v)} />
            </ControlRow>
            <ControlRow label="Loading">
              <Toggle checked={state.isLoading} onChange={v => set('isLoading', v)} />
            </ControlRow>
          </div>
        </div>
      </Section>

      {/* Variants × Sizes grid */}
      <Section title="Variants">
        <div className="bg-surface-0 rounded-xl border border-neutral-200 overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-4 border-b border-neutral-200 bg-neutral-50">
            <div className="px-6 py-3" />
            {SIZES.map(s => (
              <div key={s} className="px-6 py-3 text-label font-semibold uppercase tracking-widest text-neutral-400">
                {SIZE_LABELS[s]}
              </div>
            ))}
          </div>
          {/* Variant rows */}
          {VARIANTS.map(v => (
            <div key={v} className="grid grid-cols-4 border-b border-neutral-100 last:border-0 items-center">
              <div className="px-6 py-5 text-body-sm font-medium text-neutral-600 capitalize">{v}</div>
              {SIZES.map(s => (
                <div key={s} className="px-6 py-5 flex">
                  <Button variant={v} size={s}>{SIZE_LABELS[s]}</Button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>

      {/* States */}
      <Section title="States">
        <div className="bg-surface-0 rounded-xl border border-neutral-200 p-6 flex flex-wrap gap-4 items-center">
          <Button variant="primary">Default</Button>
          <Button variant="primary" isLoading>Loading</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" leadingIcon={<Plus />}>With icon</Button>
          <Button variant="primary" leadingIcon={<Plus />} trailingIcon={<ArrowRight />}>Both icons</Button>
        </div>
      </Section>

      {/* Usage guidelines */}
      <Section title="Usage guidelines">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-surface-0 rounded-xl border border-neutral-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="h-4 w-4 text-success" />
              <span className="text-label font-semibold uppercase tracking-widest text-success">When to use</span>
            </div>
            <ul className="flex flex-col gap-3">
              {WHEN_TO_USE.map(item => (
                <li key={item} className="flex gap-2.5 text-body-sm text-neutral-600">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-success shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-0 rounded-xl border border-neutral-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="h-4 w-4 text-danger" />
              <span className="text-label font-semibold uppercase tracking-widest text-danger">When not to use</span>
            </div>
            <ul className="flex flex-col gap-3">
              {WHEN_NOT_TO_USE.map(item => (
                <li key={item} className="flex gap-2.5 text-body-sm text-neutral-600">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-danger shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Props table */}
      <Section title="Props">
        <div className="bg-surface-0 rounded-xl border border-neutral-200 overflow-hidden">
          <table className="w-full text-body-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="text-left px-6 py-3 text-neutral-500 font-medium">Prop</th>
                <th className="text-left px-6 py-3 text-neutral-500 font-medium">Type</th>
                <th className="text-left px-6 py-3 text-neutral-500 font-medium">Default</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {[
                ['variant',       "'primary' | 'outline' | 'ghost' | 'secondary' | 'danger'", "'primary'"],
                ['size',          "'sm' | 'md' | 'lg'",                                         "'md'"],
                ['leadingIcon',   'ReactNode',                                                   '—'],
                ['trailingIcon',  'ReactNode',                                                   '—'],
                ['isLoading',     'boolean',                                                     'false'],
                ['disabled',      'boolean',                                                     'false'],
                ['children',      'ReactNode',                                                   '—'],
              ].map(([prop, type, def]) => (
                <tr key={prop}>
                  <td className="px-6 py-3 font-mono text-neutral-900">{prop}</td>
                  <td className="px-6 py-3 text-neutral-500 font-mono">{type}</td>
                  <td className="px-6 py-3 text-neutral-400 font-mono">{def}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

    </div>
  )
}
