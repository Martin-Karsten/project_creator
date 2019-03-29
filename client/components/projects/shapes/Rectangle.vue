<template>
  <div class="rectangle">
    
  </div>
</template>

<script>
export default {
  components: {
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
