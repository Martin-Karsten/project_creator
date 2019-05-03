<template>
    <img class="web-image" :style="{borderRadius: radius + 'px', opacity: opacity}" :src="url" @contextmenu.prevent="openContextMenu" @click="setCurrentItem"/>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props:['id', 'url', 'radius', 'opacity', 'layoutRow', 'row'],
  components: {
  },
  data() {
      return {
          image: '',
          selected: false
      }
},

  methods: {
    setCurrentItem(){
      let payload = 
      {
        layoutRow: this.layoutRow,
        itemRow: this.row,
        itemName: 'web_images'
      }
      this.$store.commit('Layout/SET_CURRENT_ITEM', payload)
    },
    openContextMenu(){
            let payload = {
                name: 'WebImageContextMenu',
                x: event.pageX + 'px',
                y: event.pageY + 'px',
                row: this.row}
            let payload2 = {
              name: 'web_images',
              row: this.row
            }
            this.$store.dispatch('Contextmenus/ContextMenu/openContextMenu', payload)
            this.$store.commit('Layout/SET_CURRENT_ITEM', payload2)
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

img.web-image{
  width: 100%;
  height: 100%;
  display: table-row;
}
</style>
