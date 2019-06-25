import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const log = console // on server-side, consola will catch all console.log
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations']
let store = {}

void (function updateModules() {
  store = normalizeRoot(require('../client/store/index.js'), 'store/index.js')

  // If store is an exported method = classic mode (deprecated)

  // Enforce store modules
  store.modules = store.modules || {}

  resolveStoreModules(require('../client/store/Layout.js'), 'Layout.js')
  resolveStoreModules(require('../client/store/auth.js'), 'auth.js')
  resolveStoreModules(require('../client/store/SidebarImage.js'), 'SidebarImage.js')
  resolveStoreModules(require('../client/store/Sidebar.js'), 'Sidebar.js')
  resolveStoreModules(require('../client/store/EditContainer.js'), 'EditContainer.js')
  resolveStoreModules(require('../client/store/lang.js'), 'lang.js')
  resolveStoreModules(require('../client/store/SidebarTextfield.js'), 'SidebarTextfield.js')
  resolveStoreModules(require('../client/store/LayoutHelpers.js'), 'LayoutHelpers.js')
  resolveStoreModules(require('../client/store/LayoutItem.js'), 'LayoutItem.js')
  resolveStoreModules(require('../client/store/ColorPicker.js'), 'ColorPicker.js')
  resolveStoreModules(require('../client/store/PresentationMode.js'), 'PresentationMode.js')
  resolveStoreModules(require('../client/store/Project.js'), 'Project.js')
  resolveStoreModules(require('../client/store/schema.js'), 'schema.js')
  resolveStoreModules(require('../client/store/sidebar-default.js'), 'sidebar-default.js')
  resolveStoreModules(require('../client/store/ContextMenus/SidebarScrollerContextMenu.js'), 'ContextMenus/SidebarScrollerContextMenu.js')
  resolveStoreModules(require('../client/store/LayoutItems/Chart.js'), 'LayoutItems/Chart.js')
  resolveStoreModules(require('../client/store/StartMenus/StartMenuAnimations.js'), 'StartMenus/StartMenuAnimations.js')
  resolveStoreModules(require('../client/store/LayoutItems/Shapes.js'), 'LayoutItems/Shapes.js')
  resolveStoreModules(require('../client/store/LayoutItems/Table.js'), 'LayoutItems/Table.js')
  resolveStoreModules(require('../client/store/LayoutItems/Textfield.js'), 'LayoutItems/Textfield.js')
  resolveStoreModules(require('../client/store/LayoutItems/WebImage.js'), 'LayoutItems/WebImage.js')
  resolveStoreModules(require('../client/store/LayoutItems/WebVideo.js'), 'LayoutItems/WebVideo.js')
  resolveStoreModules(require('../client/store/StartMenus/StartMenu.js'), 'StartMenus/StartMenu.js')
  resolveStoreModules(require('../client/store/StartMenus/StartMenuTable.js'), 'StartMenus/StartMenuTable.js')
  resolveStoreModules(require('../client/store/ContextMenus/ContextMenu.js'), 'ContextMenus/ContextMenu.js')
  resolveStoreModules(require('../client/store/StartMenus/StartMenuDefault.js'), 'StartMenus/StartMenuDefault.js')
  resolveStoreModules(require('../client/store/ContextMenus/LayoutItems/WebVideoContextMenu.js'), 'ContextMenus/LayoutItems/WebVideoContextMenu.js')
  resolveStoreModules(require('../client/store/ContextMenus/LayoutItems/WebImageContextMenu.js'), 'ContextMenus/LayoutItems/WebImageContextMenu.js')
  resolveStoreModules(require('../client/store/ContextMenus/LayoutItems/TextfieldContextMenu.js'), 'ContextMenus/LayoutItems/TextfieldContextMenu.js')
  resolveStoreModules(require('../client/store/ContextMenus/LayoutItems/TableContextMenu.js'), 'ContextMenus/LayoutItems/TableContextMenu.js')
  resolveStoreModules(require('../client/store/ContextMenus/LayoutItems/ChartContextMenu.js'), 'ContextMenus/LayoutItems/ChartContextMenu.js')
  resolveStoreModules(require('../client/store/LayoutItems/Interact/Button.js'), 'LayoutItems/Interact/Button.js')
  resolveStoreModules(require('../client/store/ContextMenus/LayoutItems/Interact/ButtonContextMenu.js'), 'ContextMenus/LayoutItems/Interact/ButtonContextMenu.js')

  // If the environment supports hot reloading...
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
