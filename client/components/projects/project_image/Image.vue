<template>
  <interact-panel 
   class="image-content interact"
  :drag="true"
  :isSnappable="false"
  >
        <img v-bind:src="image" />
  </interact-panel>
</template>

<script>
import twice from '/home/martin/nuxt/larvel-nuxt/client/Images/twice.jpg'
import InteractPanel from '/home/martin/nuxt/larvel-nuxt/client/components/projects/interactPanel/InteractPanel.vue'
import interact from 'interactjs';
export default {
    components: {
        'interactPanel': InteractPanel,
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
