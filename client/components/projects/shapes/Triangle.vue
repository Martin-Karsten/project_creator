<template>
  <div
    class="triangle"
    :style="{
      borderLeftWidth: width / 2 + 'px',
      borerLeftColor: 'transparent',
      borderRightWidth: width / 2 + 'px',
      borderRightColor: 'transperant',
      borderBottomWidth: height + 'px',
      borderBottomColor: color,
      borderTopWidth: -height / 2 + 'px',
      borderTopColor: 'transperant',
      borderStyle: 'solid'
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
.triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 100px 100px 100px;
  border-color: transparent transparent #007bff transparent;
}
</style>
