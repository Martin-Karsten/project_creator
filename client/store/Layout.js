import axios from "axios";
import Vue from 'vue';
import { normalize, schema } from 'normalizr';
import layoutSchema from './schema';

export const state = () => ({
    realLayout: '',
    layout: [],
    layoutList: [],  // keep array of the ids
    currentLayout: 0,
    currentItem: {},
    currentSelectedItem: {},
    projectId: '',
    textfields: '',
    images: '',
    web_images: '',
    web_videos: '',
    tables: '',
    charts: '',
    shapes: '',
    imagesForm: [],
  })

export const getters = {
    getLayout: state => state.layout,
    getCurrentLayout: state => state.currentLayout,
    getCurrentItem: state => state.currentItem,
    getCurrentSelectedItem: state => state.currentSelectedItem,
    getAnimated: state => state.animated,
    getColor: state => state.color,

    getLayoutList: state => state.layoutList,
    getLayoutSet: state => state.layoutList.map(id => state.realLayout[id]),

    getTextfields: state => state.textfields
  }

export const mutations = {

SET_PROJECT_ID(state, payload) {
  state.projectId = payload
},

///// LAYOUT SETTINGS
SET_CURRENT_LAYOUT (state, payload) {
  state.currentLayout = payload
},

SET_CURRENT_ITEM (state, payload){

  state.currentItem = state[payload.itemName][payload.id]
  state.currentItem.selected = true
  state.currentItem.itemName = payload.itemName

  state.currentSelectedItem = state[payload.itemName][payload.id]
  state.currentSelectedItem.selected = true
  state.currentSelectedItem.itemName = payload.itemName

  // console.log(JSON.stringify(state.currentItem))
},

// we know the current item already, that's why we just assign it to the state instead of calling SET_CURREN_ITEM
SET_CURRENT_ITEM_OBJECT_ALREADY_EXISTS (state, payload){
  state.currentItem = JSON.parse(JSON.stringify(payload))
},

DESELECT_ITEM (state, payload) {
  state.currentSelectedItem = {}
},

COPY_ITEM (state, payload){
  let newItem = JSON.parse(JSON.stringify(state.currentItem))
  newItem.itemRow = state.layout[state.currentLayout][state.currentItem.itemName].length
  newItem.id = Date.now()
  newItem.textfield_id = Date.now()
  state.layout[state.currentLayout][state.currentItem.itemName].push(newItem)

},

  //delete item off layout -> splice item, not entire layout
DELETE_ITEM (state, payload) {
  state.layout[state.currentLayout][state.currentItem.itemName].splice(state.currentItem.itemRow, 1)
},

CREATE_LAYOUT (state, payload) {
  state.layout = [{name: 'zero', id: 0, textfields: [], images: [], web_images: [], charts: [], tables: [], shapes: [], isEmpty: true, active: false},]
},

SET_LAYOUT(state, payload) {
  const temp = normalize(payload, layoutSchema)

  state.layoutList = temp.result
  state.realLayout = temp.entities.layouts
  
  state.textfields = temp.entities.textfields
  state.images = temp.entities.images
  state.web_images = temp.entities.web_images
  state.web_videos = temp.entities.web_videos
  state.tables = temp.entities.tables
  state.charts = temp.entities.charts
  state.shapes = temp.entities.shapes

  state.textfields = (state.textfields !== undefined) ? state.textfields : {};
  state.images = (state.images !== undefined) ? state.images : {};
  state.web_images = (state.web_images !== undefined) ? state.web_images : {};
  state.web_videos = (state.web_videos !== undefined) ? state.web_videos : {};
  state.charts = (state.charts !== undefined) ? state.charts : {};
  state.tables = (state.tables !== undefined) ? state.tables : {};
  state.shapes = (state.shapes !== undefined) ? state.shapes : {};

},

////// TEXTFIELD SETTINGS
  //we get our payload from store/LayoutItems/Textfield
ADD_TEXTFIELD(state, payload) {
  // push obj key to textfields ids array
  state.realLayout[payload.layoutId]['textfields'].push(payload.id)

  state.currentItem = state['textfields'][payload.id]
  state.currentItem.selected = true

},

//////// IMAGE SETTINGS
ADD_IMAGE(state, payload) {
  state.layout[payload.row].isEmpty = false
  state.layout[payload.row].images.push({id: Date.now(), project_id: state.projectId, name: payload.name, file:payload.file, url:payload.url, animated:false, row:payload.row, top:0, left:0, width:200, height:100})

  state.images.push({id: Date.now(), project_id: state.projectId, name: payload.name, file:payload.file, row:payload.row, top:0, left:0, width:200, height:100})

  state.imagesForm = new FormData()
  state.imagesForm.append('images[]', payload.file, payload.file.name);
},

ADD_WEB_IMAGE(state, payload) {
  // push obj key to web_images ids array
  state.realLayout[payload.layoutId]['web_images'].push(payload.id)

  Vue.set(state.currentItem, 0, state['web_images'][payload.id])
  state.currentItem.selected = true
},

//////// WEB_VIDEO SETTINGS
ADD_WEB_VIDEO(state, payload) {
  state.layout[payload.layoutRow].web_videos.push({id: Date.now(), project_id: state.projectId, name: 'web_video', video_id:payload.video_id, animated:false, row:payload.Layoutrow, top:0, left:0, width:200, height:100})
},

///////// TABLE SETTINGS
ADD_TABLE(state, payload) {
  state.layout[payload.layoutRow].tables.push({id: Date.now(), project_id: state.projectId, name: 'table', columns: payload.columns, rows: payload.rows, 
  row:payload.Layoutrow, background_color: 'none', border_color: 'black', border_style: 'solid', animations:{},
  border_width: 1, border_radius: 0, opacity: 1.00, top:0,
  left:0, width:400, height:200})
},

CREATE_TABLE(state, payload){
    // push obj key to tables ids array
    if(state.realLayout[payload.layoutId]['tables'][0]  === undefined)
      state.realLayout[payload.layoutId]['tables'].push(id)
},

//////////// CHART SETTINGS
ADD_CHART(state, payload) {
  // push obj key to textfields ids array
  state.realLayout[payload.layoutId]['charts'].push(payload.id)

  state.currentItem = state['charts'][payload.id]
  state.currentItem.selected = true
},

RESIZE_CHART_CONTAINER(state, payload){
  //Chart.vue is subscribing to this mutation
},

HIDE_TOOLBAR(state, payload) {
  state.currentLayout = payload
  state.layout[payload].isEmpty = false
},

SHOW_TOOLBAR(state, payload) {
  state.layout[payload].isEmpty = true
},

UPDATE_LAYOUT(state, payload) {
        state.layout = payload
    },
ADD_ITEM(state, payload) {
    state.layout.push({name: 'zero', id: payload, textfields: [], images: [], web_images: [], charts: [], tables: [], shapes: [], isEmpty: true, active: false})
  },

/////// ANIMATION SETTINGS
ANIMATE(state, payload) {
  state.currentItem.animations.animated = true
  state.currentSelectedItem.animations.animated = true

  state.currentItem.animations.animation_name = payload.animation
  state.currentSelectedItem.animations.animation_name = payload.animation

  state.currentItem.animations.animation_order = payload.animation
  state.currentSelectedItem.animations.animation_order = payload.animation

  state.layout[state.currentItem.row][state.currentItem.itemName][state.currentItem.itemRow].animations.animated = true
  state.layout[state.currentItem.row][state.currentItem.itemName][state.currentItem.itemRow].animations.animation_name = payload.animation
  state.layout[state.currentItem.row][state.currentItem.itemName][state.currentItem.itemRow].animations.animation_order = payload.animation_order
  
  // setTimeout(function(){ state.layout[state.currentSelectedItem[0].row][state.currentSelectedItem[0].itemName][0].animated = false; }, 1000);
},

RESET_ANIMATOIN(state, payload){

},

///////////// FORMATING ///////////////////

  //////// COLOR
CHANGE_BACKGROUND_COLOR(state, payload) {
  state.layout[state.currentItem.row][state.currentItem.itemName][state.currentItem.itemRow].background_color = payload
},

CHANGE_BORDER_COLOR(state, payload) {
  state.layout[state.currentItem.row][state.currentItem.itemName][state.currentItem.itemRow].border_color = payload
},

  //////// OPACITY
CHANGE_BACKGROUND_OPACITY(state, payload){
  state.layout[state.currentItem.row][state.currentItem.itemName][state.currentItem.itemRow].opacity = payload
},

  ///////// BORDER
CHANGE_BORDER_WIDTH(state, payload){
  state.layout[state.currentItem.row][state.currentItem.itemName][state.currentItem.itemRow].border_width = payload
},

CHANGE_BORDER_COLOR(state, payload){
  state.layout[state.currentItem.row][state.currentItem.itemName][state.currentItem.itemRow].border_color = payload
},

CHANGE_BORDER_STYLE(state, payload){
  state.layout[state.currentItem.row][state.currentItem.itemName][state.currentItem.itemRow].border_style = payload
},

CHANGE_BORDER_RADIUS(state, payload){
  state.layout[state.currentItem.row][state.currentItem.itemName][state.currentItem.itemRow].border_radius = payload
},

CHANGE_BORDER_OPACITY(state, payload){
  state.layout[state.currentItem.row][state.currentItem.itemName][state.currentItem.itemRow].border_opacity = payload
}

}

