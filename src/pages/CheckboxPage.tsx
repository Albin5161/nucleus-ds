import { useState } from 'react'
import { Checkbox } from '@/components/Checkbox'

export function CheckboxPage() {
  // Playground state
  const [pgChecked, setPgChecked] = useState(false)
  const [pgIndeterminate, setPgIndeterminate] = useState(false)
  const [pgDisabled, setPgDisabled] = useState(false)
  const [pgLabel, setPgLabel] = useState('Checkbox Label')
  const [pgHelper, setPgHelper] = useState('Helper Text')

  function resetPlayground() {
    setPgChecked(false)
    setPgIndeterminate(false)
    setPgDisabled(false)
    setPgLabel('Checkbox Label')
    setPgHelper('Helper Text')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-h2 font-semibold text-neutral-900">checkbox</h1>
            <span className="text-label bg-success-subtle text-success-strong border border-success rounded-full px-2.5 py-0.5">
              Stable
            </span>
          </div>
          <p className="text-body text-neutral-500">
            Boolean selection control with 5 states — unchecked, checked, indeterminate, disabled unchecked, and disabled checked.
          </p>
        </div>
        <span className="text-body-sm text-neutral-400 mt-1">v 1.0</span>
      </div>

      {/* Playground */}
      <section className="mb-10">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Playground</h2>
        <div className="border border-neutral-200 rounded-xl overflow-hidden">
          {/* Preview */}
          <div className="bg-neutral-50 flex items-center justify-center min-h-[120px] p-8">
            <Checkbox
              label={pgLabel || undefined}
              helperText={pgHelper || undefined}
              checked={pgChecked}
              indeterminate={pgIndeterminate}
              disabled={pgDisabled}
              onChange={setPgChecked}
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
                <label className="text-body-sm text-neutral-500">Checked</label>
                <button
                  role="switch"
                  aria-checked={pgChecked}
                  onClick={() => { setPgChecked(v => !v); setPgIndeterminate(false) }}
                  className={`relative w-9 h-5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 ${pgChecked ? 'bg-primary' : 'bg-neutral-200'}`}
                >
                  <span className={`absolute top-0.5 left-0.5 h-4 w-4 bg-white rounded-full shadow transition-transform ${pgChecked ? 'translate-x-4' : 'translate-x-0'}`} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-body-sm text-neutral-500">Indeterminate</label>
                <button
                  role="switch"
                  aria-checked={pgIndeterminate}
                  onClick={() => { setPgIndeterminate(v => !v); setPgChecked(false) }}
                  className={`relative w-9 h-5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 ${pgIndeterminate ? 'bg-primary' : 'bg-neutral-200'}`}
                >
                  <span className={`absolute top-0.5 left-0.5 h-4 w-4 bg-white rounded-full shadow transition-transform ${pgIndeterminate ? 'translate-x-4' : 'translate-x-0'}`} />
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
      <section className="mb-10">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">States</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              label: 'Unchecked',
              node: <Checkbox label="Checkbox Label" helperText="Helper Text" />,
            },
            {
              label: 'Checked',
              node: <Checkbox label="Checkbox Label" helperText="Helper Text" checked onChange={() => {}} />,
            },
            {
              label: 'Indeterminate',
              node: <Checkbox label="Checkbox Label" helperText="Helper Text" indeterminate />,
            },
            {
              label: 'Disabled — Unchecked',
              node: <Checkbox label="Checkbox Label" helperText="Helper Text" disabled />,
            },
            {
              label: 'Disabled — Checked',
              node: <Checkbox label="Checkbox Label" helperText="Helper Text" checked disabled onChange={() => {}} />,
            },
            {
              label: 'No label / helper',
              node: <Checkbox />,
            },
          ].map(({ label, node }) => (
            <div key={label} className="border border-neutral-200 rounded-xl p-6">
              <p className="text-label text-neutral-400 mb-4">{label}</p>
              {node}
            </div>
          ))}
        </div>
      </section>

      {/* Usage guidelines */}
      <section className="mb-10">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Usage Guidelines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-neutral-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-5 w-5 rounded-full bg-success-subtle flex items-center justify-center text-success-strong text-label font-bold">✓</span>
              <span className="text-body-sm font-semibold text-neutral-700">When to use</span>
            </div>
            <ul className="space-y-2">
              {[
                'Use to toggle a single boolean setting on or off.',
                'Use in forms where multiple independent options can be selected simultaneously.',
                'Use the indeterminate state when a parent checkbox represents a partially-selected group.',
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
                'Don\'t use when only one option from a group can be active at a time — use a radio button instead.',
                'Avoid using a checkbox for an action that takes immediate effect; prefer a toggle switch.',
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
      <section>
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
                ['label', 'string', '—', 'Visible label text rendered to the right of the box.'],
                ['helperText', 'string', '—', 'Secondary descriptive text shown below the label.'],
                ['checked', 'boolean', 'false', 'Whether the checkbox is checked.'],
                ['indeterminate', 'boolean', 'false', 'Shows a minus icon; overrides checked visually.'],
                ['disabled', 'boolean', 'false', 'Prevents interaction and applies muted styling.'],
                ['onChange', '(checked: boolean) => void', '—', 'Callback fired when the checked state changes.'],
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
    </div>
  )
}
