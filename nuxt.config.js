export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sikayet.in',
    htmlAttrs: {
      lang: 'tr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css' },
      { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css' },
    ],
    script: [
      { src: '//code.jquery.com/jquery-3.6.0.min.js' },
      { src: '//code.jquery.com/jquery-migrate-1.2.1.min.js' },
      { src: '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/css/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
