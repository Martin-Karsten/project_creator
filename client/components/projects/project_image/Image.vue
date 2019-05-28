<template>
  <div>
    <img :src="imageData" >
  </div>
</template>

<script>
import twice from "/home/martin/nuxt/larvel-nuxt/storage/app/images/twice.jpg"
import { mapGetters } from "vuex"
export default {
  components: {},
  props: ["id", "url", "imageData"],
  data() {
    return {
      image: twice
    }
  },

  methods: {
    showImage() {}
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
