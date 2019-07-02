import axios from "axios"
import Cookies from "js-cookie"

// state
export const state = () => ({
  user: null,
  token: null
})

// getters
export const getters = {
  user: state => state.user,
  token: state => state.token,
  check: state => state.user !== null
}

// mutations
export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },

  FETCH_USER_SUCCESS(state, user) {
    state.user = user
  },

  FETCH_USER_FAILURE(state) {
    state.token = null
  },

  LOGOUT(state) {
    state.user = null
    state.token = null
  },

  UPDATE_USER(state, payload) {
    state.user = payload
  }
}

// actions
export const actions = {
  saveToken({ commit, dispatch }, { token, remember }) {
    commit("SET_TOKEN", token)

    Cookies.set("token", token, { expires: remember ? 365 : null })
  },

  async fetchUser({ commit }) {
    try {
      // const { data } = await axios.get("/user")
      let data = {id: 1, first_name: "John", last_name: "Doe", email: "xd@xd.com", password: "$2y$10$FFj5gExZMUgu..8JVOzCzOAd7f5D9GwSsgmT3RAwTYrtShc8oTTXy"}
      commit("FETCH_USER_SUCCESS", data)
    } catch (e) {
      Cookies.remove("token")

      commit("FETCH_USER_FAILURE")
    }
  },

  updateUser({ commit }, payload) {
    commit("UPDATE_USER", payload.user)
  },

  async logout({ commit }) {
    try {
      await axios.post("/logout")
    } catch (e) {}

    Cookies.remove("token")

    commit("LOGOUT")
  },

  async fetchOauthUrl(ctx, { provider }) {
    const { data } = await axios.post(`/oauth/${provider}`)

    return data.url
  }
}
