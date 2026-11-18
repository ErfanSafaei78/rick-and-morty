import type { CharacterView } from './view.types'

export interface CharacterPageView {
  characters: CharacterView[]
  currentPage: number
  totalPages: number
}
