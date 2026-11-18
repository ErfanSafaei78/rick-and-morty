import { describe, expect, it } from 'vitest'
import { getPaginationItems } from './usePagination'

describe('getPaginationItems', () => {
  it('hides pagination for a single page', () => {
    expect(getPaginationItems(1, 1)).toEqual([])
  })

  it('shows all pages when the total fits the window', () => {
    expect(getPaginationItems(1, 5)).toEqual(
      [1, 2, 3, 4, 5].map((page) => ({ kind: 'page', page })),
    )
  })

  it('keeps a five-page window around the current page with skipped ends', () => {
    expect(getPaginationItems(10, 20)).toEqual([
      { kind: 'page', page: 1 },
      { kind: 'ellipsis', key: 'leading' },
      { kind: 'page', page: 8 },
      { kind: 'page', page: 9 },
      { kind: 'page', page: 10 },
      { kind: 'page', page: 11 },
      { kind: 'page', page: 12 },
      { kind: 'ellipsis', key: 'trailing' },
      { kind: 'page', page: 20 },
    ])
  })

  it('does not show ellipses when only one page is skipped', () => {
    expect(getPaginationItems(1, 6)).toEqual(
      [1, 2, 3, 4, 5, 6].map((page) => ({ kind: 'page', page })),
    )
  })
})
