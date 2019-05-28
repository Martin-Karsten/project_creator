<template>
  <div
    class="line"
    :style="{
      width: width + 'px',
      height: height + 'px',
      backgroundColor: color
    }"
    @click="setCurrentItem"
  />
</template>

<script>
export default {
  props: {
    layoutId: {},
    id: {},
    color: {
      type: String,
      default: "white", // green, green--outline, white
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
  methods: {
    setCurrentItem() {
      let payload = {
        id: this.id,
        layoutId: this.layoutId,
        itemName: "shapes"
      }
      this.$store.commit("Layout/SET_CURRENT_ITEM", payload)
    }
  }
}
</script>

<style>
.line {
  max-height: 30px;
}
</style>
