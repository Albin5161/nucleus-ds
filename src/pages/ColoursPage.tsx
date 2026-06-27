type Swatch = { label: string; cls: string }

function SwatchRow({ title, swatches }: { title: string; swatches: Swatch[] }) {
  return (
    <div className="mb-8">
      <h3 className="text-label font-semibold uppercase tracking-widest text-neutral-400 mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {swatches.map(({ label, cls }) => (
          <div key={label} className="flex flex-col gap-1.5 w-20">
            <div className={`h-10 w-full rounded-lg border border-neutral-200 ${cls}`} />
            <span className="text-[10px] leading-tight text-neutral-500 font-mono break-all">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ColoursPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-10">
      <div className="mb-8">
        <h1 className="text-h2 font-semibold text-neutral-900 mb-2">Colours</h1>
        <p className="text-body text-neutral-500">
          3-tier token system — base primitives → semantic aliases → shadcn-compatible utilities.
        </p>
      </div>

      <div className="bg-surface-0 rounded-xl border border-neutral-200 p-8 space-y-2">
        <SwatchRow title="Brand Primary — Indigo" swatches={[
          { label: '50',  cls: 'bg-indigo-50' },
          { label: '100', cls: 'bg-indigo-100' },
          { label: '200', cls: 'bg-indigo-200' },
          { label: '300', cls: 'bg-indigo-300' },
          { label: '400', cls: 'bg-indigo-400' },
          { label: '500', cls: 'bg-indigo-500' },
          { label: '600', cls: 'bg-indigo-600' },
          { label: '700', cls: 'bg-indigo-700' },
          { label: '800', cls: 'bg-indigo-800' },
          { label: '900', cls: 'bg-indigo-900' },
        ]} />

        <SwatchRow title="Brand Secondary — Blue" swatches={[
          { label: '50',  cls: 'bg-ds-blue-50' },
          { label: '100', cls: 'bg-ds-blue-100' },
          { label: '200', cls: 'bg-ds-blue-200' },
          { label: '300', cls: 'bg-ds-blue-300' },
          { label: '400', cls: 'bg-ds-blue-400' },
          { label: '500', cls: 'bg-ds-blue-500' },
          { label: '600', cls: 'bg-ds-blue-600' },
          { label: '700', cls: 'bg-ds-blue-700' },
          { label: '800', cls: 'bg-ds-blue-800' },
          { label: '900', cls: 'bg-ds-blue-900' },
        ]} />

        <SwatchRow title="Neutrals" swatches={[
          { label: '50',  cls: 'bg-neutral-50' },
          { label: '100', cls: 'bg-neutral-100' },
          { label: '200', cls: 'bg-neutral-200' },
          { label: '300', cls: 'bg-neutral-300' },
          { label: '400', cls: 'bg-neutral-400' },
          { label: '500', cls: 'bg-neutral-500' },
          { label: '600', cls: 'bg-neutral-600' },
          { label: '700', cls: 'bg-neutral-700' },
          { label: '800', cls: 'bg-neutral-800' },
          { label: '900', cls: 'bg-neutral-900' },
        ]} />

        <SwatchRow title="Feedback" swatches={[
          { label: 'success',         cls: 'bg-success' },
          { label: 'success-subtle',  cls: 'bg-success-subtle' },
          { label: 'success-strong',  cls: 'bg-success-strong' },
          { label: 'warning',         cls: 'bg-warning' },
          { label: 'warning-subtle',  cls: 'bg-warning-subtle' },
          { label: 'warning-strong',  cls: 'bg-warning-strong' },
          { label: 'danger',          cls: 'bg-danger' },
          { label: 'danger-subtle',   cls: 'bg-danger-subtle' },
          { label: 'danger-strong',   cls: 'bg-danger-strong' },
        ]} />

        <SwatchRow title="shadcn Semantic" swatches={[
          { label: 'background',  cls: 'bg-background' },
          { label: 'foreground',  cls: 'bg-foreground' },
          { label: 'primary',     cls: 'bg-primary' },
          { label: 'primary-fg',  cls: 'bg-primary-foreground' },
          { label: 'secondary',   cls: 'bg-secondary' },
          { label: 'muted',       cls: 'bg-muted' },
          { label: 'accent',      cls: 'bg-accent' },
          { label: 'destructive', cls: 'bg-destructive' },
          { label: 'border',      cls: 'bg-border' },
        ]} />

        <SwatchRow title="Status" swatches={[
          { label: 'online',  cls: 'bg-status-online' },
          { label: 'away',    cls: 'bg-status-away' },
          { label: 'offline', cls: 'bg-status-offline' },
          { label: 'busy',    cls: 'bg-status-busy' },
        ]} />
      </div>
    </div>
  )
}
