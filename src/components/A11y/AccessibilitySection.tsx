import type { ReactNode } from 'react'
import { Card } from '@/components/Card'

export interface AccessibilitySectionProps {
  role: string
  keyboard: string[]
  screenReader: string
  contrastChecks?: ReactNode
  /** Skip the outer <section>/heading and just render the Card body — use when the
   *  parent page already wraps sections itself (e.g. via a local `<Section title>`). */
  bare?: boolean
  /** Anchor id for the outer <section>, used by TableOfContents scroll-spy. Ignored when bare. */
  id?: string
}

function Body({ role, keyboard, screenReader, contrastChecks }: Omit<AccessibilitySectionProps, 'bare'>) {
  return (
    <Card padding="lg" className="space-y-6">
      <div>
        <p className="text-label font-semibold uppercase tracking-widest text-neutral-400 mb-2">Role</p>
        <code className="text-label bg-neutral-100 text-neutral-700 px-1.5 py-0.5 rounded">{role}</code>
      </div>

      <div>
        <p className="text-label font-semibold uppercase tracking-widest text-neutral-400 mb-2">Keyboard</p>
        <ul className="list-disc list-inside text-body-sm text-neutral-700 space-y-1">
          {keyboard.map(k => (
            <li key={k}>{k}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-label font-semibold uppercase tracking-widest text-neutral-400 mb-2">Screen reader</p>
        <p className="text-body-sm text-neutral-700">{screenReader}</p>
      </div>

      {contrastChecks && (
        <div>
          <p className="text-label font-semibold uppercase tracking-widest text-neutral-400 mb-2">Colour contrast</p>
          <div className="flex flex-col gap-2">{contrastChecks}</div>
        </div>
      )}
    </Card>
  )
}

export function AccessibilitySection({ bare, id, ...props }: AccessibilitySectionProps) {
  if (bare) return <Body {...props} />

  return (
    <section id={id} className="mt-10 scroll-mt-28">
      <h2 className="text-label font-semibold text-neutral-400 uppercase tracking-widest mb-4">Accessibility</h2>
      <Body {...props} />
    </section>
  )
}
