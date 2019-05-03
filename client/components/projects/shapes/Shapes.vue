<template>
<svg xmlns="http://www.w3.org/2000/svg" width="255" height="255" viewBox="0 0 255 255">
  <defs>
    <style>
      .cls-1 {
        fill: #fff;
        stroke: #707070;
      }

      .cls-2 {
        stroke: none;
      }

      .cls-3 {
        fill: none;
      }
    </style>
  </defs>
  <g id="Rectangle_1" data-name="Rectangle 1" class="cls-1">
    <rect class="cls-2" width="width" height="height"/>
    <rect class="cls-3" x="0.5" y="0.5" width="width" height="height"/>
  </g>
</svg>
</template>

<script>

export default {
  components: {
  },
  props:['width', 'height'],
  data(){
      return{

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
