<template>
    <div class="container-fluid create-project" @click="closeContextMenu">
        <div class="columns">
            <sidebar class="column side is-3 main-sidebar" @clicked="activateAnimationList" v-show="true"/>

            <transition name="fade" mode="in-out">
            <div class="column is-1 animation-list" v-show="showAnimation">
                <animation-list></animation-list>
            </div>
            </transition>

            <transition name="fade">
            <div class="column is-1 scroller"  v-show="sidebar.scrollerActivated">
                <component-scroller></component-scroller>
            </div>
            </transition>

            <project class="column" v-show="true"/>
            
        </div>
            <edit-container v-show="editContainer.activated" ></edit-container>

    </div> 
</template>

<script>
import Project from '../../components/projects/Project'
import EditContainer from '../../components/projects/edit_menu/EditContainer'
import Sidebar from '../../components/projects/sidebar/Sidebar'
import ComponentScroller from '../../components/projects/sidebar/ComponentScroller'
import AnimationList from '../../components/projects/sidebar/animation/AnimationList'

import { mapGetters } from 'vuex'

export default {
    layout: 'project/project-default',
    middleware: 'auth',

    components: {
    Project,
    Sidebar,
    ComponentScroller,
    EditContainer,
    AnimationList
    },
    data(){
        return {
            activated : false,
            showAnimation: false,
        }
    },
    computed: {
        ...mapGetters({
            sidebar: 'Sidebar/getSidebar',
            editContainer: 'EditContainer/getEditContainer',
            currentMode: 'PresentationMode/getCurrentMode'
        })
    },
    methods: {
        closeContextMenu(){
            this.$store.dispatch('Contextmenus/ContextMenu/closeContextMenu')
        },
        activateScroller(value) {
            this.activated = value
        },
        activateAnimationList(value){
            this.showAnimation = value
        }
    }
}
</script>

<style>

.main-sidebar{
    position: relative;
    border-right: 1px black solid;
}

div.animation-list{
    border-right: black 1px solid;
}

div.scroller {
    overflow-y: overlay;
    padding-left: 0;
    height: 710px;
}

.show-scroller-chevron {
    cursor: pointer;
}

</style>
