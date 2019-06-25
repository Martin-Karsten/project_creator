<template>
  <div
  >
    <el-menu-item @click="copyItem" class="contextmenu-item" index="copy">
      <div>Copy</div>
    </el-menu-item>
    <!-- <el-menu-item class="contextmenu-item" index="Add Animation">
      <div>Add Animation</div>
    </el-menu-item> -->
    <!-- <el-menu-item @click="format">
      <div>Format</div>
    </el-menu-item> -->
    <el-menu-item @click="deleteItem" class="contextmenu-item" index="delete">
      <div>Delete</div>
    </el-menu-item>
  </div>
    <!-- v-show="contextMenu.activated"
    ref="contextMenu"
    :style="{ top: contextMenu.style.top, left: contextMenu.style.left }"
    class="context-menu"
  > -->
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      contextMenu: "ContextMenus/LayoutItems/Interact/ButtonContextMenu/getContextMenu"
    })
  },
  methods: {
    openStartMenuAnimations() {
      let payload = { name: "StartMenuAnimations" }
      this.$store.dispatch("StartMenus/StartMenu/openStartMenu", payload)
    },

    copyItem() {
      this.$store.commit("Layout/COPY_ITEM")
    },

    deleteItem() {
      this.$store.commit("Layout/DELETE_ITEM")
    }
  }
}
</script>

<style></style>
