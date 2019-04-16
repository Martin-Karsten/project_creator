import axios from 'axios'

export const state = () => ({
    editContainer: {activated: false, row: 0}
})

export const getters = {
  getEditContainer: state => state.editContainer,
}

export const mutations = {
    OPEN_EDIT_CONTAINER (state, payload) {
        state.editContainer.activated = true
        state.editContainer.row = payload
    },
    CLOSE_EDIT_CONTAINER (state, payload) {
        state.editContainer.activated = false
    }
}
export const actions = {

}
