export const state = () => ({
    layout:[{name: 'zero', id: 0},{name: 'one', id: 1}]
  })

export const getters = {
    getLayout: state => state.layout
  }

export const mutations = {
UPDATE_LAYOUT(state, payload) {
        state.layout = payload
    },
ADD_ITEM(state, payload) {
    state.layout.push(payload)
}
}

export const actions = {

}