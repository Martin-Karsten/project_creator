<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#989da2"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="1">
      Processing Center
    </el-menu-item>

    <el-submenu index="2">
      <template slot="title">
        Workspace
      </template>
      <el-menu-item index="2-1">
        item one
      </el-menu-item>
      <el-menu-item index="2-2">
        item two
      </el-menu-item>
      <el-menu-item index="2-3">
        item three
      </el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">
          item four
        </template>
        >
        <el-menu-item index="2-4-1">
          item one
        </el-menu-item>
        <el-menu-item index="2-4-2">
          item two
        </el-menu-item>
        <el-menu-item index="2-4-3">
          item three
        </el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-submenu v-if="user" index="3" style="float: right;">
      <template slot="title">
        <i class="el-icon-menu" />
      </template>
      <el-menu-item index="3-1">
        <i class="el-icon-setting" /> Settings
      </el-menu-item>
      <el-menu-item index="3-2">
        <i class="el-icon-information" /> About
      </el-menu-item>
      <el-menu-item index="logout">
        <i class="el-icon-circle-close" /> Logout
      </el-menu-item>
    </el-submenu>

    <template v-else>
      <router-link
        :to="{ name: 'login' }"
        class="navbar-item"
        active-class="active"
      >
        {{ $t("login") }}
      </router-link>
      <router-link
        :to="{ name: 'register' }"
        class="navbar-item"
        active-class="active"
      >
        {{ $t("register") }}
      </router-link>
    </template>
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
    user: "auth/user"
  }),

  methods: {
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
/* .el-menu--horizontal .el-submenu > .el-menu {
  left: initial !important;
  right: 0;
} */

.navbar-right-dropdown {
  margin-left: 35rem;
}

.profile-photo-nav {
  width: 2rem;
  height: 2.5rem;
  border-radius: 15px;
  margin-right: 0.5rem;
}

div.is-right {
  font-size: 18px;
}
</style>
