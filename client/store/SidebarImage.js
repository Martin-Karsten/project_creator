//state
export const state = () => ({
  sidebarImage: [{ id: 0, name: "sidebarImage", width: 500, height: 250 }],
  index: 0
})

export const getters = {
  getSidebarImage: state => state.sidebarImage
}

export const mutations = {
  SWITCH_COMPONENT(state, payload) {
    state.comp = payload.name
    state.sidebar.push({ id: payload.id, name: payload.name })
  },
  ADD_COMPONENT(state, payload) {
    if (payload == 0) {
      state.sidebarImage[0] = {
        id: payload,
        name: "sidebarImage",
        fontSize: 12,
        fontColor: "black"
      }
    } else
      state.sidebarImage.push({
        id: payload,
        name: "sidebarImage",
        fontSize: 12,
        fontColor: "black"
      })
  },
  SET_INDEX(state, payload) {
    state.index = payload
    console.log(payload)
  },
  SET_WIDTH(state, payload) {
    state.sidebarImage[0].fontSize = "red"
  },
  SET_HEIGHT(state, payload) {
    if (payload >= 0) {
      state.sidebarImage[0].fontSize = payload
    }
  }
}
