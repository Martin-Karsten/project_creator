<template>
  <div @contextmenu.prevent="openContextMenu">
    <img :src="url"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props:['id', 'url', 'row'],
  components: {
  },
  data() {
      return {
          image: ''
      }
},

  methods: {
    openContextMenu(){
                  let payload = {
                      name: 'WebImageContextMenu',
                      x: event.pageX + 'px',
                      y: event.pageY + 'px',
                      row: this.row}
            // this.$store.commit('Contextmenus/WebImageContextMenu/OPEN_CONTEXT_MENU', payload)
            this.$store.dispatch('Contextmenus/ContextMenu/openContextMenu', payload)
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
</style>
