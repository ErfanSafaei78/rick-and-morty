import type { Character } from '~/types/api.types'
import type { CharacterView } from '~/types/view.types'

export const toCharacterView = (character: Character): CharacterView => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  image: character.image,
})
