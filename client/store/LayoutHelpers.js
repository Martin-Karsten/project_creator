import axios from 'axios'

export const state = () => ({
  toolboxes: [],
  webVideoUrl: ''
})

// getters
export const getters = {
  getToolboxes: state => state.toolboxes,
}

// mutations
export const mutations = {
    SET_TOOLBOXES(state, payload){
        state.toolboxes = payload.map(item => ({ isEmpty: item.isEmpty, urlInputActivated: !item.isEmpty}));
    },

    SHOW_TOOLBAR(state, payload){
        state.toolboxes[payload].isEmpty = true
    },

    HIDE_TOOLBAR(state, payload){
        state.toolboxes[payload].isEmpty = false
    },

    SHOW_URL_INPUT(state, payload){
        state.toolboxes[payload].urlInputActivated = true
    },

    HIDE_URL_INPUT(state, payload){
        state.toolboxes[payload].urlInputActivated = false
    },

    ADD_TOOLBOX(state, payload){
        state.toolboxes.push({ isEmpty: true, urlInputActivated: false})
    },

}

export const actions = {

initialize({state, commit, rootGetters}, payload) {
        // state.toolboxes = rootGetters['Layout/getLayouts']
        commit('SET_TOOLBOXES', payload)
    }
}
