<template>
  <div
  >
        <img v-bind:src="image" />
  </div>
</template>

<script>
import twice from '/home/martin/nuxt/larvel-nuxt/client/Images/twice.jpg'
export default {
    components: {
    },
    data() {
        return {
            image: twice
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
