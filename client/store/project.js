import axios from 'axios'


// state
export const state = () => ({
  user: null,
  project: {name: '', user_id: ''}
})

// getters
export const getters = {
  user: state => state.user,

}

// mutations
export const mutations = {
  LOGOUT (state) {
    state.user = null
    state.token = null
  },

  SET_PROJECT (state, payload) {
    state.project.name = payload.projectName
    state.project.user_id = payload.userId
  }

}

// actions
export const actions = {

  async createProjejct({ commit}, payload){
    commit('SET_PROJECT', payload)
    
    try {
      await axios.post('user/project/create')
    } catch (e) {}
  },

  saveToken ({ commit, dispatch }, { token, remember }) {
    commit('SET_TOKEN', token)

    Cookies.set('token', token, { expires: remember ? 365 : null })
  },

  updateUser ({ commit }, payload) {
    commit('UPDATE_USER', payload)
  },

  async logout ({ commit }) {
    try {
      await axios.post('/logout')
    } catch (e) { }

    Cookies.remove('token')

    commit('LOGOUT')
  },

}
