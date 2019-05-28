<template>
  <component
    :is="shape"
    :id="id"
    class="project-shape"
    :width="width"
    :height="height"
    :color="color"
    :layout-id="layoutId"
  />
</template>

<script>
import RectangleShape from "./Rectangle"
import CircleShape from "./Circle"
import TriangleShape from "./Triangle"
import LineShape from "./Line"
import ArrowShape from "./Arrow"
export default {
  components: {
    RectangleShape,
    CircleShape,
    TriangleShape,
    LineShape,
    ArrowShape
  },
  props: {
    layoutId: {},
    id: {},
    shape: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "violet",
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
      required: false
    }
  },
  data() {
    return {
      rectangle: "rectangle-shape",
      circle: "circle-shape",
      triangle: "triangle-shape",
      line: "line-shape",
      arrow: "arrow-shape"
    }
  },
  mounted() {}
}
</script>

<style>
.project-shape {
}
</style>
