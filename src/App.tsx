import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'

import { RootLayout } from '@/layouts/RootLayout'
import { HomePage } from '@/pages/HomePage'
import { FoundationsPage } from '@/pages/FoundationsPage'
import { ColoursPage } from '@/pages/ColoursPage'
import { TypographyPage } from '@/pages/TypographyPage'
import { SpacingPage } from '@/pages/SpacingPage'
import { CornerRadiusPage } from '@/pages/CornerRadiusPage'
import { ShadowsPage } from '@/pages/ShadowsPage'
import { ComponentsPage } from '@/pages/ComponentsPage'
import { AlertPage } from '@/pages/AlertPage'
import { ButtonPage } from '@/pages/ButtonPage'
import { CheckboxPage } from '@/pages/CheckboxPage'
import { RadioButtonPage } from '@/pages/RadioButtonPage'
import { TogglePage } from '@/pages/TogglePage'
import { TagBadgePage } from '@/pages/TagBadgePage'
import { AvatarPage } from '@/pages/AvatarPage'
import { TooltipPage } from '@/pages/TooltipPage'
import { InputFieldPage } from '@/pages/InputFieldPage'
import { EmptyStateCardPage } from '@/pages/EmptyStateCardPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="foundations" element={<FoundationsPage />} />
          <Route path="foundations/colours" element={<ColoursPage />} />
          <Route path="foundations/typography" element={<TypographyPage />} />
          <Route path="foundations/spacing" element={<SpacingPage />} />
          <Route path="foundations/corner-radius" element={<CornerRadiusPage />} />
          <Route path="foundations/shadows" element={<ShadowsPage />} />
          <Route path="components" element={<ComponentsPage />} />
          <Route path="components/alert" element={<AlertPage />} />
          <Route path="components/button" element={<ButtonPage />} />
          <Route path="components/checkbox" element={<CheckboxPage />} />
          <Route path="components/radio-button" element={<RadioButtonPage />} />
          <Route path="components/toggle" element={<TogglePage />} />
          <Route path="components/tag-badge" element={<TagBadgePage />} />
          <Route path="components/avatar" element={<AvatarPage />} />
          <Route path="components/tooltip" element={<TooltipPage />} />
          <Route path="components/input-field" element={<InputFieldPage />} />
          <Route path="components/empty-state-card" element={<EmptyStateCardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
