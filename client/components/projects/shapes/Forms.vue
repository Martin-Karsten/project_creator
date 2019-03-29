<template>
    <div class="rectangle">
        
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
