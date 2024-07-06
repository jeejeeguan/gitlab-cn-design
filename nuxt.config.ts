// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "nuxt-svgo-loader"],
  svgoLoader: {
    svgo: false,
  },
});
