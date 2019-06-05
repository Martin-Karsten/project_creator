import Vue from "vue"

export const state = () => ({
  web_images: ""
})

export const getters = {
  getweb_images: state => state.web_images
}

export const mutations = {
  SET_PROJECT_ID(state, payload) {
    state.project_id = payload
  },
  SET_WEB_IMAGES(state, payload) {
    state.web_images = payload
  },

  ADD_WEB_IMAGE(state, payload) {
    //we need a variable obj key, because that is how it is defined in the layout schema

    let obj = {
      [payload.layoutId]: {
        id: payload.id,
        project_id: state.projectId,
        layout_item_id: payload.layoutId,
        // row: id,
        name: "web_image",
        itemName: "web_images",
        url: payload.url,
        animated: false,
        background_color: "none",
        border_color: "black",
        border_style: "solid",
        animations: {},
        border_width: 1,
        border_radius: 0,
        opacity: 1.0,
        top: 0,
        left: 0,
        width: 400,
        height: 200,
        z_index: 0
      }
    }

    // update web_image state
    Vue.set(state.web_images, payload.id, obj[payload.layoutId])
  },
  SET_SIZE(state, payload) {
    payload.currentItem.width = payload.width
    payload.currentItem.height = payload.height
    payload.currentItem.top = payload.top
    payload.currentItem.left = payload.left
  }
}

export const actions = {
  initialize({ state, commit, rootGetters }, payload) {
    commit("SET_PROJECT_ID", state.projectId = rootGetters['Layout/getProjectId'])
    commit("SET_WEB_IMAGES", payload)
  },

  // push obj key to web_images ids array
  async addWebImage({ state, commit }, payload) {
    //this is the id that is going to be assigned to the newly created web_image
    try{
      payload.id = await this.dispatch("LayoutHelpers/createUuid", 'empty' ,{root: true})
    }
    catch(e){

    }

    commit("ADD_WEB_IMAGE", payload)
    commit(
      "Layout/ADD_WEB_IMAGE",
      { layoutId: payload.layoutId, id: payload.id, web_images: state.web_images },
      { root: true }
    )
  },
  setSize({ state, commit, rootGetters }, payload) {
    let p = {
      width: payload.width,
      height: payload.height,
      top: payload.top,
      left: payload.left,
      currentItem: rootGetters["Layout/getCurrentItem"]
    }
    commit("SET_SIZE", p)
  }
}
