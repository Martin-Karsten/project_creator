import Vue from "vue"

export const state = () => ({
  shapes: ""
})

export const getters = {
  getShapes: state => state.shapes
}

export const mutations = {
  SET_SHAPES(state, payload) {
    state.shapes = payload
  },

  ADD_RECTANGLE(state, payload) {
    //we need a variable obj key, because that is how it is defined in the layout schema
    let id = Object.keys(state.shapes).length + 1

    let obj = {
      [payload.layoutId]: {
        id: id,
        project_id: state.projectId,
        name: "rectangle",
        shape_name: "rectangle-shape",
        itemName: "shapes",
        background_color: "none",
        border_color: "black",
        border_style: "solid",
        animations: {},
        border_width: 1,
        border_radius: 0,
        opacity: 1.0,
        top: 1,
        left: 0,
        width: 200,
        height: 100
      }
    }

    // update shapes state
    Vue.set(state.shapes, id, obj[payload.layoutId])
  },

  ADD_CIRCLE(state, payload) {
    //we need a variable obj key, because that is how it is defined in the layout schema
    let id = Object.keys(state.shapes).length + 1

    let obj = {
      [payload.layoutId]: {
        id: id,
        project_id: state.projectId,
        name: "circle",
        shape_name: "circle-shape",
        itemName: "shapes",
        background_color: "none",
        border_color: "black",
        border_style: "solid",
        animations: {},
        border_width: 1,
        border_radius: 0,
        opacity: 1.0,
        top: 1,
        left: 0,
        width: 200,
        height: 100
      }
    }

    // update shapes state
    Vue.set(state.shapes, id, obj[payload.layoutId])
  },

  ADD_TRIANGLE(state, payload) {
    //we need a variable obj key, because that is how it is defined in the layout schema
    let id = Object.keys(state.shapes).length + 1

    let obj = {
      [payload.layoutId]: {
        id: id,
        project_id: state.projectId,
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
        top: 1,
        left: 0,
        width: 200,
        height: 100
      }
    }

    // update shapes state
    Vue.set(state.shapes, id, obj[payload.layoutId])
  },

  ADD_LINE(state, payload) {
    //we need a variable obj key, because that is how it is defined in the layout schema
    let id = Object.keys(state.shapes).length + 1

    let obj = {
      [payload.layoutId]: {
        id: id,
        project_id: state.projectId,
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
        top: 1,
        left: 0,
        width: 150,
        height: 2
      }
    }

    // update shapes state
    Vue.set(state.shapes, id, obj[payload.layoutId])
  }
}

export const actions = {
  initialize({ state, commit }, payload) {
    commit("SET_SHAPES", payload)
  },

  // decide which shape and push obj key to shapes ids array
  addShape({ state, commit }, payload) {
    let id = Object.keys(state.shapes).length + 1
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
      { layoutId: payload.layoutId, id: id },
      { root: true }
    )
  }
}
