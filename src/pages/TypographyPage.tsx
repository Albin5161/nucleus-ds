const typeScale = [
  { name: 'Display',    cls: 'text-display font-semibold',  spec: '48 / 56 · semibold' },
  { name: 'Heading 1',  cls: 'text-h1 font-semibold',       spec: '40 / 48 · semibold' },
  { name: 'Heading 2',  cls: 'text-h2 font-semibold',       spec: '32 / 40 · semibold' },
  { name: 'Heading 3',  cls: 'text-h3 font-medium',         spec: '24 / 32 · medium' },
  { name: 'Heading 4',  cls: 'text-h4 font-medium',         spec: '20 / 28 · medium' },
  { name: 'Body Large', cls: 'text-body-lg',                spec: '20 / 28 · regular' },
  { name: 'Body Base',  cls: 'text-body',                   spec: '16 / 24 · regular' },
  { name: 'Body Small', cls: 'text-body-sm',                spec: '14 / 20 · regular' },
  { name: 'Label',      cls: 'text-label',                  spec: '12 / 16 · regular' },
  { name: 'Code',       cls: 'text-code font-mono',         spec: '12 / 20 · mono' },
]

export function TypographyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-h2 font-semibold text-neutral-900 mb-2">Typography</h1>
        <p className="text-body text-neutral-500">
          Inter (sans), Playfair Display (serif), JetBrains Mono (mono). Type scale from <code className="font-mono text-code bg-neutral-100 px-1.5 py-0.5 rounded">text.styles.tokens.json</code>.
        </p>
      </div>

      <div className="bg-surface-0 rounded-xl border border-neutral-200 divide-y divide-neutral-100">
        {typeScale.map(({ name, cls, spec }) => (
          <div key={name} className="flex items-baseline gap-6 px-8 py-5">
            <div className="w-32 shrink-0">
              <span className="text-label text-neutral-400">{name}</span>
              <p className="text-[10px] font-mono text-neutral-300 mt-0.5">{spec}</p>
            </div>
            <p className={`${cls} text-neutral-900 truncate`}>
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
