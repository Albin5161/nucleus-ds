import { useState } from 'react'
import { RotateCcw, CheckCircle, XCircle, Mail, Search, Eye } from 'lucide-react'
import { InputField } from '@/components/InputField'
import { AccessibilitySection, ContrastCheck } from '@/components/A11y'
import { TableOfContents } from '@/components/TableOfContents'
import { cn } from '@/lib/utils'

const TOC_ITEMS = [
  { id: 'playground', label: 'Playground' },
  { id: 'states', label: 'States' },
  { id: 'usage-guidelines', label: 'Usage guidelines' },
  { id: 'props', label: 'Props' },
  { id: 'accessibility', label: 'Accessibility' },
]

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

function TextInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
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

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className={id ? 'scroll-mt-28' : undefined}>
      <h2 className="text-label font-semibold uppercase tracking-widest text-neutral-400 mb-4">{title}</h2>
      {children}
    </div>
  )
}

const DEFAULT_STATE = {
  label: 'Label',
  placeholder: 'Placeholder Text',
  helperText: 'Helper text goes here',
  errorText: '',
  showLeadingIcon: false,
  showTrailingIcon: false,
}

const WHEN_TO_USE = [
  'Use for collecting short, single-line text — names, emails, search terms, etc.',
  'Always pair with a visible label; do not rely on placeholder text alone.',
  'Use helper text to give formatting hints or context before the user interacts.',
]

const WHEN_NOT_TO_USE = [
  "Don't use for multi-line text entry — use a Textarea instead.",
  "Avoid disabling inputs without a clear reason; consider a read-only state instead.",
  "Don't use placeholder text as a substitute for a label — it disappears when the user types.",
]

