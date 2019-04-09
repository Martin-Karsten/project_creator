import axios from "axios";

export const state = () => ({
    layout: [],
    currentLayout: [],
    defaultState: {layout: []}
  })

export const getters = {
    getLayout: state => state.layout,
    getCurrentLayout: state => state.currentLayout
  }

export const mutations = {
CREATE_LAYOUT(state, payload) {
  state.layout = [{name: 'zero', id: 0, textfields: [], images: [], charts: [], tables: [], shapes: []},]
},
SET_LAYOUT(state, payload) {
  for(let i=0; i<payload; i++){
    state.layout.push({name: i + '', id: i, textfields: [], images: [], charts: [], tables: [], shapes: []})
  }
},

FETCH_TEXTFIELDS_SUCCESS (state, payload) {
  for(let textfield of payload){
    state.layout[textfield.row-1].textfields.push(textfield) //-1 because row number in DB starts at 1 not 0
  }
  console.log(state.layout)
},

FETCH_TEXTFIELDS_FAILURE () {
  state.layout = null
  console.log('fetching textfields failed')
},

UPDATE_LAYOUT(state, payload) {
        state.layout = payload
    },
ADD_ITEM(state, payload) {
    state.layout.push(payload)
  },
ADD_TEXTFIELD(state, payload) {
  state.layout[payload].textfields.push({id: '', name: 'textfield', font:'Calibri', font_size: 18, color: 'red', text:'', top:0, left:0, width:200, height:100})
},

RESET_LAYOUT(state) {
  state.layout = []
}

}

export const actions = {
  async initialize({state, commit, rootGetters}, payload) {
    let id = payload.id
    try {
      const { data } = await axios.get(`/user/project/${id}`)
      console.log(data)
      commit('SET_LAYOUT', data[0].rows)
    } catch (e) {
      console.log(e)
    }

    try {
      const { data } = await axios.get(`/user/project/${id}/textfields`)
      commit('FETCH_TEXTFIELDS_SUCCESS', data)
    } catch (e) {
      console.log(e)
      commit('FETCH_TEXTFIELDS_FAILURE')
    }
  },

  resetLayout({commit}) {
    commit('RESET_LAYOUT')
  },
    
addTextfield({state, commit}, payload) {
    commit('ADD_TEXTFIELD', payload)
    // state.layout[0].textfields = rootGetters['Textfield/getTextfields'][0]
  },
}