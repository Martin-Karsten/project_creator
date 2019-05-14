import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const log = console // on server-side, consola will catch all console.log
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations']
let store = {}

void (function updateModules() {
  store = normalizeRoot(require('@/store/index.js'), 'store/index.js')

  // If store is an exported method = classic mode (deprecated)

  if (typeof store === 'function') {
    return log.warn('Classic mode for store/ is deprecated and will be removed in Nuxt 3.')
  }

  // Enforce store modules
  store.modules = store.modules || {}

  resolveStoreModules(require('@/store/PresentationMode.js'), 'PresentationMode.js')
  resolveStoreModules(require('@/store/auth.js'), 'auth.js')
  resolveStoreModules(require('@/store/lang.js'), 'lang.js')
  resolveStoreModules(require('@/store/Layout.js'), 'Layout.js')
  resolveStoreModules(require('@/store/LayoutHelpers.js'), 'LayoutHelpers.js')
  resolveStoreModules(require('@/store/LayoutItem.js'), 'LayoutItem.js')
  resolveStoreModules(require('@/store/ColorPicker.js'), 'ColorPicker.js')
  resolveStoreModules(require('@/store/EditContainer.js'), 'EditContainer.js')
  resolveStoreModules(require('@/store/Project.js'), 'Project.js')
  resolveStoreModules(require('@/store/schema.js'), 'schema.js')
  resolveStoreModules(require('@/store/sidebar-default.js'), 'sidebar-default.js')
  resolveStoreModules(require('@/store/Sidebar.js'), 'Sidebar.js')
  resolveStoreModules(require('@/store/SidebarImage.js'), 'SidebarImage.js')
  resolveStoreModules(require('@/store/SidebarTextfield.js'), 'SidebarTextfield.js')
  resolveStoreModules(require('@/store/StartMenu.js'), 'StartMenu.js')
  resolveStoreModules(require('@/store/ContextMenus/ContextMenu.js'), 'ContextMenus/ContextMenu.js')
  resolveStoreModules(require('@/store/ContextMenus/TextfieldContextMenu.js'), 'ContextMenus/TextfieldContextMenu.js')
  resolveStoreModules(require('@/store/ContextMenus/WebImageContextMenu.js'), 'ContextMenus/WebImageContextMenu.js')
  resolveStoreModules(require('@/store/StartMenus/StartMenuTable.js'), 'StartMenus/StartMenuTable.js')
  resolveStoreModules(require('@/store/LayoutItems/Chart.js'), 'LayoutItems/Chart.js')
  resolveStoreModules(require('@/store/LayoutItems/Table.js'), 'LayoutItems/Table.js')
  resolveStoreModules(require('@/store/ContextMenus/ChartContextMenu.js'), 'ContextMenus/ChartContextMenu.js')
  resolveStoreModules(require('@/store/LayoutItems/WebImage.js'), 'LayoutItems/WebImage.js')
  resolveStoreModules(require('@/store/StartMenus/StartMenu.js'), 'StartMenus/StartMenu.js')
  resolveStoreModules(require('@/store/StartMenus/StartMenuAnimations.js'), 'StartMenus/StartMenuAnimations.js')
  resolveStoreModules(require('@/store/StartMenus/StartMenuDefault.js'), 'StartMenus/StartMenuDefault.js')
  resolveStoreModules(require('@/store/LayoutItems/Textfield.js'), 'LayoutItems/Textfield.js')

  // If the environment supports hot reloading...

  if (process.client && module.hot) {
    // Whenever any Vuex module is updated...
    module.hot.accept([
      '@/store/PresentationMode.js',
      '@/store/auth.js',
      '@/store/index.js',
      '@/store/lang.js',
      '@/store/Layout.js',
      '@/store/LayoutHelpers.js',
      '@/store/LayoutItem.js',
      '@/store/ColorPicker.js',
      '@/store/EditContainer.js',
      '@/store/Project.js',
      '@/store/schema.js',
      '@/store/sidebar-default.js',
      '@/store/Sidebar.js',
      '@/store/SidebarImage.js',
      '@/store/SidebarTextfield.js',
      '@/store/StartMenu.js',
      '@/store/ContextMenus/ContextMenu.js',
      '@/store/ContextMenus/TextfieldContextMenu.js',
      '@/store/ContextMenus/WebImageContextMenu.js',
      '@/store/StartMenus/StartMenuTable.js',
      '@/store/LayoutItems/Chart.js',
      '@/store/LayoutItems/Table.js',
      '@/store/ContextMenus/ChartContextMenu.js',
      '@/store/LayoutItems/WebImage.js',
      '@/store/StartMenus/StartMenu.js',
      '@/store/StartMenus/StartMenuAnimations.js',
      '@/store/StartMenus/StartMenuDefault.js',
      '@/store/LayoutItems/Textfield.js',
    ], () => {
      // Update `root.modules` with the latest definitions.
      updateModules()
      // Trigger a hot update in the store.
      window.$nuxt.$store.hotUpdate(store)
    })
  }
})()

// createStore
export const createStore = store instanceof Function ? store : () => {
  return new Vuex.Store(Object.assign({
    strict: (process.env.NODE_ENV !== 'production')
  }, store))
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData
  // Remove store src + extension (./foo/index.js -> foo/index)
  const namespace = filename.replace(/\.(js|mjs|ts)$/, '')
  const namespaces = namespace.split('/')
  let moduleName = namespaces[namespaces.length - 1]
  const filePath = `store/${filename}`

  moduleData = moduleName === 'state'
    ? normalizeState(moduleData, filePath)
    : normalizeModule(moduleData, filePath)

  // If src is a known Vuex property
  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName
    const storeModule = getStoreModule(store, namespaces, { isProperty: true })

    // Replace state since it's a function
    mergeProperty(storeModule, moduleData, property)
    return
  }

  // If file is foo/index.js, it should be saved as foo
  const isIndexModule = (moduleName === 'index')
  if (isIndexModule) {
    namespaces.pop()
    moduleName = namespaces[namespaces.length - 1]
  }

  const storeModule = getStoreModule(store, namespaces)

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property)
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced
  }
}

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`)
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData)
  }
  return normalizeModule(moduleData, filePath)
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    log.warn(`${filePath} should export a method that returns an object`)
    const state = Object.assign({}, moduleData)
    return () => state
  }
  return normalizeModule(moduleData, filePath)
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    log.warn(`'state' should be a method that returns an object in ${filePath}`)
    const state = Object.assign({}, moduleData.state)
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, { state: () => state })
  }
  return moduleData
}

function getStoreModule(storeModule, namespaces, { isProperty = false } = {}) {
  // If ./mutations.js
  if (!namespaces.length || (isProperty && namespaces.length === 1)) {
    return storeModule
  }

  const namespace = namespaces.shift()

  storeModule.modules[namespace] = storeModule.modules[namespace] || {}
  storeModule.modules[namespace].namespaced = true
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {}

  return getStoreModule(storeModule.modules[namespace], namespaces, { isProperty })
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) return

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData)
  }
}
