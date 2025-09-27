import { createGenerator } from 'unocss'
import { describe, expect, it } from 'vitest'

import presetShadcn from '../../src'
import { generateCSSVars } from '../../src/v4/generate'
import { themes as themesV4 } from '../../src/v4/themes'

const uno = await createGenerator()

describe('presetShadcn (v4 default)-execute-getCSS', () => {
  it('default options', async () => {
    const presetReturn = presetShadcn()
    const css = presetReturn.preflights![0]?.getCSS({ generator: uno, theme: {} }) || ''

    expect(css).toContain('@keyframes shadcn-down')
    expect(css).toContain('oklch(var(--border))')
    expect(css).toContain(':root')
    expect(css).toContain('.dark')
    expect(css).toContain('--radius: 0.5rem;')
  })

  it('disable color', async () => {
    const presetReturn = presetShadcn({ color: false })
    const css = presetReturn.preflights![0]?.getCSS({ generator: uno, theme: {} }) || ''

    expect(css).toContain(':root')
    expect(css).toContain('--radius: 0.5rem;')
    expect(css).not.toContain('.dark')
    expect(css).not.toContain('--background:')
  })

  it('disable radius', async () => {
    const presetReturn = presetShadcn({ radius: false })
    const css = presetReturn.preflights![0]?.getCSS({ generator: uno, theme: {} }) || ''

    expect(css).toContain(':root')
    expect(css).toContain('--background:')
    expect(css).not.toContain('--radius:')
  })

  it('disable color and radius', async () => {
    const presetReturn = presetShadcn({ color: false, radius: false })
    const css = presetReturn.preflights![0]?.getCSS({ generator: uno, theme: {} }) || ''

    expect(css).not.toContain(':root')
    expect(css).not.toContain('.dark')
    expect(css).not.toContain('--radius:')
    expect(css).not.toContain('--background:')
  })

  it('disable global styles', async () => {
    const presetReturn = presetShadcn(undefined, { globals: false })
    const css = presetReturn.preflights![0]?.getCSS({ generator: uno, theme: {} }) || ''

    expect(css).not.toContain('oklch(var(--border))')
    expect(css).not.toContain('oklch(var(--foreground))')
  })

  it('use reka ui', async () => {
    const presetReturn = presetShadcn(undefined, { componentLibrary: 'reka' })
    const css = presetReturn.preflights![0]?.getCSS({ generator: uno, theme: {} }) || ''

    expect(css).toContain('var(--reka-accordion-content-height)')
    expect(css).toContain('var(--reka-collapsible-content-height)')
  })
})

