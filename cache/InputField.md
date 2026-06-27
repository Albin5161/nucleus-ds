# Input Field — Component Cache

**Figma source:** `VD0Gflfp2r9QJzp4KwfAYh` node `64:2491`
**Type:** `COMPONENT_SET` (Workflow B)
**Built:** 2026-06-27
**File:** `src/components/InputField/InputField.tsx`

## States

| State    | Border token              | Bg token     | Label token          | Icon token                  | Helper token           |
|----------|---------------------------|--------------|----------------------|-----------------------------|------------------------|
| default  | border-input              | bg-surface-0 | text-foreground      | text-input-text-placeholder | text-input-text-helper |
| focused  | border-input-border-focused | bg-surface-0 | text-foreground    | text-input-border-focused   | text-input-text-helper |
| error    | border-input-border-error | bg-surface-0 | text-input-text-error| text-input-text-error       | text-input-text-error  |
| disabled | border-input-border-disabled| bg-muted   | text-foreground      | text-input-border-disabled  | text-input-text-helper |

Filled state (has value) is identical to default — placeholder disappears naturally via browser.

## Layout (from Figma)
- Wrapper: `flex flex-col gap-1` (gap=4px between label/field/helper)
- Field frame: `flex items-center gap-2 rounded-lg border px-3 py-2` (cornerRadius=8, px=12, py=8, gap=8)
- Field height: 36px
- Icons: `h-5 w-5 stroke-2`
- Label: `text-body-sm` (14px)
- Helper/Error: `text-label` (12px)

## Props
```ts
{
  label?: string
  placeholder?: string          // default: 'Placeholder Text'
  helperText?: string
  error?: string                // triggers error state when set
  disabled?: boolean
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  wrapperClassName?: string
  // + all native <input> HTML attributes
}
```

## State logic
```ts
state = error ? 'error' : disabled ? 'disabled' : isFocused ? 'focused' : 'default'
```
Focus tracked via React state (onFocus/onBlur on the `<input>`).

## Token Police
All clean. Uses semantic input-border and input-text tokens only. No raw hex.
