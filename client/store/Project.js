import axios from "axios"
import Vue from 'vue'

// state
export const state = () => ({
  projects: [],
  pagination: 1
})

// getters
export const getters = {
  getProjects: state => state.projects
}

// mutations
export const mutations = {
  SHOW_EDITABLE(state, payload) {
    state.projects[payload].editable = true
  },

  HIDE_EDITABLE(state, payload) {
    state.projects[payload].editable = false
  },

  SELECT_PROJECT(state, payload) {
    state.projects[payload].selected = true
  },

  DESELECT_PROJECT(state, payload){
    state.projects[payload].selected = false
  },

  MAKE_RENAMEABLE(state, payload) {
    // Vue.set(state.projects, payload, payload)
    state.projects[payload].rename = true
  },

  CHANGE_PROJECT_NAME(state, payload) {
    state.projects[payload.index].project_name = payload.value
    state.projects[payload.index].rename = false
    state.projects[payload.index].selected = false
  },

  CREATE_PROJECT(state, payload) {
    state.projects.unshift(payload)
  },

  FETCH_PROJECTS_SUCCESS(state, payload) {
    let newP = payload.data.map(function(project) {
      return {
        id: project.id,
        project_name: project.project_name,
        created_at: project.created_at,
        updated_at: project.updated_at,
        clicked: false,
        editable: false,
        rename: false,
      }
    })
    state.projects = newP
  },

  FETCH_PROJECTS_FAILURE(state, payload) {
    state.projects = null
  },

  PAGINATE_FETCH_PROJECTS_SUCCESS(state, payload){
    let newP = payload.data.map(function(project) {
      return {
        id: project.id,
        project_name: project.project_name,
        created_at: project.created_at,
        updated_at: project.updated_at,
        clicked: false,
        editable: false,
        rename: false,
      }
    })
    state.projects.push(...newP)
  },

  PAGINATE_FETCH_PROJECTS_FAILURE(state, payload){

  },

  DELETE_PROJECT(state, payload) {
    state.projects.splice(payload, 1)
  },

  DELETE_PROJECTS(state, payload) {
    state.projects = state.projects.filter( ( el ) => !payload.includes( el.id ) );
  }
}

export const actions = {
  async fetchProjects({ commit }) {
    try {
      const { data } = await axios.get("/user/projects")
      commit("FETCH_PROJECTS_SUCCESS", data)
    } catch (e) {
      commit("FETCH_PROJECTS_FAILURE")
    }
  },

  async changeNumber({ state, commit }, payload) {
    commit("PAGINATE_FETCH_PROJECTS_SUCCESS", payload.data)
  },

  async createProject({ commit }, payload) {
    commit("CREATE_PROJECT", payload)
  },

  updateProject({ commit }, payload) {
    commit("UPDATE_PROJECT", payload)
  },
}
