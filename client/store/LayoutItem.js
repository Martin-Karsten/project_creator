//state
export const state = () => ({
    LayoutItem: [0,1],
    itemCreatorActivated: false
  })

export const getters = {
    getLayoutItem: state => state.LayoutItem,
    getItemCreatorActivated: state => state.itemCreatorActivated
  }

export const mutations = {
SWITCH_COMPONENT (state, payload) {
    state.comp = payload.name
    state.sidebar.push({id: payload.id ,name: payload.name})
    },
SET_ITEM_CREATOR(state, payload) {
    state.itemCreatorActivated = payload
    },   
}