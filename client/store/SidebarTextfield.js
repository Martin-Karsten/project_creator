//state
export const state = () => ({
    sidebarTextfield: [{id: 0, name: 'sidebarTextfield', fontSize: 12, fontColor: 'red'}],
    test: 'empty',
    index: 0
  })

export const getters = {
    getSidebarTextfield: state => state.sidebarTextfield,
    getIndex: state => state.index
  }

export const mutations = {
SWITCH_COMPONENT (state, payload) {
    state.comp = payload.name
    state.sidebar.push({id: payload.id ,name: payload.name})
    },
ADD_COMPONENT (state, payload) {
    if(payload == 0){
      state.sidebarTextfield[0] = {id: payload, fontType: 'Calibri', name: 'sidebarTextfield', fontSize: 12, fontColor: 'red'}
    }
    else
    state.sidebarTextfield.push({id: payload, fontType: 'Calibri', name: 'sidebarTextfield', fontSize: 12, fontColor: 'black'})
  },
SET_INDEX (state ,payload) {
  state.index = payload
    },
SET_FONTTYPE(state, payload) {
    state.sidebarTextfield[state.index].fontType = payload
    },      
SET_FONTCOLOR(state, payload) {
    state.sidebarTextfield[state.index].fontColor = payload
    },   
SET_FONTSIZE(state, payload) {
    if(payload >=0) {
        state.sidebarTextfield[state.index].fontSize = payload
    }
}     
}