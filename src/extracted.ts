export type SimpleConfig = { [suffix: string]: string }

export function toMidfixed ({ midfix, config }: { midfix: string, config: SimpleConfig }): SimpleConfig {
  return Object.keys(config)
    .reduce(
      (midfixed, value) => ({
        ...midfixed,
        [`${midfix}-${value}`]: config[value],
      }),
      {}
    )
}