export function InputFieldPage() {
  const [state, setState] = useState(DEFAULT_STATE)
  const [playValue, setPlayValue] = useState('')

  function set<K extends keyof typeof DEFAULT_STATE>(key: K, value: (typeof DEFAULT_STATE)[K]) {
    setState(s => ({ ...s, [key]: value }))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 flex flex-col gap-12">
      <TableOfContents items={TOC_ITEMS} />

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-h1 font-semibold text-neutral-900">input field</h1>
          <span className="text-label bg-success-subtle text-success-strong rounded-full px-2.5 py-0.5 font-medium">
            Stable
          </span>
          <span className="ml-auto text-label text-neutral-400">v 1.0</span>
        </div>
        <p className="text-body text-neutral-500">
          Single-line text input with 5 states — default, focused, filled, error, and disabled. Supports label, helper text, and leading/trailing icons.
        </p>
      </div>

      {/* Playground */}
      <Section id="playground" title="Playground">
        <div className="bg-surface-0 rounded-xl border border-neutral-200 overflow-hidden">
          <div className="bg-neutral-50 border-b border-neutral-200 px-10 py-12 flex items-center justify-center min-h-[160px]">
            <div className="w-full max-w-sm">
              <InputField
                label={state.label || undefined}
                placeholder={state.placeholder}
                helperText={state.helperText || undefined}
                error={state.errorText || undefined}
                leadingIcon={state.showLeadingIcon ? <Mail /> : undefined}
                trailingIcon={state.showTrailingIcon ? <Search /> : undefined}
                value={playValue}
                onChange={e => setPlayValue(e.target.value)}
              />
            </div>
          </div>

          <div className="px-6 py-2">
            <div className="flex items-center justify-between py-3 mb-1">
              <span className="text-body-sm font-medium text-neutral-700">Controls</span>
              <button
                onClick={() => { setState(DEFAULT_STATE); setPlayValue('') }}
                className="flex items-center gap-1.5 text-body-sm text-neutral-400 hover:text-neutral-700 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset
              </button>
            </div>

            <ControlRow label="Label">
              <TextInput value={state.label} onChange={v => set('label', v)} placeholder="Label text" />
            </ControlRow>
            <ControlRow label="Placeholder">
              <TextInput value={state.placeholder} onChange={v => set('placeholder', v)} />
            </ControlRow>
            <ControlRow label="Helper text">
              <TextInput value={state.helperText} onChange={v => set('helperText', v)} placeholder="Helper message" />
            </ControlRow>
            <ControlRow label="Error text">
              <TextInput value={state.errorText} onChange={v => set('errorText', v)} placeholder="Triggers error state when filled" />
            </ControlRow>
            <ControlRow label="Leading icon">
              <Toggle checked={state.showLeadingIcon} onChange={v => set('showLeadingIcon', v)} />
            </ControlRow>
            <ControlRow label="Trailing icon">
              <Toggle checked={state.showTrailingIcon} onChange={v => set('showTrailingIcon', v)} />
            </ControlRow>
          </div>
        </div>
      </Section>

      {/* All states */}
      <Section id="states" title="States">
        <div className="bg-surface-0 rounded-xl border border-neutral-200 p-6 grid grid-cols-2 gap-6">
          <InputField
            label="Default"
            placeholder="Placeholder Text"
            helperText="Helper text goes here"
            leadingIcon={<Mail />}
            trailingIcon={<Eye />}
          />
          <InputField
            label="Focused"
            placeholder="Click to focus"
            helperText="Helper text goes here"
            leadingIcon={<Mail />}
            trailingIcon={<Eye />}
            autoFocus
          />
          <InputField
            label="Filled"
            helperText="Helper text goes here"
            leadingIcon={<Mail />}
            trailingIcon={<Eye />}
            defaultValue="user@example.com"
          />
          <InputField
            label="Error"
            placeholder="Placeholder Text"
            error="Error message goes here"
            leadingIcon={<Mail />}
            trailingIcon={<Eye />}
          />
          <InputField
            label="Disabled"
            placeholder="Placeholder Text"
            helperText="Helper text goes here"
            leadingIcon={<Mail />}
            trailingIcon={<Eye />}
            disabled
          />
          <InputField
            label="No icons"
            placeholder="Placeholder Text"
            helperText="Helper text goes here"
          />
        </div>
      </Section>

      {/* Usage guidelines */}
      <Section id="usage-guidelines" title="Usage guidelines">
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
      <Section id="props" title="Props">
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
                ['label',           'string',      '—'],
                ['placeholder',     'string',      "'Placeholder Text'"],
                ['helperText',      'string',      '—'],
                ['error',           'string',      '—'],
                ['disabled',        'boolean',     'false'],
                ['leadingIcon',     'ReactNode',   '—'],
                ['trailingIcon',    'ReactNode',   '—'],
                ['value',           'string',      '—'],
                ['onChange',        'ChangeEventHandler', '—'],
                ['wrapperClassName','string',      '—'],
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

      {/* Accessibility */}
      <Section id="accessibility" title="Accessibility">
        <AccessibilitySection
          bare
          role="Native <input> with a real <label htmlFor>, so it keeps standard form-field semantics without extra ARIA."
          keyboard={['Tab moves focus into the field; standard text-editing keys apply once focused.']}
          screenReader="Known gap: the error message renders as a plain <p>, not linked to the input via aria-describedby, and the input doesn't get aria-invalid when error is set — a screen reader user won't hear the error read out automatically when they focus the field. Wire up aria-describedby={errorId} and aria-invalid={!!error} before using error in production."
          contrastChecks={
            <>
              <ContrastCheck label="Input text" fgClassName="text-foreground" bgClassName="bg-surface-0" level="text" />
              <ContrastCheck label="Placeholder" fgClassName="text-input-text-placeholder" bgClassName="bg-surface-0" level="text" />
              <ContrastCheck label="Error text" fgClassName="text-input-text-error" bgClassName="bg-surface-0" level="text" />
              <ContrastCheck label="Default border vs bg" fgClassName="bg-input" bgClassName="bg-surface-0" level="ui" mode="fill" />
            </>
          }
        />
      </Section>

    </div>
  )
}
