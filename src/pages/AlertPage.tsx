import { useState } from 'react'
import { RotateCcw, CheckCircle, XCircle } from 'lucide-react'
import { Alert } from '@/components/Alert'
import { cn } from '@/lib/utils'

type Variant = 'danger' | 'success' | 'warning' | 'default'
const VARIANTS: Variant[] = ['default', 'success', 'warning', 'danger']

/* ── Playground control primitives ── */

function PillPicker<T extends string>({
  options,
  value,
  onChange,
}: {
  options: T[]
  value: T
  onChange: (v: T) => void
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
          {o}
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
      <span
        className={cn(
          'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transition-transform',
          checked ? 'translate-x-4' : 'translate-x-0',
        )}
      />
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

/* ── Section heading ── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-label font-semibold uppercase tracking-widest text-neutral-400 mb-4">{title}</h2>
      {children}
    </div>
  )
}

/* ── Default playground state ── */
const DEFAULT_STATE = {
  variant: 'default' as Variant,
  title: 'Alert Title',
  subtitle: 'Alert subtitle goes here',
  showSubtitle: true,
  showLeadingIcon: true,
  showTrailingIcon: true,
  showActionLink: true,
  actionLinkLabel: 'Action link',
}

/* ── Usage guidelines data ── */
const WHEN_TO_USE = [
  'Use to surface contextual feedback — confirmations, warnings, or errors — directly within a page or form.',
  'Pair a leading icon with the matching variant colour for instant visual scanning.',
  'Include an action link when the user needs to respond or act on the message.',
]

const WHEN_NOT_TO_USE = [
  'Don\'t use for critical errors that block the whole screen — use a full-page state instead.',
  'Avoid stacking multiple alerts; consolidate into one or use a toast notification.',
  'Don\'t replace form field validation errors; show those inline beneath the field.',
]

/* ── Page ── */
export function AlertPage() {
  const [state, setState] = useState(DEFAULT_STATE)

  function set<K extends keyof typeof DEFAULT_STATE>(key: K, value: (typeof DEFAULT_STATE)[K]) {
    setState(s => ({ ...s, [key]: value }))
  }

  return (
    <div className="max-w-4xl mx-auto px-8 py-10 flex flex-col gap-12">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-h1 font-semibold text-neutral-900">alert</h1>
          <span className="text-label bg-success-subtle text-success-strong rounded-full px-2.5 py-0.5 font-medium">
            Stable
          </span>
          <span className="ml-auto text-label text-neutral-400">v 1.0</span>
        </div>
        <p className="text-body text-neutral-500">
          Inline alert with 4 colour variants, optional leading + trailing icons, subtitle, and action link.
        </p>
      </div>

      {/* Playground */}
      <Section title="Playground">
        <div className="bg-surface-0 rounded-xl border border-neutral-200 overflow-hidden">
          {/* Live preview */}
          <div className="bg-neutral-50 border-b border-neutral-200 px-10 py-12 flex items-center justify-center min-h-[160px]">
            <div className="w-full max-w-lg">
              <Alert
                variant={state.variant}
                title={state.title}
                subtitle={state.subtitle}
                showSubtitle={state.showSubtitle}
                showLeadingIcon={state.showLeadingIcon}
                showTrailingIcon={state.showTrailingIcon}
                showActionLink={state.showActionLink}
                actionLink={{ label: state.actionLinkLabel, href: '#' }}
              />
            </div>
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
            <ControlRow label="Title">
              <TextInput value={state.title} onChange={v => set('title', v)} />
            </ControlRow>
            <ControlRow label="Subtitle">
              <TextInput value={state.subtitle} onChange={v => set('subtitle', v)} />
            </ControlRow>
            <ControlRow label="Show subtitle">
              <Toggle checked={state.showSubtitle} onChange={v => set('showSubtitle', v)} />
            </ControlRow>
            <ControlRow label="Leading icon">
              <Toggle checked={state.showLeadingIcon} onChange={v => set('showLeadingIcon', v)} />
            </ControlRow>
            <ControlRow label="Trailing icon">
              <Toggle checked={state.showTrailingIcon} onChange={v => set('showTrailingIcon', v)} />
            </ControlRow>
            <ControlRow label="Show action link">
              <Toggle checked={state.showActionLink} onChange={v => set('showActionLink', v)} />
            </ControlRow>
            <ControlRow label="Action link label">
              <TextInput value={state.actionLinkLabel} onChange={v => set('actionLinkLabel', v)} />
            </ControlRow>
          </div>
        </div>
      </Section>

      {/* All variants static */}
      <Section title="Variants">
        <div className="bg-surface-0 rounded-xl border border-neutral-200 p-6 flex flex-col gap-3">
          {VARIANTS.map(v => (
            <Alert
              key={v}
              variant={v}
              title="Alert Title"
              subtitle="Alert subtitle goes here"
              showActionLink
              actionLink={{ label: 'Action link', href: '#' }}
            />
          ))}
        </div>
      </Section>

      {/* Usage guidelines */}
      <Section title="Usage guidelines">
        <div className="grid grid-cols-2 gap-4">
          {/* When to use */}
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

          {/* When not to use */}
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
                ['variant',          "'danger' | 'success' | 'warning' | 'default'", "'default'"],
                ['title',            'string',                                         '—'],
                ['subtitle',         'string',                                         '—'],
                ['showSubtitle',     'boolean',                                        'true'],
                ['showLeadingIcon',  'boolean',                                        'true'],
                ['showTrailingIcon', 'boolean',                                        'true'],
                ['showActionLink',   'boolean',                                        'false'],
                ['actionLink',       '{ label: string; href: string }',               '—'],
                ['onDismiss',        '() => void',                                     '—'],
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
