import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-11-18',
  ssr: true,
  modules: ['@nuxt/eslint', '@nuxt/image'],
  css: ['~/assets/css/fonts.css', '~/assets/css/main.css'],
  typescript: {
    strict: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
