<template>
  <img
    class="web-image"
    :style="{ zIndex: row, borderRadius: radius + 'px', opacity: opacity }"
    :src="url"
    @contextmenu.prevent="openContextMenu"
    @click="setCurrentItem"
  >
</template>

<script>
import { mapGetters } from "vuex"
export default {
  components: {},
  props: ["id", "layoutId", "url", "radius", "opacity", "layoutRow", "row"],
  data() {
    return {
      image: "",
      selected: false
    }
  },

  methods: {
    setCurrentItem() {
      let payload = {
        id: this.id,
        layoutId: this.layoutId,
        itemName: "web_images"
      }
      this.$store.commit("Layout/SET_CURRENT_ITEM", payload)
    },
    openContextMenu() {
      let payload = {
        name: "WebImageContextMenu",
        x: event.pageX + "px",
        y: event.pageY + "px",
        row: this.row
      }

      let payload2 = {
        id: this.id,
        layoutId: this.layoutId,
        itemName: "web_images"
      }
      this.$store.commit("Layout/SET_CURRENT_ITEM", payload2)
      this.$store.dispatch("ContextMenus/ContextMenu/openContextMenu", payload)
    }
  }
}
</script>

<style>
.image-content {
  width: 50%;
  height: 30%;
  pointer-events: auto;
  resize: none;
  background: transparent;
  overflow: hidden;
}

img.web-image {
  width: 100%;
  height: 100%;
  display: table-row;
  position: absolute;
}
</style>
