import axios from "axios"
import Vue from "vue"
import { normalize } from "normalizr"
import layoutSchema from "./schema"

export const state = () => ({
  realLayout: "",
  layoutList: [], // keep array of the ids
  currentLayout: 2,
  currentItem: {},
  currentSelectedItem: {},
  projectId: "",
  textfields: "",
  images: "",
  web_images: "",
  web_videos: "",
  tables: "",
  charts: "",
  shapes: "",
  deletedLayoutItems:{textfields: [], web_images: [], tables: [], charts: [], web_videos: [], shapes: [], layouts: []},
})

export const getters = {
  getLayout: state => state.layout,
  getCurrentLayout: state => state.currentLayout,
  getCurrentItem: state => state.currentItem,
  getCurrentSelectedItem: state => state.currentSelectedItem,
  getProjectId: state => state.projectId,
  getAnimated: state => state.animated,
  getColor: state => state.color,

  getLayoutList: state => state.layoutList,
  getLayoutSet: state => state.layoutList.map(id => state.realLayout[id])
}

export const mutations = {
  SET_PROJECT_ID(state, payload) {
    state.projectId = payload
  },

  ///// LAYOUT SETTINGS
  SET_CURRENT_LAYOUT(state, payload) {
    state.realLayout[state.currentLayout].active = false
    state.currentLayout = payload
    state.realLayout[payload].active = true
  },

  SET_CURRENT_LAYOUT_SCROLL(state, payload){
    let id = state.layoutList[payload]
    state.realLayout[state.currentLayout].active = false
    state.currentLayout = id
    state.realLayout[id].active = true
  },

  SET_CURRENT_ITEM(state, payload) {
    state.currentItem = state[payload.itemName][payload.id]
    state.currentItem.selected = true
    state.currentItem.itemName = payload.itemName

    state.currentSelectedItem = state[payload.itemName][payload.id]
    state.currentSelectedItem.selected = true
    state.currentSelectedItem.itemName = payload.itemName

  },

  DESELECT_ITEM(state, payload) {
    state.currentSelectedItem = {}
  },

  COPY_ITEM(state, payload) {
    let newItem = JSON.parse(JSON.stringify(state.currentItem))
    newItem.itemRow =
      state.layout[state.currentLayout][state.currentItem.itemName].length
    newItem.id = Date.now()
    newItem.textfield_id = Date.now()
    state.layout[state.currentLayout][state.currentItem.itemName].push(newItem)
  },

  DELETE_ITEM(state, payload) {
    let index = 0;
    if(state.realLayout[state.currentItem.layout_item_id][state.currentItem.itemName].includes(state.currentItem.id))
      index = state.realLayout[state.currentItem.layout_item_id][state.currentItem.itemName].indexOf(state.currentItem.id)

    Vue.delete(state.realLayout[state.currentItem.layout_item_id][state.currentItem.itemName], index) //from arr
    Vue.delete(state[state.currentItem.itemName], state.currentItem.id)

    state.deletedLayoutItems[state.currentItem['itemName']].push(state.currentItem)
    state.currentItem = ''

    console.log(state.deletedLayoutItems)
  },

  DELETE_LAYOUT_ITEM(state, payload) {
    if(state.layoutList.length <= 1)
      return

    // Vue.delete(state.realLayout, payload.element)

    state.deletedLayoutItems.layouts.push(payload.element)

    let index = state.layoutList.indexOf(payload.element)

    Vue.delete(state.layoutList, index)

    state.currentLayout = state.layoutList[index-1]
    state.realLayout[state.currentLayout].active = true

    console.log(state.deletedLayoutItems.layouts)
  },

  CREATE_LAYOUT(state, payload) {
    state.layout = [
      {
        name: "zero",
        id: 0,
        textfields: {},
        images: {},
        web_images: {},
        charts: {},
        tables: {},
        shapes: {},
        isEmpty: true,
        active: false
      }
    ]
  },

  SET_LAYOUT(state, payload) {
    let temp = normalize(payload, layoutSchema)
    state.layoutList = temp.result

    //add prop active, which actives when the element is in use, alwyas set first element to active at start
    Object.keys(temp.entities.layouts).forEach(key => {
      temp.entities.layouts[key].active = false;
    });
    temp.entities.layouts[Object.keys(temp.entities.layouts)[0]].active = true

    state.currentLayout = Object.keys(temp.entities.layouts)[0]

    state.realLayout = temp.entities.layouts

    state.textfields = temp.entities.textfields
    state.images = temp.entities.images
    state.web_images = temp.entities.web_images
    state.web_videos = temp.entities.web_videos
    state.tables = temp.entities.tables
    state.charts = temp.entities.charts
    state.shapes = temp.entities.shapes

    state.textfields = state.textfields !== undefined ? state.textfields : {}
    state.images = state.images !== undefined ? state.images : {}
    state.web_images = state.web_images !== undefined ? state.web_images : {}
    state.web_videos = state.web_videos !== undefined ? state.web_videos : {}
    state.charts = state.charts !== undefined ? state.charts : {}
    state.tables = state.tables !== undefined ? state.tables : {}
    state.shapes = state.shapes !== undefined ? state.shapes : {}
  },

  SET_POSITION(state, payload) {
    payload.currentItem.left = payload.left
    payload.currentItem.top = payload.top
  },

  SET_SIZE(state, payload) {
    payload.currentItem.width = payload.width
    payload.currentItem.height = payload.height
  },

  MAKE_SMALL(state, payload) {
    let temp = 0
    for (const [key, value] of Object.entries(state.web_images)) {
      temp = value.width
      value.width = 533
      console.log(value.width)
    }
  },

  MAKE_BIG(state, payload) {
    for (const [key, value] of Object.entries(state.web_images)) {
      value.width = (value.width / 1850) * 1000
      console.log("make big?")
    }
  },

  ////// TEXTFIELD SETTINGS
  //we get our payload from store/LayoutItems/Textfield
  ADD_TEXTFIELD(state, payload) {
    console.log(payload)
    // push obj key to textfields ids array
    state.realLayout[payload.layoutId]["textfields"].push(payload.id)

    state.currentItem = state["textfields"][payload.id]
    state.currentItem.selected = true
  },

  UPDATE_TEXTFIELD(state, payload) {
    state.currentItem.text = payload
  },

  //////// IMAGE SETTINGS
  ADD_IMAGE(state, payload) {
    state.layout[payload.row].isEmpty = false
    state.layout[payload.row].images.push({
      id: Date.now(),
      project_id: state.projectId,
      name: payload.name,
      file: payload.file,
      url: payload.url,
      animated: false,
      row: payload.row,
      top: 0,
      left: 0,
      width: 200,
      height: 100
    })

    state.images.push({
      id: Date.now(),
      project_id: state.projectId,
      name: payload.name,
      file: payload.file,
      row: payload.row,
      top: 0,
      left: 0,
      width: 200,
      height: 100
    })

    state.imagesForm = new FormData()
    state.imagesForm.append("images[]", payload.file, payload.file.name)
  },

  ADD_WEB_IMAGE(state, payload) {
    // push obj key to web_images ids array
    state.realLayout[payload.layoutId]["web_images"].push(payload.id)

    // Vue.set(state.currentItem, 0, state["web_images"][payload.id])
    // state.currentItem.selected = true
  },

  //////// WEB_VIDEO SETTINGS
  ADD_WEB_VIDEO(state, payload) {
    // push obj key to web_images ids array
    state.realLayout[payload.layoutId]["web_videos"].push(payload.id)

    // Vue.set(state.currentItem, 0, state["web_videos"][payload.id])
  },

  ///////// TABLE SETTINGS
  ADD_TABLE(state, payload) {
    state.realLayout[payload.layoutId]["tables"].push(payload.id)

  },

  UPDATE_TABLE(state, payload) {
    state.currentItem.text = payload
  },

  CREATE_TABLE(state, payload) {
    // push obj key to tables ids array
    if (state.realLayout[payload.layoutId]["tables"][payload.id] === undefined)
      state.realLayout[payload.layoutId]["tables"].push(payload.id)
  },

  //////////// CHART SETTINGS
  ADD_CHART(state, payload) {
    // push obj key to textfields ids array
    state.realLayout[payload.layoutId]["charts"].push(payload.id)

    state.currentItem = state["charts"][payload.id]
    state.currentItem.selected = true
  },

  RESIZE_CHART_CONTAINER(state, payload) {
    //Chart.vue is subscribing to this mutation
    state.currentItem.width = payload.width
    state.currentItem.height = payload.height
  },

  //////////// SHAPES SETTINGS
  RESIZE_SHAPE_CONTAINER(state, payload) {
    state.currentItem.width = payload.width
    state.currentItem.height = payload.height
  },

  ADD_SHAPE(state, payload) {
    // push obj key to shapes ids array
    state.realLayout[payload.layoutId]["shapes"].push(payload.id)

    // state.currentItem = state['shapes'][payload.id]
    // state.currentItem.selected = true
  },

  HIDE_TOOLBAR(state, payload) {
    state.currentLayout = payload
    state.layout[payload].isEmpty = false
  },

  SHOW_TOOLBAR(state, payload) {
    state.layout[payload].isEmpty = true
  },

  UPDATE_LAYOUT(state, payload) {
    state.layoutList = payload
  },
  ADD_ITEM(state, payload) {

    state.realLayout = {
      ...state.realLayout,
      [payload]: {
        id: payload,
        project_id: state.projectId,
        textfields: [],
        images: [],
        web_images: [],
        web_videos: [],
        charts: [],
        tables: [],
        shapes: [],
        isEmpty: true,
        active: false
      }
    }

    state.layoutList.push(payload)
  },

  /////// ANIMATION SETTINGS
  ANIMATE(state, payload) {
    state.currentItem.animations.animated = true
    state.currentSelectedItem.animations.animated = true

    state.currentItem.animations.animation_name = payload.animation
    state.currentSelectedItem.animations.animation_name = payload.animation

    state.currentItem.animations.animation_order = payload.animation
    state.currentSelectedItem.animations.animation_order = payload.animation

    state.layout[state.currentItem.row][state.currentItem.itemName][
      state.currentItem.itemRow
    ].animations.animated = true
    state.layout[state.currentItem.row][state.currentItem.itemName][
      state.currentItem.itemRow
    ].animations.animation_name = payload.animation
    state.layout[state.currentItem.row][state.currentItem.itemName][
      state.currentItem.itemRow
    ].animations.animation_order = payload.animation_order

    // setTimeout(function(){ state.layout[state.currentSelectedItem[0].row][state.currentSelectedItem[0].itemName][0].animated = false; }, 1000);
  },

  RESET_ANIMATOIN(state, payload) {},

  ///////////// FORMATING ///////////////////

  //////// COLOR
  UPDATE_BACKGROUND_COLOR(state, payload) {
    payload.currentItem.background_color = payload.event
  },

  //////// OPACITY
  UPDATE_BACKGROUND_COLOR_OPACITY(state, payload) {
    payload.currentItem.opacity = payload.event
  },

  ///////// BORDER
  UPDATE_BORDER_WIDTH(state, payload) {
    payload.currentItem.border_width = payload.event
  },

  UPDATE_BORDER_COLOR(state, payload) {
    payload.currentItem.border_color = payload.event
  },

  UPDATE_BORDER_STYLE(state, payload) {
    payload.currentItem.border_style = payload.event
  },

  UPDATE_BORDER_RADIUS(state, payload) {
    payload.currentItem.border_radius = payload.event
  },

  UPDATE_BORDER_OPACITY(state, payload) {
    payload.currentItem.border_opacity = payload.event
  }
}

