import { useState } from 'react'
import { Tag } from '@/components/Tag'
import { Badge } from '@/components/Badge'

type TagVariant = 'default' | 'success' | 'warning' | 'danger'
type BadgeVariant = 'default' | 'success' | 'warning' | 'danger'

export function TagBadgePage() {
  // Tag playground
  const [tagVariant, setTagVariant] = useState<TagVariant>('default')
  const [tagLabel, setTagLabel] = useState('Label')
  const [tagRemovable, setTagRemovable] = useState(true)

  // Badge playground
  const [badgeVariant, setBadgeVariant] = useState<BadgeVariant>('default')
  const [badgeCount, setBadgeCount] = useState(99)
  const [badgeMax, setBadgeMax] = useState(99)

  // Tag group demo
  const [activeTags, setActiveTags] = useState(['React', 'TypeScript', 'Figma', 'Design System'])

  const tagVariants: TagVariant[] = ['default', 'success', 'warning', 'danger']
  const badgeVariants: BadgeVariant[] = ['default', 'success', 'warning', 'danger']

  return (
    <div className="max-w-4xl mx-auto px-8 py-10">
      {/* ═══════════════════════════════════════ TAG ═══════════════════════════════════ */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-h2 font-semibold text-neutral-900">tag</h1>
            <span className="text-label bg-success-subtle text-success-strong border border-success rounded-full px-2.5 py-0.5">
              Stable
            </span>
          </div>
          <p className="text-body text-neutral-500">
            Compact pill labels for categorisation, status, and filterable metadata. Supports an optional remove action.
          </p>
        </div>
        <span className="text-body-sm text-neutral-400 mt-1">v 1.0</span>
      </div>

      {/* Tag Playground */}
      <section className="mb-10">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Playground</h2>
        <div className="border border-neutral-200 rounded-xl overflow-hidden">
          <div className="bg-neutral-50 flex items-center justify-center min-h-[100px] p-8">
            <Tag
              label={tagLabel}
              variant={tagVariant}
              onRemove={tagRemovable ? () => {} : undefined}
            />
          </div>
          <div className="border-t border-neutral-200 p-5 bg-white">
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <div className="flex items-center justify-between">
                <label className="text-body-sm text-neutral-500">Label</label>
                <input
                  type="text"
                  value={tagLabel}
                  onChange={e => setTagLabel(e.target.value)}
                  className="w-40 border border-input rounded-md px-2 py-1 text-body-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-body-sm text-neutral-500">Variant</label>
                <select
                  value={tagVariant}
                  onChange={e => setTagVariant(e.target.value as TagVariant)}
                  className="w-40 border border-input rounded-md px-2 py-1 text-body-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {tagVariants.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-body-sm text-neutral-500">Removable</label>
                <button
                  role="switch"
                  aria-checked={tagRemovable}
                  onClick={() => setTagRemovable(v => !v)}
                  className={`relative w-9 h-5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 ${tagRemovable ? 'bg-primary' : 'bg-neutral-200'}`}
                >
                  <span className={`absolute top-0.5 left-0.5 h-4 w-4 bg-white rounded-full shadow transition-transform ${tagRemovable ? 'translate-x-4' : 'translate-x-0'}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tag Variants */}
      <section className="mb-10">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Variants</h2>
        <div className="grid grid-cols-2 gap-4">
          {tagVariants.map(v => (
            <div key={v} className="border border-neutral-200 rounded-xl p-6">
              <p className="text-label text-neutral-400 mb-4 capitalize">{v}</p>
              <div className="flex flex-wrap gap-2">
                <Tag label="Label" variant={v} />
                <Tag label="Removable" variant={v} onRemove={() => {}} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tag group demo */}
      <section className="mb-10">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Removable Group</h2>
        <div className="border border-neutral-200 rounded-xl p-6">
          <p className="text-body-sm text-neutral-500 mb-3">Click × to remove a tag</p>
          <div className="flex flex-wrap gap-2 min-h-[40px]">
            {activeTags.map((t, i) => (
              <Tag
                key={t}
                label={t}
                variant={(['default','success','warning','danger'] as TagVariant[])[i % 4]}
                onRemove={() => setActiveTags(prev => prev.filter(x => x !== t))}
              />
            ))}
            {activeTags.length === 0 && (
              <button
                className="text-body-sm text-primary hover:underline"
                onClick={() => setActiveTags(['React', 'TypeScript', 'Figma', 'Design System'])}
              >
                + Reset tags
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-neutral-200 my-12" />

      {/* ═══════════════════════════════════════ BADGE ═══════════════════════════════════ */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-h2 font-semibold text-neutral-900">badge</h1>
            <span className="text-label bg-success-subtle text-success-strong border border-success rounded-full px-2.5 py-0.5">
              Stable
            </span>
          </div>
          <p className="text-body text-neutral-500">
            Numeric indicator for counts, notifications, or status totals. Automatically caps at a configurable max.
          </p>
        </div>
        <span className="text-body-sm text-neutral-400 mt-1">v 1.0</span>
      </div>

      {/* Badge Playground */}
      <section className="mb-10">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Playground</h2>
        <div className="border border-neutral-200 rounded-xl overflow-hidden">
          <div className="bg-neutral-50 flex items-center justify-center min-h-[100px] p-8">
            <Badge count={badgeCount} max={badgeMax} variant={badgeVariant} />
          </div>
          <div className="border-t border-neutral-200 p-5 bg-white">
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <div className="flex items-center justify-between">
                <label className="text-body-sm text-neutral-500">Count</label>
                <input
                  type="number"
                  value={badgeCount}
                  onChange={e => setBadgeCount(Number(e.target.value))}
                  className="w-40 border border-input rounded-md px-2 py-1 text-body-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-body-sm text-neutral-500">Max</label>
                <input
                  type="number"
                  value={badgeMax}
                  onChange={e => setBadgeMax(Number(e.target.value))}
                  className="w-40 border border-input rounded-md px-2 py-1 text-body-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-body-sm text-neutral-500">Variant</label>
                <select
                  value={badgeVariant}
                  onChange={e => setBadgeVariant(e.target.value as BadgeVariant)}
                  className="w-40 border border-input rounded-md px-2 py-1 text-body-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {badgeVariants.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badge Variants */}
      <section className="mb-10">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Variants</h2>
        <div className="grid grid-cols-2 gap-4">
          {badgeVariants.map(v => (
            <div key={v} className="border border-neutral-200 rounded-xl p-6">
              <p className="text-label text-neutral-400 mb-4 capitalize">{v}</p>
              <div className="flex items-center gap-3">
                <Badge count={3} variant={v} />
                <Badge count={42} variant={v} />
                <Badge count={150} variant={v} />
                <Badge count={0} variant={v} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Badge in context */}
      <section className="mb-10">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">In Context</h2>
        <div className="border border-neutral-200 rounded-xl p-6">
          <div className="flex flex-col gap-3">
            {[
              { label: 'Inbox',         count: 12,  variant: 'default' as BadgeVariant },
              { label: 'Notifications', count: 3,   variant: 'danger'  as BadgeVariant },
              { label: 'Updates',       count: 100, variant: 'success' as BadgeVariant },
              { label: 'Warnings',      count: 7,   variant: 'warning' as BadgeVariant },
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-0">
                <span className="text-body-sm text-neutral-700">{item.label}</span>
                <Badge count={item.count} variant={item.variant} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guidelines — shared */}
      <section className="mb-10">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Usage Guidelines</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-neutral-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-5 w-5 rounded-full bg-success-subtle flex items-center justify-center text-success-strong text-label font-bold">✓</span>
              <span className="text-body-sm font-semibold text-neutral-700">Tags — when to use</span>
            </div>
            <ul className="space-y-2">
              {[
                'Use to label content with categories, topics, or attributes.',
                'Use the removable variant when the user can dynamically filter or clear tags.',
                'Match variant to semantic meaning — success for active, danger for error states.',
              ].map(t => (
                <li key={t} className="flex items-start gap-2 text-body-sm text-neutral-600">
                  <span className="text-success-strong mt-0.5">•</span>{t}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-neutral-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-5 w-5 rounded-full bg-success-subtle flex items-center justify-center text-success-strong text-label font-bold">✓</span>
              <span className="text-body-sm font-semibold text-neutral-700">Badges — when to use</span>
            </div>
            <ul className="space-y-2">
              {[
                'Use to surface unread counts, notification totals, or status quantities.',
                'Set a max prop (default 99) to cap large numbers with "+" overflow.',
                'Place adjacent to the element it quantifies — an icon, nav item, or button.',
              ].map(t => (
                <li key={t} className="flex items-start gap-2 text-body-sm text-neutral-600">
                  <span className="text-success-strong mt-0.5">•</span>{t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Props — Tag */}
      <section className="mb-8">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Tag Props</h2>
        <div className="border border-neutral-200 rounded-xl overflow-hidden">
          <table className="w-full text-body-sm">
            <thead className="bg-neutral-50 border-b border-neutral-200">
              <tr>{['Prop','Type','Default','Description'].map(h => <th key={h} className="text-left px-4 py-3 text-neutral-500 font-medium">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {[
                ['label','string','required','Text displayed inside the tag.'],
                ['variant','"default"|"success"|"warning"|"danger"','"default"','Visual colour variant.'],
                ['onRemove','() => void','—','If provided, shows an × button and calls this on click.'],
              ].map(([p,t,d,desc]) => (
                <tr key={p} className="bg-white hover:bg-neutral-50">
                  <td className="px-4 py-3 font-mono text-primary">{p}</td>
                  <td className="px-4 py-3 font-mono text-neutral-500">{t}</td>
                  <td className="px-4 py-3 text-neutral-400">{d}</td>
                  <td className="px-4 py-3 text-neutral-600">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Props — Badge */}
      <section>
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Badge Props</h2>
        <div className="border border-neutral-200 rounded-xl overflow-hidden">
          <table className="w-full text-body-sm">
            <thead className="bg-neutral-50 border-b border-neutral-200">
              <tr>{['Prop','Type','Default','Description'].map(h => <th key={h} className="text-left px-4 py-3 text-neutral-500 font-medium">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {[
                ['count','number | string','required','The value to display.'],
                ['max','number','99','When count exceeds this, displays "max+".'],
                ['variant','"default"|"success"|"warning"|"danger"','"default"','Visual colour variant.'],
              ].map(([p,t,d,desc]) => (
                <tr key={p} className="bg-white hover:bg-neutral-50">
                  <td className="px-4 py-3 font-mono text-primary">{p}</td>
                  <td className="px-4 py-3 font-mono text-neutral-500">{t}</td>
                  <td className="px-4 py-3 text-neutral-400">{d}</td>
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
