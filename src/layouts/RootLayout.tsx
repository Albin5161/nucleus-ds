import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Dock } from '@/components/Dock'
import { PillNav, type PillNavItem } from '@/components/PillNav'

const components = [
  { name: 'Alert',            path: '/components/alert' },
  { name: 'Button',           path: '/components/button' },
  { name: 'Checkbox',         path: '/components/checkbox' },
  { name: 'Radio Button',     path: '/components/radio-button' },
  { name: 'Toggle',           path: '/components/toggle' },
  { name: 'Tag & Badge',      path: '/components/tag-badge' },
  { name: 'Avatar',           path: '/components/avatar' },
  { name: 'Tooltip',          path: '/components/tooltip' },
  { name: 'Input Field',      path: '/components/input-field' },
  { name: 'Empty State Card', path: '/components/empty-state-card' },
]

const foundations = [
  { name: 'Colours',       path: '/foundations/colours' },
  { name: 'Typography',    path: '/foundations/typography' },
  { name: 'Spacing',       path: '/foundations/spacing' },
  { name: 'Corner Radius', path: '/foundations/corner-radius' },
  { name: 'Shadows',       path: '/foundations/shadows' },
]

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  )
}

function NavDock() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const items = [
    {
      icon: <HomeIcon />,
      label: 'Home',
      onClick: () => navigate('/'),
      className: pathname === '/' ? 'active' : '',
    },
    {
      icon: <LayersIcon />,
      label: 'Foundations',
      onClick: () => navigate('/foundations'),
      className: pathname.startsWith('/foundations') ? 'active' : '',
    },
    {
      icon: <GridIcon />,
      label: 'Components',
      onClick: () => navigate('/components'),
      className: pathname.startsWith('/components') ? 'active' : '',
    },
  ]

  return (
    <Dock
      items={items}
      panelHeight={58}
      baseItemSize={44}
      magnification={64}
      distance={160}
    />
  )
}

export function RootLayout() {
  const { pathname } = useLocation()
  const inFoundations = pathname.startsWith('/foundations')
  const inComponents = pathname.startsWith('/components')

  let navItems: PillNavItem[] = []
  if (inFoundations) {
    navItems = foundations.map(f => ({ label: f.name, href: f.path }))
  } else if (inComponents) {
    navItems = components.map(c => ({ label: c.name, href: c.path }))
  }

  const logoNode = <div className="h-7 w-7 rounded-lg bg-brand-primary" />

  return (
    <div className="min-h-screen bg-surface-2">
      <PillNav
        logoNode={logoNode}
        items={navItems}
        activeHref={pathname}
      />

      <main className="pt-20 pb-28">
        <Outlet />
      </main>

      <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <NavDock />
        </div>
      </div>
    </div>
  )
}
