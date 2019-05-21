<template>
  <component class="project-shape" :is="shape" :width="width" :height="height" :color="color" :layoutId="layoutId" :id="id"></component>
</template>

<script>
import RectangleShape from './Rectangle'
import CircleShape from './Circle'
import TriangleShape from './Triangle'
import LineShape from './Line'
import ArrowShape from './Arrow'
export default {
    props: {
      layoutId:{

      },
      id:{

      },
      shape:{
        type: String,
        required: true
      },
      color: {
        type: String,
        default: 'violet',
        required: false
      },
      strokeWidth: {
        type: Number,
        default: 5,
        required: false
      },
      width: {
        type: Number,
        default: 200,
        required: false
      },
      height: {
        type: Number,
        default: 300,
        required: false,
      }
    },
  components: {
    RectangleShape,
    CircleShape,
    TriangleShape,
    LineShape,
    ArrowShape
  },
  data(){
      return{
        rectangle: 'rectangle-shape',
        circle: 'circle-shape',
        triangle: 'triangle-shape',
        line: 'line-shape',
        arrow: 'arrow-shape'
      }
  },
    mounted(){
    },
}
</script>

<style>
.project-shape{
}
</style>
