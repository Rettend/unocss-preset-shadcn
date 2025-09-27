import type { Preset } from 'unocss'
import type { Theme } from 'unocss/preset-mini'

import type { PresetShadcnControlOptions, PresetShadcnThemeOptions } from './types'
import { generateCSSVars, generateGlobalStyles } from './v4/generate'
import { themes } from './v4/themes'

export const builtinColors = themes.map(theme => theme.name)
export const builtinRadiuses = [0, 0.3, 0.5, 0.75, 1] as const

export function presetShadcn(
  themeOptions: PresetShadcnThemeOptions = {},
  controlOptions: PresetShadcnControlOptions = {},
): Preset<Theme> {
  const { globals = true, componentLibrary = 'radix' } = controlOptions

  return {
    name: 'unocss-preset-shadcn',
    preflights: [
      {
        getCSS: () => `
          @keyframes shadcn-down { from{ height: 0 } to { height: var(--${componentLibrary}-accordion-content-height)} }
          @keyframes shadcn-up { from{ height: var(--${componentLibrary}-accordion-content-height)} to { height: 0 } }
          @keyframes shadcn-collapsible-down { from{ height: 0 } to { height: var(--${componentLibrary}-collapsible-content-height)} }
          @keyframes shadcn-collapsible-up { from{ height: var(--${componentLibrary}-collapsible-content-height)} to { height: 0 } }

          ${generateCSSVars(themeOptions, themes)}

          ${globals ? generateGlobalStyles() : ''}
        `,
      },
    ],
    rules: [
      [
        'animate-accordion-down',
        {
          animation: 'shadcn-down 0.2s ease-out',
        },
      ],
      [
        'animate-accordion-up',
        {
          animation: 'shadcn-up 0.2s ease-out',
        },
      ],
      [
        'animate-collapsible-down',
        {
          animation: 'shadcn-collapsible-down 0.2s ease-out',
        },
      ],
      [
        'animate-collapsible-up',
        {
          animation: 'shadcn-collapsible-up 0.2s ease-out',
        },
      ],
    ],
    theme: {
      colors: {
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        ring: 'oklch(var(--ring))',
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        primary: {
          DEFAULT: 'oklch(var(--primary))',
          foreground: 'oklch(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary))',
          foreground: 'oklch(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive))',
          foreground: 'oklch(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'oklch(var(--muted))',
          foreground: 'oklch(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'oklch(var(--accent))',
          foreground: 'oklch(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'oklch(var(--popover))',
          foreground: 'oklch(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'oklch(var(--card))',
          foreground: 'oklch(var(--card-foreground))',
        },
        chart1: 'oklch(var(--chart1))',
        chart2: 'oklch(var(--chart2))',
        chart3: 'oklch(var(--chart3))',
        chart4: 'oklch(var(--chart4))',
        chart5: 'oklch(var(--chart5))',
        sidebar: {
          DEFAULT: 'oklch(var(--sidebar-background))',
          background: 'oklch(var(--sidebar-background))',
          foreground: 'oklch(var(--sidebar-foreground))',
          primary: {
            DEFAULT: 'oklch(var(--sidebar-primary))',
            foreground: 'oklch(var(--sidebar-primary-foreground))',
          },
          accent: {
            DEFAULT: 'oklch(var(--sidebar-accent))',
            foreground: 'oklch(var(--sidebar-accent-foreground))',
          },
          border: 'oklch(var(--sidebar-border))',
          ring: 'oklch(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  }
}

export default presetShadcn
