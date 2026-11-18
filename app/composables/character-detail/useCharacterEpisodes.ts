import { getCharacterEpisodes } from '~/services/character-detail/character-detail'
import { cachedInMemory } from '~/utils/cache'

export const useCharacterEpisodes = (id: number, episodeIds: number[]) =>
  useAsyncData(
    `character-${id}-episodes`,
    (_app, { signal }) => getCharacterEpisodes(episodeIds, { signal }),
    {
      getCachedData: cachedInMemory,
      lazy: true,
    },
  )
