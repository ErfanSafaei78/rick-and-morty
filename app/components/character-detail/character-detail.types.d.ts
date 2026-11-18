import type {
  EpisodeView,
  LocationView,
} from '~/services/character-detail/character-detail.types'

export interface CharacterHeroProps {
  id: number
  name: string
  image: string
  species: string
  status: 'Alive' | 'Dead' | 'unknown'
}

export type EpisodeCardProps = EpisodeView

export interface EpisodeGridProps {
  episodes: EpisodeView[]
}

export interface LocationCardProps {
  location: LocationView | null
  fallbackName: string
}
