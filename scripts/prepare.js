const { generateIndex, empty } = require('@baleada/prepare'),
      compile = require('./compile')


function prepare () {
  empty('lib')

  /* Index all */
  generateIndex('src/util')

  compile()
}

prepare()
      