
export const state = () => ({
    editContainer: {name: '', activated: false, layoutRow:0, row: 0}
})

export const getters = {
  getEditContainer: state => state.editContainer,
}

export const mutations = {
    OPEN_EDIT_CONTAINER (state, payload) {
        console.log(payload)
        state.editContainer.activated = true
        state.editContainer.row = payload.row
        state.editContainer.name = payload.name
    },
    CLOSE_EDIT_CONTAINER (state, payload) {
        state.editContainer.activated = false
    }
}
export const actions = {

}
