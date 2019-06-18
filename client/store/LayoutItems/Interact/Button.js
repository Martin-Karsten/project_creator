import Vue from "vue"

export const state = () => ({
  buttons: "",
  projectId: "",
  buttonCreatorActivated: false,
})

export const getters = {
  getButtons: state => state.buttons,
}

export const mutations = {
  SET_PROJECT_ID(state, payload) {
    state.projectId = payload
  },
  SET_BUTTONS(state, payload) {
    state.buttons = payload
  },

  ACTIVATE_BUTTON_CREATOR(state){
    state.buttonCreatorActivated = true
  },  
  ADD_BUTTON(state, payload) {
      let obj = {
        [payload.layoutId]: {
          id: payload.id,
          project_id: state.projectId,
          name: "button",
          class: "",
          itemName: "buttons",
          text: "",
          function: "",
          function_items: [],
          color: "red",
          sidebarColor: 'transparent',
          layout_item_id: payload.layoutId,
          row: length,
          animations: {},
          opacity: 1.0,
          top: payload.y,
          left: payload.x,
          width: 80,
          height: 40,
          z_index: 1
        }
      }
      // update buttons state
      Vue.set(state.buttons, payload.id, obj[payload.layoutId])
      state.buttonCreatorActivated = false
  },
  SET_BUTTON_TYPE(state, payload) {
    payload.currentItem.function = payload.function
  },
  SET_SIDEBAR_COLOR(state, payload) {
    payload.currentItem.sidebarColor = payload.event
  }
}

export const actions = {
  initialize({ state, commit, rootGetters}, payload) {
    commit("SET_PROJECT_ID", rootGetters['Layout/getProjectId'])
    commit("SET_BUTTONS", payload)
  },

  // push obj key to buttons ids array
  async addButton({ state, commit }, payload) {
    //this is the id that is going to be assigned to the newly created button
    if(state.buttonCreatorActivated){
      try{
        payload.id  = await this.dispatch("LayoutHelpers/createUuid", 'empty', {root: true})
      }
      catch(e){
      }
      commit("ADD_BUTTON", payload)
      commit(
        "Layout/ADD_BUTTON",
        payload,
        { root: true }
      )
    }
  },
  async formatAction({state, commit}, payload){
    let oldCol = payload.currentItem.background_color
    commit("Layout/UPDATE_BACKGROUND_COLOR", payload, {root: true})
    setTimeout(() => {
      commit("Layout/UPDATE_BACKGROUND_COLOR", {currentItem: payload.currentItem, event: oldCol}, {root: true})
    },500);
  },
  //append string payload class to current class
  async hideAction({state, commit}, payload){
    let oldClass = payload.currentItem.class
    payload.event = payload.currentItem.class + ' ' + payload.event
    commit("Layout/UPDATE_ITEM_CLASS", payload, {root: true})
    setTimeout(() => {
      commit("Layout/UPDATE_ITEM_CLASS", {currentItem: payload.currentItem, event: oldClass}, {root: true})
    }, 500)
  },

  async formatActionShow({state, commit}, payload){
    commit("Layout/UPDATE_BACKGROUND_COLOR", payload, {root: true})
  },
  //append string payload class to current class
  async hideActionShow({state, commit}, payload){
    payload.event = payload.currentItem.class + ' ' + payload.event
    commit("Layout/UPDATE_ITEM_CLASS", payload, {root: true})
  }
}
