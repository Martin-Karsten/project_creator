import Vue from "vue"

export const state = () => ({
  textfields: "",
  projectId: ""
})

export const getters = {
  getTextfields: state => state.textfields
}

export const mutations = {
  SET_PROJECT_ID(state, payload) {
    state.projectId = payload
  },
  SET_TEXTFIELDS(state, payload) {
    state.textfields = payload
  },

  ADD_TEXTFIELD(state, payload) {
    let obj = {
      [payload.layoutId]: {
        id: payload.id,
        project_id: state.projectId,
        name: "Textfield " + (Object.keys(state.textfields).length + 1),
        itemName: "textfields",
        text: "",
        font: "Calibri",
        font_size: 18,
        color: "red",
        layout_item_id: payload.layoutId,
        row: length,
        class: '',
        background_color: "transparent",
        background_image: "none",
        border_color: "black",
        border_style: "solid",
        animations: {},
        border_width: 1,
        border_radius: 0,
        opacity: 1.0,
        top: payload.y,
        left: payload.x,
        width: 100,
        height: 15,
        z_index: 1
      }
    }
    // update textfields state
    Vue.set(state.textfields, payload.id, obj[payload.layoutId])
  }
}

export const actions = {
  initialize({ state, commit, rootGetters}, payload) {
    commit("SET_PROJECT_ID", rootGetters['Layout/getProjectId'])
    commit("SET_TEXTFIELDS", payload)
  },

  // push obj key to textfields ids array
  async addTextfield({ state, commit }, payload) {
    //this is the id that is going to be assigned to the newly created textfield
    try{
      payload.id  = await this.dispatch("LayoutHelpers/createUuid", 'empty' ,{root: true})
    }
    catch(e){
    }
    commit("ADD_TEXTFIELD", payload)
    commit(
      "Layout/ADD_TEXTFIELD",
      payload,
      { root: true }
    )
  }
}
