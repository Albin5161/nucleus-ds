# EmptyStateCard — Component Cache

**Figma source:** `VD0Gflfp2r9QJzp4KwfAYh` node `78:3911`
**Type:** `COMPONENT_SET` — 3 variants (Default, No Data, Error)
**Built:** 2026-06-27
**File:** `src/components/EmptyStateCard/EmptyStateCard.tsx`

## Variants / Types

| type      | headline              | primary button variant | use case                          |
|-----------|-----------------------|------------------------|-----------------------------------|
| default   | Headline              | primary                | First-time empty state            |
| no-data   | No results found      | primary                | Filtered / search empty state     |
| error     | Something went wrong  | danger                 | Load failure / error state        |

## Layout (from Figma)

- Card: `bg-surface-0 border border-neutral-200 rounded-lg p-6 flex flex-col gap-6`
- Image area: `w-full h-[200px] rounded-lg bg-neutral-200` (grey placeholder) — replaced by `image` prop
- Body: `flex flex-col gap-2` — headline (`text-h4`) + description (`text-body`)
- CTA: `flex gap-3` — two `flex-1` buttons side by side

## Token Police

| Role             | Token                    | Resolves to                            |
|------------------|--------------------------|----------------------------------------|
| card bg          | bg-surface-0             | `--semantic-surface-0` → white         |
| card border      | border-neutral-200       | `--base-neutral-200` → #d9d9d9         |
| img placeholder  | bg-neutral-200           | `--base-neutral-200` → #d9d9d9         |
| headline         | text-h4 text-foreground  | 20px/500 + `--foreground`             |
| description      | text-body text-foreground| 16px/400 + `--foreground`             |
| primary btn      | Button variant="primary" | `--primary` dark navy                  |
| danger btn       | Button variant="danger"  | `--destructive` red                    |
| secondary btn    | Button variant="secondary"| `--semantic-brand-secondary` #00ace5  |

All clean — no raw hex, no palette utilities outside of neutral-200 (mapped to CSS var).

## Props

```ts
{
  type?: 'default' | 'no-data' | 'error'  // default: 'default'
  headline?: string        // overrides type default
  description?: string     // overrides type default
  image?: ReactNode        // replaces grey placeholder
  primaryLabel?: string    // overrides type default
  primaryVariant?: 'primary' | 'danger'
  onPrimary?: () => void
  secondaryLabel?: string  // overrides type default
  onSecondary?: () => void
  className?: string
}
```

## Gotcha

Single-quoted strings must not contain straight apostrophes (`'`) — use double quotes or escape. The `no-data` description `"you're"` triggered a syntax error on first write.
