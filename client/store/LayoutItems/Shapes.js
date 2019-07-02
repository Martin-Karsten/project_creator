import Vue from "vue"

export const state = () => ({
  shapes: "",
  projectId: ''
})

export const getters = {
  getShapes: state => state.shapes
}

export const mutations = {
  SET_PROJECT_ID(state, payload) {
    state.projectId = payload
  },
  
  SET_SHAPES(state, payload) {
    state.shapes = payload
  },

  ADD_RECTANGLE(state, payload) {
    //we need a variable obj key, because that is how it is defined in the layout schema

    let obj = {
      [payload.layoutId]: {
        id: payload.id,
        project_id: state.projectId,
        layout_item_id: payload.layoutId,
        name: "rectangle",
        class: "",
        shape_name: "rectangle-shape",
        row: length,
        itemName: "shapes",
        background_color: "#002FFF",
        border_color: "#002FFF",
        border_style: "solid",
        animations: {},
        border_width: 1,
        border_radius: 0,
        opacity: 1.0,
        top: payload.y,
        left: payload.x,
        width: 100,
        height: 100,
        z_index: 0,
      }
    }

    // update shapes state
    Vue.set(state.shapes, payload.id, obj[payload.layoutId])
  },

  ADD_CIRCLE(state, payload) {
    //we need a variable obj key, because that is how it is defined in the layout schema

    let obj = {
      [payload.layoutId]: {
        id: payload.id,
        project_id: state.projectId,
        layout_item_id: payload.layoutId,
        name: "circle",
        class: "",
        shape_name: "circle-shape",
        itemName: "shapes",
        background_color: "none",
        border_color: "black",
        border_style: "solid",
        animations: {},
        border_width: 1,
        border_radius: 0,
        opacity: 1.0,
        top: payload.y,
        left: payload.x,
        width: 100,
        height: 100,
        z_index: 0
      }
    }

    // update shapes state
    Vue.set(state.shapes, payload.id, obj[payload.layoutId])
  },

  ADD_TRIANGLE(state, payload) {
    //we need a variable obj key, because that is how it is defined in the layout schema

    let obj = {
      [payload.layoutId]: {
        id: payload.id,
        project_id: state.projectId,
        layout_item_id: payload.layoutId,
        class: "",
        name: "triangle",
        shape_name: "triangle-shape",
        itemName: "shapes",
        background_color: "none",
        border_color: "black",
        border_style: "solid",
        animations: {},
        border_width: 1,
        border_radius: 0,
        opacity: 1.0,
        top: payload.y,
        left: payload.x,
        width: 150,
        height: 100,
        z_index: 0
      }
    }

    // update shapes state
    Vue.set(state.shapes, payload.id, obj[payload.layoutId])
  },

  ADD_LINE(state, payload) {
    //we need a variable obj key, because that is how it is defined in the layout schema

    let obj = {
      [payload.layoutId]: {
        id: payload.id,
        project_id: state.projectId,
        layout_item_id: payload.layoutId,
        class: "",
        name: "line",
        shape_name: "line-shape",
        itemName: "shapes",
        background_color: "none",
        border_color: "black",
        border_style: "solid",
        animations: {},
        border_width: 1,
        border_radius: 0,
        opacity: 1.0,
        top: payload.y,
        left: payload.x,
        width: 100,
        height: 2,
        z_index: 0
      }
    }

    // update shapes state
    Vue.set(state.shapes, payload.id, obj[payload.layoutId])
  }
}

export const actions = {
  initialize({ state, commit, rootGetters }, payload) {
    commit("SET_PROJECT_ID", rootGetters['Layout/getProjectId'])
    commit("SET_SHAPES", payload)
  },

  // decide which shape and push obj key to shapes ids array
  async addShape({ state, commit }, payload) {
    try{
      payload.id = await this.dispatch("LayoutHelpers/createUuid", 'empty' ,{root: true})
    }
    catch(e){
    }    
    switch (payload.shape) {
      case "rectangle":
        commit("ADD_RECTANGLE", payload)
        break
      case "circle":
        commit("ADD_CIRCLE", payload)
        break
      case "triangle":
        commit("ADD_TRIANGLE", payload)
        break
      case "line":
        commit("ADD_LINE", payload)
        break
    }
    commit(
      "Layout/ADD_SHAPE",
      { layoutId: payload.layoutId, id: payload.id },
      { root: true }
    )
  }
}
