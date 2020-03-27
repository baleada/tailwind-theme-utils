export default {
  files: [ 'tests/**/*.test.js' ],
  verbose: true,
  require: [
    // './tests/test-util/setup.js'
  ],
  babel: {
    compileAsTests: [
      'src/**/*.js',
      'tests/**/*.stub.js',
    ],
    testOptions: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: true,
            },
          },
        ],
      ],
      plugins: [
        
      ]
    }
  }
}
