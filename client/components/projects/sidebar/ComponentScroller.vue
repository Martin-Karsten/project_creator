<template>
  <draggable
    v-model="layout"
    class="scroll-group"
    handle=".scroll-handle"
  >
    <a
      v-for="element in layout"
      :key="element + 'element'"
      :href="'#item' + element"
      class="scroll-item"
      @contextmenu.prevent="openContextMenu(element)"
    >
    {{element}}
      <div class="scroll-handle" />
    </a>
  </draggable>
</template>

<script>
import draggable from "vuedraggable"
import { mapGetters } from "vuex"
import { mapState } from "vuex"
import { mapMutations } from "vuex"
export default {
  components: {
    draggable
  },
  props: ["newItem"],
  data() {
    return {
    }
  },
  computed: {
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
    openContextMenu(element){
      let payload = {
        name: "SidebarScrollerContextMenu",
        x: event.pageX + 50 + "px",
        y: event.pageY + 50 + "px",
        element: element
      }
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
