const SCALE = [
  { token: '0',   px: 0  },
  { token: '0.5', px: 2  },
  { token: '1',   px: 4  },
  { token: '1.5', px: 6  },
  { token: '2',   px: 8  },
  { token: '2.5', px: 10 },
  { token: '3',   px: 12 },
  { token: '4',   px: 16 },
  { token: '5',   px: 20 },
  { token: '6',   px: 24 },
  { token: '7',   px: 28 },
  { token: '8',   px: 32 },
  { token: '9',   px: 36 },
  { token: '10',  px: 40 },
  { token: '11',  px: 44 },
  { token: '12',  px: 48 },
  { token: '14',  px: 56 },
  { token: '16',  px: 64 },
  { token: '20',  px: 80 },
  { token: '24',  px: 96 },
  { token: '28',  px: 112 },
  { token: '32',  px: 128 },
]

const USAGES = [
  { label: 'Component gap (tight)',    token: '2',  example: 'gap-2',  desc: 'Icon + label, inline elements' },
  { label: 'Component gap (default)', token: '3',  example: 'gap-3',  desc: 'Form field label + input' },
  { label: 'Component padding (sm)',  token: '4',  example: 'p-4',    desc: 'Compact buttons, badges' },
  { label: 'Component padding (md)',  token: '6',  example: 'p-6',    desc: 'Cards, panels' },
  { label: 'Section gap',            token: '8',  example: 'gap-8',  desc: 'Between page sections' },
  { label: 'Page padding',           token: '10', example: 'px-10',  desc: 'Horizontal page breathing room' },
  { label: 'Layout gap',             token: '16', example: 'gap-16', desc: 'Between major layout areas' },
]

export function SpacingPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-10">
      <div className="mb-10">
        <h1 className="text-h2 font-semibold text-neutral-900 mb-2">Spacing</h1>
        <p className="text-body text-neutral-500">
          Nucleus DS uses Tailwind's default 4px-base spacing scale. Every token multiplies the base unit of 4px, keeping all spacing consistent and predictable.
        </p>
      </div>

      {/* Scale */}
      <section className="mb-12">
        <h2 className="text-h4 font-medium text-neutral-900 mb-1">Scale</h2>
        <p className="text-body-sm text-neutral-500 mb-6">Base unit: <code className="bg-neutral-100 px-1 rounded text-label">4px</code></p>
        <div className="flex flex-col gap-2">
          {SCALE.map(({ token, px }) => (
            <div key={token} className="flex items-center gap-4">
              <span className="text-label text-neutral-400 w-8 text-right shrink-0">{token}</span>
              <div
                className="bg-brand-primary rounded-sm shrink-0"
                style={{ width: `${Math.max(px, 2)}px`, height: '20px' }}
              />
              <span className="text-label text-neutral-500">{px}px</span>
            </div>
          ))}
        </div>
      </section>

      {/* Common usages */}
      <section className="mb-12">
        <h2 className="text-h4 font-medium text-neutral-900 mb-1">Common usages</h2>
        <p className="text-body-sm text-neutral-500 mb-6">Recommended tokens for frequent layout and component patterns.</p>
        <div className="border border-neutral-200 rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="px-4 py-3 text-label font-medium text-neutral-500">Usage</th>
                <th className="px-4 py-3 text-label font-medium text-neutral-500">Token</th>
                <th className="px-4 py-3 text-label font-medium text-neutral-500">Class example</th>
                <th className="px-4 py-3 text-label font-medium text-neutral-500">Value</th>
                <th className="px-4 py-3 text-label font-medium text-neutral-500">Notes</th>
              </tr>
            </thead>
            <tbody>
              {USAGES.map(({ label, token, example, desc }, i) => {
                const px = SCALE.find(s => s.token === token)?.px ?? 0
                return (
                  <tr key={token} className={i % 2 === 0 ? '' : 'bg-neutral-50'}>
                    <td className="px-4 py-3 text-body-sm text-neutral-900">{label}</td>
                    <td className="px-4 py-3">
                      <code className="text-label bg-brand-primary-subtle text-brand-primary-strong px-1.5 py-0.5 rounded">{token}</code>
                    </td>
                    <td className="px-4 py-3">
                      <code className="text-label bg-neutral-100 text-neutral-700 px-1.5 py-0.5 rounded">{example}</code>
                    </td>
                    <td className="px-4 py-3 text-body-sm text-neutral-500">{px}px</td>
                    <td className="px-4 py-3 text-body-sm text-neutral-500">{desc}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Visual demo */}
      <section>
        <h2 className="text-h4 font-medium text-neutral-900 mb-1">Padding demo</h2>
        <p className="text-body-sm text-neutral-500 mb-6">How spacing tokens translate to visual breathing room around content.</p>
        <div className="flex flex-wrap gap-6 items-start">
          {[{ t: '2', p: 8 }, { t: '4', p: 16 }, { t: '6', p: 24 }, { t: '8', p: 32 }, { t: '12', p: 48 }].map(({ t, p }) => (
            <div key={t} className="flex flex-col items-center gap-2">
              <div className="bg-brand-primary-subtle rounded border border-brand-primary-subtle flex items-center justify-center" style={{ padding: `${p}px` }}>
                <div className="bg-brand-primary rounded text-brand-primary-foreground text-label px-2 py-1">
                  Content
                </div>
              </div>
              <code className="text-label text-neutral-500">p-{t}</code>
              <span className="text-label text-neutral-400">{p}px</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
