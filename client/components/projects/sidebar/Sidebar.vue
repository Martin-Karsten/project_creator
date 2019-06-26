<template>
    <sidebar-container class="project-sidebar" />
</template>

<script>
<<<<<<< HEAD
import { mapGetters } from "vuex"
import { mapMutations } from "vuex"
import SidebarContainer from "./SidebarContainer"

=======
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import SidebarHeader from './SidebarHeader'
import SidebarDefault from './SidebarDefault'
import SidebarTextfield from './SidebarTextfield'
import SidebarImage from './SidebarImage'
import SidebarCharts from './SidebarCharts'
import SidebarTables from './SidebarTables'
import SidebarLayouts from './SidebarLayouts'
import ComponentScroller from './ComponentScroller'
>>>>>>> 425dac3511d2a7e837f64e3ee1e448bf79d38ad6
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
