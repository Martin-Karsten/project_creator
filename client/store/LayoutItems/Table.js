import Vue from 'vue'

export const state = () => ({
    tables: '',
    tableCandidate: {text: ''}
})

// getters
export const getters = {
  getTables: state => state.tables,
}

// mutations
export const mutations = {
    SET_TABLES (state, payload){
      state.tables = payload
    },

    CREATE_TABLE (state, payload){
      let str ='<table><tbody>'
      for(let i=0; i<payload.rows; i++){
        str = str + '<tr>'
        for(let j=0; j<payload.rows; j++){
          str = str + '<th></th>'
        }
        str = str + '</tr>'
      }
     str = str + '</tbody></table>'
    
     let length = Object.keys(state.tables).length
    
     let id = length + 1
     let obj = {[payload.layoutId] : {id: 0, text: str, name: 'table', itemName: 'tables', columns: payload.columns, rows: payload.rows, 
     background_color: 'none', border_color: 'black', border_style: 'solid', animations:{},
     border_width: 1, border_radius: 0, opacity: 1.00, top:0,
     left:0, width:400, height:200}}
    
      // update tables state
      Vue.set(state.tables, 0, obj[payload.layoutId])
      console.log(JSON.stringify(state.tables, 2, null))
    },

    ADD_TABLE(state, payload) {

      },
}

export const actions = {

    initialize({state, commit}, payload) {
            commit('SET_TABLES', payload)
        },

    createTable ({state, commit}, payload){
        //this is the id that is going to be assigned to the newly created table
        let id = Object.keys(state.tables).length + 1

        commit('CREATE_TABLE', payload)
        commit('Layout/CREATE_TABLE', {layoutId: 2, id: id}, {root: true})
    },

    // push obj key to tables ids array
    addTable({state, commit}, payload){
        //this is the id that is going to be assigned to the newly created table
        let id = Object.keys(state.tables).length + 1

        commit('ADD_TABLE', payload)
        // commit('Layout/ADD_TABLE', {layoutId: payload, id: id, tables: state.tables}, {root: true})
    },
}
