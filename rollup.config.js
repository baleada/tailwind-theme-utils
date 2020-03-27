import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'

const external = [],
      plugins = [
        babel({
          exclude: 'node_modules',
        }),
        resolve(),
      ]

export default [
  {
    external,
    input: 'src/index.js',
    output: { file: 'lib/index.js', format: 'cjs' },
    plugins,
  },
]
