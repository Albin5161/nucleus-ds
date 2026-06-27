import { useId, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  label?: string
  helperText?: string
  onChange?: (value: string) => void
}

export function RadioButton({
  label,
  helperText,
  checked = false,
  disabled = false,
  value,
  onChange,
  id: externalId,
  className,
  ...props
}: RadioButtonProps) {
  const autoId = useId()
  const id = externalId ?? autoId

  const circleCls = cn(
    'h-4 w-4 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors',
    checked && !disabled && 'bg-radio-bg-selected border-radio-border-selected',
    !checked && !disabled && 'bg-transparent border-radio-border-default',
    disabled && 'bg-radio-bg-disabled border-radio-border-disabled',
  )

  const dotCls = cn(
    'h-2 w-2 rounded-full transition-colors',
    checked && !disabled && 'bg-radio-dot-selected',
    checked && disabled && 'bg-radio-dot-disabled',
  )

  return (
    <label
      htmlFor={id}
      className={cn(
        'inline-flex items-start gap-2',
        disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer',
        className,
      )}
    >
      <input
        type="radio"
        id={id}
        checked={checked}
        disabled={disabled}
        value={value}
        onChange={e => onChange?.(e.target.value)}
        className="sr-only peer"
        {...props}
      />

      <div className="mt-0.5">
        <div
          className={cn(
            circleCls,
            'peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2',
          )}
          aria-hidden
        >
          {checked && <span className={dotCls} />}
        </div>
      </div>

      {(label || helperText) && (
        <div className="flex flex-col gap-1">
          {label && (
            <span className={cn('text-body-sm leading-5', disabled ? 'text-neutral-500' : 'text-foreground')}>
              {label}
            </span>
          )}
          {helperText && (
            <span className={cn('text-label', disabled ? 'text-radio-border-disabled' : 'text-neutral-500')}>
              {helperText}
            </span>
          )}
        </div>
      )}
    </label>
  )
}
