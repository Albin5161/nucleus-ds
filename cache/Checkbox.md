# Checkbox — Component Cache

**Figma source:** `VD0Gflfp2r9QJzp4KwfAYh` node `66:2656`
**Type:** `COMPONENT_SET` (Workflow B)
**Built:** 2026-06-27
**File:** `src/components/Checkbox/Checkbox.tsx`

## States

| State            | Box bg                    | Box border                      | Icon                          | Label               | Helper                        |
|------------------|---------------------------|---------------------------------|-------------------------------|---------------------|-------------------------------|
| Unchecked        | transparent               | border-checkbox-border-default  | hidden                        | text-foreground     | text-neutral-500              |
| Checked          | bg-checkbox-bg-checked    | border-checkbox-border-checked  | text-checkbox-icon-checked    | text-foreground     | text-neutral-500              |
| Indeterminate    | bg-checkbox-bg-checked    | border-checkbox-border-checked  | text-checkbox-icon-checked    | text-foreground     | text-neutral-500              |
| Disabled unch.   | bg-checkbox-bg-disabled   | border-checkbox-border-disabled | hidden                        | text-neutral-500    | text-checkbox-border-disabled |
| Disabled chk.    | bg-checkbox-bg-disabled   | border-checkbox-border-disabled | text-checkbox-border-disabled | text-neutral-500    | text-checkbox-border-disabled |

## Layout (from Figma)
- Outer frame: HORIZONTAL gap=8, padding=8 all sides
- Control frame: 36×36px — rendered as `h-5 w-5` custom box (the 36px includes padding/hit area)
- Box: `rounded` (cornerRadius=4), `border-2`, `h-5 w-5`
- Icon (Check/Minus): `h-3 w-3 stroke-[3]`
- Text Content: VERTICAL gap=4 (`flex flex-col gap-1`)
- Label: 14px `text-body-sm`
- Helper: 12px `text-label`

## Props
```ts
{
  label?: string
  helperText?: string
  checked?: boolean         // default: false
  indeterminate?: boolean   // default: false — shows Minus icon, overrides checked visually
  disabled?: boolean        // default: false
  onChange?: (checked: boolean) => void
  id?: string               // auto-generated via useId() if omitted
  // + all native <input type="checkbox"> HTMLAttributes (except type, onChange)
}
```

## State logic
```ts
isOn = checked || indeterminate
iconCls = disabled ? 'text-checkbox-border-disabled' : 'text-checkbox-icon-checked'
icon = indeterminate ? <Minus> : checked ? <Check> : null
```

## Token Police
All clean. Uses semantic checkbox-* tokens only. No raw hex. Disabled opacity applied via `opacity-70` on the label wrapper rather than per-token overrides.
