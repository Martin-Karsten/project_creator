<template>
  <div>
    <div class="tabs">
      <ul>
        <li class="is-active">
          <router-link :to="{ name: 'settings.profile' }">
            Profile
          </router-link>
        </li>
        <li><a>Projects</a></li>
        <li><a>General</a></li>
      </ul>
    </div>

    <div>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  layout: "settings",
  middleware: "auth",

  computed: {
    tabs() {
      return [
        {
          icon: "user",
          name: this.$t("profile"),
          route: "settings.profile"
        },
        {
          icon: "lock",
          name: this.$t("password"),
          route: "settings.password"
        }
      ]
    }
  }
}
</script>

<style>
.settings-card .card-body {
  padding: 0;
}
</style>
