<template>
  <el-menu
    v-show="contextMenu.activated"
    class="context-menu"
    :style="{ top: contextMenu.style.top, left: contextMenu.style.left }"
  >
    <component :is="contextMenu.name" />
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex"
import WebImageContextMenu from "./WebImageContextMenu"
import TextfieldContextMenu from "./TextfieldContextMenu"
import ChartContextMenu from "./ChartContextMenu"
import SidebarScrollerContextMenu from './SidebarContextMenu'
import WebVideoContextMenu from './WebVideoContextMenu'

export default {
  components: {
    WebImageContextMenu,
    TextfieldContextMenu,
    ChartContextMenu,
    SidebarScrollerContextMenu,
    WebVideoContextMenu
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      contextMenu: "ContextMenus/ContextMenu/getContextMenu"
    })
  },
  methods: {
    showContextMenu(event) {
      var menu = document.getElementById("div-context-menu")
      this.$refs.contextMenu.style.left = event.pageX + "px"
      this.$refs.contextMenu.style.top = event.pageY + "px"
    }
  }
}
</script>

<style lang="scss">
.context-menu {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -150px;
  border-radius: 5px;
  text-align: center;
  z-index: 11; /* 1px higher than the overlay layer */
}

ul.context-menu-list {
  border: black solid 1px !important;
  padding: 0 !important;
  background-color: white;

  & :last-child {
    border-bottom: none;
  }
}

li.context-menu-item {
  border-bottom: 1px solid black;
  height: 2rem;
}
</style>