export const actions = {
  async initialize(
    { state, commit, dispatch, rootGetters, rootState },
    payload
  ) {
    let id = payload.id
    if (state.projectId != id) {
      commit("SET_PROJECT_ID", id)
      try {
        const { data } = await axios.get(`/user/project/${id}`)
        commit("SET_LAYOUT", data)
      } catch (e) {
        console.log(e)
      }
    }
    this.dispatch("PresentationMode/setAnimationItems", state.layout)
    this.dispatch("LayoutHelpers/initialize", state.layout)

    this.dispatch("LayoutItems/Textfield/initialize", state.textfields)
    this.dispatch("LayoutItems/WebImage/initialize", state.web_images)
    this.dispatch("LayoutItems/Table/initialize", state.tables)
    this.dispatch("LayoutItems/Chart/initialize", state.charts)
    this.dispatch("LayoutItems/Shapes/initialize", state.shapes)
    this.dispatch("LayoutItems/WebVideo/initialize", state.web_videos)
  },

  async saveToDB({ state, commit }, payload) {
    axios.put('user/project/{id}/updateLayout',{
      data: {
        projectId: state.projectId,
        layouts: state.layoutList,
        textfields: state.textfields,
        web_images: state.web_images,
        tables: state.tables,
        web_videos: state.web_videos,
        charts: state.charts,
        shapes: state.shapes,
        deletedLayoutItems: state.deletedLayoutItems
      }
    })
  },

  async addItem({state, commit}){
    let id = ''
    try{
      id  = await this.dispatch("LayoutHelpers/createUuid", 'empty' ,{root: true})
    }
    catch(e){
    }

    commit('ADD_ITEM', id)
  },

  animate({ state, commit, rootGetters }, payload) {
    //animation_order is not know -> trigger action in presentationMode and add order to payload
    this.dispatch("PresentationMode/incrementAnimationOrder", state.currentItem)

    payload.animation_order = rootGetters["PresentationMode/getAnimationOrder"]
    commit("ANIMATE", payload)
  },

  async resetAnimation() {
    // setTimeout(function(){ state.layout[state.currentSelectedItem[0].row][state.currentSelectedItem[0].itemName][0].animated = false; }, 1000);
    setTimeout(function() {
      commit("RESET_ANIMATION")
    }, 1000)
  },

  resetLayout() {}
}
