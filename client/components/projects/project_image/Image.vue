<template>
<<<<<<< HEAD
  <div>
    <img :src="imageData" >
=======
  <div class="project-image">

>>>>>>> 425dac3511d2a7e837f64e3ee1e448bf79d38ad6
  </div>
</template>

<script>
<<<<<<< HEAD
import twice from "/home/martin/nuxt/larvel-nuxt/storage/app/images/twice.jpg"
import { mapGetters } from "vuex"
export default {
  components: {},
  props: ["id", "url", "imageData"],
  data() {
    return {
      image: twice
=======
export default {
    components: {
    },
    data() {
        return {
            image: ''
        }
>>>>>>> 425dac3511d2a7e837f64e3ee1e448bf79d38ad6
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
