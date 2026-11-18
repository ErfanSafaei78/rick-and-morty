import { describe, expect, it } from 'vitest'
import { cachedInMemory } from './cache'

describe('cachedInMemory', () => {
  const nuxtApp = {
    payload: { data: { characters: ['payload'] } },
    static: { data: { characters: ['static'], other: ['static only'] } },
  }

  it('bypasses cached data for manual refreshes', () => {
    expect(
      cachedInMemory('characters', nuxtApp as never, {
        cause: 'refresh:manual',
      }),
    ).toBeUndefined()
  })

  it('reuses payload data, then static data as a fallback', () => {
    expect(
      cachedInMemory('characters', nuxtApp as never, { cause: 'initial' }),
    ).toEqual(['payload'])
    expect(
      cachedInMemory('other', nuxtApp as never, { cause: 'initial' }),
    ).toEqual(['static only'])
  })
})
