<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
     <router-link :to="{ name: user ? 'home' : 'welcome' }" class="navbar-item">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </router-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">

    <div class="navbar-start">
      <locale-dropdown/>
    </div>

    <div class="navbar-end">
      <!-- Authenticated -->
      <div v-if="user" class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          <img :src="user.photo_url" class="rounded-circle profile-photo-nav">
            {{ user.first_name }}
        </a>

        <div class="navbar-dropdown is-right">
            <router-link :to="{ name: 'settings.project.projects' }" class="navbar-item">
              Projects
            </router-link>
            <router-link :to="{ name: 'settings.profile' }" class="navbar-item">
              <fa icon="cogs" fixed-width/>
              {{ $t('settings') }}
            </router-link>
          <hr class="navbar-divider">
          <a class="navbar-item" @click.prevent="logout">
            <fa icon="sign-out-alt" fixed-width/>
            {{ $t('logout') }}
          </a>
        </div>
      </div>
      <!-- Guest -->
      <template v-else>
        <router-link :to="{ name: 'login' }" class="navbar-item" active-class="active">
          {{ $t('login') }}
        </router-link>
        <router-link :to="{ name: 'register' }" class="navbar-item" active-class="active">
          {{ $t('register') }}
        </router-link>
      </template>
    </div>

    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
  components: {
    LocaleDropdown
  },

  data: () => ({
    appName: process.env.appName
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
.profile-photo-nav {
  width: 2rem;
  height: 2.5rem;
  border-radius: 15px;
  margin-right: 0.5rem;
}

div.is-right{
  font-size: 18px;
}
</style>
