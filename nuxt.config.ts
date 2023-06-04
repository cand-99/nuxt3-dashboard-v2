// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxthq/ui',
    '@nuxtjs/eslint-module',
  ],
  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons'],
  },
})
