
export const state = () => ({
    currentMode: false,
    nomralMode: true,
    fullScreenMode: false,
    presentationMode: false,
    animationItems: [],
    animationOrder: 0,
})

export const getters = {
  getCurrentMode: state => state.currentMode,
  getNormalMode: state => state.normalMode,
  getFullScreenMode: state => state.fullScreenMode,
  getPresentationMode: state => state.presentationMode,
  getAnimationItmes: state => state.animationItems,
  getAnimationOrder: state => state.animationOrder,
}

export const mutations = {
    //payload = layout
    SET_ANIMATIONS(state, payload){
        //get arrays that contain the items (textfields, images, ...)
        let arr1 = []
        for(let i=0; i<payload.length; i++){
            if(typeof payload[i] === 'object'){
                Object.keys(payload[i]).map(function(key) {
                    if(Array.isArray(payload[i][key])){
                        arr1.push(payload[i][key]);
                    }
                  });
            }
        }
        //loop through item arrays and check if animation_name is set
        for(let j=0; j<arr1.length; j++){
            for(let k=0; k<arr1[j].length; k++){
                if(arr1[j][k].animations != null)
                console.log(arr1[j][k])
                    state.animationItems.push(arr1[j][k])
            }
        }
    },
    ADD_ANIMATIONS(state, payload){
        //if array is empty push to array, else only insert unique values
        if(state.animationItems.length === 0){
            state.animationItems.push(payload)
        }else{
                state.animationItems = Array.from(new Set([...state.animationItems, payload]))
        }
    },
    SET_ANIMATION(state, paylad){
        state.currentMode = true
    },
    INCREMENT_ANIMATION_ORDER(state, payload){
        if(state.animationItems.length <= 0) return

        let flag = false
        let seen = new Set([payload])
        
        for (let index = 0; index < state.animationItems.length; index++) {
        let value = state.animationItems[index];

        if (seen.has(value)) return
        }

        if(!flag)   state.animationOrder++
    }
}
export const actions = {
    //payload = Layout/initialize this.dispatch('PresentationMode/setAnimationItems', state.layout)
    setAnimationItems({state, commit}, payload){
        commit('SET_ANIMATIONS', payload)
    },
    addAnimations({state, commit, rootGetters}, payload){
        payload.currentItem = rootGetters['Layout/currenItem']
        commit('ADD_ANIMATIONS', payload)
    },
    incrementAnimationOrder({commit}, payload)
    {
        commit('INCREMENT_ANIMATION_ORDER', payload)
    }
}
