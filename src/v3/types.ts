import type { DeepPartial } from 'unocss'

import type { Theme as ShadcnTheme, ThemeCSSVarsVariant } from '../v3/themes'

export type ShadcnThemeColor = ShadcnTheme['name']

type ArrayOrSingle<T> = T | T[]

export type ColorOptions =
  | ShadcnThemeColor
  | ThemeCSSVarsVariant
  | ({ base: ShadcnThemeColor } & DeepPartial<ThemeCSSVarsVariant>)

export interface ThemeOptions {
  color?: ColorOptions | false
  radius?: number | false
  darkSelector?: string
}

export type PresetShadcnThemeOptions = ArrayOrSingle<ThemeOptions>
