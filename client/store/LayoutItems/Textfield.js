import Vue from "vue"

export const state = () => ({
  textfields: ""
})

export const getters = {
  getTextfields: state => state.textfields
}

export const mutations = {
  SET_TEXTFIELDS(state, payload) {
    state.textfields = payload
  },

  ADD_TEXTFIELD(state, payload) {
    //we need a variable obj key, because that is how it is defined in the layout schema
    let length = Object.keys(state.textfields).length
 
    let id = length + 1
    let obj = {
      [payload]: {
        id: id,
        project_id: state.projectId,
        name: "textfield",
        itemName: "textfields",
        text: "333333333333",
        font: "Calibri",
        font_size: 18,
        color: "red",
        layout_item_id: payload,
        row: payload,
        background_color: "none",
        border_color: "black",
        border_style: "solid",
        animations: {},
        border_width: 1,
        border_radius: 0,
        opacity: 1.0,
        top: 0,
        left: 0,
        width: 200,
        height: 100,
        z_index: 1
      }
    }

    // update textfields state
    Vue.set(state.textfields, id, obj[payload])
  }
}

export const actions = {
  initialize({ state, commit }, payload) {
    commit("SET_TEXTFIELDS", payload)
  },

  // push obj key to textfields ids array
  addTextfield({ state, commit }, payload) {
    //this is the id that is going to be assigned to the newly created textfield
    let id = Object.keys(state.textfields).length + 1

    commit("ADD_TEXTFIELD", payload)
    commit(
      "Layout/ADD_TEXTFIELD",
      { layoutId: payload, id: id },
      { root: true }
    )
  }
}
