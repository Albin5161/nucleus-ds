# Tag — Component Cache

**Figma source:** `VD0Gflfp2r9QJzp4KwfAYh` node `72:2932`
**Type:** `COMPONENT_SET` (Workflow B)
**Built:** 2026-06-27
**File:** `src/components/Tag/Tag.tsx`

## Variants

| Variant | bg                  | text                    | dot/close             | border           |
|---------|---------------------|-------------------------|-----------------------|------------------|
| default | bg-brand-primary    | text-brand-primary-subtle | bg/text-brand-primary-strong | border-brand-primary-strong/30 |
| success | bg-success-subtle   | text-success-strong     | bg/text-success       | border-success   |
| warning | bg-warning-subtle   | text-warning-strong     | bg/text-warning       | border-warning   |
| danger  | bg-danger-subtle    | text-danger-strong      | bg/text-danger        | border-danger    |

## Layout (from Figma)
- Outer pill: 73×24px → `rounded-full px-3 py-1 text-label`
- Leading dot: 6×6px → `h-1.5 w-1.5 rounded-full`
- Label: 12px `text-label`
- Close button: 12×12px → `h-3 w-3` with `X` icon from lucide-react, `stroke-[2.5]`
- Items gap: `gap-1.5`

## Props
```ts
{
  label: string           // required
  variant?: 'default' | 'success' | 'warning' | 'danger'  // default: 'default'
  onRemove?: () => void   // if provided, shows × button
  className?: string
}
```

## Token Police
All clean. Uses semantic brand-primary/success/warning/danger tokens only.
