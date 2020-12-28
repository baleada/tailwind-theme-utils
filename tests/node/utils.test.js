import { suite as createSuite } from 'uvu'
import * as assert from 'uvu/assert'
import toMidfixed from '../../src/util/toMidfixed.js'
import { fractions, withoutTailwindFractions, withoutColorPalettes } from '../../lib/index.js'
import { tailwindPercent, tailwindViewportWidth, tailwindViewportHeight, baleadaPercent, baleadaViewportWidth, baleadaViewportHeight } from '../stubs/fractions.js'
import defaultTheme from 'tailwindcss/defaultTheme.js'

const suite = createSuite('utils (node)')

const configStub = {
  '1': 'a',
  '2': 'b',
  '3': 'c',
}

// Midfix
suite('midfixes values', context => {
  const midfixed = toMidfixed({ midfix: 'midfixStub', config: configStub }),
        expected = {
          'midfixStub-1': 'a',
          'midfixStub-2': 'b',
          'midfixStub-3': 'c',
        }

  assert.equal(midfixed, expected)
})

// Fractions
suite('adds tailwind percent fraction classes', context => {
  const value = fractions({ unit: '%', set: 'tailwind' })
  assert.equal(value, tailwindPercent)
})

suite('adds tailwind viewport width fraction classes', context => {
  const value = fractions({ unit: 'vw', set: 'tailwind' })
  assert.equal(value, tailwindViewportWidth)
})

suite('adds tailwind viewport height fraction classes', context => {
  const value = fractions({ unit: 'vh', set: 'tailwind' })
  assert.equal(value, tailwindViewportHeight)
})

suite('adds baleada percent fraction classes', context => {
  const value = fractions({ unit: '%', set: 'baleada' })
  assert.equal(value, baleadaPercent)
})

suite('adds baleada viewport width fraction classes', context => {
  const value = fractions({ unit: 'vw', set: 'baleada' })
  assert.equal(value, baleadaViewportWidth)
})

suite('adds baleada viewport height fraction classes', context => {
  const value = fractions({ unit: 'vh', set: 'baleada' })
  assert.equal(value, baleadaViewportHeight)
})

suite('removes Tailwind fraction classes', context => {
  const value = withoutTailwindFractions({
    ...fractions({ unit: '%', set: 'tailwind' }),
    'full': 'full',
  })
  
  assert.equal(value, { full: 'full' })
})

suite('removes color palettes', context => {
  const value = withoutColorPalettes(defaultTheme.colors)

  assert.equal(value, { transparent: 'transparent', black: '#000', white: '#fff', current: 'currentColor' })
})

suite.run()