export const actions = {
  async initialize({state, commit, dispatch, rootGetters, rootState}, payload) {
    let id = payload.id

    commit('SET_PROJECT_ID', id)
    try {
      const { data } = await axios.get(`/user/project/${id}`)
        commit('SET_LAYOUT', data)
    } 
    catch (e) {
      console.log(e)
    }

    this.dispatch('PresentationMode/setAnimationItems', state.layout)
    this.dispatch('LayoutHelpers/initialize', state.layout)

    this.dispatch('LayoutItems/Textfield/initialize', state.textfields)
    this.dispatch('LayoutItems/WebImage/initialize', state.web_images)
    this.dispatch('LayoutItems/Table/initialize', state.tables)
    this.dispatch('LayoutItems/Chart/initialize', state.charts)
  },

  async saveToDB ({state,commit}, payload) {
    state.projectId = payload.id
    let id = payload.id
    axios.put(`user/project/${id}/images`, state.imagesForm)
     try{
     const { data } = await axios.put(`user/project/${id}/textfields`, {
       data:{
        textfields: state.textfields
       }
      })
     }catch(e){
      console.log(e)
      alert('AN ERROR OCCURRED')
     }
     try{
      const { data } = await axios.put(`user/project/${id}/web-images`, {
        data:{
         web_images: state.web_images
        }
       })
      }catch(e){
       console.log(e)
       alert('AN ERROR OCCURRED')
      }
  },

  animate({state, commit, rootGetters}, payload){
    //animation_order is not know -> trigger action in presentationMode and add order to payload
    this.dispatch('PresentationMode/incrementAnimationOrder', state.currentItem)

    payload.animation_order = rootGetters['PresentationMode/getAnimationOrder']
    commit('ANIMATE', payload)
  },

  async resetAnimation(){
      // setTimeout(function(){ state.layout[state.currentSelectedItem[0].row][state.currentSelectedItem[0].itemName][0].animated = false; }, 1000);
      setTimeout(function(){ commit('RESET_ANIMATION') }, 1000);
  },

  resetLayout(){

  }    
}