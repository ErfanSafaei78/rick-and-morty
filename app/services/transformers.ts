import type { Character } from '~/types/api'
import type { CharacterView } from '~/types/view'

export const toCharacterView = (character: Character): CharacterView => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  image: character.image,
})
