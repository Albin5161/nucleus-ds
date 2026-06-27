# Avatar — Component Cache

**Figma source:** `VD0Gflfp2r9QJzp4KwfAYh` node `73:3024`
**Type:** `COMPONENT_SET` (Workflow B)
**Built:** 2026-06-27
**File:** `src/components/Avatar/Avatar.tsx`

## Variants Matrix

3 types × 4 sizes × 4 statuses = 48 Figma variants

### Types
| Type      | Content                                      | bg        |
|-----------|----------------------------------------------|-----------|
| icon      | `<User>` lucide icon, `text-neutral-500`     | bg-muted  |
| initials  | Up to 2 chars, `text-foreground`, uppercased | bg-muted  |
| image     | `<img>` with `object-cover`, `alt` required  | bg-muted (fallback) |

### Sizes
| Size | Circle   | Icon     | Initials font  | Status dot |
|------|----------|----------|----------------|------------|
| xs   | h-6 w-6  | h-4 w-4  | text-label     | h-1.5 w-1.5 |
| sm   | h-8 w-8  | h-4 w-4  | text-label     | h-2 w-2    |
| md   | h-10 w-10| h-5 w-5  | text-body-sm   | h-2.5 w-2.5|
| lg   | h-14 w-14| h-6 w-6  | text-body      | h-3 w-3    |

### Status dot tokens
| Status  | Token              |
|---------|--------------------|
| online  | bg-status-online   |
| away    | bg-status-away     |
| offline | bg-status-offline  |
| busy    | bg-status-busy     |

Status dot: `absolute bottom-0 right-0 rounded-full border-2 border-white` (lg: `bottom-0.5 right-0.5`)

## Props
```ts
{
  type?: 'image' | 'initials' | 'icon'   // default: 'icon'
  size?: 'xs' | 'sm' | 'md' | 'lg'      // default: 'md'
  initials?: string                       // auto-uppercased, max 2 chars
  src?: string                            // image URL (type='image')
  alt?: string                            // default: ''
  status?: 'online' | 'away' | 'offline' | 'busy'
  className?: string
}
```

## Usage patterns
- Avatar group: stack with `-space-x-2` + `ring-2 ring-white` on each avatar, then a "+N" overflow div
- Image fallback: if `src` is not provided when `type='image'`, renders the icon fallback

## Token Police
All clean. Uses semantic status-* and neutral tokens. No raw hex.
