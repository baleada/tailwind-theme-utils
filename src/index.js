import { toMidfixed } from './util'

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

export function fractions (unit) {
  // TODO: validate %, vw, or vh
  const fractions = [
          '1/2',
          '1/3', '2/3',
          '1/4', '2/4', '3/4',
          '1/5', '2/5', '3/5', '4/5',
          '1/6', '2/6', '3/6', '4/6', '5/6',
          '1/12', '2/12', '3/12', '4/12', '5/12', '6/12', '7/12', '8/12', '9/12', '10/12', '11/12',
        ],
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
