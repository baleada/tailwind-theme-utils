import { toMidfixed } from './extracted'
import type { Midfixable } from './extracted'
import { TailwindThemeColors } from 'tailwindcss/tailwind-config'

export function rem (config: Midfixable): Midfixable {
  return toMidfixed({ midfix: 'rem', config })
}

export function em (config: Midfixable): Midfixable {
  return toMidfixed({ midfix: 'em', config })
}

export function px (config: Midfixable): Midfixable {
  return toMidfixed({ midfix: 'px', config })
}

export function screen(config: Midfixable): Midfixable {
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
