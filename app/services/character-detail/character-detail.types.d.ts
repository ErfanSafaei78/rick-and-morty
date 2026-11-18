import type { CharacterView } from '~/types/view.types'

export interface CharacterDetailView extends CharacterView {
  episodeIds: number[]
  locationId: number | null
  locationName: string
}

export interface EpisodeView {
  id: number
  name: string
  code: string
  airDate: string
}

export interface LocationView {
  name: string
  type: string
  dimension: string
}
