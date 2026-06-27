import { useState, useId, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type InputState = 'default' | 'focused' | 'error' | 'disabled'

const borderMap: Record<InputState, string> = {
  default:  'border-input',
  focused:  'border-input-border-focused',
  error:    'border-input-border-error',
  disabled: 'border-input-border-disabled',
}

const bgMap: Record<InputState, string> = {
  default:  'bg-surface-0',
  focused:  'bg-surface-0',
  error:    'bg-surface-0',
  disabled: 'bg-muted',
}

const labelMap: Record<InputState, string> = {
  default:  'text-foreground',
  focused:  'text-foreground',
  error:    'text-input-text-error',
  disabled: 'text-foreground',
}

const iconMap: Record<InputState, string> = {
  default:  'text-input-text-placeholder',
  focused:  'text-input-border-focused',
  error:    'text-input-text-error',
  disabled: 'text-input-border-disabled',
}

export interface InputFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  label?: string
  helperText?: string
  error?: string
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  id?: string
  wrapperClassName?: string
}

export function InputField({
  label,
  placeholder = 'Placeholder Text',
  helperText,
  error,
  disabled,
  leadingIcon,
  trailingIcon,
  id: externalId,
  wrapperClassName,
  className,
  onFocus,
  onBlur,
  ...props
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false)
  const autoId = useId()
  const id = externalId ?? autoId

  const state: InputState =
    error ? 'error' : disabled ? 'disabled' : isFocused ? 'focused' : 'default'

  return (
    <div className={cn('flex flex-col gap-1', wrapperClassName)}>
      {label && (
        <label htmlFor={id} className={cn('text-body-sm', labelMap[state])}>
          {label}
        </label>
      )}

      <div
        className={cn(
          'flex items-center gap-2 rounded-lg border px-3 py-2',
          borderMap[state],
          bgMap[state],
        )}
      >
        {leadingIcon && (
          <span
            aria-hidden
            className={cn('h-5 w-5 shrink-0 [&>svg]:h-full [&>svg]:w-full stroke-2', iconMap[state])}
          >
            {leadingIcon}
          </span>
        )}

        <input
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          onFocus={e => { setIsFocused(true); onFocus?.(e) }}
          onBlur={e => { setIsFocused(false); onBlur?.(e) }}
          className={cn(
            'flex-1 bg-transparent text-body-sm text-foreground outline-none',
            'placeholder:text-input-text-placeholder',
            'disabled:cursor-not-allowed',
            className,
          )}
          {...props}
        />

        {trailingIcon && (
          <span
            aria-hidden
            className={cn('h-5 w-5 shrink-0 [&>svg]:h-full [&>svg]:w-full stroke-2', iconMap[state])}
          >
            {trailingIcon}
          </span>
        )}
      </div>

      {(error || helperText) && (
        <p className={cn('text-label', error ? 'text-input-text-error' : 'text-input-text-helper')}>
          {error ?? helperText}
        </p>
      )}
    </div>
  )
}
