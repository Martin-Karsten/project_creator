//state
export const state = () => ({
    textfields: [
            [{id: 0, dim: 0, comp: 'textfield', font:'Calibri', size: 18, color: 'red', text: 'text1'}, {id: 1, dim: 0, comp: 'textfield', font:'Arial', size: 12, color: 'yellow', text: 'abc'}],
            [{id: 0, dim: 1, comp: 'textfield', font:'Three', size: 14, color: 'green', text: 'text3'}]
          ],
    currentTextfield: {id: 0, dim: 0, comp: 'textfield', font:'Calibri', size: 18, color: 'red', text:''},
  })

export const getters = {
    getTextfields: state => state.textfields,
    getFields: state => state.textfields,
    getCurrentTextfield: state => state.currentTextfield,
    getCurrent: state => state.currentTextfield,
  }

export const mutations = {
SWITCH_COMPONENT (state, payload) {
    state.comp = payload.name
    state.sidebar.push({id: payload.id ,name: payload.name})
    },
ADD_COMPONENT (state, payload) {
    state.textfields[payload].push(state.textfields.length)
    console.log(state.textfields)
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