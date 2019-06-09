import Vue from 'vue'
import Meta from 'vue-meta'
import { createRouter } from './router.js'
import NoSsr from './components/no-ssr.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_vuescrollto_392955dc from 'nuxt_plugin_vuescrollto_392955dc' // Source: ./vue-scrollto.js (mode: 'client')
import nuxt_plugin_router_6bb3f5c2 from 'nuxt_plugin_router_6bb3f5c2' // Source: ./router.js (mode: 'all')
import nuxt_plugin_global_0a6ae274 from 'nuxt_plugin_global_0a6ae274' // Source: ../client/components/global (mode: 'all')
import nuxt_plugin_i18n_56ca5e75 from 'nuxt_plugin_i18n_56ca5e75' // Source: ../client/plugins/i18n (mode: 'all')
import nuxt_plugin_vform_f95cee7a from 'nuxt_plugin_vform_f95cee7a' // Source: ../client/plugins/vform (mode: 'all')
import nuxt_plugin_axios_fb9c9a02 from 'nuxt_plugin_axios_fb9c9a02' // Source: ../client/plugins/axios (mode: 'all')
import nuxt_plugin_fontawesome_773d88fd from 'nuxt_plugin_fontawesome_773d88fd' // Source: ../client/plugins/fontawesome (mode: 'all')
import nuxt_plugin_vuescrollto_15afb874 from 'nuxt_plugin_vuescrollto_15afb874' // Source: ../client/plugins/vue-scrollto (mode: 'all')
import nuxt_plugin_colorpicker_dc745d86 from 'nuxt_plugin_colorpicker_dc745d86' // Source: ../client/plugins/color-picker (mode: 'client')
import nuxt_plugin_vueecharts_06f390fb from 'nuxt_plugin_vueecharts_06f390fb' // Source: ../client/plugins/vue-echarts.js (mode: 'client')
import nuxt_plugin_vuexpersist_13f465a2 from 'nuxt_plugin_vuexpersist_13f465a2' // Source: ../client/plugins/vuex-persist (mode: 'client')
import nuxt_plugin_infiniteloading_e0576c0e from 'nuxt_plugin_infiniteloading_e0576c0e' // Source: ../client/plugins/infinite-loading (mode: 'client')

// Component: <NoSsr>
Vue.component(NoSsr.name, NoSsr)

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>`
Vue.component(Nuxt.name, Nuxt)

// vue-meta configuration
Vue.use(Meta, {
  keyName: 'head', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-n-head', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-n-head-ssr', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'hid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    router,
    store,
    nuxt: {
      defaultTransition,
      transitions: [ defaultTransition ],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [ transitions ]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null
        app.context._errored = !!err
        err = err ? normalizeError(err) : null
        const nuxt = this.nuxt || this.$options.nuxt
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) ssrContext.nuxt.error = err
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    store,
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  const inject = function (key, value) {
    if (!key) throw new Error('inject(key, value) has no key provided')
    if (typeof value === 'undefined') throw new Error('inject(key, value) has no value provided')
    key = '$' + key
    // Add into app
    app[key] = value

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) return
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Vue.prototype.hasOwnProperty(key)) {
        Object.defineProperty(Vue.prototype, key, {
          get() {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Plugin execution

  if (process.client && typeof nuxt_plugin_vuescrollto_392955dc === 'function') {
    await nuxt_plugin_vuescrollto_392955dc(app.context, inject)
  }

  if (typeof nuxt_plugin_router_6bb3f5c2 === 'function') {
    await nuxt_plugin_router_6bb3f5c2(app.context, inject)
  }

  if (typeof nuxt_plugin_global_0a6ae274 === 'function') {
    await nuxt_plugin_global_0a6ae274(app.context, inject)
  }

  if (typeof nuxt_plugin_i18n_56ca5e75 === 'function') {
    await nuxt_plugin_i18n_56ca5e75(app.context, inject)
  }

  if (typeof nuxt_plugin_vform_f95cee7a === 'function') {
    await nuxt_plugin_vform_f95cee7a(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_fb9c9a02 === 'function') {
    await nuxt_plugin_axios_fb9c9a02(app.context, inject)
  }

  if (typeof nuxt_plugin_fontawesome_773d88fd === 'function') {
    await nuxt_plugin_fontawesome_773d88fd(app.context, inject)
  }

  if (typeof nuxt_plugin_vuescrollto_15afb874 === 'function') {
    await nuxt_plugin_vuescrollto_15afb874(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_colorpicker_dc745d86 === 'function') {
    await nuxt_plugin_colorpicker_dc745d86(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueecharts_06f390fb === 'function') {
    await nuxt_plugin_vueecharts_06f390fb(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuexpersist_13f465a2 === 'function') {
    await nuxt_plugin_vuexpersist_13f465a2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_infiniteloading_e0576c0e === 'function') {
    await nuxt_plugin_infiniteloading_e0576c0e(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    store,
    router
  }
}

export { createApp, NuxtError }
