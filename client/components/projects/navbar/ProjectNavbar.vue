<template>
    <div>
        <nav class="navbar component-navigation" role="navigation" aria-label="component navigation">

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                <locale-dropdown/>
                <a class="navbar-item" @click="saveProject">
                    SAVE
                </a>
                <a class="navbar-item" @click="toStartMenu">
                    START
                </a>

                <a class="navbar-item" @click="toStartMenuAnimations">
                    ANIMATIONS
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                    More
                    </a>

                    <div class="navbar-dropdown">
                    <a class="navbar-item">
                        About
                    </a>
                    <a class="navbar-item">
                        Jobs
                    </a>
                    <a class="navbar-item">
                        Contact
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item">
                        Report an issue
                    </a>
                    </div>
                </div>
                </div>

    <div class="navbar-end">
      <!-- Authenticated -->
      <div class="navbar-item has-dropdown is-hoverable">
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
    </div>
            </div>
        </nav>
        <!-- <start-menu v-show="showStartMenu"></start-menu> -->
        <start-menu-container></start-menu-container>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from '../../LocaleDropdown'
import StartMenuContainer from './StartMenuContainer'
import StartMenuAnimations from './StartMenuAnimations'
export default {
    components: {
        LocaleDropdown,
        StartMenuContainer
    },
    data(){
        return{
            appName: process.env.appName,
            showStartMenu: true
        }
    },

    computed: mapGetters({
        user: 'auth/user'
    }),
    
    methods: {
        activateStartMenu(){
            if(this.showStartMenu)
                this.showStartMenu = false
            else
                this.showStartMenu = true
        },
        saveProject(){

        },
        toStartMenu(){
            let payload = {name: 'StartMenuDefault'}
            this.$store.dispatch('StartMenus/StartMenu/openStartMenu', payload)
        },
        toStartMenuAnimations(){
            let payload = {name: 'StartMenuAnimations'}
            this.$store.dispatch('StartMenus/StartMenu/openStartMenu',  payload)
        },
    }
}
</script>

<style>
.profile-photo-nav {
  width: 2rem;
  height: 2.5rem;
  border-radius: 15px;
  margin-right: 0.5rem;
}

nav.component-navigation{
    margin-bottom: 0.75em;
    z-index: 20;
}
</style>
