import { describe, expect, it } from 'vitest'
import { parseName, parsePage } from './params'

describe('parsePage', () => {
  it('defaults to page one and accepts positive whole numbers', () => {
    expect(parsePage(undefined)).toBe(1)
    expect(parsePage('2')).toBe(2)
  })

  it.each(['', '0', '-3', '1.5', 'abc', '9007199254740992'])(
    'rejects invalid or unsafe page value %s',
    (value) => expect(parsePage(value)).toBeNull(),
  )
  it('rejects non-string query values', () => {
    expect(parsePage(['2'])).toBeNull()
  })
})

describe('parseName', () => {
  it('trims a single name and ignores non-string query values', () => {
    expect(parseName('  Rick Sanchez  ')).toBe('Rick Sanchez')
    expect(parseName(['Rick'])).toBe('')
  })
})
