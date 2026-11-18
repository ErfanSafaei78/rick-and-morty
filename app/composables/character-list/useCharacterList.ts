import { getCharacterPage } from '~/services/character-list'
import { cachedInMemory } from '~/utils/cache'
import { parseName, parsePage } from './params'

/** SSR list data keyed by the canonical page and search query. */
export const useCharacterList = () => {
  const route = useRoute()
  const page = computed(() => parsePage(route.query.page))
  const name = computed(() => parseName(route.query.name))

  return useAsyncData(
    computed(() => `characters-${page.value}-${name.value}`),
    (_app, { signal }) =>
      page.value === null
        ? Promise.resolve(null)
        : getCharacterPage(page.value, name.value, { signal }),
    { getCachedData: cachedInMemory },
  )
}
