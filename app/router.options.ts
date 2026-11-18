import type { RouterConfig } from '@nuxt/schema'

export default {
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    if (
      to.path === '/' &&
      from.path === '/' &&
      to.query.page !== from.query.page
    ) {
      return { left: 0, top: 0, behavior: 'smooth' }
    }

    return { left: 0, top: 0 }
  },
} satisfies RouterConfig
