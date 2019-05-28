export const state = () => ({
  startMenu: { name: "StartMenuDefault", activated: false },
  editor: null
})

export const getters = {
  getStartMenu: state => state.startMenu,
  getEditor: state => state.editor
}

export const mutations = {
  OPEN_START_MENU(state, payload) {
    state.startMenu = payload
  },
  CLOSE_START_MENU(state, payload) {
    state.startMenu = ""
  },
  SET_EDITOR(state, payload) {
    state.editor = payload
  }
}

export const actions = {
  openStartMenu({ state, commit, rootGetters }, payload) {
    switch (payload.name) {
      case "WebImageContextMenu":
        commit("ContextMenus/WebImageContextMenu/OPEN_CONTEXT_MENU", payload, {
          root: true
        })
        commit("OPEN_CONTEXT_MENU", payload)
    }
  },
  closeContextMenu({ state, commit, rootGetters }, payload) {
    commit("ContextMenus/WebImageContextMenu/CLOSE_CONTEXT_MENU", payload, {
      root: true
    })
    commit("CLOSE_CONTEXT_MENU")
  }
}
