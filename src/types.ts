export type { PresetShadcnThemeOptions } from './v4/types'

export interface PresetShadcnControlOptions {
  /**
   * @param Generates global variables, like *.border-color, body.color, body.background.
   * @default true
   */
  globals?: boolean

  /**
   * @default 'radix'
   */
  componentLibrary?: 'radix' | 'reka'
}
