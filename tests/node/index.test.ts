import { suite as createSuite } from 'uvu'
import * as assert from 'uvu/assert'
import { toMidfixed } from '../../src/extracted'
import { withoutColorPalettes } from '../../src'
import defaultTheme from 'tailwindcss/defaultTheme'

const suite = createSuite('utils (node)')

const configStub = {
  '1': 'a',
  '2': 'b',
  '3': 'c',
}

suite(`midfixes values`, () => {
  const midfixed = toMidfixed({ midfix: 'midfixStub', config: configStub }),
        expected = {
          'midfixStub-1': 'a',
          'midfixStub-2': 'b',
          'midfixStub-3': 'c',
        }

  assert.equal(midfixed, expected)
})

suite(`extracts keyword colors`, () => {
  const value = withoutColorPalettes(defaultTheme.colors)

  for (const keyword in value) {
    assert.ok(typeof value[keyword] === 'string')
  }
})

suite.run()
