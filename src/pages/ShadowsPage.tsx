const SHADOWS = [
  {
    name: 'sm',
    cls: 'shadow-sm',
    value: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    usage: 'Subtle elevation — dropdowns, tooltips',
  },
  {
    name: 'DEFAULT',
    cls: 'shadow',
    value: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    usage: 'Cards, input focus rings',
  },
  {
    name: 'md',
    cls: 'shadow-md',
    value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    usage: 'Raised cards, popovers',
  },
  {
    name: 'lg',
    cls: 'shadow-lg',
    value: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    usage: 'Modals, dialogs, side sheets',
  },
  {
    name: 'xl',
    cls: 'shadow-xl',
    value: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    usage: 'Full-screen overlays',
  },
  {
    name: '2xl',
    cls: 'shadow-2xl',
    value: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    usage: 'Hero elements, featured panels',
  },
]

const INNER = [
  {
    name: 'inner',
    cls: 'shadow-inner',
    value: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    usage: 'Pressed states, inset inputs',
  },
]

export function ShadowsPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-10">
      <div className="mb-10">
        <h1 className="text-h2 font-semibold text-neutral-900 mb-2">Shadows</h1>
        <p className="text-body text-neutral-500">
          Elevation shadows communicate depth and layer hierarchy. Nucleus DS uses Tailwind's default shadow scale — no custom tokens are needed since the defaults cover all component use cases.
        </p>
      </div>

      {/* Drop shadows */}
      <section className="mb-12">
        <h2 className="text-h4 font-medium text-neutral-900 mb-1">Drop shadows</h2>
        <p className="text-body-sm text-neutral-500 mb-8">Applied with <code className="bg-neutral-100 px-1 rounded text-label">shadow-*</code> utilities.</p>
        <div className="border border-neutral-200 rounded-xl p-8 grid grid-cols-3 gap-8">
          {SHADOWS.map(({ name, cls, value, usage }) => (
            <div key={name} className="flex flex-col gap-3">
              <div className={`bg-surface-0 rounded-xl h-24 ${cls}`} />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <code className="text-label bg-neutral-100 text-neutral-700 px-1.5 py-0.5 rounded">{cls}</code>
                </div>
                <p className="text-label text-neutral-400 mb-1 break-all leading-relaxed">{value}</p>
                <p className="text-body-sm text-neutral-500">{usage}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inner shadow */}
      <section className="mb-12">
        <h2 className="text-h4 font-medium text-neutral-900 mb-1">Inner shadow</h2>
        <p className="text-body-sm text-neutral-500 mb-8">Inset shadow for pressed or recessed elements.</p>
        <div className="border border-neutral-200 rounded-xl p-8 grid grid-cols-3 gap-8">
          {INNER.map(({ name, cls, value, usage }) => (
            <div key={name} className="flex flex-col gap-3">
              <div className={`bg-surface-0 rounded-xl h-24 ${cls}`} />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <code className="text-label bg-neutral-100 text-neutral-700 px-1.5 py-0.5 rounded">{cls}</code>
                </div>
                <p className="text-label text-neutral-400 mb-1 break-all leading-relaxed">{value}</p>
                <p className="text-body-sm text-neutral-500">{usage}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Elevation guide */}
      <section>
        <h2 className="text-h4 font-medium text-neutral-900 mb-1">Elevation guide</h2>
        <p className="text-body-sm text-neutral-500 mb-6">Match shadow level to component z-position in the interface.</p>
        <div className="border border-neutral-200 rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="px-4 py-3 text-label font-medium text-neutral-500">Level</th>
                <th className="px-4 py-3 text-label font-medium text-neutral-500">Class</th>
                <th className="px-4 py-3 text-label font-medium text-neutral-500">Components</th>
              </tr>
            </thead>
            <tbody>
              {[
                { level: '0 — Flat',      cls: 'none',    comps: 'Table rows, list items, inline elements' },
                { level: '1 — Raised',    cls: 'shadow-sm', comps: 'Badges, tags, hover states' },
                { level: '2 — Card',      cls: 'shadow',   comps: 'Cards, panels, input focus' },
                { level: '3 — Floating',  cls: 'shadow-md', comps: 'Dropdowns, popovers, date pickers' },
                { level: '4 — Overlay',   cls: 'shadow-lg', comps: 'Modals, drawers, command palettes' },
                { level: '5 — Featured',  cls: 'shadow-xl', comps: 'Hero cards, lightboxes' },
              ].map(({ level, cls, comps }, i) => (
                <tr key={level} className={i % 2 === 0 ? '' : 'bg-neutral-50'}>
                  <td className="px-4 py-3 text-body-sm text-neutral-900">{level}</td>
                  <td className="px-4 py-3">
                    <code className="text-label bg-neutral-100 text-neutral-700 px-1.5 py-0.5 rounded">{cls}</code>
                  </td>
                  <td className="px-4 py-3 text-body-sm text-neutral-500">{comps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
