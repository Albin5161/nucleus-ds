import { useId, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  label?: string
  onChange?: (checked: boolean) => void
}

export function Toggle({
  label,
  checked = false,
  disabled = false,
  onChange,
  id: externalId,
  className,
  ...props
}: ToggleProps) {
  const autoId = useId()
  const id = externalId ?? autoId

  return (
    <label
      htmlFor={id}
      className={cn(
        'inline-flex items-center gap-3',
        disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer',
        className,
      )}
    >
      <input
        type="checkbox"
        role="switch"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={e => onChange?.(e.target.checked)}
        className="sr-only peer"
        {...props}
      />

      {/* Track */}
      <div
        className={cn(
          'relative w-12 h-6 rounded-full transition-colors duration-base ease-standard shrink-0',
          'peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2',
          checked && !disabled && 'bg-toggle-track-on',
          !checked && !disabled && 'bg-toggle-track-off',
          disabled && 'bg-toggle-track-disabled',
        )}
        aria-hidden
      >
        {/* Thumb */}
        <span
          className={cn(
            'absolute top-[2px] h-5 w-5 rounded-full shadow-sm transition-transform duration-base ease-decelerate',
            checked ? 'translate-x-[26px]' : 'translate-x-[2px]',
            disabled ? 'bg-toggle-thumb-disabled' : 'bg-toggle-thumb',
          )}
        />
      </div>

      {label && (
        <span className={cn('text-body-sm leading-5', disabled ? 'text-neutral-500' : 'text-foreground')}>
          {label}
        </span>
      )}
    </label>
  )
}
