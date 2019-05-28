<template>
    <sidebar-container class="project-sidebar" />
</template>

<script>
import { mapGetters } from "vuex"
import { mapMutations } from "vuex"
import SidebarContainer from "./SidebarContainer"

export default {
  components: {
    SidebarContainer
  },
  data: function() {
    return {
      scrollerActivated: false,
      animationListActivated: false
    }
  },
  computed: {
    ...mapGetters({
      currentMode: "PresentationMode/getCurrentMode"
    })
  },

  methods: {
    showAnimationList() {
      this.animationListActivated = !this.animationListActivated
      this.$emit("clicked", this.animationListActivated)
    }
  }
}
</script>

<style></style>
