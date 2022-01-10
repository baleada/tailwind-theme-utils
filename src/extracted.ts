export type Midfixable = { [suffix: string]: string }

export function toMidfixed ({ midfix, config }: { midfix: string, config: Midfixable }): Midfixable {
  return Object.keys(config)
    .reduce(
      (midfixed, value) => ({
        ...midfixed,
        [`${midfix}-${value}`]: config[value],
      }),
      {}
    )
}
