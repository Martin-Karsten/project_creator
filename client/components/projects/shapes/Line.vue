<template>
  <div
    class="line"
    :style="{
      width: width + 'px',
      height: height + 'px',
      backgroundColor: color
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
    addToSomethingActivated: {
      required: true
    },
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
      if(this.addToSomethingActivated.action === 'add'){
        this.$store.commit('Layout/ADD_LAYOUT_ITEM_TO_BUTTON', payload)
      }

      else if(this.addToSomethingActivated.action === 'delete'){
        this.$store.commit('Layout/DELETE_LAYOUT_ITEM_FROM_BUTTON', payload)
      }

      else 
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

<style>
.line {
  max-height: 30px;
}
</style>
