<template>
  <div>
    <aside
      v-show="contextMenu.activated"
      ref="contextMenu"
      :style="{ top: contextMenu.style.top, left: contextMenu.style.left }"
      class="context-menu"
    >
      <ul class="menu-list">
        <li>
          <ul class="context-menu-list">
            <li class="context-menu-item" @click="copyItem">
              <a>Copy</a>
            </li>
            <li class="context-menu-item" @click="openStartMenuAnimations">
              <a>Add Animation</a>
            </li>
            <li class="context-menu-item">
              <a>Format Form</a>
            </li>
            <li class="context-menu-item" @click="deleteItem">
              <a>Delete</a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      contextMenu: "ContextMenus/TableContextMenu/getContextMenu"
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
