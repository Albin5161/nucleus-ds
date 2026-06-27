const RADIUS_SCALE = [
  { name: 'none', token: 'rounded-none', value: '0px',   var: '—'              },
  { name: 'xs',   token: 'rounded-xs',   value: '1px',   var: '--radius-xs'    },
  { name: 'sm',   token: 'rounded-sm',   value: '2px',   var: '--radius-sm'    },
  { name: 'md',   token: 'rounded',      value: '4px',   var: '--radius-md'    },
  { name: 'lg',   token: 'rounded-lg',   value: '8px',   var: '--radius-lg'    },
  { name: 'xl',   token: 'rounded-xl',   value: '16px',  var: '--radius-xl'    },
  { name: '2xl',  token: 'rounded-2xl',  value: '24px',  var: '--radius-2xl'   },
  { name: '3xl',  token: 'rounded-3xl',  value: '32px',  var: '--radius-3xl'   },
  { name: 'full', token: 'rounded-full', value: '999px', var: '--radius-full'  },
]

const USAGES = [
  { token: 'rounded-xs',   name: 'xs',   value: '1px',  usage: 'Checkboxes, tiny indicators' },
  { token: 'rounded-sm',   name: 'sm',   value: '2px',  usage: 'Subtle card accents, tooltips' },
  { token: 'rounded',      name: 'md',   value: '4px',  usage: 'Default — inputs, dropdowns, tags' },
  { token: 'rounded-lg',   name: 'lg',   value: '8px',  usage: 'Buttons, cards, modals' },
  { token: 'rounded-xl',   name: 'xl',   value: '16px', usage: 'Large cards, panels' },
  { token: 'rounded-2xl',  name: '2xl',  value: '24px', usage: 'Modals, sheets, overlays' },
  { token: 'rounded-3xl',  name: '3xl',  value: '32px', usage: 'Avatars, pill shapes' },
  { token: 'rounded-full', name: 'full', value: '999px', usage: 'Badges, toggles, circular avatars' },
]

export function CornerRadiusPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-10">
      <div className="mb-10">
        <h1 className="text-h2 font-semibold text-neutral-900 mb-2">Corner Radius</h1>
        <p className="text-body text-neutral-500">
          A stepped radius scale for consistent rounding across all components. Values are mapped to CSS custom properties so they can be themed globally.
        </p>
      </div>

      {/* Visual scale */}
      <section className="mb-12">
        <h2 className="text-h4 font-medium text-neutral-900 mb-1">Scale</h2>
        <p className="text-body-sm text-neutral-500 mb-6">Each step applied to a 64×64px square.</p>
        <div className="flex flex-wrap gap-8 items-end">
          {RADIUS_SCALE.map(({ name, token, value }) => (
            <div key={name} className="flex flex-col items-center gap-3">
              <div
                className={`w-16 h-16 bg-brand-primary ${token}`}
              />
              <div className="text-center">
                <p className="text-label font-medium text-neutral-900">{name}</p>
                <p className="text-label text-neutral-400">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Token table */}
      <section className="mb-12">
        <h2 className="text-h4 font-medium text-neutral-900 mb-1">Tokens</h2>
        <p className="text-body-sm text-neutral-500 mb-6">All radii map to CSS variables prefixed <code className="bg-neutral-100 px-1 rounded text-label">--radius-*</code>.</p>
        <div className="border border-neutral-200 rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="px-4 py-3 text-label font-medium text-neutral-500">Name</th>
                <th className="px-4 py-3 text-label font-medium text-neutral-500">Tailwind class</th>
                <th className="px-4 py-3 text-label font-medium text-neutral-500">CSS variable</th>
                <th className="px-4 py-3 text-label font-medium text-neutral-500">Value</th>
                <th className="px-4 py-3 text-label font-medium text-neutral-500">Used for</th>
              </tr>
            </thead>
            <tbody>
              {USAGES.map(({ token, name, value, usage }, i) => (
                <tr key={name} className={i % 2 === 0 ? '' : 'bg-neutral-50'}>
                  <td className="px-4 py-3 text-body-sm font-medium text-neutral-900">{name}</td>
                  <td className="px-4 py-3">
                    <code className="text-label bg-neutral-100 text-neutral-700 px-1.5 py-0.5 rounded">{token}</code>
                  </td>
                  <td className="px-4 py-3 text-label text-neutral-400">
                    {name === 'md' ? '--radius-md' : `--radius-${name}`}
                  </td>
                  <td className="px-4 py-3 text-body-sm text-neutral-500">{value}</td>
                  <td className="px-4 py-3 text-body-sm text-neutral-500">{usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Applied to components */}
      <section>
        <h2 className="text-h4 font-medium text-neutral-900 mb-1">In context</h2>
        <p className="text-body-sm text-neutral-500 mb-6">How radius steps look on real component shapes.</p>
        <div className="flex flex-wrap gap-4 items-center">
          {[
            { label: 'Tag',    cls: 'rounded      px-3 py-1   text-label',   bg: 'bg-brand-primary-subtle text-brand-primary-strong' },
            { label: 'Button', cls: 'rounded-lg   px-6 py-3   text-body',    bg: 'bg-brand-primary text-brand-primary-foreground' },
            { label: 'Card',   cls: 'rounded-xl   px-6 py-4   text-body-sm', bg: 'bg-surface-0 border border-neutral-200 text-neutral-700' },
            { label: 'Avatar', cls: 'rounded-full w-10 h-10   text-label flex items-center justify-center', bg: 'bg-brand-primary text-brand-primary-foreground' },
          ].map(({ label, cls, bg }) => (
            <div key={label} className={`${cls} ${bg}`}>{label}</div>
          ))}
        </div>
      </section>
    </div>
  )
}
