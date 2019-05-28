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
      contextMenu: "ContextMenus/SidebarScrollerContextMenu/getContextMenu"
    })
  },
  methods: {

    copyItem() {
      this.$store.commit("Layout/COPY_LAYOUT_ITEM")
    },

    deleteItem() {
      this.$store.commit("Layout/DELETE_LAYOUT_ITEM", this.contextMenu)
    }
  }
}
</script>

<style></style>
