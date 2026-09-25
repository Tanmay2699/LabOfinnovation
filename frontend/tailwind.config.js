/** @type {import('tailwindcss').Config} */

// ============================================================================
// Lab of Innovation — Deep Field
//
// Every colour here points at a CSS variable in src/styles/tokens.css, which
// is generated from the design system. Nothing in this file is a value; it is
// all a mapping. Change a colour in the system, regenerate tokens.css, and
// this file does not move.
//
// Colours are declared in channel form so Tailwind's opacity modifiers keep
// working (`bg-surface-card/70`) AND the theme still switches on
// `[data-theme="dock"]` — which is how checkout goes light.
//
// Three tiers of name:
//   1. SYSTEM    signal / ember / status / surface / ink / line / sky.
//                Use these in all new code. They match the design system
//                one-to-one.
//   2. SEMANTIC  the Observatory names this codebase already uses
//                (surface-card, surface-field, indigo-*, copper-*). Kept so
//                every existing file keeps compiling; each now resolves to a
//                Deep Field token.
//   3. LEGACY    primary / secondary / accent / dark / gray / red / green /
//                yellow / blue. Deprecated. They paint backgrounds, borders
//                and gradient stops only — never text.
// ============================================================================

const c = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ---- 1. system -----------------------------------------------------
        surface: {
          void: c('surface-void'),
          base: c('surface-base'),
          raised: c('surface-raised'),
          overlay: c('surface-overlay'),
          inset: c('surface-inset'),
          signal: c('surface-signal-wash'),
          ember: c('surface-ember-wash'),
          // Observatory aliases
          card: c('surface-raised'),
          field: c('surface-inset'),
        },
        line: {
          hairline: c('line-hairline'),
          strong: c('line-strong'),
          // Observatory aliases
          DEFAULT: c('line-hairline'),
          subtle: c('line-hairline'),
          focus: c('focus-ring'),
        },
        ink: {
          DEFAULT: c('text-starlight'),
          starlight: c('text-starlight'),
          body: c('text-body'),
          muted: c('text-muted'),
          onSignal: c('text-on-signal'),
          onEmber: c('text-on-ember'),
          inverse: c('text-inverse'),
          // Observatory aliases
          secondary: c('text-body'),
          tertiary: c('text-muted'),
          // was 2.8:1 and never carried information; lifted to 5.4:1
          disabled: c('text-muted'),
          onAccent: c('text-on-ember'),
        },
        signal: {
          100: c('signal-100'),
          300: c('signal-300'),
          500: c('signal-500'),
          700: c('signal-700'),
          900: c('signal-900'),
        },
        ember: {
          300: c('ember-300'),
          500: c('ember-500'),
          900: c('ember-900'),
        },
        status: {
          success: c('status-success'),
          caution: c('status-caution'),
          danger: c('status-danger'),
          info: c('status-info'),
        },
        // Decorative only. Never above z-content, never carrying meaning.
        sky: {
          star: c('star-bright'),
          starDim: c('star-dim'),
          orbit: c('orbit-ring'),
          constellation: c('constellation'),
          grid: c('grid-line'),
          nebulaIndigo: c('nebula-indigo'),
          nebulaIon: c('nebula-ion'),
          nebulaEmber: c('nebula-ember'),
        },
        focus: c('focus-ring'),
        scrim: c('scrim'),
        glass: c('overlay-glass'),

        // ---- 2. semantic (Observatory ramps, repointed) ---------------------
        // indigo-600 stays the darker fill because existing call sites put
        // off-white text on it. New code uses signal-500 with ink-onSignal.
        indigo: {
          300: c('signal-300'),
          400: c('signal-300'),
          500: c('signal-500'),
          600: c('signal-700'),
          700: c('signal-700'),
          800: c('signal-900'),
          900: c('signal-900'),
          950: c('surface-signal-wash'),
        },
        copper: {
          300: c('ember-300'),
          400: c('ember-500'),
          500: c('ember-500'),
          600: c('ember-500'),
          700: c('ember-900'),
          800: c('ember-900'),
          900: c('ember-900'),
        },

        // Status panels: system says tinted ground + hairline + coloured text.
        success: { text: c('status-success'), bg: c('surface-signal-wash'), border: c('line-hairline') },
        warning: { text: c('status-caution'), bg: c('surface-signal-wash'), border: c('line-hairline') },
        danger: {
          text: c('status-danger'),
          bg: c('surface-signal-wash'),
          border: c('line-hairline'),
          soft: c('status-danger'),
        },

        // ---- 3. legacy (deprecated; grounds, borders, gradient stops) -------
        primary: {
          50: c('surface-signal-wash'), 100: c('surface-signal-wash'), 200: c('signal-900'),
          300: c('signal-900'), 400: c('signal-700'), 500: c('signal-700'),
          600: c('signal-700'), 700: c('signal-900'), 800: c('signal-900'), 900: c('signal-900'),
        },
        secondary: {
          50: c('surface-signal-wash'), 100: c('surface-signal-wash'), 200: c('signal-900'),
          300: c('signal-900'), 400: c('signal-700'), 500: c('signal-700'),
          600: c('signal-700'), 700: c('signal-900'), 800: c('signal-900'), 900: c('signal-900'),
        },
        accent: {
          50: c('surface-ember-wash'), 100: c('surface-ember-wash'), 200: c('ember-900'),
          300: c('ember-900'), 400: c('ember-900'), 500: c('ember-900'),
          600: c('ember-900'), 700: c('ember-900'), 800: c('ember-900'), 900: c('surface-ember-wash'),
        },
        // `dark` keeps its direction: high number = deepest.
        dark: {
          50: c('surface-raised'), 100: c('line-hairline'), 200: c('line-hairline'),
          300: c('line-strong'), 400: c('text-muted'), 500: c('text-muted'),
          600: c('line-hairline'), 700: c('line-hairline'), 800: c('surface-raised'),
          900: c('surface-base'),
        },
        gray: {
          50: c('surface-raised'), 100: c('surface-raised'), 200: c('surface-inset'),
          300: c('line-hairline'), 400: c('line-strong'), 500: c('text-muted'),
          600: c('text-muted'), 700: c('text-muted'), 800: c('text-body'),
          900: c('text-starlight'),
        },
        red: {
          50: c('surface-signal-wash'), 100: c('surface-signal-wash'), 200: c('line-hairline'),
          300: c('line-hairline'), 400: c('status-danger'), 500: c('status-danger'),
          600: c('status-danger'), 700: c('status-danger'), 800: c('line-hairline'),
          900: c('surface-signal-wash'),
        },
        green: {
          50: c('surface-signal-wash'), 100: c('surface-signal-wash'), 200: c('line-hairline'),
          300: c('line-hairline'), 400: c('status-success'), 500: c('status-success'),
          600: c('status-success'), 700: c('status-success'), 800: c('line-hairline'),
          900: c('surface-signal-wash'),
        },
        yellow: {
          50: c('surface-ember-wash'), 100: c('surface-ember-wash'), 200: c('ember-900'),
          300: c('ember-900'), 400: c('status-caution'), 500: c('status-caution'),
          600: c('status-caution'), 700: c('ember-900'), 800: c('ember-900'),
          900: c('surface-ember-wash'),
        },
        blue: {
          50: c('surface-signal-wash'), 100: c('surface-signal-wash'), 200: c('signal-900'),
          300: c('signal-900'), 400: c('signal-700'), 500: c('signal-700'),
          600: c('signal-700'), 700: c('signal-900'), 800: c('signal-900'), 900: c('signal-900'),
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },

      // The design system's type scale. Observatory names kept as aliases.
      fontSize: {
        'hero-xl': ['4.5rem', { lineHeight: '4.25rem', letterSpacing: '-0.022em' }],
        hero: ['3.5rem', { lineHeight: '3.625rem', letterSpacing: '-0.02em' }],
        display: ['2.5rem', { lineHeight: '2.875rem', letterSpacing: '-0.015em' }],
        h1: ['2.125rem', { lineHeight: '2.5rem', letterSpacing: '-0.012em' }],
        h2: ['1.625rem', { lineHeight: '2rem', letterSpacing: '-0.01em' }],
        h3: ['1.25rem', { lineHeight: '1.625rem' }],
        h4: ['1.0625rem', { lineHeight: '1.5rem' }],
        'body-lg': ['1.125rem', { lineHeight: '1.875rem' }],
        'body-sm': ['0.875rem', { lineHeight: '1.375rem' }],
        caption: ['0.8125rem', { lineHeight: '1.125rem' }],
        eyebrow: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.16em' }],
        label: ['0.875rem', { lineHeight: '1.125rem' }],
        'stat-xl': ['3.5rem', { lineHeight: '3.5rem', letterSpacing: '-0.02em' }],
        stat: ['2.5rem', { lineHeight: '2.75rem', letterSpacing: '-0.018em' }],
        readout: ['0.8125rem', { lineHeight: '1.25rem', letterSpacing: '0.06em' }],
        // Observatory aliases
        'display-1': ['4.5rem', { lineHeight: '4.25rem', letterSpacing: '-0.022em' }],
        'display-2': ['3.5rem', { lineHeight: '3.625rem', letterSpacing: '-0.02em' }],
        'heading-1': ['2.5rem', { lineHeight: '2.875rem', letterSpacing: '-0.015em' }],
        'heading-2': ['2.125rem', { lineHeight: '2.5rem', letterSpacing: '-0.012em' }],
        'heading-3': ['1.625rem', { lineHeight: '2rem', letterSpacing: '-0.01em' }],
        'heading-4': ['1.25rem', { lineHeight: '1.625rem' }],
        overline: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.16em' }],
      },

      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        pill: 'var(--radius-pill)',
        // Observatory aliases
        chip: 'var(--radius-xs)',
        control: 'var(--radius-md)',
        card: 'var(--radius-lg)',
        panel: 'var(--radius-lg)',
      },

      transitionTimingFunction: {
        standard: 'var(--ease-standard)',
        entrance: 'var(--ease-entrance)',
        exit: 'var(--ease-exit)',
        overshoot: 'var(--ease-overshoot)',
        float: 'var(--ease-float)',
        drift: 'var(--ease-drift)',
      },

      transitionDuration: {
        instant: 'var(--dur-instant)',
        quick: 'var(--dur-quick)',
        base: 'var(--dur-base)',
        slow: 'var(--dur-slow)',
        cinematic: 'var(--dur-cinematic)',
        // Observatory aliases
        120: 'var(--dur-instant)',
        160: 'var(--dur-quick)',
        240: 'var(--dur-base)',
      },

      boxShadow: {
        raised: 'var(--shadow-raised)',
        lift: 'var(--shadow-lift)',
        overlay: 'var(--shadow-overlay)',
        well: 'var(--shadow-inset-well)',
        ring: 'var(--shadow-ring)',
        'ring-focus': 'var(--shadow-ring-focus)',
        // Observatory aliases
        'elev-2': 'var(--shadow-inset-well)',
        'elev-3': 'var(--shadow-overlay)',
        plate: 'var(--shadow-inset-well)',
      },

      blur: {
        nebula: 'var(--blur-nebula)',
        glass: 'var(--blur-glass)',
        depth: 'var(--blur-depth)',
      },

      zIndex: {
        starfield: 'var(--z-starfield)',
        nebula: 'var(--z-nebula)',
        ornament: 'var(--z-ornament)',
        content: 'var(--z-content)',
        nav: 'var(--z-nav)',
        overlay: 'var(--z-overlay)',
      },

      maxWidth: {
        container: 'var(--layout-container)',
        wide: 'var(--layout-container-wide)',
        measure: 'var(--layout-measure)',
      },

      // Ambient loops. Triggered motion lives in Framer Motion variants —
      // see src/motion/variants.js — not here.
      animation: {
        'fade-in': 'fadeIn var(--dur-base) var(--ease-entrance)',
        'fade-up': 'fadeUp var(--dur-slow) var(--ease-entrance)',
        'scale-in': 'scaleIn var(--dur-slow) var(--ease-entrance)',
        'slide-in-right': 'slideInRight var(--dur-slow) var(--ease-entrance)',
        'slide-in-left': 'slideInLeft var(--dur-slow) var(--ease-entrance)',
        drift: 'drift var(--dur-starfield) var(--ease-drift) infinite',
        breathe: 'breathe calc(var(--dur-drift) * 3) var(--ease-float) infinite',
        bob: 'bob var(--dur-drift) var(--ease-float) infinite',
        sway: 'sway calc(var(--dur-drift) * 1.35) var(--ease-float) infinite',
        lens: 'lens calc(var(--dur-drift) * 0.8) var(--ease-float) infinite',
        orbit: 'spin var(--dur-orbit) var(--ease-drift) infinite',
        'orbit-reverse': 'spin calc(var(--dur-orbit) * 1.4) var(--ease-drift) infinite reverse',
        marquee: 'marquee var(--rail-dur, 40s) var(--ease-drift) infinite',
        sheen: 'sheen var(--dur-slow) var(--ease-standard) 1 forwards',
        shimmer: 'shimmer 1.4s linear infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(var(--travel-md))' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(var(--travel-md))' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(calc(var(--travel-md) * -1))' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        drift: { to: { transform: 'translate3d(-260px, -160px, 0)' } },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: 'var(--opacity-nebula)' },
          '50%': { transform: 'scale(1.08)', opacity: 'calc(var(--opacity-nebula) * 1.12)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(-10px) rotate(-2.5deg)' },
          '50%': { transform: 'translateY(10px) rotate(2.5deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        lens: {
          '0%, 100%': { fill: 'var(--signal-700)' },
          '50%': { fill: 'var(--signal-300)' },
        },
        spin: { to: { transform: 'rotate(360deg)' } },
        marquee: { to: { transform: 'translate3d(-50%, 0, 0)' } },
        sheen: { from: { transform: 'translateX(-100%)' }, to: { transform: 'translateX(100%)' } },
        shimmer: {
          '0%': { backgroundPosition: '-160% 0' },
          '100%': { backgroundPosition: '160% 0' },
        },
      },
    },
  },
  plugins: [],
};
