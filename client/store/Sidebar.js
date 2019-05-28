//state
export const state = () => ({
  sidebar: {
    comp: "",
    scrollerActivated: false,
    animationListActivated: false
  },
  sidebarScroller: [1, 2]
})

export const getters = {
  getSidebar: state => state.sidebar,
  getSidebarScroller: state => state.sidebarScroller
}

export const mutations = {
  ACTIVATE_SCROLLER(state, payload) {
    state.sidebar.scrollerActivated = !state.sidebar.scrollerActivated
  }
}
export const actions = {}
