import type { NuxtApp } from '#app'
import type { AsyncDataRefreshCause } from '#app/composables/asyncData'

/** Reuse in-memory async data, but let a manual refresh make a fresh request. */
export const cachedInMemory = (
  key: string,
  nuxtApp: NuxtApp,
  ctx: { cause: AsyncDataRefreshCause },
) =>
  ctx.cause === 'refresh:manual'
    ? undefined
    : (nuxtApp.payload.data[key] ?? nuxtApp.static.data[key])
