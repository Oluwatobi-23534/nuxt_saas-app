export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/supabase', 'nuxt-icon'],
  components: [
    {
      path: '~/components/ui',
      extensions: ['.vue'],
      pathPrefix: false
    },
    {
      path: '~/components',
      extensions: ['.vue'],
      pathPrefix: false
    },
  ],
  supabase: {
    redirectOptions: {
      login: '/auth',
      callback: '/confirm',
      include: undefined,
      exclude: ['/'],
      cookieRedirect: false,
    }
  }
})
