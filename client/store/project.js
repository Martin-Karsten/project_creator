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
    state.projects.push(payload.id, {project_name: payload.project_name, user_id: payload.user_id, private: payload.private, textfields: [], images: [], tables: [], charts: [], shapes: []})
  },

  FETCH_PROJECTS_SUCCESS (state, projects) {
    state.projects = projects
  },

  FETCH_PROJECTS_FAILURE (state) {
    state.projects = null
  },

  DELETE_PROJECT (state, payload) {
    for( let i = 0; i < state.projects.length; i++){ 
      if ( state.projects[i].id === payload) {
        state.projects.splice(i, 1); 
      }
   }
  }

}

export const actions = {

  async fetchProjects({commit}){
    try {
      const { data } = await axios.get('/user/projects')
      commit('FETCH_PROJECTS_SUCCESS', data)
    } catch (e) {

      commit('FETCH_PROJECTS_FAILURE')
    }
  },

  async createProject({ commit}, payload){
    commit('CREATE_PROJECT', payload)
  },

  updateProject ({ commit }, payload) {
    commit('UPDATE_PROJECT', payload)
  },

  async fetchTextfields({commit}, payload){
    try {
      const { data } = await axios.get(`/user/project/${payload.id}/textfields`)
      commit('FETCH_TEXTFIELDS_SUCCESS', data)
    } catch (e) {
      commit('FETCH_TEXTFIELDS_FAILURE')
    }
  },

  saveToDB() {
    axios.post('')
  }
}
