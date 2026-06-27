# Alert — Component Cache

**Figma source:** `VD0Gflfp2r9QJzp4KwfAYh` node `84:148`
**Type:** `COMPONENT_SET` (Workflow B)
**Built:** 2026-06-27
**File:** `src/components/Alert/Alert.tsx`

## Variants

| variant   | bg token          | border token         | text token          | icon token       | link token       |
|-----------|-------------------|----------------------|---------------------|------------------|------------------|
| danger    | bg-danger-subtle  | border-danger        | text-danger-strong  | text-danger-strong | text-danger    |
| success   | bg-success-subtle | border-success       | text-success-strong | text-success     | text-success     |
| warning   | bg-warning-subtle | border-warning-strong| text-warning-strong | text-warning     | text-warning     |
| default   | bg-neutral-50     | border-neutral-600   | text-foreground     | text-foreground  | text-neutral-600 |

## Layout (from Figma)
- Root: `flex-row items-start gap-2 rounded-lg border px-3 py-4`
- Content: `flex-col gap-1 pl-2` (pl-2 = Figma paddingLeft:8 on Content frame)
- Icons: `h-5 w-5 stroke-2 mt-0.5 shrink-0` (20×20px, top-aligned)

## Props
```ts
{
  variant?: 'danger' | 'success' | 'warning' | 'default'
  title: string
  subtitle?: string
  showSubtitle?: boolean       // default true
  showLeadingIcon?: boolean    // default true
  showTrailingIcon?: boolean   // default true
  showActionLink?: boolean     // default false
  actionLink?: { label: string; href: string }
  onDismiss?: () => void
}
```

## Token Police
All clean — no raw hex, no hardcoded Tailwind palette classes. Focus ring and disabled utilities present on dismiss button.

## Notes
- Default variant icon uses `text-foreground` (`#1b1e25`). Figma bound variable `VariableID:47:1026` resolves to `#2a2a2a` (surface-dark-3), which has no direct light-mode semantic match — closest is foreground.
- Leading icon per variant: Danger→AlertCircle, Success→CheckCircle2, Warning→AlertTriangle, Default→Info (lucide-react)
- Trailing icon is always `X` (dismiss button)
