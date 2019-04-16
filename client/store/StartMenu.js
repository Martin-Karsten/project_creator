import axios from 'axios'

export const state = () => ({
    startMenuIcons: [{activated: false},{activated: false},{activated: false},{activated: false},{activated: false}]
  })

export const getters = {
    getStartMenuIcons: state => state.startMenuIcons
  }

export const mutations = {
  ACTIVATE_ICON(state, payload) {
    console.log(state.startMenuIcons[payload].activated, payload)
    state.startMenuIcons[payload].activated = true
  },
  SET_ICON_TO_FALSE(state, paylod) {
    state.startMenuIcons[paylod.icon].activated = false
  }
}

export const actions ={

}