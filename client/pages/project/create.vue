<template>
  <el-container class="create-project">
    <el-aside class="project-sidebar">
      <sidebar class="main-project-sidebar" @clicked="activateAnimationList" />
    </el-aside>

    <transition name="fade" mode="in-out">
      <el-aside v-show="false" class="animation-list" width="200px">
        <animation-list />
      </el-aside>
    </transition>

    <transition name="fade">
      <el-aside class="component-scroller" width="200px">
        <component-scroller />
      </el-aside>
    </transition>

    <project class="project" :edit-mode="editMode" />

    <template v-if="editContainer.activated">
      <edit-container v-show="editContainer.activated" />
    </template>
  </el-container>
</template>

<script>
import Vue from "vue"
import { mapGetters } from "vuex"

import Project from "../../components/projects/Project"
import EditContainer from "../../components/projects/edit_menu/EditContainer"
import Sidebar from "../../components/projects/sidebar/Sidebar"
import ComponentScroller from "../../components/projects/sidebar/ComponentScroller"
import AnimationList from "../../components/projects/sidebar/animation/AnimationList"
export default {
  layout: "project/project-default",
  middleware: "auth",

  components: {
    Project,
    Sidebar,
    ComponentScroller,
    EditContainer,
    AnimationList
  },
  data() {
    return {
      activated: false,
      showAnimation: false,
      sideBarWidth: "350px",
      dis: "none"
    }
  },
  computed: {
    ...mapGetters({
      sidebar: "Sidebar/getSidebar",
      editContainer: "EditContainer/getEditContainer",
      currentMode: "PresentationMode/getCurrentMode",
      editMode: "PresentationMode/getEditMode"
    })
  },
  mounted() {
    // this.dis = 'none'
  },
  methods: {
    onClickChild() {},
    closeContextMenu() {
      this.$store.dispatch("ContextMenus/ContextMenu/closeContextMenu")
    },
    activateScroller(value) {
      this.activated = value
    },
    activateAnimationList(value) {
      this.showAnimation = value
    }
  }
}
</script>

<style>
.show-scroller-chevron {
  cursor: pointer;
}
</style>
