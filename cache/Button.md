# Button — Component Cache

**Figma source:** `VD0Gflfp2r9QJzp4KwfAYh` node `60:1405`
**Type:** `COMPONENT_SET` (Workflow B)
**Built:** 2026-06-27
**File:** `src/components/Button/Button.tsx`

## Variants

| variant   | bg token              | hover bg token              | text token                    | border token   |
|-----------|-----------------------|-----------------------------|-------------------------------|----------------|
| primary   | bg-primary            | hover:bg-brand-primary-strong | text-primary-foreground      | —              |
| outline   | transparent           | hover:bg-brand-primary-strong | text-primary → hover:text-primary-foreground | border border-primary |
| ghost     | transparent           | hover:bg-muted              | text-foreground               | —              |
| secondary | bg-brand-secondary    | hover:bg-brand-secondary-strong | text-brand-secondary-foreground | —           |
| danger    | bg-destructive        | hover:bg-danger-strong      | text-destructive-foreground   | —              |

## Sizes (from Figma)

| size | padding     | text token   | height |
|------|-------------|--------------|--------|
| sm   | px-4 py-2   | text-body-sm | 36px   |
| md   | px-6 py-3   | text-body    | 48px   |
| lg   | px-8 py-4   | text-body-lg | 60px   |

## Layout
- Root: `inline-flex items-center justify-center gap-2 rounded-lg`
- Gap between icon + label: 8px = `gap-2`
- Corner radius: 8px = `rounded-lg`
- Icons: sm=`h-4 w-4`, md/lg=`h-5 w-5`, `stroke-2`

## Props
```ts
{
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary' | 'danger'  // default: 'primary'
  size?: 'sm' | 'md' | 'lg'                                            // default: 'md'
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  isLoading?: boolean    // shows Loader2 spinner, disables button
  disabled?: boolean
}
```

## Token Police
All clean. Focus ring, disabled utilities present. No raw hex. Hover states via Tailwind hover: modifier.

## Notes
- Figma spells "Outline" as "Outine" (typo) — mapped to `outline` in code.
- Loading state disables the button and replaces leading icon with `Loader2` animated spinner.
- Secondary button uses `text-brand-secondary-foreground` (= same HSL as `text-primary-foreground` but semantically correct).
