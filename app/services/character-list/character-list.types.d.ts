import type { CharacterView } from '~/types/view.types'

export interface CharacterPageView {
  characters: CharacterView[]
  currentPage: number
  totalPages: number
}
