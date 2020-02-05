const midfix = require('./util/midfix')

function rem (config) {
  return midfix({ value: 'rem', config })
}

function screen(config) {
  return midfix({ value: 'screen', config })
}

function fractions (unit) {
  // TODO: validate %, vw, or vh
  const suffix = unit === '%' ? '' : '-screen',
        fractions = [
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
            [`${fraction}${suffix}`]: `calc(${fraction} * 100${unit})`,
          }),
          {}
        )

  return {
    ...fractionScale,
    [unit === '%' ? 'full' : 'screen']: `100${unit}`,
  }
}

module.exports = {
  rem,
  screen,
  fractions,
}