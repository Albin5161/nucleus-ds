import { useId, type InputHTMLAttributes } from 'react'
import { Check, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  label?: string
  helperText?: string
  indeterminate?: boolean
  onChange?: (checked: boolean) => void
}

export function Checkbox({
  label,
  helperText,
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange,
  id: externalId,
  className,
  ...props
}: CheckboxProps) {
  const autoId = useId()
  const id = externalId ?? autoId

  const isOn = checked || indeterminate

  const boxCls = cn(
    'h-5 w-5 shrink-0 rounded flex items-center justify-center border-2 transition-colors',
    isOn && !disabled && 'bg-checkbox-bg-checked border-checkbox-border-checked',
    !isOn && !disabled && 'bg-transparent border-checkbox-border-default',
    disabled && isOn  && 'bg-checkbox-bg-disabled border-checkbox-border-disabled',
    disabled && !isOn && 'bg-checkbox-bg-disabled border-checkbox-border-disabled',
  )

  const iconCls = disabled
    ? 'text-checkbox-border-disabled'
    : 'text-checkbox-icon-checked'

  return (
    <label
      htmlFor={id}
      className={cn(
        'inline-flex items-start gap-2',
        disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer',
        className,
      )}
    >
      {/* Hidden native checkbox — keeps full a11y */}
      <input
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={e => onChange?.(e.target.checked)}
        className="sr-only peer"
        {...props}
      />

      {/* Custom visual box */}
      <div className="mt-0.5">
        <div
          className={cn(
            boxCls,
            // focus ring forwarded from peer (native input)
            'peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2',
          )}
          aria-hidden
        >
          {indeterminate ? (
            <Minus className={cn('h-3 w-3 stroke-[3]', iconCls)} />
          ) : checked ? (
            <Check className={cn('h-3 w-3 stroke-[3]', iconCls)} />
          ) : null}
        </div>
      </div>

      {/* Label + helper */}
      {(label || helperText) && (
        <div className="flex flex-col gap-1">
          {label && (
            <span className={cn('text-body-sm leading-5', disabled ? 'text-neutral-500' : 'text-foreground')}>
              {label}
            </span>
          )}
          {helperText && (
            <span className={cn('text-label', disabled ? 'text-checkbox-border-disabled' : 'text-neutral-500')}>
              {helperText}
            </span>
          )}
        </div>
      )}
    </label>
  )
}