describe('generate-theme-css-var (v4)', () => {
  it('built in themes', async () => {
    const zinc = generateCSSVars({ color: 'zinc', radius: 0.5 }, themesV4)
    expect(zinc).toContain(':root')
    expect(zinc).toContain('--background: 1 0 0;')
    expect(zinc).toContain('--radius: 0.5rem;')
    expect(zinc).toContain('.dark')
    expect(zinc).toContain('--background: 0.141 0.005 285.823;')

    const neutral = generateCSSVars({ color: 'neutral', radius: 0.75 }, themesV4)
    expect(neutral).toContain('--radius: 0.75rem;')
    expect(neutral).toContain('--background: 1 0 0;')
    expect(neutral).toContain('.dark')
    expect(neutral).toContain('--background: 0.145 0 0;')
  })

  it('custom theme', async () => {
    const css = generateCSSVars({
      color: {
        name: 'custom',
        light: {
          'background': '1 0 0',
          'foreground': '0.2 0.1 300',
          'card': '1 0 0',
          'card-foreground': '0.2 0.1 300',
          'popover': '1 0 0',
          'popover-foreground': '0.2 0.1 300',
          'primary': '0.3 0.2 100',
          'primary-foreground': '0.98 0 0',
          'secondary': '0.95 0.01 200',
          'secondary-foreground': '0.3 0.2 100',
          'muted': '0.95 0.01 200',
          'muted-foreground': '0.5 0.02 280',
          'accent': '0.95 0.01 200',
          'accent-foreground': '0.3 0.2 100',
          'destructive': '0.6 0.24 27.3',
          'destructive-foreground': '0.98 0 0',
          'border': '0.92 0.004 286.32',
          'input': '0.92 0.004 286.32',
          'ring': '0.7 0.015 286.06',
          'chart-1': '0.64 0.22 41.1',
          'chart-2': '0.6 0.118 184.7',
          'chart-3': '0.398 0.07 227.39',
          'chart-4': '0.828 0.189 84.43',
          'chart-5': '0.769 0.188 70.08',
          'sidebar': '0.98 0 0',
          'sidebar-foreground': '0.14 0.005 285.82',
          'sidebar-primary': '0.21 0.006 285.88',
          'sidebar-primary-foreground': '0.98 0 0',
          'sidebar-accent': '0.967 0.001 286.37',
          'sidebar-accent-foreground': '0.21 0.006 285.88',
          'sidebar-border': '0.92 0.004 286.32',
          'sidebar-ring': '0.705 0.015 286.067',
        },
        dark: {
          'background': '0.14 0.005 285.82',
          'foreground': '0.98 0 0',
          'card': '0.21 0.006 285.88',
          'card-foreground': '0.98 0 0',
          'popover': '0.21 0.006 285.88',
          'popover-foreground': '0.98 0 0',
          'primary': '0.92 0.004 286.32',
          'primary-foreground': '0.21 0.006 285.88',
          'secondary': '0.274 0.006 286.033',
          'secondary-foreground': '0.98 0 0',
          'muted': '0.274 0.006 286.033',
          'muted-foreground': '0.705 0.015 286.067',
          'accent': '0.274 0.006 286.033',
          'accent-foreground': '0.98 0 0',
          'destructive': '0.704 0.191 22.216',
          'destructive-foreground': '0.98 0 0',
          'border': '1 0 0 / 10%',
          'input': '1 0 0 / 15%',
          'ring': '0.552 0.016 285.938',
          'chart-1': '0.488 0.243 264.376',
          'chart-2': '0.696 0.17 162.48',
          'chart-3': '0.769 0.188 70.08',
          'chart-4': '0.627 0.265 303.9',
          'chart-5': '0.645 0.246 16.439',
          'sidebar': '0.21 0.006 285.885',
          'sidebar-foreground': '0.98 0 0',
          'sidebar-primary': '0.488 0.243 264.376',
          'sidebar-primary-foreground': '0.98 0 0',
          'sidebar-accent': '0.274 0.006 286.033',
          'sidebar-accent-foreground': '0.98 0 0',
          'sidebar-border': '1 0 0 / 10%',
          'sidebar-ring': '0.552 0.016 285.938',
        },
      },
      radius: 1,
    }, themesV4)

    expect(css).toContain(':root')
    expect(css).toContain('--radius: 1rem;')
    expect(css).toContain('--background: 1 0 0;')
    expect(css).toContain('.dark')
  })

  it('custom theme based on built in theme', async () => {
    const css = generateCSSVars({
      color: {
        base: 'zinc',
        light: { background: '0.5 0.2 180' },
      },
      radius: 1,
    }, themesV4)

    expect(css).not.toContain('.theme-zinc')
    expect(css).toContain('--background: 0.5 0.2 180;')
  })

  it('generate multiple themes', async () => {
    const css = generateCSSVars([
      { color: 'zinc', radius: 0.5 },
      { color: 'neutral', radius: 0.75 },
    ], themesV4)

    expect(css).toContain('.theme-zinc')
    expect(css).toContain('.theme-neutral')
    expect(css).not.toContain(':root {')
  })

  it('custom dark selector', async () => {
    const css = generateCSSVars({ darkSelector: '.custom-dark' }, themesV4)
    expect(css).toContain('.custom-dark')
  })
})
