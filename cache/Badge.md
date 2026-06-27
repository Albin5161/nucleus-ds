# Badge — Component Cache

**Figma source:** `VD0Gflfp2r9QJzp4KwfAYh` node `72:2952`
**Type:** `COMPONENT_SET` (Workflow B)
**Built:** 2026-06-27
**File:** `src/components/Badge/Badge.tsx`

## Variants

| Variant | bg              | text                       |
|---------|-----------------|----------------------------|
| default | bg-brand-primary | text-brand-primary-foreground |
| success | bg-success       | text-white                 |
| warning | bg-warning       | text-brand-primary-foreground |
| danger  | bg-danger        | text-white                 |

## Layout (from Figma)
- Pill: 39×20px → `rounded-full px-2 py-0.5 text-label`
- Text: 12px, numeric `tabular-nums`
- Count overflow: `max` prop (default 99) → displays "99+" when exceeded

## Props
```ts
{
  count: number | string  // required — value to display
  max?: number            // default: 99 — cap for overflow display
  variant?: 'default' | 'success' | 'warning' | 'danger'
  className?: string
}
```

## Token Police
All clean. `text-white` is a base Tailwind utility (not a palette scale class). All bg tokens are semantic.

## Page
Shared page with Tag at `/components/tag-badge` (`src/pages/TagBadgePage.tsx`).
