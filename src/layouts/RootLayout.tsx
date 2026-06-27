import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

const components = [
  { name: 'Alert',       path: '/components/alert' },
  { name: 'Button',      path: '/components/button' },
  { name: 'Checkbox',      path: '/components/checkbox' },
  { name: 'Radio Button',  path: '/components/radio-button' },
  { name: 'Toggle',        path: '/components/toggle' },
  { name: 'Tag & Badge',   path: '/components/tag-badge' },
  { name: 'Avatar',        path: '/components/avatar' },
  { name: 'Tooltip',       path: '/components/tooltip' },
  { name: 'Input Field',   path: '/components/input-field' },
  { name: 'Empty State Card', path: '/components/empty-state-card' },
]

const foundations = [
  { name: 'Colours',       path: '/foundations/colours' },
  { name: 'Typography',    path: '/foundations/typography' },
  { name: 'Spacing',       path: '/foundations/spacing' },
  { name: 'Corner Radius', path: '/foundations/corner-radius' },
  { name: 'Shadows',       path: '/foundations/shadows' },
]

function SidebarLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'block rounded-md px-3 py-1.5 text-body-sm transition-colors',
          isActive
            ? 'bg-primary text-primary-foreground font-medium'
            : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900',
        )
      }
    >
      {children}
    </NavLink>
  )
}

export function RootLayout() {
  const { pathname } = useLocation()
  const inComponents = pathname.startsWith('/components')
  const inFoundations = pathname.startsWith('/foundations')

  return (
    <div className="min-h-screen bg-surface-2 flex flex-col">
      {/* Top nav */}
      <header className="h-14 bg-surface-0 border-b border-neutral-200 flex items-center px-6 gap-8 shrink-0 sticky top-0 z-10">
        <NavLink to="/" className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-lg bg-brand-primary" />
          <span className="text-body font-semibold text-neutral-900">Nucleus DS</span>
        </NavLink>

        <nav className="flex items-center gap-1">
          <NavLink
            to="/foundations"
            className={({ isActive }) =>
              cn(
                'px-3 py-1.5 rounded-md text-body-sm font-medium transition-colors',
                isActive || inFoundations
                  ? 'text-neutral-900 bg-neutral-100'
                  : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100',
              )
            }
          >
            Foundations
          </NavLink>
          <NavLink
            to="/components"
            className={({ isActive }) =>
              cn(
                'px-3 py-1.5 rounded-md text-body-sm font-medium transition-colors',
                isActive || inComponents
                  ? 'text-neutral-900 bg-neutral-100'
                  : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100',
              )
            }
          >
            Components
          </NavLink>
        </nav>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {(inFoundations || inComponents) && (
          <aside className="w-56 shrink-0 bg-surface-0 border-r border-neutral-200 py-6 px-3 flex flex-col gap-6 overflow-y-auto">
            {inFoundations && (
              <div>
                <p className="px-3 mb-2 text-label font-semibold uppercase tracking-widest text-neutral-400">
                  Foundations
                </p>
                <div className="flex flex-col gap-0.5">
                  {foundations.map(f => (
                    <SidebarLink key={f.path} to={f.path}>{f.name}</SidebarLink>
                  ))}
                </div>
              </div>
            )}

            {inComponents && (
              <div>
                <p className="px-3 mb-2 text-label font-semibold uppercase tracking-widest text-neutral-400">
                  Components
                </p>
                <div className="flex flex-col gap-0.5">
                  {components.map(c => (
                    <SidebarLink key={c.path} to={c.path}>{c.name}</SidebarLink>
                  ))}
                </div>
              </div>
            )}
          </aside>
        )}

        {/* Main */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
