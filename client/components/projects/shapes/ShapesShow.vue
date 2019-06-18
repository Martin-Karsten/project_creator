<template>
  <component
    :is="shape"
    :id="id"
    :addToSomethingActivated="addToSomethingActivated"
    class="project-shape"
    :width="width"
    :height="height"
    :color="color"
    :backgroundColor="color"
    :layout-id="layoutId"
  />
</template>

<script>
import { mapGetters } from "vuex"
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
    layoutId: {
      required: true
    },
    id: {
      required: true
    },
    shape: {
      required: true
    },
    color: {
      type: String,
      default: "black",
      required: false
    },
    backgroundColor: {
      type: String,
      default: "black",
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
  computed: {
    ...mapGetters({
      addToSomethingActivated: "Layout/getAddToSomethingActivated"
    })
  },
}
</script>

<style>
.project-shape {
}
</style>
