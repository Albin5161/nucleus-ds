import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Foundations',
    description: 'Colour tokens, typography scale, spacing, and border radius derived from the Nucleus design token system.',
    href: '/foundations/colours',
    items: ['Colours', 'Typography'],
  },
  {
    title: 'Components',
    description: 'Production-ready React components built from Figma, audited by Token Police.',
    href: '/components',
    items: ['Alert'],
  },
]

export function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-14">
      <div className="mb-12">
        <h1 className="text-h1 font-semibold text-neutral-900 mb-3">Nucleus Design System</h1>
        <p className="text-body text-neutral-500 max-w-xl">
          A React + TypeScript component library built with Tailwind CSS and shadcn/ui, driven by a 3-tier design token system.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {sections.map(section => (
          <Link
            key={section.title}
            to={section.href}
            className="group bg-surface-0 rounded-xl border border-neutral-200 p-6 hover:border-primary hover:shadow-sm transition-all"
          >
            <h2 className="text-h4 font-medium text-neutral-900 mb-2 group-hover:text-primary transition-colors">
              {section.title}
            </h2>
            <p className="text-body-sm text-neutral-500 mb-4">{section.description}</p>
            <div className="flex flex-wrap gap-2">
              {section.items.map(item => (
                <span
                  key={item}
                  className="inline-block text-label bg-neutral-100 text-neutral-600 rounded-md px-2 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
