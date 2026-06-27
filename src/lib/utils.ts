import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// Tell tailwind-merge that our custom text-* tokens are font-size utilities,
// not colour utilities — otherwise it drops text-primary-foreground when it
// sees text-body / text-body-sm etc. in the same class list.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-code', 'text-label',
        'text-body-sm', 'text-body-sm-md',
        'text-body', 'text-body-lg',
        'text-h4', 'text-h3', 'text-h2', 'text-h1', 'text-display',
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
