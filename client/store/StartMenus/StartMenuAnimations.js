
export const state = () => ({
    startMenu: { name: 'StartMenuAnimations', activated: false},
})

export const getters = {
  getStartMenu: state => state.startMenu,
}

export const mutations = {
    OPEN_START_MENU (state, payload) {
        state.startMenu = payload
    },
    CLOSE_START_MENU (state, payload) {
        state.startMenu = ''
    }
}

export const actions = {
    openStartMenu({state, commit, rootGetters}, payload){
        switch(payload.name){
            case 'WebImageContextMenu':
                commit('Contextmenus/WebImageContextMenu/OPEN_CONTEXT_MENU', payload, {root: true})
                commit('OPEN_CONTEXT_MENU', payload)
        }
    },
    closeContextMenu({state, commit, rootGetters}, payload){
        commit('Contextmenus/WebImageContextMenu/CLOSE_CONTEXT_MENU', payload, {root: true})
        commit('CLOSE_CONTEXT_MENU')
    }
}
