import type { Character, Episode, Location } from '~/types/api.types'
import type {
  CharacterDetailView,
  EpisodeView,
  LocationView,
} from './character-detail.types'
import { idFromResourceUrl } from '~/utils/url'
import { toCharacterView } from '../transformers'

export const toCharacterDetailView = (
  character: Character,
): CharacterDetailView => ({
  ...toCharacterView(character),
  episodeIds: character.episode
    .map((url) => idFromResourceUrl(url, 'episode'))
    .filter((id): id is number => id !== null),
  locationId: idFromResourceUrl(character.location.url, 'location'),
  locationName: character.location.name,
})

export const toEpisodeView = (episode: Episode): EpisodeView => ({
  id: episode.id,
  name: episode.name,
  code: episode.episode.replace(/^(S\d{2})E(\d{2})$/, '$1 E$2'),
  airDate: episode.air_date,
})

export const toLocationView = (location: Location): LocationView => ({
  name: location.name,
  type: location.type || 'unknown',
  dimension: location.dimension || 'unknown',
})
