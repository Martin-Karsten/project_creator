import axios from "axios"
import Vue from "vue"
import { normalize } from "normalizr"
import layoutSchema from "./schema"


export const state = () => ({
  realLayout: "",
  layoutList: [], // keep array of the ids
  currentLayout: '',
  currentItem: {},
  currentSelectedItem: {},
  projectId: "",
  itemCreator: "",
  textfields: "",
  images: "",
  web_images: "",
  web_videos: "",
  tables: "",
  charts: "",
  shapes: "",
  buttons: "",
  cursorIcon: "auto",
  addToSomethingActivated: {action: '', current: ''},
  deletedLayoutItems:{textfields: [], web_images: [], tables: [], charts: [], web_videos: [], shapes: [], buttons: [], layouts: []},
})

export const getters = {
  getCurrentLayout: state => state.currentLayout,
  getCurrentItem: state => state.currentItem,
  getCurrentSelectedItem: state => state.currentSelectedItem,
  getProjectId: state => state.projectId,
  getAnimated: state => state.animated,
  getItemCreator: state => state.itemCreator,

  getLayoutList: state => state.layoutList,
  getLayoutSet: state => state.layoutList.map(id => state.realLayout[id]),

  getCursorIcon: state => state.cursorIcon,
  getAddToSomethingActivated: state => state.addToSomethingActivated,
  getAddToSomethingList: state => state.addToSomethingList
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
    else 
      return

    for (const [key, value] of Object.entries(state.buttons)) {
      for(let i=0; i<value.function_items.length; i++){
        if(value.function_items[i].id == state.currentItem.id)
          value.function_items.splice(i, 1)
      }
    }

    Vue.delete(state.realLayout[state.currentItem.layout_item_id][state.currentItem.itemName], index) //from arr
    Vue.delete(state[state.currentItem.itemName], state.currentItem.id)

    state.deletedLayoutItems[state.currentItem['itemName']].push(state.currentItem)
    state.currentItem = ''

  },

  DELETE_LAYOUT_ITEM(state, payload) {
    if(state.layoutList.length <= 1)
      return

    // Vue.delete(state.realLayout, payload.element)

    state.deletedLayoutItems.layouts.push(payload.element)

    let index = state.layoutList.indexOf(payload.element)

    Vue.delete(state.layoutList, index)

    if(index -1 < 0)
      state.currentLayout = state.layoutList[0]
    else
      state.currentLayout = state.layoutList[index-1]
    state.realLayout[state.currentLayout].active = true

    state.currentItem = ''
  },

  CREATE_LAYOUT(state, payload){

    state.currentLayout = payload

    state.textfields = {}
    state.images = {}
    state.web_images = {}
    state.web_videos = {}
    state.tables = {}
    state.charts = {}
    state.shapes = {}
  },

  SET_LAYOUT(state, payload) {
    let temp = normalize(payload, layoutSchema)
    state.layoutList = temp.result

    //add prop active, which actives when the element is in use, alwyas set first element to active at start
    Object.keys(temp.entities.layouts).forEach(key => {
      temp.entities.layouts[key].active = false;
      temp.entities.layouts[key].scrollImage = '';
      temp.entities.layouts[key].isEmpty = true;
      
      if(temp.entities.layouts[key].textfields.length > 0 || temp.entities.layouts[key].web_images.length > 0 ||
        temp.entities.layouts[key].web_videos.length > 0 || temp.entities.layouts[key].charts.length > 0 ||
        temp.entities.layouts[key].shapes.length > 0)
        {
          temp.entities.layouts[key].isEmpty = false
        }
    });
    temp.entities.layouts[Object.keys(temp.entities.layouts)[0]].active = true

    state.currentLayout = Object.keys(temp.entities.layouts)[0]

    //chart_settings is saved as chart_settings.chart_settings -> we replace it as one chart_settings
    if(temp.entities.charts != null || temp.entities.charts != undefined){
      for (const [key, value] of Object.entries(temp.entities.charts)) {
        value.chart_settings = value.chart_settings.chart_settings
      }
    }

    state.realLayout = temp.entities.layouts

    state.textfields = temp.entities.textfields
    state.images = temp.entities.images
    state.web_images = temp.entities.web_images
    state.web_videos = temp.entities.web_videos
    state.tables = temp.entities.tables
    state.charts =  temp.entities.charts
    state.shapes = temp.entities.shapes
    state.buttons = temp.entities.buttons

    state.textfields = state.textfields !== undefined ? state.textfields : {}
    state.images = state.images !== undefined ? state.images : {}
    state.web_images = state.web_images !== undefined ? state.web_images : {}
    state.web_videos = state.web_videos !== undefined ? state.web_videos : {}
    state.charts = state.charts !== undefined ? state.charts : {}
    state.tables = state.tables !== undefined ? state.tables : {}
    state.shapes = state.shapes !== undefined ? state.shapes : {}
    state.buttons = state.buttons !== undefined ? state.buttons : {}

    for (const [key, value] of Object.entries(state.buttons)) {
      for(let i=0; i<value.function_items.length; i++){
        value.function_items.splice(i, 1, state[value.function_items[i].itemName][value.function_items[i].id])
      }
  }
  },

  SET_LAYOUT_SCROLL_IMAGES(state, payload){
    state.realLayout[payload.id].scrollImage = payload.scrollImage
  },

  UPDATE_LAYOUT_SCROLL_IMAGE(state, payload){
    state.realLayout[payload.id].scrollImage = payload.scrollImage
  },

  SET_ADD_TO_SOMETHING_ANIMATION(state, payload) {
    state.addToSomethingActivated.action = payload.action
    state.addToSomethingActivated.current = payload.current
    for (const [key, value] of Object.entries(state.textfields)) {
      if(value.layout_item_id = state.currentLayout)
        value.class = payload.class
    }

    for (const [key, value] of Object.entries(state.web_images)) {
      if(value.layout_item_id = state.currentLayout)
        value.class = payload.class
    }

    for (const [key, value] of Object.entries(state.web_videos)) {
      if(value.layout_item_id = state.currentLayout)
        value.class = payload.class
    }

    for (const [key, value] of Object.entries(state.tables)) {
      if(value.layout_item_id = state.currentLayout)
        value.class = payload.class
    }
    
    for (const [key, value] of Object.entries(state.charts)) {
      if(value.layout_item_id = state.currentLayout)
        value.class = payload.class
    }

    for (const [key, value] of Object.entries(state.shapes)) {
      if(value.layout_item_id = state.currentLayout)
        value.class = payload.class
    }
  },

  ADD_LAYOUT_ITEM_TO_BUTTON(state, payload) {
    if(!state.buttons[state.currentItem.id].function_items.includes(state[payload.itemName][payload.id]))
      state.buttons[state.currentItem.id].function_items.push(state[payload.itemName][payload.id])
  },

  DELETE_LAYOUT_ITEM_FROM_BUTTON(state, payload) {
    for (const [key, value] of Object.entries(state.buttons)) {
      value.function_items.forEach(x =>{
        if(x.id == payload.id){
          value.function_items.splice(x.id, 1)
        }
      })
  }
  },

  HIDE_TOOLBAR(state, payload){
    state.realLayout[payload].isEmpty = false
  },

  SET_POSITION(state, payload) {
    payload.currentItem.left = payload.left
    payload.currentItem.top = payload.top
  },

  SET_SIZE(state, payload) {
    payload.currentItem.width = payload.width
    payload.currentItem.height = payload.height
  },

  ////// TEXTFIELD SETTINGS
  //we get our payload from store/LayoutItems/Textfield
  ADD_TEXTFIELD(state, payload) {
    // push obj key to textfields ids array
    state.realLayout[payload.layoutId]["textfields"].push(payload.id)

    // state.currentItem = state["textfields"][payload.id]
    // state.currentItem.selected = true
  },

  UPDATE_TEXTFIELD(state, payload) {
    state.currentItem.text = payload
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

    // state.currentItem = state["charts"][payload.id]
    // state.currentItem.selected = true
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

  /////////////INTERACTIVE LAYOUT ITEMS

  ADD_BUTTON(state, payload) {
    state.realLayout[payload.layoutId]['buttons'].push(payload.id)
  },

  SET_CURSOR_ICON(state, payload) {
    state.cursorIcon = payload.cursor
    state.itemCreator = payload.item
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
        buttons: [],
        isEmpty: true,
        active: false
      }
    }

    state.layoutList.push(payload)
  },

  ADD_SCROLL_IMAGE(state, payload){
    let last = Object.keys(state.realLayout)[Object.keys(state.realLayout).length-1];
    state.realLayout[last].scrollImage = payload
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
  },

  RESET_LAYOUT(state){
    state.realLayout= "",
    state.layoutList= [],
    state.projectId = ''
    state.currentLayout= ''
    state.currentItem= {}
    state.currentSelectedItem= {}
    state.projectId= ""
    state.textfields= ""
    state.images= ""
    state.web_images= ""
    state.web_videos=""
    state.tables=""
    state.charts=""
    state.shapes= ""
    state.buttons= ""
    state.deletedLayoutItems={textfields: [], web_images: [], tables: [], charts: [], web_videos: [], shapes: [], buttons: [], layouts: []}
  },

  RESET_ANIMATOIN(state, payload) {},

  ///////////// FORMATING ///////////////////

  //////// CLASS
  UPDATE_ITEM_CLASS(state, payload) {
    payload.currentItem.class = payload.event
  },

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
    { state, commit, dispatch, rootGetters, rootState }, payload) {
    let id = payload.id
    // if (state.projectId != id) {
      commit("SET_PROJECT_ID", id)
      // try {
      //   const { data } = await axios.get(`/user/project/${id}`)
        commit("SET_LAYOUT", data)
      // } catch (e) {
      //   console.log(e)
      // }
    // }
    this.dispatch("LayoutItems/Textfield/initialize", state.textfields)
    this.dispatch("LayoutItems/WebImage/initialize", state.web_images)
    this.dispatch("LayoutItems/Table/initialize", state.tables)
    this.dispatch("LayoutItems/Chart/initialize", state.charts)
    this.dispatch("LayoutItems/Shapes/initialize", state.shapes)
    this.dispatch("LayoutItems/WebVideo/initialize", state.web_videos)
    this.dispatch("LayoutItems/Interact/Button/initialize", state.buttons)

    return state.layoutList
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
        buttons: state.buttons,
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

}
