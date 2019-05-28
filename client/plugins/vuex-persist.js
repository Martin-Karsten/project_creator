import VuexPersistence from "vuex-persist"

export default ({ store }) => {
  new VuexPersistence({
    storage: localStorage,
    modules: ["Layout", "LayoutItems"]
  }).plugin(store)
}
