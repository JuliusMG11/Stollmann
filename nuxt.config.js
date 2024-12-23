export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'website',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',

    '@nuxtjs/style-resources',

    '@nuxtjs/google-fonts',
    
    ['@nuxtjs/eslint-module', {
      fix: true
    }]
  ],

  styleResources: {
    scss: [
      '~assets/scss/main.scss',
      '~assets/scss/mixins.scss',
      '~assets/scss/variables.scss',
      '~assets/scss/responsive.scss',
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce : 'pre',
          test    : /\.(js|vue)$/,
          loader  : 'eslint-loader',
          exclude : /(node_modules)/,
          options : {
              fix : true
          }
        });
      }
    }
  },

  googleFonts: {
    families: {
      // basic
      Rubik: [300, 400, 500, 600, 700, 800, 900],

    }
  }
}
