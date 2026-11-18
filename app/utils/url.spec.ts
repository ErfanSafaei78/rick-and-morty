import { describe, expect, it } from 'vitest'
import { idFromUrl } from './url'

describe('idFromUrl', () => {
  it('extracts a character id from an API URL', () => {
    expect(idFromUrl('https://rickandmortyapi.com/api/character/42')).toBe(42)
  })

  it('rejects other resources, nonnumeric ids, and unsafe integers', () => {
    expect(idFromUrl('https://rickandmortyapi.com/api/location/42')).toBeNull()
    expect(
      idFromUrl('https://rickandmortyapi.com/api/character/nope'),
    ).toBeNull()
    expect(
      idFromUrl('https://rickandmortyapi.com/api/character/9007199254740992'),
    ).toBeNull()
    expect(idFromUrl('')).toBeNull()
  })
})
