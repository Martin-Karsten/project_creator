
export const state = () => ({
    contextMenu: {activated: false, row: 0, style: {left: "100px", top: "100px"}},
})

export const getters = {
  getContextMenu: state => state.contextMenu,
  getTest: state => state.test
}

export const mutations = {
    OPEN_CONTEXT_MENU (state, payload) {
        state.contextMenu = payload
    },
    CLOSE_CONTEXT_MENU (state, payload) {
        state.contextMenu = ''
    }
}

export const actions = {
    openContextMenu({state, commit, rootGetters}, payload){
        switch(payload.name){
            case 'WebImageContextMenu':
                commit('Contextmenus/WebImageContextMenu/OPEN_CONTEXT_MENU', payload, {root: true})
                let p = rootGetters['Contextmenus/WebImageContextMenu/getContextMenu']
                commit('OPEN_CONTEXT_MENU', p)
                break;
        }
    },
    closeContextMenu({state, commit, rootGetters}, payload){
        commit('Contextmenus/WebImageContextMenu/CLOSE_CONTEXT_MENU', payload, {root: true})
        commit('CLOSE_CONTEXT_MENU')
    }
}
