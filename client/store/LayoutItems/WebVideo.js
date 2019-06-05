import Vue from "vue"

export const state = () => ({
  web_videos: ""
})

export const getters = {
  getweb_videos: state => state.web_videos
}

export const mutations = {
  SET_PROJECT_ID(state, payload) {
    state.project_id = payload
  },
  
  SET_WEB_VIDEOS(state, payload) {
    state.web_videos = payload
  },

  ADD_WEB_VIDEO(state, payload) {
    //we need a variable obj key, because that is how it is defined in the layout schema

    let obj = {
      [payload.layoutId]: {
        id: payload.id,
        project_id: state.projectId,
        name: "web_video",
        itemName: "web_videos",
        video_id: payload.video_id,
        layout_item_id: payload.layoutId,
        row: payload.layoutId,
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

    // update web_video state
    Vue.set(state.web_videos, payload.id, obj[payload.layoutId])
  }
}

export const actions = {
  initialize({ state, commit, rootGetters }, payload) {
    commit("SET_PROJECT_ID", state.projectId = rootGetters['Layout/getProjectId'])
    commit("SET_WEB_VIDEOS", payload)
  },

  // push obj key to web_videos ids array
  async addWebVideo({ state, commit }, payload) {
    //this is the id that is going to be assigned to the newly created web_video
    try{
      payload.id = await this.dispatch("LayoutHelpers/createUuid", 'empty' ,{root: true})
    }
    catch(e){
    }    

    commit("ADD_WEB_VIDEO", payload)
    commit(
      "Layout/ADD_WEB_VIDEO",
      { layoutId: payload.layoutId, id: payload.id, web_videos: state.web_videos },
      { root: true }
    )
  }
}
