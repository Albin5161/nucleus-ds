import { useState } from 'react'
import { Avatar, type AvatarStatus, type AvatarSize } from '@/components/Avatar'

type AvatarType = 'icon' | 'initials' | 'image'

const SIZES: AvatarSize[] = ['xs', 'sm', 'md', 'lg']
const TYPES: AvatarType[] = ['icon', 'initials', 'image']

// Public domain placeholder image
const SAMPLE_SRC = 'https://i.pravatar.cc/112'

export function AvatarPage() {
  const [pgType, setPgType] = useState<AvatarType>('initials')
  const [pgSize, setPgSize] = useState<AvatarSize>('md')
  const [pgStatus, setPgStatus] = useState<AvatarStatus | 'none'>('online')
  const [pgInitials, setPgInitials] = useState('AB')

  return (
    <div className="max-w-4xl mx-auto px-8 py-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-h2 font-semibold text-neutral-900">avatar</h1>
            <span className="text-label bg-success-subtle text-success-strong border border-success rounded-full px-2.5 py-0.5">
              Stable
            </span>
          </div>
          <p className="text-body text-neutral-500">
            Circular user representation in three forms — image, initials, or icon — across four sizes with optional presence status.
          </p>
        </div>
        <span className="text-body-sm text-neutral-400 mt-1">v 1.0</span>
      </div>

      {/* Playground */}
      <section className="mb-10">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Playground</h2>
        <div className="border border-neutral-200 rounded-xl overflow-hidden">
          <div className="bg-neutral-50 flex items-center justify-center min-h-[120px] p-8">
            <Avatar
              type={pgType}
              size={pgSize}
              status={pgStatus === 'none' ? undefined : pgStatus}
              initials={pgInitials}
              src={pgType === 'image' ? SAMPLE_SRC : undefined}
            />
          </div>
          <div className="border-t border-neutral-200 p-5 bg-white">
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <div className="flex items-center justify-between">
                <label className="text-body-sm text-neutral-500">Type</label>
                <select
                  value={pgType}
                  onChange={e => setPgType(e.target.value as AvatarType)}
                  className="w-40 border border-input rounded-md px-2 py-1 text-body-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-body-sm text-neutral-500">Size</label>
                <select
                  value={pgSize}
                  onChange={e => setPgSize(e.target.value as AvatarSize)}
                  className="w-40 border border-input rounded-md px-2 py-1 text-body-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {SIZES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-body-sm text-neutral-500">Status</label>
                <select
                  value={pgStatus}
                  onChange={e => setPgStatus(e.target.value as AvatarStatus | 'none')}
                  className="w-40 border border-input rounded-md px-2 py-1 text-body-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="none">none</option>
                  {(['online','away','offline','busy'] as AvatarStatus[]).map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              {pgType === 'initials' && (
                <div className="flex items-center justify-between">
                  <label className="text-body-sm text-neutral-500">Initials</label>
                  <input
                    type="text"
                    value={pgInitials}
                    maxLength={2}
                    onChange={e => setPgInitials(e.target.value.toUpperCase())}
                    className="w-40 border border-input rounded-md px-2 py-1 text-body-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="mb-10">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Types</h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Icon', node: <Avatar type="icon" size="md" status="online" /> },
            { label: 'Initials', node: <Avatar type="initials" initials="AB" size="md" status="online" /> },
            { label: 'Image', node: <Avatar type="image" src={SAMPLE_SRC} size="md" status="online" /> },
          ].map(({ label, node }) => (
            <div key={label} className="border border-neutral-200 rounded-xl p-6 flex flex-col items-center gap-3">
              {node}
              <p className="text-label text-neutral-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-10">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Sizes</h2>
        <div className="border border-neutral-200 rounded-xl p-6">
          <div className="flex items-end gap-6">
            {SIZES.map(size => (
              <div key={size} className="flex flex-col items-center gap-3">
                <Avatar type="initials" initials="AB" size={size} status="online" />
                <p className="text-label text-neutral-400">{size}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status dots */}
      <section className="mb-10">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Status</h2>
        <div className="grid grid-cols-4 gap-4">
          {(['online','away','offline','busy'] as AvatarStatus[]).map(status => (
            <div key={status} className="border border-neutral-200 rounded-xl p-6 flex flex-col items-center gap-3">
              <Avatar type="initials" initials="AB" size="md" status={status} />
              <div className="flex items-center gap-1.5">
                <span className={`h-2 w-2 rounded-full ${
                  status === 'online'  ? 'bg-status-online'  :
                  status === 'away'    ? 'bg-status-away'    :
                  status === 'offline' ? 'bg-status-offline' :
                                         'bg-status-busy'
                }`} />
                <p className="text-label text-neutral-500 capitalize">{status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Avatar group pattern */}
      <section className="mb-10">
        <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Avatar Group</h2>
        <div className="border border-neutral-200 rounded-xl p-6">
          <p className="text-body-sm text-neutral-500 mb-4">Stacked avatars with overlap — common for team / participants display.</p>
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {[
                { initials: 'AB', status: 'online'  as AvatarStatus },
                { initials: 'CK', status: 'away'    as AvatarStatus },
                { initials: 'DL', status: 'busy'    as AvatarStatus },
                { initials: 'EM', status: 'offline' as AvatarStatus },
              ].map(({ initials, status }) => (
                <Avatar
                  key={initials}
                  type="initials"
                  initials={initials}
                  size="md"
                  status={status}
                  className="ring-2 ring-white"
                />
              ))}
              <div className="h-10 w-10 rounded-full bg-muted border border-neutral-200 ring-2 ring-white flex items-center justify-center shrink-0">
                <span className="text-label text-neutral-500">+3</span>
              </div>
            </div>
            <span className="ml-4 text-body-sm text-neutral-500">7 team members</span>
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
                'Use the image type when a real photo is available — it builds trust and recognition.',
                'Fall back to initials when no image is available; they are more personal than the generic icon.',
                'Only show status dots in contexts where presence is meaningful, such as chat or collaboration tools.',
                'Use the stacked group pattern for team or participant lists, capping visible avatars at 4–5 with a count overflow.',
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
                "Don't use avatars to decorate non-user content — they should always represent a person.",
                "Avoid stacking more than 5 avatars without a count overflow indicator.",
                "Don't show status indicators in contexts where presence is irrelevant (e.g. static author bylines).",
              ].map(t => (
                <li key={t} className="flex items-start gap-2 text-body-sm text-neutral-600">
                  <span className="text-danger mt-0.5 shrink-0">•</span>{t}
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
                ['type', '"image" | "initials" | "icon"', '"icon"', 'Determines what content is shown inside the circle.'],
                ['size', '"xs" | "sm" | "md" | "lg"', '"md"', 'Controls circle diameter: 24 / 32 / 40 / 56 px.'],
                ['initials', 'string', '—', 'Up to 2 characters shown when type="initials". Auto-uppercased.'],
                ['src', 'string', '—', 'Image URL when type="image". Falls back to icon if omitted.'],
                ['alt', 'string', '""', 'Alt text for the avatar image.'],
                ['status', '"online"|"away"|"offline"|"busy"', '—', 'Shows a coloured presence dot at the bottom-right.'],
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
