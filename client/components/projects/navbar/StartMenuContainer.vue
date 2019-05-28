<template>
  <div>
    <no-ssr>
      <component :is="startMenu.name" v-show="true" class="start-menu" />
    </no-ssr>
  </div>
</template>

<script>
import StartMenuDefault from "./StartMenuDefault"
import StartMenuAnimations from "./StartMenuAnimations"
import { mapGetters } from "vuex"
export default {
  components: {
    StartMenuDefault,
    StartMenuAnimations
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      startMenu: "StartMenus/StartMenu/getStartMenu"
    })
  }
}
</script>

<style>
.start-menu {
  height: 5rem;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  position: relative;
  z-index: 10;
  background-color: #f4f5f5;
}
</style>
