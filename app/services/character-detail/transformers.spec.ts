import { describe, expect, it } from 'vitest'
import type { Character, Episode, Location } from '~/types/api.types'
import {
  toCharacterDetailView,
  toEpisodeView,
  toLocationView,
} from './transformers'

const character: Character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: { name: 'Earth', url: '' },
  location: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/1'],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '',
}

describe('toCharacterDetailView', () => {
  it('maps episode and location URLs to ids', () => {
    expect(toCharacterDetailView(character)).toMatchObject({
      episodeIds: [1],
      locationId: 1,
    })
  })
  it('handles missing episode and location references', () => {
    expect(
      toCharacterDetailView({
        ...character,
        episode: [],
        location: { name: 'unknown', url: '' },
      }),
    ).toMatchObject({
      episodeIds: [],
      locationId: null,
      locationName: 'unknown',
    })
  })
})

describe('toEpisodeView', () => {
  it('formats episode codes with a space', () => {
    const episode: Episode = {
      id: 1,
      name: 'Pilot',
      air_date: 'December 2, 2013',
      episode: 'S01E01',
      characters: [],
      url: '',
      created: '',
    }
    expect(toEpisodeView(episode).code).toBe('S01 E01')
  })
})

describe('toLocationView', () => {
  it('maps empty fields to unknown', () => {
    const location: Location = {
      id: 1,
      name: 'Earth',
      type: '',
      dimension: '',
      residents: [],
      url: '',
      created: '',
    }
    expect(toLocationView(location)).toEqual({
      name: 'Earth',
      type: 'unknown',
      dimension: 'unknown',
    })
  })
})
