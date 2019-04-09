import axios from 'axios'

export const state = () => ({
    textfields: [], // [{id:0, text:'ifjs'},{id:1, text:'222222222222'}],
    currentTextfield: {id: 0, dim: 0, comp: 'textfield', font:'Calibri', size: 18, color: 'red', text:''},
  })

export const getters = {
    getTextfields: state => state.textfields,
    getCurrentTextfield: state => state.currentTextfield,
  }

export const mutations = {
FETCH_TEXTFIELDS_SUCCESS (state, payload) {
  state.textfields = [...payload]
  // console.log(state.textfields)
},

FETCH_TEXTFIELDS_FAILURE () {
  state.textfields = null
  console.log('fetching failed')
},
ADD_TEXTFIELD(state, payload) {
  state.textfields.push({id: state.textfields.length, name: 'zero', text: ''})
},
SWITCH_COMPONENT (state, payload) {
    state.comp = payload.name
    state.sidebar.push({id: payload.id ,name: payload.name})
    },
ADD_COMPONENT (state, payload) {
    state.textfields[payload].push(state.textfields.length)
  },   

CURRENT_SELECTION (state, payload) {
    state.currentTextfield = state.textfields[payload.dim][payload.id]
  },

UPDATE_FIELD (state, payload){
  state.current = payload
  state.fields[state.current.dim][state.current.id].TEXT = state.current.text
},

UPDATE_FONT_TYPE (state, payload){
    state.currentTextfield.font = payload
    state.textfields[state.currentTextfield.dim][state.currentTextfield.id].font = state.currentTextfield.font
  },

UPDATE_FONT_SIZE (state, payload){
    state.currentTextfield.size = payload
    state.textfields[state.currentTextfield.dim][state.currentTextfield.id].size = state.currentTextfield.size
  },

UPDATE_TEXT (state, payload){
  state.currentTextfield.text = payload
  state.textfields[state.currentTextfield.dim][state.currentTextfield.id].text = state.currentTextfield.text
  console.log(state.textfields)
  }
}

export const actions ={
  async fetchTextfields({commit}, id){
    try {
      const { data } = await axios.get(`/user/project/${id}/textfields`)
      commit('FETCH_TEXTFIELDS_SUCCESS', data)
    } catch (e) {
      console.log(e)
      commit('FETCH_TEXTFIELDS_FAILURE')
    }
  },
  async createTextfield({commit}){

  },
  async addItem({commit, rootSetters, rootGetters}, payload) {

  }
}