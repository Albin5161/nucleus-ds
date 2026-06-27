import { Link } from 'react-router-dom'

const componentList = [
  {
    name: 'Alert',
    path: '/components/alert',
    description: '4 semantic variants — danger, success, warning, default. Supports title, subtitle, action link, leading/trailing icons.',
    variants: ['danger', 'success', 'warning', 'default'],
  },
  {
    name: 'Button',
    path: '/components/button',
    description: '5 variants × 3 sizes with optional leading/trailing icons, loading state, and full keyboard accessibility.',
    variants: ['primary', 'outline', 'ghost', 'secondary', 'danger'],
  },
  {
    name: 'Radio Button',
    path: '/components/radio-button',
    description: 'Single-selection control for mutually exclusive options with 4 states — unselected, selected, disabled unselected, and disabled selected.',
    variants: ['unselected', 'selected', 'disabled'],
  },
  {
    name: 'Checkbox',
    path: '/components/checkbox',
    description: 'Boolean selection control with 5 states — unchecked, checked, indeterminate, disabled unchecked, and disabled checked.',
    variants: ['unchecked', 'checked', 'indeterminate', 'disabled'],
  },
  {
    name: 'Toggle',
    path: '/components/toggle',
    description: 'Immediate on/off control for binary settings with 4 states — off, on, disabled off, and disabled on.',
    variants: ['off', 'on', 'disabled-off', 'disabled-on'],
  },
  {
    name: 'Tag & Badge',
    path: '/components/tag-badge',
    description: 'Tag: compact pill labels for categorisation with optional remove. Badge: numeric indicators for counts and notifications.',
    variants: ['default', 'success', 'warning', 'danger'],
  },
  {
    name: 'Avatar',
    path: '/components/avatar',
    description: 'Circular user representation in three forms — image, initials, icon — across four sizes with optional presence status dot.',
    variants: ['image', 'initials', 'icon'],
  },
  {
    name: 'Tooltip',
    path: '/components/tooltip',
    description: 'Contextual label on hover or focus with a directional arrow. Four positions — top, bottom, left, right.',
    variants: ['top', 'bottom', 'left', 'right'],
  },
  {
    name: 'Input Field',
    path: '/components/input-field',
    description: 'Single-line text input with 5 states — default, focused, filled, error, and disabled. Supports label, helper text, and icons.',
    variants: ['default', 'focused', 'error', 'disabled'],
  },
  {
    name: 'Empty State Card',
    path: '/components/empty-state-card',
    description: 'Contextual placeholder shown when content is absent, filtered out, or failed to load. Three types with configurable copy and actions.',
    variants: ['default', 'no-data', 'error'],
  },
]

export function ComponentsPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-10">
      <div className="mb-8">
        <h1 className="text-h2 font-semibold text-neutral-900 mb-2">Components</h1>
        <p className="text-body text-neutral-500">
          React components built from Figma, token-audited, and ready to use.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {componentList.map(c => (
          <Link
            key={c.name}
            to={c.path}
            className="group bg-surface-0 rounded-xl border border-neutral-200 p-6 hover:border-primary hover:shadow-sm transition-all"
          >
            <h2 className="text-h4 font-medium text-neutral-900 mb-1.5 group-hover:text-primary transition-colors">
              {c.name}
            </h2>
            <p className="text-body-sm text-neutral-500 mb-4">{c.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {c.variants.map(v => (
                <span key={v} className="text-label bg-neutral-100 text-neutral-600 rounded px-2 py-0.5">
                  {v}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
