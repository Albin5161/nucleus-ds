# Token Structure — 3-Tier Hierarchy

Nucleus DS uses a 3-tier token system. Each tier builds on the one below it.

---

## Tier 1 — Primitive tokens (CSS custom properties)

Defined in `src/index.css` as CSS custom properties. **Never referenced directly in component code.**

```css
/* src/index.css */
:root {
  --background: 0 0% 100%;       /* HSL — consumed by Tailwind via hsl(var(--...)) */
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... */
}
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... */
}
```

Exact hex values per theme are documented in `tokens/tokens.json`.

---

## Tier 2 — Semantic tokens (Tailwind config)

Purpose-based aliases defined in `tailwind.config.js`. **These are what you write in component code.**

```js
// tailwind.config.js
colors: {
  background:  'hsl(var(--background))',
  foreground:  'hsl(var(--foreground))',
  primary: {
    DEFAULT:    'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))',
  },
  // ...
}
```

**Usage:**
- `bg-background` → resolves `--background`
- `text-foreground` → resolves `--foreground`
- `bg-primary` → resolves `--primary`
- `text-primary-foreground` → resolves `--primary-foreground`

---

## Tier 3 — Component tokens (future)

Component-specific CSS variable overrides for per-component theming. Not yet implemented.

```css
/* Future example */
.btn-brand {
  --btn-bg: var(--brand-500);
  --btn-fg: var(--brand-50);
}
```

File component token requests in the DS backlog.

---

## Full Semantic Token Reference

| CSS var | Tailwind background | Tailwind text | Tailwind border | Purpose |
|---------|--------------------|--------------------|-----------------|---------|
| `--background` | `bg-background` | `text-background` | — | Page / app background |
| `--foreground` | `bg-foreground` | `text-foreground` | — | Body text |
| `--card` | `bg-card` | `text-card` | — | Card surface |
| `--card-foreground` | — | `text-card-foreground` | — | Text on cards |
| `--popover` | `bg-popover` | — | — | Popover/dropdown surface |
| `--popover-foreground` | — | `text-popover-foreground` | — | Text in popovers |
| `--primary` | `bg-primary` | `text-primary` | — | Primary action fill |
| `--primary-foreground` | — | `text-primary-foreground` | — | Text on primary |
| `--secondary` | `bg-secondary` | `text-secondary` | — | Secondary action fill |
| `--secondary-foreground` | — | `text-secondary-foreground` | — | Text on secondary |
| `--muted` | `bg-muted` | `text-muted` | — | Subtle / disabled fill |
| `--muted-foreground` | — | `text-muted-foreground` | — | Subdued / helper text |
| `--accent` | `bg-accent` | `text-accent` | — | Hover highlight fill |
| `--accent-foreground` | — | `text-accent-foreground` | — | Text on accent |
| `--destructive` | `bg-destructive` | `text-destructive` | — | Error / danger fill |
| `--destructive-foreground` | — | `text-destructive-foreground` | — | Text on destructive |
| `--border` | — | — | `border-border` | Default borders |
| `--input` | — | — | `border-input` | Form input borders |
| `--ring` | — | — | `ring-ring` | Focus ring colour |
| `--radius` | — | — | — | Border radius scale (`rounded-lg/md/sm`) |

---

## Adding a New Token

1. Add the CSS custom property to `:root` in `src/index.css`
2. Add a `.dark` override in the dark block
3. Add the Tailwind alias in `tailwind.config.js` under `theme.extend.colors`
4. Update `tokens/tokens.json` with the hex values for both light and dark themes
5. Document in this file

**Naming convention:** `{category}-{role}` — e.g., `brand-primary`, `surface-overlay`, `feedback-warning`
