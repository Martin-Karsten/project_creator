<template>
  <div>
    <img
      class="web-image"
      :style="{ zIndex: row, borderRadius: radius + 'px', opacity: opacity }"
      :src="url"
      @contextmenu.prevent="openContextMenu"
      @click="setCurrentItem"
    >
    <a :href="url" target="_blank" class="image-url">{{shortUrl}}</a>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  components: {},
  props: ["id", "layoutId", "url","radius", "opacity", "layoutRow", "row"],
  data() {
    return {
      image: "",
      selected: false,
      shortUrl: ''
    }
  },
  computed: {
    ...mapGetters({
      addToSomethingActivated: "Layout/getAddToSomethingActivated"
    })
  },
  mounted(){
    this.shortUrl = this.getUrl()
  },
  methods: {
    getUrl(){
      var u = this.url;
      var hostname = (new URL(u)).hostname;

      return hostname
    },
    setCurrentItem() {
      let payload = {
        id: this.id,
        layoutId: this.layoutId,
        itemName: "web_images"
      }
      if(this.addToSomethingActivated.action === 'add'){
        this.$store.commit('Layout/ADD_LAYOUT_ITEM_TO_BUTTON', payload)
      }

      else if(this.addToSomethingActivated.action === 'delete'){
        this.$store.commit('Layout/DELETE_LAYOUT_ITEM_FROM_BUTTON', payload)
      }

      else 
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

a.image-url{
  color: rgb(48, 49, 57, 0.5);
  font-size: 15px;
  background: transparent;
  position: absolute;
  width: 100%;
  height: 1px;
  top: 98%;
}
</style>
