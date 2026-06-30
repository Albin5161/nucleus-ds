/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    /* ── Border radius — full scale from corner_radius tokens ── */
    borderRadius: {
      none:    '0',
      xs:      'var(--radius-xs)',    /* 1px  */
      sm:      'var(--radius-sm)',    /* 2px  */
      DEFAULT: 'var(--radius-md)',    /* 4px  */
      md:      'var(--radius-md)',    /* 4px  */
      lg:      'var(--radius-lg)',    /* 8px  */
      xl:      'var(--radius-xl)',    /* 16px */
      '2xl':   'var(--radius-2xl)',   /* 24px */
      '3xl':   'var(--radius-3xl)',   /* 32px */
      full:    'var(--radius-full)',  /* 999px */
    },
    /* ── Font families ── */
    fontFamily: {
      sans:  ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      mono:  ['JetBrains Mono', 'ui-monospace', 'monospace'],
    },
    extend: {
      /* ── Typography scale (from text.styles.tokens.json) ── */
      fontSize: {
        'code':       ['12px', { lineHeight: '20px', fontWeight: '400' }],
        'label':      ['12px', { lineHeight: '16px', fontWeight: '400' }],
        'body-sm':    ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'body-sm-md': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'body':       ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-lg':    ['20px', { lineHeight: '28px', fontWeight: '400' }],
        'h4':         ['20px', { lineHeight: '28px', fontWeight: '500' }],
        'h3':         ['24px', { lineHeight: '32px', fontWeight: '500' }],
        'h2':         ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'h1':         ['40px', { lineHeight: '48px', fontWeight: '600' }],
        'display':    ['48px', { lineHeight: '56px', fontWeight: '600' }],
      },
      colors: {
        /* ── shadcn-compatible semantic utilities ─────────────────────
           bg-primary, text-foreground, border-border, ring-ring, etc.
        ────────────────────────────────────────────────────────────── */
        border:     'hsl(var(--border))',
        input:      'hsl(var(--input))',
        ring:       'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT:    'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        /* ── Nucleus DS — brand ────────────────────────────────────── */
        'brand-primary': {
          DEFAULT:    'hsl(var(--semantic-brand-primary))',           /* #544dcb Indigo_500 */
          subtle:     'hsl(var(--semantic-brand-primary-subtle))',    /* #dddbfa Indigo_50  */
          strong:     'hsl(var(--semantic-brand-primary-strong))',    /* #332d9a Indigo_700 */
          foreground: 'hsl(var(--semantic-brand-primary-foreground))',/* #f3f4f6 Neutral_50 */
        },
        'brand-secondary': {
          DEFAULT:    'hsl(var(--semantic-brand-secondary))',           /* #00ace5 Blue_700 */
          subtle:     'hsl(var(--semantic-brand-secondary-subtle))',    /* #0ac2ff Blue_600 */
          strong:     'hsl(var(--semantic-brand-secondary-strong))',    /* #0082ad Blue_800 */
          foreground: 'hsl(var(--semantic-brand-secondary-foreground))',/* #f3f4f6 Neutral_50 */
        },

        /* ── Nucleus DS — feedback ──────────────────────────────────── */
        success: {
          DEFAULT: 'hsl(var(--semantic-success))',        /* #22c55e */
          subtle:  'hsl(var(--semantic-success-subtle))', /* #dcfce7 */
          strong:  'hsl(var(--semantic-success-strong))', /* #166534 */
        },
        warning: {
          DEFAULT: 'hsl(var(--semantic-warning))',
          subtle:  'hsl(var(--semantic-warning-subtle))',
          strong:  'hsl(var(--semantic-warning-strong))',
        },
        danger: {
          DEFAULT: 'hsl(var(--semantic-danger))',
          subtle:  'hsl(var(--semantic-danger-subtle))',
          strong:  'hsl(var(--semantic-danger-strong))',
        },

        /* ── Nucleus DS — surface ───────────────────────────────────── */
        surface: {
          0:       'hsl(var(--semantic-surface-0))',
          2:       'hsl(var(--semantic-surface-2))',
          3:       'hsl(var(--semantic-surface-3))',
          overlay: 'hsl(var(--semantic-surface-overlay))',
        },

        /* ── Nucleus DS — neutrals scale ────────────────────────────── */
        neutral: {
          50:  'hsl(var(--base-neutral-50))',
          100: 'hsl(var(--base-neutral-100))',
          200: 'hsl(var(--base-neutral-200))',
          300: 'hsl(var(--base-neutral-300))',
          400: 'hsl(var(--base-neutral-400))',
          500: 'hsl(var(--base-neutral-500))',
          600: 'hsl(var(--base-neutral-600))',
          700: 'hsl(var(--base-neutral-700))',
          800: 'hsl(var(--base-neutral-800))',
          900: 'hsl(var(--base-neutral-900))',
        },

        /* ── Nucleus DS — Indigo scale (raw palette) ────────────────── */
        indigo: {
          50:  'hsl(var(--base-indigo-50))',
          100: 'hsl(var(--base-indigo-100))',
          200: 'hsl(var(--base-indigo-200))',
          300: 'hsl(var(--base-indigo-300))',
          400: 'hsl(var(--base-indigo-400))',
          500: 'hsl(var(--base-indigo-500))',
          600: 'hsl(var(--base-indigo-600))',
          700: 'hsl(var(--base-indigo-700))',
          800: 'hsl(var(--base-indigo-800))',
          900: 'hsl(var(--base-indigo-900))',
        },

        /* ── Nucleus DS — Blue scale (raw palette) ──────────────────── */
        'ds-blue': {
          50:  'hsl(var(--base-blue-50))',
          100: 'hsl(var(--base-blue-100))',
          200: 'hsl(var(--base-blue-200))',
          300: 'hsl(var(--base-blue-300))',
          400: 'hsl(var(--base-blue-400))',
          500: 'hsl(var(--base-blue-500))',
          600: 'hsl(var(--base-blue-600))',
          700: 'hsl(var(--base-blue-700))',
          800: 'hsl(var(--base-blue-800))',
          900: 'hsl(var(--base-blue-900))',
        },

        /* ── Component-level tokens ─────────────────────────────────── */
        'input-border': {
          default:  'hsl(var(--semantic-input-border-default))',
          focused:  'hsl(var(--semantic-input-border-focused))',
          error:    'hsl(var(--semantic-input-border-error))',
          disabled: 'hsl(var(--semantic-input-border-disabled))',
        },
        'input-text': {
          placeholder: 'hsl(var(--semantic-input-text-placeholder))',
          helper:      'hsl(var(--semantic-input-text-helper))',
          error:       'hsl(var(--semantic-input-text-error))',
        },
        checkbox: {
          'bg-checked':      'hsl(var(--semantic-checkbox-bg-checked))',
          'bg-disabled':     'hsl(var(--semantic-checkbox-bg-disabled))',
          'border-default':  'hsl(var(--semantic-checkbox-border-default))',
          'border-checked':  'hsl(var(--semantic-checkbox-border-checked))',
          'border-disabled': 'hsl(var(--semantic-checkbox-border-disabled))',
          'icon-checked':    'hsl(var(--semantic-checkbox-icon-checked))',
          'icon-disabled':   'hsl(var(--semantic-checkbox-icon-disabled))',
        },
        radio: {
          'border-default':  'hsl(var(--semantic-radio-border-default))',
          'bg-selected':     'hsl(var(--semantic-radio-bg-selected))',
          'border-selected': 'hsl(var(--semantic-radio-border-selected))',
          'dot-selected':    'hsl(var(--semantic-radio-dot-selected))',
          'bg-disabled':     'hsl(var(--semantic-radio-bg-disabled))',
          'border-disabled': 'hsl(var(--semantic-radio-border-disabled))',
          'dot-disabled':    'hsl(var(--semantic-radio-dot-disabled))',
        },
        toggle: {
          'track-off':      'hsl(var(--semantic-toggle-track-off))',
          'track-on':       'hsl(var(--semantic-toggle-track-on))',
          'track-disabled': 'hsl(var(--semantic-toggle-track-disabled))',
          thumb:            'hsl(var(--semantic-toggle-thumb))',
          'thumb-disabled': 'hsl(var(--semantic-toggle-thumb-disabled))',
        },
        status: {
          online:  'hsl(var(--semantic-status-online))',
          away:    'hsl(var(--semantic-status-away))',
          offline: 'hsl(var(--semantic-status-offline))',
          busy:    'hsl(var(--semantic-status-busy))',
        },
        tooltip: {
          bg:   'hsl(var(--semantic-tooltip-bg))',
          text: 'hsl(var(--semantic-tooltip-text))',
        },

        /* ── Signature accent — sparing use only, see tokens.css ── */
        'accent-signature': {
          DEFAULT: 'hsl(var(--semantic-accent-signature))',
          text:    'hsl(var(--semantic-accent-signature-text))',
        },
      },

      /* ── Motion — duration + easing scale (see tokens.css --duration-x / --ease-x) ── */
      transitionDuration: {
        fast: 'var(--duration-fast)',
        base: 'var(--duration-base)',
        slow: 'var(--duration-slow)',
      },
      transitionTimingFunction: {
        standard:   'var(--ease-standard)',
        decelerate: 'var(--ease-decelerate)',
        accelerate: 'var(--ease-accelerate)',
      },

      /* ── Animations (shadcn accordion) ── */
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
