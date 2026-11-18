import type { Character } from './api.types'

export interface CharacterView {
  id: number
  name: string
  status: Character['status']
  species: string
  image: string
}
