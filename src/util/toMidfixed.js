export default function toMidfixed ({ midfix, config }) {
  return Object.keys(config)
    .reduce(
      (midfixed, value) => ({
        ...midfixed,
        [`${midfix}-${value}`]: config[value],
      }),
      {}
    )
}