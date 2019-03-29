<template>
    <interact-panel class="interact"
    :drag="true"
    :isSnappable="false"
    >
    <svg class="item-svg-container"></svg>
    
    </interact-panel>
</template>

<script>
import InteractPanel from '/home/martin/nuxt/larvel-nuxt/client/components/projects/interactPanel/InteractPanel.vue'
export default {
  components: {
      'interactPanel': InteractPanel
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
svg.item-svg-container {
  width: 100%;
  height: 240px;
  background-color: #2e9;
  
  -ms-touch-action: none;
      touch-action: none;
}
.edit-rectangle {
  fill: #92e;
  stroke: #fff;
}
</style>
