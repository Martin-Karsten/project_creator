//state
export const state = () => ({
    baseLayout:
            [{"x":0,"y":0,"w":12,"h":12,"i":"0", content: [ {textfields:[0], shapes:[0]} ] },
            {"x":0,"y":13,"w":12,"h":12,"i":"1", content: [ {textfields:[1], shapes:[]} ] } ],
  })

export const getters = {
    getBaseLayout: state => state.baseLayout
  }

export const mutations = {

}

export const actions = {

}