
export const state = () => ({
    contextMenu: {name:'WebImageContextMenu', activated: false, row: 0, style: {left: "100px", top: "100px"}}
})

export const getters = {
  getContextMenu: state => state.contextMenu,
}

export const mutations = {
    OPEN_CONTEXT_MENU (state, payload) {
        state.contextMenu.activated = true
        state.contextMenu.row = payload.row
        state.contextMenu.style.left = payload.x
        state.contextMenu.style.top = payload.y
    },
    CLOSE_CONTEXT_MENU (state, payload) {
        state.contextMenu.activated = false
    }
}
export const actions = {

}
