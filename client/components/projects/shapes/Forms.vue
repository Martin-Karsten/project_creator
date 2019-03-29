<template>
    <interact-panel class="rectangle"
    :drag="true"
    :isSnappable="false"
    >
        <div class="box interact" v-for="shape in shapes" :key="shape"></div>
        <!-- <div class="rectangle button interact"></div> -->
        <svg class="interact" width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
    </interact-panel>
</template>

<script>
import InteractPanel from '/home/martin/nuxt/larvel-nuxt/client/components/projects/interactPanel/InteractPanel.vue'
import Rectangle from './Rectangle'
export default {
  components: {
      'interactPanel': InteractPanel,
      'rectangle' : Rectangle
  },
  data(){
      return{
          shapes: [1,2,3]
      }
  },
  mounted() {

    },
}
</script>

<style>
div.rectangle {
    pointer-events: auto;
}

div.box {
    position: absolute;
}
</style>
