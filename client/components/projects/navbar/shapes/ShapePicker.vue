<template>
  <el-row class="shape-picker">
    <el-col :span="6" class="shape-picker-column">
      <fa
        icon="square"
        class="shape-picker-icon"
        @click="addRectangle"
      />
    </el-col>
    <el-col :span="6" class="shape-picker-column">
      <fa icon="circle" class="shape-picker-icon" @click="addCircle" />
    </el-col>
    <el-col :span="6" class="shape-picker-triangle-column">
      <img
        src="./Triangle.svg"
        class="shape-picker-icon"
        @click="addTriangle"
      />
    </el-col>
    <el-col :span="2" :offset="2" class="shape-picker-column">
      <fa icon="minus" class="shape-picker-icon" @click="addLine" />
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: ['currentLayout'],
  data() {
    return {}
  },
  methods: {
    addRectangle() {
      this.$emit("clicked")
      this.$store.dispatch("LayoutItems/Shapes/addShape", {
        layoutId: this.currentLayout,
        shape: "rectangle"
      })
    },
    addCircle() {
      this.$emit("clicked")
      this.$store.dispatch("LayoutItems/Shapes/addShape", {
        layoutId: this.currentLayout,
        shape: "circle"
      })
    },
    addTriangle() {
      this.$emit("clicked")
      this.$store.dispatch("LayoutItems/Shapes/addShape", {
        layoutId: this.currentLayout,
        shape: "triangle"
      })
    },
    addLine() {
      this.$emit("clicked")
      this.$store.dispatch("LayoutItems/Shapes/addShape", {
        layoutId: this.currentLayout,
        shape: "line"
      })
    }
  }
}
</script>

<style>
.shape-picker {
  background-color: lightgray;
  width: 200px;
  height: 40px;
  z-index: 15;
  padding-left: 0.75rem;
}

.shape-picker-column {
  font-size: 30px;
  height: 1.5rem;
}

.shape-picker-triangle-column {
  width: 35px;
  padding-top: 0.25rem;
}

.shape-picker-icon {
  cursor: pointer;
  width: 95%;
  height: 95%;
  margin-top: 0.1rem;
}
</style>
