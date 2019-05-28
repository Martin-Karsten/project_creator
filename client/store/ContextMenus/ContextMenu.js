export const state = () => ({
  contextMenu: {
    name: "",
    activated: false,
    layoutRow: 0,
    style: { left: "250px", top: "100px" }
  }
})

export const getters = {
  getContextMenu: state => state.contextMenu
}

export const mutations = {
  OPEN_CONTEXT_MENU(state, payload) {
    state.contextMenu = payload
  },
  CLOSE_CONTEXT_MENU(state, payload) {
    state.contextMenu.activated = false
  }
}

export const actions = {
  openContextMenu({ state, commit, rootGetters }, payload) {
    switch (payload.name) {
      case "WebImageContextMenu":
        commit("ContextMenus/WebImageContextMenu/OPEN_CONTEXT_MENU", payload, {
          root: true
        })
        let webImage =
          rootGetters["ContextMenus/WebImageContextMenu/getContextMenu"]
        commit("OPEN_CONTEXT_MENU", webImage)
        break

      case "TextfieldContextMenu":
        commit("ContextMenus/TextfieldContextMenu/OPEN_CONTEXT_MENU", payload, {
          root: true
        })
        let textfield =
          rootGetters["ContextMenus/TextfieldContextMenu/getContextMenu"]
        commit("OPEN_CONTEXT_MENU", textfield)
        break

      case "ChartContextMenu":
        commit("ContextMenus/ChartContextMenu/OPEN_CONTEXT_MENU", payload, {
          root: true
        })
        let chart = rootGetters["ContextMenus/ChartContextMenu/getContextMenu"]
        commit("OPEN_CONTEXT_MENU", chart)
        break

        case "WebVideoContextMenu":
        commit("ContextMenus/WebVideoContextMenu/OPEN_CONTEXT_MENU", payload, {
          root: true
        })
        let webVideo = rootGetters["ContextMenus/WebVideoContextMenu/getContextMenu"]
        commit("OPEN_CONTEXT_MENU", webVideo)
        break    
    }
  },

  openSidebarScrollerContextMenu({state, commit, rootGetters}, payload){
    commit("ContextMenus/SidebarScrollerContextMenu/OPEN_CONTEXT_MENU", payload, {
      root: true
    })
    let menu = rootGetters["ContextMenus/SidebarScrollerContextMenu/getContextMenu"]
    commit("OPEN_CONTEXT_MENU", menu)    
  },

  closeContextMenu({ state, commit, rootGetters }, payload) {
    commit("ContextMenus/WebImageContextMenu/CLOSE_CONTEXT_MENU", payload, {
      root: true
    })
    commit("CLOSE_CONTEXT_MENU")
  },

  deleteItem({ state, commit, rootGetters }, payload) {}
}
