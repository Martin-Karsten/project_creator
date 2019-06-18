<template>
  <div class="cont" @click="setCurrentItem" @contextmenu.prevent="openContextMenu"> 
    <youtube
      :style="{width: 99 + '%', height: 99 + '%'}"
      ref="youtube"
      :fitParent="true"
      :resize="true"
      :video-id="videoId"
      @playing="playing"
      @click="setCurrentItem"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import Vue from "vue"
import VueYoutube from "vue-youtube"

Vue.use(VueYoutube)

export default {
  components: {},
  props: ["index", "videoId", "id", "layoutId", "row", "addToSomethingActivated"],
  data() {
    return {
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  },
  methods: {
    setCurrentItem() {
      let payload = {
        id: this.id,
        layoutId: this.layoutId,
        itemName: "web_videos"
      }
      if(this.addToSomethingActivated.action === 'add'){
        console.log('what??')
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
        name: "WebVideoContextMenu",
        x: event.pageX + "px",
        y: event.pageY + "px",
        row: this.row
      }

      let payload2 = {
        id: this.id,
        layoutId: this.layoutId,
        itemName: "web_videos"
      }
      this.$store.commit("Layout/SET_CURRENT_ITEM", payload2)
      this.$store.dispatch("ContextMenus/ContextMenu/openContextMenu", payload)
    },
    playVideo() {
      this.player.playVideo()
    },
    playing() {
      console.log("\o/ we are watching!!!")
      this.h = 400
      this.w = 800
    }
  }
}
</script>

<style></style>
