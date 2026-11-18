import { getCharacterLocation } from '~/services/character-detail/character-detail'
import { cachedInMemory } from '~/utils/cache'

export const useCharacterLocation = (
  characterId: number,
  locationId: number | null,
) =>
  useAsyncData(
    `character-${characterId}-location`,
    (_app, { signal }) => getCharacterLocation(locationId, { signal }),
    {
      getCachedData: cachedInMemory,
      lazy: true,
    },
  )
