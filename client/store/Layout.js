import axios from "axios";

export const state = () => ({
    layout: [],
    currentLayout: 0,
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
    getEditor: state => state.editor
  }

export const mutations = {
SET_EDITOR(state, payload) {
  state.editor = payload
},

SET_PROJECT_ID(state, payload) {
  state.projectId = payload
},

SET_CURRENT_LAYOUT (state, payload) {
  state.currentLayout = payload
},
CREATE_LAYOUT(state, payload) {
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

ADD_TEXTFIELD(state, payload) {
  state.layout[payload.row].isEmpty = false
  state.layout[payload.row].textfields.push({id: Date.now(), project_id: state.projectId, name: 'textfield', text:'', row:payload, font:'Calibri', font_size: 18, color: 'red', top:0, left:0, width:200, height:100})

  state.textfields.push(({id: Date.now(), project_id: state.projectId, name: 'textfield', text:'', row:payload, font:'Calibri', font_size: 18, color: 'red', top:0, left:0, width:200, height:100}))
},


ADD_IMAGE(state, payload) {
  state.layout[payload.row].isEmpty = false
  state.layout[payload.row].images.push({id: Date.now(), project_id: state.projectId, name: payload.name, file:payload.file, url:payload.url ,row:payload.row, top:0, left:0, width:200, height:100})

  state.images.push({id: Date.now(), project_id: state.projectId, name: payload.name, file:payload.file, row:payload.row, top:0, left:0, width:200, height:100})

  state.imagesForm = new FormData()
  state.imagesForm.append('images[]', payload.file, payload.file.name);
},

ADD_WEB_IMAGES(state, payload) {
  state.layout[payload].isEmpty = false
  state.getCurrentLayout = row
  state.layout.web_images.push({id: Date.now(), project_id: payload.projectId, name: payload.name, url:payload.url ,row:payload.row, top:0, left:0, width:200, height:100})

  state.web_images.push({id: Date.now(), project_id: payload.projectId, name: payload.name, url:payload.url ,row:payload.row, top:0, left:0, width:200, height:100})
},

ADD_WEB_IMAGE(state, payload) {
  if(payload.layoutRow != null){
    state.currentLayout = payload.layoutRow
  }
  console.log(payload)
  state.layout[state.currentLayout].web_images.push({id: Date.now(), project_id: state.projectId, name: 'web_image', url:payload.url ,row:state.currentLayout, top:0, left:0, width:200, height:100})
},

ADD_WEB_VIDEO(state, payload) {
  state.layout[payload.layoutRow].web_videos.push({id: Date.now(), project_id: state.projectId, name: 'web_video', video_id:payload.video_id,row:payload.Layoutrow, top:0, left:0, width:200, height:100})
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

RESET_LAYOUT(state) {
  state.layout = []
}

}

export const actions = {
  async initialize({state, commit, rootGetters, dispatch}, payload) {
    let id = payload.id

    commit('SET_PROJECT_ID', id)
    try {
      const { data } = await axios.get(`/user/project/${id}`)
      commit('SET_LAYOUT', data)
    } catch (e) {
      console.log(e)
    }

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
       console.log(data)
      }catch(e){
       console.log(e)
       alert('AN ERROR OCCURRED')
      }
  },

  resetLayout({commit}) {
    commit('RESET_LAYOUT')
  },
    
}