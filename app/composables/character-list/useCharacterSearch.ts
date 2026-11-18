import { parseName, searchQuery } from './params'

/** Keep the draft local until submit, then synchronize it with browser history. */
export const useCharacterSearch = () => {
  const route = useRoute()
  const draft = ref(parseName(route.query.name))

  watch(
    () => route.query.name,
    (name) => {
      draft.value = parseName(name)
    },
  )

  const submit = () => navigateTo({ query: searchQuery(draft.value) })

  return { draft, submit }
}
