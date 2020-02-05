module.exports = function midfix ({ value, config }) {
  return Object.keys(config)
    .reduce(
      (midfixed, clss) => ({
        ...midfixed,
        [`${value}-${clss}`]: config[clss],
      }),
      {}
    )
}