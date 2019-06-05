<template>
  <draggable
    v-model="layout"
    class="scroll-group"
    handle=".scroll-handle"
  >
    <a
      v-for="(element, index) in layout"
      :key="index + 'element'"
      :class="[layoutSet[index].active ? activeClass : '', notActiveClass]"
      @contextmenu.prevent="openContextMenu(element)"
      @click="setCurrentLayout(element)"
      v-scroll-to="{ element: '#item' + element, duration: 75 , container: '.grid-items', easing: 'ease',}"
    >
    {{element}}
      <div class="scroll-handle" />
    </a>
  </draggable>
</template>

<script>
import ScrollTo from '~/plugins/vue-scrollto'
import draggable from "vuedraggable"
import { mapGetters } from "vuex"
export default {
  components: {
    draggable
  },
  props: ["newItem"],
  data() {
    return {
      activeClass: 'scroll-item-active',
      notActiveClass: 'scroll-item'
    }
  },
  computed: {
    ...mapGetters({
      layoutSet: "Layout/getLayoutSet"
    }),
    layout: {
      get() {
        return this.$store.getters["Layout/getLayoutList"]
      },
      set(value) {
        this.$store.commit("Layout/UPDATE_LAYOUT", value)
      }
    }
  },
  methods: {
    setCurrentLayout(element){
      this.$store.commit('Layout/SET_CURRENT_LAYOUT', element)
    },
    openContextMenu(element){
      let payload = {
        name: "SidebarScrollerContextMenu",
        x: event.pageX + 50 + "px",
        y: event.pageY + 50 + "px",
        element: element
      }
      this.$store.commit('Layout/SET_CURRENT_LAYOUT', element)
      this.$store.dispatch('ContextMenus/ContextMenu/openSidebarScrollerContextMenu', payload)
    }
  }
}
</script>

<style>
.component-scroller {
  /* margin-top: 1rem; */
  border-right: 1px solid black;
}

div.scroll-group {
  height: 640px;
}

a.scroll-item {
  background: lightgray;
  height: 22%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: block;
  position: relative;
}

a.scroll-item-active {
  background: lightgray;
  height: 22%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: block;
  position: relative;
  border: 5px solid lightblue;
}

div.scroll-handle {
  background: black;
  opacity: 0.25;
  width: 2.2rem;
  height: 2.2rem;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: move;
}
</style>
