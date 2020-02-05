const test = require('ava'),
      midfix = require('../util/midfix'),
      { fractions } = require('../index.js'),
      { percent, viewportWidth, viewportHeight } = require('./fractions.stub'),
      configStub = {
        '1': 'a',
        '2': 'b',
        '3': 'c',
      }

// Midfix
test('midfixes values', t => {
  const midfixed = midfix({ value: 'midfixStub', config: configStub }),
        expected = {
          'midfixStub-1': 'a',
          'midfixStub-2': 'b',
          'midfixStub-3': 'c',
        }

  t.deepEqual(midfixed, expected)
})

// Fractions
test('adds percent fraction classes', t => {
  const value = fractions('%')
  t.deepEqual(value, percent)
})

test('adds viewport width fraction classes', t => {
  const value = fractions('vw')
  t.deepEqual(value, viewportWidth)
})

test('adds viewport height fraction classes', t => {
  const value = fractions('vh')
  t.deepEqual(value, viewportHeight)
})