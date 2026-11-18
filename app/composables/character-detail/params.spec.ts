import { describe, expect, it } from 'vitest'
import { parseId } from './params'

describe('parseId', () => {
  it.each([
    ['1', 1],
    ['826', 826],
    ['9007199254740991', Number.MAX_SAFE_INTEGER],
  ])('accepts positive safe decimal id %s', (value, expected) => {
    expect(parseId(value)).toBe(expected)
  })

  it.each([
    undefined,
    null,
    0,
    '0',
    '-1',
    '1.5',
    '1e2',
    'abc',
    '',
    '9007199254740992',
    ['1'],
  ])('rejects invalid id %s', (value) => {
    expect(parseId(value)).toBeNull()
  })
})
