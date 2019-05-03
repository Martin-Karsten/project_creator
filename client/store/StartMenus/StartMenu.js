
export const state = () => ({
    startMenu: {name: 'StartMenuDefault'},
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
    initialize(){
        // this.startMenu = {}
    },
    openStartMenu({state, commit, rootGetters}, payload){
        switch(payload.name){
            case 'StartMenuDefault':
                commit('StartMenus/StartMenuDefault/OPEN_START_MENU', payload, {root: true})
                let p1 = rootGetters['StartMenus/StartMenuDefault/getStartMenu']
                commit('OPEN_START_MENU', p1)
                break;
            case 'StartMenuAnimations':
                commit('StartMenus/StartMenuAnimations/OPEN_START_MENU', payload, {root: true})
                let p2 = rootGetters['StartMenus/StartMenuAnimations/getStartMenu']
                commit('OPEN_START_MENU', p2)
                break;
        }
    },
    closeContextMenu({state, commit, rootGetters}, payload){
        commit('Contextmenus/WebImageContextMenu/CLOSE_CONTEXT_MENU', payload, {root: true})
        commit('CLOSE_CONTEXT_MENU')
    }
}
