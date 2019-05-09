import axios from "axios";
import Vue from 'vue';
import { normalize, schema } from 'normalizr';

export const state = () => ({
    layout: [],
    currentLayout: 0,
    currentItem: '',
    currentSelectedItem: '',
    projectId: '',
    textfields: [],
    images: [],
    web_images: [],
    tables: [],
    charts: [],
    shapes: [],
    imagesForm: [],
    projectId: '',
  })

export const getters = {
    getLayout: state => state.layout,
    getCurrentLayout: state => state.currentLayout,
    getCurrentItem: state => state.currentItem,
    getCurrentSelectedItem: state => state.currentSelectedItem,
    getAnimated: state => state.animated,
    getColor: state => state.color
  }

export const mutations = {
SET_EDITOR(state, payload) {
  state.editor = payload
},

SET_PROJECT_ID(state, payload) {
  state.projectId = payload
},

///// LAYOUT SETTINGS
SET_CURRENT_LAYOUT (state, payload) {
  state.currentLayout = payload
},
SET_CURRENT_ITEM (state, payload) {
  state.currentItem = state.layout[payload.layoutRow][payload.itemName][payload.itemRow]
  state.currentItem.itemName = payload.itemName
  state.currentItem.itemRow = payload.itemRow
  state.currentSelectedItem = state.layout[payload.layoutRow][payload.itemName][payload.itemRow]
  state.currentSelectedItem.itemName = payload.itemName
  state.currentSelectedItem.itemRow = payload.itemRow

  state.currentItem.selected = true
  state.currentSelectedItem.selected = true

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
  let newL = []
  for(let item of payload){
    item.images = []
    item.isEmpty = true
    newL.push(item)
  }
  state.layout = newL
},

RESET_LAYOUT(state) {
  state.layout = []
},

////// TEXTFIELD SETTINGS
ADD_TEXTFIELD(state, payload) {
  state.layout[payload.row].isEmpty = false
  state.layout[payload.row].textfields.push(({id: Date.now(), project_id: state.projectId, name: 'textfield', text:'', row:payload, font:'Calibri', font_size: 18, color: 'red', 
  row:state.currentLayout, background_color: 'none', border_color: 'black', border_style: 'solid', animations: {},
  border_width: 1, border_radius: 0, opacity: 1.00, top:0, left:0, width:200, height:100,
  top:0, left:0, width:200, height:100}))

  state.textfields.push(({id: Date.now(), project_id: state.projectId, name: 'textfield', text:'', row:payload, font:'Calibri', font_size: 18, color: 'red', 
  row:state.currentLayout, background_color: 'none', border_color: 'black', border_style: 'solid', animations: {},
  border_width: 1, border_radius: 0, opacity: 1.00, top:0, left:0, width:200, height:100,
  top:0, left:0, width:200, height:100}))


},

//////// IMAGE SETTINGS
ADD_IMAGE(state, payload) {
  state.layout[payload.row].isEmpty = false
  state.layout[payload.row].images.push({id: Date.now(), project_id: state.projectId, name: payload.name, file:payload.file, url:payload.url, animated:false, row:payload.row, top:0, left:0, width:200, height:100})

  state.images.push({id: Date.now(), project_id: state.projectId, name: payload.name, file:payload.file, row:payload.row, top:0, left:0, width:200, height:100})

  state.imagesForm = new FormData()
  state.imagesForm.append('images[]', payload.file, payload.file.name);
},

//////// WEB_IMAGE SETTINGS
ADD_WEB_IMAGES(state, payload) {
  state.layout[payload].isEmpty = false
  state.getCurrentLayout = row
  state.layout.web_images.push({id: Date.now(), project_id: payload.projectId, name: payload.name, url:payload.url, animated:false ,row:payload.row, top:0, left:0, width:200, height:100})

  state.web_images.push({id: Date.now(), project_id: payload.projectId, name: payload.name, url:payload.url ,row:payload.row, top:0, left:0, width:200, height:100})
},

ADD_WEB_IMAGE(state, payload) {
  if(payload.layoutRow != null){
    state.currentLayout = payload.layoutRow
  }
  state.layout[state.currentLayout].web_images.push({id: Date.now(), project_id: state.projectId, name: 'web_image', url:payload.url, animated:false, 
  row:state.currentLayout, background_color: 'none', border_color: 'black', border_style: 'solid', animations:{},
  border_width: 1, border_radius: 0, opacity: 1.00, top:0,
  left:0, width:400, height:200})
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
  let str ='<table><tbody>'
  for(let i=0; i<=payload.columns; i++){
    str = str + '<tr>'
    for(let j=0; j<=payload.rows; j++){
      str = str + '<th></th>'
    }
    str = str + '</tr>'
  }
 str = str + '</tbody></table>'

 if(state.layout[0].tables[0] == null){
  state.layout[0].tables.push({id: Date.now(), project_id: state.projectId, text: str, name: 'table', columns: payload.columns, rows: payload.rows, 
  row: 0, background_color: 'none', border_color: 'black', border_style: 'solid', animations:{},
  border_width: 1, border_radius: 0, opacity: 1.00, top:0,
  left:0, width:400, height:200})
  console.log('not existing')
 }
},

REPLACE_TABLE(state, payload){

  let str ='<table><tbody>'
  for(let i=0; i<=payload.columns; i++){
    str = str + '<tr>'
    for(let j=0; j<=payload.rows; j++){
      str = str + '<th></th>'
    }
    str = str + '</tr>'
  }
 str = str + '</tbody></table>'

state.layout  = [
  ...state.categories.filter(element => element.id !== id),
  category
]

   let newLayout = [...state.layout]
   newLayout[0].tables.splice(0, 1)
   state.layout[0].tables.splice(0, 1)
 
   newLayout[0].tables.push({id: Date.now(), project_id: state.projectId, text: str, name: 'table', columns: payload.columns, rows: payload.rows, 
   row: 0, background_color: 'none', border_color: 'black', border_style: 'solid', animations:{},
   border_width: 1, border_radius: 0, opacity: 1.00, top:0,
   left:0, width:400, height:200}) 
 
   state.layout = newLayout
   console.log(newLayout[0].tables, 'after push')
   console.log(state.layout[0].tables, 'after push')
},

//////////// CHART SETTINGS
ADD_CHART(state, payload) {
  if(payload.layoutRow != null){
    state.currentLayout = payload.layoutRow
  }
  state.layout[state.currentLayout].charts.push({id: Date.now(), project_id: state.projectId, name: 'chart',
  row:state.currentLayout, background_color: 'none', border_color: 'black', border_style: 'solid', animations:{}, chart_settings:{},
  border_width: 1, border_radius: 0, opacity: 1.00, top:0,
  left:0, width:200, height:100})
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
  async initialize({state, commit, dispatch}, payload) {
    let id = payload.id

    commit('SET_PROJECT_ID', id)
    try {
      const { data } = await axios.get(`/user/project/${id}`)
      commit('SET_LAYOUT', data)
    } catch (e) {
      console.log(e)
    }

    this.dispatch('PresentationMode/setAnimationItems', state.layout)
    this.dispatch('LayoutHelpers/initialize', state.layout)
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

  addTextfield({state, commit}, payload){
    commit('ADD_TEXTFIELD', payload)
    let row = state.layout[payload.row]['textfields'].length - 1

    let newItem = JSON.parse(JSON.stringify(state.layout[0]['textfields'][row]))
    newItem.itemName = 'textfields'
    commit('SET_CURRENT_ITEM_OBJECT_ALREADY_EXISTS', newItem)
  },

  createTable({state, commit}, payload){
    if(state.layout[0].tables[0] == null){
      commit('CREATE_TABLE', payload)
      console.log('create??')
    }
    else{
      commit('REPLACE_TABLE', payload)
      console.log('??')
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

  resetLayout({commit}) {
    commit('RESET_LAYOUT')
  },
    
}