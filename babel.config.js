const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        node: true,
      },
    },
  ],
],
plugins = [
  '@babel/plugin-transform-runtime'
]

module.exports = { presets, plugins }
