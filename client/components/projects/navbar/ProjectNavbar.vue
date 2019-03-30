<template>
    <div>
        <nav class="navbar component-navigation" role="navigation" aria-label="component navigation">

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                <a class="navbar-item" @click="saveProject">
                    SAVE
                </a>
                <a class="navbar-item">
                    START
                </a>

                <a class="navbar-item">
                    Documentation
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

                </div>
            </div>
        </nav>
        <start-menu v-show="showStartMenu"></start-menu>
    </div>
</template>


<script>
import StartMenu from './StartMenu'
export default {
    components: {
        'startMenu' : StartMenu
    },
    data(){
        return{
            showStartMenu: true
        }
    },
    methods: {
        activateStartMenu(){
            if(this.showStartMenu)
                this.showStartMenu = false
            else
                this.showStartMenu = true
        },
        saveProject(){

        }
    }
}
</script>

<style>
nav.component-navigation{
    /* margin-bottom: 20px; */
    z-index: 30;
}
</style>
