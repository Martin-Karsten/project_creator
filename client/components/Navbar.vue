<template>
  <el-menu 
    :router="true"
    :default-active="activeIndex"
    mode="horizontal"
    background-color="#e6e6e6"
    text-color="#303133"
    active-text-color="rgb(247, 247, 247, 1)"
    @select="handleSelect"
  >


    <el-submenu v-if="user" index="3" style="float: right;">
      <template slot="title">
        <img class="navbar-profile-image" :src="'http://localhost:8000/storage/' + this.user.avatar" alt="">
      </template>
      <el-menu-item :route="{name: 'home'}" index="settings">
        <i class="el-icon-document-copy" /> Projects
      </el-menu-item>
      <el-menu-item index="settings">
        <i class="el-icon-setting" /> Settings
      </el-menu-item>
      <el-menu-item :route="{name: 'login'}" index="logout">
        <i class="el-icon-circle-close" /> Logout
      </el-menu-item>
    </el-submenu>

    <template v-else>
      <el-menu-item index="register" :route="{name: 'register'}" style="float: right;">
        {{ $t("register") }}
      </el-menu-item>

      <el-menu-item index="login" :route="{name: 'login'}" style="float: right;">
        {{ $t("login") }}      
      </el-menu-item>
    </template>

    <el-menu-item index="home" :route="getHomeRoute()">
      <img class="navbar-logo" src="http://localhost:8000/storage/images/logo.png" >
    </el-menu-item>
    <el-menu-item index="bugReport" :route="{name: 'bugReport'}" style="float: right;">
        Bug Report
    </el-menu-item>
    <el-menu-item index="about" :route="{name: 'about'}" style="float: right;">
      About
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex"
import LocaleDropdown from "./LocaleDropdown"

export default {
  components: {
    LocaleDropdown
  },

  data: () => ({
    activeIndex: "1",
    appName: process.env.appName
  }),

  computed: mapGetters({
    user: "auth/user",
    authenticated: "auth/check"
  }),

  methods: {
    getHomeRoute(){
      if(this.user)
        return {name: 'home'}
      else
        return {name: 'welcome'}
    },
    handleSelect(key, keyPath) {
      switch(key){
        case 'logout':
        this.logout()
      }
    },
    async logout() {
      // Log out the user.
      await this.$store.dispatch("auth/logout")

      // Redirect to login.
      this.$router.push({ name: "login" })
    }
  }
}
</script>

<style>

.navbar-right-dropdown {
  margin-left: 35rem;
}

img.navbar-logo{
  box-sizing: border-box;
  width: 4rem;
  height: 100%;
  max-width: 4rem;
  max-height: 100%;
  border-radius: 25px;
}

img.navbar-profile-image {
  width: 2.5rem;
  height: 2.5rem;
  max-width: 2.5rem;
  max-height: 2.5rem;
  border-radius: 25px;

}

div.is-right {
  font-size: 18px;
}
</style>
