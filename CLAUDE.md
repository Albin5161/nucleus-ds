# Nucleus DS — Claude Code Context

## What This Project Is

A design system component library built with React + TypeScript + Vite + Tailwind CSS + shadcn/ui.
Components are built from Figma designs using the three-agent ds-team skill pipeline.

---

## Skills

Three skills live in `.claude/skills/`. **Always invoke `ds-team` — never call the others directly.**

| Skill | File | Role |
|-------|------|------|
| DS Team | `.claude/skills/ds-team.md` | Orchestrator — only entry point |
| Component God | `.claude/skills/component-god.md` | Reads Figma, writes React + CVA component |
| Token Police | `.claude/skills/token-police.md` | Audits colour tokens, enforces semantic classes |

**Workflow:** Give ds-team a Figma URL (or paste the design JSON). It reads context, runs Component God, runs Token Police, writes cache, and reports.

---

## Project Structure

```
nucleus-ds/
├── src/
│   ├── components/           ← DS component output (one folder per component)
│   │   └── {Name}/
│   │       ├── {Name}.tsx    ← CVA component
│   │       └── index.ts      ← barrel export
│   ├── lib/
│   │   └── utils.ts          ← cn() helper — do not modify
│   ├── App.tsx               ← Component showcase — import built components here
│   ├── index.css             ← Tailwind directives + shadcn CSS variables
│   └── main.tsx
├── cache/                    ← DS Team per-component memory ({Name}.md)
├── references/
│   └── best-practices.md     ← Team conventions (read by all 3 skills)
├── tokens/
│   ├── token-structure.md    ← 3-tier token hierarchy docs
│   └── tokens.json           ← Hex → semantic token lookup (used by Token Police)
├── tailwind.config.js        ← Shadcn semantic colour tokens
├── components.json           ← shadcn CLI config
└── .claude/
    └── skills/               ← ds-team, component-god, token-police
```

---

## Path Convention (IMPORTANT)

Skills refer to component paths as `components/{Name}/{Name}.tsx`.
**In this project that maps to `src/components/{Name}/{Name}.tsx`.**

| Skill says | Actual path |
|------------|-------------|
| `components/Button/Button.tsx` | `src/components/Button/Button.tsx` |
| `components/Button/index.ts` | `src/components/Button/index.ts` |
| `cache/Button.md` | `cache/Button.md` (project root — no change) |
| `references/best-practices.md` | `references/best-practices.md` (project root) |
| `tokens/tokens.json` | `tokens/tokens.json` (project root) |

The `@/` alias resolves to `src/`, so `import { cn } from '@/lib/utils'` works correctly.

---

## Token System

| Layer | File | Contains |
|-------|------|----------|
| Primitive CSS vars | `src/index.css` | `--primary: 222.2 47.4% 11.2%` etc. |
| Semantic Tailwind | `tailwind.config.js` | `bg-primary → hsl(var(--primary))` |
| Token map | `tokens/tokens.json` | hex → semantic class lookup |

Token Police enforces: **no raw hex, no Tailwind palette classes, only shadcn semantic tokens.**

---

## Dev Commands

```bash
npm install       # first-time setup
npm run dev       # dev server at http://localhost:5173
npm run build     # production build (runs tsc + vite build)
npm run preview   # preview production build
```

---

## Adding a Built Component to the Showcase

After ds-team builds a component, add it to `src/App.tsx`:

```tsx
import { Button } from '@/components/Button'

// Inside App():
<Button variant="primary">Click me</Button>
<Button variant="secondary" size="sm">Secondary</Button>
<Button variant="danger">Delete</Button>
```
