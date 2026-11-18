export type RequestOptions = { signal?: AbortSignal }

export const createApiClient = (
  baseURL: string,
  fetcher: typeof $fetch = $fetch,
) =>
  fetcher.create({
    baseURL,
    retry: 1,
  })

/** Create the shared API client before a service's first await, while Nuxt context is available. */
export const api = () => createApiClient(useRuntimeConfig().public.apiBase)
