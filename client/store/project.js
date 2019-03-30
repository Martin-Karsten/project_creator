import axios from 'axios'


// state
export const state = () => ({
  projects: []
})

// getters
export const getters = {
  getProjects: state => state.projects,

}

// mutations
export const mutations = {

  CREATE_PROJECT (state, payload) {
    state.projects.push({project_name: payload.project_name, user_id: payload.user_id, private: payload.private})
  },

  FETCH_PROJECTS_SUCCESS (state, projects) {
    state.projects = projects
  },

  FETCH_PROJECTS_FAILURE (state) {
    state.projects = null
  },

}

// actions
export const actions = {

  async fetchProjects({commit}){
    try {
      const { data } = await axios.get('/user/projects')
      commit('FETCH_PROJECTS_SUCCESS', data)
    } catch (e) {

      commit('FETCH_PROJECTS_FAILURE')
    }
  },

  // async fetchProject ({ commit }) {
  //   try {
  //     const { data } = await axios.get('/user')

  //     commit('FETCH_USER_SUCCESS', data)
  //   } catch (e) {
  //     Cookies.remove('token')

  //     commit('FETCH_USER_FAILURE')
  //   }
  // },

  async createProject({ commit}, payload){
    commit('CREATE_PROJECT', payload)
  },

  updateProject ({ commit }, payload) {
    commit('UPDATE_PROJECT', payload)
  },

}
