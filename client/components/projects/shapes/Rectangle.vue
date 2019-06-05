<template>
  <div
    :style="{
      width: width + 'px',
      height: height + 'px',
      backgroundColor: 'red'
    }"
    @click="setCurrentItem"
    @contextmenu.prevent="openContextMenu"
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
    },
    openContextMenu() {
      let payload = {
        name: "ShapesContextMenu",
        x: event.pageX + "px",
        y: event.pageY + "px",
        row: this.row
      }

      let payload2 = {
        id: this.id,
        layoutId: this.layoutId,
        itemName: "shapes"
      }
      this.$store.commit("Layout/SET_CURRENT_ITEM", payload2)
      this.$store.dispatch("ContextMenus/ContextMenu/openContextMenu", payload)
    }
  }
}
</script>

<style lang="css" scoped>
.cls-1 {
  fill: violet;
  stroke: #707070;
}

.cls-2 {
  stroke: none;
}

.cls-3 {
  fill: none;
}
</style>
