import type { Character, Episode, Location } from '~/types/api.types'
import type {
  CharacterDetailView,
  EpisodeView,
  LocationView,
} from './character-detail.types'
import type { RequestOptions } from '../client.types'
import { api } from '../client'
import {
  toCharacterDetailView,
  toEpisodeView,
  toLocationView,
} from './transformers'

export const getCharacterDetail = async (
  id: number,
  { signal }: RequestOptions = {},
) => {
  const request = api()<Character>(`/character/${id}`, { signal })
  return request.then(toCharacterDetailView) as Promise<CharacterDetailView>
}

export async function getCharacterEpisodes(
  ids: number[],
  { signal }: RequestOptions = {},
): Promise<EpisodeView[]> {
  if (!ids.length) return []
  const response = await api()<Episode | Episode[]>(
    `/episode/${ids.join(',')}`,
    { signal },
  )
  return (Array.isArray(response) ? response : [response]).map(toEpisodeView)
}

export async function getCharacterLocation(
  id: number | null,
  { signal }: RequestOptions = {},
): Promise<LocationView | null> {
  if (id === null) return null
  const response = await api()<Location>(`/location/${id}`, { signal })
  return toLocationView(response)
}
