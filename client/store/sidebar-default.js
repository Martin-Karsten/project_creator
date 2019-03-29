//state
export const state = () => ({
    sidebar: [{id: 0, name: 'sidebarDefault', comp: ''}],
    sidebarScroller: [1,2],
    index: 0
  })

export const getters = {
    getSidebar: state => state.sidebar,
    getSidebarScroller: state => state.sidebarScroller,
    getIndex: state => state.index
  }

export const mutations = {
SWITCH_COMPONENT (state, payload) {
    // for(let obj of state.sidebar){
    //     console.log('before: ', obj)
    //     if(obj.id = payload.id){
    //         console.log('after: ', obj)
    //         state.index = payload.id
    //         // state.sidebar.comp = payload.name
    //         break;
    //         }
    //     }
    },
//add empty element and allocate new component to it
ADD_COMPONENT (state, payload, rootGetters) {
    state.sidebar.push('')
},
ADD_SCROLLER_ITEM (state, payload) {
    state.sidebarScroller.push(state.sidebarScroller.length + 1)
},
SET_SIDEBAR_ITEM (state,payload) {
    state.sidebar[payload] = payload
},
SET_INDEX (state, payload) {
    state.index = payload
},
INCREMENT_INDEX (state) {
    state.index++
}
}

export const actions = {
  add_component ({state, commit, rootGetters}, payload) {
    if(state.index == 0){
        switch (payload.name) {
            case 'sidebarTextfield':
              commit('SidebarTextfield/ADD_COMPONENT', payload.id, {root: true})
              state.sidebar[0] = rootGetters['SidebarTextfield/getSidebarTextfield'][0]
              state.index = payload.id
                break;

            case 'sidebarImage':
            commit('SidebarImage/ADD_COMPONENT', payload.id, {root: true})
            state.sidebar[0] = rootGetters['SidebarImage/getSidebarImage'][0]
            console.log(state.sidebar, state.index)
                break;

            case 'sidebarCharts':
                this.i = "chart-bar";
                break;
            case 'sidebarTables':
                this.i = "table";
                break;
            case 'sidebarLayouts':
                this.i = "file-alt";
                break;
            case 6:
                day = "Saturday";
        }
    }
    else{
        switch (payload.name) {
            case 'sidebarTextfield':
            commit('SidebarTextfield/ADD_COMPONENT', payload.id, {root: true})
            commit('SidebarTextfield/SET_INDEX', payload.id, {root: true})
            commit('ADD_COMPONENT')
            state.sidebar[state.sidebar.length - 1] = rootGetters['SidebarTextfield/getSidebarTextfield'][rootGetters['SidebarTextfield/getSidebarTextfield'].length - 1]
            state.index = payload.id
                break;

            case 'sidebarImage':
            commit('SidebarImage/ADD_COMPONENT', payload.id, {root: true})
            commit('ADD_COMPONENT')
            state.sidebar[state.sidebar.length - 1] = rootGetters['SidebarImage/getSidebarImage'][rootGetters['SidebarImage/getSidebarImage'].length - 1]
            console.log(state.sidebar, state.index)    
                break;
            case 'sidebarCharts':
                this.i = "chart-bar";
                break;
            case 'sidebarTables':
                this.i = "table";
                break;
            case 'sidebarLayouts':
                this.i = "file-alt";
                break;
            case 6:
                day = "Saturday";
        }
    }
  },
  switch_component({state, commit, rootGetters}, payload){
    // commit('SWITCH_COMPONENT', payload)
    commit('SET_INDEX', payload.id)
    commit('SidebarTextfield/SET_INDEX', payload.id, {root: true})
  },
  add_scroller_item({state, commit, rootGetters}, payload){
    commit('ADD_SCROLLER_ITEM', 'xD')
  }
}