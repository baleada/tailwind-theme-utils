import { configureable } from '@baleada/prepare'

const external = [/tailwindcss/],
      shared = new configureable.Rollup()
        .input('src/index.ts')
        .external(external)
        .typescript()
        .resolve(),
      esm = shared
        .delete({ targets: 'lib/*', verbose: true })
        .esm({ file: 'lib/index.js', target: 'node' })
        .analyzer()
        .configure(),
      cjs = shared
        .cjs({ file: 'lib/index.cjs' })
        .configure(),
      dts = new configureable.Rollup()
        .input('./types/index.d.ts')
        .external([
          ...external,
          'rollup',
        ])
        .output({ file: 'lib/index.d.ts', format: 'esm' })
        .dts()
        .configure()

export default [
  esm,
  cjs,
  dts
]
