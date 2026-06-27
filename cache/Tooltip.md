# Tooltip — Component Cache

**Figma source:** `VD0Gflfp2r9QJzp4KwfAYh` node `76:3364`
**Type:** `COMPONENT_SET` (Workflow B) — Figma labels have typo "Posiiton" (extra 'i')
**Built:** 2026-06-27
**File:** `src/components/Tooltip/Tooltip.tsx`

## Positions

| Position | Bubble placement                              | Arrow direction |
|----------|-----------------------------------------------|-----------------|
| top      | `bottom-full left-1/2 -translate-x-1/2 mb-2` | points down     |
| bottom   | `top-full left-1/2 -translate-x-1/2 mt-2`    | points up       |
| left     | `right-full top-1/2 -translate-y-1/2 mr-2`   | points right    |
| right    | `left-full top-1/2 -translate-y-1/2 ml-2`    | points left     |

## Tokens

| Role    | Token           | Resolves to                      |
|---------|-----------------|----------------------------------|
| bg      | bg-tooltip-bg   | `--semantic-tooltip-bg` → neutral-900 (#1b1d25) |
| text    | text-tooltip-text | `--semantic-tooltip-text` → neutral-50 (#f3f4f6) |
| arrow   | border-tooltip-bg | same as bg (reuses tooltip-bg color token) |

## Layout (from Figma)
- Container: `rounded px-3 py-2 text-label` (r=4, px=12, py=8, 12px font)
- Arrow (top/bottom): 12×6px → CSS border triangle `border-x-[6px] border-[t|b]-[6px]`
- Arrow (left/right): 6×12px → CSS border triangle `border-y-[6px] border-[l|r]-[6px]`
- `whitespace-nowrap` — single line, no wrapping
- `pointer-events-none` — tooltip never captures mouse events
- `z-50` — floats above all content

## Props
```ts
{
  content: ReactNode         // required — tooltip text or element
  position?: 'top' | 'bottom' | 'left' | 'right'  // default: 'top'
  open?: boolean             // force visible (useful for static showcases)
  children: ReactNode        // required — the hover/focus trigger
  className?: string
}
```

## Behaviour
- Shows on `mouseenter` / `focus`, hides on `mouseleave` / `blur`
- `open` prop overrides hover state (controlled mode for demos)
- Trigger element must be natively focusable (button, a, input) for keyboard a11y
- Does NOT use a Portal — positioned relative to the wrapper div

## Token Police
All clean. Uses semantic tooltip-* tokens only. Arrow uses `border-tooltip-bg` (border utilities share the same color config).
