import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-11-18',
  ssr: true,
  modules: ['@nuxt/eslint', '@nuxt/image'],
  css: ['~/assets/css/fonts.css', '~/assets/css/main.css'],
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    public: {
      apiBase:
        process.env.NUXT_PUBLIC_API_BASE || 'https://rickandmortyapi.com/api',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
