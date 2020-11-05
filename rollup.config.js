import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'

const external = [
        /@babel\/runtime/,
      ],
      plugins = [
        babel({
          exclude: 'node_modules',
          babelHelpers: 'runtime',
        }),
        resolve(),
      ]

export default [
  {
    external,
    input: 'src/index.js',
    output: [
      { file: 'lib/index.js', format: 'cjs' },
      { file: 'lib/index.esm.js', format: 'esm' },
    ],
    plugins,
  },
]
