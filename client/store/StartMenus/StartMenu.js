export const state = () => ({
  startMenu: { name: "StartMenuDefault" },
  startMenuIcons: [
    { activated: false },
    { activated: false },
    { activated: false },
    { activated: false },
    { activated: false },
    { activated: false, shape: "" }
  ]
})

export const getters = {
  getStartMenu: state => state.startMenu,
  getStartMenuIcons: state => state.startMenuIcons
}

export const mutations = {
  OPEN_START_MENU(state, payload) {
    state.startMenu = payload
  },
  CLOSE_START_MENU(state, payload) {
    state.startMenu = ""
  },

  ACTIVATE_ICON(state, payload) {
    let obj = {
      activated: true,
      shape: payload.shape
    }
    state.startMenuIcons.splice(payload.index, 1, { ...obj })
  },
  SET_ICON_TO_FALSE(state, paylod) {
    state.startMenuIcons[paylod.index].activated = false
  }
}

export const actions = {
  openStartMenu({ state, commit, rootGetters }, payload) {
    switch (payload.name) {
      case "StartMenuDefault":
        commit("StartMenus/StartMenuDefault/OPEN_START_MENU", payload, {
          root: true
        })
        let p1 = rootGetters["StartMenus/StartMenuDefault/getStartMenu"]
        commit("OPEN_START_MENU", p1)
        break
      case "StartMenuAnimations":
        commit("StartMenus/StartMenuAnimations/OPEN_START_MENU", payload, {
          root: true
        })
        let p2 = rootGetters["StartMenus/StartMenuAnimations/getStartMenu"]
        commit("OPEN_START_MENU", p2)
        break
    }
  },
  closeContextMenu({ state, commit, rootGetters }, payload) {
    commit("ContextMenus/WebImageContextMenu/CLOSE_CONTEXT_MENU", payload, {
      root: true
    })
    commit("CLOSE_CONTEXT_MENU")
  }
}
