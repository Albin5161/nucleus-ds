import { useState } from 'react'
import { RadioButton } from '@/components/RadioButton'
import { AccessibilitySection, ContrastCheck } from '@/components/A11y'
import { TableOfContents } from '@/components/TableOfContents'

const TOC_ITEMS = [
  { id: 'playground', label: 'Playground' },
  { id: 'states', label: 'States' },
  { id: 'group-example', label: 'Group Example' },
  { id: 'usage-guidelines', label: 'Usage Guidelines' },
  { id: 'props', label: 'Props' },
  { id: 'accessibility', label: 'Accessibility' },
]

export function RadioButtonPage() {
  // Playground state
  const [pgSelected, setPgSelected] = useState<'a' | 'b' | ''>('')
  const [pgDisabled, setPgDisabled] = useState(false)
  const [pgLabel, setPgLabel] = useState('Radio Label')
  const [pgHelper, setPgHelper] = useState('Helper text')

  function resetPlayground() {
    setPgSelected('')
    setPgDisabled(false)
    setPgLabel('Radio Label')
    setPgHelper('Helper text')
  }

  // Group demo state
  const [groupValue, setGroupValue] = useState<string>('option-1')

  const groupOptions = [
    { value: 'option-1', label: 'Option One', helperText: 'Best for most use cases' },
    { value: 'option-2', label: 'Option Two', helperText: 'Advanced configuration' },
    { value: 'option-3', label: 'Option Three', helperText: 'Not recommended' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10">
      <TableOfContents items={TOC_ITEMS} />
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-h2 font-semibold text-neutral-900">radio button</h1>
            <span className="text-label bg-success-subtle text-success-strong border border-success rounded-full px-2.5 py-0.5">
              Stable
            </span>
          </div>
          <p className="text-body text-neutral-500">
            Single-selection control for mutually exclusive options. Use in groups where exactly one choice must be made.
          </p>
        </div>
        <span className="text-body-sm text-neutral-400 mt-1">v 1.0</span>
      </div>

      {/* Playground */}
      <section id="playground" className="mb-10 scroll-mt-28">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Playground</h2>
        <div className="border border-neutral-200 rounded-xl overflow-hidden">
          {/* Preview */}
          <div className="bg-neutral-50 flex items-center justify-center min-h-[120px] p-8 gap-8">
            <RadioButton
              label={pgLabel || undefined}
              helperText={pgHelper || undefined}
              checked={pgSelected === 'a'}
              disabled={pgDisabled}
              value="a"
              onChange={() => setPgSelected('a')}
            />
            <RadioButton
              label={pgLabel ? `${pgLabel} 2` : undefined}
              helperText={pgHelper || undefined}
              checked={pgSelected === 'b'}
              disabled={pgDisabled}
              value="b"
              onChange={() => setPgSelected('b')}
            />
          </div>

          {/* Controls */}
          <div className="border-t border-neutral-200 p-5 bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="text-body-sm font-medium text-neutral-700">Controls</span>
              <button
                onClick={resetPlayground}
                className="text-body-sm text-neutral-400 hover:text-neutral-600 flex items-center gap-1 transition-colors"
              >
                ↺ Reset
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              <div className="flex items-center justify-between">
                <label className="text-body-sm text-neutral-500">Label</label>
                <input
                  type="text"
                  value={pgLabel}
                  onChange={e => setPgLabel(e.target.value)}
                  className="w-48 border border-input rounded-md px-2 py-1 text-body-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-body-sm text-neutral-500">Helper text</label>
                <input
                  type="text"
                  value={pgHelper}
                  onChange={e => setPgHelper(e.target.value)}
                  className="w-48 border border-input rounded-md px-2 py-1 text-body-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-body-sm text-neutral-500">Selected (first)</label>
                <button
                  role="switch"
                  aria-checked={pgSelected === 'a'}
                  onClick={() => setPgSelected(v => v === 'a' ? '' : 'a')}
                  className={`relative w-9 h-5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 ${pgSelected === 'a' ? 'bg-primary' : 'bg-neutral-200'}`}
                >
                  <span className={`absolute top-0.5 left-0.5 h-4 w-4 bg-white rounded-full shadow transition-transform ${pgSelected === 'a' ? 'translate-x-4' : 'translate-x-0'}`} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-body-sm text-neutral-500">Disabled</label>
                <button
                  role="switch"
                  aria-checked={pgDisabled}
                  onClick={() => setPgDisabled(v => !v)}
                  className={`relative w-9 h-5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 ${pgDisabled ? 'bg-primary' : 'bg-neutral-200'}`}
                >
                  <span className={`absolute top-0.5 left-0.5 h-4 w-4 bg-white rounded-full shadow transition-transform ${pgDisabled ? 'translate-x-4' : 'translate-x-0'}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* States */}
      <section id="states" className="mb-10 scroll-mt-28">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">States</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              label: 'Unselected',
              node: <RadioButton label="Radio Label" helperText="Helper text" />,
            },
            {
              label: 'Selected',
              node: <RadioButton label="Radio Label" helperText="Helper text" checked onChange={() => {}} />,
            },
            {
              label: 'Disabled — Unselected',
              node: <RadioButton label="Radio Label" helperText="Helper text" disabled />,
            },
            {
              label: 'Disabled — Selected',
              node: <RadioButton label="Radio Label" helperText="Helper text" checked disabled onChange={() => {}} />,
            },
          ].map(({ label, node }) => (
            <div key={label} className="border border-neutral-200 rounded-xl p-6">
              <p className="text-label text-neutral-400 mb-4">{label}</p>
              {node}
            </div>
          ))}
        </div>
      </section>

      {/* Group example */}
      <section id="group-example" className="mb-10 scroll-mt-28">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Group Example</h2>
        <div className="border border-neutral-200 rounded-xl p-6">
          <p className="text-body-sm font-medium text-neutral-700 mb-4">Select an option</p>
          <fieldset className="flex flex-col gap-3" role="radiogroup">
            <legend className="sr-only">Options</legend>
            {groupOptions.map(opt => (
              <RadioButton
                key={opt.value}
                name="demo-group"
                value={opt.value}
                label={opt.label}
                helperText={opt.helperText}
                checked={groupValue === opt.value}
                onChange={setGroupValue}
              />
            ))}
          </fieldset>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section id="usage-guidelines" className="mb-10 scroll-mt-28">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Usage Guidelines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-neutral-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-5 w-5 rounded-full bg-success-subtle flex items-center justify-center text-success-strong text-label font-bold">✓</span>
              <span className="text-body-sm font-semibold text-neutral-700">When to use</span>
            </div>
            <ul className="space-y-2">
              {[
                'Use when the user must pick exactly one option from a set of 2–5 choices.',
                'Prefer radio buttons over a select dropdown when all options need to be visible at once.',
                'Always group radio buttons with a shared name attribute so only one can be selected.',
              ].map(t => (
                <li key={t} className="flex items-start gap-2 text-body-sm text-neutral-600">
                  <span className="text-success-strong mt-0.5">•</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-neutral-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-5 w-5 rounded-full bg-danger-subtle flex items-center justify-center text-danger text-label font-bold">✕</span>
              <span className="text-body-sm font-semibold text-neutral-700">When not to use</span>
            </div>
            <ul className="space-y-2">
              {[
                'Don\'t use radio buttons for multiple independent selections — use checkboxes instead.',
                'Avoid using a single standalone radio button; a checkbox better expresses a yes/no toggle.',
                'For large option sets (6+), prefer a select dropdown to save vertical space.',
              ].map(t => (
                <li key={t} className="flex items-start gap-2 text-body-sm text-neutral-600">
                  <span className="text-danger mt-0.5">•</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Props table */}
      <section id="props" className="scroll-mt-28">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Props</h2>
        <div className="border border-neutral-200 rounded-xl overflow-hidden">
          <table className="w-full text-body-sm">
            <thead className="bg-neutral-50 border-b border-neutral-200">
              <tr>
                {['Prop', 'Type', 'Default', 'Description'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-neutral-500 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {[
                ['label', 'string', '—', 'Visible label text rendered to the right of the circle.'],
                ['helperText', 'string', '—', 'Secondary descriptive text shown below the label.'],
                ['checked', 'boolean', 'false', 'Whether this radio option is selected.'],
                ['disabled', 'boolean', 'false', 'Prevents interaction and applies muted styling.'],
                ['value', 'string', '—', 'The value submitted with the form when selected.'],
                ['name', 'string', '—', 'Groups radio buttons — only one per name can be selected.'],
                ['onChange', '(value: string) => void', '—', 'Callback fired with the radio\'s value when selected.'],
                ['id', 'string', 'auto', 'HTML id for the native input; auto-generated if omitted.'],
              ].map(([prop, type, def, desc]) => (
                <tr key={prop} className="bg-white hover:bg-neutral-50">
                  <td className="px-4 py-3 font-mono text-primary">{prop}</td>
                  <td className="px-4 py-3 font-mono text-neutral-500">{type}</td>
                  <td className="px-4 py-3 text-neutral-400">{def}</td>
                  <td className="px-4 py-3 text-neutral-600">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <AccessibilitySection
        id="accessibility"
        role={'Native <input type="radio"> — visually hidden but present in the DOM, so the browser\'s built-in radio-group semantics apply.'}
        keyboard={[
          'Tab moves focus into the radio group, stopping on the selected option (or the first if none selected).',
          'Arrow keys move selection between radios that share the same name.',
          'Space selects the focused radio.',
        ]}
        screenReader={'Announced via the associated <label>, with selected state and group position (e.g. "2 of 3") read automatically from the native input group — no extra ARIA needed.'}
        contrastChecks={
          <>
            <ContrastCheck label="Label text" fgClassName="text-foreground" bgClassName="bg-surface-0" level="text" />
            <ContrastCheck label="Selected dot" fgClassName="bg-radio-dot-selected" bgClassName="bg-radio-bg-selected" level="ui" mode="fill" />
          </>
        }
      />
    </div>
  )
}
