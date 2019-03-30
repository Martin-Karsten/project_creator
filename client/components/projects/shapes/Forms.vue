<template>
    <div class="rectangle"
    :drag="true"
    :isSnappable="false"
    >
        <div class="box " v-for="shape in shapes" :key="shape"></div>
        <svg class="rex" width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
    </div>
</template>

<script>
import Rectangle from './Rectangle'
export default {
  components: {
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
