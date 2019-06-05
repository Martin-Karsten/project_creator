require('dotenv').config();
import  nodeExternals from 'webpack-node-externals'

const polyfills = [
  'Promise',
  'Object.assign',
  'Object.values',
  'Array.prototype.find',
  'Array.prototype.findIndex',
  'Array.prototype.includes',
  'String.prototype.includes',
  'String.prototype.startsWith',
  'String.prototype.endsWith'
]

module.exports = {
  // mode: 'spa',

  srcDir: __dirname,

  env: {
    apiUrl: process.env.APP_URL || 'http://localhost:8000/',
    appName: process.env.VUE_APP_NAME || 'Laravel-Nuxt',
    appLocale: process.env.APP_LOCALE || 'en',
    unsplashApplicationId: process.env.VUE_APP_UNSPLASH_ACCESS_KEY,
    unsplashSecret: process.env.VUE_APP_UNSPLASH_SECRET_KEY,
    githubAuth: !!process.env.GITHUB_CLIENT_ID
  },

  head: {
    title: process.env.VUE_APP_NAME || 'TITLE',
    titleTemplate: '%s - ' + process.env.VUE_APP_NAME || 'TITLE TEMPLATE',    
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: `https://cdn.polyfill.io/v2/polyfill.min.js?features=${polyfills.join(',')}` }
    ]
  },

  loading: { color: '#007bff' },

  router: {
    middleware: ['locale', 'check-auth']
  },

  css: [
    { src: '~assets/sass/app.scss', lang: 'scss' },
  ],

  plugins: [
    '~components/global',
    '~plugins/i18n',
    '~plugins/vform',
    '~plugins/axios',
    '~plugins/fontawesome',
    '~plugins/vue-scrollto',
    {src: 'plugins/color-picker', ssr: false},
    { src: '~plugins/vue-echarts.js', ssr: false},
    { src: '~/plugins/vuex-persist', ssr: false },
    // '~plugins/nuxt-client-init',
  ],

  modules: [
    '@nuxtjs/router',
    '~/modules/spa',
    'vue-scrollto/nuxt',
  ],

  lintOnSave: true,

  build: {
    transpile: ['vue-echarts', 'resize-detector'],
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: "pre",
    //       test: /\.(js|vue)$/,
    //       loader: "eslint-loader",
    //       exclude: /(node_modules)/,
    //       options : {
    //         fix : true
    //     }
    //     })
    //   }
    // }
  }
}
