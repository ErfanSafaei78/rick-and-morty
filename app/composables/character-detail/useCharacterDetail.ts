import { getCharacterDetail } from '~/services/character-detail/character-detail'
import { cachedInMemory } from '~/utils/cache'

export const useCharacterDetail = (id: number) =>
  useAsyncData(
    `character-${id}`,
    (_app, { signal }) => getCharacterDetail(id, { signal }),
    {
      getCachedData: cachedInMemory,
    },
  )
