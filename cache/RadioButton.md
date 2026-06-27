# Radio Button — Component Cache

**Figma source:** `VD0Gflfp2r9QJzp4KwfAYh` node `68:2786`
**Type:** `COMPONENT_SET` (Workflow B)
**Built:** 2026-06-27
**File:** `src/components/RadioButton/RadioButton.tsx`

## States

| State              | Circle bg             | Circle border              | Dot                    | Label               | Helper               |
|--------------------|-----------------------|----------------------------|------------------------|---------------------|----------------------|
| Unselected         | transparent           | border-radio-border-default | hidden                 | text-foreground     | text-neutral-500     |
| Selected           | bg-radio-bg-selected  | border-radio-border-selected| bg-radio-dot-selected  | text-foreground     | text-neutral-500     |
| Disabled unsel.    | bg-radio-bg-disabled  | border-radio-border-disabled| hidden                 | text-neutral-500    | text-radio-border-disabled |
| Disabled sel.      | bg-radio-bg-disabled  | border-radio-border-disabled| bg-radio-dot-disabled  | text-neutral-500    | text-radio-border-disabled |

## Token additions

Radio tokens were NOT in `tailwind.config.js` — added in this session alongside component build:
```js
radio: {
  'border-default':  'hsl(var(--semantic-radio-border-default))',
  'bg-selected':     'hsl(var(--semantic-radio-bg-selected))',
  'border-selected': 'hsl(var(--semantic-radio-border-selected))',
  'dot-selected':    'hsl(var(--semantic-radio-dot-selected))',
  'bg-disabled':     'hsl(var(--semantic-radio-bg-disabled))',
  'border-disabled': 'hsl(var(--semantic-radio-border-disabled))',
  'dot-disabled':    'hsl(var(--semantic-radio-dot-disabled))',
}
```
CSS vars already existed in `src/index.css` (lines 137–144).

## Layout (from Figma)
- Component frame: HORIZONTAL gap=8
- Circle: `h-4 w-4 rounded-full border-2` (16×16px ellipse)
- Inner dot: `h-2 w-2 rounded-full` (8×8px ellipse, visible only when selected)
- Text content: VERTICAL gap=4 (`flex flex-col gap-1`)
- Label: 14px `text-body-sm`
- Helper: 12px `text-label`

## Props
```ts
{
  label?: string
  helperText?: string
  checked?: boolean              // default: false
  disabled?: boolean             // default: false
  value?: string                 // passed to onChange callback
  name?: string                  // groups radio buttons (native HTML)
  onChange?: (value: string) => void
  id?: string                    // auto-generated via useId() if omitted
  // + all native <input type="radio"> HTMLAttributes (except type, onChange)
}
```

## Usage pattern
Always wrap in a `<fieldset role="radiogroup">` with a `<legend>` for screen-reader group labeling.
Share the same `name` prop across all buttons in a group so native browser deselection works.

## Token Police
All clean. Uses semantic radio-* tokens only. No raw hex. Disabled opacity via `opacity-70` on label wrapper.
