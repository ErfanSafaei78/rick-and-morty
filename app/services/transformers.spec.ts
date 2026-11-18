import { describe, expect, it } from 'vitest'
import type { Character } from '~/types/api.types'
import { toCharacterView } from './transformers'

describe('toCharacterView', () => {
  it('keeps only fields used by the character list', () => {
    const character: Character = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: { name: 'Earth', url: '' },
      location: { name: 'Earth', url: '' },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: [],
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '',
    }
    expect(toCharacterView(character)).toEqual({
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    })
  })
})
