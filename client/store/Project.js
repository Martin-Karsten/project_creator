import axios from 'axios'


// state
export const state = () => ({
  projects: [],
  pagination: 1
})

// getters
export const getters = {
  getProjects: state => state.projects,
}

// mutations
export const mutations = {

  SHOW_EDITABLE (state, payload){
    state.projects[payload].editable = true
  },

  HIDE_EDITABLE (state, payload){
    state.projects[payload].editable = false
  },

  SELECT_PROJECT (state, payload) {
    state.projects[payload].selected = !state.projects[payload].selected
  },

  CREATE_PROJECT (state, payload) {
    state.projects.unshift(payload)
    // state.projects.unshift(payload.id, {project_name: payload.project_name, user_id: payload.user_id, private: payload.private, textfields: [], images: [], tables: [], charts: [], shapes: []})
  },

  FETCH_PROJECTS_SUCCESS (state, payload) {
    console.log(payload.data)
    let newP = payload.data.map(function (project) {
      return {id:project.id, project_name:project.project_name, created_at:project.created_at, clicked:false, editable: false}
    });
    state.projects = newP
  },

  FETCH_PROJECTS_FAILURE (state, payload) {
    state.projects = null
    console.log(payload)
  },

  DELETE_PROJECT (state, payload) {
    for( let i = 0; i < state.projects.length; i++){ 
      if ( state.projects[i].id === payload) {
        state.projects.splice(i, 1); 
        return
      }
   }
  }

}

export const actions = {

  async fetchProjects({commit}){
    try {
      const { data } = await axios.get('/user/projects')
      commit('FETCH_PROJECTS_SUCCESS', data.data)
    } catch (e) {
      commit('FETCH_PROJECTS_FAILURE')
    }
  },

  async changeNumber({state,commit}, response){
    commit('FETCH_PROJECTS_SUCCESS', response.data.data)
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
