import { toMidfixed } from './util'
import { tailwind as tailwindFractions, baleada as baleadaFractions } from './constants/fractions.js'

export function rem (config) {
  return toMidfixed({ midfix: 'rem', config })
}

export function em (config) {
  return toMidfixed({ midfix: 'em', config })
}

export function px (config) {
  return toMidfixed({ midfix: 'px', config })
}

export function screen(config) {
  return toMidfixed({ midfix: 'screen', config })
}

export function fractions ({ unit, mode = 'baleada' }) {
  // TODO: validate unit = %|vw|vh
  // TODO: validate mode = baleada|tailwind
  const fractions = mode === 'baleada' ? baleadaFractions : tailwindFractions,
        fractionScale = fractions.reduce(
          (scale, fraction) => ({
            ...scale,
            [`${fraction}`]: `calc(${fraction} * 100${unit})`,
          }),
          {}
        ),
        isScreen = /^v(?:w|h)$/.test(unit),
        prepared = isScreen
          ? screen(fractionScale)
          : fractionScale

  return {
    ...prepared,
    [isScreen ? 'screen' : 'full']: `100${unit}`,
  }
}

export function withoutTailwindFractions (config) {
  const fractions = tailwindFractions,
        keysWithoutFractions = Object.keys(config).filter(key => !fractions.includes(key))

  return keysWithoutFractions.reduce((result, key) => ({ ...result, [key]: config[key] }), {})
}

export function withoutColorPalettes (colors) {
  const hues = Object.keys(colors)
  return hues
    .filter(hue => typeof colors[hue] === 'string')
    .reduce((individualColors, hue) => ({ ...individualColors, [hue]: colors[hue] }), {})
}