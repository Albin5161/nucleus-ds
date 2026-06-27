# Nucleus DS — Best Practices

## Component File Structure

Every component lives in its own directory under `src/components/`:

```
src/components/{ComponentName}/
├── {ComponentName}.tsx    ← component + CVA variants
└── index.ts               ← barrel export
```

### Barrel export
```ts
export { Button } from './Button';
export type { ButtonProps } from './Button';
```

---

## HTML Semantics

| Use case | Element |
|----------|---------|
| Clickable action (submit, trigger) | `<button>` |
| Navigation (internal/external link) | `<a href="...">` |
| Single-line text input | `<input type="text" />` |
| Multi-line text input | `<textarea>` |
| Display container | `<div>` |
| Landmark section | `<section>` or `<article>` |
| Form wrapper | `<form>` |

Never use `<div>` for clickable elements. Always `<button>` or `<a>`.

---

## CVA Pattern

Use `cva()` for all variant-bearing components:

```tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { type ComponentPropsWithoutRef } from 'react';

const buttonVariants = cva(
  // Base: layout + interaction structure (no colours here)
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary:   'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:     'hover:bg-accent hover:text-accent-foreground',
        danger:    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:   'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        sm: 'h-9 px-3 text-sm rounded-md',
        md: 'h-10 px-4 py-2 rounded-md',
        lg: 'h-11 px-8 text-base rounded-md',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

export interface ButtonProps
  extends ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof buttonVariants> {}

export function Button({ variant, size, className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}
```

---

## Required Patterns (on every interactive component)

### Focus ring
```
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
```

### Disabled state
```
disabled:pointer-events-none disabled:opacity-50
```

### Icon-only buttons — always add aria-label
```tsx
<button aria-label="Close dialog">
  <XIcon className="h-4 w-4" />
</button>
```

---

## Colour Rules

| Rule | Example |
|------|---------|
| ✅ Use shadcn semantic tokens | `bg-primary`, `text-foreground` |
| ✅ Opacity modifiers on semantic tokens | `hover:bg-primary/90` |
| ❌ Never raw hex arbitrary values | `bg-[#3B82F6]` |
| ❌ Never Tailwind palette classes | `bg-blue-500`, `text-gray-900` |

See `tokens/tokens.json` for the full hex → semantic token mapping.

---

## Variant Naming

| Figma concept | Prop name | Accepted values |
|---------------|-----------|-----------------|
| Visual style | `variant` | `primary \| secondary \| ghost \| danger \| outline` |
| Size | `size` | `sm \| md \| lg` |
| Hover / focus / disabled | Tailwind modifier | `hover:*` `focus-visible:*` `disabled:*` |
| Optional icon slot | `leftIcon?: ReactNode` | — |
| Content | `children` | `ReactNode` |

**States (hover, focus, disabled, active) are never props — always Tailwind pseudo-class modifiers.**

---

## Sizing Scale

| Purpose | Classes |
|---------|---------|
| Button heights | `h-9` (sm) · `h-10` (md) · `h-11` (lg) |
| Horizontal padding | `px-3` (sm) · `px-4` (md) · `px-8` (lg) |
| Icon size | `h-4 w-4` (sm/md) · `h-5 w-5` (lg) |
| Gap between icon + label | `gap-2` |
| Border radius | `rounded-sm` · `rounded-md` · `rounded-lg` · `rounded-full` |

Avoid arbitrary spacing values (`gap-[13px]`). Use the standard Tailwind scale.

---

## Props Interface Convention

```tsx
// Extend the native HTML element
export interface ButtonProps
  extends React.ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof buttonVariants> {
  // Additional custom props
}
```

## Ref Forwarding

Use `forwardRef` when the component needs to expose a DOM ref:

```tsx
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = 'Button';
```
