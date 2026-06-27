import { useState } from 'react'
import { Tooltip, type TooltipPosition } from '@/components/Tooltip'
import { Button } from '@/components/Button'

const POSITIONS: TooltipPosition[] = ['top', 'bottom', 'left', 'right']

export function TooltipPage() {
  const [pgPosition, setPgPosition] = useState<TooltipPosition>('top')
  const [pgContent, setPgContent] = useState('Tooltip text goes here')

  return (
    <div className="max-w-4xl mx-auto px-8 py-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-h2 font-semibold text-neutral-900">tooltip</h1>
            <span className="text-label bg-success-subtle text-success-strong border border-success rounded-full px-2.5 py-0.5">
              Stable
            </span>
          </div>
          <p className="text-body text-neutral-500">
            Contextual label that appears on hover or focus. Four positions — top, bottom, left, right — with a directional arrow.
          </p>
        </div>
        <span className="text-body-sm text-neutral-400 mt-1">v 1.0</span>
      </div>

      {/* Playground */}
      <section className="mb-10">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Playground</h2>
        <div className="border border-neutral-200 rounded-xl overflow-hidden">
          <div className="bg-neutral-50 flex items-center justify-center min-h-[140px] p-12">
            <Tooltip content={pgContent} position={pgPosition}>
              <Button variant="outline" size="sm">Hover me</Button>
            </Tooltip>
          </div>
          <div className="border-t border-neutral-200 p-5 bg-white">
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <div className="flex items-center justify-between">
                <label className="text-body-sm text-neutral-500">Content</label>
                <input
                  type="text"
                  value={pgContent}
                  onChange={e => setPgContent(e.target.value)}
                  className="w-48 border border-input rounded-md px-2 py-1 text-body-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-body-sm text-neutral-500">Position</label>
                <select
                  value={pgPosition}
                  onChange={e => setPgPosition(e.target.value as TooltipPosition)}
                  className="w-48 border border-input rounded-md px-2 py-1 text-body-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {POSITIONS.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positions — force open for static showcase */}
      <section className="mb-10">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Positions</h2>
        <div className="grid grid-cols-2 gap-4">
          {([
            { pos: 'top',    cls: 'px-8 pt-14 pb-6' },
            { pos: 'bottom', cls: 'px-8 pb-14 pt-6' },
            { pos: 'left',   cls: 'pl-44 pr-6 py-8'  },
            { pos: 'right',  cls: 'pl-6 pr-44 py-8'  },
          ] as { pos: TooltipPosition; cls: string }[]).map(({ pos, cls }) => (
            <div key={pos} className={`border border-neutral-200 rounded-xl flex items-center justify-center ${cls}`}>
              <Tooltip content="Tooltip text goes here" position={pos} open>
                <span className="text-label text-neutral-500 bg-neutral-100 rounded px-3 py-1.5 capitalize">
                  {pos}
                </span>
              </Tooltip>
            </div>
          ))}
        </div>
      </section>

      {/* Hover demo */}
      <section className="mb-10">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Interactive Demo</h2>
        <div className="border border-neutral-200 rounded-xl p-8">
          <p className="text-body-sm text-neutral-500 mb-8 text-center">Hover any button to see the tooltip</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Tooltip content="Create a new item" position="top">
              <Button variant="primary" size="sm">New</Button>
            </Tooltip>
            <Tooltip content="Edit selected item" position="bottom">
              <Button variant="outline" size="sm">Edit</Button>
            </Tooltip>
            <Tooltip content="This action cannot be undone" position="top">
              <Button variant="danger" size="sm">Delete</Button>
            </Tooltip>
            <Tooltip content="View all settings" position="right">
              <Button variant="ghost" size="sm">Settings</Button>
            </Tooltip>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="mb-10">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Usage Guidelines</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-neutral-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-5 w-5 rounded-full bg-success-subtle flex items-center justify-center text-success-strong text-label font-bold">✓</span>
              <span className="text-body-sm font-semibold text-neutral-700">When to use</span>
            </div>
            <ul className="space-y-2">
              {[
                'Use to reveal the label of an unlabelled icon button (e.g. toolbar actions).',
                'Use to provide supplemental context that would clutter the UI if always visible.',
                'Use position="top" as the default; switch to bottom/left/right only to avoid viewport overflow.',
              ].map(t => (
                <li key={t} className="flex items-start gap-2 text-body-sm text-neutral-600">
                  <span className="text-success-strong mt-0.5 shrink-0">•</span>{t}
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
                "Don't put critical information in a tooltip — it's invisible until hovered and inaccessible on touch devices.",
                "Don't use tooltips on disabled elements; the hover state is unreliable. Show a helper text instead.",
                "Avoid long multi-line content inside a tooltip — use a popover for rich content.",
              ].map(t => (
                <li key={t} className="flex items-start gap-2 text-body-sm text-neutral-600">
                  <span className="text-danger mt-0.5 shrink-0">•</span>{t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Props */}
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
                ['content', 'ReactNode', 'required', 'Text or element shown inside the tooltip bubble.'],
                ['position', '"top"|"bottom"|"left"|"right"', '"top"', 'Which side of the trigger the tooltip appears on.'],
                ['open', 'boolean', '—', 'Forces the tooltip visible regardless of hover state.'],
                ['children', 'ReactNode', 'required', 'The trigger element — must be focusable for keyboard a11y.'],
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
