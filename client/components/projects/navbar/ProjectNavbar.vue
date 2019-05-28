<template>
  <div>
    <el-header class="project-navbar">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#edeeef"
        text-color="#fff"
        active-text-color="black"
      >
        <el-menu-item index="1">
          START
        </el-menu-item>

        <el-menu-item index="2">
          ANIMATIONS
        </el-menu-item>

        <el-submenu v-if="user" index="4" style="float: right;">
          <template slot="title">
            <img
              :src="user.photo_url"
              class="rounded-circle profile-photo-nav"
            >
            {{ user.first_name }}
          </template>
          <el-menu-item index="4-1">
            <i class="el-icon-setting" /> Settings
          </el-menu-item>
          <el-menu-item index="4-2">
            <i class="el-icon-information" /> About
          </el-menu-item>
          <el-menu-item index="4-3">
            <i class="el-icon-circle-close" /> Logout
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>

    <start-menu-container />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import LocaleDropdown from "../../LocaleDropdown"
import StartMenuContainer from "./StartMenuContainer"
import StartMenuAnimations from "./StartMenuAnimations"
export default {
  components: {
    LocaleDropdown,
    StartMenuContainer
  },
  data() {
    return {
      appName: process.env.appName,
      showStartMenu: true
    }
  },

  computed: mapGetters({
    user: "auth/user",
    currentMode: "PresentationMode/getCurrentMode"
  }),

  methods: {
    activateStartMenu() {
      if (this.showStartMenu) this.showStartMenu = false
      else this.showStartMenu = true
    },
    saveProject() {},
    toStartMenu() {
      let payload = { name: "StartMenuDefault" }
      this.$store.dispatch("StartMenus/StartMenu/openStartMenu", payload)
    },
    toStartMenuAnimations() {
      let payload = { name: "StartMenuAnimations" }
      this.$store.dispatch("StartMenus/StartMenu/openStartMenu", payload)
    }
  }
}
</script>

<style>
.project-navbar {
  padding: 0 !important;
}
.profile-photo-nav {
  width: 2rem;
  height: 2.5rem;
  border-radius: 15px;
  margin-right: 0.5rem;
}

nav.component-navigation {
  margin-bottom: 0.75em;
  z-index: 20;
}
</style>
