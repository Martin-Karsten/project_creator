<template>
    <el-container class="create-project">
        <el-aside>
            <sidebar @clicked="activateAnimationList" v-show="true"/>
        </el-aside>

        <transition name="fade" mode="in-out">
            <el-aside  class="animation-list" width="200px" v-show="false">
                <animation-list></animation-list>
            </el-aside>
        </transition>

        <transition name="fade">
            <el-aside class="component-scroller" width="200px" v-show="true">
                <component-scroller></component-scroller>
            </el-aside>
        </transition>

        <project v-show="true"/>

        <template v-if="editContainer.activated">
            <edit-container v-show="editContainer.activated" ></edit-container>
        </template>
    </el-container>
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
        onClickChild(){
            console.log('yes!')
        },
        closeContextMenu(){
            console.log('close')
            this.$store.dispatch('ContextMenus/ContextMenu/closeContextMenu')
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

.create-project{
    height: 83.7vh;
}

.main-sidebar{
    position: relative;
    border-right: 1px black solid;
}

.show-scroller-chevron {
    cursor: pointer;
}

</style>
