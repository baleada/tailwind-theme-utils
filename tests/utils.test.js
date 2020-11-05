import test from 'ava'
import { toMidfixed } from '../src/util'
import { fractions, withoutTailwindFractions, withoutColorPalettes } from '../src'
import { tailwindPercent, tailwindViewportWidth, tailwindViewportHeight, baleadaPercent, baleadaViewportWidth, baleadaViewportHeight } from './fractions.stub'
import defaultTheme from 'tailwindcss/defaultTheme'

const configStub = {
  '1': 'a',
  '2': 'b',
  '3': 'c',
}

// Midfix
test('midfixes values', t => {
  const midfixed = toMidfixed({ midfix: 'midfixStub', config: configStub }),
        expected = {
          'midfixStub-1': 'a',
          'midfixStub-2': 'b',
          'midfixStub-3': 'c',
        }

  t.deepEqual(midfixed, expected)
})

// Fractions
test('adds tailwind percent fraction classes', t => {
  const value = fractions({ unit: '%', set: 'tailwind' })
  t.deepEqual(value, tailwindPercent)
})

test('adds tailwind viewport width fraction classes', t => {
  const value = fractions({ unit: 'vw', set: 'tailwind' })
  t.deepEqual(value, tailwindViewportWidth)
})

test('adds tailwind viewport height fraction classes', t => {
  const value = fractions({ unit: 'vh', set: 'tailwind' })
  t.deepEqual(value, tailwindViewportHeight)
})

test('adds baleada percent fraction classes', t => {
  const value = fractions({ unit: '%', set: 'baleada' })
  t.deepEqual(value, baleadaPercent)
})

test('adds baleada viewport width fraction classes', t => {
  const value = fractions({ unit: 'vw', set: 'baleada' })
  t.deepEqual(value, baleadaViewportWidth)
})

test('adds baleada viewport height fraction classes', t => {
  const value = fractions({ unit: 'vh', set: 'baleada' })
  t.deepEqual(value, baleadaViewportHeight)
})

test('removes Tailwind fraction classes', t => {
  const value = withoutTailwindFractions({
    ...fractions({ unit: '%', set: 'tailwind' }),
    'full': 'full',
  })
  
  t.deepEqual(value, { full: 'full' })
})

test('removes color palettes', t => {
  const value = withoutColorPalettes(defaultTheme.colors)

  t.deepEqual(value, { transparent: 'transparent', black: "#000", white: "#fff" })
})
