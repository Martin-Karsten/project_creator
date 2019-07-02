<template>
  <div>
    <el-header class="project-navbar">
      <el-menu
        :router="true"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#edeeef"
        text-color="#303139"
        active-text-color="black"
      >
        <el-menu-item index="1" :route="{name: 'home'}">
          <img class="navbar-logo" :src="logo" >
        </el-menu-item>
        <locale-dropdown/>

        <el-submenu v-if="user" index="3" style="float: right;">
          <template slot="title">
            <img class="navbar-profile-image" :src="apiUrl + this.user.avatar" alt="">
          </template>
          <el-menu-item :route="{name: 'home'}" index="settings">
            <i class="el-icon-document-copy" /> Projects
          </el-menu-item>
          <el-menu-item :route="{name: 'settings'}" index="settings">
            <i class="el-icon-setting" /> Settings
          </el-menu-item>
          <el-menu-item :route="{name: 'login'}" index="logout">
            <i class="el-icon-circle-close" /> Logout
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="bugReport" :route="{name: 'bugReport'}" style="float: right;">
            Bug Report
        </el-menu-item>
        <el-menu-item index="about" :route="{name: 'about'}" style="float: right;">
          About
        </el-menu-item>

      </el-menu>
    </el-header>

    <start-menu-container />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import logo from './logoV2.png'
import LocaleDropdown from "./../../LocaleDropdown"
import StartMenuContainer from "./StartMenuContainer"
import StartMenuAnimations from "./StartMenuAnimations"
export default {
  components: {
    LocaleDropdown,
    StartMenuContainer,
    LocaleDropdown
  },
  data() {
    return {
      logo: logo,
      appName: process.env.appName,
      apiUrl: process.env.apiUrl + '/storage/',
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

nav.component-navigation {
  margin-bottom: 0.75em;
  z-index: 20;
}
</style>
