import type { Character } from './api'

export interface CharacterView {
  id: number
  name: string
  status: Character['status']
  species: string
  image: string
}
