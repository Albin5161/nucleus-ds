# Toggle — Component Cache

**Figma source:** `VD0Gflfp2r9QJzp4KwfAYh` node `72:2865`
**Type:** `COMPONENT_SET` (Workflow B)
**Built:** 2026-06-27
**File:** `src/components/Toggle/Toggle.tsx`

## States

| State         | Track token            | Thumb token              | Label               |
|---------------|------------------------|--------------------------|---------------------|
| Off           | bg-toggle-track-off    | bg-toggle-thumb          | text-foreground     |
| On            | bg-toggle-track-on     | bg-toggle-thumb          | text-foreground     |
| Disabled Off  | bg-toggle-track-disabled | bg-toggle-thumb-disabled | text-neutral-500  |
| Disabled On   | bg-toggle-track-disabled | bg-toggle-thumb-disabled | text-neutral-500  |

## Layout (from Figma)
- Track: 48×24px → `w-12 h-6 rounded-full` (r=999 → pill)
- Thumb: 20×20px → `h-5 w-5 rounded-full`
- Thumb offset: 2px from edge each side
- Off position: `translate-x-[2px]`
- On position: `translate-x-[26px]` (= 48 - 20 - 2 = 26px)
- Label: 14px `text-body-sm`, gap-3 from track
- Disabled: `opacity-70` on the outer label wrapper

## Native semantics
- Uses `<input type="checkbox" role="switch">` hidden via `sr-only peer`
- Focus ring forwarded via `peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2` on the track div

## Props
```ts
{
  label?: string
  checked?: boolean              // default: false
  disabled?: boolean             // default: false
  onChange?: (checked: boolean) => void
  id?: string                    // auto-generated via useId() if omitted
  // + all native <input type="checkbox"> HTMLAttributes (except type, onChange)
}
```

## Token Police
All clean. Uses semantic toggle-* tokens only. No raw hex. Tokens were already defined in `src/index.css` and `tailwind.config.js` before this build.
