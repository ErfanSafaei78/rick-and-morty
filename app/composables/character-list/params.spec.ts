import { describe, expect, it } from 'vitest'
import { paginationQuery, parseName, parsePage, searchQuery } from './params'

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

describe('query builders', () => {
  it('trims submitted search and omits an empty filter', () => {
    expect(searchQuery(' Rick ')).toEqual({ name: 'Rick' })
    expect(searchQuery('   ')).toEqual({ name: undefined })
  })

  it('preserves the search on pagination and omits page one', () => {
    expect(paginationQuery(3, 'Rick')).toEqual({ name: 'Rick', page: '3' })
    expect(paginationQuery(1, '')).toEqual({
      name: undefined,
      page: undefined,
    })
  })
})
