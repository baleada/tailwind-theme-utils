import { toMidfixed } from './extracted'
import type { SimpleConfig } from './extracted'
import { TailwindThemeColors } from 'tailwindcss/tailwind-config'

export function rem (config: SimpleConfig): SimpleConfig {
  return toMidfixed({ midfix: 'rem', config })
}

export function em (config: SimpleConfig): SimpleConfig {
  return toMidfixed({ midfix: 'em', config })
}

export function px (config: SimpleConfig): SimpleConfig {
  return toMidfixed({ midfix: 'px', config })
}

export function screen(config: SimpleConfig): SimpleConfig {
  return toMidfixed({ midfix: 'screen', config })
}

export function withoutColorPalettes (
  colors: TailwindThemeColors
) {
  const hues = Object.keys(colors)
  return hues
    .filter(hueOrKeyword => typeof colors[hueOrKeyword] === 'string')
    .reduce<{ [keyword: string]: string }>((keywords, keyword) => ({ ...keywords, [keyword]: colors[keyword] }), {})
}

export function apply (classes: string): { [apply: `@apply ${string}`]: Record<never, never> } {
  return {
    [`@apply ${classes}`]: {}
  }
}
