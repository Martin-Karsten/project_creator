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
        commit("ContextMenus/LayoutItems/WebImageContextMenu/OPEN_CONTEXT_MENU", payload, {
          root: true
        })
        let webImage =
          rootGetters["ContextMenus/LayoutItems/WebImageContextMenu/getContextMenu"]
        commit("OPEN_CONTEXT_MENU", webImage)
        break

      case "TextfieldContextMenu":
        commit("ContextMenus/LayoutItems/TextfieldContextMenu/OPEN_CONTEXT_MENU", payload, {
          root: true
        })
        let textfield =
          rootGetters["ContextMenus/LayoutItems/TextfieldContextMenu/getContextMenu"]
        commit("OPEN_CONTEXT_MENU", textfield)
        break

      case "ChartContextMenu":
        commit("ContextMenus/LayoutItems/ChartContextMenu/OPEN_CONTEXT_MENU", payload, {
          root: true
        })
        let chart = rootGetters["ContextMenus/LayoutItems/ChartContextMenu/getContextMenu"]
        commit("OPEN_CONTEXT_MENU", chart)
        break

        case "WebVideoContextMenu":
          commit("ContextMenus/LayoutItems/WebVideoContextMenu/OPEN_CONTEXT_MENU", payload, {
            root: true
          })
          let webVideo = rootGetters["ContextMenus/LayoutItems/WebVideoContextMenu/getContextMenu"]
          commit("OPEN_CONTEXT_MENU", webVideo)
          break    

        case "TableContextMenu":
          commit("ContextMenus/LayoutItems/TableContextMenu/OPEN_CONTEXT_MENU", payload, {
            root: true
          })
          let table = rootGetters["ContextMenus/LayoutItems/TableContextMenu/getContextMenu"]
          commit("OPEN_CONTEXT_MENU", table)
          break

          case "ShapesContextMenu":
          commit("ContextMenus/LayoutItems/TableContextMenu/OPEN_CONTEXT_MENU", payload, {
            root: true
          })
          let shape = rootGetters["ContextMenus/LayoutItems/TableContextMenu/getContextMenu"]
          commit("OPEN_CONTEXT_MENU", shape)
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
