<template>
    <youtube :fitParent="true"  :resize="true" :video-id="videoId" ref="youtube" @playing="playing"></youtube>
</template>

<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

export default {
props:['index', 'videoId', 'url'],
components: {
},
  data() {
    return {
      h: 200,
      w: 500,
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  },
  methods: {
    playVideo() {
      this.player.playVideo()
    },
    playing() {
      console.log('\o/ we are watching!!!')
      this.h = 400
      this.w = 800
    }
  },
}
</script>

<style>

</style>
