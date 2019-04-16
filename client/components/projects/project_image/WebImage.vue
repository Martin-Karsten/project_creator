<template>
  <div>
    <img :src="url"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props:['id', 'url'],
  components: {
  },
  data() {
      return {
          image: ''
      }
},

  methods: {
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
